import type { Metadata } from "next";
import AllServicesHeroSection from "@/components/sections/AllServicesHeroSection";
import AllServicesDecisionSection from "@/components/sections/AllServicesDecisionSection";
import AllServicesFaqSection from "@/components/sections/AllServicesFaqSection";
import AllServicesSeoText from "@/components/sections/AllServicesSeoText";
import ServicesSection from "@/components/sections/ServicesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeTechnologiesSection from "@/components/sections/HomeTechnologiesSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Услуги маркетингового агентства Make All Perfect: реклама, SEO, сайты, CRM",
  description:
    "Реклама, SEO, сайты, маркетплейсы, CRM и аналитика в одной системе роста. С 2017 года, 400+ проектов, 98% клиентов продлевают договор. Подберём услугу под вашу задачу — консультация бесплатно.",
  alternates: {
    canonical: "https://map2-ten.vercel.app/services",
  },
  openGraph: {
    type: "website",
    url: "https://map2-ten.vercel.app/services",
    title: "Услуги digital-агентства полного цикла: реклама, SEO, сайты и аналитика",
    description:
      "Реклама, SEO, сайты, CRM, контент, репутация, маркетплейсы и аналитика в единой системе роста бизнеса.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Услуги маркетингового агентства Make All Perfect",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <AllServicesHeroSection />

      {/*
        КРИТИЧЕСКИ ВАЖНО:
        Этот блок НЕ является новой реализацией каталога услуг.
        Здесь подключается existing shared-компонент с главной страницы —
        тот самый тёмный блок 8 направлений с карточками ADS / SEO / WEB / MP / PR / CRM / SMM / ANL.
        CSS, сетку, активную синюю карточку ADS, pills, цены, CTA и hover-состояния не менять.
      */}
      <ServicesSection />

      <AllServicesDecisionSection />
      <HomeIndustriesSection />
      <HomeTechnologiesSection />
      <CasesSection />
      <HomeReviewsSection />
      <HomeAboutSection />
      <HomeBlogSection />
      <AllServicesFaqSection />
      <AllServicesSeoText />
      <FinalCtaSection />
    </main>
  );
}
