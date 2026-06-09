import Image from 'next/image';
import { googleAdsPage } from '@/content/googleAdsPage';
import { SectionLabel } from './SectionElements';
import styles from './GoogleAdsApproach.module.css';

export function GoogleAdsApproach() {
  const { approach } = googleAdsPage;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>{approach.label}</SectionLabel>
        <h2>{approach.title}</h2>
        <p className={styles.lead}>{approach.text}</p>
        <div className={styles.grid}>
          <div className={styles.image}><Image src="/images/services/google-ads/google-ads-performance.webp" alt="" width={600} height={400} aria-hidden="true" /></div>
          <div className={styles.right}>
            <article className={styles.featured}><small>{approach.featured.kicker}</small><h3>{approach.featured.title}</h3><p>{approach.featured.text}</p></article>
            <div className={styles.cards}>
              {approach.cards.map((card) => <article key={card.code}><small>{card.code}</small><h3>{card.title}</h3><p>{card.text}</p></article>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
