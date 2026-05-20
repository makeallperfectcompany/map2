import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CasesSection from "@/components/sections/CasesSection";

export const metadata: Metadata = {
  title: "Make All Perfect — маркетинг полного цикла",
  description:
    "Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.",
  alternates: {
    canonical: "https://map2.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://map2.vercel.app",
    title: "Make All Perfect — маркетинг полного цикла",
    description:
      "Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Make All Perfect — маркетинговое агентство полного цикла",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make All Perfect — маркетинг полного цикла",
    description:
      "Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <CasesSection />
    </main>
  );
}
