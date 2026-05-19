"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  menuOpen: boolean;
  onMenuClose: () => void;
}

export default function HeroSection({ menuOpen, onMenuClose }: HeroSectionProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        onMenuClose();
      }
    },
    [menuOpen, onMenuClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Burger Overlay */}
      <div
        className={`${styles.heroMenuOverlay}${menuOpen ? " " + styles.heroMenuOverlayOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.heroMenuInner} aria-label="full menu">
          <a href="#" className={styles.heroMenuItem}>
            Услуги
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.heroMenuItem}>
            Кейсы
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.heroMenuItem}>
            Блог
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.heroMenuItem}>
            Команда
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.heroMenuItem}>
            Контакты
            <svg className={styles.mArr} viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Desktop background — скрывается на mobile через CSS */}
        <Image
          className={styles.heroBg}
          src="/assets/home/hero/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center right" }}
        />

        <div className={styles.heroInner}>
          <div className={styles.left}>
            <h1 className={styles.heroTitle}>
              Маркетинг полного цикла для брендов, которые хотят <span className={styles.highlight}>лидировать</span>
            </h1>

            <p className={styles.heroLead}>
              Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.
            </p>

            <div className={styles.heroActions}>
              <a className={`${styles.btn} ${styles.btnAccent}`} href="#">
                <span className={styles.label}>Обсудить проект</span>
                <span className={styles.arrWrap}>
                  <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
              <a className={`${styles.btn} ${styles.btnGhost}`} href="#">
                <span className={styles.label}>Смотреть подход</span>
                <span className={styles.arrWrap}>
                  <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="#15161a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="#15161a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className={styles.right}></div>
        </div>
      </section>
    </>
  );
}
