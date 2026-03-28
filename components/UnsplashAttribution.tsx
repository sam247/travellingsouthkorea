import type { UnsplashAttribution as UnsplashAttr } from "@/lib/unsplashApi";

export function UnsplashAttributionLine({
  attribution,
  variant = "on-dark",
}: {
  attribution: UnsplashAttr;
  variant?: "on-dark" | "muted";
}) {
  const text =
    variant === "on-dark" ? "text-xs text-white/70" : "text-xs text-muted-foreground";
  const link = variant === "on-dark" ? "underline hover:text-white" : "underline hover:text-foreground";

  return (
    <p className={`${text} mt-2`}>
      Photo by{" "}
      <a href={attribution.userHtml} className={link} target="_blank" rel="noopener noreferrer">
        {attribution.userName}
      </a>{" "}
      on{" "}
      <a
        href="https://unsplash.com/?utm_source=travellingsouthkorea&utm_medium=referral"
        className={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Unsplash
      </a>
    </p>
  );
}
