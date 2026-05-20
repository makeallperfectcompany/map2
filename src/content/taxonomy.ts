// ============================================================
// Единая таксономия контента Make All Perfect
// Используется для: фильтров, поиска, тегирования, SEO
// ============================================================

/** Категории контента (для статей) */
export const contentCategories = [
  "SEO",
  "Реклама",
  "Маркетплейсы",
  "SMM",
  "Сайты",
  "Аналитика",
  "Репутация",
  "CRM",
  "PR",
] as const;

/** Категории кейсов */
export const caseCategories = [
  "Маркетплейсы",
  "E-commerce",
  "Медицина",
  "Онлайн-школы",
  "Строительство",
  "B2B",
  "Сайты",
  "SEO",
  "Реклама",
] as const;

/** Отрасли / ниши */
export const industries = [
  "Маркетплейсы",
  "E-commerce",
  "Медицина",
  "Онлайн-школы",
  "Строительство",
  "B2B",
  "Мужская и женская одежда",
  "Товары для дома",
  "Красота и косметика",
] as const;

/** Услуги агентства */
export const services = [
  "SEO-продвижение",
  "Яндекс Директ",
  "Реклама ВКонтакте",
  "Реклама на Avito",
  "Telegram Ads",
  "Внешняя реклама для Wildberries",
  "Внешний трафик для Ozon",
  "Создание сайтов",
  "UX/UI",
  "SMM",
  "ORM/SERM",
  "CRM-маркетинг",
  "Email-маркетинг",
  "PR и публикации в СМИ",
] as const;

/** Теги (детализация) */
export const tags = [
  "Wildberries",
  "Ozon",
  "Яндекс",
  "SEO-аудит",
  "Органическая выдача",
  "Коммерческие факторы",
  "Внешний трафик",
  "Внешняя реклама",
  "Карточки товаров",
  "Конверсия",
  "Заявки",
  "Продажи",
  "Аналитика",
  "Контент",
  "UX",
  "Репутация",
] as const;

// ============================================================
// Вспомогательные типы
// ============================================================

export type ContentCategory = (typeof contentCategories)[number];
export type CaseCategory = (typeof caseCategories)[number];
export type Industry = (typeof industries)[number];
export type Service = (typeof services)[number];
export type Tag = (typeof tags)[number];

/** Базовые поля таксономии для любой единицы контента */
export type TaxonomyFields = {
  contentType: "article" | "case" | "service";
  category: string;
  tags: string[];
  service: string | null;
  industry: string | null;
  priority: number;
};
