import { telegramAdsContent } from "./telegramAds";

export const telegramAdsAdvantages = {
  label: "Преимущества",
  kicker: "Ваш результат — наш главный KPI",
  title: telegramAdsContent.advantages.h2,
  description:
    "Мы не просто запускаем рекламу — мы выстраиваем систему привлечения клиентов через Telegram с прозрачной отчётностью и фокусом на экономику бизнеса.",
  visual: "/images/services/telegram-ads/advantages-visual.webp",
  mainCard: {
    title: "Система вместо разрозненных настроек",
    text:
      "Один подрядчик управляет всей цепочкой: от анализа аудитории и подготовки креативов до оптимизации по CPL и ROMI. Все кампании внутри Telegram Ads работают на единый бизнес-результат.",
  },
  items: [
    {
      title: telegramAdsContent.advantages.cards[0].title,
      text: telegramAdsContent.advantages.cards[0].subtitle,
    },
    {
      title: telegramAdsContent.advantages.cards[1].title,
      text: telegramAdsContent.advantages.cards[1].subtitle,
    },
    {
      title: telegramAdsContent.advantages.cards[2].title,
      text: telegramAdsContent.advantages.cards[2].subtitle,
    },
    {
      title: telegramAdsContent.advantages.cards[3].title,
      text: telegramAdsContent.advantages.cards[3].subtitle,
    },
  ],
} as const;
