import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { WordPressContent } from "@/content/services/wordpress";
import styles from "./WordPressPricingSection.module.css";

type Props = { content: WordPressContent["pricing"] };
export default function WordPressPricingSection({ content }: Props) {
  return (
    <section id="price" className={styles.section}>
      <Container>
        <div className={`${grid.grid2} ${styles.panel}`}>
          <div>
            <span className={styles.label}>Стоимость</span>
            <h2>{content.title}</h2>
            <strong className={styles.price}>{content.price}</strong>
            <ul className={styles.ranges}>
              {content.ranges.map((r) => (
                <li key={r.type}><strong>{r.type}</strong> — {r.price}</li>
              ))}
            </ul>
          </div>
          <div className={styles.side}>
            <p>{content.text}</p>
            <p style={{ fontWeight: 600, marginTop: 20 }}>{content.evaluation}</p>
            <ul>{content.factors.map((x) => <li key={x}>{x}</li>)}</ul>
            <Link href="#request" className={styles.cta}>{content.cta}<span>→</span></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
