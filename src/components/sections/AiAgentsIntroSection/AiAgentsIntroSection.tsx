import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { aiAgentsService } from "@/content/services/sozdanie-ii-agentov";
import styles from "./AiAgentsIntroSection.module.css";
export default function AiAgentsIntroSection(){const data=aiAgentsService.intro;return <section className={styles.sectionLight}><Container><div className={styles.split}><div><h2 className={styles.title}>{data.title}</h2><p className={styles.lead}>{data.description}</p></div><div className={grid.grid2}>{data.cards.map((card)=><article className={styles.card} key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></div></Container></section>}