import { s as supabase } from './supabase_raZd2PF0.mjs';

const EVENTS = {
  CONTACT_FORM_VIEW: "contact_form_view",
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  CONTACT_FORM_SUCCESS: "contact_form_success",
  CONTACT_FORM_ERROR: "contact_form_error",
  PAGE_VIEW: "page_view",
  ADMIN_LOGIN: "admin_login",
  ADMIN_LOGOUT: "admin_logout"
};
async function trackEvent(eventData) {
  try {
    const { error } = await supabase.from("analytics").insert({
      event: eventData.event,
      page: eventData.page,
      user_agent: eventData.userAgent,
      ip: eventData.ip,
      referrer: eventData.referrer,
      metadata: eventData.metadata || {}
    });
    if (error) throw error;
    return true;
  } catch (error) {
    console.error("Error tracking event:", error);
    return false;
  }
}
async function getContactStats(days = 30) {
  const startDate = /* @__PURE__ */ new Date();
  startDate.setDate(startDate.getDate() - days);
  const startDateISO = startDate.toISOString();
  const { count: total } = await supabase.from("contacts").select("*", { count: "exact", head: true }).gte("created_at", startDateISO);
  const { data: contacts } = await supabase.from("contacts").select("status").gte("created_at", startDateISO);
  const byStatus = {};
  if (contacts) {
    contacts.forEach((c) => {
      byStatus[c.status] = (byStatus[c.status] || 0) + 1;
    });
  }
  const { data: allContacts } = await supabase.from("contacts").select("created_at").gte("created_at", startDateISO).order("created_at", { ascending: false });
  const byDayMap = {};
  if (allContacts) {
    allContacts.forEach((c) => {
      const date = c.created_at.split("T")[0];
      byDayMap[date] = (byDayMap[date] || 0) + 1;
    });
  }
  const byDay = Object.entries(byDayMap).map(([date, count]) => ({
    date: new Date(date),
    count
  }));
  return {
    total: total || 0,
    byStatus,
    byDay
  };
}
async function getEventStats(days = 30) {
  const startDate = /* @__PURE__ */ new Date();
  startDate.setDate(startDate.getDate() - days);
  const startDateISO = startDate.toISOString();
  const { data: events } = await supabase.from("analytics").select("event").gte("created_at", startDateISO);
  const result = {};
  if (events) {
    events.forEach((e) => {
      result[e.event] = (result[e.event] || 0) + 1;
    });
  }
  return result;
}
async function getDashboardSummary() {
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const todayISO = today.toISOString();
  const [
    totalResult,
    newResult,
    todayResult,
    recentResult
  ] = await Promise.all([
    supabase.from("contacts").select("*", { count: "exact", head: true }),
    supabase.from("contacts").select("*", { count: "exact", head: true }).eq("status", "NEW"),
    supabase.from("contacts").select("*", { count: "exact", head: true }).gte("created_at", todayISO),
    supabase.from("contacts").select("id, name, email, status, created_at").order("created_at", { ascending: false }).limit(5)
  ]);
  return {
    totalContacts: totalResult.count || 0,
    newContacts: newResult.count || 0,
    todayContacts: todayResult.count || 0,
    recentContacts: recentResult.data || []
  };
}

export { EVENTS, getContactStats, getDashboardSummary, getEventStats, trackEvent };
