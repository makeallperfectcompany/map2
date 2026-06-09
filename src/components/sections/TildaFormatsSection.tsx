import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { tildaService } from "@/content/services/tilda";
import styles from "./TildaFormatsSection.module.css";

export default function TildaFormatsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.label}>Форматы</span>
          <h2>Создаём сайт в формате, который помогает клиенту принять решение</h2>
          <p>Tilda подходит для разных коммерческих задач, но результат определяет не тип конструктора, а логика страницы: что пользователь должен понять, чему поверить и какое действие совершить. Поэтому формат сайта выбираем после задачи, предложения и источников будущего трафика.</p>
        </div>
        <div className={grid.grid3}>
          {tildaService.formats.map((item) => <article className={styles.card} key={item.title}><h3>{item.title}</h3><p>{item.text}</p>{item.examples && <small className={styles.examples}>{item.examples}</small>}</article>)}
        </div>
        <a className={styles.link} href="#lead-form">Подобрать формат сайта →</a>
      </Container>
    </section>
  );
}
