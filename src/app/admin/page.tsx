"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

type Consultation = {
  id: number;
  name: string;
  age: number | null;
  phone: string;
  loan_type: string | null;
  amount: string | null;
  message: string | null;
  created_at: string;
};

type LimitCheck = {
  id: number;
  name: string;
  phone: string;
  loan_type: string | null;
  created_at: string;
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [tab, setTab] = useState<"consultations" | "limit_checks">("consultations");
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [limitChecks, setLimitChecks] = useState<LimitCheck[]>([]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (pw === "1234") setAuthed(true);
    else alert("비밀번호가 틀렸습니다.");
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
  }

  async function deleteLimitCheck(id: number) {
    if (!confirm("삭제하시겠습니까?")) return;
    await supabase.from("limit_checks").delete().eq("id", id);
    setLimitChecks((prev) => prev.filter((l) => l.id !== id));
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
          <button onClick={() => setAuthed(false)} style={{ background: "none", border: "1px solid #ddd", borderRadius: 8, padding: "8px 16px", fontSize: 13, cursor: "pointer", color: "#666" }}>로그아웃</button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          <button onClick={() => setTab("consultations")} style={{ padding: "10px 24px", borderRadius: 10, border: "none", fontSize: 14, fontWeight: 600, cursor: "pointer", background: tab === "consultations" ? "#1B7D3A" : "#fff", color: tab === "consultations" ? "#fff" : "#666" }}>
            대출 상담 신청 ({consultations.length})
          </button>
          <button onClick={() => setTab("limit_checks")} style={{ padding: "10px 24px", borderRadius: 10, border: "none", fontSize: 14, fontWeight: 600, cursor: "pointer", background: tab === "limit_checks" ? "#1B7D3A" : "#fff", color: tab === "limit_checks" ? "#fff" : "#666" }}>
            무료 한도 조회 ({limitChecks.length})
          </button>
          <button onClick={loadData} style={{ marginLeft: "auto", padding: "10px 20px", borderRadius: 10, border: "1px solid #ddd", fontSize: 13, cursor: "pointer", background: "#fff", color: "#666" }}>
            새로고침
          </button>
        </div>

        {/* Content */}
        {tab === "consultations" ? (
          consultations.length === 0 ? (
            <div style={{ background: "#fff", borderRadius: 16, padding: "64px 0", textAlign: "center", color: "#ccc", border: "1px solid #eee" }}>아직 신청이 없습니다</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {consultations.map((c) => (
                <div key={c.id} style={{ background: "#fff", borderRadius: 16, padding: "24px 28px", border: "1px solid #eee" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div>
                      <span style={{ fontSize: 18, fontWeight: 700, color: "#111", marginRight: 12 }}>{c.name}</span>
                      {c.age && <span style={{ fontSize: 14, color: "#999" }}>{c.age}세</span>}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 12, color: "#bbb" }}>{new Date(c.created_at).toLocaleString("ko-KR")}</span>
                      <button onClick={() => deleteConsultation(c.id)} style={{ background: "none", border: "none", color: "#ddd", cursor: "pointer", fontSize: 18 }}>x</button>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 14 }}>
                    <div><span style={{ color: "#999" }}>연락처: </span><span style={{ color: "#1B7D3A", fontWeight: 600 }}>{c.phone}</span></div>
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
                <div key={l.id} style={{ background: "#fff", borderRadius: 16, padding: "24px 28px", border: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 24, fontSize: 14 }}>
                    <span style={{ fontWeight: 700, color: "#111", fontSize: 16 }}>{l.name}</span>
                    <span style={{ color: "#1B7D3A", fontWeight: 600 }}>{l.phone}</span>
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
