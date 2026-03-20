const features = [
  { title: "타사대비 높은 한도", desc: "기본대출승인 금액에 제이앤대부 추가금액까지 높은 대출 한도 달성", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
  { title: "간소화된 대출절차", desc: "복잡한 서류 없이 클릭 한번으로 간편하게 대출 신청 가능", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { title: "빠른 상담, 당일 승인", desc: "비상금, 급전 자금이 필요할 때 1:1 맞춤 상담으로 당일 해결", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "불법 수수료 절대 NO", desc: "불법 중개수수료 없는 정부 정식 인가업체, 중도상환수수료 없음", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "철저한 개인정보 보호", desc: "개인정보 관련 서류는 상담 완료 후 즉시 파기하여 안전하게 관리", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "120px 0", background: "#fafbfc" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#1B7D3A", fontWeight: 600, fontSize: 13, marginBottom: 12, letterSpacing: "0.12em" }}>WHY US</p>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>제이앤대부를 선택하는 이유</h2>
        </div>

        <div className="why-grid">
          {features.map((feature, idx) => (
            <div key={idx} style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", border: "1px solid #f0f0f0", textAlign: "center", transition: "all 0.35s" }} className="why-card">
              <div style={{ width: 52, height: 52, borderRadius: 16, background: "#f3f7f4", color: "#1B7D3A", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} /></svg>
              </div>
              <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: 17, marginBottom: 10, letterSpacing: "-0.01em" }}>{feature.title}</h3>
              <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.7, wordBreak: "keep-all" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 16px; }
        .why-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.05); transform: translateY(-4px); }
        @media (max-width: 1024px) { .why-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      `}</style>
    </section>
  );
}
