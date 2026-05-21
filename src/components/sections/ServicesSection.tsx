import { serviceGroups } from "@/content/services";
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

        <div className={styles.servicesGrid} aria-label="Ключевые направления услуг">
          {serviceGroups.map((service) => (
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
                {service.services.map((item) => (
                  <a
                    key={item}
                    href={`/services/${encodeURIComponent(item.toLowerCase())}`}
                    className={styles.chipLink}
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className={styles.cardBottom}>
                <span>{service.price}</span>
                <a href={service.href}>{service.cta} →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
