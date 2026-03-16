import type { ReactNode } from "react";

/**
 * Minimal markdown-to-JSX for travel tip content: ## headings, paragraphs, - list items, - **bold** — text.
 */
export function renderTipContent(content: string): ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-lg sm:text-xl font-bold text-foreground mt-8 mb-3">
          {trimmed.slice(3)}
        </h2>
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
          {trimmed.slice(2)}
        </li>
      );
    } else if (trimmed.length > 0) {
      elements.push(
        <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
          {trimmed}
        </p>
      );
    }

    i++;
  }

  return elements;
}
