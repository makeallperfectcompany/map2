import type { Metadata } from "next";
import Script from "next/script";
import AeoHeroSection from "@/components/sections/AeoHeroSection/AeoHeroSection";
import AeoServiceSections, {
  AeoIndustriesSection,
  AeoTechnologiesSection,
} from "@/components/sections/AeoServiceSections/AeoServiceSections";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { aeoServiceContent } from "@/content/services/aeo-prodvizhenie";

export const metadata: Metadata = {
  title: "AEO-продвижение сайта под AI-поиск: ChatGPT, Алиса, Нейро",
  description:
    "Сделаем ваш бренд видимым в AI-поиске и нейроответах ChatGPT, Алисы и Яндекс Нейро. AEO-аудит, стратегия и внедрение под ключ. Бесплатная консультация. Цены от 50 000 ₽.",
};

const { faq } = aeoServiceContent;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://map2-ten.vercel.app/services/aeo-prodvizhenie#webpage",
      url: "https://map2-ten.vercel.app/services/aeo-prodvizhenie",
      name: metadata.title,
      description: metadata.description,
      isPartOf: { "@id": "https://map2-ten.vercel.app/#website" },
      about: { "@id": "https://map2-ten.vercel.app/services/aeo-prodvizhenie#service" },
    },
    {
      "@type": "Service",
      "@id": "https://map2-ten.vercel.app/services/aeo-prodvizhenie#service",
      name: "AEO-продвижение",
      description:
        "Оптимизация сайта, контента и структуры данных под AI-поиск, нейроответы и генеративную выдачу.",
      provider: { "@id": "https://map2-ten.vercel.app/#organization" },
      areaServed: "RU",
      offers: {
        "@type": "Offer",
        price: "50000",
        priceCurrency: "RUB",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "50000",
          priceCurrency: "RUB",
          valueAddedTaxIncluded: false,
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://map2-ten.vercel.app/services/aeo-prodvizhenie#faq",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://map2-ten.vercel.app/services/aeo-prodvizhenie#breadcrumbs",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://map2-ten.vercel.app/" },
        { "@type": "ListItem", position: 2, name: "Услуги", item: "https://map2-ten.vercel.app/services" },
        { "@type": "ListItem", position: 3, name: "AEO-продвижение", item: "https://map2-ten.vercel.app/services/aeo-prodvizhenie" },
      ],
    },
  ],
};

export default function AeoServicePage() {
  return (
    <>
      <Script
        id="aeo-service-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <AeoHeroSection {...aeoServiceContent.hero} />
      <AeoServiceSections />

      {/* Финальная цепочка: Отрасли → Технологии → Кейсы → Отзывы → О нас → Блог → FAQ → Final CTA */}
      <AeoIndustriesSection />
      <AeoTechnologiesSection />
      <CasesSection />
      <HomeReviewsSection />
      <HomeAboutSection />
      <HomeBlogSection />
      <HomeFaqSection items={faq} />
      <FinalCtaSection />
    </>
  );
}
