import type { Metadata } from "next";
import { vkAdsContent as content } from "@/content/services/vkAds";
import {
  VkAdsHero,
  VkAdsServicesSection,
  VkAdsAdvantagesSection,
  VkAdsProcessSection,
  VkAdsOpportunitiesSection,
  VkAdsPricingSection,
  VkAdsFaqSection,
} from "@/components/sections/VkAdsUniqueSections";
import CasesSection from "@/components/sections/CasesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Реклама ВКонтакте под ключ — настройка и ведение VK Ads | Make All Perfect",
  description:
    "Настраиваем и ведём рекламу ВКонтакте в VK Ads: аудитории, креативы, лид-формы, ретаргетинг и аналитика обращений. Стоимость от 50 000 ₽/мес.",
  alternates: {
    canonical: "/services/reklama-vkontakte",
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
      name: "Реклама ВКонтакте",
      item: "https://makeallperfect.ru/services/reklama-vkontakte",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Настройка рекламы ВКонтакте под ключ",
  serviceType: "Реклама VK",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
  },
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  description:
    "Настраиваем и ведём рекламу ВКонтакте в VK Ads: аудитории, креативы, лид-формы, ретаргетинг и аналитика обращений. Стоимость от 50 000 ₽/мес.",
  offers: content.pricing.tiers?.map((tier, index) => ({
    "@type": "Offer",
    name: tier.name,
    description: `${tier.subtitle || ""}. ${tier.price}`,
    price: String(tier.price).replace(/[^0-9]/g, "") || "50000",
    priceCurrency: "RUB",
    position: index + 1,
  })),
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

export default function VkAdsPage() {
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
        <VkAdsHero />
        <VkAdsServicesSection />
        <VkAdsAdvantagesSection />
        <VkAdsProcessSection />
        <VkAdsOpportunitiesSection />
        <VkAdsPricingSection />

        <CasesSection />
        <HomeReviewsSection />
        <HomeIndustriesSection />

        <VkAdsFaqSection />
      </main>

      <FinalCtaSection />
    </>
  );
}
