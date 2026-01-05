import nodemailer from 'nodemailer';
import type { Application } from './applications';
import { getJobBySlug } from './jobs';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'sandbox.smtp.mailtrap.io', // Default to sandbox if not set
  port: parseInt(process.env.SMTP_PORT || '2525'),
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
});

export async function sendApplicationEmails(application: Application) {
  const job = getJobBySlug(application.jobSlug);
  const jobTitle = job ? job.title : 'Candidatura Espontânea';
  
  // 1. Admin Notification
  await transporter.sendMail({
    from: '"BMC Recruitment" <noreply@bmcpro.co.mz>',
    to: 'geral@bmcpro.co.mz', // In production override with Env
    subject: `Nova Candidatura: ${jobTitle} - ${application.name}`,
    html: `
      <h2>Nova Candidatura Recebida</h2>
      <p><strong>Candidato:</strong> ${application.name}</p>
      <p><strong>Vaga:</strong> ${jobTitle}</p>
      <p><strong>Email:</strong> ${application.email}</p>
      <p><strong>Telefone:</strong> ${application.phone}</p>
      <p><strong>Mensagem:</strong></p>
      <blockquote>${application.message}</blockquote>
      <br />
      <p>Acesse o painel para ver o CV: <a href="https://bmcpro.co.mz/seleccao/candidaturas">Painel Administrativo</a></p>
    `
  });

  // 2. Candidate Confirmation
  await transporter.sendMail({
    from: '"BMC Pro Services" <noreply@bmcpro.co.mz>',
    to: application.email,
    subject: `Candidatura Recebida - ${jobTitle}`,
    html: `
      <h2>Olá ${application.name},</h2>
      <p>Confirmamos a recepção da sua candidatura para a vaga de <strong>${jobTitle}</strong>.</p>
      <p>Agradecemos o seu interesse na BMC Pro Services. A nossa equipa irá analisar o seu perfil e entraremos em contacto caso as suas qualificações correspondam aos requisitos da vaga.</p>
      <br />
      <p>Atenciosamente,</p>
      <p><strong>Equipa de Recrutamento BMC Pro Services</strong></p>
    `
  });
}

// Contact Form Functions (Restored)
interface ContactData {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  timestamp?: string;
  ip?: string;
}

export async function sendContactNotification(data: ContactData) {
  await transporter.sendMail({
    from: '"BMC Contact Form" <noreply@bmcpro.co.mz>',
    to: 'geral@bmcpro.co.mz',
    subject: `Novo Contacto: ${data.name}`,
    html: `
      <h2>Nova Mensagem de Contacto</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefone:</strong> ${data.phone || 'N/A'}</p>
      <p><strong>Mensagem:</strong></p>
      <blockquote>${data.message}</blockquote>
      <br />
      <p><small>IP: ${data.ip}</small></p>
    `
  });
}

export async function sendContactConfirmation(data: ContactData) {
  await transporter.sendMail({
    from: '"BMC Pro Services" <noreply@bmcpro.co.mz>',
    to: data.email,
    subject: 'Recebemos a sua mensagem',
    html: `
      <h2>Olá ${data.name},</h2>
      <p>Obrigado por entrar em contacto com a BMC Pro Services.</p>
      <p>Recebemos a sua mensagem e a nossa equipa irá responder o mais breve possível.</p>
      <br />
      <p>Atenciosamente,</p>
      <p><strong>Equipa BMC Pro Services</strong></p>
    `
  });
}
