import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "제이앤대부 - 주식회사 제이앤대부전당",
  description:
    "자동차담보대출, 전월세담보대출, 무직자대출, 비상금대출, 개인회생대출, 여성우대대출 - 제이앤대부",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
