import styles from "./ServicesSection.module.css";

const services = [
  {
    label: "Комплексный рост",
    title: "Маркетинг полного цикла",
    muted: "от стратегии до продаж",
    metric: "360°",
    description:
      "Собираем стратегию, дизайн, рекламу, контент, SEO и аналитику в единую систему роста, а не в набор разрозненных подрядчиков.",
    price: "индивидуально",
    cta: "Обсудить систему",
    featured: true,
  },
  {
    label: "Трафик и заявки",
    title: "Performance-реклама",
    muted: "с контролем ROMI",
    metric: "+",
    description:
      "Запускаем и оптимизируем Яндекс Директ, VK, Promo Pages, посевы, ретаргетинг и внешние связки под продажи.",
    price: "от 50 000 ₽",
    cta: "Подробнее",
  },
  {
    label: "Органический рост",
    title: "SEO и разработка",
    muted: "с технической базой",
    metric: "SEO",
    description:
      "Улучшаем структуру, контент, скорость, индексацию и конверсию сайта, чтобы органика работала как долгосрочный актив.",
    price: "от 80 000 ₽",
    cta: "Подробнее",
  },
];

const bottomServices = [
  "Дизайн и упаковка",
  "Контент и SMM",
  "Маркетплейсы",
  "CRM и аналитика",
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <div className={styles.eyebrow}>
              <span>✦ Услуги</span>
              <span>Полный цикл в одной команде</span>
            </div>
            <h2 className={styles.title} id="services-title">
              Меньше хаоса.
              <span>Больше управляемого роста.</span>
            </h2>
          </div>
          <p className={styles.lead}>
            Подключаем нужные направления под задачу бизнеса: от стратегии и сайта до рекламных связок,
            контента, аналитики и масштабирования.
          </p>
        </div>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#contacts">Подобрать связку услуг</a>
          <a className={styles.ghostButton} href="#approach">Как мы работаем ›</a>
        </div>

        <div className={styles.cards}>
          {services.map((service) => (
            <article
              className={`${styles.card} ${service.featured ? styles.featuredCard : styles.darkCard}`}
              key={service.title}
            >
              <div className={styles.cardEyebrow}>{service.label}</div>
              <h3>
                {service.title}
                <span>{service.muted}</span>
              </h3>
              <div className={styles.metric}>{service.metric}</div>
              <p>{service.description}</p>
              <div className={styles.cardBottom}>
                <span>{service.price}</span>
                <a href="#contacts">{service.cta} →</a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.serviceRail} aria-label="Дополнительные направления">
          {bottomServices.map((item) => (
            <div className={styles.railItem} key={item}>
              <span className={styles.railDot}></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
