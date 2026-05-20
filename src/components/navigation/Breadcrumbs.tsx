import styles from "./Breadcrumbs.module.css";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav className={`${styles.breadcrumbs} ${className ?? ""}`} aria-label="Хлебные крошки">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label + index} className={styles.item}>
            {index > 0 && <span className={styles.separator} aria-hidden="true">/</span>}
            {isLast || !item.href ? (
              <span className={styles.current} aria-current={isLast ? "page" : undefined}>
                {item.label}
              </span>
            ) : (
              <a href={item.href} className={styles.link}>
                {item.label}
              </a>
            )}
          </span>
        );
      })}
    </nav>
  );
}
