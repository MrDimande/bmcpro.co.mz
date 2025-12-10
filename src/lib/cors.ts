/**
 * CORS Helper
 * Utilitários para respostas com CORS
 */

export const ALLOWED_ORIGINS = [
  'https://bmcpro.co.mz',
  'https://www.bmcpro.co.mz',
  'http://localhost:4321',
  'http://localhost:3000'
];

export function getCorsHeaders(origin?: string | null): Record<string, string> {
  const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) 
    ? origin 
    : ALLOWED_ORIGINS[0];

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Allow-Credentials': 'true'
  };
}

export function jsonResponse(
  data: unknown, 
  status: number = 200, 
  origin?: string | null
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...getCorsHeaders(origin)
    }
  });
}

export function optionsResponse(origin?: string | null): Response {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(origin)
  });
}
