import { verifyAuth } from '../../../chunks/auth_B9pU15tx.mjs';
import { s as supabase } from '../../../chunks/supabase_raZd2PF0.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ request, url }) => {
  try {
    const payload = await verifyAuth(request);
    if (!payload) {
      return new Response(
        JSON.stringify({ success: false, error: "Não autorizado." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "20");
    const status = url.searchParams.get("status");
    const search = url.searchParams.get("search");
    const offset = (page - 1) * limit;
    let query = supabase.from("contacts").select("*", { count: "exact" });
    if (status) {
      query = query.eq("status", status);
    }
    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,message.ilike.%${search}%`);
    }
    const { data: contacts, count, error } = await query.order("created_at", { ascending: false }).range(offset, offset + limit - 1);
    if (error) {
      throw error;
    }
    const total = count || 0;
    return new Response(
      JSON.stringify({
        success: true,
        data: contacts,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Erro interno do servidor." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
const PATCH = async ({ request }) => {
  try {
    const payload = await verifyAuth(request);
    if (!payload) {
      return new Response(
        JSON.stringify({ success: false, error: "Não autorizado." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const data = await request.json();
    const { id, status } = data;
    if (!id || !status) {
      return new Response(
        JSON.stringify({ success: false, error: "ID e status são obrigatórios." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const validStatuses = ["NEW", "READ", "REPLIED", "ARCHIVED"];
    if (!validStatuses.includes(status)) {
      return new Response(
        JSON.stringify({ success: false, error: "Status inválido." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { data: contact, error } = await supabase.from("contacts").update({ status }).eq("id", id).select().single();
    if (error) {
      throw error;
    }
    return new Response(
      JSON.stringify({ success: true, data: contact }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating contact:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Erro interno do servidor." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
const DELETE = async ({ request }) => {
  try {
    const payload = await verifyAuth(request);
    if (!payload) {
      return new Response(
        JSON.stringify({ success: false, error: "Não autorizado." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const data = await request.json();
    const { id } = data;
    if (!id) {
      return new Response(
        JSON.stringify({ success: false, error: "ID é obrigatório." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (error) {
      throw error;
    }
    return new Response(
      JSON.stringify({ success: true, message: "Contacto eliminado." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting contact:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Erro interno do servidor." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	DELETE,
	GET,
	PATCH,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
