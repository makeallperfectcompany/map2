import { googleAdsPage } from '@/content/googleAdsPage';
import { Icon, SectionLabel } from './SectionElements';
import styles from './GoogleAdsIndustries.module.css';

const icons = { commerce: 'commerce', b2b: 'business', digital: 'digital', education: 'education', property: 'property', launch: 'growth' } as const;

export function GoogleAdsIndustries() {
  const { industries } = googleAdsPage;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div>
            <SectionLabel>{industries.label}</SectionLabel>
            <h2>{industries.title}</h2>
            <p>{industries.text}</p>
          </div>
          <aside className={styles.focus}>
            <small>{industries.focus.kicker}</small>
            <h3>{industries.focus.title}</h3>
            <p>{industries.focus.text}</p>
            <div>{industries.focus.metrics.map((item) => <span key={item}>{item}</span>)}</div>
          </aside>
        </div>
        <div className={styles.cards}>
          {industries.cards.map((card) => (
            <article key={card.key} className={styles.card}>
              <div className={styles.cardHead}><Icon name={icons[card.key]} /></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className={styles.tags}>{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
