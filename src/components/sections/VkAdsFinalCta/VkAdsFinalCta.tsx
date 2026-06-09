import { Container } from "@/components/ui/Container/Container";
import styles from "./VkAdsFinalCta.module.css";
interface Props { content: { title: string; description: string; cta: string } }
export default function VkAdsFinalCta({ content }: Props) {
  return <section className={styles.section} id="contact"><Container><div className={styles.panel}><div><h2 className={styles.title}>{content.title}</h2><p className={styles.text}>{content.description}</p></div><a href="#contact" className={styles.link}>{content.cta}</a></div></Container></section>;
}
