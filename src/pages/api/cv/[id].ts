import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

// Este endpoint serve o arquivo de CV de forma segura via redirecionamento para URL assinada
export const GET: APIRoute = async ({ params, request }) => {
    // Verificação de segurança (Autenticação Básica)
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

    // O "id" aqui na verdade é o caminho do arquivo no bucket (ex: "12345.pdf")
    // Gerar URL assinada válida por 60 segundos
    const { data, error } = await supabase
        .storage
        .from('cvs')
        .createSignedUrl(id, 60);

    if (error || !data) {
        console.error('Erro ao gerar URL assinada:', error);
        return new Response('Arquivo não encontrado', { status: 404 });
    }

    return new Response(null, {
        status: 302,
        headers: {
            'Location': data.signedUrl
        }
    });
};
