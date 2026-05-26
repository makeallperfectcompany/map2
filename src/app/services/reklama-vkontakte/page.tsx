import type { Metadata } from "next";
import { vkAdsContent as content } from "@/content/services/vkAds";
import {
  VkAdsApproach,
  VkAdsHero,
  VkAdsHowItWorks,
  VkAdsFormats,
  VkAdsProcess,
  VkAdsService,
} from "@/components/sections/VkAdsUniqueSections";
import CasesSection from "@/components/sections/CasesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import VkAdsFaqSection from "@/components/sections/VkAdsFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: "/services/reklama-vkontakte",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Настройка и ведение рекламы ВКонтакте",
  serviceType: "Реклама ВКонтакте",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
  },
  areaServed: { "@type": "Country", name: "Россия" },
  description:
    "Настройка и ведение VK Рекламы: лента, клипы, лид-формы, товарная реклама, ретаргетинг — под задачи бизнеса.",
};

export default function VkAdsPage() {
  return (
    <main>
      <VkAdsHero />
      <VkAdsHowItWorks />
      <VkAdsFormats />
      <VkAdsService />
      <VkAdsProcess />
      <VkAdsApproach />
      <CasesSection />
      <HomeIndustriesSection />
      <HomeReviewsSection />
      <VkAdsFaqSection />
      <FinalCtaSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </main>
  );
}
