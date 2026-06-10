import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import { seoServiceLinks } from "@/content/services/seo-services";
import styles from "./SeoServicesSection.module.css";

export default function SeoServicesSection() {
  return (
    <section className={styles.section} id="seo-services" aria-labelledby="seo-services-title">
      <Container className={styles.container}>
        <div className={styles.header}>
          <div className={styles.kicker}>Услуги SEO</div>
          <h2 id="seo-services-title">
            6 направлений поискового продвижения
            <span>От классики до AI-поиска</span>
          </h2>
          <p>
            От классического SEO до продвижения в AI-поиске. Каждая услуга — отдельная задача
            со своей экспертизой, инструментами и результатом. Выбирайте то, что нужно вашему
            бизнесу прямо сейчас.
          </p>
        </div>

        <div className={styles.grid}>
          {seoServiceLinks.map((service) => (
            <Link key={service.href} href={service.href} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardType}>{service.type}</span>
                <h3>{service.title}</h3>
              </div>
              <p className={styles.cardDesc}>{service.description}</p>
              <div className={styles.cardBottom}>
                <span className={styles.price}>{service.price}</span>
                <span className={styles.cta}>Подробнее →</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
