import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { aiAgentsService } from "@/content/services/sozdanie-ii-agentov";
import styles from "./AiAgentsTechnologiesSection.module.css";
export default function AiAgentsTechnologiesSection(){const data=aiAgentsService.technologies;return <section className={styles.techSection}><Container><div className={styles.header}><h2>{data.title}</h2><p>{data.description}</p></div><div className={`${grid.grid3} ${styles.cardsGrid}`}>{data.cards.map((card)=><article className={styles.techCard} key={card.title}><span>{card.code}</span><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></Container></section>}