"use client";

import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { Container } from "@/components/ui/Container/Container";
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
  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero} aria-labelledby="about-title">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "О нас" },
            ]}
          />

          <h1 id="about-title">
            Маркетинг полного цикла для системного роста
          </h1>
          <p>
            Стратегия, реклама, SEO, сайты, контент, CRM, PR и аналитика в одной системе — ради заявок, продаж и результата.
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
        </Container>
      </section>

      <section className={styles.identitySection}>
        <Container>
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
                    src="/video/intro-compressed.mp4"
                    className={styles.aboutVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/video/intro-poster.jpg"
                    aria-label="Презентационное видео Make All Perfect"
                  />
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
        </Container>
      </section>

      <section className={styles.directionsSection}>
        <Container>
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
        </Container>
      </section>

      <section className={styles.approachSection}>
        <Container>
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
        </Container>
      </section>

      <section className={styles.reasonsSection}>
        <Container>
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
        </Container>
      </section>

      <section className={styles.principlesSection}>
        <Container>
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
        </Container>
      </section>

      <section className={styles.audienceSection}>
        <Container>
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
        </Container>
      </section>

      <section className={styles.trustSection}>
        <Container>
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
        </Container>
      </section>

      <section className={styles.finalCta}>
        <Container>
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
        </Container>
      </section>
    </main>
  );
}
