import Image from 'next/image';
import { googleAdsPage } from '@/content/googleAdsPage';
import { SectionLabel } from './SectionElements';
import styles from './GoogleAdsAvailability.module.css';

export function GoogleAdsAvailability() {
  const { availability } = googleAdsPage;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>{availability.label}</SectionLabel>
        <h2>{availability.title}</h2>
        <p className={styles.lead}>{availability.text}</p>
        <div className={styles.body}>
          <Image src="/images/services/google-ads/google-ads-markets.webp" alt="" width={600} height={400} aria-hidden="true" />
          <div className={styles.cards}>
            {availability.cards.map((card) => (
              <article key={card.code}><small>{card.code}</small><h3>{card.title}</h3><p>{card.text}</p></article>
            ))}
            <aside className={styles.notice}><h3>{availability.notice.title}</h3><p>{availability.notice.text}</p></aside>
          </div>
        </div>
      </div>
    </section>
  );
}
