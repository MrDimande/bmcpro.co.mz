import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

// Este endpoint serve o arquivo de CV de forma segura
// Ele verifica (via middleware) se o usuário está autenticado
// Os headers de autorização são validados no middleware global para rotas /api/ que precisam de proteção?
// Na verdade, o middleware.ts atual protege /seleccao, mas vamos adicionar verificação aqui ou estender o middleware.

export const GET: APIRoute = async ({ params, request }) => {
    // Verificação de segurança (Autenticação Básica)
    // O ideal é que o middleware já tenha tratado isso para rotas /seleccao,
    // mas como este é um endpoint de API, vamos verificar o header manualmente ou confiar no middleware se estiver configurado.
    // Vamos adicionar verificação básica aqui para garantir.
    
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
        return new Response('Unauthorized', { 
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Área de Seleção"'
            }
        });
    }

    const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const user = auth[0];
    const pass = auth[1];

    if (user !== 'admin' || pass !== 'admin') {
         return new Response('Forbidden', { status: 403 });
    }

    const { id } = params;
    if (!id) {
        return new Response('ID não fornecido', { status: 400 });
    }

    const storageDir = 'storage/cvs';
    // Precisamos encontrar o arquivo com a extensão correta, mas salvamos como .pdf por padrão no upload ou pegamos a extensão original.
    // Na API de upload salvamos como `${id}${fileExt}`.
    // Vamos tentar achar o arquivo. Assumindo .pdf por enquanto pois o input tem accept=".pdf"
    
    const filePath = path.join(storageDir, `${id}.pdf`);

    try {
        const fileHandle = await fs.open(filePath, 'r');
        const stat = await fileHandle.stat();
        const fileContent = await fileHandle.readFile();
        await fileHandle.close();

        return new Response(fileContent, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Length': stat.size.toString(),
                'Content-Disposition': `inline; filename="cv-${id}.pdf"`
            }
        });

    } catch (error) {
        return new Response('Arquivo não encontrado', { status: 404 });
    }
};
