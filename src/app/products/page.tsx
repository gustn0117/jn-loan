import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  {
    id: "auto",
    name: "자동차담보대출",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z",
    icon2: "M13 6h-2l-3 5h9l-2-5h-2zM5 11H3v4a1 1 0 001 1h1m14-5h2v4a1 1 0 01-1 1h-1",
    color: "#1B7D3A",
    details: [
      { label: "대출대상", value: "만 20세 이상, 본인 명의 자동차 보유자, 개인회생 인가자, 회생면책자, 신용회복자 모두 가능" },
      { label: "대출한도", value: "100만원 ~ 5,000만원" },
      { label: "대출금리", value: "15.9% ~ 19.9% (개인신용평점별 차등적용)" },
      { label: "연체이자율", value: "약정금리 + 최대 3% (법정 최고금리 연 20% 이내)" },
      { label: "대출기간", value: "최대 120개월" },
      { label: "상환방법", value: "만기일시상환, 원리금균등상환" },
      { label: "수수료", value: "3년이내 상환 시 중도상환수수료 3% 이내, 취급수수료 없음" },
      { label: "부대비용", value: "대출 계약 체결 시 신용정보조회 비용, (근)저당 설정비용(등록면허세, 중지) 발생" },
      { label: "근저당 해지비용", value: "고객부담" },
      { label: "이자부과시기", value: "매월 후취" },
    ],
  },
  {
    id: "rent",
    name: "전월세담보대출",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z",
    color: "#E8731A",
    details: [
      { label: "대상", value: "보증금 1,000만원 이상 본인명의 계약건에 거주하고 있는 자 (상가 임대차 계약서 불가)" },
      { label: "대출대상", value: "만 20세~65세이하 직장인, 사업자, 프리랜서, 무직자가능 (저신용자, 개인회생, 파산, 신용회복자, 기대출자 진행 가능 / 소득/재산/부채 증빙 가능자)" },
      { label: "한도", value: "최대 1억 3천, 보증금액의 90% 이내" },
      { label: "기간", value: "5년, 최대 60개월" },
      { label: "금리", value: "연 20% 이내" },
      { label: "연체금리", value: "대출금리 + 연 3% 이내 (법정 최고금리 연 20% 이내, 2021.07.07부터 신규 체결되거나 갱신, 연장되는 건부터 적용)" },
      { label: "이자지급방법", value: "매월 약정일에 부과" },
      { label: "상환방식", value: "만기일시상환" },
      { label: "수수료", value: "취급 수수료 없음, 중도상환수수료 없음" },
      { label: "부대비용", value: "없음" },
    ],
  },
  {
    id: "unemployed",
    name: "무직자 대출",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    color: "#1B7D3A",
    details: [
      { label: "대상", value: "무직자, 주부, 프리랜서, 대학생 등 소득증빙이 어려우신 고객님" },
      { label: "금리", value: "연 5% ~ 연 20% 이내" },
      { label: "한도", value: "100만원 ~ 최대 500만원 까지" },
      { label: "대출기간", value: "1개월 ~ 60개월" },
      { label: "상환방법", value: "원리금균등분할상환" },
      { label: "취급수수료", value: "없음" },
    ],
  },
  {
    id: "emergency",
    name: "비상금대출",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "#E8731A",
    details: [
      { label: "대상", value: "급전, 비상금, 당일, 소액 등 급하신 자금을 당일 해결하셔야 되는 고객님 (만 20세 이상이시면 서류없이 누구나 가능)" },
      { label: "금리", value: "연 5% ~ 연 20% 이내" },
      { label: "한도", value: "100만원 ~ 최대 300만원 까지" },
      { label: "대출기간", value: "1개월 ~ 60개월" },
      { label: "상환방법", value: "원리금균등분할상환" },
      { label: "취급수수료", value: "없음" },
    ],
  },
  {
    id: "rehabilitation",
    name: "개인회생대출",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    color: "#1B7D3A",
    details: [
      { label: "대상", value: "만 20세 ~ 60세 이하 (남,여) 직장인, 자영업자, 주부가능" },
      { label: "대출자격", value: "회생: 인가 후 3회 이상 납부 (면책 1년 이내) / 파산: 면책 후 5년 이내 / 신용 회복자 불가 / 공통사항: 급여 최소 3회 이상 가능 (소득/재산/부채 증빙 가능자)" },
      { label: "한도", value: "4,000만 원 이내" },
      { label: "기간", value: "60개월 (최대 5년)" },
      { label: "금리", value: "연 20% 이내" },
      { label: "연체금리", value: "대출금리 + 연 3% 이내 (법정 최고금리 연 20% 이내, 2021.07.07부터 신규 체결되거나 갱신, 연장되는 건부터 적용)" },
      { label: "이자지급방법", value: "매월 약정일에 부과" },
      { label: "상환방식", value: "만기일시상환, 원리금균등상환" },
      { label: "수수료", value: "취급 수수료 없음, 중도상환수수료 없음" },
      { label: "부대비용", value: "없음" },
      { label: "기타사항", value: "타인 명의 휴대폰 사용자, 선불폰 사용자 불가" },
    ],
  },
  {
    id: "women",
    name: "여성우대대출",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "#E8731A",
    details: [
      { label: "대출자격", value: "만 20세 ~ 59세 (일반나이) 이하 여성" },
      { label: "대출대상", value: "전업주부, 육아 휴직 중인 여성, 직장인 여성 (단, 신용불량자 불가)" },
      { label: "한도", value: "1,000만 원 이내" },
      { label: "기간", value: "60개월 (5년)" },
      { label: "금리", value: "연 20% 이내" },
      { label: "연체금리", value: "대출금리 + 연 3% 이내 (법정 최고금리 연 20% 이내, 2021.07.07부터 신규 체결되거나 갱신, 연장되는 건부터 적용)" },
      { label: "이자지급방법", value: "매월 약정일에 부과" },
      { label: "상환방식", value: "만기일시상환, 자유상환" },
      { label: "수수료", value: "취급 수수료 없음, 중도상환수수료 없음" },
      { label: "부대비용", value: "없음" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: 72 }}>
        {/* Hero banner */}
        <div style={{
          background: "linear-gradient(135deg, #E8731A 0%, #d4650f 50%, #c45a0a 100%)",
          padding: "90px 0", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "30%", right: "15%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div className="container-main" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>PRODUCTS</span>
            </div>
            <h1 style={{ fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>대출상품</h1>
            <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 14, fontSize: 17 }}>제이앤대부의 다양한 대출 상품을 확인하세요</p>
          </div>
        </div>

        <section style={{ padding: "100px 0", background: "#f8f9fa" }}>
          <div className="container-main">
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {products.map((product, idx) => (
                <div
                  key={idx}
                  id={product.id}
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    border: "1px solid rgba(0,0,0,0.04)",
                    overflow: "hidden",
                    scrollMarginTop: 90,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                    transition: "all 0.3s",
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      background: product.color,
                      padding: "28px 32px",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="24" height="24" fill="none" stroke="#fff" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon} />
                        {product.icon2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon2} />}
                      </svg>
                    </div>
                    <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800 }}>{product.name}</h2>
                  </div>

                  {/* Table */}
                  <div style={{ padding: "0" }}>
                    {product.details.map((row, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          borderBottom: i < product.details.length - 1 ? "1px solid #f0f0f0" : "none",
                        }}
                        className="product-row"
                      >
                        <div
                          style={{
                            width: 160,
                            flexShrink: 0,
                            padding: "16px 24px",
                            background: "#f9fafb",
                            fontWeight: 700,
                            fontSize: 14,
                            color: product.color,
                            display: "flex",
                            alignItems: "center",
                            borderRight: "1px solid #f0f0f0",
                          }}
                        >
                          {row.label}
                        </div>
                        <div
                          style={{
                            flex: 1,
                            padding: "16px 24px",
                            fontSize: 14,
                            color: "#555",
                            lineHeight: 1.6,
                            wordBreak: "keep-all",
                          }}
                        >
                          {row.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{ padding: "20px 32px", borderTop: "1px solid #f0f0f0", textAlign: "right" }}>
                    <Link
                      href="/apply"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: product.color,
                        color: "#fff",
                        fontWeight: 700,
                        padding: "12px 28px",
                        borderRadius: 100,
                        fontSize: 14,
                        textDecoration: "none",
                      }}
                    >
                      대출 상담 신청
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .product-row {
            flex-direction: column !important;
          }
          .product-row > div:first-child {
            width: 100% !important;
            border-right: none !important;
            border-bottom: 1px solid #f0f0f0;
            padding: 12px 20px !important;
          }
          .product-row > div:last-child {
            padding: 12px 20px !important;
          }
        }
      `}</style>
    </>
  );
}
