import Link from "next/link";

export default function CtaBanner() {
  return (
    <section style={{ background: "#0a1a0f", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/cta-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center top", opacity: 0.05 }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(27,125,58,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", marginBottom: 20 }}>CONTACT</p>
        <h2 style={{ color: "#fff", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.03em" }}>
          무료 상담 받아보세요
        </h2>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 16, marginBottom: 48, maxWidth: 380, margin: "0 auto 48px" }}>
          전문 상담사가 최적의 대출 조건을 안내해 드립니다
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Link href="/apply" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#E8731A", color: "#fff", fontWeight: 600, padding: "16px 44px", borderRadius: 12, fontSize: 15, textDecoration: "none" }}>
            상담 신청
          </Link>
          <Link href="/limit-check" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)", fontWeight: 500, padding: "16px 44px", borderRadius: 12, fontSize: 15, border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none" }}>
            한도 조회
          </Link>
        </div>
      </div>
    </section>
  );
}
