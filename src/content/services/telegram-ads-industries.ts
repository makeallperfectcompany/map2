import type { IndustriesContent } from "@/components/sections/HomeIndustriesSection";
import { telegramAdsContent } from "./telegramAds";

export const telegramAdsIndustries: IndustriesContent = {
  label: "Кому подходит",
  kicker: "Какие задачи решаем",
  title: telegramAdsContent.opportunities.h2,
  description:
    "Telegram Ads — это инструмент для работы с осознанной, платёжеспособной аудиторией. Мы адаптируем стратегию под конкретный бизнес: подбираем каналы, форматы объявлений и KPI, которые влияют на прибыль.",
  bullets: [
    "Знаем специфику Telegram Ads — понимаем, как масштабироваться в вашей нише",
  ],
  mainCard: {
    label: "Опыт в Telegram",
    title: "Приводим клиентов, а не просто подписчиков",
    bullets: [
      "Работаем с каналами, ботами, сайтами и лид-формами",
      "Официальный доступ через партнёрские платформы",
      "Прозрачная отчётность с CPL и ROMI",
    ],
    image: "/images/services/telegram-ads/use-cases-visual.webp",
    stats: [
      { value: "50+", label: "кампаний в Telegram" },
      { value: "10+", label: "ниш на площадке" },
      { value: "1500€+", label: "минимальный порог входа" },
      { value: "30+", label: "специалистов в команде" },
    ],
  },
  extraNiches: [
    "Медицина и здоровье",
    "Образование и курсы",
    "Недвижимость",
    "Финансы и крипто",
    "HoReCa и рестораны",
    "Красота и фитнес",
  ],
  industries: [
    {
      title: telegramAdsContent.opportunities.blocks[0].title,
      text: telegramAdsContent.opportunities.blocks[0].description,
      tags: ["Подписчики", "Комьюнити", "Охват"],
      icon: "/images/home/industries/icon-ecommerce.webp",
    },
    {
      title: telegramAdsContent.opportunities.blocks[1].title,
      text: telegramAdsContent.opportunities.blocks[1].description,
      tags: ["Лиды", "Чат-боты", "Заявки"],
      icon: "/images/home/industries/icon-services.webp",
    },
    {
      title: telegramAdsContent.opportunities.blocks[2].title,
      text: telegramAdsContent.opportunities.blocks[2].description,
      tags: ["E-commerce", "Продажи", "Конверсии"],
      icon: "/images/home/industries/icon-b2b.webp",
    },
    {
      title: telegramAdsContent.opportunities.blocks[3].title,
      text: telegramAdsContent.opportunities.blocks[3].description,
      tags: ["Личный бренд", "Авторитет", "Узнаваемость"],
      icon: "/images/home/industries/icon-marketplace.webp",
    },
  ],
};
