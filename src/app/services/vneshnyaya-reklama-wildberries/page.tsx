import type { Metadata } from "next";
import WbExternalAdsHero from "@/components/sections/WbExternalAdsHero/WbExternalAdsHero";
import WbExternalAdsReadiness from "@/components/sections/WbExternalAdsReadiness/WbExternalAdsReadiness";
import WbExternalAdsScope from "@/components/sections/WbExternalAdsScope/WbExternalAdsScope";
import WbExternalAdsDarkCards from "@/components/sections/WbExternalAdsDarkCards/WbExternalAdsDarkCards";
import WbExternalAdsAudit from "@/components/sections/WbExternalAdsAudit/WbExternalAdsAudit";
import WbExternalAdsProcess from "@/components/sections/WbExternalAdsProcess/WbExternalAdsProcess";
import WbExternalAdsPricing from "@/components/sections/WbExternalAdsPricing/WbExternalAdsPricing";
import WbExternalAdsLightCards from "@/components/sections/WbExternalAdsLightCards/WbExternalAdsLightCards";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { wbExternalAdsContent } from "@/content/services/vneshnyaya-reklama-wildberries";

const data = wbExternalAdsContent;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Внешняя реклама Wildberries под ключ",
    description: data.metadata.description,
    provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
    areaServed: "RU",
    offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: 50000, priceCurrency: "RUB" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru/" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
      { "@type": "ListItem", position: 3, name: "Внешняя реклама Wildberries", item: "https://makeallperfect.ru/services/vneshnyaya-reklama-wildberries" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export const metadata: Metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  alternates: { canonical: "https://makeallperfect.ru/services/vneshnyaya-reklama-wildberries" },
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: "https://makeallperfect.ru/services/vneshnyaya-reklama-wildberries",
    siteName: "Make All Perfect",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    title: data.metadata.title,
    description: data.metadata.description,
    card: "summary_large_image",
  },
};

export default function WbExternalAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <main>
        <WbExternalAdsHero />
        <WbExternalAdsReadiness />
        <WbExternalAdsScope />
        <WbExternalAdsDarkCards title={data.channels.title} description={data.channels.description} cards={data.channels.cards} />
        <WbExternalAdsAudit />
        <WbExternalAdsProcess />
        <WbExternalAdsPricing />
        <WbExternalAdsLightCards title={data.industries.title} description={data.industries.description} cards={data.industries.cards} />
        <WbExternalAdsDarkCards title={data.technologies.title} description={data.technologies.description} cards={data.technologies.cards} />
        <ServiceSharedSections
          faq={{ title: data.faq.title, items: data.faq.items }}
          finalCta={{ title: "Обсудим продвижение на Wildberries и найдём точки роста за один разбор", description: "Разберём текущую ситуацию, подскажем оптимальную связку каналов и покажем, с чего начать, чтобы не тратить бюджет на лишние действия. Свяжемся в течение 10 минут в рабочее время (Пн–Пт, 09:00–21:00 МСК)." }}
        />
      </main>
    </>
  );
}
