import type { Metadata } from "next";
import { vkAdsContent } from "@/content/services/vkAds";
import {
  VkAdsAdvantagesSection,
  VkAdsAudiencesSection,
  VkAdsFormatsSection,
  VkAdsHeroSection,
  VkAdsInstrumentSection,
  VkAdsPricingSection,
  VkAdsPrinciplesSection,
  VkAdsProcessSection,
  VkAdsServiceSection,
} from "@/components/sections/VkAdsUniqueSections";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: vkAdsContent.metadata.title,
  description: vkAdsContent.metadata.description,
  alternates: {
    canonical: "/services/reklama-vkontakte",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Настройка и ведение рекламы ВКонтакте через VK Ads",
  serviceType: "Таргетированная реклама ВКонтакте",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
  },
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  description: vkAdsContent.metadata.description,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: vkAdsContent.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ReklamaVkontaktePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <VkAdsHeroSection />
        <VkAdsInstrumentSection />
        <VkAdsFormatsSection />
        <VkAdsServiceSection />
        <VkAdsProcessSection />
        <VkAdsAdvantagesSection />
        <VkAdsPricingSection />

        <CasesSection />
        <HomeReviewsSection />
        <VkAdsAudiencesSection />

        <HomeFaqSection />
        <VkAdsPrinciplesSection />

        <FinalCtaSection />
      </main>
    </>
  );
}
