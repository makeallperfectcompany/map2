import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import type { Article } from "@/content/articles";
import styles from "./ArticleTemplate.module.css";

const BASE_URL = "https://map2.vercel.app";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-zа-яё0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

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

  const tocItems = article.body.filter(
    (b) => b.type === "h2" && b.showInContent !== false && b.content
  );

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

            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>
        </header>

        <div className={styles.contentWrap}>
          <div className={styles.container}>
            {tocItems.length > 0 ? (
              <aside className={styles.sidebar}>
                <nav className={styles.toc} aria-label="Оглавление">
                  <span>В статье</span>
                  {tocItems.map((item) => (
                    <a href={`#${slugify(item.content || "")}`} key={item.content}>
                      {item.content}
                    </a>
                  ))}
                </nav>

                <div className={styles.sidebarCta}>
                  <span>Экспресс-разбор</span>
                  <strong>Покажем, где маркетинг теряет рост</strong>
                  <a href="/#contacts">Получить разбор</a>
                </div>
              </aside>
            ) : (
              <aside className={styles.sidebar}>
                <div className={styles.sidebarCta}>
                  <span>Экспресс-разбор</span>
                  <strong>Покажем, где маркетинг теряет рост</strong>
                  <a href="/#contacts">Получить разбор</a>
                </div>
              </aside>
            )}

            <div className={styles.content}>
              {article.body.map((block, i) => {
                switch (block.type) {
                  case "h2":
                    return (
                      <section
                        id={slugify(block.content || "")}
                        key={`h2-${i}`}
                        className={styles.articleSection}
                      >
                        <h2>{block.content}</h2>
                      </section>
                    );
                  case "h3":
                    return <h3 key={`h3-${i}`}>{block.content}</h3>;
                  case "text":
                    return (
                      <p key={`text-${i}`} dangerouslySetInnerHTML={{ __html: block.content || "" }} />
                    );
                  case "image":
                    return (
                      <figure className={styles.articleFigure} key={`img-${i}`}>
                        <img
                          src={block.src}
                          alt={block.alt || ""}
                          title={block.alt || ""}
                          loading="lazy"
                          decoding="async"
                        />
                      </figure>
                    );
                  case "blockquote":
                    return (
                      <blockquote
                        className={styles.expertQuote}
                        key={`quote-${i}`}
                        dangerouslySetInnerHTML={{ __html: block.content || "" }}
                      />
                    );
                  default:
                    return null;
                }
              })}

              <section className={styles.relatedSection}>
                <div className={styles.relatedHead}>
                  <span>Читайте также</span>
                </div>
                <div className={styles.relatedGrid}>
                  {(() => {
                    const combined = [
                      ...article.relatedArticles,
                      ...article.relatedCases.filter((_, i) => i < 4 - article.relatedArticles.length)
                    ];
                    return combined.slice(0, 3).map((item) => (
                      <a href={item.href} className={styles.relatedCard} key={item.title}>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </a>
                    ));
                  })()}
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
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </a>
                  ))}
                </div>
              </section>

              <div className={styles.authorBottom}>
                <span className={styles.authorLabel}>Автор статьи</span>
                <div className={styles.authorRow}>
                  <div className={styles.avatarBot}><img src="/images/dmitry-grafov.webp" alt="Дмитрий Графов" className={styles.avatarBotImg} /></div>
                  <div>
                    <strong>{article.author}</strong>
                    <span>{article.authorRole}</span>
                  </div>
                </div>
              </div>

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
