import Script from "next/script";
import type { Metadata } from "next";
import GeoHero from "@/components/sections/GeoHero/GeoHero";
import SeoServicesSection from "@/components/sections/SeoServicesSection";
import HomeTechnologiesSection from "@/components/sections/HomeTechnologiesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { seoServices } from "@/content/services/seo-services";

export const metadata: Metadata = {
  title: seoServices.metadata.title + " | Make All Perfect",
  description: seoServices.metadata.description,
  alternates: {
    canonical: "https://map2-ten.vercel.app/services/seo",
  },
};

const canonical = "https://map2-ten.vercel.app/services/seo";

const faq = [
  {
    question: "Какие SEO-услуги вы предоставляете?",
    answer: "Продвигаем сайты в Яндексе и Google, делаем локальное SEO, проводим комплексный SEO-аудит, а также работаем с AEO и GEO — продвижением в AI-поиске и нейросетях. Выбирайте направление под задачу вашего бизнеса.",
  },
  {
    question: "Сколько стоит SEO-продвижение?",
    answer: "Стоимость зависит от направления: SEO-продвижение — от 50 000 ₽/мес, локальное SEO — от 40 000 ₽, SEO-аудит — от 40 000 ₽, AEO и GEO — от 40 000–50 000 ₽. Точную стоимость называем после аудита и согласования объёма работ.",
  },
  {
    question: "Что входит в SEO-аудит сайта?",
    answer: "Технический аудит, анализ семантики, оценка контента, коммерческих факторов, конкурентного окружения и подготовка плана роста с приоритетами.",
  },
  {
    question: "Чем AEO и GEO отличаются от обычного SEO?",
    answer: "Классическое SEO продвигает сайт в поисковой выдаче. AEO готовит контент к формату коротких ответов (сниппеты, голосовой поиск). GEO расширяет видимость бренда в AI-ответах ChatGPT, Gemini, Perplexity и Алисы. Это уровни одной поисковой стратегии, а не замена SEO.",
  },
  {
    question: "Как выбрать подходящую SEO-услугу?",
    answer: "Если нужен рост в одном регионе — локальное SEO. Если выход в топ Яндекса или Google по коммерческим запросам — классическое SEO. Если хотите попадать в AI-ответы — AEO и GEO. Свяжитесь с нами — поможем определить приоритеты.",
  },
  {
    question: "Когда будут первые результаты?",
    answer: "Первые изменения в поисковой выдаче обычно заметны через 1,5–3 месяца. AI-видимость (GEO) может потребовать 1,5–3 месяцев. Точные сроки зависят от ниши, конкуренции, состояния сайта и объёма работ.",
  },
];

const heroContent = {
  title: "SEO-услуги для роста в поиске",
  description: "Яндекс, Google, Алиса, нейросети — чтобы быть на первом месте везде, где клиент ищет ваш продукт.",
  primaryCta: "Подобрать SEO-услугу",
  secondaryCta: "Смотреть кейсы",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "SEO-услуги",
      description: seoServices.metadata.description,
      url: canonical,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: "https://map2-ten.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Услуги", item: "https://map2-ten.vercel.app/services" },
          { "@type": "ListItem", position: 3, name: "SEO-услуги", item: canonical },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function SeoServicePage() {
  return (
    <main>
      <Script id="seo-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <GeoHero content={heroContent} />
      <SeoServicesSection />
      <HomeIndustriesSection />
      <CasesSection />
      <HomeAboutSection />
      <HomeReviewsSection />
      <HomeBlogSection />
      <HomeFaqSection items={faq} />
      <FinalCtaSection />
    </main>
  );
}
