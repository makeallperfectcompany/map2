import ArticleTemplate from "@/components/content/ArticleTemplate";
import { testArticle } from "@/content/articles/test-article";

export const metadata = {
  title: testArticle.seoTitle,
  description: testArticle.description,
};

export default function ArticlePage() {
  return <ArticleTemplate article={testArticle} />;
}
