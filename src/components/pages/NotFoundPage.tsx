import Link from "next/link";
import { notFoundPageContent } from "@/content/pages/not-found";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles.notFoundPage}>
      <div className={styles.background} aria-hidden="true" />

      <section className={styles.content} aria-labelledby="not-found-title">
        <span className={styles.label}>{notFoundPageContent.label}</span>

        <h1 id="not-found-title">{notFoundPageContent.title}</h1>

        <p>{notFoundPageContent.description}</p>

        <Link className={styles.primaryButton} href={notFoundPageContent.cta.href}>
          <span>{notFoundPageContent.cta.label}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
