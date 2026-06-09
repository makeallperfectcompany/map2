import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { aiAgentsService } from "@/content/services/sozdanie-ii-agentov";
import styles from "./AiAgentsPricingSection.module.css";
export default function AiAgentsPricingSection(){const data=aiAgentsService.pricing;return <section className={styles.section} id="pricing"><Container><h2 className={styles.title}>{data.title}</h2><p className={styles.lead}>{data.description}</p><div className={`${grid.grid3} ${styles.gridTop}`}>{data.cards.map((card)=><article className={styles.priceCard} key={card.title}><h3>{card.title}</h3><p>{card.text}</p><strong>{card.price}</strong></article>)}</div>{data.note && <p className={styles.note}>{data.note}</p>}</Container></section>}