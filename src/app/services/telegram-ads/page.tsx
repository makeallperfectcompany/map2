import type { Metadata } from "next";
import { telegramAdsContent as content } from "@/content/services/telegramAds";
import {
  TelegramAdsHero,
  TelegramAdsServicesSection,
  TelegramAdsAdvantagesSection,
  TelegramAdsProcessSection,
  TelegramAdsOpportunitiesSection,
  TelegramAdsPricingSection,
  TelegramAdsFaqSection,
} from "@/components/sections/TelegramAdsUniqueSections";
import CasesSection from "@/components/sections/CasesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "/services/telegram-ads",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Telegram Ads",
      item: "https://makeallperfect.ru/services/telegram-ads",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Реклама в Telegram Ads под ключ",
  serviceType: "Telegram Ads",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
  },
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  description: content.meta.description,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function TelegramAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <TelegramAdsHero />
        <TelegramAdsServicesSection />
        <TelegramAdsAdvantagesSection />
        <TelegramAdsProcessSection />
        <TelegramAdsOpportunitiesSection />
        <TelegramAdsPricingSection />

        <CasesSection />
        <HomeReviewsSection />
        <HomeIndustriesSection />

        <TelegramAdsFaqSection />
      </main>

      <FinalCtaSection />
    </>
  );
}
