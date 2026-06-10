import type { TechnologiesContent } from "@/components/sections/HomeTechnologiesSection";
import { vkAdsContent } from "./vkAds";

export const vkAdsServiceTechnologies: TechnologiesContent = {
  label: vkAdsContent.services.eyebrow,
  title: vkAdsContent.services.title,
  description: vkAdsContent.services.description,
  stats: [
    {
      value: "6",
      label: "этапов",
      text: "работы — от аналитики до масштабирования",
    },
    {
      value: "100%",
      label: "прозрачность",
      text: "отчётности по каждому рублю бюджета",
    },
    {
      value: "24/7",
      label: "контроль",
      text: "кампаний и оперативная оптимизация",
    },
  ],
  cards: [
    {
      eyebrow: "АНАЛИТИКА И СТРАТЕГИЯ",
      title: "Глубокая аналитика",
      muted: "перед запуском кампаний",
      code: "01",
      text: vkAdsContent.services.cards[0].text,
      tags: ["Анализ", "Стратегия", "KPI"],
      accent: true,
    },
    {
      eyebrow: "ТАРГЕТИНГ",
      title: "Хирургически точный таргетинг",
      muted: "сегменты и аудитории",
      code: "02",
      text: vkAdsContent.services.cards[1].text,
      tags: ["Look-a-like", "Ретаргетинг", "CRM"],
      accent: false,
    },
    {
      eyebrow: "КРЕАТИВЫ",
      title: "Продающие креативы",
      muted: "визуалы и тексты",
      code: "03",
      text: vkAdsContent.services.cards[2].text,
      tags: ["Дизайн", "Тексты", "A/B"],
      accent: false,
    },
    {
      eyebrow: "ЗАПУСК",
      title: "Бесшовный запуск",
      muted: "с контролем модерации",
      code: "04",
      text: vkAdsContent.services.cards[3].text,
      tags: ["Запуск", "Модерация", "Пиксель"],
      accent: false,
    },
    {
      eyebrow: "ОПТИМИЗАЦИЯ",
      title: "Интеллектуальная оптимизация",
      muted: "бюджета в реальном времени",
      code: "05",
      text: vkAdsContent.services.cards[4].text,
      tags: ["Бюджет", "Аналитика", "Рост"],
      accent: false,
    },
    {
      eyebrow: "ОТЧЁТНОСТЬ",
      title: "Отчётность для бизнеса",
      muted: "языком цифр и KPI",
      code: "06",
      text: vkAdsContent.services.cards[5].text,
      tags: ["CPL", "CAC", "ROMI"],
      accent: false,
    },
  ],
};
