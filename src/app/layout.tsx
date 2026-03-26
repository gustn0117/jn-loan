import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "제이앤대부 | 광주 정식등록 대부업체 - 자동차담보·전월세·무직자·비상금 대출",
    template: "%s | 제이앤대부",
  },
  description:
    "제이앤대부는 광주광역시에 정식 등록된 대부업체입니다. 자동차담보대출, 전월세담보대출, 무직자대출, 비상금대출, 개인회생대출, 여성우대대출까지 다양한 맞춤 대출 상품을 제공합니다. 당일 승인, 중개수수료 0원.",
  keywords: [
    "제이앤대부",
    "제이앤대부전당",
    "광주대부업",
    "광주대출",
    "자동차담보대출",
    "전월세담보대출",
    "무직자대출",
    "비상금대출",
    "개인회생대출",
    "여성우대대출",
    "광주대부업체",
    "광주자동차담보대출",
    "당일대출",
    "소액대출",
    "대부업체추천",
  ],
  openGraph: {
    title: "제이앤대부 | 광주 정식등록 대부업체",
    description:
      "광주광역시 정식 등록 대부업체. 자동차담보, 전월세, 무직자, 비상금, 개인회생, 여성우대 대출. 당일 승인, 수수료 0원.",
    url: "https://jn-loan.co.kr",
    siteName: "제이앤대부",
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://jn-loan.co.kr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  verification: {},
  other: {
    "naver-site-verification": "630326c09ca15ab0a8ebcf912fe9999df85b8b56",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "제이앤대부",
  alternateName: "주식회사 제이앤대부전당",
  url: "https://jn-loan.co.kr",
  telephone: "010-3935-3837",
  address: {
    "@type": "PostalAddress",
    streetAddress: "광산구 마항길 43, 201호 (하남동)",
    addressLocality: "광주광역시",
    addressCountry: "KR",
  },
  description:
    "광주광역시 정식 등록 대부업체. 자동차담보대출, 전월세담보대출, 무직자대출, 비상금대출, 개인회생대출, 여성우대대출 상품 제공.",
  areaServed: "광주광역시",
  priceRange: "연 20% 이내",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
