import type { Metadata } from "next";
import { reactDevelopmentContent } from "@/content/services/react-development";
import ReactDevelopmentHeroSection from "@/components/sections/ReactDevelopmentHeroSection/ReactDevelopmentHeroSection";
import ReactFitSection from "@/components/sections/ReactFitSection/ReactFitSection";
import ReactSolutionsSection from "@/components/sections/ReactSolutionsSection/ReactSolutionsSection";
import ReactArchitectureSection from "@/components/sections/ReactArchitectureSection/ReactArchitectureSection";
import ReactProcessSection from "@/components/sections/ReactProcessSection/ReactProcessSection";
import ReactPricingSection from "@/components/sections/ReactPricingSection/ReactPricingSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";

const canonical = "/services/sozdanie-i-razrabotka-saytov-na-react";

export const metadata: Metadata = {
  title: reactDevelopmentContent.metadata.title,
  description: reactDevelopmentContent.metadata.description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: "https://makeallperfect.ru/services/sozdanie-i-razrabotka-saytov-na-react",
    title: reactDevelopmentContent.metadata.title,
    description: reactDevelopmentContent.metadata.description,
    siteName: "Make All Perfect",
    locale: "ru_RU",
    images: [{ url: "/images/services/react-development/hero-desktop.webp", width: 1200, height: 630, alt: "Разработка сайтов на React и Next.js — Make All Perfect" }],
  },
  twitter: {
    title: reactDevelopmentContent.metadata.title,
    description: reactDevelopmentContent.metadata.description,
    card: "summary_large_image",
  },
};

const technologiesContent = {
  label: reactDevelopmentContent.technologies.label,
  title: reactDevelopmentContent.technologies.title,
  description: reactDevelopmentContent.technologies.text,
  stats: reactDevelopmentContent.technologies.stats.map((s) => ({
    value: s.value,
    label: s.label,
    text: s.text,
  })),
  cards: reactDevelopmentContent.technologies.cards.map((card) => ({
    eyebrow: card.code,
    title: card.title,
    muted: card.tags[0] ?? "",
    code: card.code,
    text: card.text,
    tags: card.tags,
    accent: false,
  })),
} as const;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Разработка сайтов на React под ключ",
  serviceType: "Разработка сайтов на React и Next.js",
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
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: reactDevelopmentContent.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ReactDevelopmentPage() {
  const content = reactDevelopmentContent;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ReactDevelopmentHeroSection content={content.hero} />
      <ReactFitSection content={content.fit} />
      <ReactSolutionsSection content={content.solutions} />
      <ReactArchitectureSection content={content.architecture} />
      <ReactProcessSection content={content.process} />
      <ReactPricingSection content={content.pricing} />

      <ServiceSharedSections
        technologiesContent={technologiesContent}
        faq={{ title: content.faq.title, items: content.faq.items }}
        finalCta={{ title: content.finalCta.title, description: content.finalCta.text, label: content.finalCta.label }}
      />
    </main>
  );
}
