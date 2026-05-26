# Шаг 4: Сборка страницы «Настройка рекламы ВКонтакте»

## Источники
1. Финальные тексты: `/home/openclaw/.openclaw/workspace/map2/VK_STEP2_RESULT.md`
2. ТЗ на дизайн: `/home/openclaw/.openclaw/workspace/map2/VK_STEP3_TZ.md`
3. Документация главной: `/home/openclaw/.openclaw/workspace/map2/DEPS_MAIN_PAGE.md`
4. Пример готовой страницы услуги: `/home/openclaw/.openclaw/workspace/map2/src/app/services/targetirovannaya-reklama/page.tsx`
5. Пример контент-файла: `/home/openclaw/.openclaw/workspace/map2/src/content/services/targetedAdvertising.ts`
6. Пример CSS: `/home/openclaw/.openclaw/workspace/map2/src/app/services/targetirovannaya-reklama/page.module.css`
7. Пример компонента уникальных секций: `/home/openclaw/.openclaw/workspace/map2/src/components/sections/TargetedAdvertisingUniqueSections.tsx`

## Задача
Собери готовую страницу «Настройка рекламы ВКонтакте» в проекте map2, используя утверждённую структуру и тексты.

### Структура страницы (13 блоков):
1. Header (готовый компонент)
2. **Hero Section** (новая уникальная секция)
3. **Services Section** (новая, 6 карточек)
4. **Advantages Section** (новая, 4 карточки)
5. **Process Section** (новая, 5 шагов)
6. **Opportunities Section** (новая, 4 блока)
7. **Pricing Section** (новая, 3 тарифа — без цен, только структура)
8. Cases Section (готовый: CasesSection)
9. Reviews Section (готовый: HomeReviewsSection — используй атрибут `title="Отзывы"`)
10. Industries Section (готовый: HomeIndustriesSection)
11. **FAQ Section** (новая, 6 вопросов-ответов)
12. Final CTA Section (готовый: FinalCtaSection)
13. Footer (готовый)

### Технические правила:
- Next.js 16, TypeScript, CSS Modules
- Шрифт Onest через next/font
- Server Components по умолчанию
- Container: импортировать как `{ Container }` из `@/components/ui/Container/Container`
- Shared grid: `import gridStyles from '@/styles/grid.module.css'`
- CSS-переменные: --page-px, --section-py, --grid-gap, --card-px/py, --line, --ink, --muted
- Брейкпоинты: 768px, 1280px
- Container max-width: 1280px
- Не добавлять max-width, padding числами внутри секций, произвольные wrapper/inner/layout
- Изображения через `next/image` или <Image>, путь: `/images/services/reklama-vkontakte/`

### Файлы для создания:

**A. Контент-файл:** `src/content/services/vkAds.ts`
- Тип: экспорт default объекта с полями как в targetedAdvertising.ts
- Поля: slug, meta (title, description), hero, services, advantages, process, opportunities, pricing, faq
- Все тексты из VK_STEP2_RESULT.md

**B. Компонент уникальных секций:** `src/components/sections/VkAdsUniqueSections.tsx`
- 6 новых секций: Hero, Services, Advantages, Process, Opportunities, Pricing, FAQ
- Каждая секция — отдельная функция-компонент с export
- HeroSection: фон через CSS, градиент или линейный, текст слева
- ServicesSection: сетка 3×2 карточек с иконками (если нет картинок — используй CSS-иконки)
- AdvantagesSection: сетка 4×1, цифровые карточки
- ProcessSection: 5 шагов, timeline layout
- OpportunitiesSection: 4 карточки
- PricingSection: 3 тарифа
- FaqSection: details/summary аккордеон
- Все используют Container, gridStyles

**C. Страница:** `src/app/services/reklama-vkontakte/page.tsx`
- Импортирует весь контент из content-файла
- Рендерит Hero, импортирует и рендерит все секции из VkAdsUniqueSections
- Подключает готовые компоненты: CasesSection, ReviewsIndexSection (HomeReviewsSection), HomeIndustriesSection, FinalCtaSection, HomeBlogSection
- метаданные export

**D. CSS:** `src/app/services/reklama-vkontakte/page.module.css`
- Стили для всех новых секций

### Адаптация текстов из VK_STEP2_RESULT.md:
- URL slug: `/reklama-vkontakte`
- Title: Настройка рекламы ВКонтакте под ключ — Услуги таргета и ведения в VK | Агентство Make All Perfect
- Description: Профессиональные услуги по настройке и ведению рекламы ВКонтакте для бизнеса. Приводим клиентов, а не просто клики. Рассчитаем стоимость и рентабельность!
- H1: Реклама ВКонтакте, которая приводит клиентов
- H2 для услуг: Не просто «настройка», а готовая система лидогенерации из VK
- H2 преимуществ: Ваш бизнес-результат — наш главный KPI
- H2 процесса: Прозрачный процесс в 5 шагов — от заявки до первых клиентов
- H2 возможностей: Точно в цель: для каких задач вашего бизнеса подходит реклама в VK
- H2 тарифов: Тарифы на ведение рекламы
- H2 FAQ: Ответы на вопросы

Сохрани все файлы в существующем проекте.
