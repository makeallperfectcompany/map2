import Image from 'next/image';
import { googleAdsPage } from '@/content/googleAdsPage';
import { SectionLabel } from './SectionElements';
import styles from './GoogleAdsHero.module.css';

export function GoogleAdsHero() {
  const { hero } = googleAdsPage;
  return (
    <section className={styles.section}>
      <Image
        className={styles.background}
        src="/images/services/google-ads/google-ads-hero-background.webp"
        alt=""
        fill
        priority
        aria-hidden="true"
      />
      <div className={styles.grid}>
        <div className={styles.content}>
          <SectionLabel>{hero.label}</SectionLabel>
          <h1>{hero.title}</h1>
          <p className={styles.text}>{hero.text}</p>
          <div className={styles.buttons}>
            <a className={`${styles.btn} ${styles.btnAccent}`} href="#contact">
              <span className={styles.label}>{hero.primaryCta}</span>
              <span className={styles.arrWrap}>
                <svg className={styles.arrMain} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={styles.arrGhost} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="#pricing">
              <span className={styles.label}>{hero.secondaryCta}</span>
              <span className={styles.arrWrap}>
                <svg className={styles.arrMain} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={styles.arrGhost} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          <div className={styles.benefits}>
            {hero.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
          </div>
        </div>
        <div className={styles.visual}>
          <Image
            className={styles.element}
            src="/images/services/google-ads/google-ads-hero-element.webp"
            alt=""
            width={400}
            height={500}
            aria-hidden="true"
          />
          <div className={styles.statRow}>
            {hero.stats.map((stat) => (
              <div className={styles.stat} key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
