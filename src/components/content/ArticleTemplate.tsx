import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import type { Article } from "@/content/articles";
import styles from "./ArticleTemplate.module.css";

const BASE_URL = "https://map2.vercel.app";

export default function ArticleTemplate({ article }: { article: Article }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.cover ? `${BASE_URL}${article.cover}` : `${BASE_URL}/og-image.jpg`,
    datePublished: article.date,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Make All Perfect",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${article.url}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Блог", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${BASE_URL}${article.url}` },
    ],
  };

  return (
    <main className={styles.articlePage}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article>
        <header className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Блог", href: "/blog" },
                { label: article.category },
                { label: article.title },
              ]}
            />

            <div className={styles.meta}>
              <span>{article.category}</span>
              <span>{article.date}</span>
              <span>Обновлено: {article.updatedAt}</span>
              <span>{article.readingTime}</span>
            </div>

            <h1>{article.title}</h1>
            <p>{article.description}</p>

            <div className={styles.authorMini}>
              <div className={styles.avatar}><img src="/images/dmitry-grafov.webp" alt="Дмитрий Графов" className={styles.avatarImg} /></div>
              <div>
                <strong>{article.author}</strong>
                <span>{article.authorRole}</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.coverWrap}>
          <div className={styles.container}>
            <div className={styles.cover}>
              <img src={article.cover} alt={article.title} loading="eager" decoding="async" />
            </div>
          </div>
        </div>

        <div className={styles.contentWrap}>
          <div className={styles.container}>
            <aside className={styles.sidebar}>
              <nav className={styles.toc} aria-label="Оглавление">
                <span>В статье</span>
                {article.content.sections.map((section) => (
                  <a href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`} key={section.title}>
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className={styles.sidebarCta}>
                <span>Экспресс-разбор</span>
                <strong>Покажем, где маркетинг теряет рост</strong>
                <a href="/#contacts">Получить разбор</a>
              </div>
            </aside>

            <div className={styles.content}>
              <section className={styles.takeaways}>
                <span>В статье разберём</span>
                <ul>
                  {article.takeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <p className={styles.intro}>{article.content.intro}</p>

              {article.content.sections.map((section) => (
                <section id={section.title.toLowerCase().replaceAll(" ", "-")} key={section.title} className={styles.articleSection}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                  {section.bullets ? (
                    <ul className={styles.contentList}>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.imageAfter ? (
                    <figure className={styles.articleFigure}>
                      <img
                        src={section.imageAfter.src}
                        alt={section.imageAfter.alt}
                        title={section.imageAfter.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      {section.imageAfter.caption ? (
                        <figcaption>{section.imageAfter.caption}</figcaption>
                      ) : null}
                    </figure>
                  ) : null}

                  {section.quoteAfter ? (
                    <blockquote className={styles.expertQuote}>
                      <p>
                        Маркетинг становится управляемым только тогда, когда команда видит не клики,
                        а связь между каналами, заявками, продажами и повторными касаниями.
                      </p>
                    </blockquote>
                  ) : null}

                  {section.ctaAfter ? (
                    <div className={styles.inlineCta}>
                      <div>
                        <span>Хотите понять, где теряется рост?</span>
                        <strong>
                          Проведём экспресс-разбор сайта, рекламы и аналитики и покажем, какие точки роста можно усилить в первую очередь.
                        </strong>
                      </div>
                      <a href="/#contacts">Получить разбор</a>
                    </div>
                  ) : null}
                </section>
              ))}

              <section className={styles.relatedSection}>
                <div className={styles.relatedHead}>
                  <span>Читайте также</span>
                  <h2>Полезные статьи по теме</h2>
                </div>
                <div className={styles.relatedGrid}>
                  {article.relatedArticles.map((item) => (
                    <a href={item.href} className={styles.relatedCard} key={item.title}>
                      <span>{item.label}</span>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </a>
                  ))}
                </div>
              </section>

              <section className={styles.relatedSection}>
                <div className={styles.relatedHead}>
                  <span>Кейсы</span>
                  <h2>Как это выглядит в проектах</h2>
                </div>
                <div className={styles.relatedGrid}>
                  {article.relatedCases.map((item) => (
                    <a href={item.href} className={styles.relatedCard} key={item.title}>
                      <span>{item.label}</span>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </a>
                  ))}
                </div>
              </section>

              <div className={styles.finalCta}>
                <span>Нужна такая система для вашего бизнеса?</span>
                <strong>Разберём текущий маркетинг и соберём план роста.</strong>
                <a href="/#contacts">Обсудить проект</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
