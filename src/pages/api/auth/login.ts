import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const ip = request.headers.get('x-forwarded-for') || 
	           request.headers.get('x-real-ip') || 
	           'unknown';

	try {
		const { login } = await import('../../../lib/auth');
		const { EVENTS, trackEvent } = await import('../../../lib/analytics');
		
		const data = await request.json();
		const { email, password } = data;

		if (!email || !password) {
			return new Response(
				JSON.stringify({ 
					success: false, 
					error: 'Email e password são obrigatórios.' 
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		const result = await login(email, password);

		if (result.success) {
			await trackEvent({
				event: EVENTS.ADMIN_LOGIN,
				ip,
				metadata: { userId: result.user?.id }
			});
		}

		return new Response(
			JSON.stringify(result),
			{
				status: result.success ? 200 : 401,
				headers: { 'Content-Type': 'application/json' }
			}
		);

	} catch (error) {
		console.error('Login error:', error);
		console.error('Error stack:', error instanceof Error ? error.stack : 'No stack');
		return new Response(
			JSON.stringify({ 
				success: false, 
				error: 'Erro interno do servidor.',
				debug: error instanceof Error ? error.message : String(error)
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
};
