"use client";

import { useMemo, useState } from "react";
import { featuredReviews, type ReviewItem } from "@/content/reviews";
import styles from "./HomeReviewsSection.module.css";

const REVIEWS_PER_PAGE = 3;

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.4l2.48 5.03 5.55.81-4.01 3.91.95 5.52L12 15.99l-4.97 2.61.95-5.52-4.01-3.91 5.55-.81L12 3.4z"
        fill="currentColor"
      />
    </svg>
  );
}

function Avatar({ src, name }: { src?: string; name: string }) {
  if (src) {
    return (
      <div className={styles.avatarImageWrapper}>
        <img src={src} alt={name} className={styles.avatarImage} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={styles.avatar} aria-hidden="true">
      {name.slice(0, 1)}
    </div>
  );
}

function ReviewPopup({ review, onClose }: { review: ReviewItem; onClose: () => void }) {
  const name = review.name ?? "";
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popupCard} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Закрыть">
          ✕
        </button>
        <div className={styles.popupStars} aria-label="Оценка 5 из 5">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <blockquote>{review.text}</blockquote>
        <footer>
          <Avatar src={"avatar" in review ? review.avatar : undefined} name={name} />
          <div>
            <strong>{name}</strong>
            <span>{review.role}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ReviewFooter({ review, onExpand }: { review: ReviewItem; onExpand: () => void }) {
  const text = review.text ?? "";
  const name = review.name ?? "";
  const isLong = text.length > 200;

  return (
    <>
      {isLong && (
        <button type="button" className={styles.expandButton} onClick={onExpand}>
          Читать полностью →
        </button>
      )}
      <footer>
        <Avatar src={"avatar" in review ? review.avatar : undefined} name={name} />
        <div>
          <strong>{name}</strong>
          <span>{review.role}</span>
        </div>
      </footer>
    </>
  );
}

export default function HomeReviewsSection() {
  const [popupReview, setPopupReview] = useState<ReviewItem | null>(null);

  const pages = useMemo(() => {
    const result = [];
    for (let index = 0; index < featuredReviews.length; index += REVIEWS_PER_PAGE) {
      result.push(featuredReviews.slice(index, index + REVIEWS_PER_PAGE));
    }
    return result;
  }, []);

  const [activePage, setActivePage] = useState(0);
  const currentReviews = pages[activePage] ?? [];

  function goToPreviousPage() {
    setActivePage((current) => (current === 0 ? pages.length - 1 : current - 1));
  }

  function goToNextPage() {
    setActivePage((current) => (current === pages.length - 1 ? 0 : current + 1));
  }

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <div className={styles.headerGrid}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Отзывы</span>
            <p className={styles.kicker}>Доверие и благодарственные письма</p>
            <h2>Клиенты ценят нас за системный подход, прозрачность и результат</h2>
            <p className={styles.description}>
              Мы не обещаем магию и не прячем работу за красивыми отчётами. Показываем,
              что делаем, почему это важно и как каждый шаг влияет на заявки, продажи и рост бизнеса.
            </p>
          </div>

          <aside className={styles.summaryCard}>
            <div className={styles.summaryVisual} aria-hidden="true">
              <img
                src="/images/home/reviews/summary-visual.webp"
                alt=""
                className={styles.summaryVisualImg}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.summaryContent}>
              <span>Social proof</span>
              <h3>Доверие нельзя купить — его надо заработать</h3>
              <p>
                Каждый отзыв — это реальный проект, измеримый результат и человек, который доверил нам свой бизнес.
              </p>
              <a className={styles.allReviewsLink} href="/reviews">
                Смотреть все отзывы →
              </a>
            </div>
          </aside>
        </div>

        <div className={styles.carouselHeader}>
          <div className={styles.controls} aria-label="Переключение отзывов">
            <button type="button" onClick={goToPreviousPage} aria-label="Предыдущие отзывы">
              ←
            </button>
            <button type="button" onClick={goToNextPage} aria-label="Следующие отзывы">
              →
            </button>
          </div>
        </div>

        <div className={styles.reviewsViewport}>
          <div className={styles.reviewsGrid}>
            {currentReviews.map((review, index) => (
              <article className={styles.reviewCard} key={review.id}>
                <div className={styles.cardTop}>
                  <div className={styles.rating} aria-label="Высокая оценка">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <span className={styles.index}>
                    {String(activePage * REVIEWS_PER_PAGE + index + 1).padStart(2, "0")}
                  </span>
                </div>

                <blockquote>{review.text}</blockquote>

                <ReviewFooter review={review} onExpand={() => setPopupReview(review)} />
              </article>
            ))}
          </div>
        </div>

        <div className={styles.mobileScroller} aria-label="Отзывы">
          {featuredReviews.map((review, index) => (
            <article className={styles.reviewCard} key={review.id}>
              <div className={styles.cardTop}>
                <div className={styles.rating} aria-label="Высокая оценка">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <blockquote>{review.text}</blockquote>

              <ReviewFooter review={review} onExpand={() => setPopupReview(review)} />
            </article>
          ))}
        </div>

        <div className={styles.dots} aria-label="Страницы отзывов">
          {pages.map((_, index) => (
            <button
              type="button"
              className={index === activePage ? styles.activeDot : ""}
              onClick={() => setActivePage(index)}
              aria-label={`Показать страницу отзывов ${index + 1}`}
              key={index}
            />
          ))}
        </div>
      </div>

      {popupReview && (
        <ReviewPopup review={popupReview} onClose={() => setPopupReview(null)} />
      )}

    </section>
  );
}
