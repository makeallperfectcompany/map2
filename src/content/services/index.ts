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
    eyebrow: "ТРАФИК И ЗАЯВКИ",
    title: "Контекстная и таргетированная реклама",
    mutedTitle: "",
    bigMark: "ADS",
    description:
      "Запускаем рекламу там, где ваша аудитория. Управляем ставками и бюджетом — вы видите каждый рубль ROMI.",
    price: "ОТ 50 000 ₽",
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
    eyebrow: "ОРГАНИЧЕСКИЙ РОСТ",
    title: "SEO и поисковая видимость",
    mutedTitle: "в Яндексе и Google",
    bigMark: "SEO",
    description:
      "Выводим в топ Яндекса, Google и AI-поиска. Органика работает на вас 24/7 — без оплаты за каждый клик.",
    price: "ОТ 50 000 ₽",
    cta: "Подробнее",
    href: "/services/seo",
    services: [
      "SEO",
      "Локальное SEO-продвижение",
      "SEO-продвижение в Google",
      "SEO-продвижение в Яндекс",
      "Комплексный SEO аудит сайта",
      "SEO-копирайтинг",
      "GEO",
      "AEO",
    ],
  },
  {
    eyebrow: "РАЗРАБОТКА",
    title: "Создание и разработка сайтов",
    mutedTitle: "под задачи бизнеса",
    bigMark: "WEB",
    description:
      "Проектируем и строим сайты, которые работают в связке с рекламой и SEO. Не просто дизайн — рабочий инструмент продаж.",
    price: "ОТ 70 000 ₽",
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
    eyebrow: "МАРКЕТПЛЕЙСЫ",
    title: "Wildberries, Ozon и внешний трафик",
    mutedTitle: "для роста продаж",
    bigMark: "MP",
    description:
      "Растём на маркетплейсах системно: оптимизируем карточки, запускаем рекламу внутри и приводим внешний трафик.",
    price: "ОТ 50 000 ₽",
    cta: "Подробнее",
    href: "/services/marketplaces",
    services: [
      "Продвижение на маркетплейсах",
      "Внутренняя реклама для маркетплейсов",
      "Внешняя реклама для Wildberries",
      "Внешняя реклама для Ozon",
      "Создание и оптимизация карточек",
    ],
  },
  {
    eyebrow: "РЕПУТАЦИЯ",
    title: "Репутация и PR",
    mutedTitle: "для доверия и лояльности к вашему бренду",
    bigMark: "PR",
    description:
      "Управляем тем, что о вас найдут в сети. Репутация в поиске, СМИ и отзывах — под контролем.",
    price: "ОТ 50 000 ₽",
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
    eyebrow: "УДЕРЖАНИЕ",
    title: "Email, CRM и автоворонки",
    mutedTitle: "после первого касания",
    bigMark: "CRM",
    description:
      "Настраиваем систему повторных продаж. Email, CRM и автоворонки превращают клиента в постоянного.",
    price: "ОТ 40 000 ₽",
    cta: "Подробнее",
    href: "/services/crm-marketing",
    services: [
      "Email-маркетинг",
      "CRM-маркетинг",
      "Автоворонки и чат-боты",
    ],
  },
  {
    eyebrow: "КОНТЕНТ И СОЦСЕТИ",
    title: "SMM, контент и инфлюенсеры",
    mutedTitle: "для сильной упаковки",
    bigMark: "SMM",
    description:
      "Строим присутствие бренда в соцсетях и YouTube. Контент, инфлюенсеры и охваты — в одной системе.",
    price: "ОТ 30 000 ₽",
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
    eyebrow: "АНАЛИТИКА И ПРОЧЕЕ",
    title: "Аудит, консалтинг и DOOH",
    mutedTitle: "чтобы видеть полную картину",
    bigMark: "ANL",
    description:
      "Находим точки роста в вашем маркетинге. Аудит, стратегия и DOOH-реклама — чтобы видеть полную картину.",
    price: "ОТ 40 000 ₽",
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

export type { ServiceGroup };
export const serviceGroups = RAW_GROUPS as readonly ServiceGroup[];
