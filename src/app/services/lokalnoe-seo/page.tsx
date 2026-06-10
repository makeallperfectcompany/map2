import type { Metadata } from "next";
import { localSeoContent as content } from "@/content/services/localSeo";
import { lokalnoeSeoTechnologies } from "@/content/services/lokalnoe-seo-technologies";
import { lokalnoeSeoAdvantages } from "@/content/services/lokalnoe-seo-advantages";

import LokalnoeSeoHero from "@/components/sections/LokalnoeSeoHero/LokalnoeSeoHero";
import LokalnoeSeoProcessSection from "@/components/sections/LokalnoeSeoProcessSection";
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

const canonical = "https://makeallperfect.ru/services/lokalnoe-seo";

export const metadata: Metadata = {
  ...content.metadata,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: content.metadata.title + " | Make All Perfect",
    description: content.metadata.description,
    siteName: "Make All Perfect",
    locale: "ru_RU",
  },
  twitter: {
    title: content.metadata.title + " | Make All Perfect",
    description: content.metadata.description,
    card: "summary_large_image",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
    { "@type": "ListItem", position: 3, name: "Локальное SEO", item: canonical },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Локальное SEO",
  serviceType: "Локальное SEO",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "248", reviewCount: "248" },
  },
  areaServed: { "@type": "Country", name: "Россия" },
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
  mainEntity: content.faq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function LokalnoeSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        {/* Hero — светлый, как на главной */}
        <LokalnoeSeoHero content={content.hero} />

        {/* Объём услуг = Технологии */}
        <HomeTechnologiesSection content={lokalnoeSeoTechnologies} />

        {/* Преимущества */}
        <HomeAdvantagesSection content={lokalnoeSeoAdvantages} />

        {/* Процесс работы — 2 колонки с визуалом */}
        <LokalnoeSeoProcessSection
          title={content.process.title}
          text="Прозрачный процесс в 6 шагов — от диагностики текущей видимости до регулярного контроля и развития обращений. Разбираем локальный спрос, строим структуру и доводим клиента до заявки."
          image="/images/home/advantages-visual.webp"
          items={content.process.steps}
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
          title="Часто задаваемые вопросы о локальном SEO"
          items={content.faq.map(([question, answer]) => ({ question, answer }))}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
