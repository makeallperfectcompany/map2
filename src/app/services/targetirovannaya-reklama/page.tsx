import type { Metadata } from "next";
import { targetedAdvertisingContent as content } from "@/content/services/targetedAdvertising";
import {
  TargetedAdvertisingApproach,
  TargetedAdvertisingHero,
  TargetedAdvertisingHowItWorks,
  TargetedAdvertisingPlatforms,
  TargetedAdvertisingProcess,
  TargetedAdvertisingService,
} from "@/components/sections/TargetedAdvertisingUniqueSections";
import CasesSection from "@/components/sections/CasesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import TargetedFaqSection from "@/components/sections/TargetedFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: "/services/targetirovannaya-reklama",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Настройка и ведение таргетированной рекламы",
  serviceType: "Таргетированная реклама",
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

export default function TargetirovannayaReklamaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <TargetedAdvertisingHero />
        <TargetedAdvertisingHowItWorks />
        <TargetedAdvertisingPlatforms />
        <TargetedAdvertisingService />
        <TargetedAdvertisingProcess />
        <TargetedAdvertisingApproach />

        <CasesSection />
        <HomeIndustriesSection />
        <HomeReviewsSection />

        <TargetedFaqSection />
      </main>

      <FinalCtaSection />
    </>
  );
}

// force redeploy
