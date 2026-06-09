import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import styles from "./RedesignHeroSection.module.css";
import { redesignServiceContent } from "@/content/services/redizayn-i-dorabotka-saytov";

export default function RedesignHeroSection() {
  const { hero } = redesignServiceContent;
  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${hero.backgroundImage})` }}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1>{hero.title}</h1>
          <p className={styles.lead}>{hero.description}</p>
          <p className={styles.price}>{hero.price}</p>
          <div className={styles.heroActions}>
            <Link className={`${styles.btn} ${styles.btnAccent}`} href="#lead-form">
              <span className={styles.label}>{hero.primaryCta}</span><span aria-hidden="true">↗</span>
            </Link>
            <Link className={`${styles.btn} ${styles.btnGhost}`} href="#cases">
              <span className={styles.label}>{hero.secondaryCta}</span><span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
