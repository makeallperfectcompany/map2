import type { Metadata } from "next";
import { yandexDirectContent as content } from "@/content/services/yandex-direct";
import { yandexDirectServiceTechnologies } from "@/content/services/yandex-direct-technologies";
import { yandexDirectAdvantages } from "@/content/services/yandex-direct-advantages";
import YandexDirectHero from "@/components/sections/YandexDirectHero/YandexDirectHero";
import YandexDirectProcessSection from "@/components/sections/YandexDirectProcessSection";
import AvitoPricingSection from "@/components/sections/AvitoPricingSection";
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
  title: "Настройка и ведение Яндекс Директ под заявки — Make All Perfect",
  description:
    "Запускаем и оптимизируем кампании в Яндекс Директ — от анализа спроса до отчётности по заявкам. С 2017 года, 400+ проектов, стоимость от 50 000 ₽.",
  alternates: {
    canonical: "/services/yandex-direct",
  },
  openGraph: {
    type: "website",
    url: "https://makeallperfect.ru/services/yandex-direct",
    title: "Настройка и ведение Яндекс Директ под заявки — Make All Perfect",
    description:
      "Запускаем и оптимизируем кампании в Яндекс Директ — от анализа спроса до отчётности по заявкам. С 2017 года, 400+ проектов, стоимость от 50 000 ₽.",
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
      name: "Яндекс Директ",
      item: "https://makeallperfect.ru/services/yandex-direct",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Настройка и ведение Яндекс Директ под заявки",
  serviceType: "Яндекс Директ",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
  },
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  description:
    "Запускаем и оптимизируем кампании в Яндекс Директ — от анализа спроса до отчётности по заявкам.",
  offers: content.pricing.cards.map((card, index) => ({
    "@type": "Offer",
    name: card.title,
    description: `${card.text}. ${card.price}`,
    position: index + 1,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function YandexDirectPage() {
  const faqItems = content.faq.map(([question, answer]) => ({ question, answer }));

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
        {/* Hero — светлый, с trust bar */}
        <YandexDirectHero content={content.hero} />

        {/* Объём услуг = Технологии */}
        <HomeTechnologiesSection content={yandexDirectServiceTechnologies} />

        {/* Преимущества */}
        <HomeAdvantagesSection content={yandexDirectAdvantages} />

        {/* Процесс работы — 2 колонки с визуалом */}
        <YandexDirectProcessSection
          title={content.process.title}
          text={content.process.text}
          image="/images/services/yandex-direct/flow.webp"
          items={content.process.steps}
        />

        {/* Отрасли — alias с главной */}
        <HomeIndustriesSection />

        {/* Тарифы */}
        <AvitoPricingSection
          title={content.pricing.title}
          text="Подбираем формат под вашу задачу: запуск с нуля, регулярное ведение или аудит действующих кампаний."
          items={content.pricing.cards.map((card) => [card.title, card.text, card.price] as [string, string, string])}
        />

        {/* Кейсы, О нас, Отзывы, Блог */}
        <CasesSection />
        <HomeAboutSection />
        <HomeReviewsSection />
        <HomeBlogSection />

        {/* FAQ */}
        <HomeFaqSection
          title="Частые вопросы о Яндекс Директ"
          items={faqItems}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
