"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./AnimatedWord.module.css";

const WORDS = [
  "лидировать",
  "расти системно",
  "продавать больше",
  "масштабироваться",
  "управлять ростом",
];

const TYPE_SPEED = 70; // ms per character
const DELETE_SPEED = 45; // ms per character
const DISPLAY_MS = 2200;
const PAUSE_MS = 300;

type Phase = "typing" | "display" | "deleting" | "pause";

export default function AnimatedWord() {
  const [text, setText] = useState(WORDS[0]);
  const [phase, setPhase] = useState<Phase>("display");
  const indexRef = useRef(0);
  const fullTextRef = useRef(WORDS[0]);

  useEffect(() => {
    if (phase === "typing") {
      const target = fullTextRef.current;
      let i = 1;
      const tick = () => {
        if (i <= target.length) {
          setText(target.slice(0, i));
          i++;
          timer = setTimeout(tick, TYPE_SPEED);
        } else {
          setPhase("display");
        }
      };
      let timer = setTimeout(tick, TYPE_SPEED);
      return () => clearTimeout(timer);
    }

    if (phase === "display") {
      const timer = setTimeout(() => setPhase("deleting"), DISPLAY_MS);
      return () => clearTimeout(timer);
    }

    if (phase === "deleting") {
      const current = text;
      let i = current.length - 1;
      const tick = () => {
        if (i >= 0) {
          setText(current.slice(0, i));
          i--;
          timer = setTimeout(tick, DELETE_SPEED);
        } else {
          setPhase("pause");
        }
      };
      let timer = setTimeout(tick, DELETE_SPEED);
      return () => clearTimeout(timer);
    }

    if (phase === "pause") {
      const timer = setTimeout(() => {
        const nextIdx = (indexRef.current + 1) % WORDS.length;
        indexRef.current = nextIdx;
        fullTextRef.current = WORDS[nextIdx];
        setPhase("typing");
      }, PAUSE_MS);
      return () => clearTimeout(timer);
    }
  }, [phase, text]);

  // Show full first word on mount immediately
  useEffect(() => {
    setText(WORDS[0]);
  }, []);

  return (
    <span className={styles.wrapper}>
      <span className={styles.container}>
        <span className={styles.dynamicText}>{text}</span>
        <span className={styles.cursor} />
      </span>
    </span>
  );
}
