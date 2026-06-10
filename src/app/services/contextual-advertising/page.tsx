import type { Metadata } from "next";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { contextualAdvertisingService as data } from "@/content/services/contextual-advertising";
import ContextualAdvertisingHeroSection from "@/components/sections/ContextualAdvertisingHeroSection";
import ContextualProblemsSection from "@/components/sections/ContextualProblemsSection";
import ContextualScopeSection from "@/components/sections/ContextualScopeSection";
import ContextualMechanicsSection from "@/components/sections/ContextualMechanicsSection";
import ContextualFormatsSection from "@/components/sections/ContextualFormatsSection";
import ContextualAuditSection from "@/components/sections/ContextualAuditSection";
import ContextualProcessSection from "@/components/sections/ContextualProcessSection";
import AvitoStylePricingSection from "@/components/sections/AvitoStylePricingSection";
import ContextualUseCasesSection from "@/components/sections/ContextualUseCasesSection";
import ContextualIndustriesSection from "@/components/sections/ContextualIndustriesSection";
import ContextualTechnologiesSection from "@/components/sections/ContextualTechnologiesSection";
import ContextualFaqSection from "@/components/sections/ContextualFaqSection";

const canonical = "/services/contextual-advertising";
const pageUrl = `https://makeallperfect.ru${canonical}`;

export const metadata: Metadata = {
  ...data.metadata,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: data.metadata.title,
    description: data.metadata.description,
    siteName: "Make All Perfect",
    locale: "ru_RU",
    images: [{ url: data.hero.background, width: 1200, height: 630, alt: "Контекстная реклама под ключ" }],
  },
  twitter: {
    title: data.metadata.title,
    description: data.metadata.description,
    card: "summary_large_image",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Контекстная реклама",
      serviceType: "Контекстная реклама",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
      areaServed: "RU",
      description: data.metadata.description,
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: data.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
        { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
        { "@type": "ListItem", position: 3, name: "Контекстная реклама", item: pageUrl },
      ],
    },
  ],
};

export default function ContextualAdvertisingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContextualAdvertisingHeroSection data={data.hero} />
      <ContextualProblemsSection data={data.problems} />
      <ContextualScopeSection data={data.scope} />
      <ContextualMechanicsSection data={data.mechanics} />
      <ContextualFormatsSection data={data.formats} />
      <ContextualAuditSection data={data.audit} />
      <ContextualProcessSection data={data.process} />
      <AvitoStylePricingSection
        eyebrow={data.pricing.eyebrow}
        title={data.pricing.title}
        description={data.pricing.description}
        tiers={data.pricing.tiers}
        note={data.pricing.note}
        cta={data.pricing.cta}
      />
      <ContextualUseCasesSection data={data.useCases} />
      <ContextualIndustriesSection data={data.industries} />
      <ContextualTechnologiesSection data={data.technologies} />
      <ServiceSharedSections finalCta={{ title: data.finalCta.title, description: data.finalCta.text }} />
      <ContextualFaqSection items={data.faq} />
    </main>
  );
}
