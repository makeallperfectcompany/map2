import { Container } from "@/components/ui/Container/Container";
import styles from "./AllServicesHeroSection.module.css";
import grid from "@/styles/grid.module.css";

export default function AllServicesHeroSection() {
  return (
    <section className={styles.heroSection} aria-labelledby="services-hero-title">
      <div className={styles.heroBackground} aria-hidden="true" />
      <Container className={styles.container}>
        <div className={`${grid.grid2} ${styles.heroGrid}`}>
          <div className={styles.copy}>
            <h1 id="services-hero-title">Услуги digital-агентства полного цикла: реклама, SEO, сайты и аналитика</h1>
            <p>
              Подключаем только те инструменты, которые приносят вам заявки и продажи прямо сейчас.
              Без лишних услуг «на всякий случай» — только то, что окупается.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#lead-form">Подобрать услугу</a>
              <a className={styles.secondaryButton} href="#services-catalog">Смотреть направления</a>
            </div>
            <p className={styles.heroMicro}>С 2017 года · 400+ проектов · 98% клиентов продлевают договор</p>
          </div>

          <div className={styles.visualColumn} aria-hidden="true">
            <div className={styles.orbitCard}>
              <span>ADS</span>
              <span>SEO</span>
              <span>WEB</span>
              <span>CRM</span>
              <span>SMM</span>
              <span>ANL</span>
            </div>
            <div className={styles.glassPanel}>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
