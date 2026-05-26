import type { Metadata } from "next";

import { vkAdsContent } from "@/content/services/vkAds";
import VkAdsHero from "@/components/sections/VkAds/VkAdsHero";
import VkAdsScenarios from "@/components/sections/VkAds/VkAdsScenarios";
import VkAdsHowItWorks from "@/components/sections/VkAds/VkAdsHowItWorks";
import VkAdsFormats from "@/components/sections/VkAds/VkAdsFormats";
import VkAdsScope from "@/components/sections/VkAds/VkAdsScope";
import VkAdsAnalytics from "@/components/sections/VkAds/VkAdsAnalytics";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import VkAdsPricing from "@/components/sections/VkAds/VkAdsPricing";
import CasesSection from "@/components/sections/CasesSection";
import VkAdsTransparency from "@/components/sections/VkAds/VkAdsTransparency";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";

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
      <VkAdsPricing
        title="Стоимость настройки и ведения рекламы ВКонтакте"
        text="Цена зависит от объёма задач, количества направлений и требований к аналитике. Для старта подходит тариф «Старт» — от 30 000 ₽."
        note="Рекламный бюджет оплачивается отдельно напрямую в рекламный кабинет VK. Стоимость работы агентства фиксируется после согласования объёма."
        plans={[
          {
            name: "Старт",
            price: "от 30 000 ₽",
            description: "1–2 направления, базовые аудитории и креативы, подключение аналитики.",
            features: [
              "Анализ аудитории и конкурентов",
              "Формирование сегментов",
              "3–5 креативных гипотез",
              "Подключение пикселя и целей",
              "Еженедельная оптимизация",
              "Отчётность по заявкам",
            ],
            cta: "Выбрать Старт",
          },
          {
            name: "Бизнес",
            price: "от 55 000 ₽",
            description: "3–4 направления, расширенные аудитории, A/B-тесты и ретаргетинг.",
            features: [
              "Всё из тарифа «Старт»",
              "До 4 рекламных направлений",
              "A/B-тестирование гипотез",
              "Ретаргетинг и look-alike",
              "Еженедельная аналитика",
              "Персональный менеджер",
            ],
            cta: "Выбрать Бизнес",
            featured: true,
          },
          {
            name: "Pro",
            price: "от 90 000 ₽",
            description: "Полный цикл: стратегия, контент, все форматы, кастомная аналитика.",
            features: [
              "Всё из тарифа «Бизнес»",
              "Стратегия VK-присутствия",
              "Все форматы VK Ads",
              "Контент-план сообщества",
              "Кастомные дашборды",
              "Приоритетная поддержка",
            ],
            cta: "Выбрать Pro",
          },
        ]}
      />
      <CasesSection />
      <VkAdsTransparency content={vkAdsContent.transparency} />
      <HomeReviewsSection />
      <HomeFaqSection />
      <FinalCtaSection />
      <HomeBlogSection />
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
