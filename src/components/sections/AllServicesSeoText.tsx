import { Container } from "@/components/ui/Container/Container";

export default function AllServicesSeoText() {
  return (
    <section style={{
      padding: "var(--section-py) 0",
      background: "#ffffff",
    }}>
      <Container>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
          <p style={{
            margin: 0,
            fontSize: "15px",
            lineHeight: "1.6",
            color: "var(--muted)",
            letterSpacing: "-0.018em",
          }}>
            <strong style={{ color: "var(--ink)" }}>Make All Perfect</strong> — маркетинговое агентство полного цикла, которое с 2017 года помогает бизнесу расти за счёт системного продвижения. Мы оказываем услуги контекстной и таргетированной рекламы, SEO-продвижения в Яндексе и Google, создания и разработки сайтов, продвижения на маркетплейсах Wildberries и Ozon, SMM, email- и CRM-маркетинга, управления репутацией и сквозной аналитики. Любую услугу можно заказать отдельно или собрать комплексное продвижение под вашу нишу и бюджет.
          </p>
          <p style={{
            margin: 0,
            fontSize: "15px",
            lineHeight: "1.6",
            color: "var(--muted)",
            letterSpacing: "-0.018em",
          }}>
            Мы не переносим один шаблон из проекта в проект: для каждого бизнеса собираем стратегию под его экономику, аудиторию и цикл сделки. Работаем с e-commerce, B2B, медициной, недвижимостью, образованием и ещё более чем в 30 нишах. 98% клиентов продлевают договор, потому что мы говорим на языке цифр — заявки, стоимость привлечения, конверсия и ROMI. Оставьте заявку на бесплатную консультацию: разберём вашу ситуацию и подскажем, с чего начать, чтобы не тратить бюджет на лишние действия.
          </p>
        </div>
      </Container>
    </section>
  );
}
