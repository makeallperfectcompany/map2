import { homeIndustries } from "@/content/home/industries";
import styles from "./HomeIndustriesSection.module.css";

export default function HomeIndustriesSection() {
  return (
    <section className={styles.industriesSection}>
      <div className={styles.container}>
        <div className={styles.headerGrid}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{homeIndustries.label}</span>
            <p className={styles.kicker}>{homeIndustries.kicker}</p>
            <h2>{homeIndustries.title}</h2>
            <p className={styles.description}>{homeIndustries.description}</p>
          </div>

          <aside className={styles.mainCard}>
            <div className={styles.mainVisualShell} aria-hidden="true">
              <img className={styles.mainVisualImage} src={homeIndustries.mainCard.image} alt="" />
            </div>

            <div className={styles.mainCardContent}>
              <span>{homeIndustries.mainCard.label}</span>
              <h3>{homeIndustries.mainCard.title}</h3>
              <p>{homeIndustries.mainCard.text}</p>
            </div>
          </aside>
        </div>

        <div className={styles.industriesGrid}>
          {homeIndustries.industries.map((industry, index) => (
            <article className={styles.industryCard} key={industry.title}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.cardIcon} aria-hidden="true">
                  <img src={industry.icon} alt="" />
                </div>
              </div>

              <h3>{industry.title}</h3>
              <p>{industry.text}</p>

              <div className={styles.tags}>
                {industry.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
