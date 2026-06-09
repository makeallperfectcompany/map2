"use client";

import { useMemo, useState } from "react";
import { homeBlog } from "@/content/home/blog";
import { articles } from "@/content/articles";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HomeBlogSection.module.css";

const PER_PAGE = 3;

export default function HomeBlogSection() {
  const sortedPosts = useMemo(
    () =>
      articles
        .slice()
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((article) => ({
          category: article.category || "Блог",
          title: article.title,
          excerpt: article.description,
          href: article.url || `/blog/${article.slug}`,
          date: article.date,
          cover: article.cover,
        })),
    [],
  );

  const totalSlides = Math.ceil(sortedPosts.length / PER_PAGE);
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide((s) => Math.max(0, s - 1));
  const next = () => setSlide((s) => Math.min(totalSlides - 1, s + 1));

  return (
    <section className={styles.blogSection}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className={styles.sectionLabel}>{homeBlog.label}</span>
            <h2>{homeBlog.title}</h2>
            <p>{homeBlog.description}</p>
          </div>
          <a className={styles.desktopCta} href={homeBlog.cta.href}>
            {homeBlog.cta.label} ↗
          </a>
        </div>

        <div className={styles.carouselOuter}>
          <div className={styles.postsGrid} key={slide}>
            {sortedPosts.slice(slide * PER_PAGE, slide * PER_PAGE + PER_PAGE).map((post) => (
              <a className={styles.articleCard} href={post.href} key={post.title}>
                <div className={styles.articleImage}>
                  <img src={post.cover} alt={post.title} title={post.title} loading="lazy" decoding="async" />
                </div>
                <div className={styles.articleBody}>
                  <div className={styles.contentBody}>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                  <span className={styles.readMore}>Открыть →</span>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.carouselNav}>
            <button
              className={`${styles.arrowBtn} ${slide === 0 ? styles.arrowDisabled : ""}`}
              onClick={prev}
              disabled={slide === 0}
              aria-label="Предыдущие статьи"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.dots}>
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === slide ? styles.dotActive : ""}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Страница ${i + 1}`}
                />
              ))}
            </div>

            <button
              className={`${styles.arrowBtn} ${slide === totalSlides - 1 ? styles.arrowDisabled : ""}`}
              onClick={next}
              disabled={slide === totalSlides - 1}
              aria-label="Следующие статьи"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <a className={styles.mobileCta} href={homeBlog.cta.href}>
          {homeBlog.cta.label} ↗
        </a>
      </Container>
    </section>
  );
}
