import type { ReactNode } from "react";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { ChevronDown } from "lucide-react";

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

const TABLE_SEPARATOR = /^\|\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/;

function parseTableCells(line: string): string[] {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function plainTextForSchema(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

function collectMarkdownFaqItems(
  lines: string[],
  startIndex: number
): { question: string; answer: string }[] {
  const items: { question: string; answer: string }[] = [];
  let j = startIndex;
  while (j < lines.length) {
    const t = lines[j].trim();
    if (t.startsWith("## ") && !/faq/i.test(t.slice(3))) break;
    if (t.startsWith("### ")) {
      const question = t.slice(4);
      const answerLines: string[] = [];
      j += 1;
      while (j < lines.length) {
        const next = lines[j].trim();
        if (next.startsWith("## ") || next.startsWith("### ")) break;
        if (next.length > 0) answerLines.push(plainTextForSchema(next));
        j += 1;
      }
      items.push({ question, answer: answerLines.join(" ") });
      continue;
    }
    j += 1;
  }
  return items;
}

/**
 * Minimal markdown-to-JSX for travel tip content: ## / ### headings, paragraphs,
 * - list items, **bold**, [links](/path), ![alt](url) images, GFM tables, and
 * FAQPage JSON-LD when a heading contains "FAQ".
 */
export function renderTipContent(content: string): ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let inFaqSection = false;

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
      inFaqSection = /faq/i.test(trimmed.slice(3));
      if (inFaqSection) {
        const faqItems = collectMarkdownFaqItems(lines, i + 1);
        if (faqItems.length > 0) {
          const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          };
          elements.push(
            <script
              key={`faq-schema-${i}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          );
        }
      }
      elements.push(
        <h2 key={i} className="text-lg sm:text-xl font-bold text-foreground mt-8 mb-3">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("|") && trimmed.includes("|", 1)) {
      const tableLines: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].trim().startsWith("|")) {
        tableLines.push(lines[j].trim());
        j += 1;
      }
      const rows = tableLines
        .filter((line) => !TABLE_SEPARATOR.test(line))
        .map(parseTableCells);
      if (rows.length > 0) {
        const [header, ...body] = rows;
        elements.push(
          <div
            key={`table-${i}`}
            className="not-prose my-6 overflow-x-auto rounded-xl border border-border"
          >
            <table className="w-full min-w-[28rem] text-sm">
              <thead className="bg-secondary/60">
                <tr>
                  {header.map((cell, hi) => (
                    <th
                      key={hi}
                      className="px-3 py-2 text-left font-semibold text-foreground whitespace-nowrap"
                    >
                      {renderInlineFormatting(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={ri} className="border-t border-border even:bg-secondary/20">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-3 py-2 text-muted-foreground whitespace-nowrap"
                      >
                        {renderInlineFormatting(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      i = j - 1;
    } else if (trimmed.startsWith("### ")) {
      if (inFaqSection) {
        const question = trimmed.slice(4);
        const answerLines: string[] = [];
        let j = i + 1;
        while (j < lines.length) {
          const t = lines[j].trim();
          if (t.startsWith("## ") || t.startsWith("### ")) break;
          if (t.length > 0) answerLines.push(t);
          j++;
        }
        elements.push(
          <details
            key={`faq-${i}`}
            className="group not-prose rounded-xl border border-border bg-background/50 mb-3"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 [&::-webkit-details-marker]:hidden">
              <span className="text-sm sm:text-base font-semibold text-foreground">
                {question}
              </span>
              <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-4 pb-4 text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3">
              {answerLines.map((t, k) => (
                <p key={`${i}-a-${k}`}>{renderInlineFormatting(t)}</p>
              ))}
            </div>
          </details>
        );
        i = j - 1;
      } else {
      elements.push(
        <h3 key={i} className="text-base sm:text-lg font-semibold text-foreground mt-6 mb-2">
          {trimmed.slice(4)}
        </h3>
      );
      }
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
