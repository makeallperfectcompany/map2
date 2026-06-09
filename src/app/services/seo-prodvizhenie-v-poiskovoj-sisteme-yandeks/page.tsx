import type { Metadata } from "next";
import { seoYandexService as content } from "@/content/services/seo-yandex";
import SeoYandexHeroSection from "@/components/sections/SeoYandexHeroSection";
import SeoYandexStrategySection from "@/components/sections/SeoYandexStrategySection";
import SeoYandexScopeSection from "@/components/sections/SeoYandexScopeSection";
import SeoYandexProcessSection from "@/components/sections/SeoYandexProcessSection";
import SeoYandexPricingSection from "@/components/sections/SeoYandexPricingSection";
import SeoYandexFaqSection from "@/components/sections/SeoYandexFaqSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";

const canonical = "https://makeallperfect.ru/services/seo-prodvizhenie-v-poiskovoj-sisteme-yandeks";
const pageUrl = canonical;

export const metadata: Metadata = {
  ...content.metadata,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
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
      name: "SEO-продвижение сайта в поисковой системе Яндекс",
      serviceType: "SEO-продвижение в Яндексе",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "248", reviewCount: "248" } },
      areaServed: "RU",
      description: content.metadata.description,
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: content.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
        { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
        { "@type": "ListItem", position: 3, name: "SEO-продвижение в Яндексе", item: pageUrl },
      ],
    },
  ],
};

const technologiesContent = {
  label: content.technologies.label,
  title: content.technologies.title,
  description: content.technologies.description,
  stats: [
    { value: "Анализ", label: "позиций и видимости", text: "Мониторинг поисковой выдачи и конкурентов" },
    { value: "Техника", label: "индексация и ошибки", text: "Техническое состояние сайта и структура" },
    { value: "Рост", label: "органика и заявки", text: "Связка SEO с маркетингом и аналитикой" },
  ],
  cards: content.technologies.cards.map((card) => ({
    eyebrow: card.code === "SOFT" ? "МОНИТОРИНГ" : card.code === "YANDEX" ? "ЯНДЕКС" : card.code === "TECH" ? "ТЕХНИКА" : card.code === "AI" ? "СЕМАНТИКА" : card.code === "QC" ? "КОНТРОЛЬ" : "МАРКЕТИНГ",
    title: card.title,
    muted: card.tags[0] || "",
    code: card.code,
    text: `Продвижение в Яндексе с опорой на ${card.tags.slice(0, 2).join(" и ").toLowerCase()}`,
    tags: card.tags,
    accent: card.code === "YANDEX",
  })),
};

export default function SeoYandexPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SeoYandexHeroSection />
      <SeoYandexStrategySection />
      <SeoYandexScopeSection />
      <SeoYandexProcessSection />
      <SeoYandexPricingSection />
      <ServiceSharedSections technologiesContent={technologiesContent} finalCta={{ title: content.finalCta.title, description: content.finalCta.description }} />
      <SeoYandexFaqSection />
    </main>
  );
}
