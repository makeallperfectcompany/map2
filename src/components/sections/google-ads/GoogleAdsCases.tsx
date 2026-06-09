import Image from 'next/image';
import { googleAdsPage } from '@/content/googleAdsPage';
import { Arrow, SectionLabel } from './SectionElements';
import styles from './GoogleAdsCases.module.css';

export function GoogleAdsCases() {
  const { cases } = googleAdsPage;
  return (
    <section className={styles.section} id="cases">
      <div className={styles.container}>
        <div className={styles.heading}>
          <div><SectionLabel>{cases.label}</SectionLabel><h2>{cases.title}</h2><p>{cases.text}</p></div>
          <a href="/cases">Смотреть все кейсы <Arrow /></a>
        </div>
        <div className={styles.cards}>
          {cases.cards.map((card) => (
            <article key={card.title}>
              <Image src={card.image} alt="" width={400} height={300} aria-hidden="true" />
              <div className={styles.cardContent}><small>{card.category}</small><h3>{card.title}</h3><p>{card.text}</p><a href="/cases">Открыть <Arrow /></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
