import type { Metadata } from "next";
import { targetedAdvertisingContent as content } from "@/content/services/targetedAdvertising";
import { targetedAdsServiceTechnologies } from "@/content/services/targeted-ads-technologies";
import { targetedAdsAdvantages } from "@/content/services/targeted-ads-advantages";

import TargetedHero from "@/components/sections/TargetedHero/TargetedHero";
import TargetedAdsProcessSection from "@/components/sections/TargetedAdsProcessSection";
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
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: "/services/targetirovannaya-reklama",
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
      name: "Таргетированная реклама",
      item: "https://makeallperfect.ru/services/targetirovannaya-reklama",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Настройка и ведение таргетированной рекламы",
  serviceType: "Таргетированная реклама",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
  },
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  description: content.metadata.description,
  offers: content.pricing.tiers.map((tier, index) => ({
    "@type": "Offer",
    name: tier.name,
    description: `${tier.subtitle}. ${tier.price}`,
    price: tier.price.replace(/[^0-9]/g, ""),
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

export default function TargetirovannayaReklamaPage() {
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
        {/* Hero — светлый, как на главной */}
        <TargetedHero content={content.hero} />

        {/* Объём услуг = Технологии */}
        <HomeTechnologiesSection content={targetedAdsServiceTechnologies} />

        {/* Преимущества */}
        <HomeAdvantagesSection content={targetedAdsAdvantages} />

        {/* Процесс работы — 2 колонки с визуалом */}
        <TargetedAdsProcessSection
          title={content.process.title}
          text="Прозрачный процесс в 6 шагов — от диагностики задачи до масштабирования рабочих связок. Определяем цели, разрабатываем стратегию, запускаем кампании, оптимизируем и развиваем результат."
          image="/images/home/advantages-visual.webp"
          items={content.process.steps.map(s => [s.title, s.text] as const)}
        />

        {/* Отрасли — alias с главной */}
        <HomeIndustriesSection />

        {/* Тарифы */}
        <AvitoStylePricingSection
          eyebrow={content.pricing.eyebrow}
          title={content.pricing.title}
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
          title={content.faq.title}
          items={content.faq.items}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
