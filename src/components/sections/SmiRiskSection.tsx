import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { Container } from "@/components/ui/Container/Container";
import { smiContent } from "@/content/services/publikatsii-v-smi";
import grid from "@/styles/grid.module.css";
import styles from "./OrmRiskSection.module.css";
export default function SmiRiskSection() { const { risk } = smiContent; return <section className={styles.section}><Container><div className={`${grid.grid2} ${styles.layout}`}><div className={styles.copy}><h2>{risk.title}</h2>{risk.paragraphs.map((text) => <p key={text}>{text}</p>)}<OpenConsultationButton as="a" className={styles.cta}>{risk.cta}</OpenConsultationButton></div><aside className={styles.panel}><h3>{risk.panelTitle}</h3><ul>{risk.panelItems.map((item) => <li key={item}>{item}</li>)}</ul></aside></div></Container></section>; }
