"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LimitCheckPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputStyle = {
    width: "100%",
    border: "1px solid #e0e0e0",
    borderRadius: 12,
    padding: "14px 16px",
    fontSize: 14,
    outline: "none",
    background: "#fff",
  } as const;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error } = await supabase.from("limit_checks").insert({
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      loan_type: formData.get("loan_type") as string || null,
    });

    setLoading(false);
    if (!error) setSubmitted(true);
    else alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
  }

  return (
    <SubpageLayout title="무료한도조회" subtitle="신용점수 영향 없이 대출 한도를 확인하세요">
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "rgba(27,125,58,0.04)", borderRadius: 16, padding: "20px 24px", border: "1px solid rgba(27,125,58,0.1)", marginBottom: 28, textAlign: "center" }}>
            <p style={{ color: "#1B7D3A", fontWeight: 600, fontSize: 14 }}>무료 한도조회는 신용점수에 영향을 주지 않습니다.</p>
            <p style={{ color: "#999", fontSize: 12, marginTop: 4 }}>간단한 정보 입력으로 예상 한도를 확인해보세요.</p>
          </div>

          {submitted ? (
            <div style={{ background: "#fff", borderRadius: 20, padding: "64px 40px", border: "1px solid #eee", textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(27,125,58,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg width="36" height="36" fill="none" stroke="#1B7D3A" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#111", marginBottom: 12 }}>조회 신청이 완료되었습니다</h2>
              <p style={{ color: "#999" }}>담당자가 확인 후 빠르게 연락드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 20, padding: "48px 40px", border: "1px solid #eee" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8 }}>이름 <span style={{ color: "#dc2626" }}>*</span></label>
                  <input name="name" type="text" required style={inputStyle} placeholder="이름을 입력하세요" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8 }}>연락처 <span style={{ color: "#dc2626" }}>*</span></label>
                  <input name="phone" type="tel" required style={inputStyle} placeholder="010-0000-0000" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8 }}>관심 대출 상품</label>
                  <select name="loan_type" style={{ ...inputStyle, appearance: "none" as const }}>
                    <option value="">선택하세요</option>
                    <option>자동차담보대출</option>
                    <option>전월세담보대출</option>
                    <option>무직자 대출</option>
                    <option>비상금대출</option>
                    <option>개인회생대출</option>
                    <option>여성우대대출</option>
                  </select>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <input type="checkbox" required id="agree-limit" style={{ marginTop: 4 }} />
                  <label htmlFor="agree-limit" style={{ fontSize: 12, color: "#999" }}>개인정보 수집 및 이용에 동의합니다.</label>
                </div>
                <button type="submit" disabled={loading} style={{ width: "100%", background: loading ? "#999" : "#E8731A", color: "#fff", fontWeight: 700, padding: "18px 0", borderRadius: 12, fontSize: 17, border: "none", cursor: loading ? "not-allowed" : "pointer" }}>
                  {loading ? "조회 중..." : "무료 한도 조회하기"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </SubpageLayout>
  );
}
