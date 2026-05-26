export type CaseItem = {
  slug: string;
  url: string;
  category: string;
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  cover?: string;
  contentType: string;
  tags: string[];
  service: string | null;
  industry: string | null;
  priority: number;
  date: string;
  metrics: Array<{ value: string; label: string }>;
  facts: Array<{ label: string; value: string }>;
  sections: Array<{
    title: string;
    text: string;
    bullets?: string[];
    imageAfter?: {
      src: string;
      alt: string;
      caption?: string;
    };
  }>;
};

import { wildberriesFashionGrowthCase } from "./wildberries-fashion-growth";
import { clothingBrandSeoVkCase } from "./clothing-brand-seo-vk";

export const cases: CaseItem[] = [
  wildberriesFashionGrowthCase,
  clothingBrandSeoVkCase,
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return cases.find((item) => item.slug === slug);
}
