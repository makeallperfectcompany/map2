export type Article = {
  slug: string;
  url: string;
  seoTitle: string;
  description: string;
  category: string;
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

export const articles: Article[] = [
  {
    ...rawTestArticle,
    slug: "test-article",
    url: "/blog/test-article",
  },
];
