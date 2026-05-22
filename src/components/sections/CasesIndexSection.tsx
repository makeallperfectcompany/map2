"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { cases } from "@/content/cases";
import styles from "./CasesIndexSection.module.css";

const filters = ["Все", ...Array.from(new Set(cases.map((c) => c.category)))];

export default function CasesIndexSection() {
  const [activeFilter, setActiveFilter] = useState("Все");

  const filteredCases = activeFilter === "Все"
    ? cases
    : cases.filter((c) => c.category === activeFilter);

  const featured = filteredCases[0];

  return (
    <main className={styles.casesPage}>
      <section className={styles.hero} aria-labelledby="cases-title">
        <div className={styles.container}>
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

          <div className={styles.filterBar} aria-label="Фильтры кейсов">
            {filters.map((filter) => (
              <button
                className={`${styles.filterButton} ${activeFilter === filter ? styles.activeFilter : ""}`}
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featured} aria-label="Главный кейс">
        <div className={styles.container}>
          <a className={styles.featuredCard} href={featured.url}>
            <div className={styles.featuredImage}>
              <img src={featured.cover} alt={featured.title} loading="eager" decoding="async" />
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.category}>{featured.category}</span>
              <h2>{featured.title}</h2>
              <p>{featured.lead}</p>
              <div className={styles.metrics}>
                {featured.metrics.map((metric) => (
                  <div className={styles.metric} key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
              <span className={styles.caseLink}>Смотреть кейс ↗</span>
            </div>
          </a>
        </div>
      </section>

      <section className={styles.gridSection} aria-label="Все кейсы">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2>Все кейсы</h2>
            <p>Выберите проект по направлению или используйте кейсы как ориентир для своей задачи.</p>
          </div>

          <div className={styles.caseGrid}>
            {filteredCases.map((item) => (
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
        </div>
      </section>
    </main>
  );
}
