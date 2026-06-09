import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import styles from "./RedesignProcessSection.module.css";
import { redesignServiceContent } from "@/content/services/redizayn-i-dorabotka-saytov";
export default function RedesignProcessSection() {
 const { process } = redesignServiceContent;
 return <section className={styles.section}><Container><div className={styles.layout}><div className={styles.intro}><span className={styles.label}>Процесс</span><h2>{process.title}</h2><p>{process.description}</p><Link href="#lead-form">{process.cta} →</Link></div><ol className={styles.timeline}>{process.steps.map(step => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div></Container></section>;
}
