const baseUrl = 'https://bmcpro.co.mz';

const staticRoutes = [
	'/',
	'/about',
	'/services',
	'/why-us',
	'/contact',
	'/proposta',
	'/blog'
];

const blogPosts = [
	'/blog/estrategias-crescimento-empresarial-2024',
	'/blog/gestao-equipas-multidisciplinares',
	'/blog/inovacao-digital-transformando-processos',
	'/blog/planeamento-territorial-desenvolvimento-sustentavel'
];

export async function GET() {
	const pages = [...staticRoutes, ...blogPosts];

	const urls = pages
		.map(
			(path) => `
		<url>
			<loc>${baseUrl}${path}</loc>
		</url>`
		)
		.join('');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
	${urls}
</urlset>`;

	return new Response(body, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}


