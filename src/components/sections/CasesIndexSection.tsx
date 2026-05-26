"use client";

import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { cases } from "@/content/cases";
import { Container } from "@/components/ui/Container/Container";
import styles from "./CasesIndexSection.module.css";

export default function CasesIndexSection() {
  return (
    <main className={styles.casesPage}>
      <section className={styles.hero} aria-labelledby="cases-title">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Кейсы" },
            ]}
          />
          <h1 id="cases-title">Проекты, где маркетинг виден в цифрах</h1>
          <p>
            Показываем, как стратегия, реклама, SEO, сайты, контент и аналитика превращаются
            в рост заявок, продаж и управляемую экономику продвижения.
          </p>
        </Container>
      </section>

      <section className={styles.gridSection} aria-label="Все кейсы">
        <Container>
          <div className={styles.sectionHead}>
            <h2>Все кейсы</h2>
            <p>Выберите проект по направлению или используйте кейсы как ориентир для своей задачи.</p>
          </div>

          <div className={styles.caseGrid}>
            {cases.map((item) => (
              <a className={styles.caseCard} href={item.url} key={item.slug}>
                <div className={styles.cardImage}>
                  <img src={item.cover} alt={item.title} loading="lazy" decoding="async" />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.category}>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.lead}</p>
                  <div className={styles.cardMetrics}>
                    {item.metrics.slice(0, 3).map((metric) => (
                      <span key={metric.label}>{metric.value}</span>
                    ))}
                  </div>
                  <span className={styles.readMore}>Открыть →</span>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.casesCta}>
            <div>
              <span>Хотите понять потенциал вашего проекта?</span>
              <strong>Разберём текущие каналы и покажем, где можно усилить рост.</strong>
            </div>
            <a href="/#contacts">Обсудить проект</a>
          </div>
        </Container>
      </section>
    </main>
  );
}
