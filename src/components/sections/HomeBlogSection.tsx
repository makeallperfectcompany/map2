import Link from "next/link";
import { homeBlog } from "@/content/home/blog";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HomeBlogSection.module.css";

export default function HomeBlogSection() {
  return (
    <section className={styles.blogSection}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className={styles.sectionLabel}>{homeBlog.label}</span>
            <h2>{homeBlog.title}</h2>
            <p>{homeBlog.description}</p>
          </div>

        </div>

        <div className={styles.navRow} aria-label="Категории блога">
          {homeBlog.categories.map((category, index) => (
            <button
              className={`${styles.categoryButton} ${index === 0 ? styles.activeCategory : ""}`}
              type="button"
              key={category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.postsGrid}>
          {homeBlog.posts.map((post) => (
            <a className={styles.articleCard} href={post.href} key={post.title}>
              <div className={styles.articleImage}>
                <img src={post.cover} alt={post.title} title={post.title} loading="lazy" decoding="async" />
              </div>
              <div className={styles.articleBody}>
                <div className={styles.articleMeta}>
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className={styles.readMore}>Открыть →</span>
              </div>
            </a>
          ))}
        </div>

      </Container>
    </section>
  );
}
