import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { aiAgentsService } from "@/content/services/sozdanie-ii-agentov";
import styles from "./AiAgentsUseCasesSection.module.css";
export default function AiAgentsUseCasesSection(){const data=aiAgentsService.useCases;return <section className={styles.sectionLight}><Container><div className={styles.layout}><div className={styles.visual}><Image src={data.image} alt="" fill sizes="(min-width:1280px) 42vw, 100vw" className={styles.image}/></div><div><article className={styles.blueCard}><h2>{data.title}</h2><p>{data.description}</p></article><div className={`${grid.grid2} ${styles.cardsGrid}`}>{data.cards.map((card)=><article className={styles.card} key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></div></div></Container></section>}