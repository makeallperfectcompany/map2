import { telegramAdsContent as content } from "@/content/services/telegramAds";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { Container } from "@/components/ui/Container/Container";
import styles from "./TelegramAdsServicesSection.module.css";

export default function TelegramAdsServicesSection() {
  const { services } = content;

  return (
    <section className={styles.section} aria-labelledby="tgads-services-title">
      <Container className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Услуги</span>
          <h2 id="tgads-services-title">{services.h2}</h2>
          <p>{services.description}</p>
        </div>

        <div className={styles.grid}>
          {services.cards.map((card, i) => (
            <article className={styles.card} key={i}>
              <span className={styles.cardNumber}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.scrollHint}>→ Листайте</div>

        <div className={styles.ctaWrap}>
          <OpenConsultationButton as="a" href="/contacts" className={styles.ctaBtn}>
            Обсудить продвижение в Telegram
          </OpenConsultationButton>
        </div>
      </Container>
    </section>
  );
}
