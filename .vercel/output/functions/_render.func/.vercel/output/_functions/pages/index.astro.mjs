/* empty css                                 */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
import { a as $$Layout, b as $$Header, c as $$Footer, d as $$CookieConsent } from '../chunks/CookieConsent_D7ipi_f1.mjs';
import { S as StarfieldBackground, $ as $$Hero, a as $$WhyChooseUs, b as $$OurProcess, c as $$OurServices, d as $$StatsSection, e as $$EcosystemSection, f as $$ProjectsSection, g as $$BlogSection, h as $$Rocket } from '../chunks/StarfieldBackground_sOAaBO-d.mjs';
import { $ as $$BackToTop } from '../chunks/BackToTop_DCzemR9v.mjs';
/* empty css                                 */
/* empty css                                 */
import { $ as $$ArrowRight } from '../chunks/ArrowRight_Bkg2jRsq.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "BMC Pro Services \u2013 Business Management Consultant" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="homepage-unified-bg relative"> <!-- Deep Black Base Background --> <div class="fixed inset-0 bg-black -z-20"></div> <!-- 3D Starfield Background - covers entire page --> ${renderComponent($$result2, "StarfieldBackground", StarfieldBackground, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/project-x/bmcpro.co.mz/src/components/StarfieldBackground.tsx", "client:component-export": "default" })} <!-- Subtle Orbs overlay with scroll parallax --> <div class="fixed inset-0 pointer-events-none z-[1]"> <div class="parallax-orb absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" data-depth="0.15"></div> <div class="parallax-orb absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/4 rounded-full blur-3xl" data-depth="0.25"></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/3 rounded-full blur-3xl animate-pulse"></div> </div> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "OurProcess", $$OurProcess, {})} ${renderComponent($$result2, "OurServices", $$OurServices, {})} ${renderComponent($$result2, "StatsSection", $$StatsSection, {})} ${renderComponent($$result2, "EcosystemSection", $$EcosystemSection, {})} ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, {})} ${renderComponent($$result2, "BlogSection", $$BlogSection, {})} <!-- Intermediate CTA --> <section class="py-20 relative overflow-hidden"> <div class="container mx-auto px-6 relative z-10"> <div class="max-w-4xl mx-auto text-center"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6"> ${renderComponent($$result2, "Rocket", $$Rocket, { "class": "w-4 h-4 text-gold-500" })} <span class="text-sm font-semibold text-gold-500">Pronto para Começar?</span> </div> <h2 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"> <span class="text-white">Transforme a Sua</span> <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400">Organização Hoje</span> </h2> <p class="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
Descubra como a BMC Pro Services pode ajudar a impulsionar o crescimento da sua empresa com soluções multidisciplinares e inovadoras.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-4"> <a href="/contact" class="group px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold text-lg hover:glow-gold-lg transition-all transform hover:scale-105 flex items-center gap-2">
Fale Connosco
${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "w-5 h-5 group-hover:translate-x-1 transition-transform" })} </a> <a href="/services" class="px-8 py-4 rounded-xl border-2 border-gold-500/50 text-gold-500 font-semibold text-lg hover:bg-gold-500/10 hover:border-gold-500 transition-all transform hover:scale-105">
Explorar Serviços
</a> </div> <ul class="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 justify-center"> <li class="flex items-center gap-2"> <span class="text-gold-500">✓</span> <span>Resposta média em 1–2 dias úteis</span> </li> <li class="flex items-center gap-2"> <span class="text-gold-500">✓</span> <span>Proposta personalizada para o seu contexto</span> </li> <li class="flex items-center gap-2"> <span class="text-gold-500">✓</span> <span>Equipa multidisciplinar dedicada</span> </li> </ul> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "BackToTop", $$BackToTop, {})} ${renderComponent($$result2, "CookieConsent", $$CookieConsent, {})} ` })}  `;
}, "C:/project-x/bmcpro.co.mz/src/pages/index.astro", void 0);

const $$file = "C:/project-x/bmcpro.co.mz/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
