import type { Metadata } from "next";
import CasesIndexSection from "@/components/sections/CasesIndexSection";

export const metadata: Metadata = {
  title: "Кейсы Make All Perfect — результаты в маркетинге, SEO, рекламе и разработке",
  description:
    "Кейсы Make All Perfect: рост продаж, заявок и органики через SEO, рекламу, внешние каналы, UX и системный маркетинг.",
  alternates: {
    canonical: "https://map2.vercel.app/cases",
  },
  openGraph: {
    type: "website",
    url: "https://map2.vercel.app/cases",
    title: "Кейсы Make All Perfect — результаты в маркетинге, SEO, рекламе и разработке",
    description:
      "Кейсы Make All Perfect: рост продаж, заявок и органики через SEO, рекламу, внешние каналы, UX и системный маркетинг.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Кейсы Make All Perfect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Кейсы Make All Perfect — результаты в маркетинге, SEO, рекламе и разработке",
    description:
      "Кейсы Make All Perfect: рост продаж, заявок и органики через SEO, рекламу, внешние каналы, UX и системный маркетинг.",
    images: ["/og-image.jpg"],
  },
};

export default function CasesPage() {
  return <CasesIndexSection />;
}
