"use client";

import { useState } from "react";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { reviews, type ReviewItem } from "@/content/reviews";
import styles from "./ReviewsIndexSection.module.css";

const FEATURED_VISIBLE = 6;

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`Оценка ${rating} из 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ item }: { item: Extract<ReviewItem, { type: "review" }> }) {
  return (
    <article className={styles.reviewCard}>
      <div className={styles.quoteMark} aria-hidden="true">“</div>
      <div className={styles.cardTop}>
        <div className={styles.author}>
          <img src={item.avatar} alt="" loading="lazy" decoding="async" />
          <div>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </div>
        </div>
        <Stars rating={item.rating} />
      </div>

      <p>{item.text}</p>

      <div className={styles.cardBottom}>
        <div className={styles.cardFooter}>
          <span>{item.category}</span>
          {item.date ? <small>{item.date}</small> : null}
        </div>

        {item.relatedCaseUrl ? (
          <a className={styles.caseLink} href={item.relatedCaseUrl}>
            Смотреть кейс ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}

function LetterCard({ item }: { item: Extract<ReviewItem, { type: "letter" }> }) {
  return (
    <article className={`${styles.reviewCard} ${styles.letterCard}`}>
      <div className={styles.letterPreview}>
        <img src={item.preview} alt="" loading="lazy" decoding="async" />
      </div>

      <div className={styles.letterBody}>
        <span className={styles.letterLabel}>Благодарственное письмо</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>

        <div className={styles.letterBottom}>
          <div className={styles.letterMeta}>
            <strong>{item.name}</strong>
            <span>{item.category}{item.date ? ` · ${item.date}` : ""}</span>
          </div>

          <div className={styles.letterActions}>
            {item.file ? (
              <a href={item.file} target="_blank" rel="noreferrer">
                Открыть письмо
              </a>
            ) : null}
            {item.relatedCaseUrl ? (
              <a href={item.relatedCaseUrl}>Смотреть кейс ↗</a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsIndexSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? reviews : reviews.slice(0, FEATURED_VISIBLE);
  const hasHiddenItems = reviews.length > FEATURED_VISIBLE;

  return (
    <main className={styles.reviewsPage}>
      <section className={styles.hero} aria-labelledby="reviews-title">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Отзывы и письма" },
              ]}
            />
            <div className={styles.eyebrow}>Доверие создаёт результаты</div>
            <h1 id="reviews-title">Отзывы и благодарственные письма клиентов</h1>
            <p>
              Нам доверяют компании из разных отраслей. Их отзывы и официальные
              благодарственные письма подтверждают экспертизу, системный подход и результат.
            </p>
            <div className={styles.heroActions}>
              <OpenConsultationButton as="a" href="/contacts">Обсудить проект</OpenConsultationButton>
              <a href="/cases">Смотреть кейсы</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reviewsGridSection} aria-label="Отзывы и благодарственные письма">
        <div className={styles.container}>

          <div className={styles.reviewsMosaic}>
            {visibleItems.map((item) =>
              item.type === "review" ? (
                <ReviewCard item={item} key={item.id} />
              ) : (
                <LetterCard item={item} key={item.id} />
              )
            )}
          </div>

          {hasHiddenItems ? (
            <div className={styles.loadMoreWrap}>
              <button
                className={styles.loadMoreButton}
                type="button"
                aria-expanded={showAll}
                onClick={() => setShowAll((value) => !value)}
              >
                {showAll ? "Скрыть отзывы" : "Смотреть все отзывы"}
                <span>{showAll ? "↑" : "↓"}</span>
              </button>
            </div>
          ) : null}

          <div className={styles.yandexRatingRow}>
            <a
              href="https://yandex.ru/maps/org/make_all_perfect/190852529964/reviews/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.yandexRatingLink}
            >
              <img
                src="/images/yandex-rating.webp"
                alt="Рейтинг Make All Perfect на Яндекс Картах — 4.9"
                loading="lazy"
                decoding="async"
                className={styles.yandexRatingImg}
              />
            </a>
          </div>

          <div className={styles.reviewsCta}>
            <div>
              <span>Обсудим ваш проект?</span>
              <strong>Расскажите о задаче — предложим решения, которые дадут измеримый результат.</strong>
            </div>
            <OpenConsultationButton as="a" href="/contacts">Обсудить проект</OpenConsultationButton>
          </div>
        </div>
      </section>
    </main>
  );
}
