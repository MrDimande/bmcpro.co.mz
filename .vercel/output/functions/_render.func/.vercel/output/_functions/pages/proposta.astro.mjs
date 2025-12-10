/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
import { $ as $$, e as $$FileText, a as $$Layout, b as $$Header, c as $$Footer, d as $$CookieConsent } from '../chunks/CookieConsent_D7ipi_f1.mjs';
import { $ as $$User, a as $$Send } from '../chunks/User_B5HAeY7F.mjs';
import { $ as $$Briefcase } from '../chunks/Briefcase_CALSXkIO.mjs';
import { $ as $$CheckCircle } from '../chunks/CheckCircle_DXb0WGOb.mjs';
import { $ as $$Calendar } from '../chunks/Calendar_BCAgUDFq.mjs';
/* empty css                                 */
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://api.bmcpro.co.mz");
const $$DollarSign = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DollarSign;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "dollar-sign", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<line x1="12" x2="12" y1="2" y2="22"></line> <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path> ` })}`;
}, "C:/project-x/bmcpro.co.mz/node_modules/lucide-astro/dist/DollarSign.astro", void 0);

const $$ProposalForm = createComponent(async ($$result, $$props, $$slots) => {
  const services = [
    { id: "consultoria", label: "Consultoria Empresarial" },
    { id: "formacao", label: "Forma\xE7\xE3o e Capacita\xE7\xE3o" },
    { id: "ti", label: "Solu\xE7\xF5es de TI" },
    { id: "gestao", label: "Gest\xE3o de Projectos" },
    { id: "marketing", label: "Marketing Digital" },
    { id: "contabilidade", label: "Contabilidade e Finan\xE7as" },
    { id: "rh", label: "Recursos Humanos" },
    { id: "outro", label: "Outro" }
  ];
  const budgetRanges = [
    { id: "ate-50k", label: "At\xE9 50.000 MZN" },
    { id: "50k-150k", label: "50.000 - 150.000 MZN" },
    { id: "150k-500k", label: "150.000 - 500.000 MZN" },
    { id: "500k-1m", label: "500.000 - 1.000.000 MZN" },
    { id: "acima-1m", label: "Acima de 1.000.000 MZN" },
    { id: "a-definir", label: "A definir" }
  ];
  const timelines = [
    { id: "urgente", label: "Urgente (menos de 1 m\xEAs)" },
    { id: "1-3-meses", label: "1 a 3 meses" },
    { id: "3-6-meses", label: "3 a 6 meses" },
    { id: "6-12-meses", label: "6 a 12 meses" },
    { id: "flexivel", label: "Flex\xEDvel" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="proposal-form" class="py-20 relative overflow-hidden"> <!-- Background --> <div class="absolute inset-0 gradient-diagonal"></div> <div class="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div> <div class="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div> <div class="container mx-auto px-6 relative z-10"> <div class="max-w-4xl mx-auto"> <!-- Header --> <div class="text-center mb-12 animate-on-scroll"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"> ${renderComponent($$result, "FileText", $$FileText, { "class": "w-4 h-4 text-gold-500" })} <span class="text-gold-500 text-sm font-medium">Solicitar Proposta</span> </div> <h1 class="text-4xl md:text-5xl font-bold mb-4"> <span class="text-white">Conte-nos sobre o</span> <span class="text-gold-500"> seu projecto</span> </h1> <p class="text-lg text-gray-400 max-w-2xl mx-auto">
Preencha o formulário abaixo com os detalhes do seu projecto e receberá uma proposta personalizada em até 48 horas.
</p> </div> <!-- Form --> <div class="glass-dark rounded-3xl p-8 md:p-10 border border-gold-500/20 animate-on-scroll" style="animation-delay: 0.1s;"> <form id="proposal-form-element" class="space-y-8"> <!-- Section: Dados Pessoais --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gold-500 flex items-center gap-2 pb-2 border-b border-gold-500/20"> ${renderComponent($$result, "User", $$User, { "class": "w-5 h-5" })}
Dados de Contacto
</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
Nome Completo *
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-xl bg-dark-50/50 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:glow-gold transition-all" placeholder="O seu nome"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
Email *
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-xl bg-dark-50/50 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:glow-gold transition-all" placeholder="seu@email.com"> </div> <div> <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">
Telefone *
</label> <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 rounded-xl bg-dark-50/50 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:glow-gold transition-all" placeholder="+258 XX XXX XXXX"> </div> <div> <label for="company" class="block text-sm font-medium text-gray-300 mb-2">
Empresa / Organização
</label> <input type="text" id="company" name="company" class="w-full px-4 py-3 rounded-xl bg-dark-50/50 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:glow-gold transition-all" placeholder="Nome da empresa"> </div> </div> </div> <!-- Section: Serviços --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gold-500 flex items-center gap-2 pb-2 border-b border-gold-500/20"> ${renderComponent($$result, "Briefcase", $$Briefcase, { "class": "w-5 h-5" })}
Serviços Pretendidos
</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-3"> ${services.map((service) => renderTemplate`<label class="relative cursor-pointer group"> <input type="checkbox" name="services"${addAttribute(service.id, "value")} class="peer sr-only"> <div class="px-4 py-3 rounded-xl border border-gold-500/20 bg-dark-50/30 text-gray-400 text-sm text-center transition-all peer-checked:border-gold-500 peer-checked:bg-gold-500/10 peer-checked:text-gold-500 hover:border-gold-500/50 hover:bg-dark-50/50"> ${service.label} </div> <div class="absolute top-1 right-1 w-4 h-4 rounded-full bg-gold-500 text-dark-200 items-center justify-center hidden peer-checked:flex"> ${renderComponent($$result, "CheckCircle", $$CheckCircle, { "class": "w-3 h-3" })} </div> </label>`)} </div> </div> <!-- Section: Detalhes do Projecto --> <div class="space-y-6"> <h3 class="text-lg font-semibold text-gold-500 flex items-center gap-2 pb-2 border-b border-gold-500/20"> ${renderComponent($$result, "FileText", $$FileText, { "class": "w-5 h-5" })}
Detalhes do Projecto
</h3> <div> <label for="project-title" class="block text-sm font-medium text-gray-300 mb-2">
Título do Projecto *
</label> <input type="text" id="project-title" name="projectTitle" required class="w-full px-4 py-3 rounded-xl bg-dark-50/50 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:glow-gold transition-all" placeholder="Ex: Implementação de Sistema de Gestão"> </div> <div> <label for="description" class="block text-sm font-medium text-gray-300 mb-2">
Descrição do Projecto *
</label> <textarea id="description" name="description" required rows="5" class="w-full px-4 py-3 rounded-xl bg-dark-50/50 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:glow-gold transition-all resize-none" placeholder="Descreva os objectivos, requisitos e expectativas do seu projecto..."></textarea> </div> <div class="grid md:grid-cols-2 gap-6"> <div> <label for="budget" class="block text-sm font-medium text-gray-300 mb-2"> <div class="flex items-center gap-2"> ${renderComponent($$result, "DollarSign", $$DollarSign, { "class": "w-4 h-4 text-gold-500" })}
Orçamento Estimado
</div> </label> <select id="budget" name="budget" class="w-full px-4 py-3 rounded-xl bg-dark-50/50 border border-gold-500/20 text-white focus:outline-none focus:border-gold-500 focus:glow-gold transition-all"> <option value="" class="bg-dark-100">Seleccione...</option> ${budgetRanges.map((range) => renderTemplate`<option${addAttribute(range.id, "value")} class="bg-dark-100">${range.label}</option>`)} </select> </div> <div> <label for="timeline" class="block text-sm font-medium text-gray-300 mb-2"> <div class="flex items-center gap-2"> ${renderComponent($$result, "Calendar", $$Calendar, { "class": "w-4 h-4 text-gold-500" })}
Prazo Desejado
</div> </label> <select id="timeline" name="timeline" class="w-full px-4 py-3 rounded-xl bg-dark-50/50 border border-gold-500/20 text-white focus:outline-none focus:border-gold-500 focus:glow-gold transition-all"> <option value="" class="bg-dark-100">Seleccione...</option> ${timelines.map((time) => renderTemplate`<option${addAttribute(time.id, "value")} class="bg-dark-100">${time.label}</option>`)} </select> </div> </div> <div> <label for="additional" class="block text-sm font-medium text-gray-300 mb-2">
Informações Adicionais
</label> <textarea id="additional" name="additional" rows="3" class="w-full px-4 py-3 rounded-xl bg-dark-50/50 border border-gold-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:glow-gold transition-all resize-none" placeholder="Alguma informação adicional que considere relevante..."></textarea> </div> </div> <!-- Submit --> <div class="pt-4"> <button type="submit" class="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-200 font-semibold text-lg hover:glow-gold-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"> ${renderComponent($$result, "Send", $$Send, { "class": "w-5 h-5" })}
Solicitar Proposta
</button> <p class="text-center text-gray-500 text-sm mt-4">
Ao submeter este formulário, concorda com a nossa política de privacidade.
</p> </div> <div id="form-message" class="hidden text-center py-4 rounded-xl"></div> </form> </div> <!-- Trust Badges --> <div class="mt-12 text-center animate-on-scroll" style="animation-delay: 0.2s;"> <div class="flex flex-wrap justify-center gap-8 text-gray-400 text-sm"> <div class="flex items-center gap-2"> ${renderComponent($$result, "CheckCircle", $$CheckCircle, { "class": "w-5 h-5 text-gold-500" })} <span>Resposta em 48h</span> </div> <div class="flex items-center gap-2"> ${renderComponent($$result, "CheckCircle", $$CheckCircle, { "class": "w-5 h-5 text-gold-500" })} <span>Proposta Personalizada</span> </div> <div class="flex items-center gap-2"> ${renderComponent($$result, "CheckCircle", $$CheckCircle, { "class": "w-5 h-5 text-gold-500" })} <span>Sem Compromisso</span> </div> </div> </div> </div> </div> </section> `;
}, "C:/project-x/bmcpro.co.mz/src/components/ProposalForm.astro", void 0);

const $$Proposta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Solicitar Proposta - BMC Pro Services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "ProposalForm", $$ProposalForm, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "CookieConsent", $$CookieConsent, {})} ` })}  `;
}, "C:/project-x/bmcpro.co.mz/src/pages/proposta.astro", void 0);

const $$file = "C:/project-x/bmcpro.co.mz/src/pages/proposta.astro";
const $$url = "/proposta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Proposta,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
