import SubpageLayout from "@/components/SubpageLayout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <SubpageLayout title="회사소개" subtitle="신뢰할 수 있는 정식 등록 대부업체">
      <section style={{ padding: "80px 0" }}>
        <div className="container-main">
          {/* Company overview */}
          <div style={{ background: "#fff", borderRadius: 24, padding: "56px 48px", border: "1px solid #eee", marginBottom: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div className="about-grid">
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image src="/logo.png" alt="제이앤대부" width={240} height={80} style={{ width: "auto", height: "auto", maxWidth: 200, border: "none" }} />
              </div>
              <div>
                <h2 style={{ fontSize: 26, fontWeight: 800, color: "#111", marginBottom: 16 }}>주식회사 제이앤대부전당</h2>
                <p style={{ color: "#777", lineHeight: 1.8, marginBottom: 32, fontSize: 15, wordBreak: "keep-all" }}>
                  제이앤대부는 광주광역시에 정식 등록된 대부업체로, 고객님의 금융 니즈에 맞춘 다양한 대출 상품을 제공하고 있습니다. 투명하고 정직한 금융 서비스를 통해 고객님의 든든한 금융 파트너가 되겠습니다.
                </p>
                <div style={{ display: "flex", gap: 48 }}>
                  {[
                    { value: "6+", label: "대출 상품" },
                    { value: "당일", label: "승인 가능" },
                    { value: "0원", label: "중개수수료" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <span style={{ display: "block", fontSize: 32, fontWeight: 800, color: "#1B7D3A", letterSpacing: "-0.02em" }}>{stat.value}</span>
                      <span style={{ fontSize: 13, color: "#aaa" }}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Company details */}
          <div style={{ background: "#fff", borderRadius: 24, padding: "48px", border: "1px solid #eee", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111", marginBottom: 32 }}>회사 정보</h3>
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
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 20px", background: idx % 2 === 0 ? "#fafbfc" : "#fff", borderRadius: 12 }}>
                  <span style={{ width: 120, flexShrink: 0, fontSize: 14, fontWeight: 700, color: "#1B7D3A" }}>{item.label}</span>
                  <span style={{ fontSize: 14, color: "#555" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; align-items: center; }
        .company-info-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
          .company-info-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </SubpageLayout>
  );
}
