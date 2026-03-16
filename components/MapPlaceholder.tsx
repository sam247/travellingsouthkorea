/** Marker shape for future map library: name, lat, lng, category. */
export interface MapMarker {
  name: string;
  lat: number;
  lng: number;
  category: string;
}

interface MapPlaceholderProps {
  label?: string;
  /** Legacy pixel-position markers (optional). */
  markers?: { name: string; top: string; left: string }[];
  /** Venue markers (lat/lng/category) for future map integration. Not rendered yet. */
  venueMarkers?: MapMarker[];
}

export function MapPlaceholder({ label, markers, venueMarkers }: MapPlaceholderProps) {
  return (
    <div className="aspect-[16/9] sm:aspect-[21/9] rounded-xl bg-secondary relative overflow-hidden flex items-center justify-center">
      {markers?.map((m) => (
        <div
          key={m.name}
          className="absolute w-3 h-3 rounded-full bg-primary shadow-md"
          style={{ top: m.top, left: m.left }}
          title={m.name}
        >
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-foreground whitespace-nowrap bg-card px-1.5 py-0.5 rounded shadow-sm opacity-0 hover:opacity-100 transition-opacity">
            {m.name}
          </span>
        </div>
      ))}
      <p className="text-sm text-muted-foreground">
        {label ?? "Interactive map coming soon"}
      </p>
    </div>
  );
}
