"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const products = [
  { name: "자동차담보대출", id: "auto", limit: "최대 5,000만원", rate: "연5%~연20% 이내", period: "최대 120개월", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" },
  { name: "전월세담보대출", id: "rent", limit: "최대 1억3천만원", rate: "연20% 이내", period: "최대 60개월", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" },
  { name: "무직자 대출", id: "unemployed", limit: "최대 500만원", rate: "연5%~연20% 이내", period: "1개월~60개월", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { name: "비상금대출", id: "emergency", limit: "최대 300만원", rate: "연5%~연20% 이내", period: "1개월~60개월", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "개인회생대출", id: "rehabilitation", limit: "최대 4,000만원", rate: "연20% 이내", period: "최대 60개월", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
  { name: "여성우대대출", id: "women", limit: "최대 1,000만원", rate: "연20% 이내", period: "최대 60개월", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
];

function PrivacyModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} style={{
        background: "none", border: "none", color: "#E8731A", fontSize: 13,
        fontWeight: 600, cursor: "pointer", textDecoration: "underline", padding: 0,
      }}>
        개인정보취급방침 내용보기
      </button>
      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={() => setOpen(false)}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
          <div style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", maxWidth: 600, width: "100%", maxHeight: "80vh", overflowY: "auto", position: "relative", zIndex: 1 }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111" }}>개인정보취급방침</h3>
              <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
                <svg width="24" height="24" fill="none" stroke="#999" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div style={{ fontSize: 14, color: "#555", lineHeight: 2.0 }}>
              <p style={{ fontWeight: 700, color: "#333", marginBottom: 16 }}>개인(신용)정보 수집·이용동의</p>
              <p style={{ marginBottom: 16 }}>제이앤대부중개 귀중</p>
              <p style={{ marginBottom: 16 }}>귀사와의 금융거래와 관련하여 귀사가 본인의 개인(신용)정보를 수집·이용하고자 하는 경우에는 [개인정보 보호법] 제15조, 제22조, [신용정보의 이용 및 보호에 관한 법률] 제32조, 제33조 및 제34조에 따라 동의를 얻어야 합니다.</p>
              <p style={{ marginBottom: 16 }}>이에 귀사가 아래의 내용과 같이 본인의 개인(신용)정보를 수집·이용하는데 동의합니다.</p>
              <p style={{ marginBottom: 8 }}>□ 개인(신용)정보의 수집·이용 목적 : 신용대출, 차량담보대출, 주택담보대출 등 대출 상담 및 컨설팅</p>
              <p style={{ marginBottom: 8 }}>□ 수집, 이용할 개인(신용)정보의 내용 : 이름, 휴대폰번호, 차량번호, 집주소 등</p>
              <p style={{ marginBottom: 16 }}>□ 개인(신용)정보의 보유·이용 기간 : 거래 종료(채권 채무 관계 종료)일로부터 5년(단, 관련법령의 별도 규정이 명시되어 있는 경우 그 기간을 따름)</p>
              <p style={{ marginBottom: 24, color: "#999" }}>귀하는 동의를 거부할 권리가 있으나, 동의하지 않으실 경우 거래관계의 설정 또는 유지가 불가능 할 수 있음을 알려드립니다.</p>
              <div style={{ borderTop: "1px solid #eee", paddingTop: 20, marginTop: 8 }}>
                <p style={{ fontWeight: 700, color: "#333", marginBottom: 16 }}>개인(신용)정보 제공 동의</p>
                <p style={{ marginBottom: 16 }}>제이앤대부중개 귀중</p>
                <p style={{ marginBottom: 16 }}>귀사와의 (금융)거래와 관련하여 귀사가 본인으로부터 취득한 개인(신용)정보는 [개인정보 보호법] 제17조, 제22조, [신용정보의 이용 및 보호에 관한 법률] 제32조에 따라 제3자에게 제공할 경우 본인의 사전 동의를 얻어야 하는 정보입니다.</p>
                <p style={{ marginBottom: 16 }}>이에 본인은 귀사가 본인의 개인(신용)정보를 아래와 같이 제 3자에게 제공하는 것에 대해 동의합니다.</p>
                <p style={{ marginBottom: 8 }}>□ 개인(신용)정보를 제공받는자 : 귀사와 위탁계약을 체결한 대출모집인 및 금융회사</p>
                <p style={{ marginBottom: 8 }}>□ 개인(신용)정보 제공목적 : 귀사가 취급하는 금융상품의 상담</p>
                <p style={{ marginBottom: 8 }}>□ 제공대상 개인(신용)정보 : 이름, 휴대폰번호, e-mail 주소</p>
                <p style={{ marginBottom: 16 }}>□ 제공받는 자의 개인(신용)정보 보유 및 이용기간 : 제공 동의일로부터 개인(신용)정보를 제공받는 자의 목적을 달성할 때까지</p>
                <p style={{ color: "#999" }}>귀하는 동의를 거부할 권리가 있으나, 동의하지 않으실 경우 거래관계의 설정 또는 유치가 불가능할 수 있음을 알려드립니다.</p>
              </div>
            </div>
            <div style={{ textAlign: "right", marginTop: 24 }}>
              <button onClick={() => setOpen(false)} style={{ background: "#f0f0f0", border: "none", borderRadius: 10, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", color: "#555" }}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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
    const res = await fetch("/api/limit-checks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        age: parseInt(formData.get("age") as string) || null,
        phone: formData.get("phone"),
        job: formData.get("job") || null,
        loan_type: formData.get("loan_type") || null,
        website: formData.get("website") || "",
      }),
    });
    const json = await res.json().catch(() => ({ ok: false }));
    const error = json.ok ? null : { message: json.error || "failed" };
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
          background: "linear-gradient(135deg, #2ecc71 0%, #25a85a 50%, #1e7a3c 100%)",
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

                  <a href={`/products#${product.id}`} style={{
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
              background: "linear-gradient(135deg, #2ecc71 0%, #25a85a 100%)",
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
                  <svg width="40" height="40" fill="none" stroke="#2ecc71" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 style={{ fontSize: 26, fontWeight: 800, color: "#111", marginBottom: 12 }}>조회 신청이 완료되었습니다</h2>
                <p style={{ color: "#999" }}>담당자가 확인 후 빠르게 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 24, padding: "52px 44px", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden="true" />
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>이름 <span style={{ color: "#E8731A" }}>*</span></label>
                    <input name="name" type="text" required style={inputStyle} placeholder="이름을 입력하세요" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>나이 <span style={{ color: "#E8731A" }}>*</span></label>
                    <input name="age" type="number" required style={inputStyle} placeholder="나이를 입력하세요" min={20} max={99} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>연락처 <span style={{ color: "#E8731A" }}>*</span></label>
                    <input name="phone" type="tel" required style={inputStyle} placeholder="010-0000-0000" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>직업 <span style={{ color: "#E8731A" }}>*</span></label>
                    <select name="job" required style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">선택하세요</option>
                      {["무직자", "직장인", "개인사업자", "법인사업자"].map((j) => <option key={j}>{j}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>대출 종류 <span style={{ color: "#E8731A" }}>*</span></label>
                    <select name="loan_type" required style={{ ...inputStyle, appearance: "none" as const }}>
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
                    </label>
                  </div>
                  <PrivacyModal />
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
