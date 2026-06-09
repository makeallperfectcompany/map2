import { SectionLabel, Icon } from './SectionElements';
import styles from './GoogleAdsTransparency.module.css';

const items = [
  { title: 'Понятный объём работ', text: 'До старта фиксируем задачи, этапы и формат взаимодействия.' },
  { title: 'Контроль рекламных данных', text: 'Согласовываем доступы к аккаунтам, аналитике и результатам.' },
  { title: 'Отчётность по показателям', text: 'Показываем динамику кампаний и принятые решения.' },
  { title: 'Решения на основе аналитики', text: 'Оптимизируем рекламу по данным о действиях и конверсиях.' },
];

export function GoogleAdsTransparency() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>Прозрачность</SectionLabel>
        <h2>Принципы работы, на которых строится сопровождение Google Ads</h2>
        <div className={styles.cards}>
          {items.map((item) => <article key={item.title}><Icon name="shield" /><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
