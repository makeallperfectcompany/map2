import Image from 'next/image';
import Link from 'next/link';
import OpenConsultationButton from '@/components/forms/OpenConsultationButton';
import styles from './ReactDevelopmentHeroSection.module.css';

type HeroContent = { title: string; description: string; trustText: string; primaryCta: string; secondaryCta: string; desktopImage: string; mobileImage: string };

function ArrowSwap() {
  return (
    <span className={styles.arrWrap}>
      <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

export default function ReactDevelopmentHeroSection({ content }: { content: HeroContent }) {
  return (
    <section className={styles.heroSection}>
      <picture>
        <source media="(max-width: 767px)" srcSet={content.mobileImage} />
        <Image src={content.desktopImage} alt="" fill priority className={styles.heroImage} sizes="100vw" />
      </picture>
      <div className={styles.heroOverlay} />
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <p className={styles.trustText}>{content.trustText}</p>
          <div className={styles.heroActions}>
            <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
              <span className={styles.label}>{content.primaryCta}</span>
              <ArrowSwap />
            </OpenConsultationButton>
            <Link href="/cases" className={`${styles.btn} ${styles.btnGhost}`}>
              <span className={styles.label}>{content.secondaryCta}</span>
              <ArrowSwap />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
