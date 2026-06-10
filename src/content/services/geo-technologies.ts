const raw = [
  { title: "AI Visibility Audit", muted: "видимость в ответах", code: "AI", text: "Проверяем, как бренд представлен в AI-ответах, поиске, внешних источниках и конкурентном окружении.", tags: ["Запросы", "Ответы", "Конкуренты"], accent: true },
  { title: "AEO Structure", muted: "контент для ответов", code: "AEO", text: "Готовим страницы к формату коротких ответов: FAQ, определения, сравнения, таблицы и ясные смысловые блоки.", tags: ["FAQ", "Сравнения", "Ответы"], accent: false },
  { title: "Entity SEO", muted: "сущности бренда", code: "ENT", text: "Усиливаем сущности бренда: кто вы, чем занимаетесь, в каких нишах работаете и почему вам можно доверять.", tags: ["Бренд", "Ниши", "Доверие"], accent: false },
  { title: "Schema Markup", muted: "структурированные данные", code: "SCH", text: "Добавляем структурированные данные там, где они помогают поисковым системам и AI лучше понимать страницу.", tags: ["Service", "FAQ", "Organization"], accent: false },
  { title: "Content Intelligence", muted: "темы и форматы", code: "CNT", text: "Находим темы, вопросы и форматы, которые чаще используются в выдаче, обзорах и AI-сценариях.", tags: ["Темы", "Интент", "Форматы"], accent: false },
  { title: "Reputation Signals", muted: "внешнее доверие", code: "REP", text: "Усиливаем отзывы, внешние профили, экспертные публикации и другие подтверждения надёжности бренда.", tags: ["Отзывы", "PR", "Профили"], accent: false },
];

export const geoTechnologies = {
  label: "Технологии",
  title: "Технологии и подходы, которые помогают управлять AI-видимостью",
  description: "Соединяем SEO, AEO, контентную аналитику, внешние источники и репутационные сигналы в единую систему GEO-продвижения.",
  stats: [
    { value: "AI", label: "AI Visibility Audit", text: "Видимость в ответах" },
    { value: "AEO", label: "AEO Structure", text: "Контент для ответов" },
    { value: "REP", label: "Reputation Signals", text: "Внешнее доверие" },
  ],
  cards: raw.map((item, i) => ({
    id: `geo-tech-${i}`,
    eyebrow: item.code,
    title: item.title,
    muted: item.muted,
    code: item.code,
    text: item.text,
    tags: item.tags,
    accent: item.accent,
  })),
};
