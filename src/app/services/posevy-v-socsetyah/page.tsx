import type { Metadata } from "next";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import PosevyHeroSection from "@/components/sections/PosevyHeroSection";
import PosevyPageSections from "@/components/sections/PosevyPageSections";
import { posevySocsetyah } from "@/content/services/posevy-v-socsetyah";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: posevySocsetyah.metadata.title,
  description: posevySocsetyah.metadata.description,
  openGraph: {
    type: "website",
    title: posevySocsetyah.metadata.title,
    description: posevySocsetyah.metadata.description,
    images: [
      {
        url: "/images/services/posevy-v-socsetyah/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Посевы в соцсетях под ключ — Make All Perfect",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Посевы в соцсетях под ключ",
      serviceType: "Рекламные посевы в социальных сетях",
      provider: {
        "@type": "Organization",
        name: "Make All Perfect",
        url: "https://makeallperfect.ru",
      },
      areaServed: "RU",
      description:
        "Посевы в Telegram, VK, у блогеров, в медиа и тематических сообществах: подбор площадок, нативные рекламные сообщения, организация размещений, UTM-разметка и аналитика.",
      offers: {
        "@type": "Offer",
        price: "50000",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        description: "Стоимость услуги от 50 000 рублей. Рекламный бюджет на размещения рассчитывается отдельно.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: posevySocsetyah.faq.map((item) => ({
        "@type": "Question",
        name: item.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.text,
        },
      })),
    },
  ],
};

export default function PosevySocsetyahPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PosevyHeroSection content={posevySocsetyah.hero} />

      {/* Trust bar */}
      <div className={styles.trustBar}>
        <span>С 2017 года</span>
        <span className={styles.trustDot}>·</span>
        <span>400+ проектов</span>
        <span className={styles.trustDot}>·</span>
        <span>Рейтинг 4.9 на Яндекс Картах</span>
        <span className={styles.trustDot}>·</span>
        <span>Проверяем площадки на накрутки</span>
        <span className={styles.trustDot}>·</span>
        <span>Работаем по медиаплану</span>
        <span className={styles.trustDot}>·</span>
        <span>Отчёт по каждому размещению</span>
      </div>

      <PosevyPageSections content={posevySocsetyah} />
      <ServiceSharedSections
        faq={{
          title: "Вопросы о посевах в соцсетях",
          items: posevySocsetyah.faq.map((item) => ({ question: item.title, answer: item.text }))
        }}
        finalCta={{
          title: "Получите бесплатный медиаплан для посевов под вашу задачу",
          description: "Разберём вашу нишу, аудиторию и цель, подберём площадки без накруток и покажем медиаплан с прогнозом охватов — до того, как вы потратите рекламный бюджет."
        }}
      />
    </main>
  );
}
