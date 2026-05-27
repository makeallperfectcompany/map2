import { telegramAdsContent as content } from "@/content/services/telegramAds";
import { Container } from "@/components/ui/Container/Container";
import styles from "./TelegramAdsOpportunitiesSection.module.css";

export default function TelegramAdsOpportunitiesSection() {
  const { opportunities } = content;

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <h2>{opportunities.h2}</h2>
        </div>

        <div className={styles.grid}>
          {opportunities.blocks.map((block, index) => (
            <article className={styles.card} key={block.title}>
              <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
