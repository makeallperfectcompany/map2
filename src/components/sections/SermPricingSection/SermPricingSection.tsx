import { Container } from '@/components/ui/Container/Container';
import { sermContent } from '@/content/services/serm';
import styles from './SermPricingSection.module.css';

export function SermPricingSection() {
  const { pricing } = sermContent;
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div>
            <h2>{pricing.title}</h2>
            <p>{pricing.description}</p>
            <div className={styles.consultation}>
              <strong>На бесплатной консультации вы получите:</strong>
              <ul>
                <li>Разбор текущей выдачи по названию компании</li>
                <li>Оценку репутационных рисков в поиске</li>
                <li>Понимание, какие материалы можно усилить</li>
                <li>Примерный план действий и ориентир по стоимости</li>
              </ul>
            </div>
          </div>
          <aside className={styles.card}>
            <div className={styles.price}>{pricing.price}</div>
            <p>{pricing.note}</p>
            <a href="#lead-form">{pricing.cta}</a>
          </aside>
        </div>
      </Container>
    </section>
  );
}
