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
import { wildberriesWomenClothingCase } from "./wildberries-women-clothing";
import { frontendSchoolLeadsCase } from "./frontend-school-leads";
import { taxOptimizationCase } from "./tax-optimization-usn";
import { karelskiyDomCase } from "./karelskiy-dom-construction";
import { dentalClinicCase } from "./dental-clinic-spb";
import { udestroyRageRoomCase } from "./udestroy-rage-room";
import { confectioneryKrasnodarCase } from "./confectionery-krasnodar";
import { eliteLandPlotsCase } from "./elite-land-plots-spb";
import { realEstateLeadsCase } from "./real-estate-leads";
import { insuranceCplCase } from "./insurance-cpl";
import { languageSchoolCase } from "./language-school";
import { aiManufacturingCase } from "./ai-manufacturing";
import { fpvExcursionsCase } from "./fpv-excursions";
import { designStudioSiteCase } from "./design-studio-site";
import { furnitureMoscowCase } from "./furniture-moscow";

export const cases: CaseItem[] = [
  realEstateLeadsCase,
  insuranceCplCase,
  languageSchoolCase,
  aiManufacturingCase,
  eliteLandPlotsCase,
  karelskiyDomCase,
  dentalClinicCase,
  frontendSchoolLeadsCase,
  taxOptimizationCase,
  confectioneryKrasnodarCase,
  udestroyRageRoomCase,
  wildberriesWomenClothingCase,
  wildberriesFashionGrowthCase,
  clothingBrandSeoVkCase,
  fpvExcursionsCase,
  designStudioSiteCase,
  furnitureMoscowCase,
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return cases.find((item) => item.slug === slug);
}
