import { cases } from "@/content/cases";
import styles from "./CasesSection.module.css";

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
            <a className={styles.allCasesLink} href="/cases">
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
                alt="Кейсы Make All Perfect — маркетинг, SEO, реклама, аналитика"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className={styles.visualBadge}>
              <span>30+ направлений</span>
              <strong>Performance / SEO / Design / Analytics / E-com</strong>
            </div>
          </div>

          <div className={styles.caseList}>
            {cases.slice(0, 3).map((item) => (
              <article className={styles.caseCard} key={item.slug}>
                <div className={styles.caseCategory}>{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.lead}</p>
                <div className={styles.metricGrid}>
                  {item.metrics.slice(0, 3).map((metric) => (
                    <span className={styles.metricPill} key={metric.label}>
                      {metric.value} {metric.label}
                    </span>
                  ))}
                </div>
                <a className={styles.caseLink} href={item.url}>
                  Разобрать кейс <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
