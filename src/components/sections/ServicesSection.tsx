import { homeServiceCards } from "@/content/services";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
      <div className={styles.container}>
        <div className={styles.servicesIntro}>
          <div className={styles.introLeft}>
            <div className={styles.kicker}>Услуги</div>
            <h2 id="services-title">
              Меньше хаоса.
              <span>Больше управляемого роста.</span>
            </h2>

            <div className={styles.introActions}>
              <OpenConsultationButton as="a" href="/contacts">Подобрать связку услуг</OpenConsultationButton>
              <a href="/about">Как мы работаем ›</a>
            </div>
          </div>

          <p>
            Подключаем нужные направления под задачу бизнеса: от стратегии и сайта
            до рекламных связок, контента, аналитики и масштабирования.
          </p>
        </div>

        <div className={styles.servicesScroll}>
          <div className={styles.servicesGrid} aria-label="Ключевые направления услуг">
            {homeServiceCards.map((card) => (
              <article
                className={styles.serviceCard}
                key={card.abbreviation}
                style={{ "--accent": card.accentColor } as React.CSSProperties}
              >
                {/* 1. Бейдж */}
                <div className={styles.badge}>{card.badgeLabel}</div>

                {/* 2. Заголовок */}
                <div className={styles.titleSlot}>
                  <h3>
                    {card.title}
                    <span>{card.mutedTitle}</span>
                  </h3>
                </div>

                {/* 3. Аббревиатура */}
                <div className={styles.abbreviation}>{card.abbreviation}</div>

                {/* 4. Описание */}
                <div className={styles.descriptionSlot}>
                  <p>{card.description}</p>
                </div>

                {/* 5. Теги */}
                <div className={styles.tagsSlot}>
                  {card.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* 6. Футер: цена + CTA */}
                <div className={styles.footer}>
                  <span className={styles.price}>{card.price}</span>
                  <a href={card.href} className={styles.cta}>
                    {card.cta}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <path d="M1 12L12 1M12 1H4M12 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
