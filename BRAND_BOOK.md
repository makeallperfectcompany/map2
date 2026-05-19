# BRAND_BOOK.md

# Make All Perfect — Digital Brand Book

Этот документ фиксирует визуальную систему сайта Make All Perfect на основе первых двух утверждённых блоков:

1. HeroSection  
2. ServicesSection

Документ должен лежать в корне проекта рядом с `PROJECT_REGULATION.md` и использоваться OpenClove/OpenClaw при создании всех следующих блоков и страниц.

---

## 1. Суть бренда

Make All Perfect — маркетинговое агентство полного цикла.

Образ бренда:

- премиальный;
- технологичный;
- спокойный;
- уверенный;
- системный;
- B2B-oriented;
- без визуального шума;
- без дешёвых маркетинговых клише.

Главное визуальное ощущение:

```text
Apple-inspired premium minimalism + luxury B2B digital agency
```

Сайт должен выглядеть дорого, чисто и уверенно, но не холодно и не перегруженно.

---

## 2. Общий визуальный стиль

Основной стиль:

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

Что важно:

- много воздуха;
- крупная типографика;
- мягкие светлые фоны;
- аккуратный glassmorphism;
- деликатные тени;
- чистые карточки;
- тёмные premium-секции для контраста;
- минимум декоративных элементов;
- каждый визуальный объект должен усиливать смысл.

Что запрещено:

- дешёвые stock-photo;
- случайные иконки из разных наборов;
- кислотные цвета;
- неон;
- glitch;
- тяжёлый sci-fi;
- мультяшность;
- перегруз градиентами;
- яркие декоративные паттерны без смысла;
- визуальный шум ради “вау”.

---

## 3. Цветовая система

### 3.1. Core colors

```css
--map-white: #FFFFFF;
--map-off-white: #F5F6F8;
--map-apple-cloud: #F5F5F7;

--map-ink: #0E0F12;
--map-graphite: #1A1C20;
--map-deep: #111419;

--map-muted: #6B6F76;
--map-muted-2: #4C5057;
--map-smoke: #86868B;
```

Использование:

- `#FFFFFF` — основной фон;
- `#F5F6F8 / #F5F5F7` — мягкие секционные фоны и карточки;
- `#0E0F12` — основной цвет заголовков;
- `#1A1C20 / #111419` — тёмные блоки, кнопки, premium sections;
- `#6B6F76` — основной цвет вторичного текста;
- `#4C5057` — текст в карточках/булитах;
- `#86868B` — muted-акценты и подписи.

---

### 3.2. Dark section palette

Используется для ServicesSection и будущих контрастных блоков.

```css
--map-dark-start: #111419;
--map-dark-mid: #1A1D23;
--map-dark-end: #0E1014;

--map-dark-card: rgba(255, 255, 255, 0.06);
--map-dark-line: rgba(255, 255, 255, 0.08);
--map-dark-text: #F5F5F7;
--map-dark-muted: rgba(245, 245, 247, 0.64);
```

Градиент тёмной секции:

```css
background:
  radial-gradient(circle at 78% 10%, rgba(122, 167, 199, 0.14), transparent 34%),
  linear-gradient(135deg, #111419 0%, #1A1D23 52%, #0E1014 100%);
```

---

### 3.3. Accent colors

Акценты должны быть сдержанными.

```css
--map-blue: #7FB7FF;
--map-blue-deep-1: #1A3A6E;
--map-blue-deep-2: #081F3F;
--map-silver-blue: rgba(122, 167, 199, 0.14);
```

Использование:

- `#7FB7FF` — акценты в тёмных секциях, ссылки, маленькие световые точки;
- `#1A3A6E → #081F3F` — premium gradient для featured-карточек;
- `rgba(122,167,199,0.14)` — очень мягкий radial glow.

Не использовать синий слишком часто. Он должен быть акцентом, а не главным цветом сайта.

---

### 3.4. Lines / borders

```css
--map-line-light: rgba(15, 16, 20, 0.08);
--map-line-soft: rgba(15, 16, 20, 0.055);
--map-line-dark: rgba(255, 255, 255, 0.08);
```

---

### 3.5. Glass backgrounds

```css
--map-glass-white: rgba(255, 255, 255, 0.72);
--map-glass-light: rgba(255, 255, 255, 0.48);
--map-glass-strong: rgba(255, 255, 255, 0.78);
```

Glass должен быть мягким и чистым, без грязной мутности.

---

## 4. Типографика

### 4.1. Основной шрифт

Основной шрифт сайта:

```css
font-family: Onest, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Если Onest не подключён, использовать Inter/system fallback.

Рекомендация для проекта:

```css
@import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;450;500;600;650;700;800;850&display=swap');
```

Если используется Next.js, лучше подключить через `next/font/google`.

---

### 4.2. Моноширинный шрифт

Для маленьких label/price/meta:

```css
font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
```

Использовать только точечно:
- маленькие labels;
- price;
- технические подписи;
- meta-блоки.

---

### 4.3. Заголовки

Desktop H1:

```css
font-size: clamp(60px, 5.35vw, 86px);
line-height: 0.98;
letter-spacing: -0.065em;
font-weight: 850;
```

Desktop H2:

```css
font-size: 56px;
line-height: 1.05;
letter-spacing: -0.05em;
font-weight: 760;
```

Mobile H1:

```css
font-size: 36px - 38px;
line-height: 1.075;
letter-spacing: -0.045em;
font-weight: 850;
```

Mobile H2:

```css
font-size: 32px - 34px;
line-height: 1.08;
letter-spacing: -0.045em;
font-weight: 760;
```

---

### 4.4. Основной текст

Lead text desktop:

```css
font-size: 19px - 21px;
line-height: 1.55;
letter-spacing: -0.02em;
font-weight: 400 - 450;
color: #6B6F76;
```

Lead text mobile:

```css
font-size: 16px;
line-height: 1.55;
letter-spacing: -0.015em;
```

---

## 5. Layout system

### 5.1. Контейнеры

Hero:

```css
--container: 1456px;
```

Обычные секции:

```css
max-width: 1232px;
padding: 0 32px;
```

Mobile:

```css
padding: 0 16px - 20px;
```

---

### 5.2. Радиусы

```css
--radius-header: 26px;
--radius-section: 32px;
--radius-card: 24px;
--radius-button: 18px - 20px;
--radius-pill: 999px;
```

Mobile:

```css
section radius: 24px - 28px;
card radius: 20px - 22px;
button radius: 19px - 20px;
```

---

### 5.3. Отступы секций

Desktop:

```css
padding: 100px - 140px 0;
```

ServicesSection:

```css
padding: 120px 0;
margin: 40px 24px;
```

Mobile:

```css
padding: 58px - 76px 0;
margin: 22px 10px;
```

---

## 6. Buttons

### 6.1. Primary button

Для светлых секций:

```css
background: #161A1F;
color: #FFFFFF;
box-shadow: 0 18px 42px rgba(15,16,20,0.14);
```

Для тёмных секций:

```css
background: #FFFFFF;
color: #111419;
box-shadow: 0 16px 36px rgba(0,0,0,0.18);
```

---

### 6.2. Secondary button

```css
background: rgba(255,255,255,0.74);
border: 1px solid rgba(15,16,20,0.1);
color: #13161A;
backdrop-filter: blur(14px) saturate(150%);
```

---

### 6.3. Mobile buttons

```css
width: 100%;
min-height: 58px - 60px;
border-radius: 19px - 20px;
padding: 0 24px;
font-size: 17px;
```

---

## 7. Cards

### 7.1. Light glass cards

```css
background: rgba(255,255,255,0.72);
border: 1px solid rgba(15,16,20,0.07);
box-shadow:
  0 12px 30px rgba(15,16,20,0.055),
  inset 0 1px 0 rgba(255,255,255,0.9);
backdrop-filter: blur(16px) saturate(155%);
```

---

### 7.2. Dark cards

```css
background: rgba(255,255,255,0.06);
border: 1px solid rgba(255,255,255,0.08);
box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
```

---

### 7.3. Featured dark card

```css
background:
  radial-gradient(circle at 88% 12%, rgba(127,183,255,0.20), transparent 36%),
  linear-gradient(135deg, #1A3A6E 0%, #081F3F 100%);
```

---

## 8. Иконки

Есть два допустимых типа иконок:

### 8.1. SVG line icons

Используются, когда нужен минимальный вес.

```css
stroke: currentColor;
stroke-width: 1.8;
fill: none;
stroke-linecap: round;
stroke-linejoin: round;
```

### 8.2. 3D glass icons

Используются только если:
- файл реально прозрачный;
- нет белого/шахматного фона;
- вес оптимизирован;
- иконки сделаны в едином стиле;
- они не ломают premium-впечатление.

Для маленьких иконок предпочтительнее SVG.  
Для декоративных карточек допустимы WebP/PNG glass icons.

Запрещено:
- иконки с белыми квадратными подложками;
- иконки из разных наборов;
- PNG/WebP, если фон запечён;
- слишком тяжёлые иконки по 200–500 KB каждая.

---

## 9. Изображения и ассеты

Форматы:

```text
WebP — для декоративных изображений и background
SVG — для line icons
PNG — только когда нужна настоящая прозрачность и WebP не подходит
ICO/PNG — для favicon pack
```

Целевые веса:

```text
Hero background: 50–150 KB
Mobile visual block: 20–80 KB
Small icon SVG: 1–5 KB
3D glass icon optimized: желательно до 20–60 KB
Header logo: 5–40 KB
```

---

## 10. HeroSection — фиксированные правила

Hero уже выбран как основной первый экран.

Desktop:
- крупный H1 слева;
- background glass logo справа;
- 2 CTA;
- 4 булита в ряд;
- иконки без белых квадратов.

Mobile:
- текст по центру;
- кнопки в столбик;
- visual-card после кнопок;
- булиты внутри visual-card поверх background;
- 2×2.

---

## 11. ServicesSection — фиксированные правила

ServicesSection — второй блок.

Стиль:
- тёмный premium-блок;
- border-radius 32px;
- три основные карточки услуг;
- первая карточка featured;
- две другие dark cards;
- нижняя rail-строка с направлениями.

Контент текущего блока:

```text
H2:
Меньше хаоса.
Больше управляемого роста.

Lead:
Подключаем нужные направления под задачу бизнеса: от стратегии и сайта до рекламных связок, контента, аналитики и масштабирования.

Главные карточки:
1. Маркетинг полного цикла — от стратегии до продаж
2. Performance-реклама — с контролем ROMI
3. SEO и разработка — с технической базой

Rail:
1. Дизайн и упаковка
2. Контент и SMM
3. Маркетплейсы
4. CRM и аналитика
```

Адаптив:
- desktop: 3 карточки в ряд;
- tablet/mobile: карточки в колонку;
- rail: 4 / 2 / 1.

---

## 12. Адаптив

Каждый блок считается готовым только после проверки:

```text
1440px
1280px
1024px
768px
430px
390px
375px
```

Проверять:
- нет горизонтального скролла;
- текст не вылезает;
- кнопки не ломаются;
- карточки не слипаются;
- mobile-композиция выглядит как отдельный продуманный дизайн.

---

## 13. Общие запреты

OpenClove/OpenClaw не должен:

- менять стиль без отдельного указания;
- заменять ассеты своими;
- генерировать новые иконки вместо переданных;
- использовать старые ассеты с фоном;
- менять порядок секций;
- смешивать разные визуальные стили;
- использовать случайные компоненты из шаблонов;
- делать “дизайн ради дизайна”.

---

## 14. Правило для следующих блоков

Каждый новый блок должен соответствовать уже утверждённым HeroSection и ServicesSection.

Если новый блок светлый — ориентироваться на HeroSection:
- белый/off-white;
- glass;
- graphite;
- мягкие тени.

Если новый блок тёмный — ориентироваться на ServicesSection:
- deep graphite;
- premium cards;
- subtle blue accents;
- restrained contrast.

---

## 15. Главный критерий

Сайт должен ощущаться как:

```text
дорогой B2B-сайт маркетингового агентства полного цикла,
с Apple-inspired визуальной чистотой,
технологичной уверенностью
и понятной коммерческой структурой.
```
