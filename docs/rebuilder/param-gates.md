# Param gates: city × travel-tips + city × neighbourhoods

**Implemented:** Mon 5 Oct 2026 (Europe/London)
**Policy (Sam via Eggbot):** Shared predicate; stop emitting empty/clone params; permanentRedirect gated URLs → city hub. No noindex. No new URL patterns / no `-2`.

## Shared abstraction

`lib/cityCategoryParams.ts` → `shouldEmitCityCategoryParam(citySlug, categorySlug)`

Used by:
- `generateStaticParams` via `getCityCategoryStaticParams()`
- Page runtime `permanentRedirect(getCityPath(city))` when gated
- `app/sitemap-categories.xml/route.ts`
- City hub pills + explore cards (`RegionOrCityPage.tsx`)
- `GuideSidebarExplore`
- Site search (`lib/search.ts`)

## Criteria

| Class | Emit when | Soft-land | Count gated |
|---|---|---|---:|
| travel-tips | ≥1 tip with `TravelTip.citySlugs` including the city (none today) | `/south-korea/{city}` | 45 |
| neighbourhoods | `getNeighbourhoodsByCity(city).length > 0` | `/south-korea/{city}` | 42 |

**Neighbourhood empty shells:** 301/permanentRedirect to city hub chosen for consistency with travel-tips and softer UX (not national `/category/neighbourhoods`).

**Kept neighbourhoods category:** seoul, busan, jeju
**Kept travel-tips category:** (none — until tips are city-scoped)

## (a) travel-tips → city hub (45)

- `/south-korea/seoul/category/travel-tips` → `/south-korea/seoul`
- `/south-korea/busan/category/travel-tips` → `/south-korea/busan`
- `/south-korea/incheon/category/travel-tips` → `/south-korea/incheon`
- `/south-korea/daegu/category/travel-tips` → `/south-korea/daegu`
- `/south-korea/daejeon/category/travel-tips` → `/south-korea/daejeon`
- `/south-korea/gwangju/category/travel-tips` → `/south-korea/gwangju`
- `/south-korea/ulsan/category/travel-tips` → `/south-korea/ulsan`
- `/south-korea/sejong/category/travel-tips` → `/south-korea/sejong`
- `/south-korea/suwon/category/travel-tips` → `/south-korea/suwon`
- `/south-korea/yongin/category/travel-tips` → `/south-korea/yongin`
- `/south-korea/goyang/category/travel-tips` → `/south-korea/goyang`
- `/south-korea/seongnam/category/travel-tips` → `/south-korea/seongnam`
- `/south-korea/bucheon/category/travel-tips` → `/south-korea/bucheon`
- `/south-korea/anyang/category/travel-tips` → `/south-korea/anyang`
- `/south-korea/ansan/category/travel-tips` → `/south-korea/ansan`
- `/south-korea/pyeongtaek/category/travel-tips` → `/south-korea/pyeongtaek`
- `/south-korea/chuncheon/category/travel-tips` → `/south-korea/chuncheon`
- `/south-korea/gangneung/category/travel-tips` → `/south-korea/gangneung`
- `/south-korea/wonju/category/travel-tips` → `/south-korea/wonju`
- `/south-korea/sokcho/category/travel-tips` → `/south-korea/sokcho`
- `/south-korea/cheongju/category/travel-tips` → `/south-korea/cheongju`
- `/south-korea/chungju/category/travel-tips` → `/south-korea/chungju`
- `/south-korea/jecheon/category/travel-tips` → `/south-korea/jecheon`
- `/south-korea/cheonan/category/travel-tips` → `/south-korea/cheonan`
- `/south-korea/asan/category/travel-tips` → `/south-korea/asan`
- `/south-korea/gongju/category/travel-tips` → `/south-korea/gongju`
- `/south-korea/boryeong/category/travel-tips` → `/south-korea/boryeong`
- `/south-korea/jeonju/category/travel-tips` → `/south-korea/jeonju`
- `/south-korea/gunsan/category/travel-tips` → `/south-korea/gunsan`
- `/south-korea/iksan/category/travel-tips` → `/south-korea/iksan`
- `/south-korea/namwon/category/travel-tips` → `/south-korea/namwon`
- `/south-korea/mokpo/category/travel-tips` → `/south-korea/mokpo`
- `/south-korea/yeosu/category/travel-tips` → `/south-korea/yeosu`
- `/south-korea/suncheon/category/travel-tips` → `/south-korea/suncheon`
- `/south-korea/pohang/category/travel-tips` → `/south-korea/pohang`
- `/south-korea/gyeongju/category/travel-tips` → `/south-korea/gyeongju`
- `/south-korea/gumi/category/travel-tips` → `/south-korea/gumi`
- `/south-korea/andong/category/travel-tips` → `/south-korea/andong`
- `/south-korea/yeongju/category/travel-tips` → `/south-korea/yeongju`
- `/south-korea/changwon/category/travel-tips` → `/south-korea/changwon`
- `/south-korea/jinju/category/travel-tips` → `/south-korea/jinju`
- `/south-korea/geoje/category/travel-tips` → `/south-korea/geoje`
- `/south-korea/tongyeong/category/travel-tips` → `/south-korea/tongyeong`
- `/south-korea/jeju/category/travel-tips` → `/south-korea/jeju`
- `/south-korea/seogwipo/category/travel-tips` → `/south-korea/seogwipo`

## (b) neighbourhoods (empty) → city hub (42)

- `/south-korea/incheon/category/neighbourhoods` → `/south-korea/incheon`
- `/south-korea/daegu/category/neighbourhoods` → `/south-korea/daegu`
- `/south-korea/daejeon/category/neighbourhoods` → `/south-korea/daejeon`
- `/south-korea/gwangju/category/neighbourhoods` → `/south-korea/gwangju`
- `/south-korea/ulsan/category/neighbourhoods` → `/south-korea/ulsan`
- `/south-korea/sejong/category/neighbourhoods` → `/south-korea/sejong`
- `/south-korea/suwon/category/neighbourhoods` → `/south-korea/suwon`
- `/south-korea/yongin/category/neighbourhoods` → `/south-korea/yongin`
- `/south-korea/goyang/category/neighbourhoods` → `/south-korea/goyang`
- `/south-korea/seongnam/category/neighbourhoods` → `/south-korea/seongnam`
- `/south-korea/bucheon/category/neighbourhoods` → `/south-korea/bucheon`
- `/south-korea/anyang/category/neighbourhoods` → `/south-korea/anyang`
- `/south-korea/ansan/category/neighbourhoods` → `/south-korea/ansan`
- `/south-korea/pyeongtaek/category/neighbourhoods` → `/south-korea/pyeongtaek`
- `/south-korea/chuncheon/category/neighbourhoods` → `/south-korea/chuncheon`
- `/south-korea/gangneung/category/neighbourhoods` → `/south-korea/gangneung`
- `/south-korea/wonju/category/neighbourhoods` → `/south-korea/wonju`
- `/south-korea/sokcho/category/neighbourhoods` → `/south-korea/sokcho`
- `/south-korea/cheongju/category/neighbourhoods` → `/south-korea/cheongju`
- `/south-korea/chungju/category/neighbourhoods` → `/south-korea/chungju`
- `/south-korea/jecheon/category/neighbourhoods` → `/south-korea/jecheon`
- `/south-korea/cheonan/category/neighbourhoods` → `/south-korea/cheonan`
- `/south-korea/asan/category/neighbourhoods` → `/south-korea/asan`
- `/south-korea/gongju/category/neighbourhoods` → `/south-korea/gongju`
- `/south-korea/boryeong/category/neighbourhoods` → `/south-korea/boryeong`
- `/south-korea/jeonju/category/neighbourhoods` → `/south-korea/jeonju`
- `/south-korea/gunsan/category/neighbourhoods` → `/south-korea/gunsan`
- `/south-korea/iksan/category/neighbourhoods` → `/south-korea/iksan`
- `/south-korea/namwon/category/neighbourhoods` → `/south-korea/namwon`
- `/south-korea/mokpo/category/neighbourhoods` → `/south-korea/mokpo`
- `/south-korea/yeosu/category/neighbourhoods` → `/south-korea/yeosu`
- `/south-korea/suncheon/category/neighbourhoods` → `/south-korea/suncheon`
- `/south-korea/pohang/category/neighbourhoods` → `/south-korea/pohang`
- `/south-korea/gyeongju/category/neighbourhoods` → `/south-korea/gyeongju`
- `/south-korea/gumi/category/neighbourhoods` → `/south-korea/gumi`
- `/south-korea/andong/category/neighbourhoods` → `/south-korea/andong`
- `/south-korea/yeongju/category/neighbourhoods` → `/south-korea/yeongju`
- `/south-korea/changwon/category/neighbourhoods` → `/south-korea/changwon`
- `/south-korea/jinju/category/neighbourhoods` → `/south-korea/jinju`
- `/south-korea/geoje/category/neighbourhoods` → `/south-korea/geoje`
- `/south-korea/tongyeong/category/neighbourhoods` → `/south-korea/tongyeong`
- `/south-korea/seogwipo/category/neighbourhoods` → `/south-korea/seogwipo`

