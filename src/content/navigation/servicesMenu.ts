export interface ServiceMenuItem {
  title: string;
  href: string;
}

export interface ServiceMenuGroup {
  code: string;
  title: string;
  href: string;
  icon: string;
  items: ServiceMenuItem[];
}

export const servicesMenu: ServiceMenuGroup[] = [
  {
    code: "ADS",
    title: "Трафик и заявки",
    href: "/services/kontekstnaya-reklama",
    icon: "target",
    items: [
      { title: "Контекстная реклама", href: "/services/kontekstnaya-reklama" },
      { title: "Яндекс.Директ", href: "/services/yandex-direct" },
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Таргетированная реклама", href: "/services/targetirovannaya-reklama" },
      { title: "Реклама ВКонтакте", href: "/services/reklama-vkontakte" },
      { title: "Реклама на Avito", href: "/services/prodvizhenie-na-avito" },
      { title: "Telegram Ads", href: "/services/telegram-ads" },
    ],
  },
  {
    code: "SEO",
    title: "SEO и органический рост",
    href: "/services/seo-prodvizhenie-v-poiskovoj-sisteme-yandeks",
    icon: "search",
    items: [
      { title: "SEO-продвижение в Яндекс", href: "/services/seo-prodvizhenie-v-poiskovoj-sisteme-yandeks" },
      { title: "SEO-продвижение в Google", href: "/services/seo-prodvizhenie-v-poiskovoj-sisteme-google" },
      { title: "Локальное SEO-продвижение", href: "/services/lokalnoe-seo" },
      { title: "Комплексный SEO-аудит сайта", href: "/services/kompleksnyj-seo-audit-sajta" },
    ],
  },
  {
    code: "WEB",
    title: "Сайты и разработка",
    href: "/services/sozdanie-i-razrabotka-saytov-wordpress",
    icon: "code",
    items: [
      { title: "Создание сайтов на WordPress", href: "/services/sozdanie-i-razrabotka-saytov-wordpress" },
      { title: "Создание сайтов на Tilda", href: "/services/sozdanie-i-razrabotka-saytov-tilda" },
      { title: "Создание сайтов на ModX", href: "/services/sozdanie-i-razrabotka-saytov-modx" },
      { title: "Разработка на React", href: "/services/sozdanie-i-razrabotka-saytov-na-react" },
      { title: "Яндекс Кит", href: "/services/sozdanie-i-razrabotka-internet-magazina-na-yandeks-kit-pod-klyuch" },
      { title: "Редизайн и доработка сайтов", href: "/services/redizayn-i-dorabotka-saytov" },
    ],
  },
  {
    code: "MP",
    title: "Маркетплейсы",
    href: "/services/vneshnyaya-reklama-wildberries",
    icon: "cart",
    items: [
      { title: "Внутренняя реклама на маркетплейсах", href: "/services/marketplace-internal-ads" },
      { title: "Внешняя реклама для Wildberries", href: "/services/vneshnyaya-reklama-wildberries" },
      { title: "Внешняя реклама для Ozon", href: "/services/vneshnyaya-reklama-dlya-ozon" },
      { title: "Создание и оптимизация карточек", href: "/services/sozdanie-i-optimizaciya-kartochek-marketplejsov" },
    ],
  },
  {
    code: "PR",
    title: "Репутация и PR",
    href: "/services/serm",
    icon: "star",
    items: [
      { title: "Публикации в СМИ", href: "/services/publikatsii-v-smi" },
      { title: "Онлайн-репутация (ORM)", href: "/services/orm" },
      { title: "Поисковый имидж (SERM)", href: "/services/serm" },
    ],
  },
  {
    code: "CRM",
    title: "CRM и удержание",
    href: "/services/email-marketing",
    icon: "mail",
    items: [
      { title: "Email-маркетинг", href: "/services/email-marketing" },
      { title: "CRM-маркетинг", href: "/services/crm-marketing" },
      { title: "Автоматизации и чат-боты", href: "/services/avtomatizacii-i-chat-boty" },
    ],
  },
  {
    code: "SMM",
    title: "SMM и контент",
    href: "/services/smm",
    icon: "users",
    items: [
      { title: "SMM-продвижение", href: "/services/smm" },
      { title: "Инфлюенс-маркетинг", href: "/services/influence-marketing" },
      { title: "Посевы в соцсетях", href: "/services/posevy-v-socsetyah" },
      { title: "Имиджевые видео", href: "/services/imidzhevye-video" },
    ],
  },
  {
    code: "ANL",
    title: "Аналитика и стратегия",
    href: "/services/marketingovyj-audit",
    icon: "analytics",
    items: [
      { title: "Маркетинговый аудит", href: "/services/marketingovyj-audit" },
      { title: "Маркетинговый консалтинг", href: "/services/marketingovyj-konsalting" },
      { title: "Создание ИИ-агентов", href: "/services/sozdanie-ii-agentov" },
      { title: "Наружная цифровая реклама DOOH", href: "/services/naruzhnaya-cifrovaya-reklama" },
    ],
  },
];
