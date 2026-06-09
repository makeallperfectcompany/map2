import { Container } from "@/components/ui/Container/Container";
import { seoYandexService } from "@/content/services/seo-yandex";
import styles from "./SeoYandexFaqSection.module.css";

export default function SeoYandexFaqSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>FAQ</span>
          <h2>Вопросы о SEO-продвижении в Яндексе</h2>
        </div>
        <div className={styles.faqList}>
          {seoYandexService.faq.map((item) => (
            <details className={styles.faqItem} key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
