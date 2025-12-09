import type { APIRoute } from 'astro';
import { EVENTS, trackEvent } from '../../lib/analytics';
import { sendContactConfirmation, sendContactNotification } from '../../lib/email';
import supabase from '../../lib/supabase';
import { checkRateLimit, isValidEmail, sanitizeInput } from '../../lib/utils';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const ip = request.headers.get('x-forwarded-for') || 
	           request.headers.get('x-real-ip') || 
	           'unknown';
	const userAgent = request.headers.get('user-agent') || undefined;

	try {
		// Rate limiting
		if (!checkRateLimit(ip, 5, 60000)) {
			await trackEvent({
				event: EVENTS.CONTACT_FORM_ERROR,
				ip,
				userAgent,
				metadata: { reason: 'rate_limit' }
			});

			return new Response(
				JSON.stringify({ 
					success: false, 
					error: 'Muitas tentativas. Por favor, aguarde um momento antes de tentar novamente.' 
				}),
				{
					status: 429,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		const data = await request.json();
		const { name, email, phone, message } = data;

		// Track form submission attempt
		await trackEvent({
			event: EVENTS.CONTACT_FORM_SUBMIT,
			ip,
			userAgent,
			page: '/contact'
		});

		// Validação básica
		if (!name || !email || !message) {
			return new Response(
				JSON.stringify({ 
					success: false, 
					error: 'Por favor, preencha todos os campos obrigatórios.' 
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		// Sanitizar inputs
		const sanitizedName = sanitizeInput(name);
		const sanitizedEmail = sanitizeInput(email).toLowerCase();
		const sanitizedPhone = phone ? sanitizeInput(phone) : null;
		const sanitizedMessage = sanitizeInput(message);

		// Validação de email
		if (!isValidEmail(sanitizedEmail)) {
			return new Response(
				JSON.stringify({ 
					success: false, 
					error: 'Por favor, insira um email válido.' 
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		// Validação de tamanho
		if (sanitizedName.length < 2 || sanitizedName.length > 100) {
			return new Response(
				JSON.stringify({ 
					success: false, 
					error: 'O nome deve ter entre 2 e 100 caracteres.' 
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		if (sanitizedMessage.length < 10 || sanitizedMessage.length > 2000) {
			return new Response(
				JSON.stringify({ 
					success: false, 
					error: 'A mensagem deve ter entre 10 e 2000 caracteres.' 
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		// Salvar na base de dados (Supabase)
		const { data: contact, error: insertError } = await supabase
			.from('contacts')
			.insert({
				name: sanitizedName,
				email: sanitizedEmail,
				phone: sanitizedPhone,
				message: sanitizedMessage,
				ip: ip,
				status: 'NEW'
			})
			.select()
			.single();

		if (insertError || !contact) {
			throw new Error(insertError?.message || 'Failed to save contact');
		}

		// Preparar dados para email
		const contactData = {
			name: sanitizedName,
			email: sanitizedEmail,
			phone: sanitizedPhone,
			message: sanitizedMessage,
			timestamp: contact.created_at,
			ip: ip
		};

		// Enviar emails (não bloquear resposta se falhar)
		Promise.all([
			sendContactNotification(contactData),
			sendContactConfirmation(contactData)
		]).catch(err => console.error('Erro ao enviar emails:', err));

		// Track success
		await trackEvent({
			event: EVENTS.CONTACT_FORM_SUCCESS,
			ip,
			userAgent,
			page: '/contact',
			metadata: { contactId: contact.id }
		});

		return new Response(
			JSON.stringify({ 
				success: true, 
				message: 'Mensagem enviada com sucesso! Entraremos em contacto em breve.' 
			}),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}
		);

	} catch (error) {
		console.error('Erro ao processar contacto:', error);

		await trackEvent({
			event: EVENTS.CONTACT_FORM_ERROR,
			ip,
			userAgent,
			metadata: { error: String(error) }
		});

		return new Response(
			JSON.stringify({ 
				success: false, 
				error: 'Ocorreu um erro ao processar a sua mensagem. Por favor, tente novamente mais tarde.' 
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
};
