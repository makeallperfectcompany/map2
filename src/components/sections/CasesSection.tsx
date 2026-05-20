import styles from "./CasesSection.module.css";

const filters = ["Все", "Маркетплейсы", "E-commerce", "Услуги", "Медицина"];

const cases = [
  {
    category: "Маркетплейсы",
    title: "Рост продаж на Wildberries через внешний трафик",
    description:
      "Собрали связку из аналитики, рекламных каналов и оптимизации карточек, чтобы увеличить заказы и снизить зависимость от внутренней рекламы.",
    metrics: ["+87% заказов", "2,8% ДРР", "31 млн ₽ продаж"],
  },
  {
    category: "E-commerce",
    title: "SEO и UX для интернет-магазина товаров для дома",
    description:
      "Перестроили структуру, усилили коммерческие страницы и улучшили путь пользователя от поиска до покупки.",
    metrics: ["+125% продаж", "+15 500 визитов", "3,1% конверсия"],
  },
  {
    category: "Медицина",
    title: "Рост заявок для региональной клиники",
    description:
      "Объединили SEO, рекламу и UX-доработки сайта в единую систему привлечения пациентов.",
    metrics: ["×3,2 заявки", "CPL 450 ₽", "3,8% конверсия"],
  },
];

const summary = [
  "30+ проектов в работе и развитии",
  "5 направлений в одной системе",
  "SEO, реклама, дизайн, контент и аналитика",
  "От стратегии до масштабирования",
];

export default function CasesSection() {
  return (
    <section className={styles.casesSection} id="cases" aria-labelledby="cases-title">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.copy}>
            <div className={styles.eyebrow}>Кейсы</div>
            <h2 className={styles.title} id="cases-title">
              Результаты, которые видно в цифрах
            </h2>
            <p className={styles.lead}>
              Показываем не просто красивые запуски, а системную работу: стратегия, трафик,
              упаковка, аналитика и рост ключевых показателей бизнеса.
            </p>
          </div>

          <div className={styles.topActions}>
            <div className={styles.filters} aria-label="Фильтры кейсов">
              {filters.map((filter, index) => (
                <button
                  className={`${styles.filter} ${index === 0 ? styles.activeFilter : ""}`}
                  type="button"
                  key={filter}
                >
                  {filter}
                </button>
              ))}
            </div>
            <a className={styles.allCasesLink} href="#contacts">
              Смотреть все кейсы <span>↗</span>
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.visualCard}>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/assets/home/cases/cases-visual-mobile.webp"
              />
              <img
                src="/assets/home/cases/cases-visual.webp"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className={styles.visualBadge}>
              <span>12+ направлений</span>
              <strong>Performance / SEO / Design / Analytics</strong>
            </div>
          </div>

          <div className={styles.caseList}>
            {cases.map((item) => (
              <article className={styles.caseCard} key={item.title}>
                <div className={styles.caseCategory}>{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.metricGrid}>
                  {item.metrics.map((metric) => (
                    <span className={styles.metricPill} key={metric}>
                      {metric}
                    </span>
                  ))}
                </div>
                <a className={styles.caseLink} href="#contacts">
                  Разобрать кейс <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.summaryRail} aria-label="Общие преимущества работы">
          {summary.map((item, index) => (
            <div className={styles.summaryItem} key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
