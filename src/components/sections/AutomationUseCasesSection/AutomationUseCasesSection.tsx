import grid from '@/styles/grid.module.css';
import styles from './AutomationUseCasesSection.module.css';

export function AutomationUseCasesSection({ data }: { data: { title: string; text: string; cards: Array<{ title: string; text: string }> } }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}><h2>{data.title}</h2><p>{data.text}</p></div>
        <div className={grid.grid3}>
          {data.cards.map((card) => <article className={styles.card} key={card.title}><div className={styles.dot} /><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
