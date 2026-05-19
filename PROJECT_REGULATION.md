# PROJECT_REGULATION.md

# Make All Perfect Website — Master Project Regulation

Этот файл — главный регламент проекта сайта Make All Perfect.  
Он должен лежать в корне GitHub-репозитория и использоваться OpenClove/OpenClaw при любой работе с проектом.

Главный принцип: сайт собирается поэтапно, блок за блоком, с единой структурой, единым визуальным стилем, обязательным адаптивом и без хаотичных правок.

---

## 0. Роль OpenClove / OpenClaw

OpenClove работает как технический интегратор и разработчик.

Его задача:
- аккуратно интегрировать готовые блоки;
- соблюдать структуру проекта;
- не переосмысливать дизайн без отдельного указания;
- не менять визуальную концепцию самовольно;
- проверять адаптив и Vercel build;
- давать отчёт после каждой правки.

OpenClove не должен заменять готовый дизайн на шаблонный.

---

## 1. Стек проекта

Проект ведётся как современный сайт на Next.js.

Базовый стек:

```text
Next.js
React
TypeScript желательно, если проект уже на TS
CSS Modules или аккуратный globals.css
GitHub
Vercel
```

Если проект ещё не полностью переведён на Next.js, всё равно целевая структура должна постепенно приводиться к Next.js-компонентам.

---

## 2. Главная структура проекта

Рекомендуемая структура:

```text
public/
  assets/
    home/
      hero/
      services/
      cases/
      process/
      benefits/
      cta/
    shared/
      logo/
      icons/

src/
  app/
    page.tsx
    layout.tsx
    globals.css

  components/
    layout/
      Header.tsx
      Footer.tsx

    sections/
      HeroSection.tsx
      ServicesSection.tsx
      CasesSection.tsx
      ProcessSection.tsx
      BenefitsSection.tsx
      CtaSection.tsx

    ui/
      Button.tsx
      Container.tsx
      SectionTitle.tsx
```

Если в проекте уже есть другая структура, можно адаптироваться под неё, но логика должна сохраняться:
- секции отдельно;
- layout отдельно;
- UI-компоненты отдельно;
- ассеты отдельно;
- никакого хаоса в корне.

---

## 3. Формат работы с новыми блоками

Каждый новый блок должен поставляться отдельным пакетом:

```text
block-XX-section-name/
  README.md
  integration.md
  SectionName.tsx
  section-name.module.css
  assets/
```

Если блок пока в HTML:

```text
block-XX-section-name/
  README.md
  integration.md
  block.html
  block.css
  assets/
```

В `integration.md` обязательно должно быть указано:
1. куда вставлять блок;
2. какие файлы добавить;
3. какие файлы изменить;
4. куда положить ассеты;
5. как импортировать компонент;
6. какие breakpoints проверить;
7. что нельзя менять;
8. что должно получиться после интеграции.

---

## 4. Визуальный стиль сайта

Сайт Make All Perfect должен сохранять единый стиль:

```text
Apple-inspired premium minimalism
Luxury B2B digital agency
Clean white / off-white background
Graphite typography
Generous whitespace
Glassmorphism
Subtle gradients
Soft shadows
High-end UI/UX
Calm confidence
```

Основные визуальные правила:
- много воздуха;
- крупная типографика;
- чистые светлые фоны;
- мягкие тени;
- аккуратные glass-эффекты;
- минимум визуального шума;
- никаких stock-photo;
- никаких дешёвых иконок;
- никаких случайных 3D-ассетов;
- никаких кислотных цветов;
- никаких neon/glitch/TikTok-эффектов.

---

## 5. Цветовая система

Базовые цвета:

```text
White: #FFFFFF
Off-white: #F5F6F8 / #F5F5F7
Ink / Graphite: #0E0F12
Deep Graphite: #1A1C20
Muted Gray: #6B6F76
Secondary Gray: #4C5057
Soft Line: rgba(15,16,20,0.08)
Glass White: rgba(255,255,255,0.55–0.78)
Subtle Silver / Blue Accent: использовать очень дозированно
```

Нельзя добавлять яркие акцентные цвета без отдельного согласования.

---

## 6. Типографика

Базовый шрифт проекта:

```text
Onest
fallback: system-ui, sans-serif
```

Правила:
- заголовки крупные, плотные, с отрицательным letter-spacing;
- текст спокойный, читаемый, графитовый;
- не использовать слишком много разных размеров;
- не делать текст мелким до потери читаемости;
- не использовать декоративные шрифты.

---

## 7. Порядок секций на главной странице

Базовый порядок главной страницы:

```text
1. Header
2. HeroSection
3. ServicesSection
4. CasesSection
5. ProcessSection
6. BenefitsSection / WhyUsSection
7. CtaSection
8. Footer
```

Если добавляется новый блок, он вставляется только в указанное место.  
OpenClove не должен самовольно менять порядок секций.

---

## 8. Header

Header должен быть:
- fixed или sticky glass-nav;
- светлый;
- с blur/backdrop-filter;
- с аккуратной тенью;
- с логотипом слева;
- с текстом `Make All Perfect` рядом с логотипом;
- с пунктами меню;
- с CTA или burger справа.

Текущий подход:
- логотип в header — лёгкий знак на прозрачном фоне;
- не использовать тяжёлый 3D-логотип в header;
- рядом с логотипом всегда текст `Make All Perfect`;
- logo asset должен быть лёгким: желательно 5–40 KB.

---

## 9. HeroSection — базовые правила

Hero — ключевой первый экран.

Desktop-версия должна сохранять:
- premium Apple-style;
- крупный H1;
- подзаголовок;
- 2 CTA-кнопки;
- светлый фон;
- glass header;
- мягкий декоративный 3D/background visual;
- аккуратные преимущества/булиты.

Текущий H1:

```text
Маркетинг полного цикла для брендов, которые хотят лидировать
```

Текущий подзаголовок:

```text
Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.
```

CTA:
```text
Обсудить проект
Смотреть подход
```

---

## 10. HeroSection — mobile-композиция

Mobile-версия hero **может отличаться от desktop-композиции**, если это улучшает UX и читаемость.

Для mobile допустимо:
- убирать верхний декоративный background-object;
- переносить визуал ниже CTA;
- использовать отдельный mobile logo visual block после кнопок;
- делать булиты сеткой 2×2;
- сокращать визуальную высоту декоративных элементов;
- упрощать композицию.

Текущий выбранный подход для mobile hero:

```text
1. Header
2. H1
3. Подзаголовок
4. CTA 1
5. CTA 2
6. Mobile logo visual block
7. 4 bullets/features в сетке 2×2
```

Для mobile visual block используется ассет:

```text
public/assets/home/hero/hero-mobile-logo-bg.webp
```

или для HTML-проекта:

```text
assets/home/hero/hero-mobile-logo-bg.webp
```

Этот блок должен быть:
- после кнопок;
- аккуратный;
- не огромный;
- с логотипом по центру;
- с большим количеством воздуха;
- без текста на картинке;
- в светлом premium-стиле.

---

## 11. Булиты / преимущества

Предпочтительный формат для hero — 4 булита.

Текущие 4 булита:

```text
1. Стратегия и рост
2. Дизайн и контент
3. Реклама и аналитика
4. SEO и разработка
```

Раскладка:
- desktop: 4 в ряд;
- tablet: 2×2;
- mobile: 2×2;
- если очень узкий экран ломается, допускается 1 колонка только на экстремально малых ширинах.

Иконки:
- предпочтительно inline SVG line icons;
- не использовать тяжёлые PNG/WebP для маленьких иконок;
- иконки размещать в glass-кружках или soft-glass карточках.

SVG style:

```css
stroke: #4B5563;
stroke-width: 1.8;
fill: none;
stroke-linecap: round;
stroke-linejoin: round;
```

---

## 12. Адаптив обязателен для каждого блока

Каждый блок должен сразу делаться в адаптиве.

Нельзя сначала собрать весь сайт только под desktop, а адаптив оставить “на потом”.

Блок не считается готовым, пока не проверен на:

```text
1440px+ — desktop
1280px — laptop
1024px — tablet landscape
768px — tablet portrait
430px — large mobile
390px — mobile
375px — small mobile
```

Для каждого блока нужно проверять:
- нет горизонтального скролла;
- текст не вылезает;
- кнопки не ломаются;
- изображения не перекрывают текст;
- секция не становится слишком высокой без смысла;
- mobile-композиция выглядит как отдельный продуманный дизайн, а не как просто сжатый desktop.

---

## 13. Responsive images

Изображения должны подключаться адаптивно.

Для hero/background использовать разные версии:

```text
hero-bg-desktop.webp
hero-bg-tablet.webp
hero-bg-mobile.webp
```

Пример:

```html
<picture class="hero-bg-wrap" aria-hidden="true">
  <source media="(max-width: 640px)" srcset="/assets/home/hero/hero-bg-mobile.webp">
  <source media="(max-width: 1024px)" srcset="/assets/home/hero/hero-bg-tablet.webp">
  <img class="hero-bg" src="/assets/home/hero/hero-bg-desktop.webp" alt="">
</picture>
```

Если на mobile используется отдельная композиция, можно не грузить desktop-background и вместо него использовать отдельный mobile visual asset.

---

## 14. Ассеты

Все изображения должны храниться отдельными файлами.

Нельзя:
- вставлять base64 в HTML/React;
- хранить тяжёлые изображения прямо в компоненте;
- использовать PNG там, где лучше WebP/SVG;
- складывать все ассеты в одну папку без структуры.

Правильная структура:

```text
public/assets/home/hero/
public/assets/home/services/
public/assets/home/cases/
public/assets/shared/logo/
public/assets/shared/icons/
```

Для HTML-проекта:

```text
assets/home/hero/
assets/home/services/
assets/shared/logo/
assets/shared/icons/
```

---

## 15. Оптимизация ассетов

Целевые ориентиры:

```text
Hero background: 50–150 KB
Mobile visual block: 20–80 KB
Header logo: 5–40 KB
Small decorative image: 5–50 KB
SVG icon: 1–5 KB
First screen total: ideally under 500 KB–1 MB
```

Важно:
- не пережимать hero background до грязных градиентов;
- premium-качество важнее экстремально малого веса;
- но тяжёлые PNG по 500KB–2MB недопустимы для маленьких элементов;
- для иконок использовать SVG;
- для декоративных иллюстраций — WebP;
- AVIF можно использовать только если это не ломает поддержку/качество.

---

## 16. Именование файлов

Использовать kebab-case.

Хорошо:

```text
hero-bg-desktop.webp
hero-mobile-logo-bg.webp
logo-header.webp
icon-strategy.svg
service-performance.webp
case-marketplace-growth.webp
```

Плохо:

```text
image1.png
final.png
final-final.png
new_logo_copy_2.webp
ChatGPT Image 19 мая.png
```

Если ассет приходит с плохим названием, OpenClove должен переименовать его перед добавлением в проект.

---

## 17. Компоненты и именование

Компоненты должны иметь понятные имена:

```text
HeroSection.tsx
ServicesSection.tsx
CasesSection.tsx
ProcessSection.tsx
BenefitsSection.tsx
CtaSection.tsx
Header.tsx
Footer.tsx
```

Не использовать:

```text
Block.tsx
Section1.tsx
NewComponent.tsx
Final.tsx
```

---

## 18. CSS-классы

Классы должны быть уникальными и не ломать другие секции.

Хорошо:

```css
.hero-section {}
.hero-inner {}
.hero-title {}
.services-section {}
.services-grid {}
.cases-card {}
```

Плохо:

```css
.section {}
.block {}
.title {}
.card {}
.text {}
```

Если используются CSS Modules, это предпочтительно для секций.

---

## 19. Кнопки

Кнопки должны быть:
- чистые;
- премиальные;
- с мягким hover;
- без дешёвых эффектов.

Primary:
- графитовый/чёрный фон;
- белый текст;
- мягкая тень.

Secondary:
- glass/white фон;
- тонкая граница;
- графитовый текст.

На mobile:
- кнопки могут идти в столбик;
- ширина 100%;
- высота примерно 58–64px;
- не должны быть слишком огромными.

---

## 20. Анимации

Разрешено:
- fade-up;
- subtle hover;
- smooth transform;
- light sheen;
- мягкий scale/translate.

Нельзя:
- glitch;
- резкий bounce;
- дешёвый zoom;
- TikTok-переходы;
- кислотные neon effects;
- перегруженный parallax.

Всегда учитывать:

```css
@media (prefers-reduced-motion: reduce)
```

---

## 21. SEO и доступность

Базовые правила:
- один H1 на странице;
- декоративные изображения получают `alt=""`;
- значимые изображения получают понятный `alt`;
- кнопки и ссылки должны быть читаемыми;
- nav должен иметь `aria-label`;
- burger должен иметь `aria-expanded`;
- структура заголовков должна быть логичной.

---

## 22. Микро-правки

Если задача — заменить одно слово, кнопку, ссылку или пункт меню, OpenClove должен работать в режиме MICRO EDIT MODE.

Правила MICRO EDIT MODE:
- изменить только указанное место;
- не рефакторить код;
- не менять дизайн;
- не оптимизировать ассеты;
- не трогать соседние блоки;
- не менять структуру проекта.

Пример:

```text
Заменить текст “Связаться” на “Обсудить проект”.
Больше ничего не менять.
```

---

## 23. Проверка перед commit

Перед commit обязательно проверить:
- проект собирается без ошибок;
- Vercel build проходит;
- нет битых путей к ассетам;
- нет горизонтального скролла;
- нет console errors;
- desktop не сломан;
- tablet не сломан;
- mobile не сломан;
- ассеты лежат в правильных папках;
- нет base64;
- новые стили не поломали старые блоки.

---

## 24. Отчёт после каждой задачи

После выполнения OpenClove должен прислать:

```text
1. Что изменено
2. Какие файлы добавлены
3. Какие файлы изменены
4. Куда положены ассеты
5. Ссылка на GitHub commit
6. Ссылка на Vercel preview
7. Какие размеры адаптива проверены
8. Что нужно проверить вручную
9. Если что-то не сделано 1 в 1 — почему
```

---

## 25. Как работать с локальными ТЗ

`PROJECT_REGULATION.md` — главный постоянный документ проекта.

Локальные ТЗ, например:

```text
OPENCLOVE_TZ_mobile_hero_logo_block.md
BLOCK_02_SERVICES_integration.md
```

используются только для конкретной задачи.

При конфликте:
1. если локальное ТЗ уточняет текущую задачу — следовать локальному ТЗ;
2. если локальное ТЗ ломает базовый стиль или структуру — сохранить правила `PROJECT_REGULATION.md` и сообщить о конфликте.

---

## 26. Текущий статус HeroSection

Для HeroSection уже принято:

- desktop остаётся premium hero с декоративным visual/background;
- header: лёгкий logo + `Make All Perfect`;
- иконки: SVG line icons в glass-кружках;
- mobile верх должен быть чище;
- mobile visual block с логотипом вставляется после CTA-кнопок;
- булиты: 4 штуки;
- mobile/tablet булиты: 2×2;
- ассет mobile visual: `hero-mobile-logo-bg.webp`.

---

## 27. Главная установка

Make All Perfect — это сайт маркетингового агентства полного цикла.

Он должен выглядеть как премиальный B2B-сайт, который вызывает доверие у:
- владельцев бизнеса;
- маркетинг-директоров;
- руководителей e-commerce;
- брендов, которым нужен рост.

Главный критерий: **дорого, чисто, уверенно, понятно, технологично, без визуального мусора**.
