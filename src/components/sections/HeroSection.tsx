import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Desktop background — скрывается на mobile через CSS */}
      <Image
        className={styles.heroBg}
        src="/assets/home/hero/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center right" }}
      />

      <div className={styles.heroInner}>
        <div className={styles.left}>
          <h1 className={styles.heroTitle}>
            Маркетинг полного цикла для брендов, которые хотят <span className={styles.highlight}>лидировать</span>
          </h1>

          <p className={styles.heroLead}>
            Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.
          </p>

          <div className={styles.heroActions}>
            <a className={`${styles.btn} ${styles.btnAccent}`} href="/contacts">
              <span className={styles.label}>Обсудить проект</span>
              <span className={styles.arrWrap}>
                <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="/about">
              <span className={styles.label}>Смотреть подход</span>
              <span className={styles.arrWrap}>
                <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
