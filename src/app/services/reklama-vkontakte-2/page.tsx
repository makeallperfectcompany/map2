import type { Metadata } from "next";
import { vkAdsContent } from "@/content/services/vkAds";
import VkAdsHero from "@/components/sections/VkAds/VkAdsHero";
import VkAdsScenarios from "@/components/sections/VkAds/VkAdsScenarios";
import VkAdsHowItWorks from "@/components/sections/VkAds/VkAdsHowItWorks";
import VkAdsFormats from "@/components/sections/VkAds/VkAdsFormats";
import VkAdsScope from "@/components/sections/VkAds/VkAdsScope";
import VkAdsProcess from "@/components/sections/VkAds/VkAdsProcess";
import VkAdsAnalytics from "@/components/sections/VkAds/VkAdsAnalytics";
import VkAdsPricing from "@/components/sections/VkAds/VkAdsPricing";
import VkAdsTransparency from "@/components/sections/VkAds/VkAdsTransparency";
import VkAdsSchema from "@/components/sections/VkAds/VkAdsSchema";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Реклама ВКонтакте под ключ — настройка и ведение VK Ads | Make All Perfect",
  description:
    "Настраиваем и ведём рекламу ВКонтакте в VK Ads: аудитории, креативы, лид-формы, ретаргетинг и аналитика обращений. Стоимость от 50 000 ₽/мес.",
  alternates: { canonical: "/services/reklama-vkontakte-2/" },
};

export default function ReklamaVkontaktePage() {
  return (
    <>
      <VkAdsSchema faq={vkAdsContent.faq} />

      <main>
        <VkAdsHero content={vkAdsContent.hero} />
        <VkAdsScenarios content={vkAdsContent.scenarios} />
        <VkAdsHowItWorks content={vkAdsContent.howItWorks} />
        <VkAdsFormats content={vkAdsContent.formats} />
        <VkAdsScope content={vkAdsContent.scope} />
        <VkAdsProcess content={vkAdsContent.process} />
        <VkAdsAnalytics content={vkAdsContent.analytics} />

        <HomeIndustriesSection />

        <VkAdsPricing content={vkAdsContent.pricing} />

        <CasesSection />

        <VkAdsTransparency content={vkAdsContent.transparency} />

        <HomeReviewsSection />

        <HomeFaqSection
          items={vkAdsContent.faq.items}
          title={vkAdsContent.faq.title}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
