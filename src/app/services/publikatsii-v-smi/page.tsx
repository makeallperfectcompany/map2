import type { Metadata } from "next";
import SmiHeroSection from "@/components/sections/SmiHeroSection";
import SmiRiskSection from "@/components/sections/SmiRiskSection";
import SmiScopeSection from "@/components/sections/SmiScopeSection";
import SmiComparisonSection from "@/components/sections/SmiComparisonSection";
import SmiProcessSection from "@/components/sections/SmiProcessSection";
import SmiPricingSection from "@/components/sections/SmiPricingSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { smiContent } from "@/content/services/publikatsii-v-smi";
import { publFaq } from "@/content/services/publikatsii-v-smi-faq";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Публикации в СМИ — размещение статей и PR",
    description: "Размещение статей, пресс-релизов и экспертных колонок в федеральных и отраслевых СМИ. Стоимость от 50 000 ₽.",
    provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
    areaServed: "RU",
    offers: { "@type": "Offer", priceCurrency: "RUB", price: "50000", description: "Стоимость размещения публикаций в СМИ начинается от 50 000 ₽" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
      { "@type": "ListItem", position: 3, name: "Публикации в СМИ", item: "https://makeallperfect.ru/services/publikatsii-v-smi" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: publFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export const metadata: Metadata = {
  title: "Публикации в СМИ — размещение статей и PR | Make All Perfect",
  description: "Размещаем публикации в СМИ: статьи, пресс-релизы, экспертные колонки в федеральных и отраслевых изданиях. Стоимость от 50 000 ₽. Бесплатная консультация.",
  alternates: { canonical: "https://makeallperfect.ru/services/publikatsii-v-smi" },
};

export default function PublikatsiiVSmiPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
    <SmiHeroSection />
    <SmiRiskSection />
    <SmiScopeSection />
    <SmiComparisonSection />
    <SmiProcessSection />
    <SmiPricingSection />
    <ServiceSharedSections
      technologiesContent={smiContent.technologies}
      faq={{ label: publFaq.label, title: publFaq.title, description: publFaq.description, items: [...publFaq.items] }}
      finalCta={{ title: smiContent.finalCta.title, description: smiContent.finalCta.description }}
    />
  </>;
}
