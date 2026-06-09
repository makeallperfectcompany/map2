import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import WordPressHeroSection from "@/components/sections/WordPressHeroSection/WordPressHeroSection";
import WordPressFoundationSection from "@/components/sections/WordPressFoundationSection/WordPressFoundationSection";
import WordPressFormatsSection from "@/components/sections/WordPressFormatsSection/WordPressFormatsSection";
import WordPressDeliverablesSection from "@/components/sections/WordPressDeliverablesSection/WordPressDeliverablesSection";
import WordPressReadinessSection from "@/components/sections/WordPressReadinessSection/WordPressReadinessSection";
import WordPressProcessSection from "@/components/sections/WordPressProcessSection/WordPressProcessSection";
import WordPressPricingSection from "@/components/sections/WordPressPricingSection/WordPressPricingSection";
import WordPressExistingSiteSection from "@/components/sections/WordPressExistingSiteSection/WordPressExistingSiteSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { wordpressContent } from "@/content/services/wordpress";

export const metadata: Metadata = {
  title: wordpressContent.seo.title,
  description: wordpressContent.seo.description,
  alternates: { canonical: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-saytov-wordpress" },
  openGraph: {
    title: wordpressContent.seo.title,
    description: wordpressContent.seo.description,
    url: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-saytov-wordpress",
    siteName: "Make All Perfect",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    title: wordpressContent.seo.title,
    description: wordpressContent.seo.description,
    card: "summary_large_image",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Создание сайтов на WordPress под ключ",
      serviceType: "Разработка сайта на WordPress",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
      areaServed: "RU",
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 50000,
          priceCurrency: "RUB",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: wordpressContent.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru/" },
        { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
        { "@type": "ListItem", position: 3, name: "Создание сайтов на WordPress", item: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-saytov-wordpress" },
      ],
    },
  ],
};

export default function WordPressServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        <WordPressHeroSection content={wordpressContent.hero} />
        <section style={{ background: '#fff', padding: '56px 0 0' }}>
          <Container>
            <div style={{ maxWidth: 860, margin: '0 auto' }}>
              <h2 style={{ margin: '0 0 20px', font: '800 clamp(28px,3.2vw,42px)/1.1 Onest,Inter,system-ui,sans-serif', letterSpacing: '-.06em', color: '#1d1d1f' }}>{wordpressContent.intro.title}</h2>
              <p style={{ margin: 0, font: '450 16px/1.7 Onest,Inter,system-ui,sans-serif', color: '#6b6f76' }}>{wordpressContent.intro.text}</p>
            </div>
          </Container>
        </section>
        <WordPressFoundationSection content={wordpressContent.foundation} />
        <WordPressFormatsSection content={wordpressContent.formats} />
        <WordPressDeliverablesSection content={wordpressContent.deliverables} />
        <WordPressReadinessSection content={wordpressContent.readiness} />
        <WordPressProcessSection content={wordpressContent.process} />
        <WordPressPricingSection content={wordpressContent.pricing} />
        <WordPressExistingSiteSection content={wordpressContent.existingSite} />

        <ServiceSharedSections
          technologiesContent={wordpressContent.technologies}
          faq={{ title: "Частые вопросы о создании сайта на WordPress", items: wordpressContent.faq }}
        />
      </main>
    </>
  );
}
