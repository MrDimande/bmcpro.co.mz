import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
import { $ as $$ } from './CookieConsent_D7ipi_f1.mjs';

const $$Astro$1 = createAstro("https://api.bmcpro.co.mz");
const $$Send = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Send;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "send", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path> <path d="m21.854 2.147-10.94 10.939"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Send.astro", void 0);

const $$Astro = createAstro("https://api.bmcpro.co.mz");
const $$User = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$User;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "user", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/User.astro", void 0);

export { $$User as $, $$Send as a };
