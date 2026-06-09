import type { Metadata } from "next";
import { smmService } from "@/content/services/smm";
import { SmmHeroSection } from "@/components/sections/SmmHeroSection";
import { SmmScopeSection } from "@/components/sections/SmmScopeSection";
import { SmmImpactSection } from "@/components/sections/SmmImpactSection";
import { SmmFormatsSection } from "@/components/sections/SmmFormatsSection";
import { SmmProcessSection } from "@/components/sections/SmmProcessSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";

const canonical = "https://makeallperfect.ru/services/smm";
const brand = "Make All Perfect";
const pageTitle = smmService.metadata.title;
const pageDesc = smmService.metadata.description;

export const metadata: Metadata = {
  title: pageTitle.replace(` | ${brand}`, ""),
  description: pageDesc,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: pageTitle,
    description: pageDesc,
    siteName: brand,
    locale: "ru_RU",
    images: [{ url: "/images/services/smm-prodvizhenie/smm-hero-bg.webp", width: 1200, height: 630, alt: "SMM-продвижение для бизнеса — Make All Perfect" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDesc,
  },
};

const smmTechnologiesContent = {
  label: "TECHNOLOGIES",
  title: smmService.technologies.title,
  description: smmService.technologies.description,
  stats: smmService.technologies.highlights.map((h) => ({
    value: h.code,
    label: "",
    text: h.text,
  })),
  cards: smmService.technologies.cards.map((c) => ({
    eyebrow: "",
    title: c.title,
    muted: "",
    code: c.title.substring(0, 4).toUpperCase(),
    text: c.text,
    tags: [] as readonly string[],
  })),
} as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "SMM-продвижение для бизнеса",
      serviceType: "SMM и ведение соцсетей",
      provider: {
        "@type": "Organization",
        name: "Make All Perfect",
        url: "https://makeallperfect.ru",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          ratingCount: "248",
          reviewCount: "248",
        },
      },
      areaServed: "RU",
      description: pageDesc,
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: smmService.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
        { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
        { "@type": "ListItem", position: 3, name: "SMM и контент", item: canonical },
      ],
    },
  ],
};

export default function SmmPromotionPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SmmHeroSection hero={smmService.hero} />
      <SmmScopeSection scope={smmService.scope} />
      <SmmImpactSection impact={smmService.impact} />
      <SmmFormatsSection formats={smmService.formats} />
      <SmmProcessSection process={smmService.process} />
      <ServiceSharedSections
        technologiesContent={smmTechnologiesContent}
        faq={{
          label: "FAQ",
          title: "Вопросы о SMM-продвижении",
          description: "",
          items: smmService.faq.map((item) => ({ question: item.question, answer: item.answer })),
          cta: { title: smmService.finalCta.title, text: smmService.finalCta.description, button: smmService.finalCta.cta, href: "#final-cta" }
        }}
        finalCta={{ title: smmService.finalCta.title, description: smmService.finalCta.description }}
      />
    </main>
  );
}
