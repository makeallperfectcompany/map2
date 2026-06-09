import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { Container } from "@/components/ui/Container/Container";
import { smiContent } from "@/content/services/publikatsii-v-smi";
import grid from "@/styles/grid.module.css";
import styles from "./OrmPricingSection.module.css";
export default function SmiPricingSection() { const { pricing } = smiContent; return <section className={styles.section}><Container><div className={`${grid.grid2} ${styles.panel}`}><div className={styles.copy}><span className={styles.label}>Стоимость</span><h2>{pricing.title}</h2><strong>{pricing.price}</strong><p>{pricing.description}</p></div><div className={styles.details}><h3>{pricing.includesTitle}</h3><ul>{pricing.includes.map((item) => <li key={item}>{item}</li>)}</ul><p className={styles.note}>{pricing.note}</p><OpenConsultationButton as="a" className={styles.cta}>{pricing.cta}</OpenConsultationButton></div></div></Container></section>; }
