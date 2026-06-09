import type { Metadata } from "next";
import { contextualAdvertisingService as data } from "@/content/services/contextual-advertising";
import ContextualAdvertisingHeroSection from "@/components/sections/ContextualAdvertisingHeroSection";
import ContextualProblemsSection from "@/components/sections/ContextualProblemsSection";
import ContextualScopeSection from "@/components/sections/ContextualScopeSection";
import ContextualMechanicsSection from "@/components/sections/ContextualMechanicsSection";
import ContextualFormatsSection from "@/components/sections/ContextualFormatsSection";
import ContextualAuditSection from "@/components/sections/ContextualAuditSection";
import ContextualProcessSection from "@/components/sections/ContextualProcessSection";
import ContextualPricingSection from "@/components/sections/ContextualPricingSection";
import ContextualUseCasesSection from "@/components/sections/ContextualUseCasesSection";
import ContextualIndustriesSection from "@/components/sections/ContextualIndustriesSection";
import ContextualTechnologiesSection from "@/components/sections/ContextualTechnologiesSection";
import ContextualFaqSection from "@/components/sections/ContextualFaqSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";

const canonical = "https://makeallperfect.ru/services/kontekstnaya-reklama";

export const metadata: Metadata = {
  title: "Контекстная реклама под ключ: настройка и ведение Яндекс Директ — от 50 000 ₽",
  description:
    "Настраиваем и ведём контекстную рекламу в Яндекс Директ под заявки и продажи, а не клики. Аудит, аналитика, коллтрекинг, CRM, прозрачные отчёты. Работы — от 50 000 ₽, бюджет рассчитываем отдельно. Бесплатный аудит кампаний.",
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: "Контекстная реклама под ключ: настройка и ведение Яндекс Директ — от 50 000 ₽ | Make All Perfect",
    description:
      "Настраиваем и ведём контекстную рекламу в Яндекс Директ под заявки и продажи, а не клики. Аудит, аналитика, коллтрекинг, CRM, прозрачные отчёты. Работы — от 50 000 ₽, бюджет рассчитываем отдельно. Бесплатный аудит кампаний.",
    siteName: "Make All Perfect",
    locale: "ru_RU",
    images: [{ url: "/images/services/contextual-advertising/hero-bg.webp", width: 1200, height: 630, alt: "Контекстная реклама Яндекс Директ — Make All Perfect" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контекстная реклама под ключ: настройка и ведение Яндекс Директ — от 50 000 ₽ | Make All Perfect",
    description:
      "Настраиваем и ведём контекстную рекламу в Яндекс Директ под заявки и продажи, а не клики. Аудит, аналитика, коллтрекинг, CRM, прозрачные отчёты. Работы — от 50 000 ₽, бюджет рассчитываем отдельно. Бесплатный аудит кампаний.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Контекстная реклама под ключ: настройка и ведение Яндекс Директ",
      serviceType: "Контекстная реклама",
      provider: {
        "@type": "Organization",
        name: "Make All Perfect",
        url: "https://makeallperfect.ru",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "248", reviewCount: "248" },
      },
      areaServed: "RU",
      description:
        "Настраиваем и ведём контекстную рекламу в Яндекс Директ под заявки и продажи, а не клики. Аудит, аналитика, коллтрекинг, CRM, прозрачные отчёты. Работы — от 50 000 ₽, бюджет рассчитываем отдельно.",
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: data.faq.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
        { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
        { "@type": "ListItem", position: 3, name: "Контекстная реклама", item: canonical },
      ],
    },
  ],
};

export default function KontekstnayaReklamaPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ContextualAdvertisingHeroSection data={data.hero} />
      <ContextualProblemsSection data={data.problems} />
      <ContextualScopeSection data={data.scope} />
      <ContextualMechanicsSection data={data.mechanics} />
      <ContextualFormatsSection data={data.formats} />
      <ContextualAuditSection data={data.audit} />
      <MidCtaSection />
      <ContextualProcessSection data={data.process} />
      <ContextualPricingSection data={data.pricing} />
      <ContextualUseCasesSection data={data.useCases} />
      <ContextualIndustriesSection data={data.industries} />
      <ContextualTechnologiesSection data={data.technologies} />
      <ServiceSharedSections finalCta={{ title: data.finalCta.title, description: data.finalCta.text, label: data.finalCta.cta }} />
      <ContextualFaqSection items={data.faq} />
    </main>
  );
}

function MidCtaSection() {
  const { midCta } = data;
  return (
    <section className="midCtaSection">
      <div className="midCtaInner">
        <h2 className="midCtaTitle">{midCta.title}</h2>
        <p className="midCtaText">{midCta.text}</p>
        <a className="midCtaButton" href={midCta.anchor}>{midCta.cta} ↗</a>
      </div>
      <style>{`
        .midCtaSection { padding: 60px 24px; background: linear-gradient(135deg, #0a2240 0%, #071530 100%); color: #fff; text-align: center; }
        .midCtaInner { max-width: 680px; margin: 0 auto; }
        .midCtaTitle { font: 800 clamp(28px, 3.5vw, 42px)/1.1 Onest, Inter, system-ui, sans-serif; letter-spacing: -0.06em; margin: 0 0 16px; text-wrap: balance; }
        .midCtaText { font: 450 17px/1.55 Onest, Inter, system-ui, sans-serif; color: rgba(245,245,247,0.72); margin: 0 0 28px; }
        .midCtaButton { display: inline-flex; align-items: center; gap: 8px; min-height: 48px; padding: 0 28px; border-radius: 999px; background: linear-gradient(90deg, #1A3A6E 0%, #0071E3 52%, #5FA8FF 100%); color: #fff; font: 750 14px/1 var(--font-onest), Onest, Inter, system-ui, sans-serif; text-decoration: none; transition: transform 240ms var(--ease), filter 240ms var(--ease); }
        .midCtaButton:hover { transform: translateY(-2px); filter: brightness(1.08); }
      `}</style>
    </section>
  );
}
