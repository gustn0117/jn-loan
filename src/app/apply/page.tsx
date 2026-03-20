"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useState } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    width: "100%",
    border: "1px solid #e0e0e0",
    borderRadius: 12,
    padding: "14px 16px",
    fontSize: 14,
    outline: "none",
    background: "#fff",
  } as const;

  return (
    <SubpageLayout title="대출절차" subtitle="간편하게 대출 상담을 신청하세요">
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px" }}>
          {submitted ? (
            <div style={{ background: "#fff", borderRadius: 20, padding: "64px 40px", border: "1px solid #eee", textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(27,125,58,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg width="36" height="36" fill="none" stroke="#1B7D3A" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#111", marginBottom: 12 }}>신청이 완료되었습니다</h2>
              <p style={{ color: "#999" }}>담당자가 빠른 시일 내에 연락드리겠습니다.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              style={{ background: "#fff", borderRadius: 20, padding: "48px 40px", border: "1px solid #eee" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8 }}>
                    이름 <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input type="text" required style={inputStyle} placeholder="이름을 입력하세요" />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8 }}>
                    나이 <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input type="number" required style={inputStyle} placeholder="나이를 입력하세요" min={20} max={99} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8 }}>
                    연락처 <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input type="tel" required style={inputStyle} placeholder="010-0000-0000" />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8 }}>
                    대출 종류 <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <select required style={{ ...inputStyle, appearance: "none" as const }}>
                    <option value="">대출 종류를 선택하세요</option>
                    <option>자동차담보대출</option>
                    <option>전월세담보대출</option>
                    <option>무직자 대출</option>
                    <option>비상금대출</option>
                    <option>개인회생대출</option>
                    <option>여성우대대출</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8 }}>희망 대출금액</label>
                  <input type="text" style={inputStyle} placeholder="희망 금액을 입력하세요" />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8 }}>상담 내용</label>
                  <textarea rows={4} style={{ ...inputStyle, resize: "none" as const }} placeholder="추가 상담 내용을 입력하세요" />
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <input type="checkbox" required id="agree" style={{ marginTop: 4 }} />
                  <label htmlFor="agree" style={{ fontSize: 12, color: "#999" }}>
                    개인정보 수집 및 이용에 동의합니다. 수집된 정보는 대출 상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.
                  </label>
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "#1B7D3A",
                    color: "#fff",
                    fontWeight: 700,
                    padding: "18px 0",
                    borderRadius: 12,
                    fontSize: 17,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  대출 상담 신청하기
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </SubpageLayout>
  );
}
