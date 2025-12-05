import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	try {
		// Test environment variables
		const envTest = {
			SUPABASE_URL: process.env.SUPABASE_URL ? 'SET' : 'NOT SET',
			SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY ? 'SET' : 'NOT SET',
			JWT_SECRET: process.env.JWT_SECRET ? 'SET' : 'NOT SET',
		};

		// Test Supabase connection
		const { createClient } = await import('@supabase/supabase-js');
		const supabase = createClient(
			process.env.SUPABASE_URL || '',
			process.env.SUPABASE_ANON_KEY || ''
		);
		
		const { data, error } = await supabase.from('users').select('email').limit(1);

		return new Response(
			JSON.stringify({
				success: true,
				env: envTest,
				supabase: {
					connected: !error,
					error: error?.message,
					data: data
				}
			}, null, 2),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	} catch (e) {
		return new Response(
			JSON.stringify({
				success: false,
				error: e instanceof Error ? e.message : String(e),
				stack: e instanceof Error ? e.stack : undefined
			}, null, 2),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
};
