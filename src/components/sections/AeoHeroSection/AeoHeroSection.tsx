import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import styles from "./AeoHeroSection.module.css";

type AeoHeroSectionProps = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export default function AeoHeroSection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: AeoHeroSectionProps) {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroInner}>
          <div className={styles.left}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroLead}>{description}</p>

            <div className={styles.heroActions}>
              <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
                <span className={styles.label}>{primaryCta}</span>
                <span className={styles.arrWrap}>
                  <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </OpenConsultationButton>

              <Link href="/cases" className={`${styles.btn} ${styles.btnGhost}`}>
                <span className={styles.label}>{secondaryCta}</span>
                <span className={styles.arrWrap}>
                  <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className={styles.right} aria-hidden="true">
            <div className={styles.heroOrb}>
              <span className={styles.orbCore} />
              <span className={styles.orbRing} />
              <span className={styles.orbPanel} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
