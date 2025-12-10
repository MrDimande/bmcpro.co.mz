export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
  try {
    const { login } = await import('../../../chunks/auth_B9pU15tx.mjs');
    const { EVENTS, trackEvent } = await import('../../../chunks/analytics_CKB6XYXp.mjs');
    const data = await request.json();
    const { email, password } = data;
    if (!email || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email e password são obrigatórios."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const result = await login(email, password);
    if (result.success) {
      await trackEvent({
        event: EVENTS.ADMIN_LOGIN,
        ip,
        metadata: { userId: result.user?.id }
      });
    }
    return new Response(
      JSON.stringify(result),
      {
        status: result.success ? 200 : 401,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Login error:", error);
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack");
    return new Response(
      JSON.stringify({
        success: false,
        error: "Erro interno do servidor.",
        debug: error instanceof Error ? error.message : String(error)
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
