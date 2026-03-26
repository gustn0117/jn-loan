import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "무료한도조회",
  description: "제이앤대부 무료 대출 한도조회. 신용점수 영향 없이 대출 가능 한도를 확인하세요. 자동차담보, 전월세, 무직자, 비상금 대출 한도 조회.",
};

export default function LimitCheckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
