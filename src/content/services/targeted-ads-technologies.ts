import type { TechnologiesContent } from "@/components/sections/HomeTechnologiesSection";
import { targetedAdvertisingContent } from "./targetedAdvertising";

export const targetedAdsServiceTechnologies: TechnologiesContent = {
  label: targetedAdvertisingContent.service.eyebrow,
  title: targetedAdvertisingContent.service.title,
  description: targetedAdvertisingContent.service.description,
  stats: [
    {
      value: "6",
      label: "направлений",
      text: "работы — от стратегии до аналитики",
    },
    {
      value: "100%",
      label: "прозрачность",
      text: "каждый рубль бюджета под контролем",
    },
    {
      value: "ROMI",
      label: "метрика",
      text: "оптимизация по реальным обращениям бизнеса",
    },
  ],
  cards: [
    {
      eyebrow: "АНАЛИЗ И СТРАТЕГИЯ",
      title: "Анализ и стратегия",
      muted: "до расхода бюджета",
      code: "01",
      text: targetedAdvertisingContent.service.cards[0].text,
      tags: ["Анализ", "Стратегия", "KPI"],
      accent: true,
    },
    {
      eyebrow: "СЕГМЕНТЫ",
      title: "Сегменты и сценарии",
      muted: "путь пользователя к заявке",
      code: "02",
      text: targetedAdvertisingContent.service.cards[1].text,
      tags: ["Сегменты", "Воронка", "Конверсия"],
      accent: false,
    },
    {
      eyebrow: "КРЕАТИВЫ",
      title: "Объявления и креативы",
      muted: "визуал и текст под мотивы",
      code: "03",
      text: targetedAdvertisingContent.service.cards[2].text,
      tags: ["Дизайн", "Тексты", "Гипотезы"],
      accent: false,
    },
    {
      eyebrow: "ЗАПУСК",
      title: "Настройка и запуск",
      muted: "с контролем событий",
      code: "04",
      text: targetedAdvertisingContent.service.cards[3].text,
      tags: ["Настройка", "Пиксель", "Модерация"],
      accent: false,
    },
    {
      eyebrow: "ОПТИМИЗАЦИЯ",
      title: "Оптимизация",
      muted: "снижаем стоимость заявки",
      code: "05",
      text: targetedAdvertisingContent.service.cards[4].text,
      tags: ["CPL", "Бюджет", "Рост"],
      accent: false,
    },
    {
      eyebrow: "АНАЛИТИКА",
      title: "Аналитика и отчётность",
      muted: "язык цифр и обращений",
      code: "06",
      text: targetedAdvertisingContent.service.cards[5].text,
      tags: ["Отчёт", "ROMI", "Решения"],
      accent: false,
    },
  ],
};
