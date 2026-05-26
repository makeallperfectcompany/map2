import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./VkAds.module.css";

export interface ApprovedPricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

type Props = {
  title: string;
  text: string;
  note: string;
  plans: [ApprovedPricingPlan, ApprovedPricingPlan, ApprovedPricingPlan];
};

/**
 * Do not mount this section until public prices are approved by the owner.
 * A final pricing section without visible confirmed prices is prohibited.
 */
export default function VkAdsPricing({ title, text, note, plans }: Props) {
  return (
    <section id="pricing" className={styles.lightSection} aria-labelledby="vk-pricing-title">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="vk-pricing-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className={grid.grid3}>
          {plans.map((plan) => (
            <article key={plan.name} className={plan.featured ? styles.pricingCardFeatured : styles.pricingCard}>
              <h3>{plan.name}</h3>
              <p className={styles.price}>{plan.price}</p>
              <p>{plan.description}</p>
              <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <span className={styles.pricingButton}>{plan.cta}<span>↗</span></span>
            </article>
          ))}
        </div>
        <p className={styles.pricingNote}>{note}</p>
      </Container>
    </section>
  );
}