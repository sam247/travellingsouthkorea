import type { FAQItem } from "@/lib/content/faqContent";
import { ChevronDown } from "lucide-react";

export interface FAQSectionProps {
  items: FAQItem[];
  heading?: string;
}

export function FAQSection({ items, heading = "Frequently asked questions" }: FAQSectionProps) {
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mb-8 sm:mb-10" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 id="faq-heading" className="text-xl sm:text-2xl font-bold text-foreground mb-4">
        {heading}
      </h2>
      <div className="max-w-2xl space-y-3">
        {items.map((item, i) => (
          <details
            key={`${item.question}-${i}`}
            className="group rounded-xl border border-border bg-background/50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 [&::-webkit-details-marker]:hidden">
              <span className="text-base sm:text-lg font-semibold text-foreground">
                {item.question}
              </span>
              <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-4 pb-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
