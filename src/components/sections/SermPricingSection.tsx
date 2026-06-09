import { Container } from "@/components/ui/Container/Container";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { sermContent } from "@/content/services/serm";
import styles from "./SermSections.module.css";
export default function SermPricingSection(){ const { pricing } = sermContent; return <section className={styles.pricingSection}><Container><div className={styles.pricingPanel}><div><span className={`${styles.sectionLabel} ${styles.darkLabel}`}>{pricing.label}</span><h2>{pricing.title}</h2><p>{pricing.description}</p></div><div className={styles.pricingAction}><strong>{pricing.price}</strong><p>Первичная консультация бесплатная.</p><OpenConsultationButton as="a" className={styles.primaryButton}>{pricing.cta}</OpenConsultationButton></div><p className={styles.pricingNote}>{pricing.note}</p></div></Container></section>; }
