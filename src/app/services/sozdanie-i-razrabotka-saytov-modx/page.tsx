import type { Metadata } from "next";
import { modxDevelopment } from "@/content/services/modx-development";
import {
  ModxHeroSection,
  ModxFitSection,
  ModxFormatsSection,
  ModxFoundationSection,
  ModxProcessSection,
  ModxPricingSection,
  ModxExistingSiteSection,
} from "@/components/sections/ModxUniqueSections";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";

export const metadata: Metadata = {
  title: modxDevelopment.metadata.title,
  description: modxDevelopment.metadata.description,
  alternates: { canonical: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-saytov-modx" },
  openGraph: {
    title: "Разработка сайтов на MODX под ключ — от 50 000 ₽",
    description: "Создаём сайты на MODX Revolution: индивидуальный дизайн, удобное управление, интеграции и техническая основа для SEO и роста заявок.",
    url: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-saytov-modx",
    siteName: "Make All Perfect",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    title: "Разработка сайтов на MODX под ключ — от 50 000 ₽",
    description: "Создаём сайты на MODX Revolution: индивидуальный дизайн, удобное управление, интеграции и техническая основа для SEO и роста заявок.",
    card: "summary_large_image",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Разработка сайтов на MODX",
    serviceType: "Разработка сайтов на MODX Revolution",
    provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
    areaServed: "Россия",
    offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: 50000, priceCurrency: "RUB" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru/" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
      { "@type": "ListItem", position: 3, name: "Разработка сайтов на MODX", item: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-saytov-modx" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: modxDevelopment.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function ModxDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <main>
        <ModxHeroSection />
        <ModxFitSection />
        <ModxFormatsSection />
        <ModxFoundationSection />
        <ModxProcessSection />
        <ModxPricingSection />
        <ModxExistingSiteSection />

        <ServiceSharedSections
          technologiesContent={modxDevelopment.technologies}
          faq={{ title: modxDevelopment.faq.title, items: modxDevelopment.faq.items }}
          finalCta={{ title: modxDevelopment.finalCta.title, description: modxDevelopment.finalCta.description }}
        />
      </main>
    </>
  );
}
