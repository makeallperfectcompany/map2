import { googleAdsPage } from '@/content/googleAdsPage';
import { Arrow, SectionLabel } from './SectionElements';
import styles from './GoogleAdsPricing.module.css';

export function GoogleAdsPricing() {
  const { pricing } = googleAdsPage;
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <SectionLabel>{pricing.label}</SectionLabel>
        <h2>{pricing.title}</h2>
        <p className={styles.lead}>{pricing.text}</p>
        <div className={styles.cards}>
          {pricing.cards.map((card) => (
            <article key={card.title} className={'featured' in card && card.featured ? styles.featured : ''}>
              <small>{card.subtitle}</small>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ul>{card.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href="#contact">{card.cta}<Arrow /></a>
            </article>
          ))}
        </div>
        <p className={styles.note}>{pricing.note}</p>
      </div>
    </section>
  );
}
