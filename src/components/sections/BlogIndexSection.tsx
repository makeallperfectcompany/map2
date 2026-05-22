"use client";

import { useState, useMemo } from "react";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { Container } from "@/components/ui/Container/Container";
import styles from "./BlogIndexSection.module.css";
import { articles } from "@/content/articles";

const categories = ["Все", ...Array.from(new Set(articles.map((a) => a.category)))];

const listedArticles = articles.map((a) => ({
  href: a.url,
  category: a.category,
  date: a.date,
  title: a.title,
  description: a.description,
  cover: a.cover,
  readingTime: a.readingTime,
}));

export default function BlogIndexSection() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [page, setPage] = useState(0);
  const PER_PAGE = 6;

  const filteredArticles = useMemo(() => {
    const result = activeCategory === "Все"
      ? listedArticles
      : listedArticles.filter((a) => a.category === activeCategory);
    return result;
  }, [activeCategory]);

  const totalPages = useMemo(() => Math.ceil(filteredArticles.length / PER_PAGE), [filteredArticles]);
  const paginatedArticles = useMemo(
    () => filteredArticles.slice(page * PER_PAGE, (page + 1) * PER_PAGE),
    [filteredArticles, page]
  );

  // Reset to page 0 when filter changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setPage(0);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;
    const pages: number[] = [];
    for (let i = 0; i < totalPages; i++) {
      if (totalPages <= 7 || i === 0 || i === totalPages - 1 || Math.abs(i - page) <= 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== -1) {
        pages.push(-1);
      }
    }

    return (
      <nav className={styles.pagination} aria-label="Пагинация статей">
        {pages.map((p, idx) =>
          p === -1 ? (
            <span className={styles.pageEllipsis} key={`ellipsis-${idx}`}>…</span>
          ) : (
            <button
              className={`${styles.pageButton} ${page === p ? styles.activePage : ""}`}
              type="button"
              key={p}
              onClick={() => setPage(p)}
              aria-current={page === p ? "page" : undefined}
            >
              {p + 1}
            </button>
          )
        )}
        {page < totalPages - 1 && (
          <button
            className={styles.pageArrow}
            type="button"
            onClick={() => setPage(page + 1)}
            aria-label="Следующая страница"
          >
            →
          </button>
        )}
      </nav>
    );
  };

  return (
    <main className={styles.blogPage}>
      <section className={styles.hero} aria-labelledby="blog-title">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Блог" },
            ]}
          />
          <h1 id="blog-title">Статьи о маркетинге, который работает на рост</h1>
          <p>
            Практика, аналитика и разборы по рекламе, SEO, маркетплейсам, контенту,
            сайтам и системному продвижению бизнеса.
          </p>

          <div className={styles.categoryBar} aria-label="Категории статей">
            {categories.map((category) => (
              <button
                className={`${styles.categoryButton} ${activeCategory === category ? styles.activeCategory : ""}`}
                type="button"
                key={category}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.articleGridSection} aria-label="Все статьи">
        <Container>
          <h2 className={styles.gridTitle}>Новые материалы</h2>

          <div className={styles.articleGrid}>
            {paginatedArticles.map((article) => (
              <a className={styles.articleCard} href={article.href} key={`${article.category}-${article.title}`}>
                <div className={styles.articleImage}>
                  <img src={article.cover} alt={article.title} loading="lazy" decoding="async" />
                </div>
                <div className={styles.articleBody}>
                  <div className={styles.articleMeta}>
                    <span>{article.category}</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <span className={styles.readMore}>Открыть →</span>
                </div>
              </a>
            ))}
          </div>

          {renderPagination()}

          <div className={styles.blogCta}>
            <div>
              <span>Нужен не просто контент, а система?</span>
              <strong>Разберём ваш маркетинг и покажем точки роста.</strong>
            </div>
            <a href="/#contacts">Обсудить проект</a>
          </div>
        </Container>
      </section>
    </main>
  );
}
