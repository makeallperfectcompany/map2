import { homeTechnologies } from "@/content/home/technologies";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HomeTechnologiesSection.module.css";

export interface TechnologiesCardData {
  eyebrow: string;
  title: string;
  muted: string;
  code: string;
  text: string;
  tags: string[];
  accent?: boolean;
}

export interface TechnologiesContent {
  label: string;
  title: string;
  description: string;
  stats: { value: string; label: string; text: string }[];
  cards: TechnologiesCardData[];
}

interface Props {
  content?: TechnologiesContent;
}

export default function HomeTechnologiesSection({ content }: Props) {
  const data = content ?? homeTechnologies;
  return (
    <section className={styles.technologiesSection}>
      <Container className={styles.inner}>
        <div className={styles.headerGrid}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{data.label}</span>
            <h2>{data.title}</h2>
          </div>

          <div className={styles.headerSide}>
            <p>{data.description}</p>

            <div className={styles.stats}>
              {data.stats.map((stat) => (
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
          {data.cards.map((card) => (
            <article
              className={`${styles.techCard} ${card.accent ? styles.accentCard : ""}`}
              key={card.title}
            >
              <span className={styles.eyebrow}>{card.eyebrow}</span>

              <div className={styles.cardTitle}>
                <h3>{card.title}</h3>
                <p>{card.muted}</p>
              </div>

              {card.icon ? (
                <img className={styles.cardIcon} src={card.icon} alt="" aria-hidden="true" width={48} height={48} />
              ) : (
                <strong className={styles.code}>{card.code}</strong>
              )}

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
