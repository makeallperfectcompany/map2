import type { TechnologiesContent } from "@/components/sections/HomeTechnologiesSection";

export const googleSeoTechnologies: TechnologiesContent = {
  label: "Технологии",
  title: "Технологии и аналитика, которые делают продвижение в Google управляемым",
  description:
    "Опираемся не на догадки, а на данные: индексацию, техническое состояние сайта, качество страниц, поведение пользователей, позиции, заявки и влияние SEO на выручку.",
  stats: [
    { value: "Индексация", label: "Search Console", text: "Контроль сканирования и ошибок" },
    { value: "Техника", label: "Core Web Vitals", text: "Скорость и пользовательский опыт" },
    { value: "Структура", label: "Content Clusters", text: "Группы страниц под интенты" },
  ],
  cards: [
    {
      eyebrow: "GSC",
      title: "Search Console",
      muted: "индексация",
      code: "GSC",
      text: "Контроль индексации, ошибок сканирования, запросов, кликов и показов.",
      tags: ["Индексация"],
      accent: true,
    },
    {
      eyebrow: "TS",
      title: "Technical SEO",
      muted: "техника",
      code: "TS",
      text: "robots.txt, sitemap, canonical, редиректы, статусы страниц, дубли, скорость, мобильная версия.",
      tags: ["Техника"],
      accent: false,
    },
    {
      eyebrow: "CWV",
      title: "Core Web Vitals",
      muted: "скорость",
      code: "CWV",
      text: "Скорость, стабильность интерфейса и пользовательский опыт на ключевых страницах.",
      tags: ["Скорость"],
      accent: true,
    },
    {
      eyebrow: "SCH",
      title: "Schema (микроразметка)",
      muted: "разметка",
      code: "SCH",
      text: "Структурированные данные, которые помогают Google точнее понимать страницу.",
      tags: ["Разметка"],
      accent: false,
    },
    {
      eyebrow: "CC",
      title: "Content Clusters",
      muted: "структура",
      code: "CC",
      text: "Группы страниц под коммерческие, информационные и сравнительные запросы.",
      tags: ["Структура"],
      accent: false,
    },
    {
      eyebrow: "ANL",
      title: "Analytics",
      muted: "аналитика",
      code: "ANL",
      text: "Связываем SEO-метрики с заявками, формами, звонками и продажами.",
      tags: ["Аналитика"],
      accent: false,
    },
  ],
};
