/* empty css                                 */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DgRm4dWW.mjs';
import 'kleur/colors';
import { a as $$Layout, b as $$Header, c as $$Footer, d as $$CookieConsent } from '../chunks/CookieConsent_D7ipi_f1.mjs';
export { renderers } from '../renderers.mjs';

const $$TermosCondicoes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Termos & Condi\xE7\xF5es - BMC Pro Services", "description": "Termos e Condi\xE7\xF5es de utiliza\xE7\xE3o do website da BMC Pro Services." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <section class="py-20 relative overflow-hidden pt-32"> <div class="absolute inset-0 gradient-diagonal"></div> <div class="container mx-auto px-6 relative z-10 max-w-4xl"> <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">
Termos &amp; Condições
</h1> <p class="text-gray-400 mb-8">
Estes Termos &amp; Condições regulam a utilização do website da <span class="text-gold-500 font-semibold">BMC Pro Services</span>.
					Ao aceder e utilizar este website, o utilizador concorda com os presentes termos.
</p> <div class="space-y-8 text-sm md:text-base text-gray-300 leading-relaxed"> <section> <h2 class="text-xl font-semibold text-gold-500 mb-3">1. Utilização do website</h2> <p>
O conteúdo disponibilizado neste website tem carácter informativo e não constitui, por si só, uma proposta
							comercial ou aconselhamento profissional. A BMC Pro Services reserva-se o direito de alterar, suspender
							ou descontinuar qualquer funcionalidade ou conteúdo sem aviso prévio.
</p> </section> <section> <h2 class="text-xl font-semibold text-gold-500 mb-3">2. Propriedade intelectual</h2> <p>
Todos os textos, imagens, logótipos, marcas, gráficos e outros conteúdos presentes neste website
							são propriedade da BMC Pro Services ou utilizados com autorização dos respectivos titulares,
							encontrando-se protegidos por direitos de autor e demais legislação aplicável.
</p> <p class="mt-2">
Não é permitida a cópia, reprodução, modificação ou distribuição de qualquer conteúdo sem consentimento
							prévio e escrito da BMC Pro Services.
</p> </section> <section> <h2 class="text-xl font-semibold text-gold-500 mb-3">3. Limitação de responsabilidade</h2> <p>
A BMC Pro Services envida os melhores esforços para assegurar que a informação disponibilizada é correcta
							e actualizada, mas não garante a ausência de erros ou omissões. Em nenhuma circunstância a BMC Pro Services
							será responsável por danos directos ou indirectos resultantes da utilização ou impossibilidade de utilização
							deste website.
</p> </section> <section> <h2 class="text-xl font-semibold text-gold-500 mb-3">4. Ligações para terceiros</h2> <p>
Este website pode conter ligações para websites de terceiros. A BMC Pro Services não se responsabiliza pelo
							conteúdo, exactidão ou políticas de privacidade desses websites, não constituindo tais ligações qualquer
							endosso dos respectivos conteúdos.
</p> </section> <section> <h2 class="text-xl font-semibold text-gold-500 mb-3">5. Protecção de dados</h2> <p>
O tratamento de dados pessoais efectuado através deste website é regulado pela nossa
<a href="/politica-privacidade" class="text-gold-500 hover:text-gold-400 underline">Política de Privacidade</a>,
							que deve ser lida em conjunto com estes Termos &amp; Condições.
</p> </section> <section> <h2 class="text-xl font-semibold text-gold-500 mb-3">6. Alterações aos Termos</h2> <p>
A BMC Pro Services pode, a qualquer momento, actualizar ou alterar estes Termos &amp; Condições.
							A versão actualizada será sempre publicada neste website, sendo aplicável a partir da data da sua publicação.
</p> </section> <section> <h2 class="text-xl font-semibold text-gold-500 mb-3">7. Contactos</h2> <p>
Para qualquer questão relacionada com estes Termos &amp; Condições, pode contactar-nos através de:
</p> <ul class="list-disc list-inside mt-2 space-y-1 text-gray-300"> <li>Email: <a href="mailto:geral@bmcpro.co.mz" class="text-gold-500 hover:text-gold-400 underline">geral@bmcpro.co.mz</a></li> <li>Telefone: +258 82 088 3478</li> </ul> </section> </div> <p class="text-gray-500 text-xs mt-10">
Última actualização: Dezembro 2025
</p> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "CookieConsent", $$CookieConsent, {})} ` })}`;
}, "C:/project-x/bmcpro.co.mz/src/pages/termos-condicoes.astro", void 0);

const $$file = "C:/project-x/bmcpro.co.mz/src/pages/termos-condicoes.astro";
const $$url = "/termos-condicoes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$TermosCondicoes,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
