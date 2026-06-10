import { homeIndustries } from "@/content/home/industries";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HomeIndustriesSection.module.css";

export interface IndustriesCardData {
  title: string;
  text: string;
  tags: string[];
  icon: string;
}

export interface IndustriesContent {
  label: string;
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  mainCard: {
    label: string;
    title: string;
    bullets: string[];
    image: string;
    stats: { value: string; label: string }[];
  };
  industries: IndustriesCardData[];
  extraNiches: string[];
}

interface Props {
  content?: IndustriesContent;
}

export default function HomeIndustriesSection({ content }: Props) {
  const data = content ?? homeIndustries;
  return (
    <section className={styles.industriesSection}>
      <Container className={styles.inner}>
        <div className={styles.headerGrid}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{data.label}</span>
            <p className={styles.kicker}>{data.kicker}</p>
            <h2>{data.title}</h2>
            <p className={styles.description}>{data.description}</p>
            <ul className={styles.bulletList}>
              {data.bullets.map((bullet) => (
                <li key={bullet} className={styles.bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.mainCard}>
            <div className={styles.mainCardContent}>
              <div className={styles.mainCardTop}>
                <span className={styles.mainCardKicker}>{data.mainCard.label}</span>
                <h3>{data.mainCard.title}</h3>
                <ul className={styles.mainCardBullets}>
                  {data.mainCard.bullets.slice(1).map((bullet) => (
                    <li key={bullet} className={styles.mainCardBullet}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <ul className={styles.mainCardStats}>
                {data.mainCard.stats.map((stat) => (
                  <li key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className={styles.industriesGrid}>
          {data.industries.map((industry, index) => (
            <article className={styles.industryCard} key={industry.title}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3 lang="ru">{industry.title}</h3>
                <div className={styles.cardIcon} aria-hidden="true">
                  <img src={industry.icon} alt="" title="Отрасли" />
                </div>
              </div>

              <p>{industry.text}</p>

              <div className={styles.tags}>
                {industry.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.extraNichesCard}>
          <div className={styles.extraNichesHeader}>Также работаем в нишах:</div>
          <div className={styles.extraNichesChips}>
            {data.extraNiches.map((niche) => (
              <span key={niche} className={styles.extraChip}>{niche}</span>
            ))}
          </div>
        </aside>
      </Container>
    </section>
  );
}
