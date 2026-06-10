import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import styles from "./AvitoUniqueSections.module.css";

interface PricingTier {
  name: string;
  subtitle: string;
  price: string;
  budget: string;
  features: string[];
}

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  tiers: PricingTier[];
  note?: string;
  cta?: string;
}

export default function AvitoStylePricingSection({
  eyebrow,
  title,
  description,
  tiers,
  note,
  cta,
}: Props) {
  return (
    <section className={styles.section} id="pricing">
      <Container>
        <div className={`${styles.sectionHeader} ${styles.headerCentered}`}>
          <span className={styles.sectionLabel}>{eyebrow}</span>
          <h2>{title}</h2>
          <p className={styles.sectionDesc}>{description}</p>
        </div>
        <div className={styles.pricingGrid}>
          {tiers.map((tier, index) => (
            <article
              className={`${styles.pricingCard} ${index === 1 ? styles.pricingFeatured : ""}`}
              key={tier.name}
            >
              {index === 1 && <span className={styles.pricingBadge}>Рекомендуем</span>}
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>{tier.name}</h3>
                <p className={styles.pricingSubtitle}>{tier.subtitle}</p>
              </div>
              <div className={styles.pricingBody}>
                <div className={styles.pricingAmount}>{tier.price}</div>
                <p className={styles.pricingBudget}>{tier.budget}</p>
                <ul className={styles.pricingFeatures}>
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        {note && <p className={styles.pricingNote}>{note}</p>}
        {cta && (
          <div className={styles.pricingCtaWrapper}>
            <Link href="#audit" className={`${styles.btn} ${styles.btnAccent}`}>
              <span>{cta}</span>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
