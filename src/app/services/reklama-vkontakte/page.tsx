import type { Metadata } from "next";

import { vkAdsContent } from "@/content/services/vkAds";
import VkAdsHero from "@/components/sections/VkAds/VkAdsHero";
import VkAdsScenarios from "@/components/sections/VkAds/VkAdsScenarios";
import VkAdsHowItWorks from "@/components/sections/VkAds/VkAdsHowItWorks";
import VkAdsFormats from "@/components/sections/VkAds/VkAdsFormats";
import VkAdsScope from "@/components/sections/VkAds/VkAdsScope";
import VkAdsAnalytics from "@/components/sections/VkAds/VkAdsAnalytics";
import VkAdsTransparency from "@/components/sections/VkAds/VkAdsTransparency";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Реклама ВКонтакте под ключ — настройка и ведение VK Ads | Make All Perfect",
  description:
    "Настраиваем и ведём рекламу ВКонтакте через VK Ads: аудитории, креативы, лид-формы, ретаргетинг и аналитика заявок. Обсудите запуск с Make All Perfect.",
  alternates: {
    canonical: "/services/reklama-vkontakte",
  },
};

export default function VkAdsServicePage() {
  return (
    <main>
      <VkAdsHero content={vkAdsContent.hero} />
      <VkAdsScenarios content={vkAdsContent.scenarios} />
      <VkAdsHowItWorks content={vkAdsContent.howItWorks} />
      <VkAdsFormats content={vkAdsContent.formats} />
      <VkAdsScope content={vkAdsContent.scope} />
      <VkAdsAnalytics content={vkAdsContent.analytics} />
      <HomeIndustriesSection />
      <CasesSection />
      <VkAdsTransparency content={vkAdsContent.transparency} />
      <HomeReviewsSection />
      <HomeFaqSection />
      <FinalCtaSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: vkAdsContent.sharedSections.faq.items.map((item) => ({
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
