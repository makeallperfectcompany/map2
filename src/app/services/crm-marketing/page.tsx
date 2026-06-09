import type { Metadata } from "next";
import CrmMarketingPage from "@/components/sections/CrmMarketing/CrmMarketingPage";
import { crmMarketingPage as content } from "@/content/services/crmMarketing";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";

const canonical = "/services/crm-marketing";
const pageUrl = `https://makeallperfect.ru${canonical}`;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "CRM-маркетинг под ключ — настройка от 50 000 ₽",
    description: content.metadata.description,
    siteName: "Make All Perfect",
    locale: "ru_RU",
    images: [{ url: "/images/services/crm-marketing/crm-hero-bg.webp", width: 1920, height: 1080, alt: "CRM-маркетинг — Make All Perfect" }],
  },
  twitter: {
    title: "CRM-маркетинг под ключ — настройка от 50 000 ₽",
    description: content.metadata.description,
    card: "summary_large_image",
  },
};

const faqItems = content.faq.map(([question, answer]) => ({ question, answer }));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "CRM-маркетинг под ключ",
      serviceType: "CRM-маркетинг и автоматизация",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
      areaServed: "RU",
      description: content.metadata.description,
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
        { "@type": "ListItem", position: 3, name: "CRM-маркетинг", item: pageUrl },
      ],
    },
  ],
};

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CrmMarketingPage />
      <ServiceSharedSections
        faq={{
          title: "Частые вопросы о CRM-маркетинге",
          description: "",
          items: faqItems
        }}
        finalCta={{
          title: "Готовы превратить базу клиентов в повторные продажи?",
          description: "Расскажите о вашем бизнесе, базе и текущих коммуникациях. На бесплатном аудите мы покажем точки потерь, предложим стратегию CRM-маркетинга, сегменты, сценарии и первые шаги автоматизации — без обязательств. Свяжемся в рабочее время в течение 10 минут. Пн–Пт, 09:00–21:00 МСК."
        }}
      />
    </main>
  );
}
