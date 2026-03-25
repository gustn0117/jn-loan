"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menus = [
    { label: "무료한도조회", href: "/limit-check" },
    { label: "대출상품", href: "/products" },
    { label: "대출절차", href: "/apply" },
    { label: "회사소개", href: "/about" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
      transition: "all 0.3s ease",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.04)" : "none",
    }}>
      <div className="container-main">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image src="/logo.png" alt="제이앤대부" width={160} height={46} style={{ height: 36, width: "auto", border: "none", display: "block" }} priority />
          </Link>

          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {menus.map((menu) => (
              <Link key={menu.href} href={menu.href} style={{
                fontSize: 15, fontWeight: 600, color: "#444", textDecoration: "none",
                letterSpacing: "-0.01em", padding: "8px 18px", borderRadius: 8,
                transition: "all 0.2s",
              }}>
                {menu.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="tel:010-3935-3837" className="desktop-nav" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg, #E8731A 0%, #d4650f 100%)",
              color: "#fff", borderRadius: 10, padding: "11px 24px",
              fontSize: 14, fontWeight: 700, textDecoration: "none",
              letterSpacing: "0.01em", boxShadow: "0 2px 12px rgba(232,115,26,0.25)",
              transition: "all 0.2s",
            }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              010-3935-3837
            </a>
            <button className="mobile-menu-btn" style={{ display: "none", padding: 8, border: "none", background: "transparent", cursor: "pointer" }} onClick={() => setMobileOpen(!mobileOpen)}>
              <svg width="24" height="24" fill="none" stroke="#333" viewBox="0 0 24 24">
                {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-dropdown" style={{ background: "#fff", borderTop: "1px solid #f0f0f0", boxShadow: "0 16px 48px rgba(0,0,0,0.08)" }}>
          <div className="container-main" style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {menus.map((menu) => (
                <Link key={menu.href} href={menu.href} style={{
                  fontSize: 16, fontWeight: 600, color: "#333", padding: "16px 20px",
                  borderRadius: 12, textDecoration: "none", transition: "all 0.2s",
                  background: "transparent",
                }} onClick={() => setMobileOpen(false)}>{menu.label}</Link>
              ))}
              <a href="tel:010-3935-3837" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "linear-gradient(135deg, #E8731A 0%, #d4650f 100%)",
                color: "#fff", borderRadius: 12, fontWeight: 700, padding: "16px 20px",
                fontSize: 16, marginTop: 12, textDecoration: "none",
              }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                010-3935-3837
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
        @media (min-width: 769px) { .mobile-dropdown { display: none !important; } }
        nav a:hover { background: rgba(232,115,26,0.06) !important; color: #E8731A !important; }
      `}</style>
    </header>
  );
}
