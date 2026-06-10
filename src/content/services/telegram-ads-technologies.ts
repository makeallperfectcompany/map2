import type { TechnologiesContent } from "@/components/sections/HomeTechnologiesSection";
import { telegramAdsContent } from "./telegramAds";

export const telegramAdsServiceTechnologies: TechnologiesContent = {
  label: "Что входит в услугу",
  title: telegramAdsContent.services.h2,
  description: telegramAdsContent.services.description,
  stats: [
    {
      value: "6",
      label: "этапов",
      text: "работы — от стратегии до масштабирования",
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
      title: "Стратегия и аудит",
      muted: "перед запуском кампаний",
      code: "01",
      text: telegramAdsContent.services.cards[0].description,
      tags: ["Аудит", "Стратегия", "KPI"],
      accent: true,
    },
    {
      eyebrow: "ТАРГЕТИНГ",
      title: "Настройка Telegram Ads",
      muted: "точные каналы и аудитории",
      code: "02",
      text: telegramAdsContent.services.cards[1].description,
      tags: ["Каналы", "Темы", "Таргетинг"],
      accent: false,
    },
    {
      eyebrow: "КРЕАТИВЫ",
      title: "Креативы для Telegram",
      muted: "тексты и визуалы для объявлений",
      code: "03",
      text: telegramAdsContent.services.cards[2].description,
      tags: ["Тексты", "Визуалы", "A/B"],
      accent: false,
    },
    {
      eyebrow: "ЗАПУСК",
      title: "Запуск и модерация",
      muted: "контроль прохождения модерации",
      code: "04",
      text: telegramAdsContent.services.cards[3].description,
      tags: ["Запуск", "Модерация", "Контроль"],
      accent: false,
    },
    {
      eyebrow: "ОПТИМИЗАЦИЯ",
      title: "Оптимизация и масштабирование",
      muted: "рост рентабельности кампаний",
      code: "05",
      text: telegramAdsContent.services.cards[4].description,
      tags: ["CPL", "CPS", "Масштаб"],
      accent: false,
    },
    {
      eyebrow: "ОТЧЁТНОСТЬ",
      title: "Аналитика и отчёты",
      muted: "бизнес-показатели в реальном времени",
      code: "06",
      text: telegramAdsContent.services.cards[5].description,
      tags: ["ROMI", "CPL", "Analytics"],
      accent: false,
    },
  ],
};
