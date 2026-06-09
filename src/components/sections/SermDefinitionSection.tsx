import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { sermContent } from "@/content/services/serm";
import styles from "./SermSections.module.css";
export default function SermDefinitionSection(){ const { definition } = sermContent; return <section className={styles.definitionSection}><Container><span className={styles.sectionLabel}>{definition.label}</span><div className={styles.headerRow}><h2>{definition.title}</h2><p>{definition.lead}</p></div><div className={grid.grid2}>{definition.cards.map(card => <article className={styles.compareCard} key={card.code}><strong>{card.code}</strong><h3>{card.title}</h3><p>{card.text}</p><div className={styles.chips}>{card.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div><p className={styles.definitionNote}>{definition.note}</p></Container></section>; }
