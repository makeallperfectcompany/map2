import { serviceGroups } from "@/content/services";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { Container } from "@/components/ui/Container/Container";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
      <Container className={styles.container}>
        <div className={styles.servicesIntro}>
          <div className={styles.introLeft}>
            <div className={styles.kicker}>Услуги</div>
            <h2 id="services-title">
              8 направлений. Одна система.
              <span>Ваш рост.</span>
            </h2>

            <div className={styles.introActions}>
              <OpenConsultationButton as="a" href="/contacts">Подобрать связку услуг</OpenConsultationButton>
            </div>
          </div>

          <div className={styles.introRight}>
            <p>
              Собираем только те инструменты, которые нужны вашему бизнесу прямо сейчас. Без лишнего — только то, что даёт результат.
            </p>

            <div className={styles.factsRow}>
              <div className={styles.fact}>
                <span className={styles.factValue}>С 2017 года</span>
                <span className={styles.factLabel}>с вами</span>
              </div>
              <div className={styles.factSeparator} />
              <div className={styles.fact}>
                <span className={styles.factValue}>Более 500 кейсов</span>
                <span className={styles.factLabel}>в разных нишах</span>
              </div>
              <div className={styles.factSeparator} />
              <div className={styles.fact}>
                <span className={styles.factValue}>400+</span>
                <span className={styles.factLabel}>реализованных проектов</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.servicesGrid} aria-label="Ключевые направления услуг">
          {serviceGroups.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <div className={styles.cardEyebrow}>{service.eyebrow}</div>
              <h3>
                {service.title}
                {service.mutedTitle && <span>{service.mutedTitle}</span>}
              </h3>
              <div className={styles.bigMark}>{service.bigMark}</div>
              <p>{service.description}</p>
              <div className={styles.chips} aria-label={`Услуги направления ${service.title}`}>
                {service.services.map((item) => (
                  <a key={item} href={`/services/${encodeURIComponent(item.toLowerCase())}`} className={styles.chipLink}>{item}</a>
                ))}
              </div>
              <div className={styles.cardBottom}>
                <span>{service.price}</span>
                <a href={service.href}>{service.cta} →</a>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.scrollHint}>→ Листайте</div>
      </Container>
    </section>
  );
}
