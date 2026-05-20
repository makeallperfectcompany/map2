"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./AnimatedWord.module.css";

const WORDS = [
  "лидировать",
  "развиваться",
  "расти",
  "побеждать",
  "управлять",
];

const DISPLAY_MS = 2400;
const FADE_MS = 450;

export default function AnimatedWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(false), DISPLAY_MS);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, FADE_MS);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <span className={`${styles.text} ${visible ? styles.in : styles.out}`}>
      {WORDS[index]}
    </span>
  );
}
