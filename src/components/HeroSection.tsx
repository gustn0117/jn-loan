"use client";

import { useState } from "react";

const loanTypes = [
  { name: "자동차담보대출", headline: "차량이 있다면\n담보 설정으로 유리한 조건", highlight: "담보 설정으로", desc: "차량이 있다면 담보 설정으로 비교적 유리한 조건으로 이용 가능합니다. 빠른 심사와 당일 승인으로 급한 자금이 필요할 때 편리하게 이용하실 수 있습니다.", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" },
  { name: "전월세담보대출", headline: "보증금을 활용해\n생활자금을 편리하게", highlight: "생활자금을 편리하게", desc: "전세·월세 보증금을 활용해 생활자금을 편리하게 마련할 수 있습니다. 보증금 범위 내에서 합리적인 조건으로 대출이 가능합니다.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" },
  { name: "무직자 대출", headline: "소득이 없어도\n신용 기준으로 신청 가능", highlight: "신용 기준으로", desc: "현재 소득이 없더라도 신용 등급을 기준으로 대출 신청이 가능합니다. 개인 상황에 맞춘 맞춤형 상담을 제공합니다.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { name: "비상금대출", headline: "갑작스러운 지출에\n빠르게 대응 가능", highlight: "빠르게 대응", desc: "갑작스러운 지출에 빠르게 대응할 수 있는 소액 간편 대출입니다. 간단한 절차로 신속하게 자금을 마련할 수 있습니다.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "개인회생대출", headline: "개인회생 중이거나\n이후에도 맞춤 대출", highlight: "맞춤 대출", desc: "개인회생 중이거나 면책 이후에도 상황에 맞는 맞춤 대출을 제공합니다. 새로운 출발을 위한 금융 파트너가 되어드립니다.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
  { name: "여성우대대출", headline: "여성이라면 보다\n유리한 조건과 혜택", highlight: "유리한 조건과 혜택", desc: "여성 고객님을 위한 우대 금리와 특별 혜택을 제공합니다. 보다 유리한 조건으로 필요한 자금을 마련하실 수 있습니다.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
];

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const loan = loanTypes[activeIdx];
  const headlineParts = loan.headline.split("\n");

  const inputStyle = {
    width: "100%", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10,
    padding: "12px 14px", fontSize: 14, outline: "none",
    background: "rgba(255,255,255,0.06)", color: "#fff",
  } as const;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/consultations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        age: parseInt(formData.get("age") as string) || null,
        phone: formData.get("phone"),
        job: formData.get("job") || null,
        loan_type: formData.get("loan_type") || null,
      }),
    });
    const json = await res.json().catch(() => ({ ok: false }));
    const error = json.ok ? null : { message: json.error || "failed" };
    setLoading(false);
    if (!error) {
      setSubmitted(true);
      if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === "function") {
        (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "conversion", { send_to: "AW-17996576930/nPAHCLPGt50cEKLxt4VD" });
      }
    } else alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
  }

  return (
    <section style={{ position: "relative", overflow: "hidden", paddingTop: 72 }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1f5230 0%, #245e38 25%, #1f5230 50%, #1a4228 100%)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.05 }} />
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,115,26,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(39,174,96,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 1, paddingTop: 60, paddingBottom: 80 }}>
        <div className="hero-3col">
          {/* Left - 목록 */}
          <div className="hero-col-left" style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,115,26,0.1)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8731A" }} />
              <span style={{ color: "#E8731A", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>LOAN PRODUCTS</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, justifyContent: "center" }}>
              {loanTypes.map((l, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "13px 16px", borderRadius: 12, border: "none",
                    cursor: "pointer", textAlign: "left", transition: "all 0.25s ease",
                    background: activeIdx === idx ? "rgba(232,115,26,0.12)" : "transparent",
                    borderLeft: activeIdx === idx ? "3px solid #E8731A" : "3px solid transparent",
                    color: activeIdx === idx ? "#E8731A" : "rgba(255,255,255,0.45)",
                  }}
                >
                  <div style={{
                    width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                    background: activeIdx === idx ? "rgba(232,115,26,0.15)" : "rgba(255,255,255,0.04)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: activeIdx === idx ? 1 : 0.6 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={l.icon} />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: activeIdx === idx ? 700 : 500 }}>{l.name}</span>
                  {activeIdx === idx && (
                    <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginLeft: "auto", opacity: 0.7 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Center - 내용 */}
          <div className="hero-col-center" style={{
            background: "rgba(255,255,255,0.03)", borderRadius: 24,
            padding: "48px 40px", border: "1px solid rgba(255,255,255,0.06)",
            display: "flex", flexDirection: "column", justifyContent: "center",
            minHeight: 420,
          }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,115,26,0.1)", borderRadius: 100, padding: "5px 14px", marginBottom: 24, alignSelf: "flex-start" }}>
              <svg width="14" height="14" fill="none" stroke="#E8731A" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={loan.icon} /></svg>
              <span style={{ color: "#E8731A", fontSize: 12, fontWeight: 700 }}>{loan.name}</span>
            </div>

            <h1 style={{
              color: "#fff", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 800,
              lineHeight: 1.25, marginBottom: 20, wordBreak: "keep-all", letterSpacing: "-0.03em",
            }}>
              {headlineParts.map((part, i) => {
                if (part.includes(loan.highlight)) {
                  const before = part.split(loan.highlight)[0];
                  const after = part.split(loan.highlight)[1];
                  return (
                    <span key={i}>
                      {before}
                      <span style={{ color: "#E8731A" }}>{loan.highlight}</span>
                      {after}
                      {i < headlineParts.length - 1 && <br />}
                    </span>
                  );
                }
                return <span key={i}>{part}{i < headlineParts.length - 1 && <br />}</span>;
              })}
            </h1>

            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.8, wordBreak: "keep-all" }}>
              {loan.desc}
            </p>
          </div>

          {/* Right - 폼 */}
          <div className="hero-col-right" style={{ display: "flex" }}>
            <div style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: 24, padding: "32px 28px",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(46,204,113,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg width="32" height="32" fill="none" stroke="#2ecc71" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 8 }}>신청 완료</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>담당자가 빠르게 연락드리겠습니다.</p>
                </div>
              ) : (
                <>
                  <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 4 }}>대출 상담 신청</h3>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>전문 상담사가 연락드립니다</p>
                  </div>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5 }}>이름 *</label>
                        <input name="name" type="text" required style={inputStyle} placeholder="이름" />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5 }}>나이 *</label>
                        <input name="age" type="number" required style={inputStyle} placeholder="나이" min={20} max={99} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5 }}>연락처 *</label>
                      <input name="phone" type="tel" required style={inputStyle} placeholder="010-0000-0000" />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5 }}>직업 *</label>
                      <select name="job" required style={{ ...inputStyle, appearance: "none" as const }}>
                        <option value="" style={{ background: "#1a4228" }}>선택하세요</option>
                        {["무직자", "직장인", "개인사업자", "법인사업자"].map((j) => <option key={j} style={{ background: "#1a4228" }}>{j}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 5 }}>대출 종류 *</label>
                      <select name="loan_type" required style={{ ...inputStyle, appearance: "none" as const }}>
                        <option value="" style={{ background: "#1a4228" }}>선택하세요</option>
                        {loanTypes.map((l, i) => <option key={i} style={{ background: "#1a4228" }}>{l.name}</option>)}
                      </select>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <input type="checkbox" required id="hero-agree" style={{ marginTop: 3, accentColor: "#E8731A" }} />
                      <label htmlFor="hero-agree" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>
                        개인정보 수집 및 이용에 동의합니다.
                      </label>
                    </div>
                    <button type="button" onClick={() => setPrivacyOpen(true)} style={{
                      background: "none", border: "none", color: "#E8731A", fontSize: 12,
                      fontWeight: 600, cursor: "pointer", textDecoration: "underline", padding: 0, textAlign: "left",
                    }}>
                      개인정보취급방침 내용보기
                    </button>
                    <button type="submit" disabled={loading} style={{
                      width: "100%",
                      background: loading ? "rgba(255,255,255,0.1)" : "linear-gradient(135deg, #E8731A 0%, #d4650f 100%)",
                      color: "#fff", fontWeight: 700, padding: "15px 0", borderRadius: 12,
                      fontSize: 15, border: "none", cursor: loading ? "not-allowed" : "pointer",
                      boxShadow: loading ? "none" : "0 4px 20px rgba(232,115,26,0.3)",
                      marginTop: 2,
                    }}>
                      {loading ? "신청 중..." : "대출 상담 신청하기"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      {privacyOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={() => setPrivacyOpen(false)}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
          <div style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", maxWidth: 600, width: "100%", maxHeight: "80vh", overflowY: "auto", position: "relative", zIndex: 1 }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111" }}>개인정보취급방침</h3>
              <button onClick={() => setPrivacyOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
                <svg width="24" height="24" fill="none" stroke="#999" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div style={{ fontSize: 14, color: "#555", lineHeight: 2.0 }}>
              <p style={{ fontWeight: 700, color: "#333", marginBottom: 16 }}>개인(신용)정보 수집·이용동의</p>
              <p style={{ marginBottom: 16 }}>제이앤대부중개 귀중</p>
              <p style={{ marginBottom: 16 }}>귀사와의 금융거래와 관련하여 귀사가 본인의 개인(신용)정보를 수집·이용하고자 하는 경우에는 [개인정보 보호법] 제15조, 제22조, [신용정보의 이용 및 보호에 관한 법률] 제32조, 제33조 및 제34조에 따라 동의를 얻어야 합니다.</p>
              <p style={{ marginBottom: 16 }}>이에 귀사가 아래의 내용과 같이 본인의 개인(신용)정보를 수집·이용하는데 동의합니다.</p>
              <p style={{ marginBottom: 8 }}>- 개인(신용)정보의 수집·이용 목적 : 신용대출, 차량담보대출, 주택담보대출 등 대출 상담 및 컨설팅</p>
              <p style={{ marginBottom: 8 }}>- 수집, 이용할 개인(신용)정보의 내용 : 이름, 휴대폰번호, 차량번호, 집주소 등</p>
              <p style={{ marginBottom: 16 }}>- 개인(신용)정보의 보유·이용 기간 : 거래 종료(채권 채무 관계 종료)일로부터 5년</p>
              <p style={{ marginBottom: 24, color: "#999" }}>귀하는 동의를 거부할 권리가 있으나, 동의하지 않으실 경우 거래관계의 설정 또는 유지가 불가능 할 수 있음을 알려드립니다.</p>
              <div style={{ borderTop: "1px solid #eee", paddingTop: 20, marginTop: 8 }}>
                <p style={{ fontWeight: 700, color: "#333", marginBottom: 16 }}>개인(신용)정보 제공 동의</p>
                <p style={{ marginBottom: 16 }}>귀사와의 (금융)거래와 관련하여 귀사가 본인으로부터 취득한 개인(신용)정보는 [개인정보 보호법] 제17조, 제22조, [신용정보의 이용 및 보호에 관한 법률] 제32조에 따라 제3자에게 제공할 경우 본인의 사전 동의를 얻어야 하는 정보입니다.</p>
                <p style={{ marginBottom: 8 }}>- 개인(신용)정보를 제공받는자 : 귀사와 위탁계약을 체결한 대출모집인 및 금융회사</p>
                <p style={{ marginBottom: 8 }}>- 개인(신용)정보 제공목적 : 귀사가 취급하는 금융상품의 상담</p>
                <p style={{ marginBottom: 8 }}>- 제공대상 개인(신용)정보 : 이름, 휴대폰번호, e-mail 주소</p>
                <p style={{ marginBottom: 16 }}>- 제공받는 자의 개인(신용)정보 보유 및 이용기간 : 제공 동의일로부터 목적 달성 시까지</p>
                <p style={{ color: "#999" }}>귀하는 동의를 거부할 권리가 있으나, 동의하지 않으실 경우 거래관계의 설정 또는 유지가 불가능할 수 있음을 알려드립니다.</p>
              </div>
            </div>
            <div style={{ textAlign: "right", marginTop: 24 }}>
              <button onClick={() => setPrivacyOpen(false)} style={{ background: "#f0f0f0", border: "none", borderRadius: 10, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", color: "#555" }}>닫기</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hero-3col { display: grid; grid-template-columns: 260px minmax(0, 1fr) 380px; gap: 32px; align-items: stretch; }
        @media (max-width: 1100px) {
          .hero-3col { grid-template-columns: 200px minmax(0, 1fr); gap: 24px; }
          .hero-col-right { grid-column: 1 / -1; max-width: 400px; }
        }
        @media (max-width: 768px) {
          .hero-3col { grid-template-columns: 1fr; gap: 24px; }
          .hero-col-left { order: 2; }
          .hero-col-center { order: 1; }
          .hero-col-right { order: 3; max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
