import styles from './AutomationBotsHeroSection.module.css';

export function AutomationBotsHeroSection({ data }: { data: { title: string; description: string; primaryCta: string; secondaryCta: string; background: string } }) {
  return (
    <section className={styles.hero} style={{ backgroundImage: `linear-gradient(90deg, rgba(245,246,248,.96) 0%, rgba(245,246,248,.86) 42%, rgba(245,246,248,.2) 72%), url(${data.background})` }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#contact">{data.primaryCta}</a>
            <a className={styles.secondary} href="#scenarios">{data.secondaryCta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
