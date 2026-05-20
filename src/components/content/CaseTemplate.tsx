import styles from "./CaseTemplate.module.css";

type CaseItem = {
  category: string;
  title: string;
  lead: string;
  cover: string;
  metrics: Array<{ value: string; label: string }>;
  facts: Array<{ label: string; value: string }>;
  sections: Array<{
    title: string;
    text: string;
    bullets?: string[];
    imageAfter?: {
      src: string;
      alt: string;
      caption?: string;
    };
  }>;
};

export default function CaseTemplate({ item }: { item: CaseItem }) {
  return (
    <main className={styles.casePage}>
      <article>
        <header className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <a href="/cases">Кейсы</a>
              <span>/</span>
              <span>{item.category}</span>
            </nav>

            <span className={styles.category}>{item.category}</span>
            <h1>{item.title}</h1>
            <p>{item.lead}</p>

            <div className={styles.metrics}>
              {item.metrics.map((metric) => (
                <div className={styles.metric} key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className={styles.coverWrap}>
          <div className={styles.container}>
            <div className={styles.cover}>
              <img src={item.cover} alt="" loading="eager" decoding="async" />
            </div>
          </div>
        </div>

        <div className={styles.contentWrap}>
          <div className={styles.container}>
            <aside className={styles.sidebar}>
              <div className={styles.factCard}>
                <span>Проект</span>
                {item.facts.map((fact) => (
                  <div className={styles.fact} key={fact.label}>
                    <small>{fact.label}</small>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>

              <div className={styles.sidebarCta}>
                <span>Похожая задача?</span>
                <strong>Разберём ваш проект и покажем точки роста</strong>
                <a href="/#contacts">Обсудить проект</a>
              </div>
            </aside>

            <div className={styles.content}>
              {item.sections.map((section) => (
                <section className={styles.caseSection} key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.imageAfter ? (
                    <figure className={styles.caseFigure}>
                      <img
                        src={section.imageAfter.src}
                        alt={section.imageAfter.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      {section.imageAfter.caption ? (
                        <figcaption>{section.imageAfter.caption}</figcaption>
                      ) : null}
                    </figure>
                  ) : null}
                </section>
              ))}

              <div className={styles.finalCta}>
                <span>Хотите похожий результат?</span>
                <strong>Соберём маркетинговую систему под вашу задачу.</strong>
                <a href="/#contacts">Получить разбор</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
