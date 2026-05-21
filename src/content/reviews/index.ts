export type ReviewItem =
  | {
      featured?: boolean;
      type: "review";
      id: string;
      name: string;
      role: string;
      rating: number;
      text: string;
      avatar: string;
      category: string;
      date?: string;
      source?: string;
      relatedCaseUrl?: string;
    }
  | {
      featured?: boolean;
      type: "letter";
      id: string;
      title: string;
      name: string;
      role: string;
      text?: string;
      preview: string;
      file?: string;
      category: string;
      date?: string;
      source?: string;
      relatedCaseUrl?: string;
    };

export const reviews: ReviewItem[] = [
  {
    type: "review",
    id: "ivan-nazarov",
    featured: true,
    name: "Иван Назаров",
    role: "Генеральный директор компании",
    rating: 5,
    text:
      "Работа с маркетинговым агентством превзошла все наши ожидания. Команда быстро разобралась в задаче, предложила понятную стратегию и помогла системно усилить продвижение.",
    avatar: "/assets/reviews/ivan-nazarov.webp",
    source: "makeallperfect.ru/reviews",
    category: "Комплексный маркетинг",
    date: "2026",
  },
  {
    type: "review",
    id: "aleksandr-smirnov",
    featured: true,
    name: "Александр Смирнов",
    role: "Собственник сети стоматологических клиник",
    rating: 5,
    text:
      "Агентство помогло нам значительно увеличить поток пациентов и навести порядок в рекламе. Отдельно отмечу прозрачные отчёты и понимание медицинской ниши.",
    avatar: "/assets/reviews/aleksandr-smirnov.webp",
    source: "makeallperfect.ru/reviews",
    category: "Медицина",
    date: "2026",
    relatedCaseUrl: "/cases/clinic-seo-ads-ux",
  },
  {
    type: "letter",
    id: "letter-marketplaces",
    title: "Благодарственное письмо за продвижение на маркетплейсах",
    name: "Проект в нише одежды",
    role: "Благодарственное письмо",
    text:
      "Подтверждение работы по продвижению карточек, внешней рекламе и аналитике продаж на Wildberries.",
    preview: "/assets/reviews/letters/letter-placeholder-01.webp",
    category: "Маркетплейсы",
    date: "2026",
    source: "temporary-placeholder",
    relatedCaseUrl: "/cases/wildberries-external-ads-clothing",
  },
  {
    type: "review",
    id: "artem-zhuravlev",
    featured: true,
    name: "Артем Журавлев",
    role: "Генеральный директор ООО «Карельский Дом»",
    rating: 5,
    text:
      "Начали работать с командой после нескольких неудачных попыток с другими подрядчиками. Здесь сразу понравился подход, понятный план и работа с цифрами.",
    avatar: "/assets/reviews/artem-zhuravlev.webp",
    source: "makeallperfect.ru/reviews",
    category: "B2B",
    date: "2026",
  },
  {
    type: "review",
    id: "gennadiy-kuznetsov",
    featured: true,
    name: "Геннадий Кузнецов",
    role: "Владелец компании",
    rating: 5,
    text:
      "Работа с Дмитрием и его командой оказалась очень продуктивной. Нам помогли увидеть слабые места в продвижении, пересобрать рекламную связку и улучшить сайт.",
    avatar: "/assets/reviews/gennadiy-kuznetsov.webp",
    source: "makeallperfect.ru/reviews",
    category: "Реклама и сайт",
    date: "2026",
  },
  {
    type: "review",
    id: "emira-edelweiss",
    featured: true,
    name: "Эмира Эдельвейн",
    role: "Директор по маркетингу",
    rating: 5,
    text:
      "Качнули трафик меньше чем за месяц и быстро показали, какие каналы дают лучший результат. Команда сильная в аналитике и умеет объяснять сложное простым языком.",
    avatar: "/assets/reviews/emira-edelweiss.webp",
    source: "makeallperfect.ru/reviews",
    category: "Performance",
    date: "2026",
  },
  {
    type: "letter",
    id: "letter-seo",
    title: "Благодарственное письмо за SEO и развитие сайта",
    name: "E-commerce проект",
    role: "Благодарственное письмо",
    text:
      "Документальное подтверждение работ по SEO, структуре сайта, посадочным страницам и росту органического трафика.",
    preview: "/assets/reviews/letters/letter-placeholder-02.webp",
    category: "SEO",
    date: "2026",
    source: "temporary-placeholder",
    relatedCaseUrl: "/cases/ecommerce-seo-ux",
  },
  {
    type: "review",
    id: "oleg-sergeev",
    featured: true,
    name: "Олег Сергеев",
    role: "Маркетолог в компании «ЭкоПродукт»",
    rating: 5,
    text:
      "Работа по SEO-продвижению и настройке рекламных кампаний помогла нам получить более стабильный поток обращений. Всё было понятно по приоритетам и отчётам.",
    avatar: "/assets/reviews/oleg-sergeev.webp",
    source: "makeallperfect.ru/reviews",
    category: "SEO и реклама",
    date: "2026",
  },
  {
    type: "review",
    id: "dmitriy-kovalev",
    name: "Дмитрий Ковалёв",
    role: "Основатель LogiTrack",
    rating: 5,
    text:
      "Понравился системный подход и способность предлагать нестандартные решения. Проект запущен успешно и продолжает развиваться.",
    avatar: "/assets/reviews/dmitriy-kovalev.webp",
    category: "Логистика / B2B",
    date: "2026",
  },
  {
    type: "review",
    id: "mariya-lebedeva",
    name: "Мария Лебедева",
    role: "Маркетинг-директор StyleHouse",
    rating: 5,
    text:
      "Работать с Make All Perfect удобно: сроки соблюдаются, решения объясняются, а результат можно увидеть в понятных метриках.",
    avatar: "/assets/reviews/mariya-lebedeva.webp",
    category: "E-commerce",
    date: "2026",
  },
];

export const reviewTabs = [
  { label: "Все", value: "all" },
  { label: "Отзывы", value: "review" },
  { label: "Благодарственные письма", value: "letter" },
] as const;
