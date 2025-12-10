import { getDashboardSummary, getContactStats, getEventStats } from '../../../chunks/analytics_CKB6XYXp.mjs';
import { verifyAuth } from '../../../chunks/auth_B9pU15tx.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  try {
    const payload = await verifyAuth(request);
    if (!payload) {
      return new Response(
        JSON.stringify({ success: false, error: "Não autorizado." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const [summary, contactStats, eventStats] = await Promise.all([
      getDashboardSummary(),
      getContactStats(30),
      getEventStats(30)
    ]);
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          summary,
          contactStats,
          eventStats
        }
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching dashboard:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Erro interno do servidor." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
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
