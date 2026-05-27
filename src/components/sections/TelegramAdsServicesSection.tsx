import { telegramAdsContent as content } from "@/content/services/telegramAds";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { Container } from "@/components/ui/Container/Container";
import styles from "./TelegramAdsServicesSection.module.css";

export default function TelegramAdsServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <Container>
        <div className={styles.header}>
          <span className={styles.kicker}>Услуги</span>
          <h2 id="services-title">{content.services.h2}</h2>
          <p className={styles.description}>{content.services.description}</p>
        </div>

        <div className={styles.grid}>
          {content.services.cards.map((card, i) => (
            <article className={styles.card} key={i}>
              <div className={styles.cardIcon}>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <OpenConsultationButton as="a" href="/contacts">
            Обсудить продвижение в Telegram
          </OpenConsultationButton>
        </div>
      </Container>
    </section>
  );
}
