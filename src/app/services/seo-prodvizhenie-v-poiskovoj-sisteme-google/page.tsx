import type { Metadata } from "next";
import { googleSeoContent as content } from "@/content/services/prodvizhenie-v-google";
import { GoogleSeoHeroSection, GoogleSeoUniqueSections } from "@/components/sections/GoogleSeoPageSections";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";

const canonical = "/services/seo-prodvizhenie-v-poiskovoj-sisteme-google";
const pageUrl = `https://makeallperfect.ru${canonical}`;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: { canonical },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "SEO-продвижение сайта в Google под ключ — топ и заявки от 50 000 ₽",
    description: "Превращаем органический трафик из Google в стабильный поток заявок. Аудит, техника, семантика, контент, ссылки и аналитика. Бесплатный аудит сайта за 1 день.",
    siteName: "Make All Perfect",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO-продвижение сайта в Google под ключ — от 50 000 ₽",
    description: "Растим органический трафик и заявки из Google. Аудит, техника, семантика, контент, аналитика. Бесплатный аудит за 1 день.",
  },
};

const technologiesContent = {
  label: "Технологии",
  title: content.technologies.title,
  description: content.technologies.text,
  stats: [
    { value: "Индексация", label: "Search Console", text: "Контроль сканирования и ошибок" },
    { value: "Техника", label: "Core Web Vitals", text: "Скорость и пользовательский опыт" },
    { value: "Структура", label: "Content Clusters", text: "Группы страниц под интенты" },
  ],
  cards: content.technologies.cards.map((card) => ({
    eyebrow: card.code,
    title: card.title,
    muted: card.text.split(" ").slice(0, 3).join(" "),
    code: card.code,
    text: card.text,
    tags: [card.code === "GSC" ? "Индексация" : card.code === "TS" ? "Техника" : card.code === "CWV" ? "Скорость" : card.code === "SCH" ? "Разметка" : card.code === "CC" ? "Структура" : "Аналитика"],
    accent: card.code === "GSC" || card.code === "CWV",
  })),
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Продвижение сайта в Google",
      serviceType: "SEO-продвижение в Google",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
      areaServed: "RU",
      description: content.metadata.description,
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "57" },
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
        { "@type": "ListItem", position: 3, name: "Продвижение сайта в Google", item: pageUrl },
      ],
    },
  ],
};

export default function GoogleSeoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GoogleSeoHeroSection />
      <GoogleSeoUniqueSections />
      <ServiceSharedSections
        technologiesContent={technologiesContent}
        faq={{ items: content.faq.map(f => ({ question: f.question, answer: f.answer })) }}
        finalCta={{ title: content.finalCta.title, description: content.finalCta.text }}
      />
      {content.finalCta.trustText && (
        <p style={{textAlign:"center",fontSize:"12px",color:"var(--muted)",marginTop:"-28px",paddingBottom:"48px"}}>
          {content.finalCta.trustText}
        </p>
      )}
    </main>
  );
}
