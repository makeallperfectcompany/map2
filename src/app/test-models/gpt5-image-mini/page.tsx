import styles from "./page.module.css";

export const metadata = { title: "Генерация GPT-5 Image Mini — тест картинок" };

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.bg} />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <nav className={styles.breadcrumb}>
            <a href="/">Главная</a><span aria-hidden="true">—</span>
            <span>Тест моделей</span><span aria-hidden="true">—</span>
            <span>GPT-5 Image Mini</span>
          </nav>
          <h1 className={styles.title}>Реклама в Telegram Ads, которая окупается</h1>
          <p className={styles.subtitle}>Сгенерировано через <strong>GPT-5 Image Mini</strong></p>
          <p className={styles.desc}>Привлекаем целевую аудиторию в ваш канал или на сайт через официальную рекламу Telegram.</p>
          <div className={styles.actions}>
            <a className={styles.btnPrimary} href="#">Получить консультацию ↗</a>
            <a className={styles.btnGhost} href="#">Смотреть кейсы ↗</a>
          </div>
        </div>
      </section>
    </div>
  );
}
