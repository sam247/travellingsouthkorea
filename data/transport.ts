// Stub for future expansion (stations, airports, etc.).

export const transport: { slug: string; name: string; type: string; citySlug?: string; regionSlug?: string; description: string; heroImage?: string }[] = [];

export const getTransportBySlug = (slug: string) =>
  transport.find((t) => t.slug === slug);
