import type { Metadata } from "next";
import CopywritingHeroSection from "@/components/sections/CopywritingHeroSection/CopywritingHeroSection";
import CopywritingProblemSection from "@/components/sections/CopywritingProblemSection/CopywritingProblemSection";
import CopywritingFormatsSection from "@/components/sections/CopywritingFormatsSection/CopywritingFormatsSection";
import CopywritingProcessSection from "@/components/sections/CopywritingProcessSection/CopywritingProcessSection";
import CopywritingOutcomeSection from "@/components/sections/CopywritingOutcomeSection/CopywritingOutcomeSection";
import CopywritingPricingSection from "@/components/sections/CopywritingPricingSection/CopywritingPricingSection";
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";
import { copywritingServiceContent } from "@/content/services/kopirajting-dlya-sajta";

export const metadata: Metadata = {
  title: copywritingServiceContent.metadata.title,
  description: copywritingServiceContent.metadata.description,
  alternates: {
    canonical: "https://map2-ten.vercel.app/services/kopirajting-dlya-sajta",
  },
  openGraph: {
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Копирайтинг для сайта — заказать SEO и продающие тексты",
      },
    ],
  },
};

export default function CopywritingServicePage() {
  const { industries, technologies, faq, finalCta } = copywritingServiceContent;

  return (
    <main>
      <CopywritingHeroSection />
      <CopywritingProblemSection />
      <CopywritingFormatsSection />
      <CopywritingProcessSection />
      <CopywritingOutcomeSection />
      <CopywritingPricingSection />

      <ServiceSharedSections
        // industriesContent not passed — uses homeIndustries defaults
        technologiesContent={{
          label: "Технологии",
          title: technologies.title,
          description:
            "SEO и коммерческий текст становятся сильнее, когда опираются на системный подход: семантику, анализ выдачи, конверсионный сценарий, структуру бренда и контроль качества.",
          stats: [
            { value: "SEM", label: "собирает", text: "точную семантику под задачи бизнеса" },
            { value: "CRO", label: "усиливает", text: "конверсию через структуру и аргументацию" },
            { value: "QA", label: "проверяет", text: "качество текста до передачи в разработку" },
          ],
          cards: [
            { eyebrow: "СЕМАНТИКА", title: "Семантика и интент", muted: "анализ запросов", code: "SEM", text: "Разбираем запросы и ожидания пользователя, чтобы страница отвечала не только ключам, но и реальной задаче клиента.", tags: ["Анализ запросов", "Интент"], accent: false },
            { eyebrow: "АНАЛИЗ", title: "Анализ выдачи", muted: "конкуренты и SERP", code: "SERP", text: "Смотрим, какие блоки, аргументы и форматы используют конкуренты, и собираем структуру сильнее.", tags: ["Аудит конкурентов", "SERP анализ"], accent: true },
            { eyebrow: "CONVERSION", title: "Конверсионный сценарий", muted: "от интереса к заявке", code: "CRO", text: "Выстраиваем путь от первого экрана до заявки: оффер, польза, доказательства, возражения и CTA.", tags: ["CRO", "Сценарии"], accent: false },
            { eyebrow: "OPTIMIZATION", title: "Контентная SEO-оптимизация", muted: "ключи без переспама", code: "SEO", text: "Работаем с H1–H3, тематической полнотой, естественным вхождением запросов и индексируемой структурой.", tags: ["SEO", "Контент"], accent: false },
            { eyebrow: "БРЕНДИНГ", title: "Голос бренда", muted: "тон и стиль", code: "TOV", text: "Подбираем тон, который соответствует компании: экспертный, спокойный, премиальный, технологичный или более простой.", tags: ["Tone of Voice", "Стиль"], accent: false },
            { eyebrow: "КОНТРОЛЬ", title: "Редакторская проверка", muted: "чистота текста", code: "QA", text: "Убираем воду, повторы, слабые формулировки, канцелярит и неподтверждённые обещания.", tags: ["Редактура", "Качество"], accent: false },
          ] as const,
        }}
        faq={{
          title: faq.title,
          items: faq.items,
        }}
        finalCta={{
          title: finalCta.title,
          description: finalCta.description,
        }}
      />
    </main>
  );
}
