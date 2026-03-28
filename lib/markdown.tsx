import type { ReactNode } from "react";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";

function renderInlineBold(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderInlineFormatting(text: string): ReactNode[] {
  const segments = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  const out: ReactNode[] = [];
  let k = 0;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (!segment) continue;
    const linkMatch = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isInternal = href.startsWith("/") && !href.startsWith("//");
      out.push(
        isInternal ? (
          <Link
            key={`l-${k++}`}
            href={href}
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {label}
          </Link>
        ) : (
          <a
            key={`l-${k++}`}
            href={href}
            className="text-primary underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        )
      );
    } else {
      out.push(
        ...renderInlineBold(segment).map((n, j) => (
          <span key={`t-${i}-${j}`}>{n}</span>
        ))
      );
    }
  }
  return out;
}

/**
 * Minimal markdown-to-JSX for travel tip content: ## / ### headings, paragraphs,
 * - list items, **bold**, [links](/path), and ![alt](url) image lines.
 */
export function renderTipContent(content: string): ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    const imageMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imageMatch) {
      const [, alt, src] = imageMatch;
      elements.push(
        <figure key={i} className="my-8 not-prose">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-secondary/50">
            <SafeImage src={src} alt={alt || "Article image"} fill className="object-cover" />
          </div>
        </figure>
      );
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-lg sm:text-xl font-bold text-foreground mt-8 mb-3">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-base sm:text-lg font-semibold text-foreground mt-6 mb-2">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("- **")) {
      const match = trimmed.match(/^- \*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);
      if (match) {
        elements.push(
          <li key={i} className="text-sm text-muted-foreground ml-4 mb-1.5">
            <span className="font-semibold text-foreground">{match[1]}</span> — {match[2]}
          </li>
        );
      } else {
        elements.push(
          <li key={i} className="text-sm text-muted-foreground ml-4 mb-1.5">
            {trimmed.replace(/^- /, "").replace(/\*\*/g, "")}
          </li>
        );
      }
    } else if (trimmed.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-sm text-muted-foreground ml-4 mb-1.5">
          {renderInlineFormatting(trimmed.slice(2))}
        </li>
      );
    } else if (trimmed.length > 0) {
      elements.push(
        <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
          {renderInlineFormatting(trimmed)}
        </p>
      );
    }

    i++;
  }

  return elements;
}
