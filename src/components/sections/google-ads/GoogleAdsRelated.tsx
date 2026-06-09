import Link from 'next/link';
import { googleAdsPage } from '@/content/googleAdsPage';
import { Arrow, SectionLabel } from './SectionElements';
import styles from './GoogleAdsRelated.module.css';

export function GoogleAdsRelated() {
  const { related } = googleAdsPage;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>{related.label}</SectionLabel>
        <h2>{related.title}</h2>
        <div className={styles.cards}>
          {related.items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>Подробнее <Arrow /></Link></article>)}
        </div>
      </div>
    </section>
  );
}
