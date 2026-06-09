import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { sermContent } from "@/content/services/serm";
import styles from "./SermSections.module.css";
export default function SermReputationRiskSection() { const { risk } = sermContent; return <section className={styles.riskSection}><Container><div className={grid.gridAsymmetric}><div className={styles.copy}><span className={styles.sectionLabel}>{risk.label}</span><h2>{risk.title}</h2>{risk.paragraphs.map(p => <p key={p}>{p}</p>)}<a className={styles.textLink} href="#lead-form">{risk.cta} →</a></div><aside className={styles.bluePanel}><span className={styles.panelKicker}>SEARCH TRUST</span><h3>{risk.panelTitle}</h3><ul>{risk.bullets.map(b => <li key={b}>{b}</li>)}</ul></aside></div></Container></section>; }
