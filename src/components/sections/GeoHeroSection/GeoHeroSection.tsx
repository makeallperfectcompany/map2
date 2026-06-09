import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { geoServiceContent } from "@/content/services/geo-prodvizhenie-v-nejrosetyah";
import styles from "./GeoHeroSection.module.css";

export default function GeoHeroSection() {
  const { hero } = geoServiceContent;

  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroInner}>
          <div className={styles.left}>
            <h1 className={styles.heroTitle}>{hero.title}</h1>
            <p className={styles.heroLead}>{hero.lead}</p>

            <div className={styles.heroActions}>
              <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
                <span className={styles.label}>{hero.primaryCta}</span>
                <span className={styles.arrWrap}>
                  <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </OpenConsultationButton>

              <Link href="#how-it-works" className={`${styles.btn} ${styles.btnGhost}`}>
                <span className={styles.label}>{hero.secondaryCta}</span>
                <span className={styles.arrWrap}>
                  <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className={styles.right} aria-hidden="true">
            <div className={styles.geoVisual}>
              <span className={styles.orbit} />
              <span className={`${styles.signalCard} ${styles.signalCardOne}`} />
              <span className={`${styles.signalCard} ${styles.signalCardTwo}`} />
              <span className={`${styles.signalCard} ${styles.signalCardThree}`} />
              <span className={styles.connectionOne} />
              <span className={styles.connectionTwo} />
              <span className={styles.coreSphere} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
