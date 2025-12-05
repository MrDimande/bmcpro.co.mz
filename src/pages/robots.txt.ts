export async function GET() {
	const body = `
User-agent: *
Allow: /

Sitemap: https://bmcpro.co.mz/sitemap.xml
`.trimStart();

	return new Response(body, {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
}


