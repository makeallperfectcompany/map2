import type { Metadata } from "next";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import {
  MarketingConsultingFaqSection,
  MarketingConsultingHeroSection,
  MarketingConsultingIndustriesSection,
  MarketingConsultingTechnologiesSection,
  MarketingConsultingUniqueSections,
} from "@/components/sections/MarketingConsultingPageSection";
import { marketingConsultingContent as content } from "@/content/services/marketing-consulting";

const canonical = "/services/marketingovyj-konsalting";
const pageUrl = `https://makeallperfect.ru${canonical}`;

export const metadata: Metadata = {
  title: "Маркетинговый консалтинг для бизнеса — аудит, стратегия и план роста | Make All Perfect",
  description:
    "Маркетинговый консалтинг от агентства с 2017 года: проводим аудит маркетинга, находим точки роста и даём стратегию с планом действий. Рейтинг 4.9. Бесплатная консультация. Стоимость — от 50 000 ₽.",
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Маркетинговый консалтинг для бизнеса — аудит, стратегия и план роста",
    description:
      "Аудит маркетинга, стратегия и понятный план роста. Разбираем цели, аудиторию, каналы и аналитику — и показываем, на чём сфокусироваться, чтобы не тратить бюджет впустую.",
    siteName: "Make All Perfect",
    locale: "ru_RU",
    images: [
      {
        url: "/images/services/marketing-consulting/marketing-consulting-hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Маркетинговый консалтинг — аудит маркетинга и стратегия роста для бизнеса",
      },
    ],
  },
  twitter: {
    title: "Маркетинговый консалтинг для бизнеса — аудит, стратегия и план роста",
    description:
      "Аудит маркетинга, стратегия и план роста. Разбираем цели, аудиторию, каналы и аналитику — сфокусируемся на том, что даст результат.",
    card: "summary_large_image",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Маркетинговый консалтинг",
      serviceType: "Маркетинговый консалтинг",
      provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "248", reviewCount: "248" } },
      areaServed: "RU",
      description: "Маркетинговый консалтинг для бизнеса: анализ маркетинга, каналов, коммуникаций и приоритетов дальнейших решений.",
      offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", priceSpecification: { "@type": "PriceSpecification", minPrice: "50000", priceCurrency: "RUB" }, availability: "https://schema.org/InStock" },
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
        { "@type": "ListItem", position: 3, name: "Маркетинговый консалтинг", item: pageUrl },
      ],
    },
  ],
};

export default function MarketingConsultingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <MarketingConsultingHeroSection />
      <MarketingConsultingUniqueSections />
      <MarketingConsultingIndustriesSection />
      <MarketingConsultingTechnologiesSection />
      <ServiceSharedSections
        finalCta={{
          title: "Получите бесплатный разбор маркетинга и точки роста за один созвон",
          description: "Разберём вашу текущую ситуацию, подскажем рабочую связку продвижения и покажем, с чего начать, чтобы не сливать бюджет на лишнее. Консультация бесплатная и ни к чему вас не обязывает.",
        }}
      />
      <MarketingConsultingFaqSection />
      <p style={{textAlign:"center",fontSize:"12px",color:"var(--muted)",marginTop:"-28px",paddingBottom:"48px"}}>Ответим в течение 10 минут в рабочее время. Пн–Пт, 09:00–21:00 МСК. Без спама и навязчивых звонков.</p>
    </main>
  );
}
