import type { Metadata } from "next";
import { contextualAdvertisingService as data } from "@/content/services/contextual-advertising";
import { kontekstnayaReklamaTechnologies } from "@/content/services/kontekstnaya-reklama-technologies";
import { kontekstnayaReklamaAdvantages } from "@/content/services/kontekstnaya-reklama-advantages";

import KontekstnayaReklamaHero from "@/components/sections/KontekstnayaReklamaHero/KontekstnayaReklamaHero";
import KontekstnayaReklamaProcessSection from "@/components/sections/KontekstnayaReklamaProcessSection";
import AvitoStylePricingSection from "@/components/sections/AvitoStylePricingSection";
import HomeTechnologiesSection from "@/components/sections/HomeTechnologiesSection";
import HomeAdvantagesSection from "@/components/sections/HomeAdvantagesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

const canonical = "https://makeallperfect.ru/services/kontekstnaya-reklama";

export const metadata: Metadata = {
  title: "Контекстная реклама под ключ: настройка и ведение Яндекс Директ — от 50 000 ₽",
  description:
    "Настраиваем и ведём контекстную рекламу в Яндекс Директ под заявки и продажи, а не клики. Аудит, аналитика, коллтрекинг, CRM, прозрачные отчёты. Работы — от 50 000 ₽, бюджет рассчитываем отдельно. Бесплатный аудит кампаний.",
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: "Контекстная реклама под ключ: настройка и ведение Яндекс Директ — от 50 000 ₽ | Make All Perfect",
    description:
      "Настраиваем и ведём контекстную рекламу в Яндекс Директ под заявки и продажи, а не клики. Аудит, аналитика, коллтрекинг, CRM, прозрачные отчёты. Работы — от 50 000 ₽, бюджет рассчитываем отдельно. Бесплатный аудит кампаний.",
    siteName: "Make All Perfect",
    locale: "ru_RU",
    images: [{ url: "/images/services/contextual-advertising/hero-bg.webp", width: 1200, height: 630, alt: "Контекстная реклама Яндекс Директ — Make All Perfect" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контекстная реклама под ключ: настройка и ведение Яндекс Директ — от 50 000 ₽ | Make All Perfect",
    description:
      "Настраиваем и ведём контекстную рекламу в Яндекс Директ под заявки и продажи, а не клики. Аудит, аналитика, коллтрекинг, CRM, прозрачные отчёты. Работы — от 50 000 ₽, бюджет рассчитываем отдельно. Бесплатный аудит кампаний.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
    { "@type": "ListItem", position: 3, name: "Контекстная реклама", item: canonical },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Контекстная реклама под ключ: настройка и ведение Яндекс Директ",
  serviceType: "Контекстная реклама",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "248", reviewCount: "248" },
  },
  areaServed: { "@type": "Country", name: "Россия" },
  description:
    "Настраиваем и ведём контекстную рекламу в Яндекс Директ под заявки и продажи, а не клики. Аудит, аналитика, коллтрекинг, CRM, прозрачные отчёты. Работы — от 50 000 ₽, бюджет рассчитываем отдельно.",
  offers: data.pricing.tiers.map((tier, index) => ({
    "@type": "Offer",
    name: tier.name,
    description: `${tier.subtitle}. ${tier.price}`,
    price: tier.price.replace(/[^0-9]/g, "") || "0",
    priceCurrency: "RUB",
    position: index + 1,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: data.faq.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function KontekstnayaReklamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        {/* Hero — светлый, как на главной */}
        <KontekstnayaReklamaHero content={data.hero} />

        {/* Объём услуг = Технологии */}
        <HomeTechnologiesSection content={kontekstnayaReklamaTechnologies} />

        {/* Преимущества / форматы работы */}
        <HomeAdvantagesSection content={kontekstnayaReklamaAdvantages} />

        {/* Процесс работы — 2 колонки с визуалом */}
        <KontekstnayaReklamaProcessSection
          title={data.process.title}
          text="Прозрачный процесс в 7 шагов — от разбора бизнеса до регулярной оптимизации кампаний. Определяем архитектуру, проверяем аналитику, запускаем и улучшаем рекламу на основе данных."
          image="/images/home/advantages-visual.webp"
          items={data.process.steps.map(([, title, text]) => [title, text] as const)}
        />

        {/* Тарифы */}
        <AvitoStylePricingSection
          eyebrow={data.pricing.eyebrow}
          title={data.pricing.title}
          description={data.pricing.description}
          tiers={data.pricing.tiers}
          note={data.pricing.note}
          cta={data.pricing.cta}
        />

        {/* Отрасли — alias с главной */}
        <HomeIndustriesSection />

        {/* Кейсы, О нас, Отзывы, Блог */}
        <CasesSection />
        <HomeAboutSection />
        <HomeReviewsSection />
        <HomeBlogSection />

        {/* FAQ */}
        <HomeFaqSection
          title="Часто задаваемые вопросы о контекстной рекламе"
          items={data.faq.map(([question, answer]) => ({ question, answer }))}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
