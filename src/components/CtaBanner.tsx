import Link from "next/link";

export default function CtaBanner() {
  return (
    <section style={{ background: "linear-gradient(135deg, #0c1f12 0%, #112a18 50%, #0a1a0f 100%)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/cta-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center top", opacity: 0.04 }} />
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: "50%", left: "20%", transform: "translate(-50%, -50%)", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(232,115,26,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", right: "15%", transform: "translate(50%, -50%)", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(27,125,58,0.04)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,115,26,0.1)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8731A" }} />
          <span style={{ color: "#E8731A", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>CONTACT</span>
        </div>

        <h2 style={{ color: "#fff", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.03em" }}>
          무료 상담 받아보세요
        </h2>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 16, marginBottom: 48, maxWidth: 380, margin: "0 auto 48px" }}>
          전문 상담사가 최적의 대출 조건을 안내해 드립니다
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          <Link href="/apply" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg, #E8731A 0%, #d4650f 100%)",
            color: "#fff", fontWeight: 700, padding: "17px 48px", borderRadius: 14,
            fontSize: 16, textDecoration: "none",
            boxShadow: "0 4px 24px rgba(232,115,26,0.3)",
            transition: "all 0.3s",
          }}>
            상담 신청
          </Link>
          <Link href="/limit-check" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "rgba(255,255,255,0.5)", fontWeight: 500, padding: "17px 48px",
            borderRadius: 14, fontSize: 16,
            border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none",
            transition: "all 0.3s",
          }}>
            한도 조회
          </Link>
        </div>
      </div>
    </section>
  );
}
