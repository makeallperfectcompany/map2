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

"use client";

import React from "react";

export default function BlogIndexSection() {
  const [activeCategory, setActiveCategory] = React.useState("Все");

  const filteredArticles = activeCategory === "Все"
    ? listedArticles
    : listedArticles.filter((a) => a.category === activeCategory);

  const featuredArticle = filteredArticles[0];

  return (
    <main className={styles.blogPage}>
      <section className={styles.hero} aria-labelledby="blog-title">
        <div className={styles.container}>
          <div className={styles.eyebrow}>Блог Make All Perfect</div>
          <h1 id="blog-title">Статьи о маркетинге, который работает на рост</h1>
          <p>
            Практика, аналитика и разборы по рекламе, SEO, маркетплейсам, контенту,
            сайтам и системному продвижению бизнеса.
          </p>

          <div className={styles.categoryBar} aria-label="Категории статей">
            {categories.map((category, index) => (
              <button className={`${styles.categoryButton} ${activeCategory === category ? styles.activeCategory : ""}`} type="button" key={category} onClick={() => setActiveCategory(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featured} aria-label="Избранная статья">
        <div className={styles.container}>
          <a className={styles.featuredCard} href={featuredArticle.href}>
            <div className={styles.featuredImage}>
              <img src={featuredArticle.cover} alt="" loading="eager" decoding="async" />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.articleMeta}>
                <span>{featuredArticle.category}</span>
                <span>{featuredArticle.date}</span>
                <span>{featuredArticle.readingTime}</span>
              </div>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.description}</p>
              <span className={styles.readLink}>Читать статью ↗</span>
            </div>
          </a>
        </div>
      </section>

      <section className={styles.articleGridSection} aria-label="Все статьи">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Новые материалы</h2>
            <a href="/blog/test-article">Все статьи →</a>
          </div>

          <div className={styles.articleGrid}>
            {filteredArticles.map((article) => (
              <a className={styles.articleCard} href={article.href} key={`${article.category}-${article.title}`}>
                <div className={styles.articleImage}>
                  <img src={article.cover} alt="" loading="lazy" decoding="async" />
                </div>
                <div className={styles.articleBody}>
                  <div className={styles.articleMeta}>
                    <span>{article.category}</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.blogCta}>
            <div>
              <span>Нужен не просто контент, а система?</span>
              <strong>Разберём ваш маркетинг и покажем точки роста.</strong>
            </div>
            <a href="/#contacts">Обсудить проект</a>
          </div>
        </div>
      </section>
    </main>
  );
}
