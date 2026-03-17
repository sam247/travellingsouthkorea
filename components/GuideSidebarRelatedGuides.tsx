import Link from "next/link";
import type { Guide } from "@/types";

interface GuideSidebarRelatedGuidesProps {
  guides: Guide[];
  getGuidePath: (citySlug: string, guideSlug: string) => string;
  citySlug: string;
}

export function GuideSidebarRelatedGuides({
  guides,
  getGuidePath,
  citySlug,
}: GuideSidebarRelatedGuidesProps) {
  const list = guides.slice(0, 6);
  if (list.length === 0) return null;
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
        Related guides
      </h3>
      <ul className="space-y-2">
        {list.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={getGuidePath(citySlug, guide.slug)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {guide.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
