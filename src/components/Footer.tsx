import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0f0c", color: "#666" }}>
      <div className="container-main" style={{ paddingTop: 72, paddingBottom: 36 }}>
        <div className="footer-grid" style={{ marginBottom: 56 }}>
          <div>
            <div style={{ marginBottom: 28 }}>
              <Image src="/logo.png" alt="제이앤대부" width={140} height={40} style={{ height: 30, width: "auto", border: "none", display: "block", filter: "brightness(0) invert(1) opacity(0.4)" }} />
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
              <li>상호명: 주식회사 제이앤대부전당</li>
              <li>대표자: 박종남</li>
              <li>사업자등록번호: 564-88-02984</li>
              <li>대부업등록번호: 2023-광주 광산-0013</li>
              <li>등록기관: 시민경제과 (062-960-3867)</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "rgba(255,255,255,0.5)", fontWeight: 700, fontSize: 12, marginBottom: 24, letterSpacing: "0.1em", textTransform: "uppercase" }}>Contact</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
              <li>
                <a href="tel:010-4077-3837" style={{ color: "#E8731A", fontWeight: 700, textDecoration: "none", fontSize: 16 }}>010-4077-3837</a>
              </li>
              <li style={{ wordBreak: "keep-all", lineHeight: 1.6 }}>광주광역시 광산구 마항길 43, 201호 (하남동)</li>
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
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr; gap: 36px; } }
        footer a:hover { color: #E8731A !important; }
      `}</style>
    </footer>
  );
}
