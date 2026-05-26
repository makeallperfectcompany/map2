import type { Metadata } from "next";
import { avitoContent as content } from "@/content/services/avito";
import {
  AvitoHero,
  AvitoServicesSection,
  AvitoAdvantagesSection,
  AvitoProcessSection,
  AvitoOpportunitiesSection,
  AvitoPricingSection,
  AvitoFaqSection,
} from "@/components/sections/AvitoUniqueSections";
import CasesSection from "@/components/sections/CasesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: "/services/prodvizhenie-na-avito",
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
      name: "Продвижение на Avito",
      item: "https://makeallperfect.ru/services/prodvizhenie-na-avito",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Продвижение на Avito под ключ",
  serviceType: "Продвижение на Avito",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
  },
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  description: content.metadata.description,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function AvitoPage() {
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
        <AvitoHero />
        <AvitoServicesSection />
        <AvitoAdvantagesSection />
        <AvitoProcessSection />
        <AvitoOpportunitiesSection />
        <AvitoPricingSection />

        <CasesSection />
        <HomeReviewsSection />
        <HomeIndustriesSection />

        <AvitoFaqSection />
      </main>

      <FinalCtaSection />
    </>
  );
}
