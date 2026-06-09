import type { Metadata } from "next";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { emailMarketingContent } from "@/content/services/emailMarketing";
import {
  EmailMarketingFaqSection,
  EmailMarketingHero,
  EmailMarketingIncludedSection,
  EmailMarketingIndustriesSection,
  EmailMarketingPriceSection,
  EmailMarketingProcessSection,
  EmailMarketingScenariosSection,
  EmailMarketingTechnologiesSection,
  EmailMarketingValueSection,
} from "@/components/sections/EmailMarketingPageSections/EmailMarketingPageSections";

const canonical = "/services/email-marketing";
const pageUrl = `https://makeallperfect.ru${canonical}`;

export const metadata: Metadata = {
  title: emailMarketingContent.metadata.title,
  description: emailMarketingContent.metadata.description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: emailMarketingContent.metadata.title,
    description: emailMarketingContent.metadata.description,
    siteName: "Make All Perfect",
    locale: "ru_RU",
    images: [{ url: "/images/services/email-marketing/email-hero-bg.webp", width: 1920, height: 1080, alt: "Email-маркетинг — Make All Perfect" }],
  },
  twitter: {
    title: emailMarketingContent.metadata.title,
    description: emailMarketingContent.metadata.description,
    card: "summary_large_image",
  },
};

const faqItems = emailMarketingContent.faq.map((item) => ({ question: item.title, answer: item.text }));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Email-маркетинг под ключ",
      serviceType: "Email-маркетинг",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
      areaServed: "RU",
      description: emailMarketingContent.metadata.description,
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
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
        { "@type": "ListItem", position: 3, name: "Email-маркетинг", item: pageUrl },
      ],
    },
  ],
};

export default function EmailMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <EmailMarketingHero />
      <EmailMarketingValueSection />
      <EmailMarketingIncludedSection />
      <EmailMarketingScenariosSection />
      <EmailMarketingProcessSection />
      <EmailMarketingPriceSection />
      <EmailMarketingIndustriesSection />
      <EmailMarketingTechnologiesSection />
      <ServiceSharedSections
        finalCta={{
          title: "Получите бесплатный аудит вашей клиентской базы — за 30 минут оценим точки роста email-канала",
          description: "Расскажите о вашем бизнесе, базе и текущих коммуникациях. На аудите покажем точки потерь, предложим стратегию, сценарии и первые шаги запуска. Без обязательств.",
        }}
      />
      <EmailMarketingFaqSection />
    </main>
  );
}
