import Link from "next/link";

export interface GuidePageTocItem {
  id: string;
  label: string;
}

interface GuidePageTocProps {
  items: GuidePageTocItem[];
}

export function GuidePageToc({ items }: GuidePageTocProps) {
  if (items.length === 0) return null;
  return (
    <nav className="mb-6" aria-label="On this page">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
        On this page
      </h3>
      <ul className="space-y-1.5">
        {items.map(({ id, label }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
