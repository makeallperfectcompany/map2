import { Container } from "@/components/ui/Container/Container";
import styles from "./VkAdsFaq.module.css";
interface Props { items: string[][] }
export default function VkAdsFaq({ items }: Props) {
  return <section className={styles.section}><Container><h2 className={styles.title}>Частые вопросы о рекламе ВКонтакте</h2><div className={styles.list}>{items.map(([q,a])=><details className={styles.item} key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></Container></section>;
}
