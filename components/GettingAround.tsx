import type { ContentSectionProps } from "./ContentSection";

export function GettingAround({ heading, paragraphs }: ContentSectionProps) {
  return (
    <section className="mb-8 sm:mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
        {heading}
      </h2>
      <div className="max-w-2xl space-y-4">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
