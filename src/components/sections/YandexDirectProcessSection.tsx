import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoProcessSection.module.css";

interface Props { title: string; text: string; image: string; items: readonly (readonly [string, string])[]; }

export default function YandexDirectProcessSection({ title, text, image, items }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${grid.grid2} ${styles.layout}`}>
          <div>
            <div className={styles.header}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className={styles.timeline}>
              {items.map(([itemTitle, itemText], index) => {
                const icons = [
                  // 1. search — лупа
                  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
                  // 2. check — галочка
                  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
                  // 3. design — карандаш
                  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
                  // 4. play — треугольник
                  <svg key="4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
                  // 5. optimize — молния
                  <svg key="5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                  // 6. report — таблица с данными
                  <svg key="6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="9" x2="9" y2="21"/></svg>,
                ];
                return (
                  <article key={itemTitle}>
                    <span className={styles.iconWrap}>{icons[index]}</span>
                    <div>
                      <h3>{itemTitle}</h3>
                      <p>{itemText}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className={styles.visualCard}>
            <Image src={image} alt="Процесс настройки Яндекс Директ — Make All Perfect" width={1200} height={1500} sizes="(max-width: 768px) 100vw, 48vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}
