import { trackEvent, EVENTS } from '../../chunks/analytics_CKB6XYXp.mjs';
import nodemailer from 'nodemailer';
import { s as supabase } from '../../chunks/supabase_raZd2PF0.mjs';
export { renderers } from '../../renderers.mjs';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
async function sendContactNotification(contact) {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("⚠️ SMTP não configurado. Email não enviado.");
      return false;
    }
    const mailOptions = {
      from: process.env.SMTP_FROM || "BMC Pro Services <noreply@bmcpro.co.mz>",
      to: process.env.SMTP_TO || "contacto@bmcpro.co.mz",
      subject: `📬 Novo Contacto - ${contact.name}`,
      html: generateContactEmailHtml(contact),
      text: generateContactEmailText(contact)
    };
    await transporter.sendMail(mailOptions);
    console.log("✅ Email de notificação enviado com sucesso");
    return true;
  } catch (error) {
    console.error("❌ Erro ao enviar email:", error);
    return false;
  }
}
async function sendContactConfirmation(contact) {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("⚠️ SMTP não configurado. Email de confirmação não enviado.");
      return false;
    }
    const mailOptions = {
      from: process.env.SMTP_FROM || "BMC Pro Services <noreply@bmcpro.co.mz>",
      to: contact.email,
      subject: "Recebemos a sua mensagem - BMC Pro Services",
      html: generateConfirmationEmailHtml(contact),
      text: generateConfirmationEmailText(contact)
    };
    await transporter.sendMail(mailOptions);
    console.log("✅ Email de confirmação enviado para:", contact.email);
    return true;
  } catch (error) {
    console.error("❌ Erro ao enviar email de confirmação:", error);
    return false;
  }
}
function generateContactEmailHtml(contact) {
  return `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<style>
		body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
		.container { max-width: 600px; margin: 0 auto; padding: 20px; }
		.header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
		.content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
		.field { margin-bottom: 15px; }
		.label { font-weight: bold; color: #374151; }
		.value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e5e7eb; }
		.footer { text-align: center; padding: 15px; color: #6b7280; font-size: 12px; }
		.message-box { background: white; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 10px; }
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			<h1 style="margin: 0;">📬 Novo Contacto</h1>
			<p style="margin: 5px 0 0 0; opacity: 0.9;">BMC Pro Services</p>
		</div>
		<div class="content">
			<div class="field">
				<div class="label">👤 Nome</div>
				<div class="value">${contact.name}</div>
			</div>
			<div class="field">
				<div class="label">📧 Email</div>
				<div class="value"><a href="mailto:${contact.email}">${contact.email}</a></div>
			</div>
			${contact.phone ? `
			<div class="field">
				<div class="label">📱 Telefone</div>
				<div class="value"><a href="tel:${contact.phone}">${contact.phone}</a></div>
			</div>
			` : ""}
			<div class="field">
				<div class="label">💬 Mensagem</div>
				<div class="message-box">${contact.message.replace(/\n/g, "<br>")}</div>
			</div>
			<div class="field">
				<div class="label">🕐 Data/Hora</div>
				<div class="value">${new Date(contact.timestamp).toLocaleString("pt-MZ")}</div>
			</div>
		</div>
		<div class="footer">
			<p>Este email foi gerado automaticamente pelo formulário de contacto do website.</p>
		</div>
	</div>
</body>
</html>
	`;
}
function generateContactEmailText(contact) {
  return `
NOVO CONTACTO - BMC Pro Services
================================

Nome: ${contact.name}
Email: ${contact.email}
${contact.phone ? `Telefone: ${contact.phone}` : ""}

Mensagem:
${contact.message}

Data/Hora: ${new Date(contact.timestamp).toLocaleString("pt-MZ")}
	`;
}
function generateConfirmationEmailHtml(contact) {
  return `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<style>
		body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
		.container { max-width: 600px; margin: 0 auto; padding: 20px; }
		.header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
		.content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
		.footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; background: #f3f4f6; border-radius: 0 0 8px 8px; }
		.btn { display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 15px; }
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			<h1 style="margin: 0;">✅ Mensagem Recebida</h1>
			<p style="margin: 10px 0 0 0; opacity: 0.9;">BMC Pro Services</p>
		</div>
		<div class="content">
			<p>Olá <strong>${contact.name}</strong>,</p>
			<p>Obrigado por entrar em contacto connosco! Recebemos a sua mensagem e iremos responder o mais brevemente possível.</p>
			<p>Normalmente respondemos dentro de 24-48 horas úteis.</p>
			<p>Se tiver alguma questão urgente, pode contactar-nos directamente:</p>
			<ul>
				<li>📞 Telefone: +258 82 088 3478</li>
				<li>📧 Email: contacto@bmcpro.co.mz</li>
			</ul>
			<p>Atenciosamente,<br><strong>Equipa BMC Pro Services</strong></p>
		</div>
		<div class="footer">
			<p>© ${(/* @__PURE__ */ new Date()).getFullYear()} BMC Pro Services. Todos os direitos reservados.</p>
			<p>Maputo, Moçambique</p>
		</div>
	</div>
</body>
</html>
	`;
}
function generateConfirmationEmailText(contact) {
  return `
Olá ${contact.name},

Obrigado por entrar em contacto connosco! Recebemos a sua mensagem e iremos responder o mais brevemente possível.

Normalmente respondemos dentro de 24-48 horas úteis.

Se tiver alguma questão urgente, pode contactar-nos directamente:
- Telefone: +258 82 088 3478
- Email: contacto@bmcpro.co.mz

Atenciosamente,
Equipa BMC Pro Services

---
© ${(/* @__PURE__ */ new Date()).getFullYear()} BMC Pro Services. Todos os direitos reservados.
Maputo, Moçambique
	`;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function sanitizeInput(input) {
  return input.trim().replace(/[<>]/g, "");
}
const rateLimitMap = /* @__PURE__ */ new Map();
function checkRateLimit(ip, maxRequests = 5, windowMs = 6e4) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) {
    return false;
  }
  record.count++;
  return true;
}

const prerender = false;
const POST = async ({ request }) => {
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
  const userAgent = request.headers.get("user-agent") || void 0;
  try {
    if (!checkRateLimit(ip, 5, 6e4)) {
      await trackEvent({
        event: EVENTS.CONTACT_FORM_ERROR,
        ip,
        userAgent,
        metadata: { reason: "rate_limit" }
      });
      return new Response(
        JSON.stringify({
          success: false,
          error: "Muitas tentativas. Por favor, aguarde um momento antes de tentar novamente."
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const data = await request.json();
    const { name, email, phone, message } = data;
    await trackEvent({
      event: EVENTS.CONTACT_FORM_SUBMIT,
      ip,
      userAgent,
      page: "/contact"
    });
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Por favor, preencha todos os campos obrigatórios."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email).toLowerCase();
    const sanitizedPhone = phone ? sanitizeInput(phone) : null;
    const sanitizedMessage = sanitizeInput(message);
    if (!isValidEmail(sanitizedEmail)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Por favor, insira um email válido."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "O nome deve ter entre 2 e 100 caracteres."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 2e3) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "A mensagem deve ter entre 10 e 2000 caracteres."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const { data: contact, error: insertError } = await supabase.from("contacts").insert({
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      message: sanitizedMessage,
      ip,
      status: "NEW"
    }).select().single();
    if (insertError || !contact) {
      throw new Error(insertError?.message || "Failed to save contact");
    }
    const contactData = {
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      message: sanitizedMessage,
      timestamp: contact.created_at,
      ip
    };
    Promise.all([
      sendContactNotification(contactData),
      sendContactConfirmation(contactData)
    ]).catch((err) => console.error("Erro ao enviar emails:", err));
    await trackEvent({
      event: EVENTS.CONTACT_FORM_SUCCESS,
      ip,
      userAgent,
      page: "/contact",
      metadata: { contactId: contact.id }
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensagem enviada com sucesso! Entraremos em contacto em breve."
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Erro ao processar contacto:", error);
    await trackEvent({
      event: EVENTS.CONTACT_FORM_ERROR,
      ip,
      userAgent,
      metadata: { error: String(error) }
    });
    return new Response(
      JSON.stringify({
        success: false,
        error: "Ocorreu um erro ao processar a sua mensagem. Por favor, tente novamente mais tarde."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
