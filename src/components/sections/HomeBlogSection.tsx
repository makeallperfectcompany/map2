import Link from "next/link";
import { homeBlog } from "@/content/home/blog";
import styles from "./HomeBlogSection.module.css";

export default function HomeBlogSection() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.sectionLabel}>{homeBlog.label}</span>
            <h2>{homeBlog.title}</h2>
            <p>{homeBlog.description}</p>
          </div>

          <Link className={styles.desktopCta} href={homeBlog.cta.href}>
            {homeBlog.cta.label}
          </Link>
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
          {homeBlog.posts.map((post, index) => (
            <article className={`${styles.postCard} ${index === 0 ? styles.featuredPost : ""}`} key={post.title}>
              <Link className={styles.postLink} href={post.href} aria-label={post.title}>
                <div className={styles.postVisual} aria-hidden="true">
                  <span className={styles.postNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.visualLineOne} />
                  <span className={styles.visualLineTwo} />
                  <span className={styles.visualDot} />
                </div>

                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <span className={styles.readMore}>
                    Читать
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <Link className={styles.mobileCta} href={homeBlog.cta.href}>
          {homeBlog.cta.label}
        </Link>
      </div>
    </section>
  );
}
