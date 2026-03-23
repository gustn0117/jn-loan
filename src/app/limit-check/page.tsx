"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const products = [
  { name: "직장인/사업자대출", limit: "최대 3000만원", rate: "연5%~연20% 이내", period: "1개월~60개월이내", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { name: "여성우대대출", limit: "최대 500만원", rate: "연5%~연20% 이내", period: "1개월~60개월이내", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { name: "청년전용대출", limit: "최대 1000만원", rate: "연5%~연20% 이내", period: "1개월~60개월이내", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { name: "무직자대출", limit: "최대 500만원", rate: "연5%~연20% 이내", period: "1개월~60개월이내", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { name: "소액대출", limit: "최대 1000만원", rate: "연5%~연20% 이내", period: "1개월~60개월이내", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "통신연체대납", limit: "최대 300만원", rate: "연5%~연20% 이내", period: "1개월~60개월이내", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
];

export default function LimitCheckPage() {
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
    const { error } = await supabase.from("limit_checks").insert({
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      loan_type: formData.get("loan_type") as string || null,
    });
    setLoading(false);
    if (!error) setSubmitted(true);
    else alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
  }

  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: 72 }}>
        {/* Hero */}
        <div style={{
          background: "linear-gradient(135deg, #1B7D3A 0%, #145C2B 50%, #0d4420 100%)",
          padding: "80px 0", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
          <div className="container-main" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, marginBottom: 14 }}>고객님들의 상황에 맞춰 타사대비 높은 한도로 낮은 금리로 안내합니다</p>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>
              상황에 따라, 필요자금에 따라 <span style={{ color: "#F5923E" }}>맞춤 상품</span>
            </h1>
          </div>
        </div>

        {/* Products grid */}
        <section style={{ padding: "100px 0", background: "#fff" }}>
          <div className="container-main">
            <div className="product-cards-grid">
              {products.map((product, idx) => (
                <div key={idx} className="product-card-item" style={{
                  background: "#fff", borderRadius: 24, padding: "36px 28px",
                  border: "1px solid rgba(0,0,0,0.04)", transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #E8731A, #F5923E)", borderRadius: "24px 24px 0 0", opacity: 0 }} className="card-top-line" />

                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 14,
                      background: "linear-gradient(135deg, rgba(232,115,26,0.08) 0%, rgba(232,115,26,0.03) 100%)",
                      color: "#E8731A", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon} /></svg>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: "#111" }}>{product.name}</h3>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                    {[
                      { k: "한도", v: product.limit },
                      { k: "금리", v: product.rate },
                      { k: "기간", v: product.period },
                    ].map((r) => (
                      <div key={r.k} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontSize: 12, color: "#bbb", width: 32, fontWeight: 600 }}>{r.k}</span>
                        <span style={{ fontSize: 14, color: "#444", fontWeight: 600 }}>{r.v}</span>
                      </div>
                    ))}
                  </div>

                  <a href="tel:010-4077-3837" style={{
                    display: "block", textAlign: "center",
                    background: "rgba(232,115,26,0.04)", border: "1.5px solid rgba(232,115,26,0.15)",
                    color: "#E8731A", fontWeight: 700, padding: "13px 0", borderRadius: 12,
                    fontSize: 14, textDecoration: "none", transition: "all 0.3s",
                  }}>
                    자세히 보기
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form section */}
        <section style={{ padding: "100px 0", background: "#f8f9fa" }}>
          <div style={{ maxWidth: 580, margin: "0 auto", padding: "0 24px" }}>
            <div style={{
              background: "linear-gradient(135deg, #1B7D3A 0%, #145C2B 100%)",
              borderRadius: 24, padding: "44px 40px", marginBottom: 36, textAlign: "center",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
                <svg width="24" height="24" fill="none" stroke="#fff" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>신용하락 걱정없는 안심한도조회</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7 }}>
                한도조회만으로는 신용이 하락하지 않습니다.<br />
                신용 영향없는 안심무료한도 조회하세요!
              </p>
            </div>

            {submitted ? (
              <div style={{ background: "#fff", borderRadius: 24, padding: "72px 48px", border: "1px solid rgba(0,0,0,0.04)", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                <div style={{ width: 80, height: 80, borderRadius: 24, background: "rgba(27,125,58,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
                  <svg width="40" height="40" fill="none" stroke="#1B7D3A" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 style={{ fontSize: 26, fontWeight: 800, color: "#111", marginBottom: 12 }}>조회 신청이 완료되었습니다</h2>
                <p style={{ color: "#999" }}>담당자가 확인 후 빠르게 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 24, padding: "52px 44px", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>이름 <span style={{ color: "#E8731A" }}>*</span></label>
                    <input name="name" type="text" required style={inputStyle} placeholder="이름을 입력하세요" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>연락처 <span style={{ color: "#E8731A" }}>*</span></label>
                    <input name="phone" type="tel" required style={inputStyle} placeholder="010-0000-0000" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>나이</label>
                    <input name="age" type="number" style={inputStyle} placeholder="나이를 입력하세요" min={20} max={99} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>관심 대출 상품</label>
                    <select name="loan_type" style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">선택하세요</option>
                      <option>자동차담보대출</option><option>전월세담보대출</option>
                      <option>무직자 대출</option><option>비상금대출</option>
                      <option>개인회생대출</option><option>여성우대대출</option>
                    </select>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#f8f9fa", borderRadius: 12, padding: "14px 16px" }}>
                    <input type="checkbox" required id="agree-limit" style={{ marginTop: 3, width: 18, height: 18, accentColor: "#E8731A" }} />
                    <label htmlFor="agree-limit" style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
                      개인정보 수집 및 이용에 동의합니다.
                      {" "}
                      <a href="#" style={{ color: "#E8731A", fontWeight: 600, textDecoration: "underline" }} onClick={(e) => { e.preventDefault(); alert("개인정보처리방침\n\n수집항목: 이름, 연락처, 나이\n수집목적: 대출 상담 및 한도 조회\n보유기간: 상담 완료 후 즉시 파기\n\n위 개인정보 수집에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 서비스 이용이 제한됩니다."); }}>자세히 보기</a>
                    </label>
                  </div>
                  <button type="submit" disabled={loading} style={{
                    width: "100%",
                    background: loading ? "#ccc" : "linear-gradient(135deg, #E8731A 0%, #d4650f 100%)",
                    color: "#fff", fontWeight: 700, padding: "18px 0", borderRadius: 14,
                    fontSize: 17, border: "none", cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: loading ? "none" : "0 4px 16px rgba(232,115,26,0.25)",
                    transition: "all 0.3s",
                  }}>
                    {loading ? "조회 중..." : "신용에 영향없는 3분안심 조회"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .product-cards-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
        .product-card-item:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.06); transform: translateY(-4px); }
        .product-card-item:hover .card-top-line { opacity: 1 !important; }
        .product-card-item:hover a { background: #E8731A !important; color: #fff !important; border-color: #E8731A !important; }
        @media (max-width: 900px) { .product-cards-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 500px) { .product-cards-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
