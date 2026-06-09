import { Container } from "@/components/ui/Container/Container";
import { seoYandexService } from "@/content/services/seo-yandex";
import styles from "./SeoYandexPricingSection.module.css";

export default function SeoYandexPricingSection() {
  const { pricing } = seoYandexService;
  return (
    <section className={styles.section} id="pricing">
      <Container>
        <div className={styles.headerGrid}>
          <div className={styles.copy}>
            <span className={styles.sectionLabel}>Форматы и стоимость</span>
            <h2>{pricing.title}</h2>
            <p>{pricing.description}</p>
          </div>
          <aside className={styles.priceCard}>
            <span>Стоимость продвижения</span>
            <strong>{pricing.price}</strong>
            <p>{pricing.note}</p>
            <a href="#final-cta">Рассчитать продвижение в Яндексе</a>
          </aside>
        </div>
        <div className={styles.formats}>
          {pricing.formats.map((format) => (
            <article className={styles.format} key={format.title}>
              <h3>{format.title}</h3>
              <p>{format.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
