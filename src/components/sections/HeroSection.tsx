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
              Маркетинг полного цикла для брендов, которые хотят лидировать
            </h1>

            <p className={styles.heroLead}>
              Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.
            </p>

            <div className={styles.heroActions}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="#">
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

            {/* Mobile visual block — виден только на <= 1024px */}
            <div className={styles.mobileLogoVisual} aria-hidden="true" />

            <div className={styles.heroFeatures}>
              {/* 1: Стратегия и рост */}
              <div className={styles.heroFeat}>
                <div className={styles.featIco}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="12" cy="12" r="7"/>
                    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22"/>
                    <path d="M8 14l3-3 3 3 4-4"/>
                    <path d="M18 10h-4V6"/>
                  </svg>
                </div>
                <div className={styles.featText}>Стратегия<br />и рост</div>
              </div>

              {/* 2: Дизайн и контент */}
              <div className={styles.heroFeat}>
                <div className={styles.featIco}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M14 5l5 5"/>
                    <path d="M4 20l4.5-1 9-9a1.8 1.8 0 0 0 0-2.5l-1-1a1.8 1.8 0 0 0-2.5 0l-9 9L4 20z"/>
                    <path d="M4 4h6M4 8h4M4 12h3"/>
                  </svg>
                </div>
                <div className={styles.featText}>Дизайн<br />и контент</div>
              </div>

              {/* 3: Реклама и аналитика */}
              <div className={styles.heroFeat}>
                <div className={styles.featIco}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 20V10"/>
                    <path d="M10 20V6"/>
                    <path d="M16 20v-9"/>
                    <path d="M22 20V4"/>
                    <path d="M3 20h20"/>
                  </svg>
                </div>
                <div className={styles.featText}>Реклама<br />и аналитика</div>
              </div>

              {/* 4: SEO и разработка */}
              <div className={styles.heroFeat}>
                <div className={styles.featIco}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M8 8l-4 4 4 4"/>
                    <path d="M16 8l4 4-4 4"/>
                    <path d="M13.5 5.5l-3 13"/>
                    <path d="M6.5 19c3.8-1.1 7.6-3.4 10.8-7.2"/>
                    <path d="M17.3 11.8h-3.2"/>
                    <path d="M17.3 11.8v3.2"/>
                  </svg>
                </div>
                <div className={styles.featText}>SEO<br />и разработка</div>
              </div>
            </div>
          </div>

          <div className={styles.right}></div>
        </div>
      </section>
    </>
  );
}
