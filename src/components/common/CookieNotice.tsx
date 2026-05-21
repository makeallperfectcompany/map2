"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieNotice.module.css";

const STORAGE_KEY = "map_cookie_consent";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent !== "accepted") {
      // Small delay so it fades in after page load
      const timer = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    setClosing(true);
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, "accepted");
      setVisible(false);
    }, 300);
  }

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-label="Уведомление о cookie">
      <div className={`${styles.card} ${closing ? styles.cardHidden : ""}`}>
        <p>
          Мы используем cookie и аналитику, чтобы улучшать работу сайта и понимать,
          какие материалы полезны посетителям. Продолжая пользоваться сайтом, вы
          соглашаетесь с{" "}
          <Link href="/privacy-policy">Политикой конфиденциальности</Link>.
        </p>
        <button className={styles.button} onClick={handleAccept} type="button">
          Понятно
        </button>
      </div>
    </div>
  );
}
