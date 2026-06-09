import { googleAdsPage } from '@/content/googleAdsPage';
import { Arrow, SectionLabel } from './SectionElements';
import styles from './GoogleAdsFaq.module.css';

export function GoogleAdsFaq() {
  const { faq } = googleAdsPage;
  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.heading}>
          <div><SectionLabel>{faq.label}</SectionLabel><h2>{faq.title}</h2></div>
          <aside>
            <small>AUDIT</small>
            <h3>Не нашли свой вопрос?</h3>
            <p>Разберём задачу и предложим подходящий сценарий запуска.</p>
            <a href="#contact">Получить консультацию <Arrow /></a>
          </aside>
        </div>
        <div className={styles.list}>
          {faq.items.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}<b aria-hidden="true">+</b></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
