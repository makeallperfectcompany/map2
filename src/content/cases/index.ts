import { wildberriesExternalTrafficCase } from "./wildberries-external-traffic";
import { ecommerceSeoUxCase } from "./ecommerce-seo-ux";
import { clinicSeoAdsUxCase } from "./clinic-seo-ads-ux";

export const cases = [
  wildberriesExternalTrafficCase,
  ecommerceSeoUxCase,
  clinicSeoAdsUxCase,
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}
