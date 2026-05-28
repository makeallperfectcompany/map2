"use client";

import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { Container } from "@/components/ui/Container/Container";
import styles from "./BlogIndexSection.module.css";
import { articles } from "@/content/articles";

const listedArticles = articles.map((a) => ({
  href: a.url,
  category: a.category,
  date: a.date,
  title: a.title,
  description: a.description,
  cover: a.cover,
}));

export default function BlogIndexSection() {
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
        </Container>
      </section>

      <section className={styles.articleGridSection} aria-label="Все статьи">
        <Container>
          <h2 className={styles.gridTitle}>Новые материалы</h2>

          <div className={styles.articleGrid}>
            {listedArticles.map((article) => (
              <a className={styles.articleCard} href={article.href} key={`${article.category}-${article.title}`}>
                <div className={styles.articleImage}>
                  <img src={article.cover} alt={article.title} title={article.title} loading="lazy" decoding="async" />
                </div>
                <div className={styles.articleBody}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <div className={styles.bottomBlock}>
                    <p className={styles.articleDesc}>{article.description}</p>
                    <span className={styles.readMore}>Открыть →</span>
                  </div>
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
        </Container>
      </section>
    </main>
  );
}
