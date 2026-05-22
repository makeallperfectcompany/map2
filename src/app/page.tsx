import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HomeAdvantagesSection from "@/components/sections/HomeAdvantagesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeTechnologiesSection from "@/components/sections/HomeTechnologiesSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";

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
      <PrinciplesSection />
      <ServicesSection />
      <HomeAdvantagesSection />
      <CasesSection />
      <HomeReviewsSection />
      <HomeIndustriesSection />
      <HomeTechnologiesSection />
      <HomeAboutSection />
      <HomeBlogSection />
      <HomeFaqSection />
      <FinalCtaSection />
    </main>
  );
}
