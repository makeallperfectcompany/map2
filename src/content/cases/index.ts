import { wildberriesExternalTrafficCase } from "./wildberries-external-traffic";
import { ecommerceSeoUxCase } from "./ecommerce-seo-ux";
import { clinicSeoAdsUxCase } from "./clinic-seo-ads-ux";
import { wildberriesExternalAdsClothingCase } from "./wildberries-external-ads-clothing";

export const cases = [
  wildberriesExternalAdsClothingCase,
  wildberriesExternalTrafficCase,
  ecommerceSeoUxCase,
  clinicSeoAdsUxCase,
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}
