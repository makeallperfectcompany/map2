import { serviceGroups } from "@/content/services";
import styles from "./ServicesSection.module.css";

function visibleServices(services: readonly string[]) {
  const limit = 6;
  const visible = services.slice(0, limit);
  const hiddenCount = services.length - visible.length;

  return { visible, hiddenCount };
}

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
              <a href="/contacts">Подобрать связку услуг</a>
              <a href="/about">Как мы работаем ›</a>
            </div>
          </div>

          <p>
            Подключаем нужные направления под задачу бизнеса: от стратегии и сайта
            до рекламных связок, контента, аналитики и масштабирования.
          </p>
        </div>

        <div className={styles.servicesGrid} aria-label="Ключевые направления услуг">
          {serviceGroups.map((service) => {
            const { visible, hiddenCount } = visibleServices(service.services);

            return (
              <article
                className={`${styles.serviceCard} ${service.featured ? styles.featuredCard : ""}`}
                key={service.title}
              >
                <div className={styles.cardEyebrow}>{service.eyebrow}</div>

                <h3>
                  {service.title}
                  <span>{service.mutedTitle}</span>
                </h3>

                <div className={styles.bigMark}>{service.bigMark}</div>

                <p>{service.description}</p>

                <div className={styles.chips} aria-label={`Услуги направления ${service.title}`}>
                  {visible.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                  {hiddenCount > 0 ? <span className={styles.moreChip}>+ ещё {hiddenCount}</span> : null}
                </div>

                <div className={styles.cardBottom}>
                  <span>{service.price}</span>
                  <a href={service.href}>{service.cta} →</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
