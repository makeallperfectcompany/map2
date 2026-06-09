import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoTechnologiesSection.module.css";

interface Props { items: readonly (readonly [string, string, string])[]; }

export default function AvitoTechnologiesSection({ items }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.label}>ТЕХНОЛОГИИ</span>
          <h2>Технологии и подходы, которые делают Авито (Avito) управляемым каналом</h2>
          <p>Используем рекламный кабинет, данные выдачи, тесты объявлений и аналитику лидов, чтобы управлять не только показами, но и заявками.</p>
        </div>
        <div className={grid.grid3}>
          {items.map(([eyebrow, title, text]) => (
            <article className={styles.card} key={eyebrow}>
              <span>{eyebrow}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
