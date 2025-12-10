import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
import { $ as $$ } from './CookieConsent_D7ipi_f1.mjs';

const $$Astro = createAstro("https://api.bmcpro.co.mz");
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "briefcase", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path> <rect width="20" height="14" x="2" y="6" rx="2"></rect> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Briefcase.astro", void 0);

export { $$Briefcase as $ };
