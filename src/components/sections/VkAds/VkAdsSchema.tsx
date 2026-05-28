import type { VkAdsContent } from "@/content/services/vkAdsNew";

export default function VkAdsSchema({ faq }: { faq: VkAdsContent["faq"] }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru/" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services/" },
      { "@type": "ListItem", position: 3, name: "Реклама ВКонтакте", item: "https://makeallperfect.ru/services/reklama-vkontakte/" },
    ],
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Настройка и ведение рекламы ВКонтакте в VK Ads",
    serviceType: "Реклама ВКонтакте и ведение VK Ads",
    provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru/" },
    areaServed: "RU",
    url: "https://makeallperfect.ru/services/reklama-vkontakte/",
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}