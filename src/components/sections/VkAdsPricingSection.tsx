import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoPricingSection.module.css";

interface PricingTier {
  name: string;
  subtitle: string;
  price: string;
  budget: string;
  features: string[];
}

interface Props {
  title: string;
  text: string;
  tiers: PricingTier[];
}

export default function VkAdsPricingSection({ title, text, tiers }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={grid.grid3}>
          {tiers.map((tier, index) => (
            <article className={`${styles.card} ${index === 1 ? styles.hot : ""}`} key={tier.name}>
              <h3>{tier.name}</h3>
              <p className={styles.subtitle}>{tier.subtitle}</p>
              <strong>{tier.price}</strong>
              <p>{tier.budget}</p>
              <ul>
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
