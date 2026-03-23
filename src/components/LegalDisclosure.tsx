export default function LegalDisclosure() {
  return (
    <section style={{ padding: "100px 0", background: "#f8f9fa" }}>
      <div className="container-main">
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,115,26,0.06)", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ color: "#E8731A", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>NOTICE</span>
          </div>
          <h3 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>대출 안내 사항</h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="info-grid-2col">
            <InfoCard label="대출금리" content="연 20% 이내 (개인 신용평점 및 상품에 따라 차등 적용)" sub="※ 2021년 7월 7일부터 신규 체결, 갱신, 연장되는 계약에 한함" />
            <InfoCard label="상환방법" content="원금자유상환(만기일시상환), 원리금균등분할상환 등 상품별 상이" />
            <InfoCard label="이자 부과" content="매월 약정일 기준" />
            <InfoCard label="변제방법" content="은행송금(채권자 계좌 입금) 등 약정된 방법에 따르며 비용 → 이자 → 원금 순으로 충당됩니다." />
          </div>

          <div className="info-grid-2col">
            <InfoCard label="조기상환 수수료" content="없음 (단, 일부 상품에 따라 상이할 수 있음)" />
            <InfoCard label="대출 예시" content="100만원을 연 20% 금리로 12개월 원리금균등 상환 시 총 납부금액 1,111,662원 (이자 포함)" />
          </div>

          {/* Warning section */}
          <div style={{
            background: "#fff", borderRadius: 20, padding: "28px 32px",
            border: "2px solid rgba(220,38,38,0.1)", marginTop: 8,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: "#dc2626", borderRadius: "2px 0 0 2px" }} />
            <div style={{ fontSize: 14, lineHeight: 2.2, color: "#b91c1c", fontWeight: 600, paddingLeft: 8 }}>
              <p>과도한 대출은 개인신용평점 하락의 원인이 될 수 있습니다.</p>
              <p>신용평점 하락 시 금융거래 이용에 제한이 있을 수 있습니다.</p>
              <p>연체 시 계약에 따라 연체이자율이 적용되며 신용평점이 하락할 수 있습니다.</p>
            </div>
          </div>

          <p style={{ color: "#bbb", textAlign: "center", fontSize: 13, padding: "20px 0" }}>
            계약 체결 전 금융상품 설명서 및 약관을 반드시 확인하시기 바랍니다.
          </p>

          <div style={{
            background: "linear-gradient(135deg, rgba(232,115,26,0.04) 0%, rgba(232,115,26,0.02) 100%)",
            borderRadius: 16, padding: "20px 28px",
            border: "2px solid rgba(232,115,26,0.12)", textAlign: "center",
          }}>
            <p style={{ color: "#E8731A", fontWeight: 700, fontSize: 15 }}>중개수수료를 요구하거나 받는 것은 불법입니다.</p>
          </div>

          {/* Company info */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "36px 40px", border: "1px solid rgba(0,0,0,0.04)", marginTop: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16, fontSize: 13, color: "#777", lineHeight: 2.0 }}>
              <div>
                <p><span style={{ color: "#444", fontWeight: 700 }}>상호명:</span> 주식회사 제이앤대부전당</p>
                <p><span style={{ color: "#444", fontWeight: 700 }}>대표자:</span> 박종남</p>
                <p><span style={{ color: "#444", fontWeight: 700 }}>Tel:</span> 010-4077-3837</p>
              </div>
              <div>
                <p><span style={{ color: "#444", fontWeight: 700 }}>대부업등록번호:</span> 2023-광주 광산-0013</p>
                <p><span style={{ color: "#444", fontWeight: 700 }}>등록기관:</span> 시민경제과 (062-960-3867)</p>
                <p><span style={{ color: "#444", fontWeight: 700 }}>사업자등록번호:</span> 564-88-02984</p>
              </div>
              <div>
                <p><span style={{ color: "#444", fontWeight: 700 }}>주소:</span> 광주광역시 광산구 마항길 43, 201호 (하남동)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .info-grid-2col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
        @media (max-width: 640px) { .info-grid-2col { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

function InfoCard({ label, content, sub }: { label: string; content: string; sub?: string }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 20, padding: "28px 30px",
      border: "1px solid rgba(0,0,0,0.04)", transition: "all 0.3s",
    }}>
      <span style={{
        color: "#E8731A", fontWeight: 700, fontSize: 11, display: "inline-block",
        marginBottom: 12, letterSpacing: "0.08em", textTransform: "uppercase",
        background: "rgba(232,115,26,0.06)", padding: "4px 10px", borderRadius: 6,
      }}>{label}</span>
      <p style={{ color: "#444", fontSize: 14, lineHeight: 1.7, wordBreak: "keep-all" }}>{content}</p>
      {sub && <p style={{ color: "#bbb", fontSize: 12, marginTop: 10 }}>{sub}</p>}
    </div>
  );
}
