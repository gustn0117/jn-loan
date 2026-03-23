const features = [
  {
    title: "조건에 맞춰\n타사대비 높은한도",
    items: ["기본대출승인 금액 +\n제이앤대부 추가금액", "다사대비\n높은 대출한도 달성"],
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "간소화된\n대출절차",
    items: ["복잡한 서류없이\n간편하게 대출신청", "경우에 따라\n필요서류 없음"],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "빠른 상담\n당일승인",
    items: ["비상금, 급전자금\n당일 제공가능", "고객님의 상황에 맞춘\n1:1 상담"],
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "각종 할인 수수료는\n절대 요구 NO!",
    items: ["불법중개수수료 없는\n정부 정식인가업체", "중도상환수수료\n없음"],
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "개인정보 보호는\n철저하게",
    items: ["개인정보관련 서류는\n파기하며 철저하게 관리", "비공개 상담으로\n안전하게 진행"],
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "120px 0", background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)", position: "relative" }}>
      {/* Decorative top border */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 60, height: 3, background: "linear-gradient(90deg, #E8731A, #F5923E)", borderRadius: 2 }} />

      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <p style={{ color: "#aaa", fontSize: 14, marginBottom: 8, fontWeight: 400 }}>고객님들은 왜 제이앤대부를 이용하시는건가요?</p>
        </div>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#111", letterSpacing: "-0.03em", lineHeight: 1.3 }}>
            <span style={{ color: "#E8731A" }}>제이앤대부</span>를 선택해야 하는 이유
          </h2>
        </div>

        <div className="why-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="why-card" style={{
              background: "#fff", borderRadius: 24, padding: "36px 28px",
              border: "1px solid rgba(0,0,0,0.04)", textAlign: "center",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              position: "relative", overflow: "hidden",
            }}>
              {/* Top accent */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 40, height: 3, background: "#E8731A", borderRadius: "0 0 2px 2px", opacity: 0.6, transition: "all 0.3s" }} className="card-accent" />

              <div style={{
                width: 60, height: 60, borderRadius: 18,
                background: "linear-gradient(135deg, rgba(232,115,26,0.08) 0%, rgba(232,115,26,0.04) 100%)",
                color: "#E8731A", display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px",
              }}>
                <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} /></svg>
              </div>

              <h3 style={{ fontWeight: 800, color: "#1a1a1a", fontSize: 15, marginBottom: 20, letterSpacing: "-0.01em", whiteSpace: "pre-line", lineHeight: 1.5 }}>{feature.title}</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {feature.items.map((item, i) => (
                  <div key={i} style={{
                    background: "#f8f9fa", borderRadius: 14, padding: "14px 16px",
                    border: "1px solid rgba(0,0,0,0.02)",
                  }}>
                    <p style={{ color: "#777", fontSize: 12.5, lineHeight: 1.6, whiteSpace: "pre-line", wordBreak: "keep-all" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 16px; }
        .why-card:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.06); transform: translateY(-6px); border-color: rgba(232,115,26,0.1) !important; }
        .why-card:hover .card-accent { width: 100% !important; opacity: 1 !important; }
        @media (max-width: 1100px) { .why-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      `}</style>
    </section>
  );
}
