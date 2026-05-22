# Аудит сетки map2

## Проблема: 3 разных подхода к ширине контента

### 📐 Подход A — «Главная» (Home*Section)
Эти секции используют единый паттерн: **padding сверху/снизу, контент внутри с max-width через `margin: 0 auto`**.

**Секции:** HomeAdvantagesSection, HomeAboutSection, HomeIndustriesSection, HomeReviewsSection, HomeBlogSection, HomeFaqSection

```css
/* Пример — HomeAboutSection.module.css */
.section { padding: 112px 0; }                    /* padding top/bottom */
.container { margin: 0 auto; padding: 0 32px; }    /* без max-width, просто padding */
.heading h2 { max-width: 760px; }                  /* ограничение ТОЛЬКО у h2 */
```

**Итог:** контент растягивается на всю ширину окна, ограничены только заголовки. На 1600px контент уходит к краям — выглядит средне.

---

### 📐 Подход B — «Карточные страницы» (BlogIndex, CasesIndex)
Эти секции фиксируют **ширину контейнера** через `width: min(100%, 1232px)`.

**Секции:** BlogIndexSection, CasesIndexSection

```css
/* Пример — BlogIndexSection.module.css */
.container { width: min(100%, 1232px); margin: 0 auto; padding: 0 32px; }
```

**Итог:** ширина ограничена 1232px + padding 32px. На больших экранах контент не уходит к краям. Хорошо.

---

### 📐 Подход C — «Секции с background» (HeroSection, ServicesSection, TechnoSection)
Эти секции используют **margin по бокам + border-radius** для создания «плашек» с фоном.

**Секции:** ServicesSection, HomeTechnologiesSection
```css
/* Пример — ServicesSection.module.css */
.servicesSection { margin: 0 24px; border-radius: 32px; padding: 56px 32px; }

/* Внутренний контейнер — без max-width, только padding */
.container { margin: 0 auto; padding: 0; }
```

**HeroSection (главная):**
```css
.heroInner { max-width: 1456px; padding: 140px 72px 80px; margin: 0 auto; }
```
Тут свой уникальный max-width: 1456px.

---

### 📐 Подход D — «Страницы услуг» (YandexDirect)
Смесь всего.

**Секции:** YandexDirectSection
```css
/* Hero — на всю ширину */
.hero { margin: 0; border-radius: 0; padding-top: 120px; }

/* Обычная секция — margin как у HomeSection */
.section { margin: 0 24px; padding: 105px 68px; border-radius: 32px; }
```

---

## 📊 Сводная таблица

| Секция | Margin по бокам | Border-radius | max-width контейнера | Padding контента |
|--------|----------------|---------------|---------------------|-----------------|
| **HeroSection** (гл.) | 0 | 0 | 1456px | 140px 72px 80px |
| **ServicesSection** | 24px | 32px | нет | 0 |
| **HomeAdvantages** | 0 | 0 | нет (только h2: 980px) | 0 32px |
| **HomeIndustries** | 0 | 0 | нет (только h2: 900px) | 0 32px |
| **HomeReviews** | 0 | 0 | нет (только h2: 880px) | 0 32px |
| **HomeAbout** | 0 | 0 | нет (только h2: 760px) | 0 32px |
| **HomeBlog** | 0 | 0 | нет (только h2: 860px) | 0 32px |
| **HomeFaq** | 0 | 0 | нет (только h2: 900px) | 0 32px |
| **HomeTechnologies** | 24px | 32px | нет | 0 |
| **BlogIndexSection** | 0 | 0 | 1232px | 0 32px |
| **CasesIndexSection** | 0 | 0 | 1232px | 0 32px |
| **YandexDirect.hero** | 0 | 0 | 1100px | top: 120px |
| **YandexDirect.section** | 24px | 32px | нет | 68px |

---

## 🔍 Проблемы

1. **На главной нет единой ширины контента** — HomeAdvantages, HomeAbout, HomeIndustries растягиваются на всю ширину окна, только заголовки ограничены (и каждый раз разный max-width: 760, 900, 880px)
2. **BlogIndex и CasesIndex жёстче (1232px)** — на больших экранах уже главной
3. **YandexDirect** использует margin + border-radius как ServicesSection, но padding внутри 68px вместо 32px — другой отступ
4. **Hero на главной** — свой уникальный max-width 1456px
5. **Разный padding у контента** — где-то 32px (Home*), где-то 68px (YandexDirect), где-то 72px (HeroSection)

---

## 💡 Решение: единый CSS-контейнер

Создать компонент `<Container />` с предопределённой шириной, который будет оборачивать контент внутри секций.

```css
/* src/components/common/Container.module.css */
.container {
  width: 100%;
  max-width: 1232px;    /* как на BlogIndex — уже проверено */
  margin: 0 auto;
  padding: 0 32px;      /* как везде на главной */
}
```

```tsx
// src/components/common/Container.tsx
import styles from "./Container.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`${styles.container} ${className}`.trim()}>
      {children}
    </div>
  );
}
```

### Как использовать

В любой секции — обернуть сетку/контент в `<Container>`:

```tsx
// Было
<section className={styles.section}>
  <div>...</div>
</section>

// Стало
<section className={styles.section}>
  <Container>
    <div>...</div>
  </Container>
</section>
```

### Исключения (без контейнера)

- **Хиро на всю ширину** (главная HeroSection, Яндекс Директ hero) — контент внутри сам управляет margin
- **Секции с margin + borderRadius** (ServicesSection, TechnoSection) — они сами задают внешний margin

### План миграции (пошагово, без поломок)

**Шаг 1.** Создать Container + Container.module.css — сразу закоммитить
**Шаг 2.** HomeAdvantagesSection — обернуть `<Container>` в .section
**Шаг 3.** HomeIndustriesSection — обернуть
**Шаг 4.** HomeReviewsSection — обернуть
**Шаг 5.** HomeAboutSection — обернуть
**Шаг 6.** HomeBlogSection — обернуть
**Шаг 7.** HomeFaqSection — обернуть
**Шаг 8.** BlogIndexSection — проверить, что .container совпадает с новым Container
**Шаг 9.** CasesIndexSection — проверить
**Шаг 10.** YandexDirectSection — заменить внутренний max-width на Container
**Шаг 11.** HeroSection — оставить как есть (unique layout)
**Шаг 12.** ServicesSection/TechnoSection — заменить padding 32px на Container внутри

Каждый шаг → `npm run build` → если ок, коммит.
