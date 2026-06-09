import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { Container } from "@/components/ui/Container/Container";
import { ormContent } from "@/content/services/orm";
import grid from "@/styles/grid.module.css";
import styles from "./OrmProcessSection.module.css";
export default function OrmProcessSection() { const { process } = ormContent; return <section className={styles.section}><Container><div className={`${grid.grid2} ${styles.layout}`}><div className={styles.header}><span className={styles.sectionLabel}>Процесс</span><h2>{process.title}</h2><OpenConsultationButton as="a" className={styles.cta}>{process.cta}</OpenConsultationButton></div><ol className={styles.timeline}>{process.steps.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div></Container></section>; }
