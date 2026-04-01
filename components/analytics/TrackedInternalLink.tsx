"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  trackInternalLinkClick,
  type InternalLinkBlockType,
  type InternalLinkTier,
} from "@/lib/analytics/gaEvents";

export function TrackedInternalLink({
  href,
  className,
  children,
  blockType,
  linkTier,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  blockType: InternalLinkBlockType;
  linkTier: InternalLinkTier;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        trackInternalLinkClick({
          blockType,
          sourcePage: pathname,
          targetPage: href,
          linkTier,
        })
      }
    >
      {children}
    </Link>
  );
}

