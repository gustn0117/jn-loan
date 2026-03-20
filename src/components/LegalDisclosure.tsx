export default function LegalDisclosure() {
  return (
    <section style={{ padding: "100px 0", background: "#fafbfc" }}>
      <div className="container-main">
        <div style={{ marginBottom: 48 }}>
          <p style={{ color: "rgba(27,125,58,0.6)", fontWeight: 600, fontSize: 12, marginBottom: 12, letterSpacing: "0.15em", textTransform: "uppercase" }}>Notice</p>
          <h3 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>대출 안내 사항</h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div className="info-grid-2col">
            <InfoCard label="대출금리" content="연 20% 이내 (개인 신용평점 및 상품에 따라 차등 적용)" sub="※ 2021년 7월 7일부터 신규 체결, 갱신, 연장되는 계약에 한함" />
            <InfoCard label="상환방법" content="원금자유상환(만기일시상환), 원리금균등분할상환 등 상품별 상이" />
            <InfoCard label="이자 부과" content="매월 약정일 기준" />
            <InfoCard label="변제방법" content="은행송금(채권자 계좌 입금) 등 약정된 방법에 따르며 비용 -> 이자 -> 원금 순으로 충당됩니다." />
          </div>

          <InfoCard label="조기상환 수수료" content="없음 (단, 일부 상품에 따라 상이할 수 있음)" />
          <InfoCard label="대출 예시" content="100만원을 연 20% 금리로 12개월 원리금균등 상환 시 총 납부금액 1,111,662원 (이자 포함)" />

          <div style={{ background: "#fff", borderRadius: 16, padding: "28px 32px", border: "1px solid rgba(220,38,38,0.08)", marginTop: 8 }}>
            <div style={{ fontSize: 14, lineHeight: 2, color: "#b91c1c", fontWeight: 500 }}>
              <p>- 과도한 대출은 개인신용평점 하락의 원인이 될 수 있습니다.</p>
              <p>- 신용평점 하락 시 금융거래 이용에 제한이 있을 수 있습니다.</p>
              <p>- 연체 시 계약에 따라 연체이자율이 적용되며 신용평점이 하락할 수 있습니다.</p>
            </div>
          </div>

          <p style={{ color: "#bbb", textAlign: "center", fontSize: 13, padding: "16px 0" }}>
            계약 체결 전 금융상품 설명서 및 약관을 반드시 확인하시기 바랍니다.
          </p>

          <div style={{ background: "#fff", borderRadius: 12, padding: "16px 24px", border: "1px solid rgba(232,115,26,0.1)", textAlign: "center" }}>
            <p style={{ color: "#E8731A", fontWeight: 600, fontSize: 14 }}>중개수수료를 요구하거나 받는 것은 불법입니다.</p>
          </div>
        </div>
      </div>

      <style>{`
        .info-grid-2col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
        @media (max-width: 640px) { .info-grid-2col { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

function InfoCard({ label, content, sub }: { label: string; content: string; sub?: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "24px 28px", border: "1px solid rgba(0,0,0,0.03)" }}>
      <span style={{ color: "#1B7D3A", fontWeight: 600, fontSize: 11, display: "block", marginBottom: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
      <p style={{ color: "#555", fontSize: 14, lineHeight: 1.7, wordBreak: "keep-all" }}>{content}</p>
      {sub && <p style={{ color: "#ccc", fontSize: 12, marginTop: 8 }}>{sub}</p>}
    </div>
  );
}
