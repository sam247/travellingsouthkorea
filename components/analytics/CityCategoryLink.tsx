"use client";

import Link from "next/link";
import { trackCityNavigation } from "@/lib/analytics/gaEvents";

export function CityCategoryLink({
  href,
  citySlug,
  categorySlug,
  children,
  className,
}: {
  href: string;
  citySlug: string;
  categorySlug: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => trackCityNavigation(citySlug, categorySlug)}
      className={className}
    >
      {children}
    </Link>
  );
}
