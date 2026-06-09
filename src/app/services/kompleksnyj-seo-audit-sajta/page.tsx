import type { Metadata } from "next";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { seoAuditContent } from "@/content/services/kompleksnyj-seo-audit-sajta";
import {
  SeoAuditAutoCheckSection,
  SeoAuditDeliverablesSection,
  SeoAuditFaqSection,
  SeoAuditHeroSection,
  SeoAuditIndustriesSection,
  SeoAuditNeedSection,
  SeoAuditPriceSection,
  SeoAuditProcessSection,
  SeoAuditScopeSection,
  SeoAuditSiteTypesSection,
  SeoAuditTechnologiesSection,
} from "@/components/sections/SeoAuditPageSections/SeoAuditPageSections";

export const metadata: Metadata = {
  title: seoAuditContent.meta.title,
  description: seoAuditContent.meta.description,
  openGraph: {
    type: "website",
    url: seoAuditContent.url,
    title: seoAuditContent.meta.title,
    description: seoAuditContent.meta.description,
    images: [
      {
        url: seoAuditContent.hero.image,
        width: 1200,
        height: 630,
        alt: seoAuditContent.hero.title,
      },
    ],
  },
};

export default function KompleksnyjSeoAuditSajtaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoAuditContent.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Комплексный SEO-аудит сайта",
    description: seoAuditContent.meta.description,
    provider: {
      "@type": "Organization",
      name: "Make All Perfect",
      url: "https://makeallperfect.ru",
    },
    offers: {
      "@type": "Offer",
      price: "50000",
      priceCurrency: "RUB",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "50000",
        priceCurrency: "RUB",
        minPrice: "50000",
      },
    },
    areaServed: "RU",
    url: seoAuditContent.url,
  };

  return (
    <main>
      <SeoAuditHeroSection />
      <SeoAuditNeedSection />
      <SeoAuditScopeSection />
      <SeoAuditAutoCheckSection />
      <SeoAuditDeliverablesSection />
      <SeoAuditProcessSection />
      <SeoAuditPriceSection />
      <SeoAuditSiteTypesSection />

      <SeoAuditIndustriesSection />
      <SeoAuditTechnologiesSection />
      <ServiceSharedSections />
      <SeoAuditFaqSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
