#!/usr/bin/env node
/**
 * Master-generator for Make All Perfect preview images
 * Uses the art-director prompt guide: role, DNA, base, accent, metaphor
 */
const https = require("https");
const fs = require("fs");
const { execSync } = require("child_process");

const API_KEY = process.env.OPENROUTER_API_KEY || "";
const MODEL = "x-ai/grok-imagine-image-quality";

// === Accent Palette ===
const ACCENTS = {
  blue: { primary: "#0071E3", secondary: "#5FA8FF", name: "brand blue" },
  indigo: { primary: "#4F46E5", secondary: "#6366F1", name: "indigo" },
  cyan: { primary: "#06B6D4", secondary: "#22D3EE", name: "cyan" },
  emerald: { primary: "#10B981", secondary: "#34D399", name: "cold emerald" },
  purple: { primary: "#8B5CF6", secondary: "#A78BFA", name: "lilac-purple" },
  steel: { primary: "#64748B", secondary: "#94A3B8", name: "steel grey" },
};

const TYPE_COLORS = ["emerald", "indigo", "cyan", "purple", "steel", "blue"];

// === Keyword → Color rules ===
const COLOR_RULES = [
  { keywords: ["рост", "продаж", "revenue", "увеличил", "выручк", "прибыл", "доход"], color: "emerald" },
  { keywords: ["данн", "аналит", "метрик", "показател", "kpi", "metric", "cpl", "roi", "drr", "конверси"], color: "steel" },
  { keywords: ["ai", "ии", "искусственн", "нейросет", "технологи", "автоматизац", "цифров"], color: "indigo" },
  { keywords: ["трафик", "канал", "продвижени", "реклам", "маркетпл", "wildberries", "ozon", "wb", "yandex", "яндекс", "google", "внешн"], color: "cyan" },
  { keywords: ["бренд", "имидж", "репутаци", "serm", "orm", "довери", "премиум", "люкс"], color: "purple" },
  { keywords: ["seo", "поисков", "органик", "ранжирова"], color: "blue" },
  { keywords: ["email", "рассы", "партнёр", "партнер"], color: "purple" },
  { keywords: ["бюджет", "стоимост", "цена", "расход", "экономи"], color: "steel" },
  { keywords: ["сайт", "wordpress", "web", "разработк", "дизайн"], color: "indigo" },
  { keywords: ["целев", "таргет", "vkontakte", "вконтакт", "соцсет"], color: "indigo" },
  { keywords: ["стратег", "план", "систем", "модел"], color: "steel" },
  { keywords: ["контент", "стать", "блог", "медиа", "ugc"], color: "purple" },
  { keywords: ["b2b", "b2c", "ниш", "рынок", "конкурен"], color: "blue" },
  { keywords: ["wsd", "warm", "lead", "call", "звонк", "лид"], color: "blue" },
];

// === Color picker with cycling to avoid adjacent same colors ===
const pickHistory = [];
function pickAccent(title) {
  const lower = title.toLowerCase();

  // Find matching color by keywords
  let matched = null;
  for (const rule of COLOR_RULES) {
    for (const kw of rule.keywords) {
      if (lower.includes(kw)) { matched = rule.color; break; }
    }
    if (matched) break;
  }

  // Build candidate list: if matched, use it as primary; cycle from last if no match
  let candidates;
  if (matched) {
    // Start with matched, then fill with others in order
    candidates = [matched, ...TYPE_COLORS.filter(c => c !== matched)];
  } else {
    // Cycle through all colors
    const lastColor = pickHistory.length > 0 ? pickHistory[pickHistory.length - 1] : TYPE_COLORS[TYPE_COLORS.length - 1];
    const startIdx = (TYPE_COLORS.indexOf(lastColor) + 1) % TYPE_COLORS.length;
    candidates = [...TYPE_COLORS.slice(startIdx), ...TYPE_COLORS.slice(0, startIdx)];
  }

  // Pick first candidate that wasn't used in last 2 generations
  let chosen = candidates[0];
  for (const c of candidates) {
    if (!pickHistory.slice(-2).includes(c)) { chosen = c; break; }
  }

  pickHistory.push(chosen);
  return chosen;
}

// === Metaphor descriptions per type+color ===
const CASE_METAPHORS = {
  emerald: "A single luminous emerald glass sphere floating above a pristine dark navy surface, casting a soft green glow on mirrored reflections below. Clean rays of cool light piercing through. Pure abstract form.",
  indigo: "An elegant abstract ribbon in deep indigo flowing through space, smooth and continuous, catching light at its apex. Dark navy background. Glass-like material with subtle luminosity.",
  cyan: "A translucent cyan glass wave suspended in mid-air, catching studio light from above. Dark navy backdrop. Clean geometric form with subtle refraction patterns.",
  purple: "A single amethyst prism floating centrally, refracting a beam of cool light into subtle spectra. Dark navy background, clean minimal composition. Premium glass material.",
  steel: "A brushed steel geometric torus floating against deep navy, subtle light catching its edge. Clean minimal form, industrial-chic aesthetic. Refined metallic surface.",
  blue: "A polished blue glass ring, tilted at a gentle angle, floating above a dark navy surface with a soft luminous glow emanating from within. Cinematic studio lighting.",
};

const ARTICLE_METAPHORS = {
  emerald: "A single luminous emerald glass sphere floating on a pristine white surface, soft green glow reflecting on pearl-white floor. Clean light, airy atmosphere. Minimalist geometric form.",
  indigo: "A translucent indigo wave-form floating in white space, catching soft studio light. Clean white to light grey gradient background. Ribbon-like glass form with subtle luminosity.",
  cyan: "A cyan frosted glass cube floating against pearl-white background, soft light passing through its translucent corners. Airy, clean, premium editorial aesthetic.",
  purple: "A single faceted amethyst geometric form on a white silk-like surface. Soft lavender light scatter. Minimal, clean, luxurious. White-to-light-grey gradient background.",
  steel: "A brushed steel abstract geometric sculpture on white surface, soft studio light creating delicate shadows. Clean analytical aesthetic. White gradient background.",
  blue: "A polished blue glass torus floating in white space, soft blue glow reflecting on pristine white surface. Clean Apple-inspired product aesthetic. Premium minimal.",
};

function buildPrompt(title, type, accent) {
  const base = type === "case"
    ? "Deep dark navy background (#0a2240 fading to #071530). Rich, solid, premium."
    : "Pristine white-to-light-grey gradient background (#ffffff to #f5f5f7). Airy, clean, bright.";

  const a = ACCENTS[accent];
  const meta = (type === "case" ? CASE_METAPHORS : ARTICLE_METAPHORS)[accent];

  return `Premium Apple-inspired minimalist product visualization. ${meta} Primary accent color: ${a.name} (hex ${a.primary}). ${base}. Soft studio lighting, delicate shadows, slight glassmorphism glow. Photorealistic premium render, volumetric light beams. One central object, clean negative space on edges, 16:9 wide format. NO text, NO letters, NO words, NO typography, NO logo, NO watermark, NO human faces, NO recognizable brands.`;
}

// === Items (all cases + articles) ===
const ITEMS = [

  // Cases
  { t: "Увеличили онлайн-продажи в 2,4 раза для бренда одежды за 4 месяца", type: "case", slug: "uvelichili-onlayn-prodazhi-v-24-raza-dlya-brenda-odezhdy-za-4-mesyatsa" },
  { t: "Увеличили онлайн-продажи кофе и чая на 142% для розничной сети", type: "case", slug: "uvelichili-onlayn-prodazhi-kofe-i-chaya-na-142-dlya-roznichnoy-seti" },
  { t: "Снизили стоимость лида на 42% и увеличили кол-во заявок для HR-сервиса", type: "case", slug: "snizili-stoimost-lida-na-42-i-uvelichili-kol-vo-zayavok-dlya-hr-servisa" },
  { t: "Как мы увеличили кол-во заявок в 4 раза для онлайн-школы Frontend-разработки", type: "case", slug: "kak-my-uvelichili-kol-vo-zayavok-v-4-raza-dlya-onlayn-shkoly-frontend-razrabotki" },
  { t: "Увеличение продаж магазина женской одежды на Wildberries", type: "case", slug: "uvelichenie-prodazh-magazina-zhenskoy-odezhdy-na-wildberries" },
  { t: "Оптимизация налогов для предпринимателей на УСН", type: "case", slug: "optimizatsiya-nalogov-dlya-predprinimateley-na-usn" },
  { t: "Продвижение компании по продаже мебели в Москве и Московской области", type: "case", slug: "prodvizhenie-kompanii-po-prodazhe-mebeli-v-moskve-i-moskovskoy-oblasti" },
  { t: "Продвижение строительной компании Карельский Дом", type: "case", slug: "prodvizhenie-stroitelnoy-kompanii-karelskiy-dom" },
  { t: "Стоматологическая клиника в Санкт-Петербурге", type: "case", slug: "stomatologicheskaya-klinika-v-sankt-peterburge" },
  { t: "Комната Ярости Udestroy в Москве — продвижение и результаты", type: "case", slug: "komnata-yarosti-udestroy-v-moskve-prodvizhenie-i-rezultaty" },
  { t: "Эффективное привлечение клиентов для кондитерской в Краснодаре", type: "case", slug: "effektivnoe-privlechenie-klientov-dlya-konditerskoy-v-krasnodare" },
  { t: "Продажа элитных участков в Санкт-Петербурге", type: "case", slug: "prodazha-elitnykh-uchastkov-v-sankt-peterburge-i-leningradskoy-oblasti" },
  { t: "Разработка сайта для студии дизайна", type: "case", slug: "razrabotka-sayta-dlya-ctudii-dizayna" },
  { t: "Экскурсии во Владимире с FPV-технологиями", type: "case", slug: "ekskursii-vo-vladimire-s-fpv-tekhnologiyami" },
  { t: "Снизили расходы на 38% для производственной компании с AI и автоматизацией", type: "case", slug: "cnizili-raskhody-na-38-dlya-proizvodstvennoy-kompanii-s-pomoshchyu-ai-i-avtomatizatsii" },
  { t: "Увеличили заявки на 185% для языковой школы с SEO и Яндекс.Директ", type: "case", slug: "uvelichili-zayavki-na-185-dlya-yazykovoy-shkoly-s-pomoshchyu-seo-i-reklamy-v-yandeks-direkt" },
  { t: "Снизили стоимость лида на 47% для страховой компании", type: "case", slug: "snizili-stoimost-lida-na-47-dlya-strakhovoy-kompanii-i-uvelichili-konversiyu-sayta-v-2-raza" },
  { t: "Увеличили число заявок на покупку квартир в 3,1 раза", type: "case", slug: "uvelichili-chislo-zayavok-na-pokupku-kvartir-v-31-raza-dlya-agentstva-nedvizhimosti-za-25-mesyatsa" },
  { t: "Увеличили органический трафик в 4,3 раза и снизили CPL", type: "case", slug: "uvelichili-organicheskiy-trafik-v-43-raza-i-snizili-cpl-na-47-dlya-avtoservisa-s-prodazhey-zapchastey" },
  { t: "Снизили CPL на 64% и в 2,1 раза увеличили заявки для турагентства", type: "case", slug: "snizili-cpl-na-64-i-v-21-raza-uvelichili-zayavki-dlya-turagentstva-cherez-targetirovannuyu-reklamu" },
  { t: "Увеличили установки мобильной игры в 3,1 раза и снизили стоимость инсталла на 54%", type: "case", slug: "uvelichili-ustanovki-mobilnoy-igry-v-31-raza-i-snizili-stoimost-installa-na-54" },
  { t: "Увеличили продажи ювелирных украшений на 112%", type: "case", slug: "uvelichili-prodazhi-yuvelirnykh-ukrasheniy-na-112-s-pomoshchyu-targetirovannoy-reklamy" },
  { t: "Новый сайт для магазина детских товаров и рост органического трафика на 213%", type: "case", slug: "novyy-sayt-dlya-internet-magazina-detskikh-tovarov-i-uvelichili-organicheskiy-trafik-na-213" },
  { t: "Увеличили поток заявок на клининговые услуги в 3,4 раза за 5 месяцев", type: "case", slug: "kak-my-uvelichili-potok-zayavok-na-kliningovye-uslugi-v-34-raza-za-5-mesyatsev" },
  { t: "Увеличили заказы на кастомную обувь в 2,7 раза для мастерской без сайта", type: "case", slug: "kak-my-uvelichili-zakazy-na-kastomnuyu-obuv-v-27-raza-dlya-masterskoy-bez-sayta" },
  { t: "Увеличили число заявок на поступление на 86% для колледжа в Москве", type: "case", slug: "uvelichili-chislo-zayavok-na-postuplenie-na-86-dlya-kolledzha-v-moskve" },
  { t: "Локальный сервис доставки еды — рост заявок в 4,2 раза за 3 месяца", type: "case", slug: "lokalnyy-servis-dostavki-edy-sayt-seo-target-vk-rost-zayavok-v-42-raza-za-3-mesyatsa" },
  { t: "Рост онлайн-записей на приём в 3,2 раза для медицинской клиники", type: "case", slug: "rost-kolichestva-onlayn-zapisey-na-priem-v-32-raza-dlya-meditsinskoy-kliniki" },
  { t: "4 430 лидов по 270 ₽ и рост поискового трафика на 94% за 5 месяцев", type: "case", slug: "4430-lidov-po-270-i-rost-poiskovogo-trafika-na-94-za-5-mesyatsev-kak-my-prokachali-kliningovuyu-kompaniyu-v-moskve" },
  { t: "SEO + контекст: автосалон вышел на 13 900 визитов и 45 заявок", type: "case", slug: "seo-kontekst-kak-avtosalon-vyshel-na-13-900-vizitov-i-45-zayavok-pri-tsene-lida-vsego-2-100" },
  { t: "Увеличили онлайн-продажи на 125% для магазина товаров для дома", type: "case", slug: "kak-my-uvelichili-onlayn-prodazhi-na-125-dlya-internet-magazina-tovarov-dlya-doma-za-6-mesyatsev" },
  { t: "Рост онлайн-заявок на 220% для региональной логистической компании", type: "case", slug: "rost-onlayn-zayavok-na-220-dlya-regionalnoy-logisticheskoy-kompanii-za-3-mesyatsa" },
  { t: "Реклама клиники эстетической медицины с CPL 633 ₽ за месяц", type: "case", slug: "keys-reklama-kliniki-esteticheskoy-meditsiny-s-cpl-633-za-mesyats" },
  { t: "ROI 435% на WB через внешнюю рекламу", type: "case", slug: "keys-roi-435-na-wb-cherez-vneshnyuyu-reklamu" },
  { t: "Продали на 31 млн на WB через внешний трафик с ДРР 28%", type: "case", slug: "keys-prodali-na-31-mln-na-wb-cherez-vneshniy-trafik-s-drr-28" },
  { t: "Как внешний трафик из Яндекс Promo Page увеличил продажи косметики на WB до 14 млн", type: "case", slug: "keys-kak-vneshniy-trafik-iz-yandex-promo-page-uvelichil-prodazhi-magazina-kosmetiki-na-wildberries-do-14-mln" },
  { t: "Как снизить стоимость лида на ЖК в Москве до 2900 ₽ — кейс 427 заявок", type: "case", slug: "kak-snizit-stoimost-lida-na-zhk-v-moskve-do-2900-v-2025-godu-keys-427-zayavok" },
  { t: "Рост заказов на WB: как внешний трафик повлиял на продажи и поведение", type: "case", slug: "keys-rosta-zakazov-na-wildberries-kak-vneshniy-trafik-povliyal-na-prodazhi-i-povedenie" },
  { t: "Email-маркетинг для Fashion E-commerce: система с доходностью 250%", type: "case", slug: "email-marketing-dlya-fashion-e-commerce-kak-vystroit-sistemu-s-dokhodnostyu-250-i-pobedit-papku-spam" },
  { t: "Рост заказов на 87% за неделю на Wildberries через внешний трафик", type: "case", slug: "keys-rost-zakazov-na-87-za-nedelyu-na-wildberries-cherez-vneshniy-trafik" },
  { t: "Внешний трафик для Wildberries: рост заказов на 122% и снижение расходов", type: "case", slug: "keys-vneshniy-trafik-dlya-wildberries-rost-zakazov-na-122-i-snizheniya-raskhodov" },
  { t: "Продвижение одежды на Wildberries: как увеличить продажи в fashion-нише", type: "case", slug: "keys-prodvizheniya-odezhdy-na-wildberries-kak-uvelichit-prodazhi-v-fashion-nishe" },
  // Articles
  { t: "Аналитика внешнего трафика для Wildberries: что и как считать в 2026", type: "article", slug: "analitika-vneshnego-trafika-dlya-wildberries-chto-i-kak-schitat-v-2026" },
  { t: "Бесплатный SEO-аудит сайта: получите профессиональный анализ за 2-3 часа", type: "article", slug: "besplatnyy-seo-audit-sayta-poluchite-professionalnyy-analiz-za-2-3-chasa" },
  { t: "Что такое RFM-анализ и зачем он B2B", type: "article", slug: "chto-takoe-rfm-analiz-i-zachem-on-b2b" },
  { t: "Email-маркетинг для бизнеса: как выстроить систему рассылок", type: "article", slug: "email-marketing-dlya-biznesa-kak-vystroit-sistemu-rassylok" },
  { t: "Эра гиперконкуренции: почему старые маркетинговые модели больше не работают", type: "article", slug: "era-giperkonkurentsii-pochemu-starye-marketingovye-modeli-bolshe-ne-rabotayut" },
  { t: "Где заказать внешний трафик для Wildberries и Ozon: цены, каналы, площадки", type: "article", slug: "gde-zakazat-vneshniy-trafik-dlya-wildberries-i-ozon-tseny-kanaly-ploshchadki-i-chastye-oshibki" },
  { t: "Google встроил Gemini в Chrome: как ИИ меняет привычный браузер", type: "article", slug: "google-vstroil-gemini-v-chrome-kak-ii-menyaet-privychnyy-brauzer" },
  { t: "Инфлюенс-маркетинг: полное руководство по созданию эффективных кампаний", type: "article", slug: "inflyuens-marketing-polnoe-rukovodstvo-po-sozdaniyu-effektivnykh-kampaniy-ot-eksperta" },
  { t: "Инструменты интернет-маркетинга: практический гид для бизнеса", type: "article", slug: "instrumenty-internet-marketinga-prakticheskiy-gid-dlya-biznesa" },
  { t: "Как адаптировать маркетинг-стратегию в условиях падающего спроса", type: "article", slug: "kak-adaptirovat-marketing-strategiyu-v-usloviyakh-padayushchego-sprosa-praktiki-i-primery" },
  { t: "Как брендам использовать внешнюю рекламу для роста продаж на маркетплейсах", type: "article", slug: "kak-brendam-ispolzovat-vneshnyuyu-reklamu-dlya-rosta-prodazh-na-marketpleysakh" },
  { t: "Как локальный бизнес может победить федеральные сети (продвижение на гео-сервисах)", type: "article", slug: "kak-lokalnyy-biznes-mozhet-pobedit-federalnye-seti-aktivnoe-prodvizhenie-na-geo-servisakh" },
  { t: "Как настроить рекламу в Яндекс.Директ: пошаговая инструкция", type: "article", slug: "kak-nastroit-reklamu-v-yandeks-direkt-poshagovaya-instruktsiya" },
  { t: "Как получить клиентов: 15 проверенных стратегий для бизнеса", type: "article", slug: "kak-poluchit-klientov-15-proverennykh-strategiy-dlya-biznesa-lyubogo-razmera" },
  { t: "Как повысить продажи на WB и Ozon без участия в акциях", type: "article", slug: "kak-povysit-prodazhi-na-wb-i-ozon-bez-uchastiya-v-aktsiyakh" },
  { t: "Как правильно планировать рекламный бюджет к Чёрной пятнице", type: "article", slug: "kak-pravilno-planirovat-reklamnyy-byudzhet-k-chernoy-pyatnitse" },
  { t: "Как правильно распределить рекламный бюджет между каналами", type: "article", slug: "kak-pravilno-raspredelit-reklamnyy-byudzhet-mezhdu-kanalami" },
  { t: "Как статьи в СМИ влияют на SEO и доверие", type: "article", slug: "kak-stati-v-smi-vliyayut-na-seo-i-doverie" },
  { t: "Как вывести товар в топ продаж на Wildberries и Ozon: рабочие методы 2025/26", type: "article", slug: "kak-vyvesti-tovar-v-top-prodazh-na-wildberries-i-ozon-rabochie-metody-202526" },
  { t: "Как зарабатывать на партнёрской программе в digital-маркетинге", type: "article", slug: "kak-zarabatyvat-na-partnerskoj-programme-v-digital-marketinge" },
  { t: "Классический маркетинг устарел: как новая модель 4B меняет правила игры", type: "article", slug: "klassicheskiy-marketing-ustarel-kak-novaya-model-4b-menyaet-pravila-igry" },
  { t: "Контекстная реклама для бизнеса с длинным циклом сделки", type: "article", slug: "kontekstnaya-reklama-dlya-biznesa-s-dlinnym-tsiklom-sdelki-5-formul-obyavleniy-kotorye-sokrashchayut-stoimost-lida-na-40" },
  { t: "Контекстная реклама в B2B 2026: стратегическое руководство", type: "article", slug: "kontekstnaya-reklama-v-b2b-2026-strategicheskoe-rukovodstvo-po-yandeks-direkt-i-google-ads" },
  { t: "Контекстная реклама в Яндекс.Директ: стабильные заявки и рост бизнеса", type: "article", slug: "kontekstnaya-reklama-v-yandeks-direkt-stabilnye-zayavki-i-rost-biznesa" },
  { t: "Кризис доверия к рекламе: как брендам возвращать лояльность в 2026", type: "article", slug: "krizis-doveriya-k-reklame-kak-brendam-vozvrashchat-loyalnost-v-2026-godu" },
  { t: "Лестница Ханта: как формировать спрос и выстраивать маркетинг по этапам", type: "article", slug: "lestnitsa-khanta-kak-formirovat-spros-i-vystraivat-marketing-po-etapam" },
  { t: "НДС 22%: как снизить нагрузку через маркетинг", type: "article", slug: "nds-22-kak-snizit-nagruzku-cherez-marketing" },
  { t: "Нейросети для селлеров: как ИИ помогает создавать карточки и контент на маркетплейсах", type: "article", slug: "neyroseti-dlya-sellerov-kak-ii-pomogaet-sozdavat-kartochki-i-kontent-na-marketpleysakh" },
  { t: "Нейровебмастер в Яндекс.Вебмастере: как новый ИИ-помощник изменит SEO", type: "article", slug: "neyrovebmaster-v-yandeks-vebmastere-kak-novyy-ii-pomoshchnik-izmenit-seo" },
  { t: "ORM: зачем бизнесу управлять своей онлайн-репутацией", type: "article", slug: "orm-zachem-biznesu-upravlyat-svoey-onlayn-reputatsiey" },
  { t: "Ошибки в таргетированной рекламе и как их избежать", type: "article", slug: "oshibki-v-targetirovannoy-reklame-i-kak-ikh-izbezhat" },
  { t: "Почему аутсорсинг маркетинга экономически выгоднее штатного отдела", type: "article", slug: "pochemu-autsorsing-marketinga-ekonomicheski-vygodnee-shtatnogo-otdela" },
  { t: "Почему без внешнего трафика рост на маркетплейсах ограничен в 2026", type: "article", slug: "pochemu-bez-vneshnego-trafika-rost-na-marketpleysakh-ogranichen-v-2026" },
  { t: "Почему падают продажи на Wildberries и Ozon и как это исправить", type: "article", slug: "pochemu-padayut-prodazhi-na-wildberries-i-ozon-i-kak-eto-ispravit" },
  { t: "Поведенческие факторы маркетплейсов: что реально влияет на выдачу", type: "article", slug: "povedencheskie-faktory-marketpleysov-chto-realno-vliyaet-na-vydachu" },
  { t: "Повышает ли внешний трафик позиции карточки в WB", type: "article", slug: "povyshaet-li-vneshniy-trafik-pozitsii-kartochki-v-wb" },
  { t: "Продвижение бизнеса: полное руководство по стратегиям", type: "article", slug: "prodvizhenie-biznesa-polnoe-rukovodstvo-po-strategiyam" },
  { t: "Продвижение сайта в Директе: как успешно рекламироваться в Яндексе", type: "article", slug: "prodvizhenie-sayta-v-direkt-kak-uspeshno-reklamirovatsya-v-yandekse" },
  { t: "Психология покупателя: как эмоции влияют на решение о покупке", type: "article", slug: "psikhologiya-pokupatelya-kak-emotsii-i-vospriyatie-vliyayut-na-reshenie-o-pokupke" },
  { t: "Реклама дорожает: рост цен в России и как бизнесу удержать ROI", type: "article", slug: "reklama-dorozhaet-rost-tsen-v-rossii-i-kak-biznesu-uderzhat-roi" },
  { t: "Реклама на Avito: как превратить объявления в поток заявок", type: "article", slug: "reklama-na-avito-kak-prevratit-obyavleniya-v-potok-zayavok" },
  { t: "Реклама на Avito: способы продвижения, настройки и ошибки новичков", type: "article", slug: "reklama-na-avito-sposoby-prodvizheniya-nastroyki-i-oshibki-novichkov" },
  { t: "Реклама в VK: как настроить так, чтобы был результат", type: "article", slug: "reklama-v-vkontakte-kak-v-2025-godu-nastroit-ee-tak-chtoby-byl-rezultat" },
  { t: "Реклама VK или Яндекс.Директ: что эффективнее в разных нишах", type: "article", slug: "reklama-vkontakte-ili-yandeks-direkt-chto-rabotaet-effektivnee-v-raznykh-nishakh-v-2026-godu" },
  { t: "SEO или контекстная реклама: что выбрать для роста бизнеса", type: "article", slug: "seo-ili-kontekstnaya-reklama-chto-vybrat-dlya-rosta-biznesa" },
  { t: "SEO в 2026: как ИИ и мультимодальный поиск изменят оптимизацию", type: "article", slug: "seo-v-2026-kak-iskusstvennyy-intellekt-i-multimodalnyy-poisk-izmenyat-optimizatsiyu" },
  { t: "SERM: удаление негатива и построение репутации в поиске", type: "article", slug: "serm-udalenie-negativa-i-postroenie-reputatsii-v-poiske" },
  { t: "Сколько стоит внешний трафик для Wildberries и Ozon", type: "article", slug: "skolko-stoit-vneshniy-trafik-dlya-wildberries-i-ozon-byudzhet-drr-i-ot-chego-zavisit-tsena" },
  { t: "Сколько тратить на рекламу: формула бюджета для малого бизнеса", type: "article", slug: "skolko-tratit-na-reklamu-formula-byudzheta-dlya-malogo-biznesa" },
  { t: "Сквозная аналитика для бизнеса: как понять, окупается ли реклама", type: "article", slug: "skvoznaya-analitika-dlya-biznesa-kak-ponyat-okupaetsya-li-reklama" },
  { t: "Создать сайт на WordPress в 2026: полный гайд по рискам и выбору CMS", type: "article", slug: "sozdat-sayt-na-wordpress-v-2026-godu-polnyy-gid-po-riskam-stoimosti-i-vyboru-cms-dlya-rossiyskogo-biznes" },
  { t: "Таргетированная реклама VK: полное руководство", type: "article", slug: "targetirovannaya-reklama-vk-polnoe-rukovodstvo-ot-eksperta-s-7-letnim-opytom" },
  { t: "UGC: как привлекать клиентов контентом самих покупателей", type: "article", slug: "user-generated-content-ugc-kak-privlekat-klientov-kontentom-samikh-pokupateley" },
  { t: "Внешний трафик для маркетплейсов: 7 проверенных стратегий", type: "article", slug: "vneshniy-trafik-dlya-marketpleysov-7-proverennykh-strategiy-ot-eksperta" },
  { t: "Внешний трафик для Wildberries и Ozon: как работает реклама для маркетплейсов", type: "article", slug: "vneshniy-trafik-dlya-wildberries-i-ozon-kak-rabotaet-reklama-dlya-marketpleysov" },
  { t: "Внешняя реклама Wildberries: как увеличить продажи через внешний трафик под ключ", type: "article", slug: "vneshnyaya-reklama-wildberries-kak-uvelichit-prodazhi-cherez-vneshniy-trafik-pod-klyuch" },
  { t: "Яндекс.Директ: почему реклама в РСЯ даёт клики, но не даёт лиды", type: "article", slug: "yandeks-direkt-pochemu-reklama-v-rsya-daet-kliki-no-ne-daet-lidy-i-kak-eto-ispravit" },
  { t: "Яндекс Кит: российский аналог Shopify или вызов для WB и Ozon", type: "article", slug: "yandeks-kit-rossiyskiy-analog-shopify-ili-vyzov-dlya-wb-i-ozon" },
  { t: "Яндекс.Директ: полное руководство по настройке и ведению кампаний", type: "article", slug: "yandeksdirekt-polnoe-rukovodstvo-po-nastroyke-i-vedeniyu-reklamnykh-kampaniy-ot-eksperta" },
  { t: "Zero-click поиск: как получать трафик без переходов в 2025", type: "article", slug: "zero-click-poisk-kak-poluchat-trafik-bez-perehodov-v-2025-godu" },
];

// === API call ===
function generate(prompt) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: MODEL,
      messages: [{ role: "user", content: prompt }],
      modalities: ["image", "text"],
      image_config: { aspect_ratio: "16:9" },
    });

    const req = https.request({
      hostname: "openrouter.ai", path: "/api/v1/chat/completions", method: "POST",
      headers: { "Authorization": `Bearer ${API_KEY}`, "Content-Type": "application/json" },
      timeout: 120000,
    }, (res) => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}: ${data.slice(0,100)}`));
        try {
          const d = JSON.parse(data);
          const msg = d?.choices?.[0]?.message || {};
          let url = msg?.images?.[0]?.image_url?.url;
          if (!url && msg?.content_parts)
            for (const p of msg.content_parts)
              if (p?.type === "image_url") { url = p.image_url.url; break; }
          if (!url && typeof msg.content === "string" && msg.content.startsWith("data:image")) url = msg.content.trim();
          if (!url) return reject(new Error("No image in response"));
          resolve(url);
        } catch (e) { reject(e); }
      });
    });
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

function saveImage(url, filepath) {
  return new Promise((resolve, reject) => {
    if (url.startsWith("data:image")) {
      fs.writeFileSync(filepath, Buffer.from(url.split(",")[1], "base64"));
      return resolve();
    }
    https.get(url, { timeout: 30000 }, (r) => {
      const chunks = [];
      r.on("data", d => chunks.push(d));
      r.on("end", () => { fs.writeFileSync(filepath, Buffer.concat(chunks)); resolve(); });
    }).on("error", reject);
  });
}

async function main() {
  console.log(`=== Make All Perfect Preview Generator ===`);
  console.log(`Model: ${MODEL}`);
  console.log(`Total items: ${ITEMS.length}`);
  console.log();

  let ok = 0, fail = 0;

  for (let i = 0; i < ITEMS.length; i++) {
    const item = ITEMS[i];
    const accent = pickAccent(item.t);
    const prompt = buildPrompt(item.t, item.type, accent);
    const dest = item.type === "case"
      ? `public/images/cases/${item.slug}.webp`
      : `public/images/articles/${item.slug}.webp`;

    process.stdout.write(`[${i+1}/${ITEMS.length}] ${accent.padEnd(8)} ${item.t.slice(0,50)}... `);

    try {
      const url = await generate(prompt);
      const tmp = dest.replace(".webp", ".png");
      await saveImage(url, tmp);
      execSync(`convert "${tmp}" -quality 85 "${dest}"`);
      const size = fs.statSync(dest).size;
      const dims = execSync(`identify -format "%wx%h" "${tmp}" 2>/dev/null`).toString().trim();
      fs.unlinkSync(tmp);
      process.stdout.write(`${dims}  ${Math.round(size/1024)}KB ✅\n`);
      ok++;
    } catch (e) {
      process.stdout.write(`ERROR: ${e.message.slice(0,80)}\n`);
      fail++;
    }
  }

  console.log(`\n=== Done! ${ok} ✅  ${fail} ❌  ===`);
}

main().catch(console.error);
