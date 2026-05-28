"use client";

import { useState } from "react";
import { cases } from "@/content/cases";
import { Container } from "@/components/ui/Container/Container";
import styles from "./CasesSection.module.css";

export default function CasesSection() {
  const totalSlides = Math.ceil(cases.length / 3);
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide((s) => Math.max(0, s - 1));
  const next = () => setSlide((s) => Math.min(totalSlides - 1, s + 1));

  return (
    <section className={styles.casesSection} id="cases" aria-labelledby="cases-title">
      <Container>
        <div className={styles.top}>
          <div className={styles.copy}>
            <div className={styles.eyebrow}>Кейсы</div>
            <h2 className={styles.title} id="cases-title">
              Результаты, которые видно в цифрах
            </h2>
            <p className={styles.lead}>
              Показываем не просто красивые запуски, а системную работу: стратегия, трафик,
              упаковка, аналитика и рост ключевых показателей бизнеса.
            </p>
          </div>

          <div className={styles.topActions}>
            <a className={styles.allCasesLink} href="/cases">
              Смотреть все кейсы <span>↗</span>
            </a>
          </div>
        </div>

        <div className={styles.carouselOuter}>
          <div className={styles.caseGrid}>
            {cases.slice(slide * 3, slide * 3 + 3).map((item) => (
              <article className={styles.caseCard} key={item.slug}>
                <div className={styles.caseCover}>
                  <img
                    src={item.hero}
                    alt=""
                    title={item.title}
                    className={styles.caseCoverImg}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.caseBody}>
                    <div className={styles.contentBody}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className={styles.readMore}>Открыть →</span>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.carouselNav}>
            <button
              className={`${styles.arrowBtn} ${slide === 0 ? styles.arrowDisabled : ""}`}
              onClick={prev}
              disabled={slide === 0}
              aria-label="Предыдущие кейсы"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.dots}>
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === slide ? styles.dotActive : ""}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Слайд ${i + 1}`}
                />
              ))}
            </div>

            <button
              className={`${styles.arrowBtn} ${slide === totalSlides - 1 ? styles.arrowDisabled : ""}`}
              onClick={next}
              disabled={slide === totalSlides - 1}
              aria-label="Следующие кейсы"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

      </Container>
    </section>
  );
}
