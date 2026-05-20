type ServiceGroup = {
  readonly eyebrow: string;
  readonly title: string;
  readonly mutedTitle: string;
  readonly bigMark: string;
  readonly description: string;
  readonly price: string;
  readonly cta: string;
  readonly href: string;
  readonly featured?: boolean;
  readonly services: readonly string[];
};

const RAW_GROUPS = [
  {
    eyebrow: "Комплексный рост",
    title: "Маркетинг полного цикла",
    mutedTitle: "от стратегии до продаж",
    bigMark: "360°",
    description:
      "Собираем стратегию, дизайн, рекламу, контент, SEO и аналитику в единую систему роста, а не в набор разрозненных подрядчиков.",
    price: "Индивидуально",
    cta: "Обсудить систему",
    href: "/contacts",
    featured: true,
    services: [
      "Маркетинговый аудит",
      "Маркетинговый консалтинг",
      "Стратегия продвижения",
      "Аналитика каналов",
      "План роста",
    ],
  },
  {
    eyebrow: "Трафик и заявки",
    title: "Performance-реклама",
    mutedTitle: "с контролем ROMI",
    bigMark: "+",
    description:
      "Запускаем и оптимизируем Яндекс Директ, VK, Promo Pages, посевы, ретаргетинг и внешние связки под продажи.",
    price: "от 50 000 ₽",
    cta: "Подробнее",
    href: "/services/reklama",
    services: [
      "Контекстная реклама",
      "Яндекс Директ",
      "Google Ads",
      "ВКонтакте",
      "Avito",
      "Telegram Ads",
      "Посевы",
      "Инфлюенс-маркетинг",
      "Наружная digital",
    ],
  },
  {
    eyebrow: "Органический рост",
    title: "SEO и поисковая видимость",
    mutedTitle: "в Яндексе, Google и AI",
    bigMark: "SEO",
    description:
      "Улучшаем структуру, контент, скорость, индексацию и конверсию сайта, чтобы органика работала как долгосрочный актив.",
    price: "от 80 000 ₽",
    cta: "Подробнее",
    href: "/services/seo",
    services: [
      "SEO-продвижение",
      "Локальное SEO",
      "SEO в Яндекс",
      "SEO в Google",
      "SEO-аудит",
      "SEO-копирайтинг",
      "GEO",
      "AEO",
    ],
  },
  {
    eyebrow: "Digital-платформа",
    title: "Сайты, UX/UI и разработка",
    mutedTitle: "под задачи бизнеса",
    bigMark: "WEB",
    description:
      "Создаём сайты, лендинги, интерфейсы и AI-инструменты, которые поддерживают рекламу, SEO, аналитику и продажи.",
    price: "от 120 000 ₽",
    cta: "Подробнее",
    href: "/services/sozdanie-saytov",
    services: [
      "Создание сайтов",
      "Яндекс Кит",
      "JavaScript",
      "WordPress",
      "Tilda",
      "ModX",
      "Редизайн",
      "ИИ-агенты",
    ],
  },
  {
    eyebrow: "Маркетплейсы",
    title: "WB, Ozon и внешний трафик",
    mutedTitle: "для роста продаж",
    bigMark: "MP",
    description:
      "Усиливаем карточки, внешний трафик и рекламные связки на маркетплейсах, чтобы расти не только в рекламе, но и в органике.",
    price: "от 70 000 ₽",
    cta: "Подробнее",
    href: "/services/marketplaces",
    services: [
      "Внешний трафик",
      "Wildberries",
      "Ozon",
      "Карточки товаров",
      "Оптимизация карточек",
    ],
  },
  {
    eyebrow: "Контент и доверие",
    title: "SMM, контент и видео",
    mutedTitle: "для сильной упаковки",
    bigMark: "SMM",
    description:
      "Упаковываем бренд через соцсети, YouTube, имиджевые видео, экспертный контент и регулярные касания с аудиторией.",
    price: "от 60 000 ₽",
    cta: "Подробнее",
    href: "/services/smm",
    services: [
      "SMM-продвижение",
      "Имиджевые видео",
      "YouTube",
      "Контент",
      "Экспертная упаковка",
    ],
  },
  {
    eyebrow: "Retention",
    title: "CRM, email и автоворонки",
    mutedTitle: "после первого касания",
    bigMark: "CRM",
    description:
      "Выстраиваем повторные касания, прогрев, email-цепочки, CRM-механику и автоворонки для повторных продаж.",
    price: "от 60 000 ₽",
    cta: "Подробнее",
    href: "/services/crm-marketing",
    services: [
      "Email-маркетинг",
      "CRM-маркетинг",
      "Автоворонки",
      "Сегментация базы",
      "Прогревающие цепочки",
    ],
  },
  {
    eyebrow: "Репутация",
    title: "ORM, SERM и PR",
    mutedTitle: "для доверия к бренду",
    bigMark: "PR",
    description:
      "Формируем поисковый имидж, работаем с отзывами, публикациями в СМИ, репутационными рисками и публичным образом.",
    price: "от 50 000 ₽",
    cta: "Подробнее",
    href: "/services/online-reputation",
    services: [
      "Онлайн-репутация",
      "Публикации в СМИ",
      "ORM",
      "SERM",
      "Отзывы",
    ],
  },
] as const;

export type { ServiceGroup };
export const serviceGroups = RAW_GROUPS as readonly ServiceGroup[];
