export type ReviewItem = {
  id: string;
  quote: string;
  author: string;
  role: string;
  category: string;
  featured?: boolean;
};

export const reviews: ReviewItem[] = [
  {
    id: "services-growth-system",
    quote:
      "Команда быстро разобралась в задаче и предложила не просто запуск рекламы, а понятную систему продвижения. Стало ясно, где терялись заявки и что нужно усиливать в первую очередь.",
    author: "Проект в сфере услуг",
    role: "Комплексное продвижение",
    category: "Услуги",
    featured: true,
  },
  {
    id: "ecommerce-analytics",
    quote:
      "Понравилось, что Make All Perfect смотрит шире одного канала. Они связали сайт, рекламу, контент и аналитику, поэтому решения стали понятнее, а результат — более управляемым.",
    author: "E-commerce проект",
    role: "Реклама, сайт и аналитика",
    category: "E-commerce",
    featured: true,
  },
  {
    id: "b2b-packaging",
    quote:
      "Мы пришли с запросом на трафик, но в процессе стало видно, что часть проблемы была в упаковке и посадочных страницах. После доработок заявки стали качественнее.",
    author: "B2B-компания",
    role: "Стратегия и performance",
    category: "B2B",
    featured: true,
  },
  {
    id: "marketplace-traffic",
    quote:
      "Ценим прозрачность: понятно, что делается, зачем это нужно и какие гипотезы тестируются. Без лишнего тумана и без попытки продать всё подряд.",
    author: "Бренд на маркетплейсе",
    role: "Внешний трафик и упаковка",
    category: "Маркетплейсы",
    featured: true,
  },
  {
    id: "site-redesign",
    quote:
      "После аудита стало понятно, что проблема не только в трафике, а в структуре сайта и доверии на посадочных страницах. Такой взгляд сильно помог команде.",
    author: "Компания с длинным циклом сделки",
    role: "Сайт, аналитика и реклама",
    category: "Сайт",
    featured: true,
  },
  {
    id: "crm-retention",
    quote:
      "Нам помогли собрать понятную связку: заявки, CRM, повторные касания и отчётность. Стало проще видеть, какие действия реально влияют на продажи.",
    author: "Онлайн-проект",
    role: "CRM и автоворонки",
    category: "CRM",
    featured: true,
  },
];

export const featuredReviews = reviews.filter((review) => review.featured);
