"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useConsultationPopup } from "@/components/modals/PopupProvider";
import { servicesMenu } from "@/content/navigation/servicesMenu";
import styles from "./BurgerMenu.module.css";

type MobileScreen =
  | { screen: "main" }
  | { screen: "services" }
  | { screen: "serviceGroup"; groupCode: string };

interface NavLink {
  title: string;
  key: string;
  href?: string;
}

const navLinks: NavLink[] = [
  { title: "Услуги", key: "services" },
  { title: "Кейсы", key: "cases", href: "/cases" },
  { title: "Отзывы", key: "reviews", href: "/reviews" },
  { title: "Блог", key: "blog", href: "/blog" },
  { title: "О нас", key: "about", href: "/about" },
  { title: "Вакансии", key: "jobs", href: "/jobs" },
  { title: "Партнёрам", key: "partners", href: "/partners" },
  { title: "Контакты", key: "contacts", href: "/contacts" },
];

const icons: Record<string, React.ReactNode> = {
  target: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  code: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  cart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  ),
  star: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  ),
  users: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  analytics: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  ),
};

export default function BurgerMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [activeSection, setActiveSection] = useState("services");
  const [mobileScreen, setMobileScreen] = useState<MobileScreen>({
    screen: "main",
  });
  const { openConsultation } = useConsultationPopup();

  // Reset state on open/close
  useEffect(() => {
    if (!open) {
      setActiveSection("services");
      setMobileScreen({ screen: "main" });
    }
  }, [open]);

  // Body scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape close
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleEsc]);

  const handleLinkClick = (href?: string) => {
    if (href) {
      onClose();
    }
  };

  if (!open) return null;

  const activeServiceCode = activeSection === "services" ? null : null;

  return (
    <div className={styles.burgerOverlay} onClick={onClose}>
      <div
        className={styles.burgerPanel}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Panel header ── */}
        <div className={styles.burgerHeader}>
          <a href="/" className={styles.burgerBrand} onClick={onClose}>
            <Image
              className={styles.burgerLogo}
              src="/assets/home/hero/logo-header.webp"
              alt="Make All Perfect"
              width={30}
              height={30}
              priority
            />
            <span className={styles.burgerBrandName}>Make All Perfect</span>
          </a>
          <button
            className={styles.burgerClose}
            onClick={onClose}
            aria-label="Закрыть меню"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Desktop: two-column ── */}
        <div className={styles.desktopBody}>
          {/* Left nav */}
          <nav className={styles.burgerSide}>
            {navLinks.map((link) => (
              <button
                key={link.key}
                className={`${styles.sideLink}${activeSection === link.key ? " " + styles.sideLinkActive : ""}`}
                onClick={() => {
                  if (link.href) {
                    handleLinkClick(link.href);
                    window.location.href = link.href;
                  } else {
                    setActiveSection(link.key);
                  }
                }}
                type="button"
              >
                {link.title}
                {link.href && <span className={styles.sideLinkArr}>→</span>}
                {!link.href && (
                  <span className={styles.sideLinkArr}>→</span>
                )}
              </button>
            ))}
          </nav>

          {/* Right content */}
          <div className={styles.burgerContent}>
            {activeSection === "services" && (
              <>
                <Link href="/services" className={styles.sectionTitle} onClick={onClose}>Услуги <span className={styles.sectionTitleArr}>→</span></Link>
                <div className={styles.serviceGroupsGrid}>
                  {servicesMenu.map((group) => (
                    <div className={styles.serviceGroupCard} key={group.code}>
                      <div className={styles.groupCardHead}>
                        <div className={styles.groupCardIcon}>
                          {icons[group.icon] || icons.analytics}
                        </div>
                        <span className={styles.groupCardTitle}>
                          {group.title}
                        </span>
                      </div>
                      <div className={styles.groupCardLinks}>
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={styles.groupCardLink}
                            onClick={onClose}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {activeSection !== "services" && (
              <div className={styles.sectionEmpty}>
                {navLinks.find((l) => l.key === activeSection)?.title}
              </div>
            )}
          </div>
        </div>

        {/* ── Mobile: screen-based ── */}
        <div className={styles.mobileBody}>
          {mobileScreen.screen === "main" && (
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  className={styles.mobileNavRow}
                  onClick={() => {
                    if (link.href) {
                      window.location.href = link.href;
                      onClose();
                    } else {
                      setMobileScreen({ screen: "services" });
                    }
                  }}
                  type="button"
                >
                  {link.title}
                  <span className={styles.mobileNavArr}>→</span>
                </button>
              ))}
            </nav>
          )}

          {mobileScreen.screen === "services" && (
            <div className={styles.mobileNav}>
              <button
                className={styles.mobileBackBtn}
                onClick={() => setMobileScreen({ screen: "main" })}
                type="button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Назад
              </button>
              <Link href="/services" className={styles.mobileSectionHeader} onClick={onClose}>Услуги <span style={{ fontSize: 14, marginLeft: 4, opacity: 0.5 }}>→</span></Link>
              {servicesMenu.map((group) => (
                <button
                  key={group.code}
                  className={styles.mobileNavRow}
                  onClick={() =>
                    setMobileScreen({
                      screen: "serviceGroup",
                      groupCode: group.code,
                    })
                  }
                  type="button"
                >
                  {group.title}
                  <span className={styles.mobileNavArr}>→</span>
                </button>
              ))}
            </div>
          )}

          {mobileScreen.screen === "serviceGroup" && (
            <div className={styles.mobileNav}>
              <button
                className={styles.mobileBackBtn}
                onClick={() => setMobileScreen({ screen: "services" })}
                type="button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Услуги
              </button>
              {(() => {
                const group = servicesMenu.find(
                  (g) => g.code === mobileScreen.groupCode
                );
                if (!group) return null;
                return (
                  <>
                    <div className={styles.mobileSectionHeader}>
                      {group.title}
                    </div>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.mobileNavRow}
                        onClick={onClose}
                      >
                        {item.title}
                        <span className={styles.mobileNavArr}>→</span>
                      </Link>
                    ))}
                  </>
                );
              })()}
            </div>
          )}
        </div>

        {/* ── CTA card ── */}
        <div className={styles.burgerCta}>
          <div className={styles.burgerCtaLeft}>
            <span className={styles.ctaTitle}>
              Нужна помощь с выбором услуги?
            </span>
            <span className={styles.ctaSub}>
              Расскажем, какой канал подойдёт под вашу задачу
            </span>
          </div>
          <div className={styles.burgerCtaActions}>
            <button
              className={styles.ctaPrimary}
              onClick={() => {
                onClose();
                setTimeout(openConsultation, 100);
              }}
            >
              Обсудить проект
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
