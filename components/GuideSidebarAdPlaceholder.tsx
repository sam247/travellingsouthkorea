interface GuideSidebarAdPlaceholderProps {
  title: string;
  description: string;
}

export function GuideSidebarAdPlaceholder({
  title,
  description,
}: GuideSidebarAdPlaceholderProps) {
  return (
    <div className="mb-6 rounded-lg border border-border bg-secondary/40 p-4">
      <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
      <p className="text-xs text-muted-foreground mb-3">{description}</p>
      <a
        href="#"
        className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
      >
        Learn more
      </a>
    </div>
  );
}
