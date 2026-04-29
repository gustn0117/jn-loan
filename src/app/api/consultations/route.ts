import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export const runtime = "nodejs";

function getClientIp(req: NextRequest): string | null {
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const xri = req.headers.get("x-real-ip");
  if (xri) return xri.trim();
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const ip = getClientIp(req);

    const { error } = await supabase.from("consultations").insert({
      name: String(body.name || "").slice(0, 100),
      age: typeof body.age === "number" && Number.isFinite(body.age) ? body.age : null,
      phone: String(body.phone || "").slice(0, 30),
      job: body.job ? String(body.job).slice(0, 30) : null,
      loan_type: body.loan_type ? String(body.loan_type).slice(0, 50) : null,
      amount: body.amount ? String(body.amount).slice(0, 50) : null,
      message: body.message ? String(body.message).slice(0, 2000) : null,
      ip_address: ip,
    });

    if (error) return Response.json({ ok: false, error: error.message }, { status: 500 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "invalid request" }, { status: 400 });
  }
}
