import type { FAQItem } from "@/lib/content/faqContent";

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
      <dl className="max-w-2xl space-y-6">
        {items.map((item, i) => (
          <div key={i}>
            <dt className="text-base sm:text-lg font-semibold text-foreground mb-1.5">
              {item.question}
            </dt>
            <dd className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
