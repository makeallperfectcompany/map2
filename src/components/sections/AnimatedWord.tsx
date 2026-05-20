"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./AnimatedWord.module.css";

const WORDS = [
  "лидировать",
  "расти системно",
  "продавать больше",
  "масштабироваться",
  "управлять ростом",
];

const DISPLAY_MS = 2400;
const FADE_MS = 450;

export default function AnimatedWord() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"show" | "hide">("show");

  const next = useCallback(() => {
    setPhase("hide");
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % WORDS.length);
      setPhase("show");
    }, FADE_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "show") {
      const timer = setTimeout(next, DISPLAY_MS);
      return () => clearTimeout(timer);
    }
  }, [phase, next]);

  return (
    <span className={styles.wrapper}>
      <span className={styles.container}>
        <span
          className={phase === "show" ? styles.wordEnter : styles.wordExit}
        >
          {WORDS[index]}
        </span>
      </span>
      <span className={styles.cursor} />
    </span>
  );
}
