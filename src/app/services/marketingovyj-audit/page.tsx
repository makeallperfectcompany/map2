import type { Metadata } from "next";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { MarketingAuditHero, MarketingAuditSections } from "@/components/sections/MarketingAuditSection/MarketingAuditSection";
import { marketingAuditContent as content } from "@/content/services/marketing-audit";

const canonical = "/services/marketingovyj-audit";
const pageUrl = `https://makeallperfect.ru${canonical}`;

export const metadata: Metadata = {
  title: "Маркетинговый аудит бизнеса — заказать аудит маркетинга в Москве",
  description:
    "Маркетинговый аудит сайта, рекламы, аналитики и воронки продаж. Находим, где теряются заявки и бюджет, и даём план роста на 30/90 дней. Аудит от 50 000 ₽.",
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Маркетинговый аудит бизнеса в Москве — заказать аудит маркетинга",
    description:
      "Проверяем стратегию, рекламу, сайт, аналитику и воронку как единую систему. Показываем точки потерь и приоритетный план действий. Консультация бесплатно.",
    siteName: "Make All Perfect",
    locale: "ru_RU",
    images: [{ url: content.hero.background, width: 1200, height: 630, alt: "Маркетинговый аудит — анализ рекламы, сайта и воронки продаж агентством Make All Perfect" }],
  },
  twitter: {
    title: "Маркетинговый аудит бизнеса в Москве — заказать аудит маркетинга",
    description:
      "Проверяем стратегию, рекламу, сайт, аналитику и воронку как единую систему. Показываем точки потерь и приоритетный план действий.",
    card: "summary_large_image",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Маркетинговый аудит",
      serviceType: "Маркетинговый аудит",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "248", reviewCount: "248" } },
      areaServed: "RU",
      description: "Проводим маркетинговый аудит: стратегия, реклама, сайт, аналитика и воронка. Находим точки потерь и формируем план роста.",
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: content.faq.map((item) => ({
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
        { "@type": "ListItem", position: 3, name: "Маркетинговый аудит", item: pageUrl },
      ],
    },
  ],
};

export default function MarketingAuditPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <MarketingAuditHero />
      <MarketingAuditSections />
      <ServiceSharedSections finalCta={{ title: "Обсудим вашу задачу и найдём точки роста — бесплатно", description: "На первичной консультации разберём текущую ситуацию, подскажем оптимальную связку продвижения и покажем, с чего начать, чтобы не тратить бюджет на лишние действия. Без обязательств." }} />
      <p style={{textAlign:"center",fontSize:"12px",color:"var(--muted)",marginTop:"-28px",paddingBottom:"48px"}}>Свяжемся в течение 10 минут в рабочее время. Пн–Пт, 09:00–21:00 МСК.</p>
    </main>
  );
}
