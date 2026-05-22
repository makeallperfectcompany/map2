import styles from "./Container.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return (
    <div className={`${styles.container} ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}
