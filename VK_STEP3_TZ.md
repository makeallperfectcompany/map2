
# ТЗ на дизайн и разработку: «Настройка рекламы ВКонтакте»

Этот документ описывает требования к визуальному оформлению, необходимым графическим ассетам и общей структуре страницы.

- **Стиль:** premium Apple-inspired digital minimalism.
- **Шрифт:** Onest.
- **Фон:** Чистый, светлый (преимущественно #F5F5F7).
- **Акцентный цвет:** Синий #0071E3.
- **Брейкпоинты:** 768px, 1280px.
- **Контейнер:** max-width 1280px.
- **Переменные CSS:** `--page-px`, `--section-py`, `--grid-gap`, `--line`.

---

## A. Общая композиция и карта секций

Страница состоит из 13 блоков, часть из которых — новые, часть — существующие компоненты.

1.  **Header (Готовый):** Стандартный хидер сайта. Подключается как есть.
2.  **Hero Section (Новый):** Первый экран с H1/подзаголовком/CTA. Фон — широкоформатное изображение с акцентом справа и пустым пространством для текста слева.
3.  **Services Section (Новый):** Заголовок H2 с подзаголовком и сеткой из 6 карточек. Каждая карточка должна содержать минималистичную иконку.
4.  **Advantages Section (Новый):** Заголовок H2 и сетка из 4-х карточек с преимуществами. Блок должен быть лаконичным, без дополнительных изображений, фокус на типографике.
5.  **Process Section (Новый):** Заголовок H2 и инфографика, иллюстрирующая 5 шагов работы (минималистичный timeline).
6.  **Opportunities Section (Новый):** Заголовок H2 и 4 блока-карточки, каждый с тематической иконкой, описывающие решаемые бизнес-задачи.
7.  **Pricing Section (Новый):** Три карточки с тарифами. Дизайн должен быть чистым, с четким разделением информации.
8.  **Cases Section (Готовый):** Подключение существующего компонента с кейсами.
9.  **Reviews Section (Готовый):** Подключение существующего компонента с отзывами.
10. **Industries Section (Готовый):** Подключение существующего компонента с отраслями.
11. **FAQ Section (Новый):** Классический аккордеон с вопросами и ответами.
12. **Final CTA Section (Готовый):** Подключение стандартного финального блока призыва к действию.
13. **Footer (Готовый):** Стандартный футер сайта.

---

## B. Какие изображения нужны

1.  **Hero-фон (1 шт.):** Широкий фон для первого экрана (1920×1080). Слева — чистое пространство для текста. Справа — абстрактная 3D-композиция, символизирующая аналитику и рекламу VK (графики, диаграммы).
2.  **Иконки для услуг (6 шт.):** Минималистичные иконки в едином стиле для 6 карточек в секции Services.
3.  **Визуал для процесса (1 шт.):** Схематичная инфографика (timeline), иллюстрирующая 5 этапов работы.
4.  **Иконки для возможностей (4 шт.):** Минималистичные иконки в том же стиле для 4-х блоков в секции Opportunities.

---

## C. Таблица визуалов

| # | Название | Блок | Роль | Размер | Имя файла | Путь |
|---|---|---|---|---|---|---|
| 1 | Hero Background | Hero Section | Фон секции | 1920x1080px | `vk_hero_bg.jpg` | `/public/images/pages/vk-ads/` |
| 2 | Services Icons Set | Services Section | Иконки для карточек | 512x512px (каждая) или спрайт | `services_icons.svg` | `/public/images/pages/vk-ads/icons/` |
| 3 | Process Timeline | Process Section | Инфографика | ~1280x400px | `process_timeline.svg` | `/public/images/pages/vk-ads/` |
| 4 | Opportunities Icons | Opportunities Section | Иконки для блоков | 512x512px (каждая) или спрайт | `opportunities_icons.svg` | `/public/images/pages/vk-ads/icons/` |

---

## D. Промты для генерации изображений

### 1. Hero Background

> `A wide 16:9 aspect ratio, ultra-high resolution, premium digital art background. The style is inspired by Apple's marketing visuals: clean, minimalist, and sophisticated. The left two-thirds of the image is a clean, empty, light gray (#F5F5F7) studio background with subtle, soft ambient occlusion shadows. The right one-third features a beautiful, abstract 3D glassmorphism sculpture. The sculpture is a dynamic composition of floating translucent charts, glowing blue analytical graphs (#0071E3), and faint, stylized UI elements resembling a dashboard. The scene is brightly lit with diffused, soft light, creating a feeling of clarity, precision, and high-tech elegance. No text, no logos, no clutter. Shot with a macro lens, shallow depth of field, focused on the 3D sculpture. --ar 16:9 --style raw --v 6.0`

### 2. Иконки Услуг и Возможностей (единый сет, 10 шт.)

> `A set of 10 ultra-minimalist icons for a premium digital service, presented on a grid. Style: Apple Human Interface Guidelines meets Pictogram. Each icon uses a single, thin, consistent line weight. Colors: a simple duotone palette of dark gray (#1D1D1F) on an off-white background (#F5F5F7), with a single, small accent of vibrant blue (#0071E3) on each icon. The icons should be symbolic and immediately understandable. The set includes: 1. Strategy (magnifying glass over a bar chart). 2. Targeting (a crosshair with a person icon in the center). 3. Ad Creatives (a lightbulb icon combined with a paintbrush). 4. Launch (a simple rocket ship). 5. Budget Optimization (a stack of coins with a rising arrow). 6. Business Reports (a document icon with a pie chart inside). 7. Lead Flow (multiple arrows flowing into a funnel). 8. E-commerce Sales (a shopping cart with a tag). 9. Brand Awareness (an eye inside a broadcast symbol). 10. Community Growth (a group of 3 simplified user icons with a plus sign). All icons are perfectly aligned, clean, sharp, vector-style. --style raw --v 6.0`

### 3. Визуал для Process Section (Timeline)

> `Minimalist timeline infographic illustrating a 5-step process, designed for a premium tech website. Style: clean, swiss design, using only thin lines and simple geometric shapes. Layout: a horizontal dashed line stretches across the canvas. Five numbered points (1 to 5) are placed along this line. Each point is marked by a simple circle and a small, abstract icon above it. The icons are: 1. Handshake (for "Define Goal"). 2. Compass (for "Strategy"). 3. Rocket Launch (for "Launch"). 4. Gear with Arrow (for "Optimization"). 5. Trophy (for "Scaling"). The entire graphic uses a strict color palette: dark gray (#1D1D1F) for lines and numbers, vibrant blue (#0071E3) for the circle markers. Background is transparent. Presented as a clean vector on a white background. No text, no shadows, no gradients. --ar 16:5 --style raw --v 6.0`

---

## E. Готовые компоненты для подключения

Следующие секции должны быть подключены как существующие React-компоненты, без редизайна и новой верстки.

- **Header**
- **CasesSection**
- **ReviewsSection**
- **IndustriesSection**
- **FinalCtaSection**
- **Footer**
