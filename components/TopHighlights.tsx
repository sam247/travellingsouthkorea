export interface TopHighlightsProps {
  heading: string;
  highlights: string[];
  id?: string;
}

export function TopHighlights({ heading, highlights, id }: TopHighlightsProps) {
  if (highlights.length === 0) return null;
  return (
    <section className="mb-8 sm:mb-10" id={id}>
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
        {heading}
      </h2>
      <ul className="max-w-2xl list-disc list-inside space-y-2 text-base sm:text-lg text-muted-foreground leading-relaxed">
        {highlights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
