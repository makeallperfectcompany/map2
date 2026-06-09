import Image from 'next/image';
import grid from '@/styles/grid.module.css';
import styles from './AutomationScopeSection.module.css';

export function AutomationScopeSection({ data }: { data: { title: string; text: string; image: string; cards: Array<{ title: string; text: string }> } }) {
  return (
    <section className={styles.section} id="scenarios">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
        <div className={styles.layout}>
          <div className={styles.visualCard}>
            <Image src={data.image} alt="Абстрактная схема автоматизации заявок и CRM-процессов" width={1200} height={1500} />
          </div>
          <div className={grid.grid2}>
            {data.cards.map((card) => (
              <article className={styles.card} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
