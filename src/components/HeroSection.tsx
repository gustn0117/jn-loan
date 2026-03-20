import Link from "next/link";

export default function HeroSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", paddingTop: 72, background: "#060d08" }}>
      {/* BG image */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }} />
      {/* Gradient */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #060d08 0%, #0a1a0f 40%, #0f2816 80%, #122e1a 100%)" }} />
      {/* Center glow */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 800, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(27,125,58,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 1, paddingTop: 100, paddingBottom: 120, textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", marginBottom: 32, textTransform: "uppercase" }}>
          Gwangju Licensed Lender
        </p>

        <h1 style={{ color: "#fff", fontSize: "clamp(34px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 24, wordBreak: "keep-all", letterSpacing: "-0.03em", maxWidth: 700, margin: "0 auto 24px" }}>
          일정 수입이 있다면
          <br />
          <span style={{ color: "#E8731A" }}>막힘없이</span> 한 번에
        </h1>

        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 17, lineHeight: 1.8, marginBottom: 48, wordBreak: "keep-all", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          자동차담보, 전월세담보, 무직자, 비상금, 개인회생, 여성우대 등
          고객님 상황에 맞는 맞춤 대출 상품을 제공합니다.
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginBottom: 80 }}>
          <Link href="/apply" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#E8731A", color: "#fff", fontWeight: 600, padding: "16px 40px", borderRadius: 12, fontSize: 15, textDecoration: "none", letterSpacing: "0.01em" }}>
            대출 상담 신청
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <a href="tel:010-4077-3837" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.45)", fontWeight: 500, padding: "16px 28px", fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12 }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            010-4077-3837
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: 64 }}>
          {[
            { value: "연 20%", label: "이내 금리" },
            { value: "당일", label: "승인 가능" },
            { value: "0원", label: "중개수수료" },
            { value: "12~60", label: "개월" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ color: "#fff", fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.value}</p>
              <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, marginTop: 6, fontWeight: 500 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
