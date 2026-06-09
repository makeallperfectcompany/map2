import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { sermContent } from "@/content/services/serm";
import styles from "./SermSections.module.css";
export default function SermScopeSection(){ const { scope } = sermContent; return <section className={styles.scopeSection}><Container><span className={styles.sectionLabel}>{scope.label}</span><div className={styles.headerRow}><h2>{scope.title}</h2><p>{scope.lead}</p></div><div className={`${grid.grid2} ${styles.scopeLayout}`}><div className={styles.scopeVisual}><Image src={scope.image} alt="" fill sizes="(min-width: 768px) 45vw, 100vw" /></div><div className={styles.scopeCards}><article className={styles.auditCard}><h3>{scope.audit.title}</h3><p>{scope.audit.text}</p></article><div className={grid.grid2}>{scope.cards.map((card, index) => <article className={styles.miniCard} key={card.title}><strong>{String(index + 1).padStart(2, "0")}</strong><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></div></div></Container></section>; }
