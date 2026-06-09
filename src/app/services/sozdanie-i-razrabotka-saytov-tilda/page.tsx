import type { Metadata } from "next";
import TildaHeroSection from "@/components/sections/TildaHeroSection";
import TildaFormatsSection from "@/components/sections/TildaFormatsSection";
import TildaFitSection from "@/components/sections/TildaFitSection";
import TildaScopeSection from "@/components/sections/TildaScopeSection";
import TildaProcessSection from "@/components/sections/TildaProcessSection";
import TildaPricingSection from "@/components/sections/TildaPricingSection";
import TildaGrowthReadinessSection from "@/components/sections/TildaGrowthReadinessSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { tildaService } from "@/content/services/tilda";

export const metadata: Metadata = {
  title: "Разработка сайта на Tilda под ключ — от 50 000 ₽ | Make All Perfect",
  description: "Создание сайта на Tilda под ключ: лендинги, сайты компаний, каталоги и промо-страницы. Структура, дизайн, сборка и подготовка к продвижению. От 50 000 ₽.",
  alternates: { canonical: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-saytov-tilda" },
  openGraph: {
    title: "Разработка сайта на Tilda под ключ — от 50 000 ₽ | Make All Perfect",
    description: "Создание сайта на Tilda под ключ: лендинги, сайты компаний, каталоги и промо-страницы. Структура, дизайн, сборка и подготовка к продвижению. От 50 000 ₽.",
    url: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-saytov-tilda",
    siteName: "Make All Perfect",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    title: "Разработка сайта на Tilda под ключ — от 50 000 ₽ | Make All Perfect",
    description: "Создание сайта на Tilda под ключ: лендинги, сайты компаний, каталоги и промо-страницы. Структура, дизайн, сборка и подготовка к продвижению. От 50 000 ₽.",
    card: "summary_large_image",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Разработка сайта на Tilda под ключ",
  description: "Создание сайта на Tilda под ключ: лендинги, сайты компаний, каталоги и промо-страницы. Структура, дизайн, сборка и подготовка к продвижению.",
  provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
  areaServed: "RU",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: 50000,
      priceCurrency: "RUB",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: tildaService.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru/" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
    { "@type": "ListItem", position: 3, name: "Разработка сайта на Tilda", item: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-saytov-tilda" },
  ],
};

export default function TildaServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        <TildaHeroSection />
        <TildaFormatsSection />
        <TildaFitSection />
        <TildaScopeSection />
        <TildaProcessSection />
        <TildaPricingSection />
        <TildaGrowthReadinessSection />

        <ServiceSharedSections
          technologiesContent={tildaService.technologies}
          faq={{
            title: "Вопросы о разработке сайта на Tilda",
            description: "Стоимость, форматы сайтов, SEO, магазин, сроки, тариф платформы, наполнение контентом и управление после запуска.",
            items: tildaService.faq,
          }}
        />
      </main>
    </>
  );
}
