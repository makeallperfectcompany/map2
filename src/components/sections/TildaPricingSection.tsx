import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import { tildaService } from "@/content/services/tilda";
import styles from "./TildaPricingSection.module.css";

export default function TildaPricingSection() {
  const c = tildaService.pricing;
  return (
    <section className={styles.section}>
      <Container>
        <article className={styles.panel}>
          <div className={styles.copy}>
            <span className={styles.label}>Стоимость</span>
            <h2>{c.title}</h2>
            <p>{c.text}</p>
            <ul className={styles.ranges}>
              {c.ranges.map((r) => (
                <li key={r.type}><strong>{r.type}</strong> — {r.price}</li>
              ))}
            </ul>
            <p className={styles.caveat}>{c.caveat}</p>
          </div>
          <div className={styles.offer}>
            <strong>{c.price}</strong>
            <p>{c.note}</p>
            <Link href="#lead-form" className={styles.button}>{c.cta}<span>↗</span></Link>
            <small className={styles.micro}>{c.microTrust}</small>
          </div>
        </article>
      </Container>
    </section>
  );
}
