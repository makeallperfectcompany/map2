import { googleAdsPage } from '@/content/googleAdsPage';
import { SectionLabel } from './SectionElements';
import styles from './GoogleAdsServices.module.css';

export function GoogleAdsServices() {
  const { services } = googleAdsPage;
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <SectionLabel dark>{services.label}</SectionLabel>
        <h2>{services.title}</h2>
        <p className={styles.lead}>{services.text}</p>
        <div className={styles.cards}>
          {services.cards.map((card, index) => (
            <article key={card.code} className={index === 0 ? styles.featured : ''}>
              <small>{card.code}</small>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div>{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
