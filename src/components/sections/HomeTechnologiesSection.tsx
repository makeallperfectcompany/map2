import { homeTechnologies } from "@/content/home/technologies";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HomeTechnologiesSection.module.css";

export default function HomeTechnologiesSection() {
  return (
    <section className={styles.technologiesSection}>
      <Container className={styles.inner}>
        <div className={styles.headerGrid}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{homeTechnologies.label}</span>
            <h2>{homeTechnologies.title}</h2>
          </div>

          <div className={styles.headerSide}>
            <p>{homeTechnologies.description}</p>

            <div className={styles.stats}>
              {homeTechnologies.stats.map((stat) => (
                <div className={styles.stat} key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {homeTechnologies.cards.map((card) => (
            <article
              className={`${styles.techCard} ${card.accent ? styles.accentCard : ""}`}
              key={card.title}
            >
              <span className={styles.eyebrow}>{card.eyebrow}</span>

              <div className={styles.cardTitle}>
                <h3>{card.title}</h3>
                <p>{card.muted}</p>
              </div>

              <strong className={styles.code}>{card.code}</strong>

              <p className={styles.cardText}>{card.text}</p>

              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className={styles.scrollHint}>→ Листайте</div>
      </Container>
    </section>
  );
}
