import Image from "next/image";
import { telegramAdsContent as content } from "@/content/services/telegramAds";
import { Container } from "@/components/ui/Container/Container";
import styles from "./TelegramAdsAdvantagesSection.module.css";

export default function TelegramAdsAdvantagesSection() {
  const { advantages } = content;

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <h2>{advantages.h2}</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.visualCard}>
            <Image
              src="/images/services/telegram-ads/advantages-bg.webp"
              alt=""
              title="Преимущества Telegram Ads"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority={false}
            />
          </div>

          <div className={styles.contentColumn}>
            <article className={styles.mainCard}>
              <h3>Комплексный подход к Telegram Ads</h3>
              <p>Сочетаем экспертизу, технологии и аналитику для максимальной эффективности рекламных кампаний в Telegram.</p>
            </article>

            <div className={styles.cardsGrid}>
              {advantages.cards.map((item, index) => (
                <article className={styles.advantageCard} key={item.title}>
                  <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
