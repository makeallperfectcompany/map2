import type { Metadata } from "next";
import { googleAdsContent as content } from "@/content/services/googleAds";
import { googleAdsTechnologies } from "@/content/services/google-ads-technologies";
import { googleAdsAdvantages } from "@/content/services/google-ads-advantages";

import GoogleAdsHeroSec from "@/components/sections/GoogleAdsHeroSec/GoogleAdsHeroSec";
import GoogleAdsProcessSection from "@/components/sections/GoogleAdsProcessSection";
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

const canonical = "https://makeallperfect.ru/services/google-ads";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: `${content.metadata.title} | Make All Perfect`,
    description: content.metadata.description,
    siteName: "Make All Perfect",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: `${content.metadata.title} | Make All Perfect`,
    description: content.metadata.description,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
    { "@type": "ListItem", position: 3, name: "Google Ads", item: canonical },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Настройка и ведение рекламы в Google Ads",
  serviceType: "Google Ads",
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
    price: tier.price.replace(/[^0-9]/g, "") || "0",
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

export default function GoogleAdsPage() {
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
        <GoogleAdsHeroSec content={content.hero} />

        {/* Объём услуг = Технологии */}
        <HomeTechnologiesSection content={googleAdsTechnologies} />

        {/* Преимущества */}
        <HomeAdvantagesSection content={googleAdsAdvantages} />

        {/* Процесс работы — 2 колонки с визуалом */}
        <GoogleAdsProcessSection
          title={content.process.title}
          text="Прозрачный процесс в 5 шагов — от анализа рынка до масштабирования рабочих кампаний. Определяем стратегию, собираем семантику, запускаем и оптимизируем результат."
          image="/images/home/advantages-visual.webp"
          items={content.process.steps.map((s) => [s.title, s.text] as const)}
        />

        {/* Тарифы */}
        <AvitoStylePricingSection
          eyebrow={content.pricing.eyebrow}
          title={content.pricing.title}
          description={content.pricing.description}
          tiers={content.pricing.tiers}
          note={content.pricing.note}
          cta={content.pricing.cta}
        />

        {/* Отрасли — alias с главной */}
        <HomeIndustriesSection />

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
