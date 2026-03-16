import Image from "next/image";
import type { TravelTip } from "@/types";

export function TravelTipCard({ tip }: { tip: TravelTip }) {
  return (
    <div
      className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-secondary/50 transition-colors h-full"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={tip.image}
          alt=""
          width={56}
          height={56}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-foreground">{tip.title}</h3>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{tip.summary}</p>
      </div>
    </div>
  );
}
