import grid from '@/styles/grid.module.css';
import styles from './AutomationPricingSection.module.css';

export function AutomationPricingSection({ data }: { data: { title: string; text: string; cta: string; cards: Array<{ title: string; text: string; price: string }> } }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.header}><h2>{data.title}</h2><p>{data.text}</p></div>
          <div className={grid.grid3}>
            {data.cards.map((card) => <article className={styles.card} key={card.title}><h3>{card.title}</h3><p>{card.text}</p><strong>{card.price}</strong></article>)}
          </div>
          <a className={styles.cta} href="#contact">{data.cta}</a>
        </div>
      </div>
    </section>
  );
}
