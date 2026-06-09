import type { Metadata } from "next";
import { marketplaceInternalAdsContent as content } from "@/content/services/marketplace-internal-ads";
import MarketplaceInternalAdsHeroSection from "@/components/sections/MarketplaceInternalAdsHeroSection";
import MarketplaceInternalAdsProblemsSection from "@/components/sections/MarketplaceInternalAdsProblemsSection";
import MarketplaceInternalAdsScopeSection from "@/components/sections/MarketplaceInternalAdsScopeSection";
import MarketplaceInternalAdsPlatformsSection from "@/components/sections/MarketplaceInternalAdsPlatformsSection";
import MarketplaceInternalAdsEconomySection from "@/components/sections/MarketplaceInternalAdsEconomySection";
import MarketplaceInternalAdsProcessSection from "@/components/sections/MarketplaceInternalAdsProcessSection";
import MarketplaceInternalAdsPricingSection from "@/components/sections/MarketplaceInternalAdsPricingSection";
import MarketplaceInternalAdsIndustriesSection from "@/components/sections/MarketplaceInternalAdsIndustriesSection";
import MarketplaceInternalAdsTechnologiesSection from "@/components/sections/MarketplaceInternalAdsTechnologiesSection";
import MarketplaceInternalAdsFaqSection from "@/components/sections/MarketplaceInternalAdsFaqSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Внутренняя реклама на маркетплейсах под ключ",
    description: "Настройка и ведение внутренней рекламы на Wildberries, Ozon и Яндекс Маркет: аудит кабинета, управление ставками, контроль ДРР, оптимизация карточек.",
    provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
    areaServed: "RU",
    offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: 50000, priceCurrency: "RUB" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
      { "@type": "ListItem", position: 3, name: "Внутренняя реклама на маркетплейсах", item: "https://makeallperfect.ru/services/marketplace-internal-ads" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: "https://makeallperfect.ru/services/marketplace-internal-ads",
  },
  openGraph: {
    title: content.metadata.title,
    description: content.metadata.description,
    url: "https://makeallperfect.ru/services/marketplace-internal-ads",
    siteName: "Make All Perfect",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    title: content.metadata.title,
    description: content.metadata.description,
    card: "summary_large_image",
  },
};

export default function MarketplaceInternalAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main>
        <MarketplaceInternalAdsHeroSection content={content.hero} />
        <MarketplaceInternalAdsProblemsSection content={content.problems} />
        <MarketplaceInternalAdsScopeSection content={content.scope} />
        <MarketplaceInternalAdsPlatformsSection content={content.platforms} />
        <MarketplaceInternalAdsEconomySection content={content.economy} />
        <MarketplaceInternalAdsProcessSection content={content.process} />
        <MarketplaceInternalAdsPricingSection content={content.pricing} />
        <MarketplaceInternalAdsIndustriesSection content={content.industries} />
        <MarketplaceInternalAdsTechnologiesSection content={content.technologies} />
        <ServiceSharedSections finalCta={{ title: content.finalCta.title, description: content.finalCta.text }} />
        <MarketplaceInternalAdsFaqSection items={content.faq} />
      </main>
    </>
  );
}
