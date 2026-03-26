import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "대출절차 · 상담신청",
  description: "제이앤대부 대출 상담 신청. 간편한 절차로 빠른 상담, 당일 승인 가능. 중개수수료 없음.",
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
