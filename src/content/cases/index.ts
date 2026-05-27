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
import { cleaningLeadsCase } from "./cleaning-leads";
import { babyShopCase } from "./baby-shop";
import { jewelrySalesCase } from "./jewelry-sales";
import { mobileGameCase } from "./mobile-game";
import { travelAgencyCase } from "./travel-agency";
import { autoServiceCase } from "./auto-service";
import { hrServiceCase } from "./hr-service";
import { coffeeTeaCase } from "./coffee-tea";
import { autoDealerCase } from "./auto-dealer";
import { moscowCleaningCase } from "./moscow-cleaning";
import { medicalClinicCase } from "./medical-clinic";
import { foodDeliveryCase } from "./food-delivery";
import { collegeAdmissionsCase } from "./college-admissions";
import { customShoesCase } from "./custom-shoes";
import { cosmeticsPromoPageCase } from "./cosmetics-promo-page";
import { wb31mlnCase } from "./wb-31mln";
import { wbRoi435Case } from "./wb-roi-435";
import { aestheticClinicCase } from "./aesthetic-clinic";
import { logisticsCase } from "./logistics";
import { homeGoodsCase } from "./home-goods";
// import { fashionWbCase } from "./fashion-wb";
import { wb122Case } from "./wb-122";
import { growth87Case } from "./growth-87";
import { emailFashionCase } from "./email-fashion";
import { wbBagsCase } from "./wb-bags";
import { zhkMoscowCase } from "./zhk-moscow";

export const cases: CaseItem[] = [
  // ▸ Страница 1 (page=1) — самые верхние на makeallperfect.ru
  wildberriesFashionGrowthCase,
  wb122Case,
  growth87Case,
  emailFashionCase,
  wbBagsCase,
  zhkMoscowCase,

  // ▸ Страница 2 (page=2)
  cosmeticsPromoPageCase,
  wb31mlnCase,
  wbRoi435Case,
  aestheticClinicCase,
  logisticsCase,
  homeGoodsCase,

  // ▸ Страница 3 (page=3)
  autoDealerCase,
  moscowCleaningCase,
  medicalClinicCase,
  foodDeliveryCase,
  collegeAdmissionsCase,
  customShoesCase,

  // ▸ Страница 4 (page=4)
  cleaningLeadsCase,
  babyShopCase,
  jewelrySalesCase,
  mobileGameCase,
  travelAgencyCase,
  autoServiceCase,

  // ▸ Страница 5 (page=5)
  realEstateLeadsCase,
  insuranceCplCase,
  languageSchoolCase,
  aiManufacturingCase,
  fpvExcursionsCase,
  designStudioSiteCase,

  // ▸ Страница 6 (page=6)
  eliteLandPlotsCase,
  confectioneryKrasnodarCase,
  udestroyRageRoomCase,
  dentalClinicCase,
  karelskiyDomCase,
  furnitureMoscowCase,

  // ▸ Страница 7 (page=7)
  taxOptimizationCase,
  wildberriesWomenClothingCase,
  frontendSchoolLeadsCase,
  hrServiceCase,
  coffeeTeaCase,
  clothingBrandSeoVkCase,
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return cases.find((item) => item.slug === slug);
}
