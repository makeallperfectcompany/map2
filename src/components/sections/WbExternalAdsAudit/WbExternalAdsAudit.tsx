import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import { wbExternalAdsContent } from "@/content/services/vneshnyaya-reklama-wildberries";
import styles from "./WbExternalAdsAudit.module.css";

export default function WbExternalAdsAudit() {
  const { audit } = wbExternalAdsContent;
  return (
    <section className={styles.section}>
      <Container className={styles.layout}>
        <div className={styles.copy}><h2>{audit.title}</h2><p>{audit.description}</p><Link href="#lead-form" className={styles.cta}>{audit.cta}</Link></div>
        <div className={styles.visualCard}><Image src={audit.image} alt="Аудит карточки товара Wildberries перед запуском внешней рекламы" width={1400} height={1050} sizes="(min-width: 1280px) 50vw, 100vw" /></div>
      </Container>
    </section>
  );
}
