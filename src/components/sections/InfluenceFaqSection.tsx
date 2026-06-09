import { Container } from "@/components/ui/Container/Container";
import styles from "./InfluenceFaqSection.module.css";
import type { FaqItem } from "@/content/services/influence-marketing";

export default function InfluenceFaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHead}>
          <h2>Вопросы об инфлюенс-маркетинге и рекламе у блогеров</h2>
        </div>
        <div className={styles.faqList}>
          {items.map((item) => (
            <details className={styles.item} key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
