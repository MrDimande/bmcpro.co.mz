/**
 * Analytics Service
 * Rastreamento de eventos e submissões
 */

import supabase from './supabase';

export interface AnalyticsEvent {
	event: string;
	page?: string;
	userAgent?: string;
	ip?: string;
	referrer?: string;
	metadata?: Record<string, any>;
}

// Eventos predefinidos
export const EVENTS = {
	CONTACT_FORM_VIEW: 'contact_form_view',
	CONTACT_FORM_SUBMIT: 'contact_form_submit',
	CONTACT_FORM_SUCCESS: 'contact_form_success',
	CONTACT_FORM_ERROR: 'contact_form_error',
	PAGE_VIEW: 'page_view',
	ADMIN_LOGIN: 'admin_login',
	ADMIN_LOGOUT: 'admin_logout',
} as const;

/**
 * Registar evento de analytics
 */
export async function trackEvent(eventData: AnalyticsEvent): Promise<boolean> {
	try {
		const { error } = await supabase
			.from('analytics')
			.insert({
				event: eventData.event,
				page: eventData.page,
				user_agent: eventData.userAgent,
				ip: eventData.ip,
				referrer: eventData.referrer,
				metadata: eventData.metadata || {},
			});

		if (error) throw error;
		return true;
	} catch (error) {
		console.error('Error tracking event:', error);
		return false;
	}
}

/**
 * Obter estatísticas de contactos
 */
export async function getContactStats(days: number = 30) {
	const startDate = new Date();
	startDate.setDate(startDate.getDate() - days);
	const startDateISO = startDate.toISOString();

	// Total de contactos
	const { count: total } = await supabase
		.from('contacts')
		.select('*', { count: 'exact', head: true })
		.gte('created_at', startDateISO);

	// Por status
	const { data: contacts } = await supabase
		.from('contacts')
		.select('status')
		.gte('created_at', startDateISO);

	const byStatus: Record<string, number> = {};
	if (contacts) {
		contacts.forEach((c: { status: string }) => {
			byStatus[c.status] = (byStatus[c.status] || 0) + 1;
		});
	}

	// Por dia
	const { data: allContacts } = await supabase
		.from('contacts')
		.select('created_at')
		.gte('created_at', startDateISO)
		.order('created_at', { ascending: false });

	const byDayMap: Record<string, number> = {};
	if (allContacts) {
		allContacts.forEach((c: { created_at: string }) => {
			const date = c.created_at.split('T')[0];
			byDayMap[date] = (byDayMap[date] || 0) + 1;
		});
	}

	const byDay = Object.entries(byDayMap).map(([date, count]) => ({
		date: new Date(date),
		count
	}));

	return {
		total: total || 0,
		byStatus,
		byDay
	};
}

/**
 * Obter estatísticas de eventos
 */
export async function getEventStats(days: number = 30) {
	const startDate = new Date();
	startDate.setDate(startDate.getDate() - days);
	const startDateISO = startDate.toISOString();

	const { data: events } = await supabase
		.from('analytics')
		.select('event')
		.gte('created_at', startDateISO);

	const result: Record<string, number> = {};
	if (events) {
		events.forEach((e: { event: string }) => {
			result[e.event] = (result[e.event] || 0) + 1;
		});
	}

	return result;
}

/**
 * Obter resumo do dashboard
 */
export async function getDashboardSummary() {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const todayISO = today.toISOString();

	const [
		totalResult,
		newResult,
		todayResult,
		recentResult
	] = await Promise.all([
		supabase.from('contacts').select('*', { count: 'exact', head: true }),
		supabase.from('contacts').select('*', { count: 'exact', head: true }).eq('status', 'NEW'),
		supabase.from('contacts').select('*', { count: 'exact', head: true }).gte('created_at', todayISO),
		supabase.from('contacts')
			.select('id, name, email, status, created_at')
			.order('created_at', { ascending: false })
			.limit(5)
	]);

	return {
		totalContacts: totalResult.count || 0,
		newContacts: newResult.count || 0,
		todayContacts: todayResult.count || 0,
		recentContacts: recentResult.data || []
	};
}
