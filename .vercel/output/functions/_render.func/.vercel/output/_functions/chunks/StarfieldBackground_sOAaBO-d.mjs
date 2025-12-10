import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
/* empty css                         */
import { $ as $$ArrowRight } from './ArrowRight_Bkg2jRsq.mjs';
import { $ as $$Users } from './Users_DcTBIYxJ.mjs';
import { $ as $$, i as $$Shield, e as $$FileText, k as $$Settings, j as $$Check } from './CookieConsent_D7ipi_f1.mjs';
import { $ as $$Cpu } from './Cpu_DTDJEyIB.mjs';
import { $ as $$TrendingUp } from './TrendingUp_CIWKZRu_.mjs';
import { $ as $$Search } from './Search_BPjaOLvw.mjs';
import { $ as $$Target } from './Target_D6WnkH8t.mjs';
import { $ as $$Megaphone } from './Megaphone_CS4-mBN8.mjs';
import { $ as $$Briefcase } from './Briefcase_CALSXkIO.mjs';
import { $ as $$Award } from './Award_DgwsbHil.mjs';
import { $ as $$Calendar } from './Calendar_BCAgUDFq.mjs';
import { $ as $$Building2 } from './Building2_C1kEXJJX.mjs';
import 'clsx';
import { $ as $$Lightbulb } from './Lightbulb_CgodpHKe.mjs';

const $$Astro$2 = createAstro("https://api.bmcpro.co.mz");
const $$BookOpen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookOpen;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "book-open", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 7v14"></path> <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/BookOpen.astro", void 0);

const $$Astro$1 = createAstro("https://api.bmcpro.co.mz");
const $$Rocket = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Rocket;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "rocket", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path> <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path> <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path> <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/Rocket.astro", void 0);

const $$Astro = createAstro("https://api.bmcpro.co.mz");
const $$SlidersHorizontal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SlidersHorizontal;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "sliders-horizontal", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M10 5H3"></path> <path d="M12 19H3"></path> <path d="M14 3v4"></path> <path d="M16 17v4"></path> <path d="M21 12h-9"></path> <path d="M21 19h-5"></path> <path d="M21 5h-7"></path> <path d="M8 10v4"></path> <path d="M8 12H3"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/SlidersHorizontal.astro", void 0);

function ConceptualGlobe() {
  const groupRef = useRef(null);
  const orbitNodeRef = useRef(null);
  const ringRefs = useRef([]);
  const continentsTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = "#050308";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const drawContinent = (cx, cy, rx, ry, rotation = 0) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      const grd = ctx.createRadialGradient(0, 0, Math.min(rx, ry) * 0.1, 0, 0, rx);
      grd.addColorStop(0, "#fff8d1");
      grd.addColorStop(0.4, "#ffd877");
      grd.addColorStop(1, "#dca53a");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    drawContinent(340, 260, 120, 190, -0.4);
    drawContinent(170, 230, 150, 180, 0.2);
    drawContinent(800, 220, 180, 160, 0.5);
    drawContinent(760, 120, 90, 60, -0.2);
    drawContinent(640, 340, 140, 90, 0.4);
    const atm = ctx.createRadialGradient(512, 256, 50, 512, 256, 360);
    atm.addColorStop(0, "rgba(255, 255, 255, 0.1)");
    atm.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = atm;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, []);
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.2;
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.08;
    if (orbitNodeRef.current) {
      const radius = 1.7;
      const speed = 0.35;
      const phi = t * speed;
      orbitNodeRef.current.position.set(
        Math.cos(phi) * radius,
        0.35,
        Math.sin(phi) * radius
      );
    }
    ringRefs.current.forEach((ring, idx) => {
      if (!ring) return;
      const mat = ring.material;
      const base = 0.14 + idx * 0.03;
      const amp = 0.04;
      mat.opacity = base + Math.sin(t * 0.8 + idx * 1.1) * amp;
    });
  });
  const nodePositions = [
    [1.1, 0.25, 0.65],
    [-1, -0.2, 0.8],
    [0.25, 0.9, -1],
    [-0.35, -1, -0.9],
    [0.9, -0.55, -0.7]
  ];
  return /* @__PURE__ */ jsxs("group", { ref: groupRef, children: [
    /* @__PURE__ */ jsx("ambientLight", { intensity: 0.35 }),
    /* @__PURE__ */ jsx("directionalLight", { position: [4, 6, 8], intensity: 1.1, color: "#ffb800" }),
    /* @__PURE__ */ jsx("pointLight", { position: [-6, -4, -6], intensity: 0.5, color: "#ffb800" }),
    /* @__PURE__ */ jsx(Sphere, { args: [1.55, 64, 64], children: /* @__PURE__ */ jsx(
      "meshStandardMaterial",
      {
        color: "#ffe8b0",
        metalness: 0.8,
        roughness: 0.22,
        map: continentsTexture ?? void 0,
        emissive: "#ffb800",
        emissiveIntensity: 0.18
      }
    ) }),
    /* @__PURE__ */ jsx(Sphere, { args: [1.65, 40, 40], children: /* @__PURE__ */ jsx(
      "meshBasicMaterial",
      {
        color: "#ffb800",
        transparent: true,
        opacity: 0.11,
        wireframe: true
      }
    ) }),
    /* @__PURE__ */ jsxs("mesh", { rotation: [Math.PI / 2.1, 0, 0], children: [
      /* @__PURE__ */ jsx("torusGeometry", { args: [1.85, 0.05, 24, 170] }),
      /* @__PURE__ */ jsx("torusGeometry", { args: [1.75, 0.045, 24, 170] }),
      /* @__PURE__ */ jsx("meshBasicMaterial", { color: "#ffb800", transparent: true, opacity: 0.23 })
    ] }),
    [0, 1, 2].map((i) => /* @__PURE__ */ jsxs(
      "mesh",
      {
        ref: (el) => {
          if (el) ringRefs.current[i] = el;
        },
        rotation: [Math.PI / 4, Math.PI / 3 * i, 0],
        children: [
          /* @__PURE__ */ jsx("torusGeometry", { args: [1.9, 0.024, 20, 190] }),
          /* @__PURE__ */ jsx("meshBasicMaterial", { color: "#ffb800", transparent: true, opacity: 0.2 })
        ]
      },
      i
    )),
    nodePositions.map((pos, index) => /* @__PURE__ */ jsxs("mesh", { position: pos, children: [
      /* @__PURE__ */ jsx("sphereGeometry", { args: [0.09, 18, 18] }),
      /* @__PURE__ */ jsx(
        "meshStandardMaterial",
        {
          color: "#ffde8a",
          emissive: "#ffb800",
          emissiveIntensity: 0.85
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxs("mesh", { ref: orbitNodeRef, children: [
      /* @__PURE__ */ jsx("sphereGeometry", { args: [0.12, 20, 20] }),
      /* @__PURE__ */ jsx(
        "meshStandardMaterial",
        {
          color: "#fff4c4",
          emissive: "#ffcc4d",
          emissiveIntensity: 1
        }
      )
    ] })
  ] });
}
function Globe3D() {
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full", children: /* @__PURE__ */ jsx(Canvas, { camera: { position: [0, 0, 6], fov: 38 }, gl: { alpha: true }, style: { background: "transparent" }, children: /* @__PURE__ */ jsx(ConceptualGlobe, {}) }) });
}

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 hero-section-3d bg-transparent" data-astro-cid-bbe6dxrz> <div class="container mx-auto px-6 py-20 relative z-10" data-astro-cid-bbe6dxrz> <div class="grid md:grid-cols-2 gap-12 items-center" data-astro-cid-bbe6dxrz> <!-- Text Content --> <div class="text-center md:text-left space-y-6 animate-fade-in hero-content" data-astro-cid-bbe6dxrz> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] hero-title" data-astro-cid-bbe6dxrz> <span class="text-white block" data-astro-cid-bbe6dxrz>Soluções</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 block animate-gradient-text" data-astro-cid-bbe6dxrz>
Multidisciplinares
</span> <span class="text-white block text-3xl sm:text-4xl md:text-5xl mt-2 font-bold" data-astro-cid-bbe6dxrz>
para o Crescimento da Sua Empresa
</span> </h1> <p class="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed hero-description" data-astro-cid-bbe6dxrz>
Consultoria estratégica, inovação digital, desenvolvimento organizacional e apoio técnico para empresas, governos e instituições que procuram resultados concretos e sustentáveis.
</p> <div class="flex flex-col sm:flex-row gap-4 pt-4 hero-cta" data-astro-cid-bbe6dxrz> <a href="/contact" class="group relative px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold text-base sm:text-lg hover:glow-gold-lg transition-all transform hover:scale-105 shadow-lg overflow-hidden hero-button" data-astro-cid-bbe6dxrz> <span class="relative z-10 flex items-center gap-2" data-astro-cid-bbe6dxrz>
Fale Connosco
${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "w-5 h-5 group-hover:translate-x-1 transition-transform", "data-astro-cid-bbe6dxrz": true })} </span> <div class="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-bbe6dxrz></div> </a> <a href="/services" class="px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl border-2 border-gold-500/50 text-gold-500 font-semibold text-base sm:text-lg hover:bg-gold-500/10 hover:border-gold-500 transition-all transform hover:scale-105" data-astro-cid-bbe6dxrz>
Ver Serviços
</a> </div> </div> <!-- 3D Globe --> <div class="relative animate-fade-in globe-container flex items-center justify-center" style="animation-delay: 0.3s;" data-astro-cid-bbe6dxrz> <div class="relative globe-3d-wrapper w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] xl:w-[460px] xl:h-[460px]" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Globe3D", Globe3D, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/project-x/bmcpro.co.mz/src/components/Globe3D.tsx", "client:component-export": "default", "data-astro-cid-bbe6dxrz": true })} </div> </div> </div> <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce scroll-indicator" data-astro-cid-bbe6dxrz> <div class="w-6 h-10 border-2 border-gold-500/50 rounded-full flex items-start justify-center p-2" data-astro-cid-bbe6dxrz> <div class="w-1.5 h-1.5 bg-gold-500 rounded-full animate-scroll-dot" data-astro-cid-bbe6dxrz></div> </div> </div> </div> </section> `;
}, "C:/project-x/bmcpro.co.mz/src/components/Hero.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      icon: $$Users,
      title: "Equipa Multidisciplinar",
      description: "Profissionais especializados em diversas \xE1reas, trabalhando em conjunto para oferecer solu\xE7\xF5es integradas e abrangentes."
    },
    {
      icon: $$SlidersHorizontal,
      title: "Solu\xE7\xF5es Personalizadas",
      description: "Cada projeto \xE9 \xFAnico. Desenvolvemos estrat\xE9gias personalizadas que se adaptam \xE0s necessidades espec\xEDficas do seu neg\xF3cio."
    },
    {
      icon: $$Cpu,
      title: "Tecnologia de Ponta",
      description: "Utilizamos as mais recentes ferramentas tecnol\xF3gicas e pr\xE1ticas inovadoras para maximizar efici\xEAncia e resultados."
    },
    {
      icon: $$Shield,
      title: "\xC9tica e Compromisso",
      description: "Mantemos os mais altos padr\xF5es de \xE9tica profissional e compromisso com a transpar\xEAncia em todos os nossos projetos."
    },
    {
      icon: $$TrendingUp,
      title: "Resultados Comprovados",
      description: "Temos um hist\xF3rico s\xF3lido de projetos bem-sucedidos que geram valor real e impacto positivo para os nossos clientes."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="why-us" class="py-20 relative overflow-hidden"> <div class="container mx-auto px-6 relative z-10"> <h2 class="text-4xl md:text-5xl font-bold text-center mb-16"> <span class="text-white">Why Choose</span> <span class="text-gold-500"> Us</span> </h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto"> ${items.map((item, index) => {
    const IconComponent = item.icon;
    return renderTemplate`<div class="parallax-card-wrapper"${addAttribute(`--animation-delay: ${index * 0.15}s`, "style")}> <div class="card-metallic rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"> <div class="w-20 h-20 rounded-full bg-gradient-to-br from-gold-600/20 to-gold-500/10 flex items-center justify-center mb-6 mx-auto glow-gold"> ${renderComponent($$result, "IconComponent", IconComponent, { "class": "w-10 h-10 text-gold-500", "stroke-width": "1.5" })} </div> <h3 class="text-2xl font-bold text-gold-500 mb-4 text-center">${item.title}</h3> <p class="text-gray-300 leading-relaxed text-center text-sm">${item.description}</p> </div> </div>`;
  })} </div> <div class="text-center mt-12"> <a href="/why-us" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold hover:glow-gold-lg transition-all transform hover:scale-105">
Descobrir Mais Sobre Nós
${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "w-5 h-5" })} </a> </div> </div> </section>`;
}, "C:/project-x/bmcpro.co.mz/src/components/WhyChooseUs.astro", void 0);

const $$OurProcess = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "01",
      icon: $$Search,
      title: "Diagn\xF3stico",
      subtitle: "An\xE1lise Profunda",
      description: "Analisamos a sua organiza\xE7\xE3o, identificamos desafios e oportunidades, e compreendemos os seus objectivos estrat\xE9gicos."
    },
    {
      number: "02",
      icon: $$FileText,
      title: "Planeamento",
      subtitle: "Estrat\xE9gia Personalizada",
      description: "Desenvolvemos um plano de ac\xE7\xE3o personalizado com metas claras, cronogramas e indicadores de sucesso mensur\xE1veis."
    },
    {
      number: "03",
      icon: $$Settings,
      title: "Implementa\xE7\xE3o",
      subtitle: "Execu\xE7\xE3o Precisa",
      description: "Executamos as solu\xE7\xF5es propostas com acompanhamento cont\xEDnuo, garantindo qualidade e alinhamento com os objectivos."
    },
    {
      number: "04",
      icon: $$Rocket,
      title: "Resultados",
      subtitle: "Impacto Mensur\xE1vel",
      description: "Monitorizamos os resultados, optimizamos processos e asseguramos a sustentabilidade das melhorias alcan\xE7adas."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="process" class="py-24 relative overflow-hidden" data-astro-cid-dchu7ohy> <div class="container mx-auto px-6 relative z-10" data-astro-cid-dchu7ohy> <!-- Header --> <div class="text-center mb-20" data-astro-cid-dchu7ohy> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6" data-astro-cid-dchu7ohy> <div class="w-2 h-2 rounded-full bg-gold-500 animate-pulse" data-astro-cid-dchu7ohy></div> <span class="text-sm font-semibold text-gold-500" data-astro-cid-dchu7ohy>Metodologia Comprovada</span> </div> <h2 class="text-4xl md:text-6xl font-bold mb-6" data-astro-cid-dchu7ohy> <span class="text-white" data-astro-cid-dchu7ohy>O Nosso</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" data-astro-cid-dchu7ohy> Processo</span> </h2> <p class="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed" data-astro-cid-dchu7ohy>
Uma jornada estratégica de transformação, desenhada para maximizar o potencial da sua organização.
</p> </div> <!-- Futuristic Timeline --> <div class="relative" data-astro-cid-dchu7ohy> <!-- Central Vertical Line (mobile) / Horizontal Line (desktop) --> <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2" data-astro-cid-dchu7ohy> <div class="h-full w-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" data-astro-cid-dchu7ohy></div> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent animate-pulse-slow" data-astro-cid-dchu7ohy></div> </div> <!-- Steps Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative" data-astro-cid-dchu7ohy> ${steps.map((step, index) => {
    const IconComponent = step.icon;
    const isEven = index % 2 === 0;
    return renderTemplate`<div class="process-step group animate-on-scroll"${addAttribute(`--animation-delay: ${index * 0.2}s`, "style")} data-astro-cid-dchu7ohy>  <div class="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" data-astro-cid-dchu7ohy> <div class="relative" data-astro-cid-dchu7ohy> <div class="w-4 h-4 rounded-full bg-gold-500 shadow-lg shadow-gold-500/50" data-astro-cid-dchu7ohy></div> <div class="absolute inset-0 w-4 h-4 rounded-full bg-gold-500/50 animate-ping" data-astro-cid-dchu7ohy></div> </div> </div>  <div${addAttribute(`relative ${isEven ? "lg:mb-16" : "lg:mt-16"}`, "class")} data-astro-cid-dchu7ohy>  <div class="absolute -top-6 left-1/2 -translate-x-1/2 z-10" data-astro-cid-dchu7ohy> <div class="relative" data-astro-cid-dchu7ohy> <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 via-gold-600 to-gold-500 flex items-center justify-center shadow-xl shadow-gold-500/30 transform rotate-45 group-hover:rotate-0 transition-transform duration-500" data-astro-cid-dchu7ohy> <span class="text-dark-200 font-black text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500" data-astro-cid-dchu7ohy>${step.number}</span> </div> <div class="absolute inset-0 w-14 h-14 rounded-2xl bg-gold-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-dchu7ohy></div> </div> </div>  <div class="card-metallic rounded-3xl p-8 pt-12 transition-all duration-500 transform group-hover:-translate-y-3 group-hover:scale-[1.02] relative overflow-hidden" data-astro-cid-dchu7ohy>  <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-dchu7ohy> <div class="absolute inset-0 rounded-3xl border border-gold-500/50" data-astro-cid-dchu7ohy></div> <div class="absolute -inset-px rounded-3xl bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/10" data-astro-cid-dchu7ohy></div> </div>  <div class="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-gold-500/10 transition-colors duration-500" data-astro-cid-dchu7ohy></div>  <div class="relative mb-6 flex justify-center" data-astro-cid-dchu7ohy> <div class="relative" data-astro-cid-dchu7ohy> <div class="w-20 h-20 rounded-full bg-gradient-to-br from-gold-600/20 to-gold-500/5 flex items-center justify-center border border-gold-500/20 group-hover:border-gold-500/40 transition-colors duration-500" data-astro-cid-dchu7ohy> ${renderComponent($$result, "IconComponent", IconComponent, { "class": "w-10 h-10 text-gold-500 group-hover:scale-110 transition-transform duration-500", "stroke-width": "1.5", "data-astro-cid-dchu7ohy": true })} </div>  <div class="absolute inset-0 rounded-full border-2 border-gold-500/0 group-hover:border-gold-500/30 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" data-astro-cid-dchu7ohy></div> </div> </div>  <div class="relative text-center" data-astro-cid-dchu7ohy> <p class="text-gold-500/60 text-xs font-semibold uppercase tracking-widest mb-2" data-astro-cid-dchu7ohy>${step.subtitle}</p> <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300" data-astro-cid-dchu7ohy>${step.title}</h3> <p class="text-gray-400 leading-relaxed text-sm" data-astro-cid-dchu7ohy>${step.description}</p> </div>  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent group-hover:w-3/4 transition-all duration-500" data-astro-cid-dchu7ohy></div> </div>  <div${addAttribute(`hidden lg:block absolute left-1/2 w-px h-16 bg-gold-500/40 ${isEven ? "top-full" : "bottom-full"}`, "class")} data-astro-cid-dchu7ohy></div> </div> </div>`;
  })} </div> </div> <!-- CTA --> <div class="text-center mt-20" data-astro-cid-dchu7ohy> <a href="/contact" class="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-dark-200 font-bold text-lg hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-500 transform hover:scale-105 relative overflow-hidden" data-astro-cid-dchu7ohy> <span class="relative z-10" data-astro-cid-dchu7ohy>Iniciar a Sua Transformação</span> ${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform", "data-astro-cid-dchu7ohy": true })} <div class="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-dchu7ohy></div> </a> </div> </div> </section> `;
}, "C:/project-x/bmcpro.co.mz/src/components/OurProcess.astro", void 0);

const $$OurServices = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      icon: $$Target,
      title: "Consultoria Estrat\xE9gica",
      description: "Apoiamos organiza\xE7\xF5es na defini\xE7\xE3o de metas, estrat\xE9gias e planos de a\xE7\xE3o alinhados \xE0 realidade do mercado e ao futuro desejado pela institui\xE7\xE3o.",
      features: ["Diagn\xF3stico organizacional", "Planeamento estrat\xE9gico", "Gest\xE3o de performance"]
    },
    {
      icon: $$Cpu,
      title: "Inova\xE7\xE3o Digital & Smart Solutions",
      description: "Integramos ferramentas tecnol\xF3gicas que aceleram processos, melhoram decis\xF5es e trazem efici\xEAncia \xE0s opera\xE7\xF5es.",
      features: ["Digitaliza\xE7\xE3o de processos", "Solu\xE7\xF5es de georreferencia\xE7\xE3o", "Web development e sistemas"]
    },
    {
      icon: $$Megaphone,
      title: "Comunica\xE7\xE3o & Branding",
      description: "Criamos identidade visual, campanhas e materiais que refor\xE7am a presen\xE7a das marcas e facilitam a comunica\xE7\xE3o com o p\xFAblico-alvo.",
      features: ["Identidade visual e branding", "Gest\xE3o de redes sociais", "Estrat\xE9gias de comunica\xE7\xE3o"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-20 relative overflow-hidden"> <div class="container mx-auto px-6 relative z-10"> <h2 class="text-4xl md:text-5xl font-bold text-center mb-16"> <span class="text-white">Our</span> <span class="text-gold-500"> Services</span> </h2> <div class="grid md:grid-cols-3 gap-8"> ${services.map((service, index) => {
    const IconComponent = service.icon;
    return renderTemplate`<div class="parallax-card-wrapper animate-on-scroll"${addAttribute(`--animation-delay: ${index * 0.15}s`, "style")}> <div class="card-metallic rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"> <div class="w-20 h-20 rounded-full bg-gradient-to-br from-gold-600/20 to-gold-500/10 flex items-center justify-center mb-6 mx-auto glow-gold"> ${renderComponent($$result, "IconComponent", IconComponent, { "class": "w-10 h-10 text-gold-500", "stroke-width": "1.5" })} </div> <h3 class="text-2xl font-bold text-gold-500 mb-4 text-center">${service.title}</h3> <p class="text-gray-300 leading-relaxed text-center text-sm mb-4">${service.description}</p> <ul class="space-y-2 mb-6"> ${service.features.map((feature) => renderTemplate`<li class="text-gray-400 text-sm flex items-center gap-2"> ${renderComponent($$result, "Check", $$Check, { "class": "w-4 h-4 text-gold-500", "stroke-width": "2.5" })} ${feature} </li>`)} </ul> <a href="/services" class="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold hover:glow-gold-lg transition-all transform hover:scale-105 text-center block">
Explore More
</a> </div> </div>`;
  })} </div> </div> </section>`;
}, "C:/project-x/bmcpro.co.mz/src/components/OurServices.astro", void 0);

const $$StatsSection = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    {
      icon: $$Briefcase,
      value: "50+",
      label: "Projetos Conclu\xEDdos",
      description: "Com sucesso comprovado",
      gradient: "from-gold-500 via-gold-400 to-gold-600"
    },
    {
      icon: $$Users,
      value: "100+",
      label: "Clientes Atendidos",
      description: "Empresas e institui\xE7\xF5es",
      gradient: "from-gold-500 via-gold-400 to-gold-600"
    },
    {
      icon: $$Award,
      value: "2023",
      label: "Ano de Funda\xE7\xE3o",
      description: "Empresa mo\xE7ambicana",
      gradient: "from-gold-500 via-gold-400 to-gold-600"
    },
    {
      icon: $$Target,
      value: "95%",
      label: "Taxa de Satisfa\xE7\xE3o",
      description: "Clientes satisfeitos",
      gradient: "from-gold-500 via-gold-400 to-gold-600"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-32 relative overflow-hidden stats-section-3d bg-transparent" data-astro-cid-agx3ppxd> <div class="container mx-auto px-6 relative z-10" data-astro-cid-agx3ppxd> <div class="text-center mb-20" data-astro-cid-agx3ppxd> <h2 class="text-5xl md:text-7xl font-bold mb-6 stats-title" data-astro-cid-agx3ppxd> <span class="text-white inline-block" data-astro-cid-agx3ppxd>Resultados que</span> <br data-astro-cid-agx3ppxd> <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 inline-block animate-gradient" data-astro-cid-agx3ppxd>Falam por Si</span> </h2> <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" data-astro-cid-agx3ppxd>
Números que comprovam a nossa excelência e o impacto positivo que geramos para os nossos clientes.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto stats-grid-3d" data-astro-cid-agx3ppxd> ${stats.map((stat, index) => {
    const IconComponent = stat.icon;
    return renderTemplate`<div class="parallax-card-wrapper animate-on-scroll"${addAttribute(`--animation-delay: ${index * 0.15}s`, "style")} data-astro-cid-agx3ppxd> <div class="card-metallic rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group" data-astro-cid-agx3ppxd> <!-- Icon Container --> <div class="w-20 h-20 rounded-full bg-gradient-to-br from-gold-600/20 to-gold-500/10 flex items-center justify-center mb-6 mx-auto glow-gold" data-astro-cid-agx3ppxd> ${renderComponent($$result, "IconComponent", IconComponent, { "class": "w-10 h-10 text-gold-500", "stroke-width": "1.5", "data-astro-cid-agx3ppxd": true })} </div> <!-- Number --> <div class="text-5xl md:text-6xl font-black bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent text-center mb-4 counter"${addAttribute(stat.value, "data-target")} data-astro-cid-agx3ppxd> ${stat.value} </div> <!-- Label --> <h3 class="text-2xl font-bold text-gold-500 mb-4 text-center" data-astro-cid-agx3ppxd>${stat.label}</h3> <!-- Description --> <p class="text-gray-300 leading-relaxed text-center text-sm" data-astro-cid-agx3ppxd>${stat.description}</p> </div> </div>`;
  })} </div> </div> </section>  `;
}, "C:/project-x/bmcpro.co.mz/src/components/StatsSection.astro", void 0);

const $$EcosystemSection = createComponent(($$result, $$props, $$slots) => {
  const companies = [
    {
      icon: $$BookOpen,
      name: "BrainyWrite",
      logo: "/BrainyWrite%20Logo.png",
      segment: "Educa\xE7\xE3o & Conte\xFAdo",
      role: "Hub de conhecimento, escrita acad\xE9mica e solu\xE7\xF5es criativas dentro do ecossistema.",
      link: "/contact?empresa=BrainyWrite",
      description: "Assessoria Acad\xE9mica e Criativa",
      details: "Especializada em servi\xE7os de reda\xE7\xE3o acad\xEAmica, consultoria educacional e solu\xE7\xF5es criativas para estudantes e institui\xE7\xF5es de ensino."
    },
    {
      icon: $$Calendar,
      name: "The Peculiar Atelier",
      logo: "/Peculiarlogo.svg",
      segment: "Eventos & Experi\xEAncias",
      role: "Concep\xE7\xE3o e execu\xE7\xE3o de eventos corporativos, institucionais e experi\xEAncias de marca.",
      link: "/contact?empresa=The%20Peculiar%20Atelier",
      description: "Assessoria e Organiza\xE7\xE3o de Eventos",
      details: "Planeamento, organiza\xE7\xE3o e execu\xE7\xE3o de eventos corporativos, sociais e institucionais com foco em excel\xEAncia e inova\xE7\xE3o."
    },
    {
      icon: $$Megaphone,
      name: "Ag\xEAncia Criativa 360\xB0",
      logo: "/Logo%20-%20Agencia%20Criativa%20360.png",
      segment: "Marketing & Branding",
      role: "Amplifica\xE7\xE3o de marca, campanhas integradas e presen\xE7a digital para empresas e institui\xE7\xF5es.",
      link: "/contact?empresa=Agencia%20Criativa%20360",
      description: "Marketing, Comunica\xE7\xE3o e Branding",
      details: "Solu\xE7\xF5es completas em marketing digital, comunica\xE7\xE3o estrat\xE9gica e desenvolvimento de identidade visual para marcas e empresas."
    },
    {
      icon: $$Building2,
      name: "Artes Luanica e Filhos",
      logo: "",
      segment: "Engenharia & Infraestrutura",
      role: "Execu\xE7\xE3o f\xEDsica de projectos, obras e solu\xE7\xF5es de engenharia com foco em qualidade.",
      link: "/contact?empresa=Artes%20Luanica%20e%20Filhos",
      description: "Engenharia e Constru\xE7\xE3o Civil",
      details: "Projetos de engenharia, constru\xE7\xE3o civil e servi\xE7os t\xE9cnicos especializados com qualidade e compromisso com a excel\xEAncia."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="ecosystem" class="py-20 relative overflow-hidden" data-astro-cid-uahkaunc> <div class="container mx-auto px-6 relative z-10" data-astro-cid-uahkaunc> <div class="text-center mb-16" data-astro-cid-uahkaunc> <h2 class="text-4xl md:text-5xl font-bold mb-4" data-astro-cid-uahkaunc> <span class="text-white" data-astro-cid-uahkaunc>Nosso</span> <span class="text-gold-500" data-astro-cid-uahkaunc> Ecossistema</span> </h2> <p class="text-lg text-gray-400 max-w-3xl mx-auto" data-astro-cid-uahkaunc>
Um ecossistema integrado de empresas especializadas, trabalhando em conjunto para oferecer soluções completas e multidisciplinares aos nossos clientes.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ecosystem-grid" data-astro-cid-uahkaunc> ${companies.map((company, index) => {
    const IconComponent = company.icon;
    return renderTemplate`<div class="parallax-card-wrapper animate-on-scroll"${addAttribute(`--animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-uahkaunc> <div class="card-metallic rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105" data-astro-cid-uahkaunc> <div class="w-24 h-24 rounded-full bg-gradient-to-br from-gold-600/20 to-gold-500/10 flex items-center justify-center mb-6 mx-auto glow-gold overflow-hidden" data-astro-cid-uahkaunc> ${company.logo ? renderTemplate`<img${addAttribute(company.logo, "src")}${addAttribute(company.name, "alt")} loading="lazy" class="w-20 h-20 object-contain drop-shadow-[0_0_14px_rgba(255,184,0,0.6)]" data-astro-cid-uahkaunc>` : renderTemplate`${renderComponent($$result, "IconComponent", IconComponent, { "class": "w-10 h-10 text-gold-500", "stroke-width": "1.5", "data-astro-cid-uahkaunc": true })}`} </div> <div class="text-center mb-2" data-astro-cid-uahkaunc> <p class="text-gold-500/60 text-[11px] font-semibold uppercase tracking-[0.25em] mb-1" data-astro-cid-uahkaunc> ${company.segment} </p> <h3 class="text-2xl font-bold text-gold-500 mb-2" data-astro-cid-uahkaunc>${company.name}</h3> </div> <p class="text-gold-400/80 text-sm font-medium mb-1 text-center" data-astro-cid-uahkaunc>${company.description}</p> <p class="text-gray-400/80 text-[11px] italic mb-2 text-center" data-astro-cid-uahkaunc> ${company.role} </p> <p class="text-gray-300 leading-relaxed text-sm text-center mb-4" data-astro-cid-uahkaunc> ${company.details} </p> <a${addAttribute(company.link, "href")} class="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold text-sm hover:glow-gold-lg transition-all transform hover:scale-105" data-astro-cid-uahkaunc>
Conhecer a Marca
</a> </div> </div>`;
  })} </div> <div class="mt-16 text-center space-y-4" data-astro-cid-uahkaunc> <p class="text-gray-400 text-sm max-w-2xl mx-auto" data-astro-cid-uahkaunc>
Juntas, estas empresas formam um ecossistema robusto que acompanha o cliente desde a estratégia e conteúdo, passando por experiências de marca, até à execução física de projectos complexos.
</p> <div class="flex flex-wrap items-center justify-center gap-3 text-[11px] font-medium text-gold-400/80" data-astro-cid-uahkaunc> <span class="px-3 py-1 rounded-full border border-gold-500/40 bg-gold-500/5" data-astro-cid-uahkaunc>Ideia &amp; Estratégia</span> <span class="text-gold-500/60" data-astro-cid-uahkaunc>→</span> <span class="px-3 py-1 rounded-full border border-gold-500/40 bg-gold-500/5" data-astro-cid-uahkaunc>Conteúdo &amp; Comunicação</span> <span class="text-gold-500/60" data-astro-cid-uahkaunc>→</span> <span class="px-3 py-1 rounded-full border border-gold-500/40 bg-gold-500/5" data-astro-cid-uahkaunc>Experiências &amp; Eventos</span> <span class="text-gold-500/60" data-astro-cid-uahkaunc>→</span> <span class="px-3 py-1 rounded-full border border-gold-500/40 bg-gold-500/5" data-astro-cid-uahkaunc>Execução &amp; Infraestrutura</span> </div> </div> </div> </section> `;
}, "C:/project-x/bmcpro.co.mz/src/components/EcosystemSection.astro", void 0);

const $$ProjectsSection = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      name: "Transdata Consult",
      description: "Solu\xE7\xF5es de consultoria em gest\xE3o de dados e transforma\xE7\xE3o digital para empresas do setor de transportes e log\xEDstica.",
      image: "/images/projects/transdata-consult.png",
      sector: "Transportes & Log\xEDstica",
      caseStudySlug: null
    },
    {
      name: "GreenBuild",
      description: "Projeto de consultoria ambiental e planeamento sustent\xE1vel para constru\xE7\xE3o e desenvolvimento urbano com foco em pr\xE1ticas ecol\xF3gicas.",
      image: "/images/projects/greenbuild.png",
      sector: "Constru\xE7\xE3o & Ambiente",
      caseStudySlug: null
    },
    {
      name: "Criativa",
      description: "Estrat\xE9gia de comunica\xE7\xE3o e branding para ag\xEAncia criativa, incluindo identidade visual e campanhas de marketing digital.",
      image: "/images/projects/criativa.png",
      sector: "Comunica\xE7\xE3o & Branding",
      caseStudySlug: null
    },
    {
      name: "TecnoAgro",
      description: "Inova\xE7\xE3o digital e solu\xE7\xF5es tecnol\xF3gicas para o setor agr\xEDcola, incluindo sistemas de gest\xE3o e an\xE1lise de dados agr\xEDcolas.",
      image: "/images/projects/tecnoagro.png",
      sector: "Agro & Tecnologia",
      caseStudySlug: null
    },
    {
      name: "Conselho Municipal de Marracuene",
      description: "Consultoria estrat\xE9gica e planeamento territorial para desenvolvimento municipal, incluindo gest\xE3o urbana e projetos de infraestrutura.",
      image: "/images/projects/conselho-municipal.png",
      sector: "Setor P\xFAblico",
      caseStudySlug: "planeamento-territorial-desenvolvimento-sustentavel"
    },
    {
      name: "UrbanPlan",
      description: "Planeamento urbano e ordenamento territorial com foco em desenvolvimento sustent\xE1vel e melhoria da qualidade de vida urbana.",
      image: "/images/projects/urbanplan.png",
      sector: "Planeamento Urbano",
      caseStudySlug: null
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="py-20 relative overflow-hidden" data-astro-cid-oyo7lhtz> <div class="container mx-auto px-6 relative z-10" data-astro-cid-oyo7lhtz> <div class="text-center mb-16" data-astro-cid-oyo7lhtz> <h2 class="text-4xl md:text-5xl font-bold mb-4" data-astro-cid-oyo7lhtz> <span class="text-white" data-astro-cid-oyo7lhtz>Projectos</span> <span class="text-gold-500" data-astro-cid-oyo7lhtz> / </span> <span class="text-white" data-astro-cid-oyo7lhtz>Case Studies</span> </h2> <p class="text-lg text-gray-400 max-w-2xl mx-auto" data-astro-cid-oyo7lhtz>
Conheça alguns dos nossos projetos de sucesso e soluções implementadas para clientes em diversos setores.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid-3d" data-astro-cid-oyo7lhtz> ${projects.map((project, index) => renderTemplate`<div class="parallax-card-wrapper animate-on-scroll"${addAttribute(`--animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-oyo7lhtz> <div class="card-metallic rounded-3xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group" data-astro-cid-oyo7lhtz> <!-- Image Container --> <div class="relative h-48 overflow-hidden bg-gradient-to-br from-gold-600/20 to-gold-500/10" data-astro-cid-oyo7lhtz> <img${addAttribute(project.image, "src")}${addAttribute(project.name, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" data-astro-cid-oyo7lhtz> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" data-astro-cid-oyo7lhtz></div> <div class="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors duration-500" data-astro-cid-oyo7lhtz></div> </div> <!-- Content --> <div class="p-8 flex flex-col gap-4" data-astro-cid-oyo7lhtz> <div class="flex flex-col gap-2" data-astro-cid-oyo7lhtz> <h3 class="text-2xl font-bold text-gold-500 text-center" data-astro-cid-oyo7lhtz>${project.name}</h3> <p class="text-gray-300 leading-relaxed text-sm text-center" data-astro-cid-oyo7lhtz> ${project.description} </p> </div> <div class="flex flex-wrap justify-center gap-2 text-[11px] uppercase tracking-wide" data-astro-cid-oyo7lhtz> <span class="px-3 py-1 rounded-full border border-gold-500/40 text-gold-400 bg-black/40" data-astro-cid-oyo7lhtz> ${project.sector} </span> ${project.caseStudySlug && renderTemplate`<span class="px-3 py-1 rounded-full border border-emerald-500/40 text-emerald-300 bg-black/40" data-astro-cid-oyo7lhtz>
Case Study
</span>`} </div> ${project.caseStudySlug ? renderTemplate`<a${addAttribute(`/blog/${project.caseStudySlug}`, "href")} class="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold hover:glow-gold-lg transition-all transform hover:scale-105 text-center text-sm" data-astro-cid-oyo7lhtz>
Ver estudo de caso
</a>` : renderTemplate`<button class="w-full px-6 py-3 rounded-xl border border-gold-500/40 text-gold-400 font-semibold hover:bg-gold-500/10 hover:border-gold-500 transition-all transform hover:scale-105 text-center text-sm" data-astro-cid-oyo7lhtz>
Ver detalhes do projeto
</button>`} </div> </div> </div>`)} </div> </div> </section>  `;
}, "C:/project-x/bmcpro.co.mz/src/components/ProjectsSection.astro", void 0);

const $$BlogSection = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${maybeRenderHead()}<section id="blog" class="py-20 relative overflow-hidden"> <div class="container mx-auto px-6 relative z-10"> <div class="text-center mb-12 md:mb-16"> <h2 class="text-4xl md:text-5xl font-bold mb-4"> <span class="text-white">Blog &</span> <span class="text-gold-500"> Notícias</span> </h2> <p class="text-lg text-gray-400 max-w-2xl mx-auto">
Artigos, insights e tendências sobre gestão, consultoria e inovação empresarial.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${articles.map((article, index) => {
    const IconComponent = article.icon;
    const isFeatured = index === 0;
    return renderTemplate`<div class="parallax-card-wrapper animate-on-scroll h-full"${addAttribute(`--animation-delay: ${index * 0.1}s`, "style")}> <article class="card-metallic rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group relative h-full flex flex-col"> ${isFeatured && renderTemplate`<span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold-500 text-dark-200 text-[10px] font-semibold tracking-wide uppercase shadow-md">
Recomendado para si
</span>`} <!-- Icon --> <div class="w-20 h-20 rounded-full bg-gradient-to-br from-gold-600/20 to-gold-500/10 flex items-center justify-center mb-6 mx-auto glow-gold"> ${renderComponent($$result, "IconComponent", IconComponent, { "class": "w-10 h-10 text-gold-500", "stroke-width": "1.5" })} </div> <!-- Category --> <p class="text-xs text-gold-500 font-medium uppercase tracking-wider text-center mb-2">${article.category}</p> <!-- Title --> <h3 class="text-2xl font-bold text-gold-500 mb-4 text-center group-hover:text-gold-400 transition-colors"> ${article.title} </h3> <!-- Excerpt --> <p class="text-gray-300 leading-relaxed text-sm text-center mb-4 flex-grow"> ${article.excerpt} </p> <!-- Meta info --> <div class="flex items-center justify-center gap-4 text-xs text-gray-500 mb-6"> <div class="flex items-center gap-1"> ${renderComponent($$result, "Calendar", $$Calendar, { "class": "w-3 h-3" })} ${article.date} </div> <span>${article.readTime} de leitura</span> </div> <a${addAttribute(`/blog/${article.slug}`, "href")} class="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold hover:glow-gold-lg transition-all transform hover:scale-105 text-center block">
Ler mais
</a> </article> </div>`;
  })} </div> <!-- View All + Email Insights --> <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"> <a href="/blog" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold hover:glow-gold-lg transition-all transform hover:scale-105 text-sm">
Ver Todos os Artigos
${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "w-4 h-4", "stroke-width": "2.5" })} </a> <a href="mailto:geral@bmcpro.co.mz?subject=Quero%20receber%20insights%20da%20BMC%20Pro%20por%20email&body=Olá%20BMC%20Pro%2C%0D%0A%0D%0AQuero%20receber%20artigos%20e%20insights%20sobre%20gestão%2C%20consultoria%20e%20inovação%20no%20meu%20email.%0D%0A%0D%0ANome%3A%0D%0AOrganização%3A%0D%0AEmail%3A%0D%0A%0D%0AObrigado%21" class="text-xs sm:text-sm text-gold-400 hover:text-gold-300 underline underline-offset-4 decoration-gold-500/60">
Receber insights por email
</a> </div> </div> </section>`;
}, "C:/project-x/bmcpro.co.mz/src/components/BlogSection.astro", void 0);

function StarfieldBackground() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    const starColors = [
      "rgba(255, 184, 0, 1)",
      // Gold
      "rgba(255, 215, 0, 1)",
      // Bright gold
      "rgba(255, 200, 50, 1)",
      // Light gold
      "rgba(255, 255, 255, 1)",
      // White
      "rgba(255, 240, 200, 1)"
      // Warm white
    ];
    const initStars = () => {
      const numStars = Math.floor(canvas.width * canvas.height / 8e3);
      starsRef.current = [];
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1e3,
          // Depth for 3D effect
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.5 + 0.1,
          color: starColors[Math.floor(Math.random() * starColors.length)]
        });
      }
    };
    initStars();
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsRef.current.forEach((star) => {
        const perspective = 500;
        const scale = perspective / (perspective + star.z);
        const x2d = (star.x - canvas.width / 2) * scale + canvas.width / 2 + mouseRef.current.x * scale;
        const y2d = (star.y - canvas.height / 2) * scale + canvas.height / 2 + mouseRef.current.y * scale;
        const size2d = star.size * scale;
        const twinkle = Math.sin(Date.now() * 3e-3 * star.speed + star.x) * 0.3 + 0.7;
        const finalOpacity = star.opacity * twinkle * scale;
        ctx.save();
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size2d * 4);
        gradient.addColorStop(0, star.color.replace("1)", `${finalOpacity})`));
        gradient.addColorStop(0.5, star.color.replace("1)", `${finalOpacity * 0.3})`));
        gradient.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace("1)", `${finalOpacity})`);
        ctx.fill();
        ctx.restore();
        star.z -= star.speed * 2;
        if (star.z <= 0) {
          star.z = 1e3;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });
      if (Math.random() < 2e-3) {
        drawShootingStar(ctx, canvas.width, canvas.height);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    const drawShootingStar = (ctx2, width, height) => {
      const startX = Math.random() * width;
      const startY = Math.random() * height * 0.5;
      const length = Math.random() * 100 + 50;
      const angle = Math.PI / 4 + Math.random() * 0.5;
      const gradient = ctx2.createLinearGradient(
        startX,
        startY,
        startX + Math.cos(angle) * length,
        startY + Math.sin(angle) * length
      );
      gradient.addColorStop(0, "rgba(255, 215, 0, 0.8)");
      gradient.addColorStop(0.5, "rgba(255, 184, 0, 0.4)");
      gradient.addColorStop(1, "transparent");
      ctx2.beginPath();
      ctx2.moveTo(startX, startY);
      ctx2.lineTo(
        startX + Math.cos(angle) * length,
        startY + Math.sin(angle) * length
      );
      ctx2.strokeStyle = gradient;
      ctx2.lineWidth = 2;
      ctx2.stroke();
    };
    animate();
    const handleResize = () => {
      resizeCanvas();
      initStars();
    };
    window.addEventListener("resize", handleResize);
    const handleScroll = () => {
      const newHeight = document.documentElement.scrollHeight;
      if (canvas.height !== newHeight) {
        canvas.height = newHeight;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "fixed inset-0 pointer-events-none z-0",
      "aria-hidden": "true"
    }
  );
}

export { $$Hero as $, StarfieldBackground as S, $$WhyChooseUs as a, $$OurProcess as b, $$OurServices as c, $$StatsSection as d, $$EcosystemSection as e, $$ProjectsSection as f, $$BlogSection as g, $$Rocket as h };
