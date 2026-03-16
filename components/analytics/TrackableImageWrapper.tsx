"use client";

import { trackImageView } from "@/lib/analytics/gaEvents";

export function TrackableImageWrapper({
  imageContext,
  children,
}: {
  imageContext: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => trackImageView(imageContext)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          trackImageView(imageContext);
        }
      }}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}
