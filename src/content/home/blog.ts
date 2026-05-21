import { articles } from "@/content/articles";

export const homeBlog = {
  label: "Блог",
  title: "Статьи, новости и разборы по маркетингу",
  description:
    "Публикуем практичные материалы о продвижении, рекламе, SEO, аналитике, маркетплейсах и росте бизнеса.",
  cta: {
    label: "Все статьи",
    href: "/blog",
  },
  categories: [
    "Все",
    "Реклама",
    "SEO",
    "Маркетплейсы",
    "Аналитика",
  ],
  posts: articles
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map((article) => ({
      category: article.category || "Блог",
      title: article.title,
      excerpt: article.description,
      href: article.url || `/blog/${article.slug}`,
      date: article.date,
      readTime: article.readingTime,
    })),
} as const;
