import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./RedesignPricingSection.module.css";
import { redesignServiceContent } from "@/content/services/redizayn-i-dorabotka-saytov";
export default function RedesignPricingSection() {
 const { pricing } = redesignServiceContent;
 return <section className={styles.section}><Container><div className={`${grid.grid2} ${styles.card}`}><div className={styles.copy}><span className={styles.label}>Стоимость</span><h2>{pricing.title}</h2><p>{pricing.description}</p><strong>{pricing.price}</strong><Link className={`${styles.btn} ${styles.btnAccent}`} href="#lead-form">{pricing.cta}<span>↗</span></Link></div><div className={styles.factors}><h3>Что влияет на оценку проекта</h3><ul>{pricing.factors.map(factor => <li key={factor}>{factor}</li>)}</ul><p>{pricing.nextStep}</p></div></div></Container></section>;
}
