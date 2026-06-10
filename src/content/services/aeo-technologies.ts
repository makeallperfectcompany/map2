import type { TechnologiesContent } from "@/components/sections/HomeTechnologiesSection";

export const aeoTechnologies: TechnologiesContent = {
  label: "Инструменты",
  title: "Технологии и методики AEO-продвижения",
  description:
    "Используем комплекс инструментов: от мониторинга AI-видимости и карты сущностей до schema-разметки, answer-first контента и сквозной аналитики.",
  stats: [
    { value: "AI", label: "мониторинг видимости", text: "Бренд в ChatGPT, Нейро, Perplexity" },
    { value: "AEO", label: "answer-first контент", text: "Ответы, FAQ, сравнения, определения" },
    { value: "DATA", label: "аналитика результатов", text: "Трафик, заявки, AI-referral" },
  ],
  cards: [
    {
      eyebrow: "МОНИТОРИНГ",
      title: "AI Monitoring",
      muted: "систем",
      code: "AI",
      text: "Проверяем присутствие бренда в AI-ответах и ответах конкурентов.",
      tags: ["ChatGPT", "Яндекс Нейро"],
      accent: true,
    },
    {
      eyebrow: "СУЩНОСТИ",
      title: "Entity Mapping",
      muted: "сущностей",
      code: "ENT",
      text: "Карта: бренд, услуги, отрасли, авторы, экспертиза и кейсы.",
      tags: ["Сущности", "Граф"],
      accent: false,
    },
    {
      eyebrow: "РАЗМЕТКА",
      title: "Schema.org",
      muted: "типов",
      code: "SCH",
      text: "Service, Organization, FAQPage, Article и связанные типы.",
      tags: ["Структура", "SEO"],
      accent: false,
    },
    {
      eyebrow: "КОНТЕНТ",
      title: "Answer-first Content",
      muted: "форматов",
      code: "ANS",
      text: "Блоки с прямыми ответами: определения, FAQ, сравнения, критерии.",
      tags: ["Ответы", "AEO"],
      accent: false,
    },
    {
      eyebrow: "АНАЛИЗ",
      title: "Content Gap Analysis",
      muted: "пробелов",
      code: "GAP",
      text: "Находим вопросы конкурентов, на которые вы ещё не отвечаете.",
      tags: ["Конкуренты", "Контент"],
      accent: false,
    },
    {
      eyebrow: "КОНТРОЛЬ",
      title: "SEO Control",
      muted: "метрик",
      code: "SEO",
      text: "AEO-правки усиливают, а не ломают классическое SEO и конверсию.",
      tags: ["SEO", "Аналитика"],
      accent: false,
    },
  ],
};
