import { googleAdsPage } from '@/content/googleAdsPage';
import { Arrow, SectionLabel } from './SectionElements';
import styles from './GoogleAdsProcess.module.css';

export function GoogleAdsProcess() {
  const { process } = googleAdsPage;
  return (
    <section className={styles.section} id="process">
      <div className={styles.container}>
        <SectionLabel>{process.label}</SectionLabel>
        <h2>{process.title}</h2>
        <p>{process.text}</p>
        <div className={styles.steps}>
          {process.items.map((item) => <article key={item.number}><small>{item.number}</small><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
        <a className={styles.cta} href="#contact">Обсудить запуск рекламы <Arrow /></a>
      </div>
    </section>
  );
}
