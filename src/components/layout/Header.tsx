"use client";

import Image from "next/image";
import styles from "./Header.module.css";

interface HeaderProps {
  menuOpen: boolean;
  onBurgerClick: () => void;
}

export default function Header({ menuOpen, onBurgerClick }: HeaderProps) {
  return (
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
        <a href="#" className={styles.navLink}>Кейсы</a>
        <a href="#" className={styles.navLink}>Блог</a>
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
  );
}
