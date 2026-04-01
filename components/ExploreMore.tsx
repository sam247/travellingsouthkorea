import Link from "next/link";
import { TrackedInternalLink } from "@/components/analytics/TrackedInternalLink";
import type { InternalLinkBlockType, InternalLinkTier } from "@/lib/analytics/gaEvents";

export interface ExploreMoreProps {
  heading?: string;
  links: { label: string; href: string; tier?: InternalLinkTier }[];
  trackBlockType?: InternalLinkBlockType;
}

export function ExploreMore({
  heading = "Explore more",
  links,
  trackBlockType,
}: ExploreMoreProps) {
  if (links.length === 0) return null;
  return (
    <section className="mb-8 sm:mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
        {heading}
      </h2>
      <ul className="max-w-2xl space-y-2">
        {links.map(({ label, href, tier }, i) => (
          <li key={i}>
            {trackBlockType ? (
              <TrackedInternalLink
                href={href}
                blockType={trackBlockType}
                linkTier={tier ?? "tier3"}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed underline underline-offset-2 hover:text-foreground"
              >
                {label}
              </TrackedInternalLink>
            ) : (
              <Link
                href={href}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed underline underline-offset-2 hover:text-foreground"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
