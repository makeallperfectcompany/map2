import { telegramAdsContent as content } from "@/content/services/telegramAds";
import { Container } from "@/components/ui/Container/Container";
import styles from "./TelegramAdsFaqSection.module.css";

export default function TelegramAdsFaqSection() {
  const { faq } = content;

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>FAQ</span>
          <h2>{faq.h2}</h2>
        </div>

        <div className={styles.faqList}>
          {faq.items.map((item, index) => (
            <details className={styles.item} key={item.question} open={index === 0}>
              <summary className={styles.summary}>
                <span className={styles.itemNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.question}</h3>
                <i aria-hidden="true" />
              </summary>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
