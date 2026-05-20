import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseTemplate from "@/components/content/CaseTemplate";
import { cases, getCaseBySlug } from "@/content/cases";

const BASE_URL = "https://map2.vercel.app";

export function generateStaticParams() {
  return cases.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    return {};
  }

  const url = `${BASE_URL}${item.url}`;
  const ogImage = item.cover
    ? { url: item.cover, width: 1200, height: 630, alt: item.title }
    : { url: "/og-image.jpg", width: 1200, height: 630, alt: item.title };

  return {
    title: item.seoTitle,
    description: item.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: item.seoTitle,
      description: item.description,
      images: [ogImage],
      publishedTime: item.date,
    },
    twitter: {
      card: "summary_large_image",
      title: item.seoTitle,
      description: item.description,
      images: [ogImage.url],
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return <CaseTemplate item={item} />;
}
