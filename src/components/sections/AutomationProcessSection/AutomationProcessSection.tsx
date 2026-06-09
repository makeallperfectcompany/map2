import styles from './AutomationProcessSection.module.css';

export function AutomationProcessSection({ data }: { data: { title: string; text: string; cta: string; steps: Array<{ title: string; text: string }> } }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.stickyText}>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <a href="#contact">{data.cta}</a>
          </div>
          <div className={styles.steps}>
            {data.steps.map((step, index) => (
              <article className={styles.step} key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
