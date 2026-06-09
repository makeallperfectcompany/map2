import type { Metadata } from "next";
import RedesignHeroSection from "@/components/sections/RedesignHeroSection";
import RedesignDiagnosisSection from "@/components/sections/RedesignDiagnosisSection";
import RedesignScopeSection from "@/components/sections/RedesignScopeSection";
import RedesignSeoSafetySection from "@/components/sections/RedesignSeoSafetySection";
import RedesignProcessSection from "@/components/sections/RedesignProcessSection";
import RedesignPricingSection from "@/components/sections/RedesignPricingSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { redesignServiceContent } from "@/content/services/redizayn-i-dorabotka-saytov";

export const metadata: Metadata = {
  title: "Редизайн и доработка сайта, который приносит заявки — Make All Perfect",
  description: "Редизайн и доработка сайта под ключ: обновляем интерфейс, структуру и функционал. Цена от 50 000 ₽. Бережное обновление без потери трафика. Бесплатная оценка проекта.",
  alternates: { canonical: "https://makeallperfect.ru/services/redizayn-i-dorabotka-saytov" },
  openGraph: {
    title: "Редизайн и доработка сайта, который приносит заявки — Make All Perfect",
    description: "Редизайн и доработка сайта под ключ: обновляем интерфейс, структуру и функционал. Цена от 50 000 ₽. Бережное обновление без потери трафика.",
    url: "https://makeallperfect.ru/services/redizayn-i-dorabotka-saytov",
    siteName: "Make All Perfect",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    title: "Редизайн и доработка сайта, который приносит заявки — Make All Perfect",
    description: "Редизайн и доработка сайта под ключ: обновляем интерфейс, структуру и функционал. Цена от 50 000 ₽.",
    card: "summary_large_image",
  },
};

export default function RedesignAndImprovementPage() {
  const service = redesignServiceContent;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: service.hero.title,
      url: "https://makeallperfect.ru/services/redizayn-i-dorabotka-saytov",
      description: metadata.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
        { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
        { "@type": "ListItem", position: 3, name: "Редизайн и доработка сайтов", item: "https://makeallperfect.ru/services/redizayn-i-dorabotka-saytov" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Редизайн и доработка сайтов",
      serviceType: "Редизайн и доработка сайтов",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
      offers: { "@type": "Offer", priceCurrency: "RUB", price: "50000", description: "Стоимость работ — от 50 000 рублей" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Header/Footer assumed to be connected through the current project layout. */}
      <RedesignHeroSection />
      <RedesignDiagnosisSection />
      <RedesignScopeSection />
      <RedesignSeoSafetySection />
      <RedesignProcessSection />
      <RedesignPricingSection />
      <ServiceSharedSections
        technologiesContent={service.technologies}
        faq={{ title: "Частые вопросы о редизайне и доработке сайта", description: "Короткие ответы на вопросы, которые задают перед стартом: стоимость, сроки, гарантии, формат работы и участие с вашей стороны.", items: service.faq }}
        finalCta={{ title: service.finalCta.title, description: service.finalCta.description }}
      />
    </main>
  );
}
