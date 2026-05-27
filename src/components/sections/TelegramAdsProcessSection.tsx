import { telegramAdsContent as content } from "@/content/services/telegramAds";
import { Container } from "@/components/ui/Container/Container";
import styles from "./TelegramAdsProcessSection.module.css";

export default function TelegramAdsProcessSection() {
  const { process } = content;

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <h2>{process.h2}</h2>
        </div>

        <div className={styles.grid}>
          {process.steps.map((step, index) => (
            <article className={styles.stepCard} key={step.title}>
              <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
