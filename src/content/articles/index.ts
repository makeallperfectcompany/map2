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
import { wordpressGuideArticle } from "./sozdat-sayt-na-wordpress-v-2026";
import { marketingToolsArticle } from "./instrumenty-internet-marketinga";
import { influencerMarketingArticle } from "./inflyuens-marketing";
import { getClientsArticle } from "./kak-poluchit-klientov";
import { businessPromotionArticle } from "./prodvizhenie-biznesa";
import { vkTargetingArticle } from "./targetirovannaya-reklama-vk";
import { yandexDirectArticle } from "./yandeks-direkt";
import { wildberriesExternalArticle } from "./vneshnyaya-reklama-wildberries";
import { seo2026Article } from "./seo-v-2026";
import { marketplaceTrafficArticle } from "./vneshniy-trafik-marketpleysov";
import { avitoAdArticle } from "./reklama-na-avito";

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
  buildArticle({
    ...wordpressGuideArticle,
    slug: "sozdat-sayt-na-wordpress-v-2026",
    url: "/blog/sozdat-sayt-na-wordpress-v-2026",
  }),
  buildArticle({
    ...marketingToolsArticle,
    slug: "instrumenty-internet-marketinga",
    url: "/blog/instrumenty-internet-marketinga",
  }),
  buildArticle({
    ...influencerMarketingArticle,
    slug: "inflyuens-marketing",
    url: "/blog/inflyuens-marketing",
  }),
  buildArticle({
    ...getClientsArticle,
    slug: "kak-poluchit-klientov",
    url: "/blog/kak-poluchit-klientov",
  }),
  buildArticle({
    ...businessPromotionArticle,
    slug: "prodvizhenie-biznesa",
    url: "/blog/prodvizhenie-biznesa",
  }),
  buildArticle({
    ...vkTargetingArticle,
    slug: "targetirovannaya-reklama-vk",
    url: "/blog/targetirovannaya-reklama-vk",
  }),
  buildArticle({
    ...yandexDirectArticle,
    slug: "yandeks-direkt",
    url: "/blog/yandeks-direkt",
  }),
  buildArticle({
    ...wildberriesExternalArticle,
    slug: "vneshnyaya-reklama-wildberries",
    url: "/blog/vneshnyaya-reklama-wildberries",
  }),
  buildArticle({
    ...seo2026Article,
    slug: "seo-v-2026",
    url: "/blog/seo-v-2026",
  }),
  buildArticle({
    ...marketplaceTrafficArticle,
    slug: "vneshniy-trafik-marketpleysov",
    url: "/blog/vneshniy-trafik-marketpleysov",
  }),
  buildArticle({
    ...avitoAdArticle,
    slug: "reklama-na-avito",
    url: "/blog/reklama-na-avito",
  }),
];
