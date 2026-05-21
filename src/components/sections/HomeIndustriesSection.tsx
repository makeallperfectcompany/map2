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
            <div className={styles.mainCardContent}>
              <span className={styles.mainCardKicker}>{homeIndustries.mainCard.label}</span>
              <h3>{homeIndustries.mainCard.title}</h3>
              <p>{homeIndustries.mainCard.text}</p>
              <ul className={styles.mainCardStats}>
                <li><strong>6+</strong><span>отраслей</span></li>
                <li><strong>120+</strong><span>проектов</span></li>
                <li><strong>8 лет</strong><span>опыта</span></li>
              </ul>
            </div>
          </aside>
        </div>

        <div className={styles.industriesGrid}>
          {homeIndustries.industries.map((industry, index) => (
            <article className={styles.industryCard} key={industry.title}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{industry.title}</h3>
                <div className={styles.cardIcon} aria-hidden="true">
                  <img src={industry.icon} alt="" />
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
      </div>
    </section>
  );
}
