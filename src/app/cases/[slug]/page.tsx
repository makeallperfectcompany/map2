import { notFound } from "next/navigation";
import CaseTemplate from "@/components/content/CaseTemplate";
import { cases, getCaseBySlug } from "@/content/cases";

export function generateStaticParams() {
  return cases.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: item.seoTitle,
    description: item.description,
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
