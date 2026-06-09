import { googleAdsPage } from '@/content/googleAdsPage';
import { Arrow, SectionLabel } from './SectionElements';
import styles from './GoogleAdsSuitability.module.css';

export function GoogleAdsSuitability() {
  const { suitability } = googleAdsPage;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>{suitability.label}</SectionLabel>
        <h2>{suitability.title}</h2>
        <div className={styles.grid}>
          <div className={styles.list}>
            <h3>Реклама будет полезна, если</h3>
            {suitability.points.map((point) => <p key={point}><span>✓</span>{point}</p>)}
          </div>
          <aside className={styles.card}>
            <small>{suitability.card.kicker}</small>
            <h3>{suitability.card.title}</h3>
            <p>{suitability.card.text}</p>
            <a href="#contact">{suitability.card.cta}<Arrow /></a>
          </aside>
        </div>
      </div>
    </section>
  );
}
