import { a as createAstro, c as createComponent, b as renderTemplate, g as renderSlot, d as renderHead, e as addAttribute, m as maybeRenderHead, r as renderComponent, s as spreadAttributes } from './astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$f = createAstro("https://api.bmcpro.co.mz");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "BMC Pro Services \u2013 Consultoria multidisciplinar para o crescimento sustent\xE1vel de empresas e institui\xE7\xF5es em Mo\xE7ambique." } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="pt-PT"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"><meta name="generator"', '><!-- Open Graph / Facebook --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url" content="https://bmcpro.co.mz"><meta property="og:image" content="https://bmcpro.co.mz/Peculiarlogo.svg"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content="https://bmcpro.co.mz/Peculiarlogo.svg"><!-- JSON-LD Organization Schema --><script type="application/ld+json">\n			{\n				"@context": "https://schema.org",\n				"@type": "Organization",\n				"name": "BMC Pro Services",\n				"alternateName": "Business Management Consultant Pro Services",\n				"url": "https://bmcpro.co.mz",\n				"logo": "https://bmcpro.co.mz/Peculiarlogo.svg",\n				"email": "geral@bmcpro.co.mz",\n				"telephone": "+258 82 088 3478",\n				"address": {\n					"@type": "PostalAddress",\n					"streetAddress": "Avenida Julius Nyerere",\n					"addressLocality": "Maputo",\n					"addressCountry": "MZ"\n				}\n			}\n		<\/script><title>', "</title>", '</head> <body class="bg-black text-gray-100 antialiased"> ', " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/project-x/bmcpro.co.mz/src/layouts/Layout.astro", void 0);

const $$Astro$e = createAstro("https://api.bmcpro.co.mz");
const $$BMCLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$BMCLogo;
  const { class: className = "", size = 24 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")}${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <defs> <!-- Premium gold metallic gradient for circle --> <linearGradient id="goldCircle" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color:#ffd700;stop-opacity:1"></stop> <stop offset="25%" style="stop-color:#ffed4e;stop-opacity:1"></stop> <stop offset="50%" style="stop-color:#ffb800;stop-opacity:1"></stop> <stop offset="75%" style="stop-color:#e6a500;stop-opacity:1"></stop> <stop offset="100%" style="stop-color:#cc9300;stop-opacity:1"></stop> </linearGradient> <!-- Premium gold gradient for bars - vertical with shine --> <linearGradient id="goldBarGradient" x1="0%" y1="100%" x2="0%" y2="0%"> <stop offset="0%" style="stop-color:#996e00;stop-opacity:1"></stop> <stop offset="30%" style="stop-color:#cc9300;stop-opacity:1"></stop> <stop offset="50%" style="stop-color:#ffb800;stop-opacity:1"></stop> <stop offset="70%" style="stop-color:#ffd54d;stop-opacity:1"></stop> <stop offset="100%" style="stop-color:#ffed4e;stop-opacity:1"></stop> </linearGradient> <!-- Inner highlight for bars --> <linearGradient id="barHighlight" x1="0%" y1="0%" x2="0%" y2="100%"> <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:0.6"></stop> <stop offset="50%" style="stop-color:#ffed4e;stop-opacity:0.3"></stop> <stop offset="100%" style="stop-color:transparent;stop-opacity:0"></stop> </linearGradient> <!-- Shadow for depth --> <filter id="deepShadow" x="-100%" y="-100%" width="300%" height="300%"> <feGaussianBlur in="SourceAlpha" stdDeviation="2"></feGaussianBlur> <feOffset dx="1" dy="2" result="offsetblur"></feOffset> <feComponentTransfer> <feFuncA type="linear" slope="0.5"></feFuncA> </feComponentTransfer> <feMerge> <feMergeNode></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode> </feMerge> </filter> <!-- Inner shadow for circle depth --> <filter id="innerShadow"> <feGaussianBlur in="SourceAlpha" stdDeviation="1"></feGaussianBlur> <feOffset dx="0" dy="1"></feOffset> <feComponentTransfer> <feFuncA type="linear" slope="0.3"></feFuncA> </feComponentTransfer> </filter> <!-- Radial gradient for circle inner glow --> <radialGradient id="circleGlow" cx="50%" cy="50%"> <stop offset="0%" style="stop-color:#ffd700;stop-opacity:0.2"></stop> <stop offset="100%" style="stop-color:transparent;stop-opacity:0"></stop> </radialGradient> </defs> <!-- Inner glow for circle --> <circle cx="20" cy="20" r="15" fill="url(#circleGlow)"></circle> <!-- Outer circle - premium thick border with realistic 3D effect --> <circle cx="20" cy="20" r="16" fill="none" stroke="url(#goldCircle)" stroke-width="3.5" filter="url(#deepShadow)"></circle> <!-- Inner circle ring for depth --> <circle cx="20" cy="20" r="13.5" fill="none" stroke="url(#goldCircle)" stroke-width="0.8" opacity="0.4"></circle> <!-- Three premium ascending bars - CENTERED --> <g transform="translate(2, 0)"> <!-- Bar 1 - Shortest (left) --> <g filter="url(#deepShadow)"> <rect x="10" y="19" width="4" height="7" rx="2" fill="url(#goldBarGradient)"></rect> <ellipse cx="12" cy="19" rx="1.5" ry="0.8" fill="white" opacity="0.5"></ellipse> </g> <!-- Bar 2 - Medium (center) --> <g filter="url(#deepShadow)"> <rect x="15.5" y="14" width="4" height="12" rx="2" fill="url(#goldBarGradient)"></rect> <ellipse cx="17.5" cy="14" rx="1.5" ry="0.8" fill="white" opacity="0.5"></ellipse> </g> <!-- Bar 3 - Tallest (right) --> <g filter="url(#deepShadow)"> <rect x="21" y="9" width="4" height="17" rx="2" fill="url(#goldBarGradient)"></rect> <ellipse cx="23" cy="9" rx="1.5" ry="0.8" fill="white" opacity="0.5"></ellipse> </g> </g> </svg>`;
}, "C:/project-x/bmcpro.co.mz/src/components/BMCLogo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { label: "In\xEDcio", href: "/", active: true },
    { label: "Porqu\xEA N\xF3s", href: "/why-us" },
    { label: "Servi\xE7os", href: "/services" },
    { label: "Ecossistema", href: "/#ecosystem" },
    { label: "Processo", href: "/#process" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent" data-astro-cid-3ef6ksr2> <nav class="container mx-auto px-4 sm:px-6 flex items-center justify-between" data-astro-cid-3ef6ksr2> <!-- Logo --> <a href="/" class="flex items-center gap-2.5 group" data-astro-cid-3ef6ksr2> <div class="relative" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "BMCLogo", $$BMCLogo, { "class": "text-gold-500 group-hover:scale-105 transition-transform duration-300", "size": 38, "data-astro-cid-3ef6ksr2": true })} <!-- Subtle glow on hover --> <div class="absolute inset-0 bg-gold-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-3ef6ksr2></div> </div> <div class="flex flex-col" data-astro-cid-3ef6ksr2> <span class="text-lg font-bold text-gold-500 leading-none tracking-tight" data-astro-cid-3ef6ksr2>BMC Pro</span> <span class="text-[8px] text-gray-500 font-medium uppercase tracking-[0.15em] mt-0.5" data-astro-cid-3ef6ksr2>Business Management Consultant</span> </div> </a> <!-- Desktop Menu - Pill Container --> <div class="hidden lg:flex items-center" data-astro-cid-3ef6ksr2> <div class="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10" data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
    item.active ? "bg-white/10 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/5"
  ], "class:list")} data-astro-cid-3ef6ksr2> ${item.label} </a>`)} </div> </div> <!-- Right Side --> <div class="flex items-center gap-3" data-astro-cid-3ef6ksr2> <!-- Language Selector --> <div class="hidden md:flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>🇲🇿</span> <span data-astro-cid-3ef6ksr2>PT</span> </a> <a href="/en" class="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>🇬🇧</span> <span data-astro-cid-3ef6ksr2>EN</span> </a> </div> <!-- Contact Button --> <a href="/contact" class="hidden sm:inline-flex px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-dark-200 font-semibold text-xs sm:text-sm shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-300" data-astro-cid-3ef6ksr2>
Contact Us
</a> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10" aria-label="Toggle menu" data-astro-cid-3ef6ksr2> <span class="menu-line w-5 h-0.5 bg-gold-500 transition-all duration-300 origin-center" data-astro-cid-3ef6ksr2></span> <span class="menu-line w-5 h-0.5 bg-gold-500 transition-all duration-300" data-astro-cid-3ef6ksr2></span> <span class="menu-line w-5 h-0.5 bg-gold-500 transition-all duration-300 origin-center" data-astro-cid-3ef6ksr2></span> </button> </div> </nav> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 overflow-hidden" data-astro-cid-3ef6ksr2> <ul class="p-4 flex flex-col gap-1" data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(item.href, "href")}${addAttribute([
    "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
    item.active ? "bg-gold-500/20 text-gold-500" : "text-gray-300 hover:text-white hover:bg-white/5"
  ], "class:list")} data-astro-cid-3ef6ksr2> ${item.label} </a> </li>`)} <li class="mt-2 pt-2 border-t border-white/10" data-astro-cid-3ef6ksr2> <a href="/contact" class="block px-4 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-dark-200 font-semibold text-sm text-center" data-astro-cid-3ef6ksr2>
Contact Us
</a> </li> </ul> </div> </header>   `;
}, "C:/project-x/bmcpro.co.mz/src/components/Header.astro", void 0);

const $$Astro$d = createAstro("https://api.bmcpro.co.mz");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$c = createAstro("https://api.bmcpro.co.mz");
const $$Check = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Check;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 6 9 17l-5-5"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Check.astro", void 0);

const $$Astro$b = createAstro("https://api.bmcpro.co.mz");
const $$Cookie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Cookie;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "cookie", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path> <path d="M8.5 8.5v.01"></path> <path d="M16 15.5v.01"></path> <path d="M12 12v.01"></path> <path d="M11 17v.01"></path> <path d="M7 14v.01"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Cookie.astro", void 0);

const $$Astro$a = createAstro("https://api.bmcpro.co.mz");
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "facebook", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Facebook.astro", void 0);

const $$Astro$9 = createAstro("https://api.bmcpro.co.mz");
const $$FileText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FileText;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "file-text", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path> <path d="M14 2v5a1 1 0 0 0 1 1h5"></path> <path d="M10 9H8"></path> <path d="M16 13H8"></path> <path d="M16 17H8"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/FileText.astro", void 0);

const $$Astro$8 = createAstro("https://api.bmcpro.co.mz");
const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "instagram", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Instagram.astro", void 0);

const $$Astro$7 = createAstro("https://api.bmcpro.co.mz");
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "linkedin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect width="4" height="12" x="2" y="9"></rect> <circle cx="4" cy="4" r="2"></circle> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Linkedin.astro", void 0);

const $$Astro$6 = createAstro("https://api.bmcpro.co.mz");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path> <rect x="2" y="4" width="20" height="16" rx="2"></rect> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Mail.astro", void 0);

const $$Astro$5 = createAstro("https://api.bmcpro.co.mz");
const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/MapPin.astro", void 0);

const $$Astro$4 = createAstro("https://api.bmcpro.co.mz");
const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "phone", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Phone.astro", void 0);

const $$Astro$3 = createAstro("https://api.bmcpro.co.mz");
const $$Scale = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Scale;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "scale", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 3v18"></path> <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path> <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path> <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path> <path d="M7 21h10"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Scale.astro", void 0);

const $$Astro$2 = createAstro("https://api.bmcpro.co.mz");
const $$Settings = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Settings;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "settings", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path> <circle cx="12" cy="12" r="3"></circle> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Settings.astro", void 0);

const $$Astro$1 = createAstro("https://api.bmcpro.co.mz");
const $$Shield = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Shield;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "shield", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Shield.astro", void 0);

const $$Astro = createAstro("https://api.bmcpro.co.mz");
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "x", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/X.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative py-16 border-t border-gold-500/30 bg-transparent"> <!-- Subtle glow effect at top border --> <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div> <div class="container mx-auto px-6 relative z-10"> <div class="pointer-events-none absolute -top-24 right-0 w-52 h-52 bg-gold-500/8 blur-3xl rounded-full"></div> <div class="pointer-events-none absolute -bottom-32 left-0 w-64 h-64 bg-gold-500/5 blur-3xl rounded-full"></div> <div class="grid md:grid-cols-4 gap-12 mb-12 relative"> <div class="md:col-span-2"> <div class="flex items-center gap-3 mb-6"> ${renderComponent($$result, "BMCLogo", $$BMCLogo, { "class": "text-gold-500", "size": 48 })} <div class="flex flex-col"> <span class="text-2xl font-bold text-gold-500 leading-tight tracking-tight">BMC Pro</span> <span class="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Business Management Consultant</span> </div> </div> <p class="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
Soluções Multidisciplinares para Impulsionar o Crescimento da Sua Empresa
</p> <!-- Social Icons --> <div class="mt-6 flex items-center gap-4"> <span class="text-[10px] uppercase tracking-[0.25em] text-gray-500">Siga-nos</span> <div class="flex items-center gap-2"> <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full border border-gold-500/30 bg-black/40 flex items-center justify-center text-gray-300 hover:text-gold-500 hover:border-gold-500 hover:bg-gold-500/10 transition-all"> ${renderComponent($$result, "Instagram", $$Instagram, { "class": "w-4 h-4" })} </a> <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full border border-gold-500/30 bg-black/40 flex items-center justify-center text-gray-300 hover:text-gold-500 hover:border-gold-500 hover:bg-gold-500/10 transition-all"> ${renderComponent($$result, "Facebook", $$Facebook, { "class": "w-4 h-4" })} </a> <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full border border-gold-500/30 bg-black/40 flex items-center justify-center text-gray-300 hover:text-gold-500 hover:border-gold-500 hover:bg-gold-500/10 transition-all"> ${renderComponent($$result, "Linkedin", $$Linkedin, { "class": "w-4 h-4" })} </a> </div> </div> </div> <div> <h3 class="text-gold-500 font-bold mb-6 text-lg">Links Rápidos</h3> <div class="grid grid-cols-2 gap-x-8 gap-y-2"> <ul class="space-y-3 text-sm"> <li><a href="/" class="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group"> <span class="w-1.5 h-1.5 rounded-full bg-gold-500/0 group-hover:bg-gold-500 transition-all"></span>
Home
</a></li> <li><a href="/why-us" class="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group"> <span class="w-1.5 h-1.5 rounded-full bg-gold-500/0 group-hover:bg-gold-500 transition-all"></span>
Why Us
</a></li> <li><a href="/services" class="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group"> <span class="w-1.5 h-1.5 rounded-full bg-gold-500/0 group-hover:bg-gold-500 transition-all"></span>
Services
</a></li> <li><a href="/#ecosystem" class="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group"> <span class="w-1.5 h-1.5 rounded-full bg-gold-500/0 group-hover:bg-gold-500 transition-all"></span>
Ecossistema
</a></li> </ul> <ul class="space-y-3 text-sm"> <li><a href="/#process" class="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group"> <span class="w-1.5 h-1.5 rounded-full bg-gold-500/0 group-hover:bg-gold-500 transition-all"></span>
Process
</a></li> <li><a href="/#projects" class="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group"> <span class="w-1.5 h-1.5 rounded-full bg-gold-500/0 group-hover:bg-gold-500 transition-all"></span>
Projectos
</a></li> <li><a href="/#blog" class="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group"> <span class="w-1.5 h-1.5 rounded-full bg-gold-500/0 group-hover:bg-gold-500 transition-all"></span>
Blog
</a></li> <li><a href="/contact" class="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group"> <span class="w-1.5 h-1.5 rounded-full bg-gold-500/0 group-hover:bg-gold-500 transition-all"></span>
Contactos
</a></li> </ul> </div> </div> <div> <h3 class="text-gold-500 font-bold mb-6 text-lg">Contactos</h3> <ul class="space-y-4 text-sm"> <li class="flex items-start gap-3"> <div class="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 border border-gold-500/20"> ${renderComponent($$result, "Mail", $$Mail, { "class": "w-4 h-4 text-gold-500", "stroke-width": "2" })} </div> <a href="mailto:geral@bmcpro.co.mz" class="text-gray-400 hover:text-gold-500 transition-colors break-all">
geral@bmcpro.co.mz
</a> </li> <li class="flex items-start gap-3"> <div class="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 border border-gold-500/20"> ${renderComponent($$result, "Phone", $$Phone, { "class": "w-4 h-4 text-gold-500", "stroke-width": "2" })} </div> <div class="flex flex-col gap-1"> <a href="tel:+258820883478" class="text-gray-400 hover:text-gold-500 transition-colors">82 088 3478</a> <a href="tel:+258848509143" class="text-gray-400 hover:text-gold-500 transition-colors">84 850 9143</a> </div> </li> <li class="flex items-start gap-3"> <div class="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 border border-gold-500/20"> ${renderComponent($$result, "MapPin", $$MapPin, { "class": "w-4 h-4 text-gold-500", "stroke-width": "2" })} </div> <span class="text-gray-400 leading-relaxed">
Avenida Julius Nyerere<br>
Maputo
</span> </li> </ul> </div> </div> <!-- Policy Links Bar --> <div class="pt-8 border-t border-gold-500/20"> <div class="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6"> <!-- Policy Links --> <nav class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs"> <a href="/politica-privacidade" class="flex items-center gap-1.5 text-gray-400 hover:text-gold-500 transition-colors"> ${renderComponent($$result, "Shield", $$Shield, { "class": "w-3 h-3" })}
Política de Privacidade
</a> <span class="hidden md:inline text-gray-600">|</span> <a href="/termos-condicoes" class="flex items-center gap-1.5 text-gray-400 hover:text-gold-500 transition-colors"> ${renderComponent($$result, "FileText", $$FileText, { "class": "w-3 h-3" })}
Termos & Condições
</a> <span class="hidden md:inline text-gray-600">|</span> <a href="/politica-cookies" class="flex items-center gap-1.5 text-gray-400 hover:text-gold-500 transition-colors"> ${renderComponent($$result, "Cookie", $$Cookie, { "class": "w-3 h-3" })}
Política de Cookies
</a> <span class="hidden md:inline text-gray-600">|</span> <a href="/aviso-legal" class="flex items-center gap-1.5 text-gray-400 hover:text-gold-500 transition-colors"> ${renderComponent($$result, "Scale", $$Scale, { "class": "w-3 h-3" })}
Aviso Legal
</a> </nav> <!-- Cookie Settings & DPO Contact --> <div class="flex items-center gap-4 text-xs"> <button id="footer-cookie-settings" class="flex items-center gap-1.5 text-gray-400 hover:text-gold-500 transition-colors cursor-pointer"> ${renderComponent($$result, "Settings", $$Settings, { "class": "w-3 h-3" })}
Gerir Cookies
</button> <a href="mailto:geral@bmcpro.co.mz" class="flex items-center gap-1.5 text-gray-400 hover:text-gold-500 transition-colors"> ${renderComponent($$result, "Mail", $$Mail, { "class": "w-3 h-3" })}
Contacto DPO
</a> </div> </div> <!-- Copyright --> <div class="text-center space-y-2"> <p class="text-[11px] tracking-[0.25em] uppercase text-gray-500">Inovação • Estratégia • Tecnologia</p> <p class="text-gray-500 text-sm">&copy; 2025 BMC Pro Services. Todos os direitos reservados.</p> </div> </div> </div> </footer> `;
}, "C:/project-x/bmcpro.co.mz/src/components/Footer.astro", void 0);

const $$CookieConsent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Cookie Consent Banner -->${maybeRenderHead()}<div id="cookie-consent" class="fixed bottom-0 left-0 right-0 z-[9999] transform translate-y-full transition-transform duration-500 ease-out"> <div class="bg-dark-100/95 backdrop-blur-xl border-t border-gold-500/30 shadow-2xl"> <div class="container mx-auto px-4 py-4 md:py-5"> <div class="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6"> <!-- Icon & Text --> <div class="flex items-start gap-3 flex-1"> <div class="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0"> ${renderComponent($$result, "Cookie", $$Cookie, { "class": "w-5 h-5 text-gold-500" })} </div> <div class="flex-1"> <h3 class="text-white font-semibold text-sm mb-1">Este website utiliza cookies</h3> <p class="text-gray-400 text-xs leading-relaxed">
Utilizamos cookies para melhorar a sua experiência, analisar o tráfego e personalizar conteúdos. 
							Ao continuar a navegar, concorda com a nossa
<a href="/politica-cookies" class="text-gold-500 hover:text-gold-400 underline">Política de Cookies</a>.
</p> </div> </div> <!-- Buttons --> <div class="flex flex-wrap items-center gap-2 w-full lg:w-auto"> <button id="cookie-settings-btn" class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gold-500/30 text-gray-300 hover:text-gold-500 hover:border-gold-500 transition-all text-xs font-medium"> ${renderComponent($$result, "Settings", $$Settings, { "class": "w-3.5 h-3.5" })}
Preferências
</button> <button id="cookie-reject-btn" class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-600 text-gray-400 hover:text-white hover:border-gray-500 transition-all text-xs font-medium">
Rejeitar
</button> <button id="cookie-accept-btn" class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold hover:shadow-lg hover:shadow-gold-500/25 transition-all text-xs"> ${renderComponent($$result, "Check", $$Check, { "class": "w-3.5 h-3.5" })}
Aceitar Todos
</button> </div> </div> </div> </div> </div> <!-- Cookie Settings Modal --> <div id="cookie-modal" class="fixed inset-0 z-[10000] hidden"> <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" id="cookie-modal-overlay"></div> <div class="absolute inset-0 flex items-center justify-center p-4"> <div class="bg-dark-100 border border-gold-500/30 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"> <!-- Header --> <div class="flex items-center justify-between p-5 border-b border-gold-500/20"> <div class="flex items-center gap-3"> <div class="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center"> ${renderComponent($$result, "Cookie", $$Cookie, { "class": "w-5 h-5 text-gold-500" })} </div> <h2 class="text-white font-bold text-lg">Preferências de Cookies</h2> </div> <button id="cookie-modal-close" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"> ${renderComponent($$result, "X", $$X, { "class": "w-5 h-5" })} </button> </div> <!-- Content --> <div class="p-5 space-y-4"> <p class="text-gray-400 text-sm leading-relaxed">
Personalize as suas preferências de cookies. Os cookies essenciais são necessários para o funcionamento do website e não podem ser desactivados.
</p> <!-- Cookie Categories --> <div class="space-y-3"> <!-- Essential --> <div class="p-4 rounded-xl bg-dark-200/50 border border-gold-500/10"> <div class="flex items-center justify-between mb-2"> <span class="text-white font-semibold text-sm">Cookies Essenciais</span> <span class="px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-500 text-[10px] font-medium uppercase">Sempre Activos</span> </div> <p class="text-gray-400 text-xs leading-relaxed">
Necessários para o funcionamento básico do website, como navegação e acesso a áreas seguras.
</p> </div> <!-- Analytics --> <div class="p-4 rounded-xl bg-dark-200/50 border border-gold-500/10"> <div class="flex items-center justify-between mb-2"> <span class="text-white font-semibold text-sm">Cookies de Análise</span> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="cookie-analytics" class="sr-only peer" checked> <div class="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold-500"></div> </label> </div> <p class="text-gray-400 text-xs leading-relaxed">
Ajudam-nos a compreender como os visitantes interagem com o website, recolhendo informações anónimas.
</p> </div> <!-- Marketing --> <div class="p-4 rounded-xl bg-dark-200/50 border border-gold-500/10"> <div class="flex items-center justify-between mb-2"> <span class="text-white font-semibold text-sm">Cookies de Marketing</span> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="cookie-marketing" class="sr-only peer"> <div class="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold-500"></div> </label> </div> <p class="text-gray-400 text-xs leading-relaxed">
Utilizados para apresentar anúncios relevantes e medir a eficácia das campanhas publicitárias.
</p> </div> <!-- Functional --> <div class="p-4 rounded-xl bg-dark-200/50 border border-gold-500/10"> <div class="flex items-center justify-between mb-2"> <span class="text-white font-semibold text-sm">Cookies Funcionais</span> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="cookie-functional" class="sr-only peer" checked> <div class="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gold-500"></div> </label> </div> <p class="text-gray-400 text-xs leading-relaxed">
Permitem funcionalidades melhoradas e personalização, como preferências de idioma.
</p> </div> </div> </div> <!-- Footer --> <div class="flex items-center justify-between gap-3 p-5 border-t border-gold-500/20"> <a href="/politica-cookies" class="text-gold-500 hover:text-gold-400 text-xs underline">
Ver Política de Cookies
</a> <div class="flex items-center gap-2"> <button id="cookie-save-preferences" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold hover:shadow-lg hover:shadow-gold-500/25 transition-all text-xs">
Guardar Preferências
</button> </div> </div> </div> </div> </div> `;
}, "C:/project-x/bmcpro.co.mz/src/components/CookieConsent.astro", void 0);

export { $$ as $, $$Layout as a, $$Header as b, $$Footer as c, $$CookieConsent as d, $$FileText as e, $$Mail as f, $$Phone as g, $$MapPin as h, $$Shield as i, $$Check as j, $$Settings as k };
