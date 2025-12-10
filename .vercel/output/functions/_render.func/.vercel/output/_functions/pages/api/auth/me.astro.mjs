import { verifyAuth } from '../../../chunks/auth_B9pU15tx.mjs';
import { s as supabase } from '../../../chunks/supabase_raZd2PF0.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  try {
    const payload = await verifyAuth(request);
    if (!payload) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Não autorizado."
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const { data: user, error } = await supabase.from("users").select("id, email, name, role, last_login").eq("id", payload.userId).single();
    if (error || !user) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Utilizador não encontrado."
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          lastLogin: user.last_login
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Auth check error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Erro interno do servidor."
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
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
