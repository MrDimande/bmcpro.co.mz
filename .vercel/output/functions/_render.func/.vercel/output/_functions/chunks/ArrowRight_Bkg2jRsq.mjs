import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
import { $ as $$ } from './CookieConsent_D7ipi_f1.mjs';

const $$Astro = createAstro("https://api.bmcpro.co.mz");
const $$ArrowRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/ArrowRight.astro", void 0);

export { $$ArrowRight as $ };
