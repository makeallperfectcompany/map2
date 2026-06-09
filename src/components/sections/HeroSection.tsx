import Link from "next/link";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInner}>
        <div className={styles.left}>
          <h1 className={styles.heroTitle}>
            Продвижение сайтов и брендов, усиленное технологиями
            <span className={styles.highlight}>Make All Perfect</span>
          </h1>

          <p className={styles.heroLead}>
            Объединяем экспертизу команды, собственное ПО и&nbsp;AI-инструменты,
            чтобы быстрее находить точки роста, точнее принимать решения
            и&nbsp;выстраивать продвижение под реальные цели бизнеса.
          </p>

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

          {/* Trust bar: только лейблы */}
          <div className={styles.trustBar}>
            <div className={styles.trustBarInner}>
              <div className={styles.trustItem}>
                <span className={styles.trustLabel}>С 2017 года в маркетинге</span>
                <span className={styles.trustValue}>строим продвижение на опыте, аналитике и понимании бизнеса</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustLabel}>Не продаём лишние услуги</span>
                <span className={styles.trustValue}>предлагаем только то, что действительно нужно для роста</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustLabel}>Полная прозрачность в работе</span>
                <span className={styles.trustValue}>вы видите стратегию, цифры и ход работ на каждом этапе</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: логотип */}
        <div className={styles.right}>
          <img
            className={styles.heroLogo}
            src="/assets/home/hero/logo-hero.png"
            alt="Make All Perfect"
            title="Make All Perfect"
          />
        </div>
      </div>
    </section>
  );
}
