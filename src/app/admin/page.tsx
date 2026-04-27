"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

type Consultation = {
  id: number;
  name: string;
  age: number | null;
  phone: string;
  job: string | null;
  loan_type: string | null;
  amount: string | null;
  message: string | null;
  created_at: string;
};

type LimitCheck = {
  id: number;
  name: string;
  age: number | null;
  phone: string;
  job: string | null;
  loan_type: string | null;
  created_at: string;
};

const SESSION_KEY = "jn_admin_auth";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [pw, setPw] = useState("");
  const [tab, setTab] = useState<"consultations" | "limit_checks">("consultations");
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [limitChecks, setLimitChecks] = useState<LimitCheck[]>([]);
  const [selectedC, setSelectedC] = useState<Set<number>>(new Set());
  const [selectedL, setSelectedL] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1") {
      setAuthed(true);
    }
    setHydrated(true);
  }, []);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (pw === "1234") {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAuthed(true);
    } else alert("비밀번호가 틀렸습니다.");
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setPw("");
  }

  useEffect(() => {
    if (!authed) return;
    loadData();
  }, [authed]);

  async function loadData() {
    const { data: c } = await supabase.from("consultations").select("*").order("created_at", { ascending: false });
    const { data: l } = await supabase.from("limit_checks").select("*").order("created_at", { ascending: false });
    if (c) setConsultations(c);
    if (l) setLimitChecks(l);
  }

  async function deleteConsultation(id: number) {
    if (!confirm("삭제하시겠습니까?")) return;
    await supabase.from("consultations").delete().eq("id", id);
    setConsultations((prev) => prev.filter((c) => c.id !== id));
    setSelectedC((prev) => { const n = new Set(prev); n.delete(id); return n; });
  }

  async function deleteLimitCheck(id: number) {
    if (!confirm("삭제하시겠습니까?")) return;
    await supabase.from("limit_checks").delete().eq("id", id);
    setLimitChecks((prev) => prev.filter((l) => l.id !== id));
    setSelectedL((prev) => { const n = new Set(prev); n.delete(id); return n; });
  }

  function toggleOne(id: number) {
    if (tab === "consultations") {
      setSelectedC((prev) => { const n = new Set(prev); if (n.has(id)) n.delete(id); else n.add(id); return n; });
    } else {
      setSelectedL((prev) => { const n = new Set(prev); if (n.has(id)) n.delete(id); else n.add(id); return n; });
    }
  }

  function toggleAll() {
    if (tab === "consultations") {
      if (selectedC.size === consultations.length) setSelectedC(new Set());
      else setSelectedC(new Set(consultations.map((c) => c.id)));
    } else {
      if (selectedL.size === limitChecks.length) setSelectedL(new Set());
      else setSelectedL(new Set(limitChecks.map((l) => l.id)));
    }
  }

  async function deleteSelected() {
    const isC = tab === "consultations";
    const ids = Array.from(isC ? selectedC : selectedL);
    if (ids.length === 0) return;
    if (!confirm(`선택한 ${ids.length}건을 삭제하시겠습니까?`)) return;

    const table = isC ? "consultations" : "limit_checks";
    const { error } = await supabase.from(table).delete().in("id", ids);
    if (error) { alert("삭제 중 오류가 발생했습니다."); return; }

    if (isC) {
      setConsultations((prev) => prev.filter((c) => !selectedC.has(c.id)));
      setSelectedC(new Set());
    } else {
      setLimitChecks((prev) => prev.filter((l) => !selectedL.has(l.id)));
      setSelectedL(new Set());
    }
  }

  function downloadCSV() {
    const isConsultations = tab === "consultations";
    const rows = isConsultations ? consultations : limitChecks;
    if (rows.length === 0) { alert("다운로드할 데이터가 없습니다."); return; }

    const headers = isConsultations
      ? ["번호", "이름", "나이", "연락처", "직업", "대출종류", "희망금액", "상담내용", "신청일시"]
      : ["번호", "이름", "나이", "연락처", "직업", "대출종류", "신청일시"];

    const escape = (v: unknown) => {
      const s = v === null || v === undefined ? "" : String(v);
      return `"${s.replace(/"/g, '""')}"`;
    };

    const body = rows.map((r) => {
      const date = new Date(r.created_at).toLocaleString("ko-KR");
      if (isConsultations) {
        const c = r as Consultation;
        return [c.id, c.name, c.age ?? "", c.phone, c.job ?? "", c.loan_type ?? "", c.amount ?? "", c.message ?? "", date].map(escape).join(",");
      }
      const l = r as LimitCheck;
      return [l.id, l.name, l.age ?? "", l.phone, l.job ?? "", l.loan_type ?? "", date].map(escape).join(",");
    });

    const csv = "\ufeff" + [headers.map(escape).join(","), ...body].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const today = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `${isConsultations ? "상담신청" : "한도조회"}_${today}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  if (!hydrated) {
    return <div style={{ minHeight: "100vh", background: "#f5f5f5" }} />;
  }

  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" }}>
        <form onSubmit={login} style={{ background: "#fff", borderRadius: 20, padding: "48px 40px", border: "1px solid #eee", width: 360, textAlign: "center" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#f3f7f4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <svg width="24" height="24" fill="none" stroke="#1B7D3A" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "#111", marginBottom: 8 }}>관리자 로그인</h2>
          <p style={{ color: "#aaa", fontSize: 13, marginBottom: 28 }}>비밀번호를 입력하세요</p>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호"
            style={{ width: "100%", border: "1px solid #e0e0e0", borderRadius: 12, padding: "14px 16px", fontSize: 14, outline: "none", marginBottom: 16, textAlign: "center" }}
          />
          <button type="submit" style={{ width: "100%", background: "#1B7D3A", color: "#fff", fontWeight: 700, padding: "14px 0", borderRadius: 12, fontSize: 15, border: "none", cursor: "pointer" }}>
            로그인
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "16px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: 18, fontWeight: 800, color: "#111" }}>제이앤대부 관리자</h1>
          <button onClick={logout} style={{ background: "none", border: "1px solid #ddd", borderRadius: 8, padding: "8px 16px", fontSize: 13, cursor: "pointer", color: "#666" }}>로그아웃</button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <button onClick={() => setTab("consultations")} style={{ padding: "10px 24px", borderRadius: 10, border: "none", fontSize: 14, fontWeight: 600, cursor: "pointer", background: tab === "consultations" ? "#1B7D3A" : "#fff", color: tab === "consultations" ? "#fff" : "#666" }}>
            대출 상담 신청 ({consultations.length})
          </button>
          <button onClick={() => setTab("limit_checks")} style={{ padding: "10px 24px", borderRadius: 10, border: "none", fontSize: 14, fontWeight: 600, cursor: "pointer", background: tab === "limit_checks" ? "#1B7D3A" : "#fff", color: tab === "limit_checks" ? "#fff" : "#666" }}>
            무료 한도 조회 ({limitChecks.length})
          </button>
          <button onClick={downloadCSV} style={{ marginLeft: "auto", padding: "10px 20px", borderRadius: 10, border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer", background: "#1B7D3A", color: "#fff", display: "inline-flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            CSV 다운로드
          </button>
          <button onClick={loadData} style={{ padding: "10px 20px", borderRadius: 10, border: "1px solid #ddd", fontSize: 13, cursor: "pointer", background: "#fff", color: "#666" }}>
            새로고침
          </button>
        </div>

        {/* Selection bar */}
        {(() => {
          const total = tab === "consultations" ? consultations.length : limitChecks.length;
          const selCount = tab === "consultations" ? selectedC.size : selectedL.size;
          const allSelected = total > 0 && selCount === total;
          if (total === 0) return null;
          return (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, background: "#fff", borderRadius: 12, padding: "12px 20px", border: "1px solid #eee" }}>
              <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14, color: "#333" }}>
                <input type="checkbox" checked={allSelected} onChange={toggleAll} style={{ width: 18, height: 18, accentColor: "#1B7D3A", cursor: "pointer" }} />
                전체선택
              </label>
              <span style={{ color: "#bbb", fontSize: 13 }}>|</span>
              <span style={{ fontSize: 13, color: "#666" }}>선택: <strong style={{ color: "#1B7D3A" }}>{selCount}</strong>건</span>
              <button
                onClick={deleteSelected}
                disabled={selCount === 0}
                style={{
                  marginLeft: "auto",
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: "none",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: selCount === 0 ? "not-allowed" : "pointer",
                  background: selCount === 0 ? "#f0f0f0" : "#dc2626",
                  color: selCount === 0 ? "#bbb" : "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
                선택 삭제
              </button>
            </div>
          );
        })()}

        {/* Content */}
        {tab === "consultations" ? (
          consultations.length === 0 ? (
            <div style={{ background: "#fff", borderRadius: 16, padding: "64px 0", textAlign: "center", color: "#ccc", border: "1px solid #eee" }}>아직 신청이 없습니다</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {consultations.map((c) => (
                <div key={c.id} style={{ background: "#fff", borderRadius: 16, padding: "24px 28px", border: selectedC.has(c.id) ? "1px solid #1B7D3A" : "1px solid #eee", transition: "border-color 0.15s" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <input type="checkbox" checked={selectedC.has(c.id)} onChange={() => toggleOne(c.id)} style={{ width: 18, height: 18, accentColor: "#1B7D3A", cursor: "pointer" }} />
                      <span style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>{c.name}</span>
                      {c.age && <span style={{ fontSize: 14, color: "#999" }}>{c.age}세</span>}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 12, color: "#bbb" }}>{new Date(c.created_at).toLocaleString("ko-KR")}</span>
                      <button onClick={() => deleteConsultation(c.id)} style={{ background: "none", border: "none", color: "#ddd", cursor: "pointer", fontSize: 18 }}>x</button>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 14 }}>
                    <div><span style={{ color: "#999" }}>연락처: </span><span style={{ color: "#1B7D3A", fontWeight: 600 }}>{c.phone}</span></div>
                    {c.job && <div><span style={{ color: "#999" }}>직업: </span><span style={{ color: "#333" }}>{c.job}</span></div>}
                    {c.loan_type && <div><span style={{ color: "#999" }}>대출종류: </span><span style={{ color: "#333" }}>{c.loan_type}</span></div>}
                    {c.amount && <div><span style={{ color: "#999" }}>희망금액: </span><span style={{ color: "#333" }}>{c.amount}</span></div>}
                  </div>
                  {c.message && <p style={{ marginTop: 12, padding: "12px 16px", background: "#f9f9f9", borderRadius: 10, fontSize: 14, color: "#555", lineHeight: 1.6 }}>{c.message}</p>}
                </div>
              ))}
            </div>
          )
        ) : (
          limitChecks.length === 0 ? (
            <div style={{ background: "#fff", borderRadius: 16, padding: "64px 0", textAlign: "center", color: "#ccc", border: "1px solid #eee" }}>아직 조회 신청이 없습니다</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {limitChecks.map((l) => (
                <div key={l.id} style={{ background: "#fff", borderRadius: 16, padding: "24px 28px", border: selectedL.has(l.id) ? "1px solid #1B7D3A" : "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "border-color 0.15s" }}>
                  <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap", fontSize: 14 }}>
                    <input type="checkbox" checked={selectedL.has(l.id)} onChange={() => toggleOne(l.id)} style={{ width: 18, height: 18, accentColor: "#1B7D3A", cursor: "pointer" }} />
                    <span style={{ fontWeight: 700, color: "#111", fontSize: 16 }}>{l.name}</span>
                    {l.age && <span style={{ color: "#999" }}>{l.age}세</span>}
                    <span style={{ color: "#1B7D3A", fontWeight: 600 }}>{l.phone}</span>
                    {l.job && <span style={{ color: "#555" }}>{l.job}</span>}
                    {l.loan_type && <span style={{ color: "#666" }}>{l.loan_type}</span>}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 12, color: "#bbb" }}>{new Date(l.created_at).toLocaleString("ko-KR")}</span>
                    <button onClick={() => deleteLimitCheck(l.id)} style={{ background: "none", border: "none", color: "#ddd", cursor: "pointer", fontSize: 18 }}>x</button>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
