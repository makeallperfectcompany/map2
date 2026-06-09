import type { Metadata } from "next";
import YandexKitHeroSection from "@/components/sections/YandexKitHeroSection";
import { YandexKitFitSection, YandexKitScenariosSection, YandexKitIntegrationsSection, YandexKitProcessSection, YandexKitPriceSection } from "@/components/sections/YandexKitUniqueSections";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { yandexKitContent } from "@/content/services/yandexKit";

const canonical = "/services/sozdanie-i-razrabotka-internet-magazina-na-yandeks-kit-pod-klyuch";

export const metadata: Metadata = {
  title: "Интернет-магазин на Яндекс KIT под ключ за 7–14 дней — от 50 000 ₽ | Make All Perfect",
  description: "Создаём интернет-магазин на Яндекс KIT под ключ за 7–14 дней: структура каталога, импорт товаров из WB/Ozon/1С, оплата, доставка, аналитика и SEO. Договор, фиксированная смета, правки до результата. От 50 000 ₽. Бесплатная консультация.",
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-internet-magazina-na-yandeks-kit-pod-klyuch",
    title: "Интернет-магазин на Яндекс KIT под ключ за 7–14 дней — Make All Perfect",
    description: "Запуск онлайн-витрины на Яндекс KIT: каталог, оплата, доставка, аналитика и SEO. Договор и фиксированная смета. От 50 000 ₽.",
    images: [{ url: "/images/services/yandex-kit/hero-desktop.webp", width: 1672, height: 941, alt: "Интернет-магазин на Яндекс KIT — Make All Perfect" }],
    siteName: "Make All Perfect",
    locale: "ru_RU",
  },
  twitter: {
    title: "Интернет-магазин на Яндекс KIT под ключ — Make All Perfect",
    description: "Запуск магазина физических товаров на Яндекс KIT за 7–14 дней: каталог, интеграции, аналитика и SEO-подготовка.",
    card: "summary_large_image",
  },
};

export default function YandexKitServicePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: yandexKitContent.hero.title,
    serviceType: "Разработка интернет-магазина на Яндекс KIT",
    provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: "50000",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "50000",
        priceCurrency: "RUB",
      },
    },
    url: `https://makeallperfect.ru${canonical}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: yandexKitContent.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <YandexKitHeroSection />
      <YandexKitFitSection />
      <YandexKitScenariosSection />
      <YandexKitIntegrationsSection />
      <YandexKitProcessSection />
      <YandexKitPriceSection />

      <ServiceSharedSections
        technologiesContent={yandexKitContent.technologies}
        faq={{ title: "Вопросы о запуске интернет-магазина на Яндекс KIT", items: yandexKitContent.faq }}
        finalCta={{ title: yandexKitContent.finalCta.title, description: yandexKitContent.finalCta.text }}
      />
    </main>
  );
}
