import Link from "next/link";
import type { RelatedLink } from "@/lib/relatedLinks";

function LinkGroup({ heading, links }: { heading: string; links: RelatedLink[] }) {
  if (links.length === 0) return null;
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{heading}</h2>
      <ul className="max-w-2xl space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed underline underline-offset-2 hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Blocks A–C: related cities, related categories, related guides. */
export function RelatedLinkBlocks({
  cities,
  categories,
  guides,
}: {
  cities: RelatedLink[];
  categories: RelatedLink[];
  guides: RelatedLink[];
}) {
  if (cities.length === 0 && categories.length === 0 && guides.length === 0) return null;
  return (
    <section className="space-y-8" aria-label="Related links">
      <LinkGroup heading="Related cities" links={cities} />
      <LinkGroup heading="Related categories" links={categories} />
      <LinkGroup heading="Related guides" links={guides} />
    </section>
  );
}
