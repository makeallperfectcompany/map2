import type { Metadata } from "next";
import AiAgentsHeroSection from "@/components/sections/AiAgentsHeroSection/AiAgentsHeroSection";
import AiAgentsIntroSection from "@/components/sections/AiAgentsIntroSection/AiAgentsIntroSection";
import AiAgentsTypesSection from "@/components/sections/AiAgentsTypesSection/AiAgentsTypesSection";
import AiAgentsUseCasesSection from "@/components/sections/AiAgentsUseCasesSection/AiAgentsUseCasesSection";
import AiAgentsComparisonSection from "@/components/sections/AiAgentsComparisonSection/AiAgentsComparisonSection";
import AiAgentsProcessSection from "@/components/sections/AiAgentsProcessSection/AiAgentsProcessSection";
import AiAgentsPricingSection from "@/components/sections/AiAgentsPricingSection/AiAgentsPricingSection";
import AiAgentsIndustriesSection from "@/components/sections/AiAgentsIndustriesSection/AiAgentsIndustriesSection";
import AiAgentsTechnologiesSection from "@/components/sections/AiAgentsTechnologiesSection/AiAgentsTechnologiesSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { aiAgentsService } from "@/content/services/sozdanie-ii-agentov";

const baseUrl = "https://map2-ten.vercel.app";
const pageUrl = `${baseUrl}${aiAgentsService.url}`;

export const metadata: Metadata = {
  ...aiAgentsService.metadata,
  openGraph: {
    title: aiAgentsService.metadata.openGraph?.title ?? aiAgentsService.metadata.title,
    description: aiAgentsService.metadata.openGraph?.description ?? aiAgentsService.metadata.description,
    url: pageUrl,
    siteName: "Make All Perfect",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: aiAgentsService.metadata.openGraph?.title ?? aiAgentsService.metadata.title,
    description: aiAgentsService.metadata.openGraph?.description ?? aiAgentsService.metadata.description,
  },
  alternates: { canonical: pageUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Создание ИИ-агентов для бизнеса",
      serviceType: "Разработка AI-агентов",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
      areaServed: "RU",
      offers: {
        "@type": "Offer",
        price: "50000",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: aiAgentsService.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function AiAgentsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AiAgentsHeroSection />
      <AiAgentsIntroSection />
      <AiAgentsTypesSection />
      <AiAgentsUseCasesSection />
      <AiAgentsComparisonSection />
      <AiAgentsProcessSection />
      <AiAgentsPricingSection />
      <AiAgentsIndustriesSection />
      <AiAgentsTechnologiesSection />
      <ServiceSharedSections
        faq={{
          title: "Собрали короткие ответы на вопросы, которые чаще всего задают перед разработкой ИИ-агента: стоимость, сроки, интеграции, безопасность и формат работы.",
          items: [...aiAgentsService.faq]
        }}
        finalCta={{
          title: "Получите бесплатный аудит процесса — покажем, где ИИ-агент окупится быстрее всего",
          description: "Разберём ваш процесс, оценим объём рутины и пропущенных обращений и предложим, с какого агента выгоднее начать. Без обязательств и навязывания сложных систем."
        }}
      />
    </main>
  );
}
