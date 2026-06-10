import type { Metadata } from "next";
import { avitoContent as content } from "@/content/services/avito";
import { avitoIndustries } from "@/content/services/avito-industries";
import { avitoTechnologies } from "@/content/services/avito-technologies";
import { avitoAdvantages } from "@/content/home/avito-advantages";
import {
  AvitoHero,
  AvitoServicesSection,
  AvitoProcessSection,
  AvitoPricingSection,
} from "@/components/sections/AvitoUniqueSections";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeAdvantagesSection from "@/components/sections/HomeAdvantagesSection";
import HomeTechnologiesSection from "@/components/sections/HomeTechnologiesSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
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
  mainEntity: content.faq.items.map((item: { question: string; answer: string }) => ({
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
        {/* Hero — стиль как на главной: светлый, с доверительной плашкой */}
        <AvitoHero />

        {/* Уникальные секции Avito, перестилизованные под общий стиль */}
        <AvitoServicesSection />
        <HomeAdvantagesSection content={avitoAdvantages} />
        <AvitoProcessSection />

        {/* Для кого подходит = блок Отрасли с переименованным заголовком */}
        <HomeIndustriesSection content={avitoIndustries} />

        <AvitoPricingSection />

        {/* Технологии — контент адаптирован под Avito */}
        <HomeTechnologiesSection content={avitoTechnologies} />
        <CasesSection />
        <HomeAboutSection />
        <HomeReviewsSection />
        <HomeBlogSection />

        {/* FAQ — UI общий, вопросы Avito */}
        <HomeFaqSection
          title={content.faq.title}
          items={content.faq.items}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
