import type { APIRoute } from 'astro';
import { verifyAuth } from '../../../lib/auth';
import supabase from '../../../lib/supabase';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
	try {
		const payload = await verifyAuth(request);

		if (!payload) {
			return new Response(
				JSON.stringify({ 
					success: false, 
					error: 'Não autorizado.' 
				}),
				{
					status: 401,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		const { data: user, error } = await supabase
			.from('users')
			.select('id, email, name, role, last_login')
			.eq('id', payload.userId)
			.single();

		if (error || !user) {
			return new Response(
				JSON.stringify({ 
					success: false, 
					error: 'Utilizador não encontrado.' 
				}),
				{
					status: 404,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		return new Response(
			JSON.stringify({ 
				success: true, 
				user: {
					id: user.id,
					email: user.email,
					name: user.name,
					role: user.role,
					lastLogin: user.last_login
				}
			}),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}
		);

	} catch (error) {
		console.error('Auth check error:', error);
		return new Response(
			JSON.stringify({ 
				success: false, 
				error: 'Erro interno do servidor.' 
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
};
