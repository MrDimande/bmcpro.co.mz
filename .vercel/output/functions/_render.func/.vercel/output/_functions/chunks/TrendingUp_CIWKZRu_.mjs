import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
import { $ as $$ } from './CookieConsent_D7ipi_f1.mjs';

const $$Astro = createAstro("https://api.bmcpro.co.mz");
const $$TrendingUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrendingUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "trending-up", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 7h6v6"></path> <path d="m22 7-8.5 8.5-5-5L2 17"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/TrendingUp.astro", void 0);

export { $$TrendingUp as $ };
