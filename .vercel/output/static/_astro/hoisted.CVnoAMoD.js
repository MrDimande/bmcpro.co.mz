import"./hoisted.DigBNQeo.js";if(typeof window<"u"){const r={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(n=>{n.forEach(s=>{if(s.isIntersecting){const o=s.target.style.getPropertyValue("--animation-delay")||"0s";s.target.style.animationDelay=o,s.target.classList.add("animate-on-scroll-visible"),e.unobserve(s.target)}})},r);setTimeout(()=>{document.querySelectorAll(".animate-on-scroll").forEach(n=>{e.observe(n)})},100)}const a=document.getElementById("proposal-form-element"),t=document.getElementById("form-message"),d="https://api.bmcpro.co.mz",m=`${d.replace(/\/$/,"")}/api/contact`;a&&a.addEventListener("submit",async r=>{r.preventDefault();const e=new FormData(a),n=e.getAll("services"),s={name:e.get("name"),email:e.get("email"),phone:e.get("phone"),message:`
📋 SOLICITAÇÃO DE PROPOSTA

👤 DADOS DE CONTACTO
Nome: ${e.get("name")}
Email: ${e.get("email")}
Telefone: ${e.get("phone")}
Empresa: ${e.get("company")||"Não informado"}

🎯 SERVIÇOS PRETENDIDOS
${n.length>0?n.join(", "):"Não especificado"}

📝 DETALHES DO PROJECTO
Título: ${e.get("projectTitle")}
Descrição: ${e.get("description")}

💰 Orçamento: ${e.get("budget")||"Não especificado"}
📅 Prazo: ${e.get("timeline")||"Não especificado"}

📌 Informações Adicionais:
${e.get("additional")||"Nenhuma"}
				`.trim()},o=a.querySelector('button[type="submit"]'),l=o?.innerHTML;o&&(o.disabled=!0,o.innerHTML='<span class="animate-spin inline-block">⏳</span> Enviando...');try{const i=await fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),c=await i.json();i.ok&&c.success?(t&&(t.classList.remove("hidden","bg-red-500/10","text-red-400"),t.classList.add("bg-green-500/10","text-green-400"),t.innerHTML=`
							<div class="flex items-center justify-center gap-2">
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
								</svg>
								<span>Proposta solicitada com sucesso! Entraremos em contacto em até 48 horas.</span>
							</div>
						`),a.reset()):t&&(t.classList.remove("hidden","bg-green-500/10","text-green-400"),t.classList.add("bg-red-500/10","text-red-400"),t.textContent="✗ "+(c.error||"Erro ao enviar. Por favor, tente novamente."))}catch(i){console.error("Erro ao enviar formulário:",i),t&&(t.classList.remove("hidden","bg-green-500/10","text-green-400"),t.classList.add("bg-red-500/10","text-red-400"),t.textContent="✗ Erro de conexão. Por favor, verifique a sua ligação à internet.")}finally{o&&(o.disabled=!1,o.innerHTML=l||"Solicitar Proposta"),setTimeout(()=>{t&&t.classList.add("hidden")},8e3)}});
