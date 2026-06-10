import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoPricingSection.module.css";

interface PricingPlan {
  name: string;
  target: string;
  price: string;
  features: string[];
}

interface Props {
  title: string;
  text: string;
  plans: PricingPlan[];
}

export default function TelegramAdsPricingSection({ title, text, plans }: Props) {
  return (
    <section className={styles.section} id="pricing">
      <Container>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={grid.grid3}>
          {plans.map((plan, index) => (
            <article className={`${styles.card} ${index === 1 ? styles.hot : ""}`} key={plan.name}>
              <h3>{plan.name}</h3>
              <p className={styles.subtitle}>{plan.target}</p>
              <strong>{plan.price}</strong>
              <ul>
                {plan.features.map((f) => (
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
