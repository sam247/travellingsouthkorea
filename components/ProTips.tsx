export interface ProTipsProps {
  heading: string;
  tips: string[];
}

export function ProTips({ heading, tips }: ProTipsProps) {
  if (tips.length === 0) return null;
  return (
    <section className="mb-8 sm:mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
        {heading}
      </h2>
      <ul className="max-w-2xl list-disc list-inside space-y-2 text-base sm:text-lg text-muted-foreground leading-relaxed">
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}
