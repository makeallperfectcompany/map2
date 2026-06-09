import type { Metadata } from "next";
import { Fragment } from "react";
import SermHeroSection from "@/components/sections/SermHeroSection";
import SermReputationRiskSection from "@/components/sections/SermReputationRiskSection";
import SermDefinitionSection from "@/components/sections/SermDefinitionSection";
import SermScopeSection from "@/components/sections/SermScopeSection";
import SermProcessSection from "@/components/sections/SermProcessSection";
import SermPricingSection from "@/components/sections/SermPricingSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { sermTechnologies } from "@/content/services/serm-technologies";
import { sermFaq } from "@/content/services/serm-faq";
import { sermContent } from "@/content/services/serm";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SERM — управление репутацией в поиске",
    description: "Анализ поисковой выдачи, стратегия, контентное усиление и мониторинг репутации компании в Яндексе и Google. Стоимость от 50 000 ₽.",
    provider: { "@type": "Organization", name: "Make All Perfect" },
    offers: { "@type": "Offer", priceCurrency: "RUB", price: "50000" },
    areaServed: "RU",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
      { "@type": "ListItem", position: 3, name: "SERM — управление репутацией в поиске", item: "https://makeallperfect.ru/services/serm" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sermFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer.replace(/["""]/g, '"').replace(/['']/g, "'") },
    })),
  },
];

export const metadata: Metadata = {
  title: "SERM: управление репутацией в поиске от 50 000 ₽ | Make All Perfect",
  description: "Управление репутацией компании в поисковой выдаче Яндекса и Google. SERM: аудит, стратегия, контент, мониторинг. Стоимость от 50 000 ₽. Бесплатная консультация.",
  alternates: { canonical: "https://makeallperfect.ru/services/serm" },
};

export default function SermPage() {
  return (
    <Fragment>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <main>
        <SermHeroSection />
        <SermReputationRiskSection />
        <SermDefinitionSection />
        <SermScopeSection />
        <SermProcessSection />
        <SermPricingSection />
        <ServiceSharedSections technologiesContent={sermTechnologies} faq={sermFaq} />
      </main>
    </Fragment>
  );
}
