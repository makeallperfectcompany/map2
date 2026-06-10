import type { Metadata } from "next";
import { seoAuditContent } from "@/content/services/kompleksnyj-seo-audit-sajta";
import { seoAuditTechnologies } from "@/content/services/seo-audit-technologies";
import { seoAuditAdvantages } from "@/content/services/seo-audit-advantages";

import SeoAuditHero from "@/components/sections/SeoAuditHero/SeoAuditHero";
import SeoAuditProcessSection from "@/components/sections/SeoAuditProcessSection";
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

const canonical = "https://makeallperfect.ru/services/kompleksnyj-seo-audit-sajta";

export const metadata: Metadata = {
  title: seoAuditContent.meta.title,
  description: seoAuditContent.meta.description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: seoAuditContent.meta.title,
    description: seoAuditContent.meta.description,
    siteName: "Make All Perfect",
    locale: "ru_RU",
    images: [
      {
        url: seoAuditContent.hero.image,
        width: 1200,
        height: 630,
        alt: seoAuditContent.hero.title,
      },
    ],
  },
  twitter: {
    title: seoAuditContent.meta.title,
    description: seoAuditContent.meta.description,
    card: "summary_large_image",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
    { "@type": "ListItem", position: 3, name: "Комплексный SEO-аудит сайта", item: canonical },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Комплексный SEO-аудит сайта",
  serviceType: "Комплексный SEO-аудит сайта",
  description: seoAuditContent.meta.description,
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "248", reviewCount: "248" },
  },
  areaServed: { "@type": "Country", name: "Россия" },
  offers: seoAuditContent.pricing.tiers.map((tier, index) => ({
    "@type": "Offer",
    name: tier.name,
    description: `${tier.subtitle}. ${tier.price}`,
    price: tier.price.replace(/[^0-9]/g, "") || "0",
    priceCurrency: "RUB",
    position: index + 1,
  })),
  url: canonical,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: seoAuditContent.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function KompleksnyjSeoAuditSajtaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        {/* Hero — светлый, как на главной */}
        <SeoAuditHero content={seoAuditContent.hero} />

        {/* Области аудита = Технологии */}
        <HomeTechnologiesSection content={seoAuditTechnologies} />

        {/* Результат аудита = Преимущества */}
        <HomeAdvantagesSection content={seoAuditAdvantages} />

        {/* Процесс работы — 2 колонки с визуалом */}
        <SeoAuditProcessSection
          title="Как проходит комплексный SEO-аудит"
          text="Прозрачный процесс в 5 шагов — от погружения в контекст бизнеса до передачи приоритетного плана исправлений с задачами для разработки и контента."
          image="/images/home/advantages-visual.webp"
          items={seoAuditContent.process}
        />

        {/* Тарифы */}
        <AvitoStylePricingSection
          eyebrow={seoAuditContent.pricing.eyebrow}
          title={seoAuditContent.pricing.title}
          description={seoAuditContent.pricing.description}
          tiers={seoAuditContent.pricing.tiers}
          note={seoAuditContent.pricing.note}
          cta={seoAuditContent.pricing.cta}
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
          title="Частые вопросы о комплексном SEO-аудите сайта"
          items={seoAuditContent.faq.map((item) => ({ question: item.question, answer: item.answer }))}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
