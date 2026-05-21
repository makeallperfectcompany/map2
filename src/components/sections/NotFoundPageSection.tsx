import styles from "./NotFoundPageSection.module.css";

export default function NotFoundPageSection() {
  return (
    <main className={styles.notFoundPage}>
      <section className={styles.hero} aria-labelledby="not-found-title">
        <div className={styles.background} aria-hidden="true" />
        <div className={styles.glassCardOne} aria-hidden="true" />
        <div className={styles.glassCardTwo} aria-hidden="true" />
        <div className={styles.nodeOne} aria-hidden="true" />
        <div className={styles.nodeTwo} aria-hidden="true" />
        <div className={styles.nodeThree} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>404 · Страница не найдена</div>
            <h1 id="not-found-title">Не нашли эту страницу</h1>
            <p>
              Похоже, адрес изменился, ссылка устарела или раздел был перенесён.
              Вернитесь на главную — поможем быстро найти нужную информацию.
            </p>

            <div className={styles.actions}>
              <a href="/">На главную</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
