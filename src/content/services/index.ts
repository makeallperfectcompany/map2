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
    eyebrow: "Трафик и заявки",
    title: "Контекстная и таргетированная реклама",
    mutedTitle: "с контролем ROMI",
    bigMark: "+",
    description:
      "Запускаем и оптимизируем Яндекс Директ, VK, Google Ads, Avito, Telegram Ads и таргет под продажи.",
    price: "от 50 000 ₽",
    cta: "Подробнее",
    href: "/services/reklama",
    featured: true,
    services: [
      "Контекстная реклама",
      "Яндекс Директ",
      "Google Ads",
      "Таргетированная реклама",
      "ВКонтакте",
      "Avito",
      "Telegram Ads",
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
      "SEO",
      "Локальное SEO‑продвижение",
      "SEO-продвижение в Google",
      "SEO-продвижение в Яндекс",
      "Комплексный SEO аудит сайта",
      "SEO-копирайтинг",
      "GEO",
      "AEO",
    ],
  },
  {
    eyebrow: "Digital-платформа",
    title: "Создание и разработка сайтов",
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
      "React (JavaScript)",
      "WordPress",
      "Tilda",
      "ModX",
      "Редизайн и доработка сайтов",
    ],
  },
  {
    eyebrow: "Маркетплейсы",
    title: "Wildberries, Ozon и внешний трафик",
    mutedTitle: "для роста продаж",
    bigMark: "MP",
    description:
      "Усиливаем карточки, внутреннюю и внешнюю рекламу на маркетплейсах, чтобы расти не только в рекламе, но и в органике.",
    price: "от 70 000 ₽",
    cta: "Подробнее",
    href: "/services/marketplaces",
    services: [
      "Продвижение на маркетплейсах",
      "Внутренняя реклама для маркетплейсов",
      "Внешняя реклама для Wildberries",
      "Внешняя реклама для Ozon",
      "Создание и оптимизация карточек товаров",
    ],
  },
  {
    eyebrow: "Репутация",
    title: "Репутация и PR",
    mutedTitle: "для доверия к бренду",
    bigMark: "PR",
    description:
      "Формируем поисковый имидж, работаем с отзывами, публикациями в СМИ, репутационными рисками и публичным образом.",
    price: "от 50 000 ₽",
    cta: "Подробнее",
    href: "/services/online-reputation",
    services: [
      "Онлайн-репутация и PR",
      "Публикации в СМИ",
      "Имидж в сети (ORM)",
      "Поисковый имидж (SERM)",
    ],
  },
  {
    eyebrow: "Retention",
    title: "Email, CRM и автоворонки",
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
      "Автоворонки и чат-боты",
    ],
  },
  {
    eyebrow: "Контент и соцсети",
    title: "SMM, контент и инфлюенсеры",
    mutedTitle: "для сильной упаковки",
    bigMark: "SMM",
    description:
      "Упаковываем бренд через соцсети, YouTube, имиджевые видео, экспертный контент и регулярные касания с аудиторией.",
    price: "от 60 000 ₽",
    cta: "Подробнее",
    href: "/services/smm",
    services: [
      "SMM-продвижение",
      "Инфлюенс-маркетинг",
      "Посевы",
      "Имиджевые видео для брендов",
    ],
  },
  {
    eyebrow: "Аналитика и прочее",
    title: "Аудит, консалтинг и DOOH",
    mutedTitle: "чтобы видеть полную картину",
    bigMark: "&",
    description:
      "Проводим аудит маркетинга, консультируем по стратегии и запускаем наружную цифровую рекламу (DOOH) для охвата.",
    price: "от 40 000 ₽",
    cta: "Подробнее",
    href: "/services/consulting",
    services: [
      "Маркетинговый аудит",
      "Маркетинговый консалтинг",
      "Создание и разработка ИИ-агентов",
      "Наружная цифровая реклама (DOOH)",
    ],
  },
] as const;

// ── 4 карточки для главной (ТЗ от 21.05.2026) ──
export type HomeServiceCard = {
  readonly badgeLabel: string;
  readonly abbreviation: "ADS" | "SEO" | "WEB" | "MP";
  readonly accentColor: string;
  readonly title: string;
  readonly mutedTitle: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly price: string;
  readonly cta: string;
  readonly href: string;
};

export const homeServiceCards: readonly HomeServiceCard[] = [
  {
    badgeLabel: "Трафик",
    abbreviation: "ADS",
    accentColor: "#6FB7FF",
    title: "Контекстная и таргетированная реклама",
    mutedTitle: "с контролем ROMI",
    description:
      "Запускаем и оптимизируем Яндекс Директ, VK, Google Ads, Avito, Telegram Ads и таргет под продажи.",
    tags: [
      "Контекстная реклама",
      "Яндекс Директ",
      "Google Ads",
      "Таргетированная реклама",
      "Telegram Ads",
    ],
    price: "от 50 000 ₽",
    cta: "Подробнее",
    href: "/services/reklama",
  },
  {
    badgeLabel: "Органика",
    abbreviation: "SEO",
    accentColor: "#30D158",
    title: "SEO и поисковая видимость",
    mutedTitle: "в Яндексе, Google и AI",
    description:
      "Улучшаем структуру, контент, скорость, индексацию и конверсию сайта, чтобы органика работала как долгосрочный актив.",
    tags: [
      "SEO",
      "Локальное SEO‑продвижение",
      "SEO в Google",
      "SEO в Яндекс",
      "SEO аудит сайта",
    ],
    price: "от 80 000 ₽",
    cta: "Подробнее",
    href: "/services/seo",
  },
  {
    badgeLabel: "Платформа",
    abbreviation: "WEB",
    accentColor: "#FF9F0A",
    title: "Создание и разработка сайтов",
    mutedTitle: "под задачи бизнеса",
    description:
      "Создаём сайты, лендинги, интерфейсы и AI-инструменты, которые поддерживают рекламу, SEO, аналитику и продажи.",
    tags: [
      "Создание сайтов",
      "React (JavaScript)",
      "WordPress",
      "Tilda",
      "Редизайн сайтов",
    ],
    price: "от 120 000 ₽",
    cta: "Подробнее",
    href: "/services/sozdanie-saytov",
  },
  {
    badgeLabel: "Маркетплейсы",
    abbreviation: "MP",
    accentColor: "#FF453A",
    title: "Wildberries, Ozon и внешний трафик",
    mutedTitle: "для роста продаж",
    description:
      "Усиливаем карточки, внутреннюю и внешнюю рекламу на маркетплейсах, чтобы расти не только в рекламе, но и в органике.",
    tags: [
      "Продвижение на маркетплейсах",
      "Внутренняя реклама",
      "Внешняя реклама WB",
      "Внешняя реклама Ozon",
      "Карточки товаров",
    ],
    price: "от 70 000 ₽",
    cta: "Подробнее",
    href: "/services/marketplaces",
  },
] as const;

export type { ServiceGroup };
export const serviceGroups = RAW_GROUPS as readonly ServiceGroup[];
