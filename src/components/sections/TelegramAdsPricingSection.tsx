import { telegramAdsContent as content } from "@/content/services/telegramAds";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { Container } from "@/components/ui/Container/Container";
import styles from "./TelegramAdsPricingSection.module.css";

export default function TelegramAdsPricingSection() {
  const { pricing } = content;

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <h2>{pricing.h2}</h2>
          <p>{pricing.description}</p>
        </div>

        <div className={styles.grid}>
          {pricing.plans.map((plan, index) => (
            <article
              className={`${styles.card} ${index === 1 ? styles.featured : ""}`}
              key={plan.name}
            >
              <div>
                <div className={styles.cardHeader}>
                  <div className={styles.planName}>{plan.name}</div>
                  <span className={styles.planTarget}>{plan.target}</span>
                </div>
                <div className={styles.price}>{plan.price}</div>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li className={styles.feature} key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <OpenConsultationButton as="a" href="/contacts" className={styles.ctaBtn}>
                Связаться
              </OpenConsultationButton>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
