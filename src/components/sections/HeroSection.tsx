import Image from "next/image";
import Link from "next/link";

import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
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
            Продвижение сайтов и&nbsp;брендов,
            <br />усиленное технологиями
            <br /><span className={styles.highlight}>Make All Perfect</span>
          </h1>

          <p className={styles.heroLead}>
            Объединяем экспертизу команды, собственное ПО и&nbsp;AI-инструменты,
            чтобы быстрее находить точки роста, точнее принимать решения
            и&nbsp;выстраивать продвижение под реальные цели бизнеса.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>С 2017 года</span>
              <span className={styles.heroStatLabel}>с вами</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>Более 500 кейсов</span>
              <span className={styles.heroStatLabel}>в разных нишах</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>400+</span>
              <span className={styles.heroStatLabel}>реализованных проектов</span>
            </div>
          </div>

          <div className={styles.heroActions}>
            <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
              <span className={styles.label}>Получить консультацию</span>
              <span className={styles.arrWrap}>
                <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </OpenConsultationButton>

            <Link href="/cases" className={`${styles.btn} ${styles.btnGhost}`}>
              <span className={styles.label}>Смотреть кейсы</span>
              <span className={styles.arrWrap}>
                <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
