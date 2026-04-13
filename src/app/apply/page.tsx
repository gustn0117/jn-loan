"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const steps = [
  { num: "01", title: "대출 상담 신청", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { num: "02", title: "상담원 연결\n및 안내", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1m0 0V6a2 2 0 012-2h8a2 2 0 012 2v5a2 2 0 01-2 2h-2.586l-1 1" },
  { num: "03", title: "심사 기준에\n따른 검토", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { num: "04", title: "필요 서류 안내", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
  { num: "05", title: "약정 절차 진행", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { num: "06", title: "절차 마무리", icon: "M5 13l4 4L19 7" },
];

function PrivacyPolicyDetail() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} style={{
        background: "none", border: "none", color: "#E8731A", fontSize: 13,
        fontWeight: 600, cursor: "pointer", textDecoration: "underline", padding: 0,
      }}>
        개인정보취급방침 내용보기
      </button>
      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={() => setOpen(false)}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
          <div style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", maxWidth: 600, width: "100%", maxHeight: "80vh", overflowY: "auto", position: "relative", zIndex: 1 }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111" }}>개인정보취급방침</h3>
              <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
                <svg width="24" height="24" fill="none" stroke="#999" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div style={{ fontSize: 14, color: "#555", lineHeight: 2.0 }}>
              <p style={{ fontWeight: 700, color: "#333", marginBottom: 16 }}>개인(신용)정보 수집·이용동의</p>
              <p style={{ marginBottom: 16 }}>제이앤대부중개 귀중</p>
              <p style={{ marginBottom: 16 }}>귀사와의 금융거래와 관련하여 귀사가 본인의 개인(신용)정보를 수집·이용하고자 하는 경우에는 [개인정보 보호법] 제15조, 제22조, [신용정보의 이용 및 보호에 관한 법률] 제32조, 제33조 및 제34조에 따라 동의를 얻어야 합니다.</p>
              <p style={{ marginBottom: 16 }}>이에 귀사가 아래의 내용과 같이 본인의 개인(신용)정보를 수집·이용하는데 동의합니다.</p>
              <p style={{ marginBottom: 8 }}>□ 개인(신용)정보의 수집·이용 목적 : 신용대출, 차량담보대출, 주택담보대출 등 대출 상담 및 컨설팅</p>
              <p style={{ marginBottom: 8 }}>□ 수집, 이용할 개인(신용)정보의 내용 : 이름, 휴대폰번호, 차량번호, 집주소 등</p>
              <p style={{ marginBottom: 16 }}>□ 개인(신용)정보의 보유·이용 기간 : 거래 종료(채권 채무 관계 종료)일로부터 5년(단, 관련법령의 별도 규정이 명시되어 있는 경우 그 기간을 따름)</p>
              <p style={{ marginBottom: 24, color: "#999" }}>귀하는 동의를 거부할 권리가 있으나, 동의하지 않으실 경우 거래관계의 설정 또는 유지가 불가능 할 수 있음을 알려드립니다.</p>

              <div style={{ borderTop: "1px solid #eee", paddingTop: 20, marginTop: 8 }}>
                <p style={{ fontWeight: 700, color: "#333", marginBottom: 16 }}>개인(신용)정보 제공 동의</p>
                <p style={{ marginBottom: 16 }}>제이앤대부중개 귀중</p>
                <p style={{ marginBottom: 16 }}>귀사와의 (금융)거래와 관련하여 귀사가 본인으로부터 취득한 개인(신용)정보는 [개인정보 보호법] 제17조, 제22조, [신용정보의 이용 및 보호에 관한 법률] 제32조에 따라 제3자에게 제공할 경우 본인의 사전 동의를 얻어야 하는 정보입니다.</p>
                <p style={{ marginBottom: 16 }}>이에 본인은 귀사가 본인의 개인(신용)정보를 아래와 같이 제 3자에게 제공하는 것에 대해 동의합니다.</p>
                <p style={{ marginBottom: 8 }}>□ 개인(신용)정보를 제공받는자 : 귀사와 위탁계약을 체결한 대출모집인 및 금융회사</p>
                <p style={{ marginBottom: 8 }}>□ 개인(신용)정보 제공목적 : 귀사가 취급하는 금융상품의 상담</p>
                <p style={{ marginBottom: 8 }}>□ 제공대상 개인(신용)정보 : 이름, 휴대폰번호, e-mail 주소</p>
                <p style={{ marginBottom: 16 }}>□ 제공받는 자의 개인(신용)정보 보유 및 이용기간 : 제공 동의일로부터 개인(신용)정보를 제공받는 자의 목적을 달성할 때까지</p>
                <p style={{ color: "#999" }}>귀하는 동의를 거부할 권리가 있으나, 동의하지 않으실 경우 거래관계의 설정 또는 유치가 불가능할 수 있음을 알려드립니다.</p>
              </div>
            </div>
            <div style={{ textAlign: "right", marginTop: 24 }}>
              <button onClick={() => setOpen(false)} style={{ background: "#f0f0f0", border: "none", borderRadius: 10, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", color: "#555" }}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputStyle = {
    width: "100%", border: "1px solid #e5e5e5", borderRadius: 14,
    padding: "16px 18px", fontSize: 15, outline: "none", background: "#fff",
    transition: "all 0.2s",
  } as const;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const { error } = await supabase.from("consultations").insert({
      name: formData.get("name") as string,
      age: parseInt(formData.get("age") as string) || null,
      phone: formData.get("phone") as string,
      job: formData.get("job") as string || null,
      loan_type: formData.get("loan_type") as string || null,
      amount: formData.get("amount") as string || null,
      message: formData.get("message") as string || null,
    });
    setLoading(false);
    if (!error) setSubmitted(true);
    else alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
  }

  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: 72 }}>
        {/* Hero - solid green */}
        <div style={{
          background: "linear-gradient(135deg, #2ecc71 0%, #25a85a 50%, #1e7a3c 100%)",
          padding: "100px 0 80px", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "30%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />

          <div className="container-main" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 16, fontWeight: 400 }}>편안한 금융의 첫걸음</p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.25 }}>
              고객님의 내일을 응원합니다!
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 18, fontWeight: 400, letterSpacing: "-0.01em" }}>진심과 신뢰로 함께 만들어갑니다.</p>
          </div>
        </div>

        {/* Process steps */}
        <section style={{ padding: "100px 0", background: "#fff" }}>
          <div className="container-main">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,115,26,0.06)", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
                <span style={{ color: "#E8731A", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>PROCESS</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>대출 절차 안내</h2>
            </div>

            <div className="steps-grid">
              {steps.map((step, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div className="step-connector" style={{
                      position: "absolute", top: 40, left: "calc(50% + 44px)", right: "calc(-50% + 44px)",
                      height: 2, background: "linear-gradient(90deg, rgba(232,115,26,0.2), rgba(232,115,26,0.05))",
                    }} />
                  )}

                  <div style={{
                    width: 80, height: 80, borderRadius: 24,
                    background: "linear-gradient(135deg, rgba(27,125,58,0.08) 0%, rgba(27,125,58,0.03) 100%)",
                    color: "#2ecc71", display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20, position: "relative", zIndex: 2,
                    border: "1px solid rgba(27,125,58,0.08)",
                  }}>
                    <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} /></svg>
                  </div>

                  <span style={{
                    color: "#E8731A", fontSize: 12, fontWeight: 800, marginBottom: 8,
                    background: "rgba(232,115,26,0.06)", padding: "3px 10px", borderRadius: 6,
                  }}>{step.num}</span>
                  <p style={{ color: "#333", fontSize: 14, fontWeight: 700, textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.5, letterSpacing: "-0.01em" }}>{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application form */}
        <section style={{ padding: "100px 0", background: "#f8f9fa" }}>
          <div style={{ maxWidth: 580, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#111", marginBottom: 10, letterSpacing: "-0.02em" }}>대출 상담 신청</h2>
              <p style={{ color: "#aaa", fontSize: 15 }}>간편하게 상담을 신청하시면 전문 상담사가 연락드립니다</p>
            </div>

            {submitted ? (
              <div style={{ background: "#fff", borderRadius: 24, padding: "72px 48px", border: "1px solid rgba(0,0,0,0.04)", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                <div style={{ width: 80, height: 80, borderRadius: 24, background: "rgba(27,125,58,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
                  <svg width="40" height="40" fill="none" stroke="#2ecc71" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 style={{ fontSize: 26, fontWeight: 800, color: "#111", marginBottom: 12 }}>신청이 완료되었습니다</h2>
                <p style={{ color: "#999" }}>담당자가 빠른 시일 내에 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 24, padding: "52px 44px", border: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  {[
                    { name: "name", label: "이름", type: "text", placeholder: "이름을 입력하세요", required: true },
                    { name: "age", label: "나이", type: "number", placeholder: "나이를 입력하세요", required: true },
                    { name: "phone", label: "연락처", type: "tel", placeholder: "010-0000-0000", required: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>{f.label} {f.required && <span style={{ color: "#E8731A" }}>*</span>}</label>
                      <input name={f.name} type={f.type} required={f.required} style={inputStyle} placeholder={f.placeholder} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>직업 <span style={{ color: "#E8731A" }}>*</span></label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
                      {["무직자", "직장인", "개인사업자", "법인사업자"].map((j) => (
                        <label key={j} style={{ position: "relative", cursor: "pointer" }}>
                          <input type="radio" name="job" value={j} required style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} />
                          <div className="job-radio" style={{
                            border: "1px solid #e5e5e5", borderRadius: 12, padding: "14px 8px",
                            textAlign: "center", fontSize: 14, fontWeight: 600, color: "#666",
                            transition: "all 0.2s", background: "#fff",
                          }}>{j}</div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 8 }}>대출 종류 <span style={{ color: "#E8731A" }}>*</span></label>
                    <select name="loan_type" required style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">대출 종류를 선택하세요</option>
                      <option>자동차담보대출</option><option>전월세담보대출</option>
                      <option>무직자 대출</option><option>비상금대출</option>
                      <option>개인회생대출</option><option>여성우대대출</option>
                    </select>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#f8f9fa", borderRadius: 12, padding: "14px 16px" }}>
                    <input type="checkbox" required id="agree" style={{ marginTop: 3, width: 18, height: 18, accentColor: "#E8731A" }} />
                    <label htmlFor="agree" style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
                      개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>
                  <PrivacyPolicyDetail />
                  <button type="submit" disabled={loading} style={{
                    width: "100%", background: loading ? "#ccc" : "linear-gradient(135deg, #2ecc71 0%, #25a85a 100%)",
                    color: "#fff", fontWeight: 700, padding: "18px 0", borderRadius: 14,
                    fontSize: 17, border: "none", cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: loading ? "none" : "0 4px 16px rgba(27,125,58,0.25)",
                    transition: "all 0.3s",
                  }}>
                    {loading ? "신청 중..." : "대출 상담 신청하기"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .steps-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; align-items: start; }
        .step-connector { display: block; }
        @media (max-width: 900px) { .steps-grid { grid-template-columns: repeat(3, 1fr); gap: 40px; } .step-connector { display: none; } }
        @media (max-width: 500px) { .steps-grid { grid-template-columns: repeat(2, 1fr); } }
        input[type="radio"]:checked + .job-radio {
          border-color: #2ecc71 !important; background: rgba(46,204,113,0.06) !important;
          color: #1e7a3c !important; box-shadow: 0 0 0 1px #2ecc71;
        }
        .job-radio:hover { border-color: #2ecc71 !important; }
      `}</style>
    </>
  );
}
