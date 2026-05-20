"use client";

import Image from "next/image";
import styles from "./Header.module.css";

interface HeaderProps {
  menuOpen: boolean;
  onBurgerClick: () => void;
}

export default function Header({ menuOpen, onBurgerClick }: HeaderProps) {
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
          <a href="/blog" className={styles.overlayItem}>
            Блог
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.overlayItem}>
            Команда
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.overlayItem}>
            Контакты
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>
      </div>
      <header className={`${styles.header}${menuOpen ? " " + styles.menuOpen : ""}`}>
        <a href="#" className={styles.brand}>
          <Image
            className={styles.brandLogo}
            src="/assets/home/hero/logo-header.webp"
            alt="Make All Perfect logo"
            width={34}
            height={34}
            priority
          />
          <span>Make All Perfect</span>
        </a>

        <nav className={styles.headerNav} aria-label="primary">
          <a href="#" className={styles.navLink}>Услуги</a>
          <a href="/cases" className={styles.navLink}>Кейсы</a>
          <a href="/blog" className={styles.navLink}>Блог</a>
          <a href="#" className={styles.navLink}>Команда</a>
        </nav>

        <div className={styles.navRight}>
          <a href="#" className={styles.navCta}>Связаться</a>
          <button
            className={`${styles.heroBurger}${menuOpen ? " " + styles.menuOpen : ""}`}
            onClick={onBurgerClick}
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
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
