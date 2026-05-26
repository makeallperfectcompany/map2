import { homeAbout } from "@/content/home/about";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HomeAboutSection.module.css";

export default function HomeAboutSection() {
  return (
    <section className={styles.aboutSection}>
      <Container className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.sectionLabel}>{homeAbout.label}</span>

            <h2>{homeAbout.title}</h2>

            <div className={styles.text}>
              {homeAbout.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={styles.mediaColumn}>
            <div className={styles.videoCard}>
              <video
                className={styles.videoPlayer}
                src="/video/intro-compressed.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Видео о Make All Perfect"
              />
            </div>

            <div className={styles.bullets}>
              {homeAbout.bullets.map((bullet) => (
                <article className={styles.bulletCard} key={bullet.title}>
                  <span>{bullet.mark}</span>
                  <h3>{bullet.title}</h3>
                  <p>{bullet.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
