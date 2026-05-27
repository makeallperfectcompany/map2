export type Article = {
  slug: string;
  url: string;
  seoTitle: string;
  description: string;
  category: string;
  contentType: string;
  tags: string[];
  service: string | null;
  industry: string | null;
  priority: number;
  date: string;
  updatedAt: string;
  readingTime: string;
  author: string;
  authorRole: string;
  title: string;
  cover: string;
  takeaways: string[];
  content: {
    intro: string;
    sections: Array<{
      title: string;
      text: string;
      bullets?: string[];
      imageAfter?: {
        src: string;
        alt: string;
        caption?: string;
      };
      quoteAfter?: boolean;
      ctaAfter?: boolean;
    }>;
  };
  relatedArticles: Array<{
    title: string;
    description: string;
    href: string;
    label: string;
  }>;
  relatedCases: Array<{
    title: string;
    description: string;
    href: string;
    label: string;
  }>;
};

import { longCycleContextAdArticle } from "./kontekstnaya-reklama-dlya-biznesa-s-dlinnym-tsiklom-sdelki";
import { wordpressGuideArticle } from "./sozdat-sayt-na-wordpress-v-2026";
import { marketingToolsArticle } from "./instrumenty-internet-marketinga";
import { influencerMarketingArticle } from "./inflyuens-marketing";
import { getClientsArticle } from "./kak-poluchit-klientov";
import { businessPromotionArticle } from "./prodvizhenie-biznesa";
import { vkTargetingArticle } from "./targetirovannaya-reklama-vk";
import { yandexDirectArticle } from "./yandeks-direkt";
import { wildberriesExternalArticle } from "./vneshnyaya-reklama-wildberries";
import { seo2026Article } from "./seo-v-2026";
import { marketplaceTrafficArticle } from "./vneshniy-trafik-marketpleysov";
import { avitoAdArticle } from "./reklama-na-avito";
import { b2bContextAds2026Article } from "./kontekstnaya-reklama-v-b2b-2026";
import { emailMarketingArticle } from "./email-marketing";
import { marketplaceBehavioralFactorsArticle } from "./povedencheskie-faktory-marketpleysov";
import { skolkoStoitVneshniyTrafikArticle } from "./skolko-stoit-vneshniy-trafik";
import { gdeZakazatVneshniyTrafikArticle } from "./gde-zakazat-vneshniy-trafik";
import { kakRabotaetReklamaMpArticle } from "./kak-rabotaet-reklama-mp";
import { analyticsExternalTrafficArticle } from "./analitika-vneshnego-trafika";
import { localBusinessGeoArticle } from "./lokalnyy-biznes-geo-servisy";
import { wbSalesWithoutDiscountsArticle } from "./prodazhi-wb-bez-aktsiy";
import { salesDropMarketplaceArticle } from "./pochemu-padayut-prodazhi";
import { externalTrafficWbPositionsArticle } from "./pozitsii-kartochki-wb";
import { growthLimitedExternalTrafficArticle } from "./rost-ogranichen-bez-vneshnego-trafika";
import { rfmAnalysisB2bArticle } from "./rfm-analiz-b2b";
import { hypercompetitionArticle } from "./giperkonkurentsiya";
import { mediaPrSeoArticle } from "./stati-v-smi-seo";
import { contextDirectStableLeadsArticle } from "./kontekstnaya-reklama-direkt-stabilnye-zayavki";
import { sitePromotionDirectArticle } from "./prodvizhenie-sayta-v-direkt";
import { vkVsDirectArticle } from "./reklama-vk-ili-direkt";
import { avitoPromotionNewArticle } from "./reklama-na-avito-kak-prodvigat";
import { analyticsArticle } from "./skvoznaya-analitika";
import { decliningDemandArticle } from "./padayushchiy-spros";
import { trustCrisisArticle } from "./krizis-doveriya-k-reklame";
import { model4bArticle } from "./model-4b";
import { sellerNeuralNetworksArticle } from "./neyroseti-dlya-sellerov";
import { factsVsMarketingAntiAgingArticle } from "./fakty-protiv-marketinga";
import { externalAdsMarketplaceGrowthArticle } from "./vneshnyaya-reklama-marketpleysy";
import { budgetDistributionArticle } from "./raspredelenie-byudzheta";
import { hantLadderArticle } from "./lestnitsa-khanta";
import { buyerPsychologyArticle } from "./psikhologiya-pokupatelya";
import { rsyaArticle } from "./rsya-kliki-bez-lidov";
import { reklamnySbor3Article } from "./reklamnyy-sbor-3";
import { nds22Article } from "./nds-22";
import { aiSeoArticle } from "./ai-seo";
import { ugcArticle } from "./ugc";
import { emailVsMessengersArticle } from "./email-vs-messengers";
import { freeSeoAuditArticle } from "./besplatnyy-seo-audit";
import { budgetFormulaSmallBizArticle } from "./byudzhet-malogo-biznesa";
import { targetingMistakesArticle } from "./oshibki-targeta";
import { seoVsContextArticle } from "./seo-ili-kontekst";
import { geminiChromeArticle } from "./gemini-chrome";
import { yandexKitArticle } from "./yandeks-kit";
import { neuroWebmasterArticle } from "./neyrovebmaster";

const buildArticle = (a: Record<string, unknown>): Article => ({
  ...a,
} as Article);

export const articles: Article[] = [
  buildArticle({
    ...longCycleContextAdArticle,
    slug: "kontekstnaya-reklama-dlya-biznesa-s-dlinnym-tsiklom-sdelki",
    url: "/blog/kontekstnaya-reklama-dlya-biznesa-s-dlinnym-tsiklom-sdelki",
  }),
  buildArticle({
    ...wordpressGuideArticle,
    slug: "sozdat-sayt-na-wordpress-v-2026",
    url: "/blog/sozdat-sayt-na-wordpress-v-2026",
  }),
  buildArticle({
    ...marketingToolsArticle,
    slug: "instrumenty-internet-marketinga",
    url: "/blog/instrumenty-internet-marketinga",
  }),
  buildArticle({
    ...influencerMarketingArticle,
    slug: "inflyuens-marketing",
    url: "/blog/inflyuens-marketing",
  }),
  buildArticle({
    ...getClientsArticle,
    slug: "kak-poluchit-klientov",
    url: "/blog/kak-poluchit-klientov",
  }),
  buildArticle({
    ...businessPromotionArticle,
    slug: "prodvizhenie-biznesa",
    url: "/blog/prodvizhenie-biznesa",
  }),
  buildArticle({
    ...vkTargetingArticle,
    slug: "targetirovannaya-reklama-vk",
    url: "/blog/targetirovannaya-reklama-vk",
  }),
  buildArticle({
    ...yandexDirectArticle,
    slug: "yandeks-direkt",
    url: "/blog/yandeks-direkt",
  }),
  buildArticle({
    ...wildberriesExternalArticle,
    slug: "vneshnyaya-reklama-wildberries",
    url: "/blog/vneshnyaya-reklama-wildberries",
  }),
  buildArticle({
    ...seo2026Article,
    slug: "seo-v-2026",
    url: "/blog/seo-v-2026",
  }),
  buildArticle({
    ...marketplaceTrafficArticle,
    slug: "vneshniy-trafik-marketpleysov",
    url: "/blog/vneshniy-trafik-marketpleysov",
  }),
  buildArticle({
    ...avitoAdArticle,
    slug: "reklama-na-avito",
    url: "/blog/reklama-na-avito",
  }),
  buildArticle({
    ...b2bContextAds2026Article,
    slug: "kontekstnaya-reklama-v-b2b-2026",
    url: "/blog/kontekstnaya-reklama-v-b2b-2026",
  }),
  buildArticle({
    ...emailMarketingArticle,
    slug: "email-marketing",
    url: "/blog/email-marketing",
  }),
  buildArticle({
    ...marketplaceBehavioralFactorsArticle,
    slug: "povedencheskie-faktory-marketpleysov",
    url: "/blog/povedencheskie-faktory-marketpleysov",
  }),
  buildArticle({
    ...skolkoStoitVneshniyTrafikArticle,
    slug: "skolko-stoit-vneshniy-trafik",
    url: "/blog/skolko-stoit-vneshniy-trafik",
  }),
  buildArticle({
    ...gdeZakazatVneshniyTrafikArticle,
    slug: "gde-zakazat-vneshniy-trafik",
    url: "/blog/gde-zakazat-vneshniy-trafik",
  }),
  buildArticle({
    ...kakRabotaetReklamaMpArticle,
    slug: "kak-rabotaet-reklama-mp",
    url: "/blog/kak-rabotaet-reklama-mp",
  }),
  buildArticle({
    ...analyticsExternalTrafficArticle,
    slug: "analitika-vneshnego-trafika",
    url: "/blog/analitika-vneshnego-trafika",
  }),
  buildArticle({
    ...localBusinessGeoArticle,
    slug: "lokalnyy-biznes-geo-servisy",
    url: "/blog/lokalnyy-biznes-geo-servisy",
  }),
  buildArticle({
    ...wbSalesWithoutDiscountsArticle,
    slug: "prodazhi-wb-bez-aktsiy",
    url: "/blog/prodazhi-wb-bez-aktsiy",
  }),
  buildArticle({
    ...salesDropMarketplaceArticle,
    slug: "pochemu-padayut-prodazhi",
    url: "/blog/pochemu-padayut-prodazhi",
  }),
  buildArticle({
    ...externalTrafficWbPositionsArticle,
    slug: "pozitsii-kartochki-wb",
    url: "/blog/pozitsii-kartochki-wb",
  }),
  buildArticle({
    ...growthLimitedExternalTrafficArticle,
    slug: "rost-ogranichen-bez-vneshnego-trafika",
    url: "/blog/rost-ogranichen-bez-vneshnego-trafika",
  }),
  buildArticle({
    ...rfmAnalysisB2bArticle,
    slug: "rfm-analiz-b2b",
    url: "/blog/rfm-analiz-b2b",
  }),
  buildArticle({
    ...hypercompetitionArticle,
    slug: "giperkonkurentsiya",
    url: "/blog/giperkonkurentsiya",
  }),
  buildArticle({
    ...mediaPrSeoArticle,
    slug: "stati-v-smi-seo",
    url: "/blog/stati-v-smi-seo",
  }),
  buildArticle({
    ...contextDirectStableLeadsArticle,
    slug: "kontekstnaya-reklama-direkt-stabilnye-zayavki",
    url: "/blog/kontekstnaya-reklama-direkt-stabilnye-zayavki",
  }),
  buildArticle({
    ...sitePromotionDirectArticle,
    slug: "prodvizhenie-sayta-v-direkt",
    url: "/blog/prodvizhenie-sayta-v-direkt",
  }),
  buildArticle({
    ...vkVsDirectArticle,
    slug: "reklama-vk-ili-direkt",
    url: "/blog/reklama-vk-ili-direkt",
  }),
  buildArticle({
    ...avitoPromotionNewArticle,
    slug: "reklama-na-avito-kak-prodvigat",
    url: "/blog/reklama-na-avito-kak-prodvigat",
  }),
  buildArticle({
    ...analyticsArticle,
    slug: "skvoznaya-analitika",
    url: "/blog/skvoznaya-analitika",
  }),
  buildArticle({
    ...decliningDemandArticle,
    slug: "padayushchiy-spros",
    url: "/blog/padayushchiy-spros",
  }),
  buildArticle({
    ...trustCrisisArticle,
    slug: "krizis-doveriya-k-reklame",
    url: "/blog/krizis-doveriya-k-reklame",
  }),
  buildArticle({
    ...model4bArticle,
    slug: "klassicheskiy-marketing-ustarel-model-4b",
    url: "/blog/klassicheskiy-marketing-ustarel-model-4b",
  }),
  buildArticle({
    ...sellerNeuralNetworksArticle,
    slug: "neyroseti-dlya-sellerov",
    url: "/blog/neyroseti-dlya-sellerov",
  }),
  buildArticle({
    ...factsVsMarketingAntiAgingArticle,
    slug: "fakty-protiv-marketinga",
    url: "/blog/fakty-protiv-marketinga",
  }),
  buildArticle({
    ...externalAdsMarketplaceGrowthArticle,
    slug: "vneshnyaya-reklama-marketpleysy",
    url: "/blog/vneshnyaya-reklama-marketpleysy",
  }),
  buildArticle({
    ...budgetDistributionArticle,
    slug: "raspredelenie-byudzheta",
    url: "/blog/raspredelenie-byudzheta",
  }),
  buildArticle({
    ...hantLadderArticle,
    slug: "lestnitsa-khanta",
    url: "/blog/lestnitsa-khanta",
  }),
  buildArticle({
    ...buyerPsychologyArticle,
    slug: "psikhologiya-pokupatelya",
    url: "/blog/psikhologiya-pokupatelya",
  }),
  buildArticle({
    ...rsyaArticle,
    slug: "rsya-kliki-bez-lidov",
    url: "/blog/rsya-kliki-bez-lidov",
  }),
  buildArticle({
    ...reklamnySbor3Article,
    slug: "reklamnyy-sbor-3",
    url: "/blog/reklamnyy-sbor-3",
  }),
  buildArticle({
    ...nds22Article,
    slug: "nds-22",
    url: "/blog/nds-22",
  }),
  buildArticle({
    ...aiSeoArticle,
    slug: "ai-seo",
    url: "/blog/ai-seo",
  }),
  buildArticle({
    ...ugcArticle,
    slug: "ugc",
    url: "/blog/ugc",
  }),
  buildArticle({
    ...emailVsMessengersArticle,
    slug: "email-vs-messengers",
    url: "/blog/email-vs-messengers",
  }),
  buildArticle({
    ...freeSeoAuditArticle,
    slug: "besplatnyy-seo-audit",
    url: "/blog/besplatnyy-seo-audit",
  }),
  buildArticle({
    ...budgetFormulaSmallBizArticle,
    slug: "byudzhet-malogo-biznesa",
    url: "/blog/byudzhet-malogo-biznesa",
  }),
  buildArticle({
    ...targetingMistakesArticle,
    slug: "oshibki-targeta",
    url: "/blog/oshibki-targeta",
  }),
  buildArticle({
    ...seoVsContextArticle,
    slug: "seo-ili-kontekst",
    url: "/blog/seo-ili-kontekst",
  }),
  buildArticle({
    ...geminiChromeArticle,
    slug: "google-vstroil-gemini-v-chrome",
    url: "/blog/google-vstroil-gemini-v-chrome",
  }),
  buildArticle({
    ...yandexKitArticle,
    slug: "yandeks-kit",
    url: "/blog/yandeks-kit",
  }),
  buildArticle({
    ...neuroWebmasterArticle,
    slug: "neyrovebmaster",
    url: "/blog/neyrovebmaster",
  }),
];
