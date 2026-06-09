import { Container } from "@/components/ui/Container/Container";
import { wbExternalAdsContent } from "@/content/services/vneshnyaya-reklama-wildberries";
import styles from "./WbExternalAdsScope.module.css";

export default function WbExternalAdsScope() {
  const { scope } = wbExternalAdsContent;
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}><h2>{scope.title}</h2><p>{scope.description}</p></div>
        <div className={styles.grid}>{scope.cards.map((card)=>(<article className={styles.card} key={card.title}><span>{card.code}</span><h3>{card.title}</h3><p>{card.text}</p></article>))}</div>
      </Container>
    </section>
  );
}
