"use client";

import { useState, useCallback, useEffect } from "react";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import type { CaseItem } from "@/content/cases";
import styles from "./CaseTemplate.module.css";

const BASE_URL = "https://map2.vercel.app";

export default function CaseTemplate({ item }: { item: CaseItem }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  useEffect(() => {
    if (lightboxSrc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxSrc]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeLightbox]);

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.description,
    image: item.hero
      ? `${BASE_URL}${item.hero}`
      : `${BASE_URL}/og-image.jpg`,
    datePublished: item.date,
    author: {
      "@type": "Organization",
      name: "Make All Perfect",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Make All Perfect",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${item.url}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Кейсы",
        item: `${BASE_URL}/cases`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: `${BASE_URL}${item.url}`,
      },
    ],
  };

  return (
    <main className={styles.casePage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article>
        <header className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Кейсы", href: "/cases" },
                { label: item.title },
              ]}
            />

            <h1>{item.title}</h1>
            <p>{item.description}</p>

            {item.results && item.results.length > 0 ? (
              <div className={styles.metrics}>
                {item.results.map((result, i) => (
                  <div className={styles.metric} key={`result-${i}`}>
                    <strong>{result.value}</strong>
                    <span>{result.label}</span>
                    {result.description ? (
                      <small>{result.description}</small>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <div className={styles.contentWrap}>
          <div className={styles.container}>
            <aside className={styles.sidebar}>
              <div className={styles.factCard}>
                <span>О проекте</span>
                <div className={styles.fact}>
                  <small>Услуга</small>
                  <strong>{item.service || "—"}</strong>
                </div>
                <div className={styles.fact}>
                  <small>Ниша</small>
                  <strong>{item.industry || "—"}</strong>
                </div>
              </div>

              <div className={styles.sidebarCta}>
                <span>Похожая задача?</span>
                <strong>Разберём ваш проект и покажем точки роста</strong>
                <a href="/#contacts">Обсудить проект</a>
              </div>
            </aside>

            <div className={styles.content}>
              {item.sections.map((section) => (
                <section className={styles.caseSection} key={section.id || section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>

                  {section.highlights && section.highlights.length > 0 ? (
                    <ul>
                      {section.highlights.map((h, i) => (
                        <li key={`h-${i}`}>{h}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.image ? (
                    <figure className={styles.caseFigure}>
                      <button
                        className={styles.imageButton}
                        onClick={() => setLightboxSrc(section.image!)}
                        aria-label="Увеличить изображение"
                      >
                        <img
                          src={section.image}
                          alt={section.title}
                          title={section.title}
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    </figure>
                  ) : null}

                  {section.marqueeImages && section.marqueeImages.length > 0 ? (
                    <div className={styles.marqueeImages}>
                      {section.marqueeImages.map((src, i) => (
                        <img
                          key={`marquee-${i}`}
                          src={src}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}

              <div className={styles.finalCta}>
                <span>Хотите похожий результат?</span>
                <strong>
                  Соберём маркетинговую систему под вашу задачу.
                </strong>
                <a href="/#contacts">Получить разбор</a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {lightboxSrc && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Закрыть"
          >
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt=""
            title=""
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
