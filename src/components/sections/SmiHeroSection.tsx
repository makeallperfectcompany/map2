import Image from "next/image";
import Link from "next/link";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { Container } from "@/components/ui/Container/Container";
import { smiContent } from "@/content/services/publikatsii-v-smi";
import styles from "./OrmHeroSection.module.css";

function Arrow({ white = false }: { white?: boolean }) {
  return (
    <span className={styles.arrWrap} aria-hidden="true">
      <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke={white ? "white" : "currentColor"} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke={white ? "white" : "currentColor"} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  );
}

export default function SmiHeroSection() {
  const { hero } = smiContent;
  return (
    <section className={styles.heroSection} aria-label="Публикации в СМИ">
      <Image className={`${styles.background} ${styles.desktop}`} src={hero.backgroundDesktop} alt="" fill priority sizes="100vw" />
      <Image className={`${styles.background} ${styles.mobile}`} src={hero.backgroundMobile} alt="" fill priority sizes="100vw" />
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className={styles.heroActions}>
            <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
              <span className={styles.label}>{hero.primaryCta}</span><Arrow white />
            </OpenConsultationButton>
            <Link href="/cases" className={`${styles.btn} ${styles.btnGhost}`}>
              <span className={styles.label}>{hero.secondaryCta}</span><Arrow />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
