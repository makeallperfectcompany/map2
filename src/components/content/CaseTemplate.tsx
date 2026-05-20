import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import type { CaseItem } from "@/content/cases";
import styles from "./CaseTemplate.module.css";

const BASE_URL = "https://map2.vercel.app";

export default function CaseTemplate({ item }: { item: CaseItem }) {
  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.description,
    image: item.cover ? `${BASE_URL}${item.cover}` : `${BASE_URL}/og-image.jpg`,
    datePublished: item.date,
    author: {
      "@type": "Organization",
      name: "Make All Perfect",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Make All Perfect",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${item.url}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Кейсы", item: `${BASE_URL}/cases` },
      { "@type": "ListItem", position: 3, name: item.title, item: `${BASE_URL}${item.url}` },
    ],
  };

  return (
    <main className={styles.casePage}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Кейсы", href: "/cases" },
                { label: item.category },
                { label: item.title },
              ]}
            />

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
              <img src={item.cover} alt={`Кейс: ${item.title}`} loading="eager" decoding="async" />
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
