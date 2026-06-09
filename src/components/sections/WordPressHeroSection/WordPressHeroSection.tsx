import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import type { WordPressContent } from "@/content/services/wordpress";
import styles from "./WordPressHeroSection.module.css";

type Props = { content: WordPressContent["hero"] };

export default function WordPressHeroSection({ content }: Props) {
  return (
    <section className={styles.heroSection}>
      <picture className={styles.background} aria-hidden="true">
        <source media="(max-width: 767px)" srcSet={content.mobileImage} />
        <Image src={content.desktopImage} alt="Разработка сайта на WordPress под ключ — Make All Perfect" fill priority className={styles.backgroundImage} sizes="100vw" />
      </picture>
      <Container className={styles.heroInner}>
        <div className={styles.left}>
          <h1 className={styles.heroTitle}>{content.title}</h1>
          <p className={styles.heroLead}>{content.description}</p>
          <div className={styles.heroActions}>
            <Link href="#request" className={`${styles.btn} ${styles.btnAccent}`}><span className={styles.label}>{content.primaryCta}</span><span className={styles.arrWrap} aria-hidden="true"><svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none"><path d="M2 7h9M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg><svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none"><path d="M2 7h9M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></Link>
            <Link href="#price" className={`${styles.btn} ${styles.btnGhost}`}><span className={styles.label}>{content.secondaryCta}</span><span className={styles.arrWrap} aria-hidden="true"><svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none"><path d="M2 7h9M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg><svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none"><path d="M2 7h9M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></Link>
          </div>
          <p className={styles.trustLine}>{content.trustLine}</p>
        </div>
      </Container>
    </section>
  );
}
