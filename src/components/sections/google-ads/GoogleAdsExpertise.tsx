import { googleAdsPage } from '@/content/googleAdsPage';
import { SectionLabel } from './SectionElements';
import styles from './GoogleAdsExpertise.module.css';

export function GoogleAdsExpertise() {
  const { tools, technology } = googleAdsPage;
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionLabel dark>{tools.label}</SectionLabel>
          <h2>{tools.title}</h2>
          <p className={styles.lead}>{tools.text}</p>
          <div className={styles.cards}>
            {tools.cards.map((card) => <article key={card.code}><small>{card.code}</small><h3>{card.title}</h3><p>{card.text}</p></article>)}
          </div>
        </div>
      </section>
      <section className={styles.technology}>
        <div className={styles.techContainer}>
          <SectionLabel>{technology.label}</SectionLabel>
          <h2>{technology.title}</h2>
          <div className={styles.techGrid}>
            {technology.items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
