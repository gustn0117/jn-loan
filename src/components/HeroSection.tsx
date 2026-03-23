"use client";

import Link from "next/link";
import { useState } from "react";

const loanTypes = [
  { name: "자동차담보대출", desc: "차량이 있다면 담보 설정으로 비교적 유리한 조건으로 이용 가능", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" },
  { name: "전월세담보대출", desc: "전세·월세 보증금을 활용해 생활자금을 편리하게 마련 가능", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" },
  { name: "무직자 대출", desc: "소득이 없어도 신용 등을 기준으로 신청 가능한 대출", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { name: "비상금대출", desc: "갑작스러운 지출에 빠르게 대응할 수 있는 소액 간편 대출", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "개인회생대출", desc: "개인회생 중이거나 이후에도 상황에 맞게 이용 가능한 맞춤 대출", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
  { name: "여성우대대출", desc: "여성이라면 보다 유리한 조건과 혜택으로 이용 가능한 대출", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
];

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section style={{ position: "relative", overflow: "hidden", paddingTop: 72 }}>
      {/* Background layers */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0c1f12 0%, #112a18 25%, #0d2214 50%, #091a0e 100%)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.05 }} />
      {/* Decorative elements */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,115,26,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(27,125,58,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
      {/* Grid pattern overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 1, paddingTop: 80, paddingBottom: 100 }}>
        <div className="hero-layout">
          {/* Left side - Loan type navigation */}
          <div className="hero-left">
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,115,26,0.1)", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8731A" }} />
                <span style={{ color: "#E8731A", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>LOAN PRODUCTS</span>
              </div>
              <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.4 }}>
                대출 상품 안내
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {loanTypes.map((loan, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "14px 18px", borderRadius: 12, border: "none",
                    cursor: "pointer", textAlign: "left", transition: "all 0.25s ease",
                    background: activeIdx === idx ? "rgba(232,115,26,0.12)" : "transparent",
                    borderLeft: activeIdx === idx ? "3px solid #E8731A" : "3px solid transparent",
                    color: activeIdx === idx ? "#E8731A" : "rgba(255,255,255,0.45)",
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: activeIdx === idx ? "rgba(232,115,26,0.15)" : "rgba(255,255,255,0.04)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.25s",
                  }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: activeIdx === idx ? 1 : 0.6 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={loan.icon} />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: activeIdx === idx ? 700 : 500, transition: "all 0.25s" }}>{loan.name}</span>
                  {activeIdx === idx && (
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginLeft: "auto", opacity: 0.7 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Main content */}
          <div className="hero-right">
            <div style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              borderRadius: 28, padding: "clamp(36px, 5vw, 60px)",
              border: "1px solid rgba(255,255,255,0.06)",
              position: "relative", overflow: "hidden",
              backdropFilter: "blur(10px)",
            }}>
              {/* Glow effect */}
              <div style={{ position: "absolute", top: -60, right: -60, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,115,26,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />

              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,115,26,0.1)", borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
                <span style={{ color: "#E8731A", fontSize: 12, fontWeight: 700 }}>{loanTypes[activeIdx].name}</span>
              </div>

              <h1 style={{
                color: "#fff", fontSize: "clamp(30px, 4.5vw, 48px)", fontWeight: 800,
                lineHeight: 1.2, marginBottom: 20, wordBreak: "keep-all", letterSpacing: "-0.03em",
              }}>
                일정 수입이 있다면
                <br />
                <span style={{ background: "linear-gradient(135deg, #E8731A, #F5923E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  신청부터 막힘없이
                </span>
                <br />
                한 번에 가능
              </h1>

              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1.8, marginBottom: 36, wordBreak: "keep-all", maxWidth: 420 }}>
                {loanTypes[activeIdx].desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
                <Link href="/apply" style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "linear-gradient(135deg, #E8731A 0%, #d4650f 100%)",
                  color: "#fff", fontWeight: 700, padding: "16px 36px", borderRadius: 14,
                  fontSize: 15, textDecoration: "none", letterSpacing: "0.01em",
                  boxShadow: "0 4px 20px rgba(232,115,26,0.3)",
                  transition: "all 0.3s",
                }}>
                  대출 상담 신청
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a href="tel:010-4077-3837" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  color: "rgba(255,255,255,0.4)", fontWeight: 500, padding: "16px 24px",
                  fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14, transition: "all 0.3s",
                }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  010-4077-3837
                </a>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {[
                  { value: "연 20%", label: "이내 금리" },
                  { value: "당일", label: "승인 가능" },
                  { value: "0원", label: "중개수수료" },
                  { value: "12~60", label: "개월" },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <p style={{ color: "#fff", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>{s.value}</p>
                    <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, fontWeight: 500 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-layout { display: grid; grid-template-columns: 300px 1fr; gap: 56px; align-items: start; }
        .hero-left { padding-top: 20px; }
        @media (max-width: 960px) {
          .hero-layout { grid-template-columns: 1fr; gap: 32px; }
          .hero-left { order: 2; }
          .hero-right { order: 1; }
        }
      `}</style>
    </section>
  );
}
