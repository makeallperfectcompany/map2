import Link from "next/link";
import styles from "./AeoHero.module.css";

const trustItems = [
  { label: "Работаем на ROMI", value: "каждый шаг направлен на рост вашей прибыли" },
  { label: "Компетенции в AEO", value: "готовим сайты к AI-поиску и нейроответам" },
  { label: "Полная прозрачность", value: "вы видите стратегию, цифры и ход работ" },
];

interface Props {
  content: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export default function AeoHero({ content }: Props) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInner}>
        <div className={styles.left}>
          <h1 className={styles.heroTitle}>
            {content.title}
            <span className={styles.highlight}>Make All Perfect</span>
          </h1>

          <p className={styles.heroLead}>{content.description}</p>

          <div className={styles.heroActions}>
            <Link href="#contact" className={`${styles.btn} ${styles.btnAccent}`}>
              <span className={styles.label}>{content.primaryCta}</span>
              <span className={styles.arrWrap}>
                <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>

            <Link href="#cases" className={`${styles.btn} ${styles.btnGhost}`}>
              <span className={styles.label}>{content.secondaryCta}</span>
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

          {/* Trust bar */}
          <div className={styles.trustBar}>
            <div className={styles.trustBarInner}>
              {trustItems.map((item) => (
                <div key={item.label} className={styles.trustItem}>
                  <span className={styles.trustLabel}>{item.label}</span>
                  <span className={styles.trustValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: logo */}
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
