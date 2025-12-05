import type { APIRoute } from 'astro';
import { getContactStats, getDashboardSummary, getEventStats } from '../../../lib/analytics';
import { verifyAuth } from '../../../lib/auth';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
	try {
		const payload = await verifyAuth(request);

		if (!payload) {
			return new Response(
				JSON.stringify({ success: false, error: 'Não autorizado.' }),
				{ status: 401, headers: { 'Content-Type': 'application/json' } }
			);
		}

		const [summary, contactStats, eventStats] = await Promise.all([
			getDashboardSummary(),
			getContactStats(30),
			getEventStats(30)
		]);

		return new Response(
			JSON.stringify({
				success: true,
				data: {
					summary,
					contactStats,
					eventStats
				}
			}),
			{ status: 200, headers: { 'Content-Type': 'application/json' } }
		);

	} catch (error) {
		console.error('Error fetching dashboard:', error);
		return new Response(
			JSON.stringify({ success: false, error: 'Erro interno do servidor.' }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}
};
