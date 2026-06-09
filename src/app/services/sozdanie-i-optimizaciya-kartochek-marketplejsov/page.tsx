import type { Metadata } from "next";
import MarketplaceProductCardsSection from "@/components/sections/MarketplaceProductCardsPage/MarketplaceProductCardsPage";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { marketplaceProductCardsContent as content } from "@/content/services/marketplace-product-cards";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: "/services/sozdanie-i-optimizaciya-kartochek-marketplejsov",
  },
  openGraph: {
    type: "website",
    url: "https://makeallperfect.ru/services/sozdanie-i-optimizaciya-kartochek-marketplejsov",
    title: content.metadata.title,
    description: content.metadata.description,
    siteName: "Make All Perfect",
    locale: "ru_RU",
  },
  twitter: {
    title: content.metadata.title,
    description: content.metadata.description,
    card: "summary_large_image",
  },
};

const faqItems = content.faq.map(([question, answer]) => ({ question, answer }));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Создание и оптимизация карточек товаров для маркетплейсов",
      description: "Упакуем товар для Wildberries, Ozon, Яндекс Маркета: SEO, название, характеристики, описание, визуальная логика, инфографика.",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
      areaServed: "RU",
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
        { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
        { "@type": "ListItem", position: 3, name: "Создание и оптимизация карточек товаров", item: "https://makeallperfect.ru/services/sozdanie-i-optimizaciya-kartochek-marketplejsov" },
      ],
    },
  ],
};

export default function MarketplaceProductCardsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <MarketplaceProductCardsSection />
      <ServiceSharedSections
        faq={{ title: "Частые вопросы о создании и оптимизации карточек товаров", items: faqItems }}
        finalCta={{ title: content.finalCta.title, description: content.finalCta.text }}
      />
    </main>
  );
}
