export type ServiceLink = {
  title: string;
  href: string;
};

export type ServiceDirection = {
  code: string;
  title: string;
  subtitle: string;
  text: string;
  icon: "target" | "search" | "code" | "cart" | "star" | "mail" | "users" | "bars";
  href: string;
  services: ServiceLink[];
};

export const serviceDirections: ServiceDirection[] = [
  {
    code: "ADS",
    title: "ТРАФИК И ЗАЯВКИ",
    subtitle: "Контекстная и таргетированная реклама",
    text: "Приводим горячие заявки из Яндекс.Директ, Google Ads, VK и Telegram. Управляем ставками и бюджетом так, чтобы каждый рубль работал на ROMI, а не на «открутку».",
    icon: "target",
    href: "/services/traffic-and-leads",
    services: [
      { title: "Контекстная реклама", href: "/services/kontekstnaya-reklama" },
      { title: "Яндекс.Директ", href: "/services/yandex-direct" },
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Таргетированная реклама", href: "/services/targetirovannaya-reklama" },
      { title: "Реклама ВКонтакте", href: "/services/reklama-vkontakte" },
      { title: "Реклама на Avito", href: "/services/reklama-na-avito" },
      { title: "Telegram Ads", href: "/services/telegram-ads" },
    ],
  },
  {
    code: "SEO",
    title: "ОРГАНИЧЕСКИЙ РОСТ",
    subtitle: "SEO-продвижение в Яндексе, Google и AI-поиске",
    text: "Выводим сайт в топ и приводим трафик, который не исчезает после отключения рекламы. Органика работает на вас 24/7 — без оплаты за каждый клик.",
    icon: "search",
    href: "/services/seo",
    services: [
      { title: "SEO-продвижение в Яндекс", href: "/services/seo-prodvizhenie-v-poiskovoj-sisteme-yandeks" },
      { title: "SEO-продвижение в Google", href: "/services/seo-google" },
      { title: "Локальное SEO-продвижение", href: "/services/lokalnoe-seo" },
      { title: "Комплексный SEO-аудит сайта", href: "/services/kompleksnyj-seo-audit" },
    ],
  },
  {
    code: "WEB",
    title: "РАЗРАБОТКА",
    subtitle: "Создание и разработка сайтов под задачи бизнеса",
    text: "Проектируем сайты, которые продают и работают в связке с рекламой и SEO. Не просто дизайн — измеримый инструмент привлечения заявок.",
    icon: "code",
    href: "/services/web-development",
    services: [
      { title: "Создание сайтов на WordPress", href: "/services/sozdanie-sajtov-na-wordpress" },
      { title: "Создание сайтов на Tilda", href: "/services/sozdanie-sajtov-na-tilda" },
      { title: "Создание сайтов на ModX", href: "/services/sozdanie-sajtov-na-modx" },
      { title: "Разработка на React", href: "/services/react-development" },
      { title: "Яндекс Кит", href: "/services/yandex-kit" },
      { title: "Редизайн и доработка сайтов", href: "/services/redesign-i-dorabotka-sajtov" },
    ],
  },
  {
    code: "MP",
    title: "МАРКЕТПЛЕЙСЫ",
    subtitle: "Wildberries и Ozon: рост продаж системно",
    text: "Оптимизируем карточки, запускаем внутреннюю рекламу и приводим внешний трафик. Смотрим не на клики, а на заказы, выкупы и маржу.",
    icon: "cart",
    href: "/services/marketplaces",
    services: [
      { title: "Внутренняя реклама на маркетплейсах", href: "/services/vnutrennyaya-reklama-na-marketplejsah" },
      { title: "Внешняя реклама для Wildberries", href: "/services/vneshnyaya-reklama-wildberries" },
      { title: "Внешняя реклама для Ozon", href: "/services/vneshnyaya-reklama-ozon" },
      { title: "Создание и оптимизация карточек", href: "/services/optimizaciya-kartochek-marketplejsov" },
    ],
  },
  {
    code: "PR",
    title: "РЕПУТАЦИЯ",
    subtitle: "Репутация и PR: управляем тем, что о вас найдут",
    text: "Формируем доверие в поиске, СМИ и отзовиках. Когда клиент гуглит ваш бренд перед покупкой — он видит аргументы в вашу пользу.",
    icon: "star",
    href: "/services/reputation-pr",
    services: [
      { title: "Публикации в СМИ", href: "/services/publikacii-v-smi" },
      { title: "Онлайн-репутация ORM", href: "/services/orm" },
      { title: "Поисковый имидж SERM", href: "/services/serm" },
    ],
  },
  {
    code: "CRM",
    title: "УДЕРЖАНИЕ",
    subtitle: "Email, CRM и автоворонки: повторные продажи",
    text: "Превращаем разовых клиентов в постоянных. Email, CRM и автоворонки догревают базу и приносят выручку без затрат на новый трафик.",
    icon: "mail",
    href: "/services/crm-retention",
    services: [
      { title: "Email-маркетинг", href: "/services/email-marketing" },
      { title: "CRM-маркетинг", href: "/services/crm-marketing" },
      { title: "Автоматизации и чат-боты", href: "/services/avtomatizacii-i-chat-boty" },
    ],
  },
  {
    code: "SMM",
    title: "КОНТЕНТ И СОЦСЕТИ",
    subtitle: "SMM, контент и инфлюенсеры",
    text: "Строим узнаваемость бренда в соцсетях и на YouTube. Контент, блогеры и охваты — в одной системе, которая работает на заявки, а не на лайки.",
    icon: "users",
    href: "/services/smm-content",
    services: [
      { title: "SMM-продвижение", href: "/services/smm-prodvizhenie" },
      { title: "Инфлюенс-маркетинг", href: "/services/influence-marketing" },
      { title: "Посевы в соцсетях", href: "/services/posevy-v-socsetyah" },
      { title: "Имиджевые видео", href: "/services/imidzhievye-video" },
    ],
  },
  {
    code: "ANL",
    title: "АНАЛИТИКА И СТРАТЕГИЯ",
    subtitle: "Аудит, консалтинг, ИИ-агенты и DOOH",
    text: "Находим точки роста в вашем маркетинге и показываем полную картину в цифрах. Аудит, стратегия, ИИ-инструменты и наружная цифровая реклама.",
    icon: "bars",
    href: "/services/analytics-strategy",
    services: [
      { title: "Маркетинговый аудит", href: "/services/marketingovyj-audit" },
      { title: "Маркетинговый консалтинг", href: "/services/marketingovyj-konsalting" },
      { title: "Создание ИИ-агентов", href: "/services/sozdanie-ii-agentov" },
      { title: "DOOH — цифровая наружная реклама", href: "/services/naruzhnaya-cifrovaya-reklama-dooh" },
    ],
  },
];

export const taskCards = [
  { title: "Нужны заявки и продажи", text: "Подберём связку трафика, посадочной страницы и аналитики, чтобы видеть не только обращения, но и их качество." },
  { title: "Нужно расти в поиске", text: "Покажем, какие страницы, запросы, технические ошибки и контент мешают SEO-росту." },
  { title: "Нужен сайт или доработка", text: "Спроектируем страницу, которая объясняет продукт, снимает сомнения и помогает рекламе окупаться." },
  { title: "Нужно удерживать клиентов", text: "Соберём CRM, email, ботов и сценарии повторных продаж вокруг реального пути клиента." },
];

export const decisionSteps = [
  { mark: "01", title: "Фиксируем бизнес-цель", text: "Не начинаем с инструмента. Сначала определяем, что важнее: заявки, продажи, органика, повторные покупки, репутация или узнаваемость." },
  { mark: "02", title: "Находим точку потери", text: "Смотрим сайт, трафик, аналитику, контент, CRM и выдачу по бренду. Так становится понятно, где маркетинг теряет деньги." },
  { mark: "03", title: "Собираем приоритеты", text: "Отделяем быстрые действия от системной работы и показываем, какие шаги дадут эффект первыми." },
  { mark: "04", title: "Делаем дорожную карту", text: "Формируем понятный план: что запускаем, что дорабатываем, что измеряем и какие специалисты нужны на каждом этапе." },
];

export const workFormats = [
  { title: "Отдельная услуга", text: "Когда задача понятна: SEO-аудит, Яндекс.Директ, сайт, CRM или email-рассылки. Быстрый старт, фиксированный объём.", link: "Выбрать услугу" },
  { title: "Связка направлений", text: "Когда нужен не один канал, а система: сайт + трафик + аналитика + контент + CRM в едином контуре. Каналы усиливают друг друга.", link: "Собрать связку" },
  { title: "Команда по подписке", text: "Маркетинговый отдел без найма в штат: стратегия, специалисты, производство и контроль результата за фиксированную плату в месяц.", link: "Обсудить формат" },
];

export const servicesFaq = [
  {
    question: "Можно ли заказать только одну услугу?",
    answer: "Да. Можно начать с одного направления: рекламы, SEO, сайта, аудита, CRM, SMM, репутации или другой конкретной задачи.",
  },
  {
    question: "Помогаете ли вы выбрать, что нужно бизнесу в первую очередь?",
    answer: "Да. Если задача сформулирована не до конца, мы сначала разбираем бизнес, текущий маркетинг, сайт, аналитику и точки потерь, а затем предлагаем приоритетный план.",
  },
  {
    question: "Вы работаете комплексно или только по отдельным услугам?",
    answer: "Оба формата возможны. Иногда бизнесу достаточно одной услуги, а иногда эффективнее собрать связку: сайт, трафик, SEO, аналитику, CRM и контент.",
  },
  {
    question: "Можно ли подключить несколько направлений постепенно?",
    answer: "Да. Часто мы начинаем с самого критичного участка, а затем расширяем работу: добавляем аналитику, CRM, SEO, контент или дополнительные рекламные каналы.",
  },
  {
    question: "Сколько стоит работа?",
    answer: "Базовая стоимость услуг — от 50 000 ₽. Точная стоимость зависит от направления, объёма работ, конкуренции, задач и количества подключаемых специалистов.",
  },
  {
    question: "Когда будут первые результаты?",
    answer: "Зависит от направления: контекстная и таргетированная реклама дают заявки в первые недели после запуска, SEO — более долгая работа с ростом видимости на горизонте 3–6 месяцев. На старте мы честно обозначаем реалистичные сроки по каждому каналу.",
  },
];
