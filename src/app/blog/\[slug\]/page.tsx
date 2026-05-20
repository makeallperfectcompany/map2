import { notFound } from "next/navigation";
import ArticleTemplate from "@/components/content/ArticleTemplate";
import { articles } from "@/content/articles";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.description,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleTemplate article={article} />;
}
