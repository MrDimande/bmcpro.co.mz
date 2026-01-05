import type { APIRoute } from 'astro';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { saveApplication } from '../../lib/applications';
import { sendApplicationEmails } from '../../lib/email';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString();
    const jobSlug = formData.get('jobSlug')?.toString();
    const message = formData.get('message')?.toString() || '';
    const cvFile = formData.get('cv') as File;

    if (!name || !email || !phone || !jobSlug || !cvFile) {
      return new Response('Dados incompletos', { status: 400 });
    }

    // Gerar ID único
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    // Salvar CV
    const storageDir = 'storage/cvs';
    
    // Garantir que o diretório existe
    try {
        await fs.access(storageDir);
    } catch {
        await fs.mkdir(storageDir, { recursive: true });
    }

    const fileExt = path.extname(cvFile.name) || '.pdf';
    const fileName = `${id}${fileExt}`;
    const filePath = path.join(storageDir, fileName);
    
    const arrayBuffer = await cvFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    await fs.writeFile(filePath, buffer);

    // Salvar Dados da Candidatura
    const appData = {
        id,
        jobSlug,
        name,
        email,
        phone,
        message,
        cvPath: `/api/cv/${id}`, // Endpoint protegido para download
        submittedAt: timestamp
    };

    await saveApplication(appData);

    // Enviar Emails (Async - não bloquear a resposta se falhar, mas logar erro)
    sendApplicationEmails(appData).catch((err: unknown) => console.error('Erro ao enviar email:', err));

    return redirect('/recrutamento/confirmacao', 303);
    
  } catch (error) {
    console.error('Erro ao processar candidatura:', error);
    return new Response('Erro interno do servidor', { status: 500 });
  }
};
