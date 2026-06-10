import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleTemplate from "@/components/content/ArticleTemplate";
import { articles } from "@/content/articles";

const BASE_URL = "https://map2.vercel.app";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  const url = `${BASE_URL}${article.url}`;
  const ogImage = article.cover
    ? { url: article.cover, width: 1200, height: 630, alt: article.title }
    : { url: "/og-image.jpg", width: 1200, height: 630, alt: article.title };

  return {
    title: article.seoTitle,
    description: article.seoDescription ?? article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: article.seoTitle,
      description: article.seoDescription ?? article.description,
      images: [ogImage],
      publishedTime: article.date,
      modifiedTime: article.updatedAt,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription ?? article.description,
      images: [ogImage.url],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return <ArticleTemplate article={article} />;
}
