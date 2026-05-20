import { serviceGroups } from "@/content/services";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <div className={styles.eyebrow}>Услуги Make All Perfect</div>
          <h2 id="services-title">Полный цикл digital-маркетинга в одной системе</h2>
          <p>
            От стратегии и сайта до рекламы, SEO, маркетплейсов, CRM, контента и репутации —
            собираем не отдельные услуги, а связку, которая помогает бизнесу расти управляемо.
          </p>
        </div>

        <div className={styles.desktopGrid} aria-label="Направления услуг">
          {serviceGroups.map((group) => (
            <article className={styles.serviceCard} tabIndex={0} key={group.title}>
              <div className={styles.cardTop}>
                <span>{group.accent}</span>
                <strong>{String(group.services.length).padStart(2, "0")}</strong>
              </div>

              <div className={styles.cardBody}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <div className={styles.revealArea}>
                <div className={styles.revealLabel}>Что входит</div>
                <ul>
                  {group.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.mobileList} aria-label="Направления услуг">
          {serviceGroups.map((group, index) => (
            <details className={styles.mobileItem} key={group.title} open={index === 0}>
              <summary>
                <span>{group.title}</span>
                <em>{group.services.length} услуг</em>
              </summary>
              <p>{group.description}</p>
              <ul>
                {group.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <p>
            Не знаете, с какого направления начать? Проведём быстрый разбор и подскажем,
            где сейчас больше всего точек роста.
          </p>
          <a href="/contacts">Обсудить проект</a>
        </div>
      </div>
    </section>
  );
}
