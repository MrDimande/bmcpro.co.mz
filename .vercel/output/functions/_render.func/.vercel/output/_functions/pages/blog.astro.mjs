/* empty css                                 */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
import { a as $$Layout, b as $$Header, c as $$Footer, d as $$CookieConsent } from '../chunks/CookieConsent_D7ipi_f1.mjs';
import { $ as $$BackToTop } from '../chunks/BackToTop_DCzemR9v.mjs';
/* empty css                                 */
/* empty css                                 */
import { $ as $$TrendingUp } from '../chunks/TrendingUp_CIWKZRu_.mjs';
import { $ as $$Lightbulb } from '../chunks/Lightbulb_CgodpHKe.mjs';
import { $ as $$Target } from '../chunks/Target_D6WnkH8t.mjs';
import { $ as $$Users } from '../chunks/Users_DcTBIYxJ.mjs';
import { $ as $$Calendar } from '../chunks/Calendar_BCAgUDFq.mjs';
import { $ as $$Clock } from '../chunks/Clock_kehpeOds.mjs';
import { $ as $$ArrowRight } from '../chunks/ArrowRight_Bkg2jRsq.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      slug: "estrategias-crescimento-empresarial-2024",
      icon: $$TrendingUp,
      title: "Estrat\xE9gias de Crescimento Empresarial em 2024",
      excerpt: "Descubra as principais tend\xEAncias e estrat\xE9gias que est\xE3o impulsionando o crescimento das empresas em Mo\xE7ambique e al\xE9m.",
      category: "Consultoria Estrat\xE9gica",
      date: "15 Jan 2024",
      readTime: "5 min"
    },
    {
      slug: "inovacao-digital-transformando-processos",
      icon: $$Lightbulb,
      title: "Inova\xE7\xE3o Digital: Transformando Processos Empresariais",
      excerpt: "Como a digitaliza\xE7\xE3o de processos pode aumentar a efici\xEAncia operacional e reduzir custos nas organiza\xE7\xF5es.",
      category: "Inova\xE7\xE3o Digital",
      date: "10 Jan 2024",
      readTime: "7 min"
    },
    {
      slug: "planeamento-territorial-desenvolvimento-sustentavel",
      icon: $$Target,
      title: "Planeamento Territorial e Desenvolvimento Sustent\xE1vel",
      excerpt: "A import\xE2ncia do ordenamento territorial para o desenvolvimento urbano sustent\xE1vel e melhoria da qualidade de vida.",
      category: "Planeamento Territorial",
      date: "5 Jan 2024",
      readTime: "6 min"
    },
    {
      slug: "gestao-equipas-multidisciplinares",
      icon: $$Users,
      title: "Gest\xE3o de Equipas Multidisciplinares: Desafios e Oportunidades",
      excerpt: "Estrat\xE9gias eficazes para liderar e coordenar equipas diversas em projetos complexos de consultoria.",
      category: "Gest\xE3o",
      date: "28 Dez 2023",
      readTime: "8 min"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog & Not\xEDcias - BMC Pro Services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <section class="py-20 relative overflow-hidden pt-32"> <div class="absolute inset-0 gradient-diagonal"></div> <div class="container mx-auto px-6 relative z-10"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold mb-4"> <span class="text-white">Blog &</span> <span class="text-gold-500"> Notícias</span> </h1> <p class="text-lg text-gray-400 max-w-2xl mx-auto">
Artigos, insights e tendências sobre gestão, consultoria e inovação empresarial.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> ${articles.map((article, index) => {
    const IconComponent = article.icon;
    return renderTemplate`<article class="glass-dark rounded-3xl overflow-hidden hover:glow-gold transition-all transform hover:scale-105 border border-gold-500/20 flex flex-col animate-on-scroll group"${addAttribute(`animation-delay: ${index * 0.1}s;`, "style")}> <div class="p-6 pb-4"> <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-600/30 to-gold-500/10 flex items-center justify-center mb-4 glow-gold"> ${renderComponent($$result2, "IconComponent", IconComponent, { "class": "w-6 h-6 text-gold-500", "stroke-width": "1.5" })} </div> <span class="text-xs text-gold-500 font-medium uppercase tracking-wider">${article.category}</span> </div> <div class="px-6 pb-6 flex-grow flex flex-col"> <h3 class="text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors"> ${article.title} </h3> <p class="text-gray-400 text-sm leading-relaxed mb-4 flex-grow"> ${article.excerpt} </p> <div class="flex items-center justify-between text-xs text-gray-500 mb-4"> <div class="flex items-center gap-1"> ${renderComponent($$result2, "Calendar", $$Calendar, { "class": "w-3 h-3" })} ${article.date} </div> <div class="flex items-center gap-1"> ${renderComponent($$result2, "Clock", $$Clock, { "class": "w-3 h-3" })} ${article.readTime} </div> </div> <a${addAttribute(`/blog/${article.slug}`, "href")} class="flex items-center gap-2 text-gold-500 hover:text-gold-400 font-medium text-sm transition-colors group/link">
Ler artigo completo
${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "w-4 h-4 group-hover/link:translate-x-1 transition-transform" })} </a> </div> </article>`;
  })} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "BackToTop", $$BackToTop, {})} ${renderComponent($$result2, "CookieConsent", $$CookieConsent, {})} ` })}  `;
}, "C:/project-x/bmcpro.co.mz/src/pages/blog/index.astro", void 0);

const $$file = "C:/project-x/bmcpro.co.mz/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
