export type SiteMapItem = {
  title: string;
  href: string;
  description?: string;
  footer?: boolean;
  sitemap?: boolean;
  priority?: number;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

export type FooterGroup = {
  title: string;
  items: SiteMapItem[];
};

export const SITE_URL = "https://makeallperfect.ru";

export const mainPages: SiteMapItem[] = [
  { title: "Главная", href: "/", footer: false, sitemap: true, priority: 1, changeFrequency: "weekly" },
  { title: "Услуги", href: "/services", footer: true, sitemap: true, priority: 0.9, changeFrequency: "weekly" },
  { title: "Кейсы", href: "/cases", footer: true, sitemap: true, priority: 0.85, changeFrequency: "weekly" },
  { title: "Отзывы", href: "/reviews", footer: true, sitemap: true, priority: 0.75, changeFrequency: "monthly" },
  { title: "Блог", href: "/blog", footer: true, sitemap: true, priority: 0.8, changeFrequency: "weekly" },
  { title: "О нас", href: "/about", footer: true, sitemap: true, priority: 0.7, changeFrequency: "monthly" },
  { title: "Вакансии", href: "/jobs", footer: true, sitemap: true, priority: 0.55, changeFrequency: "monthly" },
  { title: "Партнёрам", href: "/partners", footer: true, sitemap: true, priority: 0.65, changeFrequency: "monthly" },
  { title: "Контакты", href: "/contacts", footer: true, sitemap: true, priority: 0.8, changeFrequency: "monthly" },
];

export const servicePages: SiteMapItem[] = [
  { title: "Контекстная реклама", href: "/services/kontekstnaya-reklama", footer: true, sitemap: true, priority: 0.75, changeFrequency: "monthly" },
  { title: "Яндекс Директ", href: "/services/yandex-direct", footer: true, sitemap: true, priority: 0.72, changeFrequency: "monthly" },
  { title: "Google Ads", href: "/services/google-ads", footer: true, sitemap: true, priority: 0.62, changeFrequency: "monthly" },
  { title: "Таргетированная реклама", href: "/services/targetirovannaya-reklama", footer: true, sitemap: true, priority: 0.75, changeFrequency: "monthly" },
  { title: "ВКонтакте", href: "/services/reklama-vkontakte", footer: true, sitemap: true, priority: 0.72, changeFrequency: "monthly" },
  { title: "Avito", href: "/services/avito", footer: true, sitemap: true, priority: 0.68, changeFrequency: "monthly" },
  { title: "Telegram Ads", href: "/services/telegram-ads", footer: true, sitemap: true, priority: 0.68, changeFrequency: "monthly" },
  { title: "Создание сайтов", href: "/services/sozdanie-saytov", footer: true, sitemap: true, priority: 0.8, changeFrequency: "monthly" },
  { title: "SEO, GEO и AEO", href: "/services/seo", footer: true, sitemap: true, priority: 0.82, changeFrequency: "monthly" },
  { title: "Маркетплейсы", href: "/services/marketplaces", footer: true, sitemap: true, priority: 0.8, changeFrequency: "monthly" },
  { title: "Внешний трафик на маркетплейсы", href: "/services/vneshniy-trafik-na-marketpleysy", footer: true, sitemap: true, priority: 0.82, changeFrequency: "monthly" },
  { title: "SMM и контент", href: "/services/smm", footer: true, sitemap: true, priority: 0.72, changeFrequency: "monthly" },
  { title: "CRM и автоворонки", href: "/services/crm-marketing", footer: true, sitemap: true, priority: 0.68, changeFrequency: "monthly" },
  { title: "ORM, SERM и PR", href: "/services/online-reputation-pr", footer: true, sitemap: true, priority: 0.68, changeFrequency: "monthly" },
];

export const legalPages: SiteMapItem[] = [
  { title: "Политика конфиденциальности", href: "/privacy-policy", footer: true, sitemap: true, priority: 0.35, changeFrequency: "yearly" },
  { title: "Согласие на обработку персональных данных", href: "/personal-data-consent", footer: true, sitemap: true, priority: 0.35, changeFrequency: "yearly" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Компания",
    items: mainPages.filter((item) =>
      ["/about", "/cases", "/reviews", "/blog", "/jobs", "/partners", "/contacts"].includes(item.href)
    ),
  },
  {
    title: "Услуги",
    items: [
      servicePages.find((item) => item.href === "/services/kontekstnaya-reklama")!,
      servicePages.find((item) => item.href === "/services/targetirovannaya-reklama")!,
      servicePages.find((item) => item.href === "/services/sozdanie-saytov")!,
      servicePages.find((item) => item.href === "/services/seo")!,
      servicePages.find((item) => item.href === "/services/marketplaces")!,
      servicePages.find((item) => item.href === "/services/vneshniy-trafik-na-marketpleysy")!,
      servicePages.find((item) => item.href === "/services/smm")!,
      servicePages.find((item) => item.href === "/services/online-reputation-pr")!,
    ],
  },
  {
    title: "Документы",
    items: legalPages,
  },
];

export const allSiteMapItems: SiteMapItem[] = [
  ...mainPages,
  ...servicePages,
  ...legalPages,
];

export function getFooterGroups() {
  return footerGroups.map((group) => ({
    ...group,
    items: group.items.filter((item) => item.footer !== false),
  }));
}

export function getSitemapItems() {
  return allSiteMapItems.filter((item) => item.sitemap !== false);
}
