import styles from './AutomationServiceFaqSection.module.css';

export function AutomationServiceFaqSection({ data }: { data: { title: string; items: Array<{ question: string; answer: string }> } }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{data.title}</h2>
        <div className={styles.list}>
          {data.items.map((item) => (
            <details className={styles.item} key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
