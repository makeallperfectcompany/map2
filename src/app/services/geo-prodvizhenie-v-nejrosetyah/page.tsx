import Script from "next/script";
import type { Metadata } from "next";
import GeoHero from "@/components/sections/GeoHero/GeoHero";
import HomeTechnologiesSection from "@/components/sections/HomeTechnologiesSection";
import HomeAdvantagesSection from "@/components/sections/HomeAdvantagesSection";
import GeoProcessSection from "@/components/sections/GeoProcessSection";
import AvitoStylePricingSection from "@/components/sections/AvitoStylePricingSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { geoServiceContent } from "@/content/services/geo-prodvizhenie-v-nejrosetyah";
import { geoTechnologies } from "@/content/services/geo-technologies";
import { geoAdvantages } from "@/content/services/geo-advantages";

export const metadata: Metadata = {
  title: geoServiceContent.metadata.title + " | Make All Perfect",
  description: geoServiceContent.metadata.description,
  alternates: {
    canonical: "https://map2-ten.vercel.app/services/geo-prodvizhenie-v-nejrosetyah",
  },
};

const canonical = "https://map2-ten.vercel.app/services/geo-prodvizhenie-v-nejrosetyah";

const { faq, process, finalCta } = geoServiceContent;

const pricingTiers = [
  {
    name: "Старт",
    subtitle: "Для первичного GEO-аудита и проверки гипотез",
    price: "от 50 000 ₽",
    budget: "Запросов: до 20 ключевых AI-запросов",
    features: [
      "GEO-аудит AI-видимости бренда",
      "Карта пробелов: где бренд отсутствует в ответах",
      "Анализ конкурентов в AI-выдаче",
      "Рекомендации по контенту и структуре",
      "Базовая оптимизация под AEO-форматы",
      "Отчёт с приоритетами",
    ],
  },
  {
    name: "Бизнес",
    subtitle: "Для системного GEO-продвижения и регулярного мониторинга",
    price: "от 80 000 ₽ / мес",
    budget: "Запросов: до 100 AI-запросов и тематик",
    features: [
      "Всё из тарифа Старт",
      "Полная GEO-стратегия продвижения",
      "Создание контента под AI-ответы",
      "Работа с внешними источниками и упоминаниями",
      "Entity SEO и усиление сущностей бренда",
      "Ежемесячный мониторинг AI-видимости",
      "Отчёт с аналитикой и рекомендациями",
    ],
  },
  {
    name: "Индивидуально",
    subtitle: "Для полного цикла GEO-трансформации бренда",
    price: "Рассчитывается индивидуально",
    budget: "Любое количество запросов и комплексный аудит",
    features: [
      "Всё из тарифа Бизнес",
      "Индивидуальная GEO-стратегия",
      "Глубокая реструктуризация контента и архитектуры",
      "Система репутационных сигналов и PR",
      "Персональный GEO-менеджер",
      "Сквозная аналитика по AI-трафику и обращениям",
      "Стратегия масштабирования на новые AI-платформы",
    ],
  },
];

const heroContent = {
  title: geoServiceContent.hero.title,
  description: geoServiceContent.hero.lead,
  primaryCta: geoServiceContent.hero.primaryCta,
  secondaryCta: geoServiceContent.hero.secondaryCta,
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "GEO-продвижение в нейросетях и AI-поиске",
      serviceType: "GEO-продвижение",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://map2-ten.vercel.app" },
      areaServed: "RU",
      description: geoServiceContent.metadata.description,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "RUB",
        lowPrice: "50000",
        offers: pricingTiers.map((tier, i) => ({
          "@type": "Offer",
          name: tier.name,
          price: "50000",
          priceCurrency: "RUB",
          position: i + 1,
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://map2-ten.vercel.app" },
        { "@type": "ListItem", position: 2, name: "Услуги", item: "https://map2-ten.vercel.app/services" },
        { "@type": "ListItem", position: 3, name: "GEO-продвижение", item: canonical },
      ],
    },
  ],
};

export default function GeoServicePage() {
  return (
    <main>
      <Script id="geo-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <GeoHero content={heroContent} />
      <HomeTechnologiesSection content={geoTechnologies} />
      <HomeAdvantagesSection content={geoAdvantages} />
      <GeoProcessSection
        title={process.title}
        text={process.steps[0].text}
        image="/images/home/advantages-visual.webp"
        items={process.steps}
      />
      <AvitoStylePricingSection
        eyebrow="ТАРИФЫ"
        title="Стоимость GEO-продвижения"
        description="GEO-продвижение начинается от 50 000 ₽ в месяц. Точную смету собираем после бесплатного аудита AI-видимости."
        tiers={pricingTiers}
        note="Не подходит тариф? Свяжитесь — подберём объём GEO-работ под ваш бренд, нишу и бюджет."
        cta="Получить индивидуальный расчёт"
      />
      <HomeIndustriesSection />
      <CasesSection />
      <HomeAboutSection />
      <HomeReviewsSection />
      <HomeBlogSection />
      <HomeFaqSection items={faq} />
      <FinalCtaSection />
    </main>
  );
}
