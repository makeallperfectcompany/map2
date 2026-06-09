import type { Metadata } from "next";
import { localSeoContent as content } from "@/content/services/localSeo";
import { LocalSeoHeroSection } from "@/components/sections/LocalSeoHeroSection";
import { LocalSeoDifferenceSection } from "@/components/sections/LocalSeoDifferenceSection";
import { LocalSeoScopeSection } from "@/components/sections/LocalSeoScopeSection";
import { LocalSeoAudienceSection } from "@/components/sections/LocalSeoAudienceSection";
import { LocalSeoProcessSection } from "@/components/sections/LocalSeoProcessSection";
import { LocalSeoResultsSection } from "@/components/sections/LocalSeoResultsSection";
import { LocalSeoPricingSection } from "@/components/sections/LocalSeoPricingSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";

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

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Локальное SEO",
      serviceType: "Локальное SEO",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "248", reviewCount: "248" } },
      areaServed: "RU",
      description: content.metadata.description,
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: content.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
        { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
        { "@type": "ListItem", position: 3, name: "Локальное SEO", item: canonical },
      ],
    },
  ],
};

const technologiesContent = {
  label: "Технологии",
  title: "Технологии и инструменты локального SEO",
  description: "Используем комплекс инструментов: от геоаналитики и карт до структуры региональных страниц, единых NAP-данных и аналитики заявок.",
  stats: [
    { value: "GEO", label: "геоаналитика", text: "Спрос и конкуренты по городам" },
    { value: "MAPS", label: "карты и карточки", text: "Профили, категории, адреса" },
    { value: "DATA", label: "аналитика заявок", text: "Звонки, формы, маршруты" },
  ],
  cards: content.technologies.map(([code, title, text]) => ({
    eyebrow: code === "GEO" ? "ГЕОАНАЛИТИКА" : code === "MAPS" ? "КАРТЫ" : code === "NAP" ? "ДАННЫЕ" : code === "STRUCT" ? "СТРУКТУРА" : code === "DATA" ? "АНАЛИТИКА" : "РОСТ",
    title,
    muted: code === "GEO" ? "городов" : code === "MAPS" ? "карточек" : code === "NAP" ? "адресов" : code === "STRUCT" ? "регионов" : code === "DATA" ? "обращений" : "системы",
    code,
    text,
    tags: [code === "GEO" ? "Search" : code === "MAPS" ? "2GIS/Яндекс" : code === "NAP" ? "Справочники" : code === "STRUCT" ? "Посадочные" : code === "DATA" ? "Метрика" : "SEO", "Локально"],
    accent: code === "GEO",
  })),
};

const faqSection = {
  label: "FAQ",
  title: "Частые вопросы о локальном SEO",
  description: "Ответили на основные вопросы: чем отличается от обычного SEO, когда ждать результатов, как продвигать филиалы и что важнее — сайт или карточки.",
  items: content.faq.map(([question, answer]) => ({ question, answer })),
};

export default function LokalnoeSeoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocalSeoHeroSection />
      <LocalSeoDifferenceSection />
      <LocalSeoScopeSection />
      <LocalSeoAudienceSection />
      <LocalSeoProcessSection />
      <LocalSeoResultsSection />
      <LocalSeoPricingSection />

      <ServiceSharedSections
        technologiesContent={technologiesContent}
        faq={{ label: faqSection.label, title: faqSection.title, description: faqSection.description, items: faqSection.items }}
        finalCta={{ title: content.finalCta.title, description: content.finalCta.text, label: content.finalCta.cta }}
      />
    </main>
  );
}
