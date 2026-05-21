"use client";

import { useRef, useState } from "react";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import {
  approachSteps,
  audience,
  directions,
  heroCards,
  principles,
  reasons,
  systemCards,
} from "@/content/about";
import styles from "./AboutPageSection.module.css";

export default function AboutPageSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlayed, setVideoPlayed] = useState(false);

  const handlePlay = () => {
    setVideoPlayed(true);
    videoRef.current?.play();
  };
  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.container}>
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "О нас" },
            ]}
          />

          <h1 id="about-title">
            Make All Perfect — маркетинг полного цикла для брендов, которые хотят расти системно
          </h1>
          <p>
            Мы объединяем стратегию, рекламу, SEO, маркетплейсы, сайты, контент,
            CRM, PR и аналитику в единую систему роста. Не запускаем отдельные
            инструменты ради процесса — строим связку, которая помогает бизнесу
            получать заявки, продажи и управляемый результат.
          </p>
          <div className={styles.heroActions}>
            <OpenConsultationButton as="a" href="/contacts">Обсудить проект</OpenConsultationButton>
            <a href="/cases">Смотреть кейсы</a>
          </div>

          <div className={styles.heroCards}>
            {heroCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.identitySection}>
        <div className={styles.container}>
          <div className={styles.identityGrid}>
            <div className={styles.sectionIntro}>
              <span>Кто мы</span>
              <h2>Мы не просто запускаем рекламу. Мы собираем маркетинговую систему</h2>
              <p>
                Make All Perfect — агентство полного цикла, которое помогает бизнесу
                выстраивать управляемое продвижение. Мы работаем на стыке стратегии,
                performance-маркетинга, SEO, маркетплейсов, UX/UI, контента, CRM,
                PR и аналитики.
              </p>
              <p>
                Наша задача — не добавить ещё один рекламный канал, а понять,
                где бизнес теряет рост, какие точки дают максимальный эффект
                и как связать инструменты в единую систему.
              </p>
            </div>

            <div className={styles.identityVisualColumn}>
              <div className={styles.logoPanel}>
                <div className={styles.logoGlow} aria-hidden="true" />
                <div className={styles.videoWrapper}>
                  <video
                    ref={videoRef}
                    src="/video/intro-compressed.mp4"
                    className={styles.aboutVideo}
                    playsInline
                    preload="metadata"
                    poster="/video/intro-poster.jpg"
                    aria-label="Презентационное видео Make All Perfect"
                  />
                  {!videoPlayed && (
                    <button
                      className={styles.playOverlay}
                      onClick={handlePlay}
                      aria-label="Воспроизвести видео"
                    >
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.95" />
                        <path
                          d="M26 20L44 32L26 44V20Z"
                          fill="#0071e3"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className={styles.systemGrid}>
                {systemCards.map((card) => (
                  <article key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.directionsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>Что мы делаем</span>
            <h2>Закрываем ключевые направления digital-маркетинга</h2>
          </div>

          <div className={styles.directionsGrid}>
            {directions.map((item) => (
              <article className={styles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.approachLayout}>
            <div className={styles.stickyTitle}>
              <span>Наш подход</span>
              <h2>Как мы подходим к проектам</h2>
              <p>
                Сначала разбираемся в бизнесе и точках роста, потом строим систему,
                запускаем гипотезы и оцениваем результат в цифрах.
              </p>
            </div>

            <div className={styles.steps}>
              {approachSteps.map((step, index) => (
                <article className={styles.stepCard} key={step.title}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reasonsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>Почему с нами работают</span>
            <h2>Почему клиенты выбирают Make All Perfect</h2>
          </div>

          <div className={styles.reasonsGrid}>
            {reasons.map((item) => (
              <article className={styles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <div className={styles.principlesPanel}>
            <div>
              <span>Принципы</span>
              <h2>Принципы, на которых строится наша работа</h2>
            </div>

            <div className={styles.principlesList}>
              {principles.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>Для кого мы</span>
            <h2>С кем мы работаем</h2>
          </div>

          <div className={styles.audienceGrid}>
            {audience.map((item) => (
              <article className={styles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.trustPanel}>
            <h2>Мы строим долгосрочные системы, а не разовые запуски</h2>
            <p>
              Маркетинг работает сильнее, когда реклама, сайт, SEO, контент, CRM,
              репутация и аналитика не спорят между собой, а усиливают друг друга.
              Поэтому мы смотрим на проект шире одного канала и работаем как команда роста.
            </p>

            <div className={styles.trustWords}>
              <span>Strategy</span>
              <span>Performance</span>
              <span>Growth</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <span>Готовы к разбору?</span>
            <h2>Хотите понять, где ваш маркетинг теряет рост?</h2>
            <p>
              Расскажите о проекте — мы изучим текущую ситуацию, определим точки роста
              и предложим понятный следующий шаг.
            </p>
            <div className={styles.finalActions}>
              <OpenConsultationButton as="a" href="/contacts">Обсудить проект</OpenConsultationButton>
              <a href="/cases">Смотреть кейсы</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
