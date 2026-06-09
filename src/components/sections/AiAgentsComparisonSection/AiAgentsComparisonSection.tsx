import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { aiAgentsService } from "@/content/services/sozdanie-ii-agentov";
import styles from "./AiAgentsComparisonSection.module.css";
export default function AiAgentsComparisonSection(){const data=aiAgentsService.comparison;return <section className={styles.section}><Container><h2 className={styles.title}>{data.title}</h2><p className={styles.lead}>{data.description}</p><div className={`${grid.grid3} ${styles.gridTop}`}>{data.cards.map((card,index)=><article className={`${styles.card} ${index===1?styles.accent:""}`} key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></Container></section>}