import CasesSection from "./CasesSection";
import HomeReviewsSection from "./HomeReviewsSection";
import HomeIndustriesSection from "./HomeIndustriesSection";
import HomeTechnologiesSection from "./HomeTechnologiesSection";
import HomeAboutSection from "./HomeAboutSection";
import HomeBlogSection from "./HomeBlogSection";
import HomeFaqSection from "./HomeFaqSection";
import FinalCtaSection from "./FinalCtaSection";

export interface ServiceSharedSectionsProps {
  industriesContent?: any;
  technologiesContent?: any;
  faq?: Record<string, any>;
  finalCta?: Record<string, any>;
}

export default function ServiceSharedSections({
  industriesContent,
  technologiesContent,
  faq,
  finalCta,
}: ServiceSharedSectionsProps = {}) {
  return (
    <>
      <CasesSection />
      <HomeReviewsSection />
      <HomeIndustriesSection content={industriesContent} />
      <HomeTechnologiesSection content={technologiesContent} />
      <HomeAboutSection />
      <HomeBlogSection />
      {faq ? <HomeFaqSection {...faq} /> : <HomeFaqSection />}
      <FinalCtaSection content={finalCta} />
    </>
  );
}
