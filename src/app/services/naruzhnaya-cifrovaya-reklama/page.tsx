import type { Metadata } from "next";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import {
  DoohFaqSection,
  DoohFormatsSection,
  DoohHeroSection,
  DoohIndustriesSection,
  DoohLaunchProcessSection,
  DoohMediaPlanSection,
  DoohPricingSection,
  DoohTechnologiesSection,
  DoohUseCasesSection,
} from "@/components/sections/DoohPageSections/DoohPageSections";
import { naruzhnayaCifrovayaReklamaContent as content } from "@/content/services/naruzhnaya-cifrovaya-reklama";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  openGraph: {
    type: "website",
    title: content.metadata.title,
    description: content.metadata.description,
    images: [
      {
        url: content.hero.image,
        width: 1200,
        height: 630,
        alt: "Цифровая наружная реклама DOOH — Make All Perfect",
      },
    ],
  },
};

export default function NaruzhnayaCifrovayaReklamaPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Цифровая наружная реклама DOOH под ключ",
    provider: {
      "@type": "Organization",
      name: "Make All Perfect",
      url: "https://makeallperfect.ru",
    },
    areaServed: "RU",
    serviceType: "DOOH-реклама и цифровая наружная реклама",
    offers: {
      "@type": "Offer",
      price: "50000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item[0],
      acceptedAnswer: {
        "@type": "Answer",
        text: item[1],
      },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <DoohHeroSection />
      <DoohUseCasesSection />
      <DoohLaunchProcessSection />
      <DoohFormatsSection />
      <DoohMediaPlanSection />
      <DoohPricingSection />

      <DoohIndustriesSection />
      <DoohTechnologiesSection />
      <ServiceSharedSections />
      <DoohFaqSection />
    </main>
  );
}
