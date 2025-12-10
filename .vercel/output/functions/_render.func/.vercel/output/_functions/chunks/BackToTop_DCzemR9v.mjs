import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
/* empty css                         */
import { $ as $$ } from './CookieConsent_D7ipi_f1.mjs';

const $$Astro = createAstro("https://api.bmcpro.co.mz");
const $$ArrowUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArrowUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-up", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m5 12 7-7 7 7"></path> <path d="M12 19V5"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/ArrowUp.astro", void 0);

const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="back-to-top" class="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 shadow-lg hover:glow-gold-lg transition-all transform hover:scale-110 opacity-0 pointer-events-none flex items-center justify-center group" aria-label="Voltar ao topo" data-astro-cid-wlspcwf4> ${renderComponent($$result, "ArrowUp", $$ArrowUp, { "class": "w-6 h-6 group-hover:-translate-y-1 transition-transform", "stroke-width": "2.5", "data-astro-cid-wlspcwf4": true })} </button>  `;
}, "C:/project-x/bmcpro.co.mz/src/components/BackToTop.astro", void 0);

export { $$BackToTop as $ };
