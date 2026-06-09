import type { Metadata } from "next";
import OrmHeroSection from "@/components/sections/OrmHeroSection";
import OrmRiskSection from "@/components/sections/OrmRiskSection";
import OrmScopeSection from "@/components/sections/OrmScopeSection";
import OrmComparisonSection from "@/components/sections/OrmComparisonSection";
import OrmProcessSection from "@/components/sections/OrmProcessSection";
import OrmPricingSection from "@/components/sections/OrmPricingSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { Container } from "@/components/ui/Container/Container";
import { ormContent } from "@/content/services/orm";

export const metadata: Metadata = {
  title: "ORM: управление репутацией в интернете от 50 000 ₽ | Make All Perfect",
  description:
    "Управление репутацией компании в интернете: мониторинг упоминаний, отзывы, работа с негативом и поисковым фоном. ORM от 50 000 ₽.",
  alternates: { canonical: "/services/orm" },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Управление репутацией в интернете (ORM)",
    serviceType: "Online Reputation Management",
    provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
    areaServed: "RU",
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: "50000",
      description: "Стоимость услуги начинается от 50 000 ₽",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ormContent.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
      { "@type": "ListItem", position: 3, name: "ORM", item: "https://makeallperfect.ru/services/orm" },
    ],
  },
];

export default function OrmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        <OrmHeroSection />
        <OrmRiskSection />
        <OrmScopeSection />
        <OrmComparisonSection />
        <OrmProcessSection />
        <OrmPricingSection />

        <ServiceSharedSections
          technologiesContent={ormContent.technologies}
          faq={{ title: "Вопросы об управлении репутацией в интернете", items: ormContent.faq }}
          finalCta={{ title: ormContent.finalCta.title, description: ormContent.finalCta.description }}
        />
        <section style={{ padding: '3rem 0', background: 'var(--color-bg-secondary, #f8f8f8)' }}>
          <Container>
            <p style={{ fontSize: 15, lineHeight: '1.7', color: 'var(--color-text, #333)', margin: 0 }}>
              Управление репутацией в интернете — это системная работа с информационным фоном вокруг бренда.
              ORM включает мониторинг упоминаний и отзывов, реакцию на негатив, работу с поисковой выдачей
              (SERM) и создание достоверного контента, формирующего доверие аудитории. В Москве и других
              регионах России мы помогаем компаниям из разных отраслей — от медицины и недвижимости до
              e-commerce и B2B — контролировать свою онлайн-репутацию и превращать её в конкурентное
              преимущество.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
}
