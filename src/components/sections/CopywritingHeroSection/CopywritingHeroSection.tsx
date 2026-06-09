import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { copywritingServiceContent } from "@/content/services/kopirajting-dlya-sajta";
import styles from "./CopywritingHeroSection.module.css";

export default function CopywritingHeroSection() {
  const { hero } = copywritingServiceContent;
  const [beforeHighlight, afterHighlight] = hero.title.split(hero.highlight);

  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroInner}>
          <div className={styles.left}>
            <h1 className={styles.heroTitle}>
              {beforeHighlight}
              <span className={styles.highlight}>{hero.highlight}</span>
              {afterHighlight}
            </h1>
            <p className={styles.heroLead}>{hero.description}</p>
            <div className={styles.heroActions}>
              <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
                <span className={styles.label}>{hero.primaryCta}</span>
                <span className={styles.arrWrap} aria-hidden="true"><svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg><svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </OpenConsultationButton>
              <Link href="#copywriting-pricing" className={`${styles.btn} ${styles.btnGhost}`}>
                <span className={styles.label}>{hero.secondaryCta}</span>
                <span className={styles.arrWrap} aria-hidden="true"><svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg><svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </Link>
            </div>
          </div>

          <div className={styles.right} aria-hidden="true">
            <div className={styles.heroVisual}>
              <div className={`${styles.orb} ${styles.orbOne}`} />
              <div className={`${styles.orb} ${styles.orbTwo}`} />
              <div className={styles.documentPanel}>
                <div className={styles.panelTop}><span /><span /><span /></div>
                <i className={`${styles.skeleton} ${styles.titleLine}`} />
                <i className={`${styles.skeleton} ${styles.longLine}`} />
                <i className={`${styles.skeleton} ${styles.midLine}`} />
                <i className={`${styles.skeleton} ${styles.shortLine}`} />
                <div className={styles.accentRow}><span /><span /><span /></div>
                <div className={styles.contentGrid}><span /><span /><span /><span /></div>
              </div>
              <div className={`${styles.floatCard} ${styles.cardOne}`}><b /><i /><i /></div>
              <div className={`${styles.floatCard} ${styles.cardTwo}`}><b /><i /><i /><i /></div>
              <div className={`${styles.floatCard} ${styles.cardThree}`}><b /><i /><i /></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
