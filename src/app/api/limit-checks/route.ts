import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";
import {
  getClientIp, checkOrigin, isSuspicious, isValidPhone, isValidName,
  isAllowedJob, isAllowedLoanType, rateLimitOk,
} from "@/lib/security";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  if (!checkOrigin(req)) {
    return Response.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "invalid request" }, { status: 400 });
  }

  if (body.website || body.url || body.company) {
    return Response.json({ ok: true });
  }

  const ip = getClientIp(req);
  if (!rateLimitOk(ip)) {
    return Response.json({ ok: false, error: "too many requests" }, { status: 429 });
  }

  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const job = body.job ? String(body.job).trim() : "";
  const loanType = body.loan_type ? String(body.loan_type).trim() : "";
  const age = typeof body.age === "number" && Number.isFinite(body.age) ? body.age : null;

  if (!isValidName(name)) return Response.json({ ok: false, error: "invalid name" }, { status: 400 });
  if (!isValidPhone(phone)) return Response.json({ ok: false, error: "invalid phone" }, { status: 400 });
  if (job && !isAllowedJob(job)) return Response.json({ ok: false, error: "invalid job" }, { status: 400 });
  if (loanType && !isAllowedLoanType(loanType)) return Response.json({ ok: false, error: "invalid loan_type" }, { status: 400 });
  if (age !== null && (age < 18 || age > 100)) return Response.json({ ok: false, error: "invalid age" }, { status: 400 });
  if (isSuspicious(name) || isSuspicious(phone)) {
    return Response.json({ ok: false, error: "invalid input" }, { status: 400 });
  }

  const { error } = await supabase.from("limit_checks").insert({
    name: name.slice(0, 30),
    age,
    phone: phone.slice(0, 20),
    job: job || null,
    loan_type: loanType || null,
    ip_address: ip,
  });

  if (error) return Response.json({ ok: false, error: error.message }, { status: 500 });
  return Response.json({ ok: true });
}
