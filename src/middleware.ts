/**
 * Middleware Global - CORS e Headers
 * Configuração para funcionar na Hostinger
 */

import { defineMiddleware } from 'astro:middleware';

// Origens permitidas
const ALLOWED_ORIGINS = [
  'https://bmcpro.co.mz',
  'https://www.bmcpro.co.mz',
  'http://localhost:4321',
  'http://localhost:3000'
];

// Headers CORS padrão
const corsHeaders = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Max-Age': '86400'
};

export const onRequest = defineMiddleware(async ({ request }, next) => {
  const origin = request.headers.get('origin') || '';
  const isAllowedOrigin = ALLOWED_ORIGINS.includes(origin) || origin === '';
  
  // Preflight OPTIONS request
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders,
        'Access-Control-Allow-Origin': isAllowedOrigin ? origin : ALLOWED_ORIGINS[0]
      }
    });
  }

  // Processar request normalmente
  const response = await next();

  // Adicionar headers CORS à resposta
  const newHeaders = new Headers(response.headers);
  
  if (isAllowedOrigin && origin) {
    newHeaders.set('Access-Control-Allow-Origin', origin);
  }
  
  Object.entries(corsHeaders).forEach(([key, value]) => {
    if (!newHeaders.has(key)) {
      newHeaders.set(key, value);
    }
  });

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
});
