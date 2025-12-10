import { d as defineMiddleware, s as sequence } from './chunks/index_v9IRgS3n.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_B0UBlvdi.mjs';
import 'cookie';

const ALLOWED_ORIGINS = [
  "https://bmcpro.co.mz",
  "https://www.bmcpro.co.mz",
  "http://localhost:4321",
  "http://localhost:3000"
];
const corsHeaders = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Max-Age": "86400"
};
const onRequest$1 = defineMiddleware(async ({ request }, next) => {
  const origin = request.headers.get("origin") || "";
  const isAllowedOrigin = ALLOWED_ORIGINS.includes(origin) || origin === "";
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders,
        "Access-Control-Allow-Origin": isAllowedOrigin ? origin : ALLOWED_ORIGINS[0]
      }
    });
  }
  const response = await next();
  const newHeaders = new Headers(response.headers);
  if (isAllowedOrigin && origin) {
    newHeaders.set("Access-Control-Allow-Origin", origin);
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

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
