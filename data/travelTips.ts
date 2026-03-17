import {
  getTravelTipImagePath,
  getTravelTipSupportingImagePath,
} from "@/lib/imagePaths";
import type { TravelTip } from "@/types";

function supportingImages(slug: string): string[] {
  return [
    getTravelTipSupportingImagePath(slug, "1"),
    getTravelTipSupportingImagePath(slug, "2"),
  ];
}

export const travelTips: TravelTip[] = [
  {
    slug: "seoul-subway-guide",
    title: "How To Use The Seoul Subway",
    image: getTravelTipImagePath("seoul-subway-guide"),
    supportingImages: supportingImages("seoul-subway-guide"),
    summary: "Everything you need to know about navigating Seoul's metro system — apps, etiquette and tips.",
    content: `**Quick summary:** Get a T-Money card, use Naver Map for directions, and avoid rush hour if you can. The subway is safe, clean and the fastest way to get around Seoul.

## Seoul's Subway Is Your Best Friend

Seoul's subway system is one of the best in the world. Clean, punctual, cheap and easy to navigate — even if you don't speak Korean. Here's everything you need to know.

## Getting a T-Money Card

Buy a T-Money card at any convenience store (CU, GS25, 7-Eleven) near a subway station. The card costs ₩2,500 and you load credit onto it. Tap in, tap out.

## Key Lines

- **Line 2 (Green Circle)** — The most useful line. Loops through Hongdae, Gangnam, Jamsil and most major districts.
- **Line 6 (Brown)** — Runs through Itaewon and Hannam.
- **Line 3 (Orange)** — Connects to Gyeongbokgung and Bukhansan.
- **Line 4 (Blue)** — Myeongdong and the university district.

## Apps to Download

- **Naver Map** — Better than Google Maps in Korea. Accurate subway directions.
- **KakaoMap** — The local alternative. Both work well.
- **Subway Korea** — Dedicated metro app with transfer times.

## Etiquette

- Stand on the right side of escalators.
- Don't eat on the train.
- Give up priority seats to elderly passengers.
- Keep phone calls quiet or use messaging.

## Hours

Trains run from approximately **5:30 AM to midnight**. After midnight, you'll need taxis or night buses (owl buses).

## Cost

A single journey starts at ₩1,350 with a T-Money card. Transfers between subway and bus are free within 30 minutes.`,
    tags: ["Transport", "Subway", "Seoul", "Practical"],
    authorSlug: "james-jeong",
    updatedDate: "2026-03-10",
    contentType: "travel-tip",
  },
  {
    slug: "incheon-airport-to-seoul",
    title: "How To Get From Incheon Airport To Seoul",
    image: getTravelTipImagePath("incheon-airport-to-seoul"),
    supportingImages: supportingImages("incheon-airport-to-seoul"),
    summary: "AREX, bus, taxi or KTX — the best ways to get from Incheon Airport to central Seoul.",
    content: `**Pro tip:** For most travellers, the AREX Express to Seoul Station is the best balance of speed and cost. Book nothing in advance — just buy at the station.

## Getting From Incheon To Seoul

Incheon International Airport (ICN) is about 60km west of central Seoul. Here are your options, ranked.

## AREX (Airport Railroad Express)

**Best for most travellers.** The express train takes 43 minutes non-stop to Seoul Station. Costs ₩9,500. Trains run every 30-40 minutes.

The all-stop version takes about 58 minutes and costs ₩4,750. Both accept T-Money cards.

## Airport Limousine Bus

Comfortable buses run to most major areas of Seoul — Gangnam, Myeongdong, Hongdae, Itaewon. Costs ₩10,000-17,000 depending on destination. Takes 60-90 minutes depending on traffic.

## Taxi

A regular taxi to central Seoul costs ₩65,000-80,000 and takes 60-90 minutes. Deluxe (black) taxis cost more but are more comfortable. Use KakaoTaxi app to avoid language issues.

## KTX (High-Speed Rail)

If heading to Busan or other cities, you can catch the KTX directly from Incheon Airport. Book through the Korail app.

## Our Recommendation

Take the AREX Express to Seoul Station, then transfer to the subway. It's the fastest, cheapest and most reliable option.`,
    tags: ["Transport", "Airport", "Seoul", "Practical"],
    authorSlug: "james-jeong",
    updatedDate: "2026-03-08",
    contentType: "travel-tip",
  },
  {
    slug: "t-money-card-guide",
    title: "T-Money Card Guide",
    image: getTravelTipImagePath("t-money-card-guide"),
    supportingImages: supportingImages("t-money-card-guide"),
    summary: "How to buy, load and use Korea's essential transport card for subway, bus and taxis.",
    content: `**Quick summary:** Buy at any convenience store or airport, load ₩10,000–30,000 for a few days, and tap on every subway and bus. Refund leftover credit before you leave.

## What Is T-Money?

T-Money is Korea's rechargeable transport card. It works on subways, buses, some taxis and even convenience store purchases. It's the first thing you should buy when you arrive.

## Where To Buy

Available at any convenience store (CU, GS25, 7-Eleven) near subway stations and at Incheon Airport. The card costs ₩2,500.

## How To Load Credit

- Convenience stores — hand the card to the cashier and say how much you want to add
- Subway station machines — most have English language options
- Minimum load: ₩1,000

## How Much To Load

For a typical day of sightseeing with 3-4 subway rides: ₩10,000 is usually enough. For a week: ₩30,000-50,000.

## Getting a Refund

You can get remaining credit refunded (minus ₩500 fee) at convenience stores or subway station machines. Do this before leaving Korea.

## Mobile T-Money

If you have a compatible phone, you can use the T-Money app instead of a physical card. Works with NFC on most Android phones. iPhone support is limited.`,
    tags: ["Transport", "Money", "Practical"],
    authorSlug: "mina-park",
    updatedDate: "2026-02-25",
    contentType: "travel-tip",
  },
  {
    slug: "sim-cards-korea",
    title: "SIM Cards & WiFi In Korea",
    image: getTravelTipImagePath("sim-cards-korea"),
    supportingImages: supportingImages("sim-cards-korea"),
    summary: "Prepaid SIM cards, eSIMs and portable WiFi — staying connected in South Korea.",
    content: `**Pro tip:** An eSIM bought before you fly is the smoothest option — you land with data and no queue. Free WiFi is everywhere, but having your own data makes maps and translation hassle-free.

## Staying Connected In Korea

South Korea has some of the fastest internet in the world. Here's how to get online.

## eSIM (Recommended)

The easiest option for most travellers. Buy an eSIM before you fly — providers like Airalo, Holafly and Ubigi offer Korea data plans from $5/day.

**Pros:** No physical card needed. Activate instantly. Keep your home number for WhatsApp.

## Prepaid SIM Card

Available at Incheon Airport arrival hall. KT, SKT and LG U+ all have counters. Plans start at ₩20,000 for 5 days of unlimited data.

**Pros:** Local Korean number. Reliable coverage everywhere.

## Portable WiFi Router

Rent a pocket WiFi device at the airport. ₩3,000-5,000/day. Good if travelling in a group — one device can connect 5-10 phones.

## Free WiFi

Korea has excellent free WiFi. Look for:
- **KT Free WiFi Zone** — in most cafes and restaurants
- **Seoul Free WiFi** — on public transport and in tourist areas
- Convenience stores all have free WiFi

## Our Recommendation

Get an eSIM before you fly. It's the cheapest, easiest option and you'll have data the moment you land.`,
    tags: ["WiFi", "SIM", "Practical"],
    authorSlug: "mina-park",
    updatedDate: "2026-03-01",
    contentType: "travel-tip",
  },
  {
    slug: "k-pop-history",
    title: "The Evolution of K-Pop: A Journey Through Time",
    image: getTravelTipImagePath("k-pop-history"),
    supportingImages: supportingImages("k-pop-history"),
    summary: "From Seo Taiji to BTS and beyond — how K-pop became a global phenomenon.",
    content: `**Quick summary:** K-pop grew from 1990s experiments into a global industry centred in Seoul. If you're in Korea, Gangnam, music show recordings and HYBE Insight are the best ways to experience it.

## The Birth of Modern K-Pop

K-pop as we know it today began in the early 1990s with Seo Taiji and Boys, who blended hip-hop, R&B and electronic music with Korean lyrics. Their success paved the way for the idol system and the industry we see today.

## First Generation (1990s–2000s)

H.O.T., S.E.S., Fin.K.L and g.o.d dominated the charts. SM, JYP and YG Entertainment emerged as the big three agencies, building the training and debut system that still defines K-pop.

## Second Generation (2000s–2010s)

Girls' Generation, Big Bang, 2NE1 and Super Junior took K-pop across Asia. Concerts, variety shows and meticulous production became the norm.

## Third Generation and Global Breakthrough

BTS, BLACKPINK, EXO and TWICE broke into the US and global markets. Social media and streaming turned K-pop into a worldwide culture.

## Experience K-Pop in Korea

Visit K-Star Road in Gangnam, attend a music show recording, or explore the HYBE Insight museum. Seoul is the heart of the industry.`,
    tags: ["K-Pop", "Culture", "Music", "Seoul"],
    authorSlug: "james-jeong",
    updatedDate: "2026-03-10",
    contentType: "travel-tip",
  },
  {
    slug: "k-pop-male-idols",
    title: "10 Most Handsome K-Pop Male Idols 2025",
    image: getTravelTipImagePath("k-pop-male-idols"),
    supportingImages: supportingImages("k-pop-male-idols"),
    summary: "A light-hearted look at some of the most popular K-pop male idols and where to spot them in Seoul.",
    content: `**Pro tip:** Focus on the culture, not the chase — visit K-Star Road, HYBE Insight and maybe a music show recording. Respect idols' privacy and enjoy the neighbourhoods that shape the industry.

## K-Pop Idols and Korean Beauty Standards

K-pop male idols are known for their visuals as much as their music. From runway-ready looks to casual street style, they influence fashion and beauty trends across Korea and beyond.

## Where to Experience Idol Culture in Seoul

- **Gangnam (Apgujeong)** — Agency buildings, flagship stores and the streets where idols are often spotted.
- **K-Star Road** — Bronze statues of beloved groups and a must-do for fans.
- **Music show recordings** — Apply for audience tickets to see idols up close (advance booking required).
- **HYBE Insight** — BTS-focused museum and exhibition space in Yongsan.

## Tips for Fans

Respect privacy: idols are people too. Don't follow them in person or at private locations. Enjoy the music, the performances and the culture — that's what travel is for.`,
    tags: ["K-Pop", "Idols", "Seoul", "Culture"],
    authorSlug: "james-jeong",
    updatedDate: "2026-03-10",
    contentType: "travel-tip",
  },
  {
    slug: "sansachun-drink-guide",
    title: "What Is Sansachun?",
    image: getTravelTipImagePath("sansachun-drink-guide"),
    supportingImages: supportingImages("sansachun-drink-guide"),
    summary: "Korea's traditional magnolia berry liquor — what it is, how it's made and where to try it.",
    content: `**Quick summary:** Sansachun is a sweet, fruity Korean liquor (about 15–17% ABV) made from magnolia berries. Try it at traditional restaurants or pick up a bottle at duty-free.

## What Is Sansachun?

Sansachun (산사춘) is a Korean traditional liquor made from magnolia berries (sansa). It's sweet, mildly fruity and typically around 15–17% ABV. You'll see it in traditional restaurants and as a gift in duty-free shops.

## How It's Made

The berries are fermented and distilled, often with added honey or sugar. The result is a smooth, amber-coloured drink that pairs well with Korean food.

## Where to Try It

- **Traditional Korean restaurants** — Especially those serving hanjeongsik (full course) or jeon (savory pancakes).
- **Jinro and other brands** — Available in supermarkets and convenience stores.
- **Duty-free** — Popular as a souvenir; bottles are well-packaged for travel.

## Drinking Etiquette

Like soju, it's often poured for others and received with two hands. Sip rather than shoot — it's meant to be enjoyed with food.`,
    tags: ["Drinks", "Traditional", "Food", "Culture"],
    authorSlug: "mina-park",
    updatedDate: "2026-03-10",
    contentType: "travel-tip",
  },
  {
    slug: "arex-airport-train-guide",
    title: "AREX Airport Train Guide: Schedule and Tips",
    image: getTravelTipImagePath("arex-airport-train-guide"),
    supportingImages: supportingImages("arex-airport-train-guide"),
    summary: "AREX express and all-stop train times, fares and how to get from Incheon Airport to Seoul Station.",
    content: `**Pro tip:** Express (₩9,500, 43 min) is best for Seoul Station; all-stop is cheaper and handy if you're staying near Hongdae. Check the Korail or AREX app for current times.

## What Is AREX?

AREX (Airport Railroad Express) connects Incheon International Airport to Seoul Station. Two services run: **Express** (non-stop, 43 minutes) and **All-Stop** (multiple stations, about 58 minutes).

## Express Train

- **Fare:** ₩9,500 (one way)
- **Schedule:** Roughly every 30–40 minutes; check the official AREX or Korail app for current times.
- **Stops:** Incheon Airport T1 and T2 → Seoul Station only.
- **Booking:** Optional reserved seats; walk-up available. T-Money accepted.

## All-Stop Train

- **Fare:** ₩4,750 with T-Money (cheaper than express).
- **Stops:** Incheon Airport, Gyeyang, Geomam, Gimpo Airport, Digital Media City, Hongik University, Gongdeok, Seoul Station.
- **Use case:** If you're staying near Hongik University (Hongdae), the all-stop can be more convenient.

## Schedule and Apps

Train times vary by day and season. Download the **Korail** or **AREX** app for the latest schedule. First and last trains typically run from around 5:20 AM to midnight; check before late-night or early-morning flights.`,
    tags: ["Transport", "AREX", "Airport", "Seoul"],
    authorSlug: "james-jeong",
    updatedDate: "2026-03-10",
    contentType: "travel-tip",
  },
  {
    slug: "korean-won-etf-guide",
    title: "Korean Won Currency ETFs: A Traveller's Overview",
    image: getTravelTipImagePath("korean-won-etf-guide"),
    supportingImages: supportingImages("korean-won-etf-guide"),
    summary: "What travellers should know about the Korean won, exchange rates and currency-focused ETFs.",
    content: `**Quick summary:** Use ATMs or banks in Korea for better rates; carry some cash for markets and small vendors. Cards work almost everywhere in cities. Currency ETFs are for investors, not day-to-day travel.

## The Korean Won (KRW)

The South Korean won (₩) is the official currency. For travellers, exchanging at banks or ATMs in Korea usually gives better rates than at home. T-Money and cards cover most transport and shopping; carry some cash for markets and small vendors.

## Currency and Travel

- **ATMs:** Many accept international cards; look for "Global ATM" or "International" stickers. Withdrawal limits and fees vary.
- **Cards:** Visa and Mastercard are widely accepted in cities. American Express less so.
- **Cash:** Useful for traditional markets, street food and small shops.

## ETFs and the Won

Currency ETFs that track the Korean won are investment products, not travel products. If you're researching them for investment purposes, check your local broker and the fund's prospectus. This guide focuses on practical travel money: bring a mix of card and cash, use ATMs for local currency, and enjoy your trip.`,
    tags: ["Money", "Currency", "Practical", "Investing"],
    authorSlug: "mina-park",
    updatedDate: "2026-03-10",
    contentType: "travel-tip",
  },
];

export const getTravelTipBySlug = (slug: string) => travelTips.find((t) => t.slug === slug);
export const getTravelTipsByAuthor = (authorSlug: string) =>
  travelTips.filter((t) => t.authorSlug === authorSlug);
