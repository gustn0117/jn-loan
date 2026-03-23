import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0f0c", color: "#666" }}>
      <div className="container-main" style={{ paddingTop: 72, paddingBottom: 36 }}>
        {/* Legal disclosure in footer */}
        <div style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "18px 20px" }}>
              <span style={{ color: "#E8731A", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", display: "block", marginBottom: 8 }}>대출금리</span>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.7 }}>연 20% 이내 (개인 신용평점 및 상품에 따라 차등 적용)<br />※ 2021년 7월 7일부터 신규 체결, 갱신, 연장되는 계약에 한함</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "18px 20px" }}>
              <span style={{ color: "#E8731A", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", display: "block", marginBottom: 8 }}>상환방법</span>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.7 }}>원금자유상환(만기일시상환), 원리금균등분할상환 등 상품별 상이</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "18px 20px" }}>
              <span style={{ color: "#E8731A", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", display: "block", marginBottom: 8 }}>이자 부과</span>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.7 }}>매월 약정일 기준</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "18px 20px" }}>
              <span style={{ color: "#E8731A", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", display: "block", marginBottom: 8 }}>변제방법</span>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.7 }}>은행송금(채권자 계좌 입금) 등 약정된 방법에 따르며 비용 → 이자 → 원금 순으로 충당됩니다.</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "18px 20px" }}>
              <span style={{ color: "#E8731A", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", display: "block", marginBottom: 8 }}>조기상환 수수료</span>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.7 }}>없음 (단, 일부 상품에 따라 상이할 수 있음)</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "18px 20px" }}>
              <span style={{ color: "#E8731A", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", display: "block", marginBottom: 8 }}>대출 예시</span>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.7 }}>100만원을 연 20% 금리로 12개월 원리금균등 상환 시 총 납부금액 1,111,662원 (이자 포함)</p>
            </div>
          </div>

          {/* Warning text - red/yellow */}
          <div style={{ background: "rgba(220,38,38,0.08)", borderRadius: 14, padding: "18px 24px", marginBottom: 16, borderLeft: "3px solid #dc2626" }}>
            <p style={{ color: "#ef4444", fontSize: 13, fontWeight: 600, lineHeight: 2.0 }}>
              과도한 대출은 개인신용평점 하락의 원인이 될 수 있습니다.<br />
              신용평점 하락 시 금융거래 이용에 제한이 있을 수 있습니다.<br />
              연체 시 계약에 따라 연체이자율이 적용되며 신용평점이 하락할 수 있습니다.
            </p>
          </div>

          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, textAlign: "center", marginBottom: 12 }}>
            계약 체결 전 금융상품 설명서 및 약관을 반드시 확인하시기 바랍니다.
          </p>

          <div style={{ background: "rgba(232,115,26,0.08)", borderRadius: 10, padding: "14px 20px", textAlign: "center" }}>
            <p style={{ color: "#E8731A", fontWeight: 700, fontSize: 14 }}>중개수수료를 요구하거나 받는 것은 불법입니다.</p>
          </div>
        </div>

        {/* Company info + Menu */}
        <div className="footer-grid" style={{ marginBottom: 48 }}>
          <div>
            <div style={{ marginBottom: 28 }}>
              <Image src="/logo.png" alt="제이앤대부" width={140} height={40} style={{ height: 30, width: "auto", border: "none", display: "block", filter: "brightness(0) invert(1) opacity(0.4)" }} />
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
              <li><span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>상호명:</span> 주식회사 제이앤대부전당</li>
              <li><span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>대표자:</span> 박종남</li>
              <li><span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>Tel:</span> 010-4077-3837</li>
              <li><span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>대부업등록번호:</span> 2023-광주 광산-0013</li>
              <li><span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>등록기관:</span> 시민경제과 (062-960-3867)</li>
              <li><span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>사업자등록번호:</span> 564-88-02984</li>
              <li><span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>주소:</span> 광주광역시 광산구 마항길 43, 201호 (하남동)</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "rgba(255,255,255,0.5)", fontWeight: 700, fontSize: 12, marginBottom: 24, letterSpacing: "0.1em", textTransform: "uppercase" }}>Menu</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14, fontSize: 13 }}>
              {[
                { label: "무료한도조회", href: "/limit-check" },
                { label: "대출상품", href: "/products" },
                { label: "대출절차", href: "/apply" },
                { label: "회사소개", href: "/about" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 28 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.15)", textAlign: "center" }}>
            &copy; {new Date().getFullYear()} 주식회사 제이앤대부전당. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 48px; }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr; gap: 36px; } }
        footer a:hover { color: #E8731A !important; }
      `}</style>
    </footer>
  );
}
