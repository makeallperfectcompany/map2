import { Container } from "@/components/ui/Container/Container";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

export default function VkAdsProcess({ content }: { content: VkAdsContent["process"] }) {
  return (
    <section className={styles.processSection} aria-labelledby="vkAdsProcessTitle">
      <Container>
        <div className={styles.centeredHeader}>
          <span className={styles.sectionPill}>{content.label}</span>
          <h2 id="vkAdsProcessTitle">{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={styles.timeline}>
          {content.steps.map((step) => (
            <article className={styles.timelineStep} key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}