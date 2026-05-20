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

const TYPE_SPEED = 70;
const DELETE_SPEED = 45;
const DISPLAY_MS = 2200;
const PAUSE_MS = 300;

type Phase = "typing" | "display" | "deleting" | "pause";

export default function AnimatedWord() {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState(WORDS[0]);
  const [phase, setPhase] = useState<Phase>("display");
  const indexRef = useRef(0);
  const fullTextRef = useRef(WORDS[0]);

  // Find the widest word for layout stability
  const longestWord = WORDS.reduce((a, b) => (a.length >= b.length ? a : b));

  useEffect(() => {
    if (phase === "typing") {
      const target = fullTextRef.current;
      let i = 1;
      let timer: ReturnType<typeof setTimeout>;
      const tick = () => {
        if (i <= target.length) {
          setText(target.slice(0, i));
          i++;
          timer = setTimeout(tick, TYPE_SPEED);
        } else {
          setPhase("display");
        }
      };
      timer = setTimeout(tick, TYPE_SPEED);
      return () => clearTimeout(timer);
    }

    if (phase === "display") {
      setVisible(true);
      const timer = setTimeout(() => setPhase("deleting"), DISPLAY_MS);
      return () => clearTimeout(timer);
    }

    if (phase === "deleting") {
      const current = text;
      let i = current.length - 1;
      let timer: ReturnType<typeof setTimeout>;
      const tick = () => {
        if (i >= 0) {
          setText(current.slice(0, i));
          i--;
          timer = setTimeout(tick, DELETE_SPEED);
        } else {
          setPhase("pause");
        }
      };
      timer = setTimeout(tick, DELETE_SPEED);
      return () => clearTimeout(timer);
    }

    if (phase === "pause") {
      setVisible(false);
      const timer = setTimeout(() => {
        const nextIdx = (indexRef.current + 1) % WORDS.length;
        indexRef.current = nextIdx;
        fullTextRef.current = WORDS[nextIdx];
        setPhase("typing");
      }, PAUSE_MS);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <span className={styles.wrapper}>
      <span className={styles.container} style={{ width: `${longestWord.length}ch` }}>
        <span className={styles.ghost}>{longestWord}</span>
        <span
          className={`${styles.dynamicText} ${visible ? styles.visible : styles.hidden}`}
        >
          {text}
        </span>
        <span className={styles.cursor} />
      </span>
    </span>
  );
}
