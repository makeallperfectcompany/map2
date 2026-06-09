import type { Metadata } from "next";
import Script from "next/script";
import OzonExternalAdsSection from "@/components/sections/OzonExternalAdsSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { ozonExternalAdsContent as content } from "@/content/services/ozonExternalAds";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "https://makeallperfect.ru/services/vneshnyaya-reklama-dlya-ozon",
  },
  openGraph: {
    type: "website",
    url: "https://makeallperfect.ru/services/vneshnyaya-reklama-dlya-ozon",
    title: content.meta.title,
    description: content.meta.description,
    siteName: "Make All Perfect",
    locale: "ru_RU",
    images: [
      {
        url: "/images/services/ozon-external-ads/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Внешняя реклама для Ozon — Make All Perfect",
      },
    ],
  },
  twitter: {
    title: content.meta.title,
    description: content.meta.description,
    card: "summary_large_image",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Внешняя реклама для Ozon",
      description:
        "Запуск внешнего трафика на карточки и магазин Ozon через рекламные каналы, блогеров, посевы и контентные площадки с аналитикой, UTM-разметкой и контролем ДРР.",
      provider: { "@type": "Organization", name: "Make All Perfect" },
      areaServed: "RU",
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: content.faq.map((item) => ({
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
        { "@type": "ListItem", position: 3, name: "Внешняя реклама для Ozon", item: "https://makeallperfect.ru/services/vneshnyaya-reklama-dlya-ozon" },
      ],
    },
  ],
};

export default function OzonExternalAdsPage() {
  return (
    <main>
      <Script id="ozon-external-ads-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <OzonExternalAdsSection />
      <ServiceSharedSections />
    </main>
  );
}
