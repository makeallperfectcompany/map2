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

const TYPE_SPEED = 70;
const DELETE_SPEED = 45;
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
    <span className={styles.text}>
      {text}
    </span>
  );
}
