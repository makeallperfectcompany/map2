import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { seoYandexService } from "@/content/services/seo-yandex";
import styles from "./SeoYandexStrategySection.module.css";

export default function SeoYandexStrategySection() {
  const { strategy } = seoYandexService;
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.topGrid}>
          <div className={styles.copy}>
            <span className={styles.sectionLabel}>SEO под Яндекс</span>
            <h2>{strategy.title}</h2>
            <p>{strategy.description}</p>
          </div>
          <div className={styles.visual}>
            <Image src="/images/services/seo-yandex/strategy-visual.webp" alt="Стратегия SEO в Яндексе — Make All Perfect" width={1200} height={1500} />
          </div>
        </div>
        <div className={styles.cards}>
          {strategy.cards.map((card, index) => (
            <article className={styles.card} key={card.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
