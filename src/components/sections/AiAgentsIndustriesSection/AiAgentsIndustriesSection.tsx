import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { aiAgentsService } from "@/content/services/sozdanie-ii-agentov";
import styles from "./AiAgentsIndustriesSection.module.css";
export default function AiAgentsIndustriesSection(){const data=aiAgentsService.industries;return <section className={styles.sectionLight}><Container><h2 className={styles.title}>{data.title}</h2><div className={`${grid.grid3} ${styles.gridTop}`}>{data.cards.map((card,index)=><article className={styles.card} key={card.title}><span className={styles.number}>{String(index+1).padStart(2,"0")}</span><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></Container></section>}