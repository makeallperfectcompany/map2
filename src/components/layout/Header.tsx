"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useConsultationPopup } from "@/components/modals/PopupProvider";
import styles from "./Header.module.css";

interface HeaderProps {
  menuOpen: boolean;
  onBurgerClick: () => void;
}

export default function Header({ menuOpen, onBurgerClick }: HeaderProps) {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const { openConsultation } = useConsultationPopup();

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const isMobile = window.innerWidth < 1024;

      if (isMobile && currentY > 60) {
        if (currentY > lastScrollY.current) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const headerClass = `${styles.header}${menuOpen ? " " + styles.menuOpen : ""}${hidden ? " " + styles.headerHidden : ""}`;

  return (
    <>
      <div
        className={`${styles.overlay}${menuOpen ? " " + styles.overlayOpen : ""}`}
        aria-hidden={!menuOpen}
        onClick={onBurgerClick}
      >
        <nav className={styles.overlayInner} aria-label="full menu">
          <a href="#" className={styles.overlayItem}>
            Услуги
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/cases" className={styles.overlayItem}>
            Кейсы
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/reviews" className={styles.overlayItem}>
            Отзывы
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/blog" className={styles.overlayItem}>
            Блог
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/about" className={styles.overlayItem}>
            О нас
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/jobs" className={styles.overlayItem}>
            Вакансии
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/partners" className={styles.overlayItem}>
            Партнёрам
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/contacts" className={styles.overlayItem}>
            Контакты
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <button className={styles.overlayCta} onClick={openConsultation}>
            Обсудить проект
          </button>
        </nav>
      </div>
      <header className={headerClass}>
        <a href="/" className={styles.brand}>
          <Image
            className={styles.brandLogo}
            src="/assets/home/hero/logo-header.webp"
            alt="Make All Perfect logo"
            title="Make All Perfect"
            width={34}
            height={34}
            priority
          />
          <span className={styles.brandTextCol}>
            <span className={styles.brandName}>Make All Perfect</span>
            <small className={styles.brandYear}>Since 2017</small>
          </span>
        </a>

        <nav className={styles.headerNav} aria-label="primary">
          <a href="#" className={styles.navLink}>Услуги</a>
          <a href="/cases" className={styles.navLink}>Кейсы</a>
          <a href="/reviews" className={styles.navLink}>Отзывы</a>
          <a href="/blog" className={styles.navLink}>Блог</a>
          <a href="/about" className={styles.navLink}>О нас</a>
          <a href="/jobs" className={styles.navLink}>Вакансии</a>
          <a href="/partners" className={styles.navLink}>Партнёрам</a>
          <a href="/contacts" className={styles.navLink}>Контакты</a>

        </nav>

        <div className={styles.navRight}>
          <button className={styles.navCta} onClick={openConsultation}>Обсудить проект</button>
          <button
            className={`${styles.heroBurger}${menuOpen ? " " + styles.menuOpen : ""}`}
            onClick={onBurgerClick}
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
            <span className={styles.burgerLabel}>Меню</span>
            <span className={styles.burgerLines}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>
    </>
  );
}
