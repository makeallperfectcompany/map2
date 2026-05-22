import styles from "./PrinciplesSection.module.css";

const PRINCIPLES = [
  "Не продаём лишнее",
  "Не работаем вслепую",
  "Не копируем шаблоны",
  "Сначала система, потом масштаб",
  "Решения на основе данных",
];

export default function PrinciplesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Принципы работы</h2>
        <ul className={styles.list}>
          {PRINCIPLES.map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.bullet}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
