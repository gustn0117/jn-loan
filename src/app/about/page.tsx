import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: 72 }}>
        {/* Hero banner */}
        <div style={{
          background: "linear-gradient(135deg, #174a2b 0%, #2ecc71 100%)",
          padding: "100px 0", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80') center/cover", opacity: 0.12 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
          <div className="container-main" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,115,26,0.15)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ color: "#F5923E", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>ABOUT US</span>
            </div>
            <h1 style={{ fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.3 }}>회사소개</h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.6, maxWidth: 520, margin: "0 auto" }}>
              신중하고 투명한 금융 서비스를 제공하기 위해 노력하겠습니다.
            </p>
          </div>
        </div>

        <section style={{ padding: "100px 0" }}>
          <div className="container-main">
            {/* Company introduction */}
            <div style={{
              background: "#fff", borderRadius: 28, padding: "clamp(40px, 5vw, 64px) clamp(32px, 5vw, 56px)",
              border: "1px solid rgba(0,0,0,0.04)", marginBottom: 36,
              boxShadow: "0 4px 32px rgba(0,0,0,0.04)",
            }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, marginBottom: 8, lineHeight: 1.4 }}>
                  <span style={{ color: "#E8731A" }}>올바른 소비자금융기업의 기준</span>이
                </h2>
                <p style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 700, color: "#333" }}>될 수 있도록 노력하겠습니다.</p>
              </div>

              <div style={{ maxWidth: 680, margin: "0 auto" }}>
                <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #E8731A, #F5923E)", borderRadius: 2, margin: "0 auto 40px" }} />

                <p style={{ textAlign: "center", color: "#E8731A", fontWeight: 700, fontSize: 16, marginBottom: 36 }}>안녕하십니까!</p>

                <div style={{ color: "#555", fontSize: 15, lineHeight: 2.2, textAlign: "center", wordBreak: "keep-all" }}>
                  <p style={{ marginBottom: 28 }}>제이앤대부 홈페이지를 방문해주셔서 감사합니다.</p>
                  <p style={{ marginBottom: 28 }}>
                    제이앤대부는 관련 법령을 준수하며 운영되는 금융 서비스 업체로,<br />
                    고객과의 신뢰를 바탕으로 책임 있는 금융 서비스를 제공하고 있습니다.
                  </p>
                  <p style={{ marginBottom: 28 }}>
                    변화하는 금융 환경 속에서 고객의 상황을 충분히 고려한 상담을 통해<br />
                    합리적인 금융 선택을 하실 수 있도록 지원하고 있습니다.
                  </p>
                  <p style={{ marginBottom: 28 }}>또한 계약 전 주요 조건 및 내용을 충분히 안내드리는 것을 원칙으로 합니다.</p>
                  <p style={{ marginBottom: 28 }}>
                    불법 수수료를 요구하지 않으며,<br />
                    관련 법규에 어긋나는 채권추심 행위를 지양하고<br />
                    건전한 금융 질서 확립을 위해 지속적으로 노력하고 있습니다.
                  </p>
                  <p style={{ marginBottom: 28 }}>
                    고객의 상환 능력을 고려한 신중한 상담을 바탕으로<br />
                    과도한 대출을 방지하고, 안정적인 금융 이용 환경을 제공하는 것을 목표로 합니다.
                  </p>
                  <p>
                    앞으로도 고객의 입장에서 생각하며 신뢰할 수 있는 금융 서비스로<br />
                    오랜 시간 함께하는 기업이 되겠습니다.<br />
                    감사합니다.
                  </p>
                </div>

                <p style={{ textAlign: "center", color: "#333", fontWeight: 700, fontSize: 17, marginTop: 40 }}>
                  대표이사 <span style={{ color: "#E8731A", fontWeight: 800 }}>박종남</span>
                </p>
              </div>
            </div>

            {/* Building image */}
            <div style={{ borderRadius: 28, overflow: "hidden", marginBottom: 36, position: "relative", height: "clamp(300px, 35vw, 450px)" }}>
              <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1400&q=80') center/cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 48, left: 48, right: 48, zIndex: 1 }}>
                <p style={{ color: "#fff", fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 600, lineHeight: 1.8, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                  제이앤대부 임직원은 고객만족, 고객 신뢰를 최우선으로 추구하며<br />
                  소비자금융시장의 건전한 성장을 도모하고자,<br />
                  윤리강령을 제정하고 이를 적극 실천해 나갈 것을 다짐하겠습니다.
                </p>
              </div>
            </div>

            {/* Company details */}
            <div style={{
              background: "#fff", borderRadius: 28, padding: "52px",
              border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 4px 32px rgba(0,0,0,0.04)",
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#111", marginBottom: 36, letterSpacing: "-0.02em" }}>회사 정보</h3>
              <div className="company-info-grid">
                {[
                  { label: "상호명", value: "주식회사 제이앤대부전당" },
                  { label: "대표자", value: "박종남" },
                  { label: "사업자등록번호", value: "564-88-02984" },
                  { label: "대부업등록번호", value: "2023-광주 광산-0013" },
                  { label: "등록기관", value: "시민경제과 (062-960-3867)" },
                  { label: "연락처", value: "010-4077-3837" },
                  { label: "주소", value: "광주광역시 광산구 마항길 43, 201호 (하남동)" },
                  { label: "개업연월일", value: "2023년 08월 11일" },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "18px 24px", background: idx % 2 === 0 ? "#f8f9fa" : "#fff",
                    borderRadius: 14, transition: "all 0.2s",
                  }}>
                    <span style={{ width: 120, flexShrink: 0, fontSize: 14, fontWeight: 700, color: "#E8731A" }}>{item.label}</span>
                    <span style={{ fontSize: 14, color: "#555" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .company-info-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
        @media (max-width: 768px) { .company-info-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
