# Make All Perfect — map2

Лендинг агентства маркетинга полного цикла. Одностраничный сайт (SPA) в премиальном минималистичном стиле, вдохновлённом Apple.

**URL (Vercel):** меняется при каждом деплое — см. последний URL в чате или отдеплоить заново
**Репозиторий:** https://github.com/makeallperfectcompany/map2
**Ветка:** `master` (push → автодеплой)

---

## Стек

- **Next.js 16.2.6** + **React 19.2.4**
- **TypeScript**
- **CSS Modules** — все стили изолированы по компонентам
- **Tailwind CSS 4** — подключён, но НЕ используется (весь дизайн через CSS Modules)
- **Шрифт:** Onest (Google Fonts, latin + cyrillic, 6 начертаний 300–800)

---

## Архитектура

```
src/
├── app/
│   ├── globals.css         — CSS-переменные, сброс, prefers-reduced-motion
│   ├── layout.tsx          — <html>, шрифт, метаданные (title, description, favicon)
│   └── page.tsx            — главная: Header → HeroSection → ServicesSection
└── components/
    ├── layout/
    │   ├── Header.tsx      — фиксированная шапка + бургер-кнопка
    │   └── Header.module.css
    └── sections/
        ├── HeroSection.tsx — hero + burger overlay (оверлей внутри этого компонента)
        ├── HeroSection.module.css
        ├── ServicesSection.tsx
        └── ServicesSection.module.css
```

---

## Компоненты

### Header

Fixed-шапка с frosted-стеклом. z-index: 100.

- **Стиль:** border-radius 24px, background rgba(255,255,255,0.96), backdrop-filter blur(14px)
- **Ширина:** от краёв экрана (top 16px, left/right 16px)
- **Desktop (>1100px):** логотип слева, навигация по центру (Услуги, Кейсы, Блог, Команда), кнопка "Связаться" + бургер справа
- **Mobile (<1100px):** только логотип + бургер
- **Бургер-кнопка:** 44×44px, border-radius 18px, background rgba(255,255,255,0.98). 3 линии → X при menuOpen

### HeroSection

Первый экран. Содержит сам hero + burger overlay (оба внутри одного компонента).

**Burger overlay:**
- Fixed оверлей на весь экран, z-index: 99, белый фон
- Left-aligned: контейнер `width: min(100% - 48px, 920px)`, padding-top: `clamp(120px, 16vh, 180px)`
- Пункты: Услуги, Кейсы, Блог, Команда, Контакты
- Стиль: `font-size: clamp(42px, 5vw, 72px)`, 800 weight, letter-spacing -0.055em
- Разделители: `border-bottom: 1px solid rgba(15,16,20,0.08)`
- Hover: цвет `#1A3A6E`, появление стрелки-иконки
- Анимация: staggered entrance с задержками 0.12s–0.36s

**Hero:**
- Фон: hero-bg.webp (1672×941, ~165 KB), градиентная маска слева
- Заголовок с градиентным акцентом на слове "лидировать"
- Две кнопки — синяя (accent) и glass (ghost)
- Анимация fadeUp с задержками

### ServicesSection

Тёмный контрастный блок.

- 3 карточки: 1 featured (синяя) + 2 dark (тёмные с рамкой)
- Дополнительные направления в rail: 4 иконки

---

## Дизайн-система

### CSS-переменные (globals.css)

```css
--ink:        #0e0f12;       /* основной текст */
--muted:      #6b6f76;       /* второстепенный текст */
--line:       rgba(15,16,20,0.08);
--glass:      rgba(255,255,255,0.55);
--glass-2:    rgba(255,255,255,0.78);
--ease:       cubic-bezier(.2,.7,.2,1);
--ease-snap:  cubic-bezier(.34,1.56,.64,1);
```

### Цвета

| Элемент | Цвет/Градиент |
|---|---|
| Акцентный градиент | #1A3A6E → #0071E3 → #3A8FF2 → #5FA8FF |
| Фон страницы | #F5F6F8 |
| Тёмный фон сервисов | #111419 → #1A1D23 → #0E1014 |
| Разделители | rgba(15,16,20,0.08) / rgba(255,255,255,0.12) в тёмной теме |

---

## Адаптивность

| Брейкпоинт | Изменения |
|---|---|
| >1280px | Полноразмерная навигация, 2-колоночный hero, 3 колонки сервисов |
| 1024–1280px | Уменьшенные отступы |
| 768–1024px | hero в 1 колонку, фон hero скрыт, сервисы в 1 колонку |
| 375–640px | header: 58px высота, border-radius 15px. burger: 40px |
| <375px | header: 54px, burger: 36px |

Навигация Header скрывается на <1100px — остаётся только бургер.

---

## Деплой

Push в ветку `master` → GitHub Actions / Vercel Git Integration → автодеплой.

Ручной деплой через API (Vercel):

```bash
# Vercel Project ID и токен запрашивать у владельца
curl -s -X POST "https://api.vercel.com/v13/deployments" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"name":"map2","project":"<project_id>","gitSource":{"type":"github","ref":"master","repoId":1243239722,"repo":"makeallperfectcompany/map2"}}'
```

> **⚠️ Vercel токен и Project ID запрашивать у владельца — не хранить в репозитории.**

---

## История ключевых решений

- **Burger overlay переделан в left-aligned editorial-стиль** — изначально был центрирован, переделано 19.05.2026 для премиального вида
- **Header и burger сделаны непрозрачными (rgba 0.96/0.98)** — изначально были rgba(0.68/0.9), усилено 19.05.2026 для плотности Apple-style
- **Burger lines: 2px, цвет #0E0F12** — изначально 1.5px #1A1C20
- **Hero-bg заменён на качественный webp (44KB → 165KB)** — 19.05.2026
- **Шрифт Onest** — замена дефолтного Geist из create-next-app

---

## Что НЕ сделано (на 19.05.2026)

- Нет секций после Services (Контакты, Footer, Кейсы, Блог — только заглушки-ссылки)
- Нет анимации scroll-trigger (Intersection Observer) — все анимации только при загрузке
- Нет тёмной темы (только тёмная секция Services)
- Метрики и аналитика не подключены
- Нет страниц (роутинга), кроме главной
- Нет формы обратной связи
- Burger overlay не закрывается по клику вне меню (только по кнопке и Escape)

---

## Правила для разработчиков

1. CSS Modules — стили строго в `.module.css`, не в глобальных или Tailwind
2. Анимации — только CSS transitions/keyframes. Никаких JS-библиотек
3. prefers-reduced-motion — уважать глобальное правило в globals.css
4. Новые секции — создавать как отдельные компоненты в `components/sections/`
5. При изменении Header — проверить поведение бургера на mobile (<375px)
6. Assets — все изображения в `public/assets/`, WebP, с Next.js Image компонентом
7. Vercel-токены, API-ключи и пароли — не коммитить. GitHub Push Protection заблокирует пуш.
