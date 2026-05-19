import styles from './Hero.module.css';

const bullets = [
  { icon: '/hero/icons/strategy.svg', title: 'Стратегия и\nрост' },
  { icon: '/hero/icons/design.svg', title: 'Дизайн и\nконтент' },
  { icon: '/hero/icons/ads.svg', title: 'Реклама и\nаналитика' },
  { icon: '/hero/icons/seo.svg', title: 'SEO и\nразработка' },
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Make All Perfect">
          <span className={styles.logoMark}>M</span>
          <span className={styles.logoText}>Make All Perfect</span>
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          <a href="#services">Услуги</a>
          <a href="#cases">Кейсы</a>
          <a href="#approach">Подход</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <button className={styles.menuButton} type="button" aria-label="Открыть меню">
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Маркетинговое агентство полного цикла</p>
          <h1 id="hero-title">Создаём систему роста для бизнеса, а не просто запускаем рекламу</h1>
          <p className={styles.lead}>
            Стратегия, performance-маркетинг, SEO, разработка, дизайн и аналитика в одной связке — чтобы заявки, продажи и окупаемость росли управляемо.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#contacts">Обсудить проект</a>
            <a className={styles.secondary} href="#cases">Смотреть кейсы</a>
          </div>
        </div>

        <div className={styles.visualCard} aria-label="Направления работы Make All Perfect">
          <div className={styles.crystalBg} />
          <div className={styles.bullets}>
            {bullets.map((item) => (
              <div className={styles.bullet} key={item.title}>
                <span className={styles.iconShell}>
                  <img src={item.icon} alt="" aria-hidden="true" />
                </span>
                <span>{item.title.split('\n').map((line) => <span key={line}>{line}</span>)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
