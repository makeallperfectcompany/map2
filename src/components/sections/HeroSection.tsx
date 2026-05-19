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
            <div className={styles.heroMobileVisual}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/assets/home/hero/hero-mobile-logo-bg.webp" />
                <source media="(max-width: 1024px)" srcSet="/assets/home/hero/hero-mobile-logo-bg.webp" />
                <Image
                  className={styles.heroMobileLogoBg}
                  src="/assets/home/hero/hero-mobile-logo-bg.webp"
                  alt=""
                  width={941}
                  height={1672}
                  priority
                />
              </picture>
            </div>

            <div className={styles.heroFeatures}>
              {/* 1: Стратегия и рост */}
              <div className={styles.heroFeat}>
                <div className={styles.heroFeatIcon}>
                  <Image
                    src="/assets/home/hero/icon-strategy.webp"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className={styles.featText}>Стратегия<br />и рост</div>
              </div>

              {/* 2: Дизайн и контент */}
              <div className={styles.heroFeat}>
                <div className={styles.heroFeatIcon}>
                  <Image
                    src="/assets/home/hero/icon-design.webp"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className={styles.featText}>Дизайн<br />и контент</div>
              </div>

              {/* 3: Реклама и аналитика */}
              <div className={styles.heroFeat}>
                <div className={styles.heroFeatIcon}>
                  <Image
                    src="/assets/home/hero/icon-advertising.webp"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className={styles.featText}>Реклама<br />и аналитика</div>
              </div>

              {/* 4: SEO и разработка */}
              <div className={styles.heroFeat}>
                <div className={styles.heroFeatIcon}>
                  <Image
                    src="/assets/home/hero/icon-seo.webp"
                    alt=""
                    width={64}
                    height={64}
                  />
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
