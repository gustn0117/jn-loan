"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = [
    { label: "무료한도조회", href: "/limit-check" },
    { label: "대출상품", href: "/products" },
    { label: "대출절차", href: "/apply" },
    { label: "회사소개", href: "/about" },
  ];

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
      <div className="container-main">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image src="/logo.png" alt="제이앤대부" width={160} height={46} style={{ height: 36, width: "auto", border: "none", display: "block" }} priority />
          </Link>

          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {menus.map((menu) => (
              <Link key={menu.href} href={menu.href} style={{ fontSize: 14, fontWeight: 500, color: "#666", textDecoration: "none", letterSpacing: "0.01em" }}>
                {menu.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="tel:010-4077-3837" className="desktop-nav" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#1B7D3A", color: "#fff", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, textDecoration: "none", letterSpacing: "0.02em" }}>
              <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              010-4077-3837
            </a>
            <button className="mobile-menu-btn" style={{ display: "none", padding: 8, border: "none", background: "transparent", cursor: "pointer" }} onClick={() => setMobileOpen(!mobileOpen)}>
              <svg width="22" height="22" fill="none" stroke="#333" viewBox="0 0 24 24">
                {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-dropdown" style={{ background: "#fff", borderTop: "1px solid #f0f0f0" }}>
          <div className="container-main" style={{ padding: "16px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {menus.map((menu) => (
                <Link key={menu.href} href={menu.href} style={{ fontSize: 15, fontWeight: 500, color: "#333", padding: "14px 16px", borderRadius: 10, textDecoration: "none" }} onClick={() => setMobileOpen(false)}>{menu.label}</Link>
              ))}
              <a href="tel:010-4077-3837" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#1B7D3A", color: "#fff", borderRadius: 10, fontWeight: 600, padding: "14px 20px", fontSize: 15, marginTop: 8, textDecoration: "none" }}>010-4077-3837</a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
        @media (min-width: 769px) { .mobile-dropdown { display: none !important; } }
      `}</style>
    </header>
  );
}
