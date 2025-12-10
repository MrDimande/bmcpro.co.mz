import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_ByFlOtE9.mjs';
import { manifest } from './manifest_ByfVvsG5.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/api/admin/contacts.astro.mjs');
const _page4 = () => import('./pages/api/admin/dashboard.astro.mjs');
const _page5 = () => import('./pages/api/auth/login.astro.mjs');
const _page6 = () => import('./pages/api/auth/me.astro.mjs');
const _page7 = () => import('./pages/api/contact.astro.mjs');
const _page8 = () => import('./pages/api/health.astro.mjs');
const _page9 = () => import('./pages/api/test.astro.mjs');
const _page10 = () => import('./pages/aviso-legal.astro.mjs');
const _page11 = () => import('./pages/blog/estrategias-crescimento-empresarial-2024.astro.mjs');
const _page12 = () => import('./pages/blog/gestao-equipas-multidisciplinares.astro.mjs');
const _page13 = () => import('./pages/blog/inovacao-digital-transformando-processos.astro.mjs');
const _page14 = () => import('./pages/blog/planeamento-territorial-desenvolvimento-sustentavel.astro.mjs');
const _page15 = () => import('./pages/blog.astro.mjs');
const _page16 = () => import('./pages/contact.astro.mjs');
const _page17 = () => import('./pages/en.astro.mjs');
const _page18 = () => import('./pages/politica-cookies.astro.mjs');
const _page19 = () => import('./pages/politica-privacidade.astro.mjs');
const _page20 = () => import('./pages/proposta.astro.mjs');
const _page21 = () => import('./pages/robots.txt.astro.mjs');
const _page22 = () => import('./pages/services.astro.mjs');
const _page23 = () => import('./pages/sitemap.xml.astro.mjs');
const _page24 = () => import('./pages/termos-condicoes.astro.mjs');
const _page25 = () => import('./pages/why-us.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/index.astro", _page2],
    ["src/pages/api/admin/contacts.ts", _page3],
    ["src/pages/api/admin/dashboard.ts", _page4],
    ["src/pages/api/auth/login.ts", _page5],
    ["src/pages/api/auth/me.ts", _page6],
    ["src/pages/api/contact.ts", _page7],
    ["src/pages/api/health.ts", _page8],
    ["src/pages/api/test.ts", _page9],
    ["src/pages/aviso-legal.astro", _page10],
    ["src/pages/blog/estrategias-crescimento-empresarial-2024.astro", _page11],
    ["src/pages/blog/gestao-equipas-multidisciplinares.astro", _page12],
    ["src/pages/blog/inovacao-digital-transformando-processos.astro", _page13],
    ["src/pages/blog/planeamento-territorial-desenvolvimento-sustentavel.astro", _page14],
    ["src/pages/blog/index.astro", _page15],
    ["src/pages/contact.astro", _page16],
    ["src/pages/en/index.astro", _page17],
    ["src/pages/politica-cookies.astro", _page18],
    ["src/pages/politica-privacidade.astro", _page19],
    ["src/pages/proposta.astro", _page20],
    ["src/pages/robots.txt.ts", _page21],
    ["src/pages/services.astro", _page22],
    ["src/pages/sitemap.xml.ts", _page23],
    ["src/pages/termos-condicoes.astro", _page24],
    ["src/pages/why-us.astro", _page25],
    ["src/pages/index.astro", _page26]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "944ddf59-a3c5-4fa1-bd91-2d662629282d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
