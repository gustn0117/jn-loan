import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jn-loan.co.kr";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/limit-check`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/apply`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
