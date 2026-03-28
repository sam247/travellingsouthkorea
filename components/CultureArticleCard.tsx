"use client";

import Link from "next/link";
import { CultureImage } from "@/components/CultureImage";
import { getCultureArticlePath } from "@/lib/canonical";
import type { CultureArticle } from "@/types";
import type { CultureArticleCategory } from "@/types";

const categoryLabels: Record<CultureArticleCategory, string> = {
  fashion: "Fashion",
  beauty: "Beauty",
  "k-pop": "K-pop",
  nightlife: "Nightlife",
  food: "Food",
  festivals: "Festivals",
  lifestyle: "Lifestyle",
};

export function CultureArticleCard({
  article,
  heroImageSrc,
}: {
  article: CultureArticle;
  heroImageSrc?: string;
}) {
  const href = getCultureArticlePath(article.slug);
  const src = heroImageSrc ?? article.heroImage;
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl bg-card transition-all duration-240"
      style={{ boxShadow: "var(--shadow-card)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
      }}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <CultureImage
          src={src}
          alt={article.title}
          width={800}
          height={533}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5">
          {categoryLabels[article.category]}
        </p>
        <h3 className="text-base font-semibold text-foreground leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
          {article.summary}
        </p>
      </div>
    </Link>
  );
}
