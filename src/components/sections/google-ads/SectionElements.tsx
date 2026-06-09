import type { ReactNode } from 'react';
import styles from './SectionElements.module.css';

type IconName =
  | 'search'
  | 'commerce'
  | 'business'
  | 'digital'
  | 'education'
  | 'property'
  | 'growth'
  | 'audit'
  | 'return'
  | 'analytics'
  | 'target'
  | 'shield';

export function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={`${styles.label} ${dark ? styles.labelDark : ''}`}>{children}</span>;
}

export function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" />
    </svg>
  );
}

export function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    search: <><circle cx="10" cy="10" r="5.5" /><path d="m14.5 14.5 4 4M4 4h3" /></>,
    commerce: <><path d="M4.5 7h15l-1.6 8.3H7L4.5 3H2" /><circle cx="8.5" cy="19" r="1" /><circle cx="16.5" cy="19" r="1" /></>,
    business: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M9 5V3h6v2M4 10h16M10 10v2h4v-2" /></>,
    digital: <><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 21h8M12 17v4M7 10h4M7 13h8" /></>,
    education: <><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M7 12v4c3 2 7 2 10 0v-4M21 9v6" /></>,
    property: <><path d="M4 20V9l8-6 8 6v11H4Z" /><path d="M9 20v-6h6v6" /></>,
    growth: <><path d="M4 17 10 11l4 4 6-8" /><path d="M15 7h5v5" /></>,
    audit: <><path d="M7 3h8l4 4v14H7V3Z" /><path d="M15 3v5h4M10 13l2 2 4-5" /></>,
    return: <><path d="M4 11a8 8 0 1 0 2-5.3" /><path d="M4 4v7h7" /></>,
    analytics: <><path d="M4 20V11M10 20V5M16 20v-8M22 20H2" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
    shield: <><path d="M12 3 20 6v6c0 5-3.6 8-8 9-4.4-1-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-5" /></>,
  };
  return (
    <span className={styles.iconWrap}>
      <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
    </span>
  );
}
