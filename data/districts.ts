// Stub for future expansion. Districts are sub-city areas (e.g. Seoul's gu).

export const districts: { slug: string; name: string; citySlug: string; description: string }[] = [];

export const getDistrictBySlug = (slug: string) =>
  districts.find((d) => d.slug === slug);
export const getDistrictsByCity = (citySlug: string) =>
  districts.filter((d) => d.citySlug === citySlug);
