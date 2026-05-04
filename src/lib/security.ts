import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export function getClientIp(req: NextRequest): string | null {
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const xri = req.headers.get("x-real-ip");
  if (xri) return xri.trim();
  return null;
}

const ALLOWED_HOSTS = ["jn-loan.co.kr", "www.jn-loan.co.kr", "jn-loan.hsweb.pics"];

export function checkOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const host = req.headers.get("host");

  const ok = (urlStr: string | null) => {
    if (!urlStr) return false;
    try {
      const u = new URL(urlStr);
      return ALLOWED_HOSTS.includes(u.hostname);
    } catch { return false; }
  };

  if (origin && ok(origin)) return true;
  if (referer && ok(referer)) return true;
  if (host && ALLOWED_HOSTS.includes(host.split(":")[0])) return true;
  return false;
}

const SUSPICIOUS = [
  /<\s*script/i, /<!--/i, /-->/i, /<\s*iframe/i, /onerror\s*=/i, /onload\s*=/i,
  /javascript:/i, /\bunion\s+select\b/i, /\bselect\s+.*\bfrom\b/i, /\bdrop\s+table\b/i,
  /\bor\s+1\s*=\s*1/i, /\$\{/, /\bexec\s*\(/i, /\bsystem\s*\(/i,
];

export function isSuspicious(text: string | null | undefined): boolean {
  if (!text) return false;
  return SUSPICIOUS.some((re) => re.test(text));
}

const KOREAN_PHONE = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;

export function isValidPhone(p: string): boolean {
  return KOREAN_PHONE.test(p.replace(/\s+/g, ""));
}

const NAME_OK = /^[가-힣a-zA-Z][가-힣a-zA-Z\s.]{0,29}$/;

export function isValidName(n: string): boolean {
  return NAME_OK.test(n.trim());
}

const ALLOWED_JOBS = new Set(["무직자", "직장인", "개인사업자", "법인사업자"]);
const ALLOWED_LOAN_TYPES = new Set([
  "자동차담보대출", "전월세담보대출", "무직자 대출", "비상금대출",
  "개인회생대출", "여성우대대출",
]);

export function isAllowedJob(j: string): boolean { return ALLOWED_JOBS.has(j); }
export function isAllowedLoanType(t: string): boolean { return ALLOWED_LOAN_TYPES.has(t); }

const recent = new Map<string, number>();
const RATE_WINDOW_MS = 30_000;

export function rateLimitOk(ip: string | null): boolean {
  if (!ip) return true;
  const now = Date.now();
  for (const [k, t] of recent) if (now - t > RATE_WINDOW_MS * 2) recent.delete(k);
  const last = recent.get(ip);
  if (last && now - last < RATE_WINDOW_MS) return false;
  recent.set(ip, now);
  return true;
}

const DAILY_IP_LIMIT = 3;
const DAILY_WINDOW_HOURS = 24;

export async function checkDailyIpLimit(ip: string | null): Promise<{ ok: boolean; count: number }> {
  if (!ip) return { ok: true, count: 0 };
  const since = new Date(Date.now() - DAILY_WINDOW_HOURS * 60 * 60 * 1000).toISOString();
  const [c, l] = await Promise.all([
    supabase.from("consultations").select("id", { count: "exact", head: true }).eq("ip_address", ip).gte("created_at", since),
    supabase.from("limit_checks").select("id", { count: "exact", head: true }).eq("ip_address", ip).gte("created_at", since),
  ]);
  const total = (c.count ?? 0) + (l.count ?? 0);
  return { ok: total < DAILY_IP_LIMIT, count: total };
}

export async function isDuplicateRecent(ip: string | null, phone: string, table: "consultations" | "limit_checks"): Promise<boolean> {
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const normalizedPhone = phone.replace(/[^0-9]/g, "");
  if (!normalizedPhone) return false;

  const filters: string[] = [];
  if (ip) filters.push(`ip_address.eq.${ip}`);
  filters.push(`phone.eq.${phone}`);
  filters.push(`phone.eq.${normalizedPhone}`);

  const { count } = await supabase
    .from(table)
    .select("id", { count: "exact", head: true })
    .or(filters.join(","))
    .gte("created_at", since);
  return (count ?? 0) > 0;
}
