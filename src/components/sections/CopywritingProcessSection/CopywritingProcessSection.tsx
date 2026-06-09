import { Container } from "@/components/ui/Container/Container";
import { copywritingServiceContent } from "@/content/services/kopirajting-dlya-sajta";
import styles from "./CopywritingProcessSection.module.css";

export default function CopywritingProcessSection() {
  const { process } = copywritingServiceContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.flowLine} />
            <span /><span /><span /><span /><span />
            <div className={styles.miniDoc}><i /><i /><i /><b /></div>
          </div>
          <div>
            <div className={styles.sectionHead}>
              <h2>{process.title}</h2>
            </div>
            <div className={styles.steps}>
              {process.steps.map((step) => (
                <article key={step.number}>
                  <b>{step.number}</b>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <p className={styles.trustText}>
              На каждом этапе вы видите промежуточный результат и можете внести правки — без «чёрного ящика» и сюрпризов в конце.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
