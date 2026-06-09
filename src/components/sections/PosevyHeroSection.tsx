import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import styles from "./PosevyHeroSection.module.css";

interface Props {
  content: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    background: string;
  };
}

export default function PosevyHeroSection({ content }: Props) {
  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${content.background})` }}>
      <Container className={styles.heroInner}>
        <div className={styles.content}>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <div className={styles.heroActions}>
            <Link href="#final-cta" className={`${styles.btn} ${styles.primary}`}>
              {content.primaryCta}
            </Link>
            <Link href="#pricing" className={`${styles.btn} ${styles.secondary}`}>
              {content.secondaryCta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
