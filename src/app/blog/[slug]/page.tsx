import { notFound } from "next/navigation";
import ArticleTemplate from "@/components/content/ArticleTemplate";
import { articles } from "@/content/articles";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return <ArticleTemplate article={article} />;
}
