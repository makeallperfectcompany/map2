import Link from "next/link";
import { homeFaq } from "@/content/home/faq";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HomeFaqSection.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items?: FaqItem[];
  title?: string;
}

export default function HomeFaqSection({ items, title }: Props) {
  return (
    <section className={styles.faqSection}>
      <Container className={styles.inner}>
        <div className={styles.headerGrid}>
          <div className={styles.header}>
            <span className={styles.sectionLabel}>{homeFaq.label}</span>
            <h2>{title ?? homeFaq.title}</h2>
            <p>{homeFaq.description}</p>
          </div>

          {!items && <aside className={styles.ctaCard}>
            <span className={styles.ctaEyebrow}>AUDIT</span>
            <h3>{homeFaq.cta.title}</h3>
            <p>{homeFaq.cta.text}</p>
            <Link className={styles.ctaButton} href={homeFaq.cta.href}>
              {homeFaq.cta.button}
            </Link>
          </aside>}
        </div>

        <div className={styles.faqList}>
          {(items ?? homeFaq.items).map((item, index) => (
            <details className={styles.faqItem} key={item.question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.question}</h3>
                <i aria-hidden="true" />
              </summary>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
