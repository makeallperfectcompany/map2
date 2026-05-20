export type CaseItem = {
  slug: string;
  url: string;
  category: string;
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  cover: string;
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

import { wildberriesExternalTrafficCase } from "./wildberries-external-traffic";
import { ecommerceSeoUxCase } from "./ecommerce-seo-ux";
import { clinicSeoAdsUxCase } from "./clinic-seo-ads-ux";
import { wildberriesExternalAdsClothingCase } from "./wildberries-external-ads-clothing";

export const cases: CaseItem[] = [
  wildberriesExternalAdsClothingCase,
  wildberriesExternalTrafficCase,
  ecommerceSeoUxCase,
  clinicSeoAdsUxCase,
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return cases.find((item) => item.slug === slug);
}
