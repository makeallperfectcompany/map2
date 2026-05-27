import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { telegramAdsContent as content } from "@/content/services/telegramAds";
import styles from "./TelegramAdsHero.module.css";

export default function TelegramAdsHero() {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroInner}>
          <div className={styles.left}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Главная</a>
              <span aria-hidden="true">—</span>
              <span>Telegram Ads</span>
            </nav>

            <h1 className={styles.heroTitle}>
              {content.hero.title}
            </h1>

            <p className={styles.heroLead}>
              {content.hero.description}
            </p>

            <div className={styles.heroActions}>
              <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
                <span className={styles.label}>{content.hero.primaryCta}</span>
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
                <span className={styles.label}>{content.hero.secondaryCta}</span>
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

            <div className={styles.heroPrinciplesMobile} aria-label="Принципы работы">
              <div><i aria-hidden="true" /><span>Работаем на ROMI</span></div>
              <div><i aria-hidden="true" /><span>Полная прозрачность</span></div>
              <div><i aria-hidden="true" /><span>Решения на основе аналитики</span></div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.heroPrinciplesDesktop} aria-label="Принципы работы">
              <span>Работаем на ROMI</span>
              <i aria-hidden="true" />
              <span>Полная прозрачность</span>
              <i aria-hidden="true" />
              <span>Решения на основе аналитики</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
