import type { Metadata } from "next";
import ImageVideoHeroSection from "@/components/sections/ImageVideoHeroSection";
import ImageVideoNeedSection from "@/components/sections/ImageVideoNeedSection";
import ImageVideoFormatsSection from "@/components/sections/ImageVideoFormatsSection";
import ImageVideoProcessSection from "@/components/sections/ImageVideoProcessSection";
import ImageVideoScopeSection from "@/components/sections/ImageVideoScopeSection";
import ImageVideoPricingSection from "@/components/sections/ImageVideoPricingSection";
import ImageVideoWhyMapSection from "@/components/sections/ImageVideoWhyMapSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { imidzhevyeVideoService as content } from "@/content/services/imidzhevye-video";

const canonical = "https://makeallperfect.ru/services/imidzhevye-video";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: "Имиджевое видео под ключ — съёмка и продакшн ролика от 50 000 ₽",
    description: "Снимаем имиджевые видео для компаний и брендов: идея, сценарий, продакшн и монтаж под ключ. Адаптации под сайт, рекламу и соцсети. Цена от 50 000 ₽.",
    siteName: "Make All Perfect",
    locale: "ru_RU",
  },
  twitter: {
    title: "Имиджевое видео под ключ — съёмка и продакшн ролика от 50 000 ₽",
    description: "Снимаем имиджевые видео для компаний и брендов: идея, сценарий, продакшн и монтаж под ключ.",
    card: "summary_large_image",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Имиджевые видео",
      serviceType: "Имиджевое видео",
      provider: {
        "@type": "Organization",
        name: "Make All Perfect",
        url: "https://makeallperfect.ru",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "248", reviewCount: "248" },
      },
      areaServed: "RU",
      description: content.metadata.description,
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: (content.faq as unknown as { question: string; answer: string }[]).map((item) => ({
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
        { "@type": "ListItem", position: 3, name: "Имиджевые видео", item: canonical },
      ],
    },
  ],
};

const technologiesContent = {
  label: "Технологии",
  title: content.technologies.title,
  description: content.technologies.description,
  stats: [
    { value: "Бриф", label: "задача и позиционирование", text: "Определяем, что ролик должен изменить в восприятии бренда" },
    { value: "Смысл", label: "сценарий и структура", text: "Собираем ролик вокруг главного сообщения" },
    { value: "Каналы", label: "адаптации под площадки", text: "Готовим версии для сайта, рекламы, соцсетей и мероприятий" },
  ],
  cards: (content.technologies.cards as unknown as { code: string; eyebrow: string; title: string; text: string; tags: string[]; accent?: boolean }[]).map((card) => ({
    eyebrow: card.eyebrow,
    title: card.title,
    muted: card.tags[0] || "",
    code: card.code,
    text: card.text,
    tags: card.tags,
    accent: card.accent || false,
  })),
};

const faqSection = {
  label: "FAQ",
  title: "Вопросы об имиджевых видео",
  description: "Ответили на основные вопросы: чем имиджевое видео отличается от рекламного, можно ли без съёмки, сколько стоит и что получаем на выходе.",
  items: (content.faq as unknown as { question: string; answer: string }[]).map((item) => ({ question: item.question, answer: item.answer })),
};

export default function ImidzhevyeVideoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ImageVideoHeroSection data={content.hero as any} />
      <ImageVideoNeedSection data={content.need as any} />
      <ImageVideoFormatsSection data={content.formats as any} />
      <ImageVideoProcessSection data={content.process as any} />
      <ImageVideoScopeSection data={content.scope as any} />
      <ImageVideoPricingSection data={content.pricing as any} />
      <ImageVideoWhyMapSection data={content.whyMap as any} />

      <ServiceSharedSections
        technologiesContent={technologiesContent}
        faq={{ label: faqSection.label, title: faqSection.title, description: faqSection.description, items: faqSection.items }}
        finalCta={{ title: "Обсудим имиджевое видео для вашего бренда", description: "Разберём вашу задачу, подберём оптимальный формат ролика и рассчитаем стоимость. Покажем, с чего начать, чтобы не тратить бюджет на лишний продакшн там, где он не нужен." }}
      />
      <p style={{textAlign:"center",fontSize:"12px",color:"var(--muted)",marginTop:"-28px",paddingBottom:"48px"}}>Свяжемся в течение 10 минут</p>
    </main>
  );
}
