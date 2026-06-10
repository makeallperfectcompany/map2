import type { Metadata } from "next";
import { aeoServiceContent as content } from "@/content/services/aeo-prodvizhenie";
import { aeoTechnologies } from "@/content/services/aeo-technologies";
import { aeoAdvantages } from "@/content/services/aeo-advantages";

import AeoHero from "@/components/sections/AeoHero/AeoHero";
import AeoProcessSection from "@/components/sections/AeoProcessSection";
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

const canonical = "https://map2-ten.vercel.app/services/aeo-prodvizhenie";

export const metadata: Metadata = {
  title: "AEO-продвижение сайта под AI-поиск: ChatGPT, Алиса, Нейро",
  description:
    "Сделаем ваш бренд видимым в AI-поиске и нейроответах ChatGPT, Алисы и Яндекс Нейро. AEO-аудит, стратегия и внедрение под ключ. Бесплатная консультация. Цены от 50 000 ₽.",
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: "AEO-продвижение сайта под AI-поиск: ChatGPT, Алиса, Нейро | Make All Perfect",
    description:
      "Сделаем ваш бренд видимым в AI-поиске и нейроответах ChatGPT, Алисы и Яндекс Нейро. AEO-аудит, стратегия и внедрение под ключ. Бесплатная консультация. Цены от 50 000 ₽.",
    siteName: "Make All Perfect",
    locale: "ru_RU",
  },
  twitter: {
    title: "AEO-продвижение сайта под AI-поиск: ChatGPT, Алиса, Нейро | Make All Perfect",
    description:
      "Сделаем ваш бренд видимым в AI-поиске и нейроответах ChatGPT, Алисы и Яндекс Нейро. AEO-аудит, стратегия и внедрение под ключ. Бесплатная консультация. Цены от 50 000 ₽.",
    card: "summary_large_image",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://map2-ten.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://map2-ten.vercel.app/services" },
    { "@type": "ListItem", position: 3, name: "AEO-продвижение", item: canonical },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AEO-продвижение",
  serviceType: "AEO-продвижение",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://map2-ten.vercel.app",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "248",
      reviewCount: "248",
    },
  },
  areaServed: { "@type": "Country", name: "Россия" },
  description:
    "Оптимизация сайта, контента и структуры данных под AI-поиск, нейроответы и генеративную выдачу.",
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
  mainEntity: content.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function AeoServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        {/* Hero — светлый, как на главной */}
        <AeoHero content={content.hero} />

        {/* Технологии и инструменты AEO */}
        <HomeTechnologiesSection content={aeoTechnologies} />

        {/* Преимущества */}
        <HomeAdvantagesSection content={aeoAdvantages} />

        {/* Процесс работы — 2 колонки с визуалом */}
        <AeoProcessSection
          title={content.process.title}
          text="Прозрачный процесс в 6 шагов — от карты вопросов клиента до регулярного мониторинга AI-видимости. Разбираем спрос, строим answer-first структуру и доводим контент до попадания в нейроответы."
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
          title="Часто задаваемые вопросы об AEO-продвижении"
          items={content.faq}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
