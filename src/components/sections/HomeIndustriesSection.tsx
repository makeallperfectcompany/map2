import { homeIndustries } from "@/content/home/industries";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HomeIndustriesSection.module.css";

export default function HomeIndustriesSection() {
  return (
    <section className={styles.industriesSection}>
      <Container className={styles.inner}>
        <div className={styles.headerGrid}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{homeIndustries.label}</span>
            <p className={styles.kicker}>{homeIndustries.kicker}</p>
            <h2>{homeIndustries.title}</h2>
            <p className={styles.description}>{homeIndustries.description}</p>
            <ul className={styles.bulletList}>
              {homeIndustries.bullets.map((bullet) => (
                <li key={bullet} className={styles.bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.mainCard}>
            <div className={styles.mainCardContent}>
              <div className={styles.mainCardTop}>
                <span className={styles.mainCardKicker}>{homeIndustries.mainCard.label}</span>
                <h3>{homeIndustries.mainCard.title}</h3>
                <ul className={styles.mainCardBullets}>
                  {homeIndustries.mainCard.bullets.slice(1).map((bullet) => (
                    <li key={bullet} className={styles.mainCardBullet}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <ul className={styles.mainCardStats}>
                {homeIndustries.mainCard.stats.map((stat) => (
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
          {homeIndustries.industries.map((industry, index) => (
            <article className={styles.industryCard} key={industry.title}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3 lang="ru">{industry.title}</h3>
                <div className={styles.cardIcon} aria-hidden="true">
                  <img src={industry.icon} alt="" title="Наши отрасли" />
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
            {homeIndustries.extraNiches.map((niche) => (
              <span key={niche} className={styles.extraChip}>{niche}</span>
            ))}
          </div>
        </aside>
      </Container>
    </section>
  );
}
