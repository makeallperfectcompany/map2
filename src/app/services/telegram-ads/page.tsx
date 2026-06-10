import type { Metadata } from "next";
import { telegramAdsContent as content } from "@/content/services/telegramAds";
import { telegramAdsServiceTechnologies } from "@/content/services/telegram-ads-technologies";
import { telegramAdsAdvantages } from "@/content/services/telegram-ads-advantages";
import TelegramAdsHero from "@/components/sections/TelegramAdsHero/TelegramAdsHero";
import TelegramAdsProcessSection from "@/components/sections/TelegramAdsProcessSection";
import AvitoStylePricingSection from "@/components/sections/AvitoStylePricingSection";
import HomeTechnologiesSection from "@/components/sections/HomeTechnologiesSection";
import HomeAdvantagesSection from "@/components/sections/HomeAdvantagesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "/services/telegram-ads",
  },
  openGraph: {
    type: "website",
    url: "https://makeallperfect.ru/services/telegram-ads",
    title: content.meta.title,
    description: content.meta.description,
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
  offers: content.pricing.plans.map((plan, index) => ({
    "@type": "Offer",
    name: plan.name,
    description: `${plan.target}. ${plan.price}`,
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
        {/* Hero — светлый, с gradient overlay */}
        <TelegramAdsHero content={content.hero} />

        {/* Объём услуг = Технологии */}
        <HomeTechnologiesSection content={telegramAdsServiceTechnologies} />

        {/* Преимущества */}
        <HomeAdvantagesSection content={telegramAdsAdvantages} />

        {/* Процесс работы — 2 колонки с визуалом */}
        <TelegramAdsProcessSection
          title={content.process.h2}
          text="Прозрачный процесс в 5 шагов — от заявки до первых клиентов. Созваниваемся, разрабатываем стратегию, запускаем кампании, оптимизируем и масштабируем результат."
          image="/images/home/advantages-visual.webp"
          items={content.process.steps.map((s) => [s.title, s.description] as const)}
        />

        {/* Отрасли — alias с главной */}
        <HomeIndustriesSection />

        {/* Тарифы — alias с Avito */}
        <AvitoStylePricingSection
          eyebrow="Стоимость"
          title={content.pricing.h2}
          description={content.pricing.description}
          tiers={content.pricing.tiers}
          note={content.pricing.note}
          cta={content.pricing.cta}
        />

        {/* Кейсы, О нас, Отзывы, Блог */}
        <CasesSection />
        <HomeAboutSection />
        <HomeReviewsSection />
        <HomeBlogSection />

        {/* FAQ */}
        <HomeFaqSection
          title={content.faq.h2}
          items={content.faq.items}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
