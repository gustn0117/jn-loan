"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const steps = [
  { num: "01", title: "대출 상담 신청", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { num: "02", title: "상담원 연결\n및 안내", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1m0 0V6a2 2 0 012-2h8a2 2 0 012 2v5a2 2 0 01-2 2h-2.586l-1 1" },
  { num: "03", title: "심사 기준에\n따른 검토", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { num: "04", title: "필요 서류 안내", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
  { num: "05", title: "약정 절차 진행", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { num: "06", title: "절차 마무리", icon: "M5 13l4 4L19 7" },
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputStyle = {
    width: "100%", border: "1px solid #e5e5e5", borderRadius: 14,
    padding: "16px 18px", fontSize: 15, outline: "none", background: "#fff",
    transition: "all 0.2s",
  } as const;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const { error } = await supabase.from("consultations").insert({
      name: formData.get("name") as string,
      age: parseInt(formData.get("age") as string) || null,
      phone: formData.get("phone") as string,
      loan_type: formData.get("loan_type") as string || null,
      amount: formData.get("amount") as string || null,
      message: formData.get("message") as string || null,
    });
    setLoading(false);
    if (!error) setSubmitted(true);
    else alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
  }

  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: 72 }}>
        {/* Hero - solid green */}
        <div style={{
          background: "linear-gradient(135deg, #1B7D3A 0%, #145C2B 50%, #0d4420 100%)",
          padding: "100px 0 80px", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "30%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />

          <div className="container-main" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 16, fontWeight: 400 }}>편안한 금융의 첫걸음</p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.25 }}>
              고객님의 내일을 응원합니다!
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 18, fontWeight: 400, letterSpacing: "-0.01em" }}>진심과 신뢰로 함께 만들어갑니다.</p>
          </div>
        </div>

        {/* Process steps */}
        <section style={{ padding: "100px 0", background: "#fff" }}>
          <div className="container-main">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,115,26,0.06)", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
                <span style={{ color: "#E8731A", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>PROCESS</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>대출 절차 안내</h2>
            </div>

            <div className="steps-grid">
              {steps.map((step, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div className="step-connector" style={{
                      position: "absolute", top: 40, left: "calc(50% + 44px)", right: "calc(-50% + 44px)",
                      height: 2, background: "linear-gradient(90deg, rgba(232,115,26,0.2), rgba(232,115,26,0.05))",
                    }} />
                  )}

                  <div style={{
                    width: 80, height: 80, borderRadius: 24,
                    background: "linear-gradient(135deg, rgba(27,125,58,0.08) 0%, rgba(27,125,58,0.03) 100%)",
                    color: "#1B7D3A", display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20, position: "relative", zIndex: 2,
                    border: "1px solid rgba(27,125,58,0.08)",
                  }}>
                    <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} /></svg>
                  </div>

                  <span style={{
                    color: "#E8731A", fontSize: 12, fontWeight: 800, marginBottom: 8,
                    background: "rgba(232,115,26,0.06)", padding: "3px 10px", borderRadius: 6,
                  }}>{step.num}</span>
                  <p style={{ color: "#333", fontSize: 14, fontWeight: 700, textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.5, letterSpacing: "-0.01em" }}>{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application form */}
        <section style={{ padding: "100px 0", background: "#f8f9fa" }}>
          <div style={{ maxWidth: 580, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#111", marginBottom: 10, letterSpacing: "-0.02em" }}>대출 상담 신청</h2>
              <p style={{ color: "#aaa", fontSize: 15 }}>간편하게 상담을 신청하시면 전문 상담사가 연락드립니다</p>
            </div>

            {submitted ? (
              <div style={{ background: "#fff", borderRadius: 24, padding: "72px 48px", border: "1px solid rgba(0,0,0,0.04)", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                <div style={{ width: 80, height: 80, borderRadius: 24, background: "rgba(27,125,58,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
                  <svg width="40" height="40" fill="none" stroke="#1B7D3A" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 style={{ fontSize: 26, fontWeight: 800, color: "#111", marginBottom: 12 }}>신청이 완료되었습니다</h2>
                <p style={{ color: "#999" }}>담당자가 빠른 시일 내에 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 24, padding: "52px 44px", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  {[
                    { name: "name", label: "이름", type: "text", placeholder: "이름을 입력하세요", required: true },
                    { name: "age", label: "나이", type: "number", placeholder: "나이를 입력하세요", required: true },
                    { name: "phone", label: "연락처", type: "tel", placeholder: "010-0000-0000", required: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>{f.label} {f.required && <span style={{ color: "#E8731A" }}>*</span>}</label>
                      <input name={f.name} type={f.type} required={f.required} style={inputStyle} placeholder={f.placeholder} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>대출 종류 <span style={{ color: "#E8731A" }}>*</span></label>
                    <select name="loan_type" required style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">대출 종류를 선택하세요</option>
                      <option>자동차담보대출</option><option>전월세담보대출</option>
                      <option>무직자 대출</option><option>비상금대출</option>
                      <option>개인회생대출</option><option>여성우대대출</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>희망 대출금액</label>
                    <input name="amount" type="text" style={inputStyle} placeholder="희망 금액을 입력하세요" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>상담 내용</label>
                    <textarea name="message" rows={4} style={{ ...inputStyle, resize: "none" as const }} placeholder="추가 상담 내용을 입력하세요" />
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#f8f9fa", borderRadius: 12, padding: "14px 16px" }}>
                    <input type="checkbox" required id="agree" style={{ marginTop: 3, width: 18, height: 18, accentColor: "#E8731A" }} />
                    <label htmlFor="agree" style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>개인정보 수집 및 이용에 동의합니다. 수집된 정보는 대출 상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.</label>
                  </div>
                  <button type="submit" disabled={loading} style={{
                    width: "100%", background: loading ? "#ccc" : "linear-gradient(135deg, #1B7D3A 0%, #145C2B 100%)",
                    color: "#fff", fontWeight: 700, padding: "18px 0", borderRadius: 14,
                    fontSize: 17, border: "none", cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: loading ? "none" : "0 4px 16px rgba(27,125,58,0.25)",
                    transition: "all 0.3s",
                  }}>
                    {loading ? "신청 중..." : "대출 상담 신청하기"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .steps-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; align-items: start; }
        .step-connector { display: block; }
        @media (max-width: 900px) { .steps-grid { grid-template-columns: repeat(3, 1fr); gap: 40px; } .step-connector { display: none; } }
        @media (max-width: 500px) { .steps-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </>
  );
}
