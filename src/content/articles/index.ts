export type Article = {
  slug: string;
  url: string;
  seoTitle: string;
  description: string;
  category: string;
  contentType: string;
  tags: string[];
  service: string | null;
  industry: string | null;
  priority: number;
  date: string;
  updatedAt: string;
  readingTime: string;
  author: string;
  authorRole: string;
  title: string;
  cover: string;
  takeaways: string[];
  content: {
    intro: string;
    sections: Array<{
      title: string;
      text: string;
      bullets?: string[];
      imageAfter?: {
        src: string;
        alt: string;
        caption?: string;
      };
      quoteAfter?: boolean;
      ctaAfter?: boolean;
    }>;
  };
  relatedArticles: Array<{
    title: string;
    description: string;
    href: string;
    label: string;
  }>;
  relatedCases: Array<{
    title: string;
    description: string;
    href: string;
    label: string;
  }>;
};

import { testArticle as rawTestArticle } from "./test-article";
import { yandexSearchResultsArticle } from "./vydacha-v-yandekse";
import { longCycleContextAdArticle } from "./kontekstnaya-reklama-dlya-biznesa-s-dlinnym-tsiklom-sdelki";

const buildArticle = (a: Record<string, unknown>): Article => ({
  ...a,
} as Article);

export const articles: Article[] = [
  buildArticle({
    ...rawTestArticle,
    slug: "test-article",
    url: "/blog/test-article",
    tags: rawTestArticle.tags ?? ["Аналитика", "Конверсия", "Продажи"],
    service: rawTestArticle.service ?? null,
    industry: rawTestArticle.industry ?? null,
    priority: rawTestArticle.priority ?? 50,
  }),
  buildArticle(yandexSearchResultsArticle),
  buildArticle({
    ...longCycleContextAdArticle,
    slug: "kontekstnaya-reklama-dlya-biznesa-s-dlinnym-tsiklom-sdelki",
    url: "/blog/kontekstnaya-reklama-dlya-biznesa-s-dlinnym-tsiklom-sdelki",
  }),
];
