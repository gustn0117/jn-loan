import Link from "next/link";

const products = [
  { id: "auto", name: "자동차담보대출", desc: "차량 소유자라면 담보 설정으로 유리한 조건의 대출이 가능합니다.", sub: "한도 최대 5,000만 / 기간 최대 120개월", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z", icon2: "M13 6h-2l-3 5h9l-2-5h-2zM5 11H3v4a1 1 0 001 1h1m14-5h2v4a1 1 0 01-1 1h-1" },
  { id: "rent", name: "전월세담보대출", desc: "전세/월세 보증금을 활용해 생활자금을 편리하게 마련할 수 있습니다.", sub: "한도 최대 1억 3천 / 기간 최대 60개월", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" },
  { id: "unemployed", name: "무직자 대출", desc: "소득 없이도 신용 기반으로 간편하게 신청 가능한 대출입니다.", sub: "한도 최대 500만 / 무서류 당일 가능", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { id: "emergency", name: "비상금대출", desc: "갑작스러운 지출에 빠르게 대응할 수 있는 소액 간편 대출입니다.", sub: "한도 최대 300만 / 즉시 입금 가능", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { id: "rehabilitation", name: "개인회생대출", desc: "개인회생 중이거나 이후에도 상황에 맞게 이용 가능한 맞춤 대출입니다.", sub: "한도 최대 4,000만 / 기간 최대 60개월", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
  { id: "women", name: "여성우대대출", desc: "여성 고객 전용 우대 금리와 특별 혜택으로 이용 가능한 대출입니다.", sub: "한도 최대 1,000만 / 우대 금리 적용", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
];

export default function LoanProducts() {
  return (
    <section style={{ padding: "120px 0", background: "#fff" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#1B7D3A", fontWeight: 600, fontSize: 13, marginBottom: 12, letterSpacing: "0.12em" }}>PRODUCTS</p>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "#111", letterSpacing: "-0.03em", marginBottom: 14 }}>맞춤 대출 상품</h2>
          <p style={{ color: "#bbb", fontSize: 15, maxWidth: 360, margin: "0 auto" }}>고객님의 상황에 가장 적합한 상품을 찾아드립니다</p>
        </div>

        <div className="loan-grid">
          {products.map((product, idx) => (
            <Link href={`/products#${product.id}`} key={idx} style={{ textDecoration: "none" }} className="loan-card">
              <div style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", border: "1px solid #f0f0f0", height: "100%", transition: "all 0.35s", display: "flex", flexDirection: "column" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "#f3f7f4", color: "#1B7D3A", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>
                  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon} />
                    {product.icon2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon2} />}
                  </svg>
                </div>
                <h3 style={{ fontWeight: 700, color: "#1a1a1a", fontSize: 19, marginBottom: 10, letterSpacing: "-0.01em" }}>{product.name}</h3>
                <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.7, wordBreak: "keep-all", marginBottom: 20, flex: 1 }}>{product.desc}</p>
                <div style={{ borderTop: "1px solid #f5f5f5", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ color: "#1B7D3A", fontSize: 12, fontWeight: 600 }}>{product.sub}</p>
                  <svg width="16" height="16" fill="none" stroke="#ccc" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .loan-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
        .loan-card > div:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.06); transform: translateY(-4px); border-color: rgba(27,125,58,0.12) !important; }
        @media (max-width: 900px) { .loan-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 500px) { .loan-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
