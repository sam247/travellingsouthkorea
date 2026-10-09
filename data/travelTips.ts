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
    image: "/images/blogs/subway/ks-kyung-XLGLgGcnkf8-unsplash.jpg",
    summary: "Everything you need to know about navigating Seoul's metro system — apps, etiquette and tips.",
    content: `**Quick summary:** Get a T-Money card, use Naver Map for directions, and avoid rush hour if you can. The subway is safe, clean and the fastest way to get around Seoul.

## Seoul's Subway Is Your Best Friend

Seoul's subway system is one of the best in the world. Clean, punctual, cheap and easy to navigate — even if you don't speak Korean. Here's everything you need to know. If you want the fastest overview version, use our [Seoul subway cheat sheet](/seoul-subway-a-cheat-sheet).

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
    slug: "seoul-subway-cheat-sheet",
    title: "Seoul Subway Cheat Sheet: How To Travel Quickly, Cheaply and Efficiently",
    image: "/images/blogs/subway/ks-kyung-XLGLgGcnkf8-unsplash.jpg",
    canonicalPath: "/seoul-subway-a-cheat-sheet",
    metaTitle: "Seoul Subway Cheat Sheet: The Fastest Way to Travel Around Seoul",
    metaDescription:
      "Use this Seoul subway cheat sheet to travel quickly, cheaply, and efficiently with map tips, fare basics, transfer advice, and traveler-friendly route planning.",
    summary:
      "A quick, traveller-friendly Seoul subway cheat sheet: fares, T-money basics, map tips, transfers, and the best neighbourhoods to reach by metro.",
    content: `Seoul’s subway is one of the best ways to move around the city because it is fast, affordable, and reliable. For travellers, it removes the stress of traffic and makes it easy to reach major neighbourhoods, shopping areas, and attractions without needing to rely on taxis.

This cheat sheet is designed to help visitors use the Seoul subway with confidence. If you are planning a trip to South Korea and want the quickest, cheapest way to get across the city, the subway is usually the smartest choice. For the longer, detailed version, see our full guide on [how to use the Seoul subway](/travel-tips/seoul-subway-guide).

![Seoul subway map](/images/blogs/subway/seoul_map.jpg)

## Why The Seoul Subway Is So Useful

The Seoul subway covers a huge part of the city and connects many of the places visitors actually want to see. Whether you are heading to [Myeongdong](/south-korea/seoul/guides/best-street-food-myeongdong), [Hongdae](/south-korea/seoul/guides/best-bars-hongdae), [Gangnam](/south-korea/seoul/guides/cafes-gangnam), Dongdaemun, or Jamsil, there is usually a direct or easy-transfer route.

It is especially useful if you want to save money and time. Compared with taxis, the subway is much cheaper, and compared with buses, it is often easier to follow for first-time visitors because routes are clearly marked and stations are numbered.

## How To Pay For The Subway

The easiest way to ride the Seoul subway is with a rechargeable transport card such as T-money. This makes entering and exiting stations much faster than buying a single ticket every time. If you want a full breakdown (where to buy, how to top up, refunds), use our [T-money card guide](/travel-tips/t-money-card-guide).

Single-use tickets are available too, but they are less convenient if you plan to make more than one or two journeys. For most travellers, a transport card is the simplest and most efficient option.

## How To Read The Subway Map

At first glance, the Seoul subway map can look intimidating because there are so many lines and intersections. The good news is that the system becomes much easier once you focus on three things: line colour, station number, and transfer point.

Each line has its own colour, which makes it easier to follow visually. Station numbers also help you confirm you are heading in the right direction, and transfer stations are clearly marked so you can change lines without guesswork.

## The Fastest Way To Use The Subway

The fastest subway journeys are usually the ones with the fewest transfers. If you can stay on one line, that is usually better than switching lines multiple times, even if the route looks slightly longer on the map.

It also helps to plan by neighbourhood rather than by exact station alone. Many of Seoul’s best-known areas are linked closely enough that one smart transfer can save a lot of time.

## Subway Transfer Tips

Transfers are a normal part of using the Seoul subway, and they are usually easy once you understand the signs. The most important rule is to stay inside the paid area until you are done with your journey, unless you actually want to exit the station.

When transferring, follow the coloured signs for your next line and pay attention to platform direction. A small amount of route planning before you leave your hotel can save a lot of confusion once you are underground.

## Budget Travel Tip

If you are trying to travel cheaply in Seoul, the subway is almost always the best option. The fare is low, the network is extensive, and the system is built for fast city movement.

This is especially useful for travellers staying several days in the city. If you use the subway for sightseeing, shopping, dining, and airport connections, the savings compared with taxis can be significant. For airport transfers, also see [how to get from Incheon Airport to Seoul](/travel-tips/incheon-airport-to-seoul) and the [AREX train schedule](/arex-train-schedule) for Express vs All Stop times. If you are budgeting in pounds, dollars, or euros, exchange rates matter too — see [Korean won currency ETFs: a traveller’s overview](/travel-tips/korean-won-etf-guide).

## Best Areas To Reach By Subway

Some of the easiest and most useful parts of Seoul to reach by subway include:

- Myeongdong for shopping and street food.
- Hongdae for nightlife, cafés, and younger energy.
- Gangnam for business, dining, and modern city life.
- Dongdaemun for fashion, markets, and late-night shopping.
- Jamsil for major landmarks, malls, and sports venues.

These areas are all visitor-friendly and make a strong base for first-time travellers who want to explore efficiently.

## How To Travel Faster

The best way to travel faster is to combine the subway map with a route planning app before you leave. That lets you check transfers, station exits, and journey times in advance.

You should also avoid peak commuting periods when possible, because trains can be crowded. If your schedule is flexible, travelling a little earlier or later can make the trip much more comfortable.

## Why The Seoul Subway Is Great For Tourists

For tourists, the subway is one of the easiest ways to build a flexible itinerary. You can visit multiple neighbourhoods in one day without worrying about traffic, parking, or unpredictable taxi costs.

It is also a good choice for travellers who want independence. Once you understand the map and the payment system, you can move around Seoul with very little effort.

## Seoul Subway FAQs

### What is the easiest way to use the Seoul subway?

The easiest way is to use a rechargeable transport card and follow the line colours, station numbers, and transfer signs.

### Is the Seoul subway cheap for tourists?

Yes, it is one of the cheapest and most efficient ways to travel around the city.

### Do I need a transport card for the Seoul subway?

You do not strictly need one, but a transport card is much faster and more convenient than using single-use tickets.

### Is the Seoul subway easy for first-time visitors?

Yes, once you understand the colour-coded lines and station numbers, it becomes very easy to use.

### What areas of Seoul are best reached by subway?

Popular areas like Myeongdong, Hongdae, Gangnam, Dongdaemun, and Jamsil are all easy to reach by subway.`,
    tags: ["Transport", "Subway", "Seoul", "Practical"],
    authorSlug: "james-jeong",
    updatedDate: "2026-05-18",
    contentType: "travel-tip",
  },
  {
    slug: "incheon-airport-to-seoul",
    title: "How To Get From Incheon Airport To Seoul",
    image: "/images/blogs/arex/seoul-airport-express-train-13.jpg",
    summary: "AREX, bus, taxi or KTX — the best ways to get from Incheon Airport to central Seoul.",
    content: `**Pro tip:** For most travellers, the AREX Express to Seoul Station is the best balance of speed and cost. Book nothing in advance — just buy at the station.

## Getting From Incheon To Seoul

Incheon International Airport (ICN) is about 60km west of central Seoul. Here are your options, ranked.

## AREX (Airport Railroad Express)

**Best for most travellers.** The Express train takes 43 minutes non-stop from Terminal 1 to Seoul Station (51 minutes from Terminal 2). The current adult fare is ₩13,000. Trains run about every 30–40 minutes.

The All Stop train takes about 59 minutes from Terminal 1 (66 minutes from Terminal 2) and costs around ₩4,750 with a T-Money card. T-Money works on All Stop; Express needs its own ticket.

For first and last trains, the full Express timetable, and which service to take, see the [AREX train schedule](/arex-train-schedule).

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
    updatedDate: "2026-09-07",
    contentType: "travel-tip",
  },
  {
    slug: "t-money-card-guide",
    title: "T-Money Card Guide",
    image: "/images/blogs/subway/ks-kyung-XLGLgGcnkf8-unsplash.jpg",
    summary: "How to buy, load and use Korea's essential transport card for subway, bus and taxis.",
    content: `**Quick summary:** Buy at any convenience store or airport, load ₩10,000–30,000 for a few days, and tap on every subway and bus. Refund leftover credit before you leave.

## What Is T-Money?

T-Money is Korea's rechargeable transport card. It works on subways, buses, some taxis and even convenience store purchases. It's the first thing you should buy when you arrive. It also works on the [AREX All Stop train](/arex-train-schedule) from Incheon Airport; the AREX Express needs a separate ticket.

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

If you have a compatible phone, you can use the T-Money app instead of a physical card. Works with NFC on most Android phones. iPhone support is limited.

If you are planning a bigger trip budget from abroad, it helps to understand how won strength can change costs over time — see [Korean won currency ETFs: a traveller’s overview](/travel-tips/korean-won-etf-guide).`,
    tags: ["Transport", "Money", "Practical"],
    authorSlug: "mina-park",
    updatedDate: "2026-02-25",
    contentType: "travel-tip",
  },
  {
    slug: "sim-cards-korea",
    title: "SIM Cards & WiFi In Korea",
    image: "/images/hero/hero-south-korea.jpg",
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
    slug: "south-korean-terms-of-endearment",
    title: "Korean Terms of Endearment: Jagiya, Yeobo, Aegiya and How to Flirt in Korean (2026)",
    image: "/images/blogs/south-korean-terms-of-endearment/hanbok-couple-gyeongbokgung.jpg",
    canonicalPath: "/south-korean-terms-of-endearment",
    metaTitle: "Korean Terms of Endearment: Jagiya, Yeobo & Flirting (2026)",
    metaDescription:
      "What jagiya, yeobo, aegiya, oppa and naekkeo really mean, who can say them, plus Korean flirting phrases, KakaoTalk texting slang and couple culture in 2026.",
    summary:
      "The Korean pet names couples actually use (jagiya, yeobo, aegiya, oppa and more), what they mean and when they sound odd, plus flirting phrases, KakaoTalk texting slang and Korea's couple anniversaries.",
    content: `Korean couples don't just say "babe". They have a whole vocabulary of pet names, a calendar of couple anniversaries and a set of texting habits that can make or break a new romance. If you've heard *jagiya* in a K-drama, been called *oppa* by a friend or wondered why your Korean date went quiet after reading your message, this guide is for you.

Below you'll find the Korean terms of endearment people actually use in 2026, what each one means, who can say it to whom, and the flirting phrases and dating etiquette that go with them. Every term comes with Hangul, a romanisation you can read out loud, and a note on when it would sound odd.

## Korean Terms of Endearment at a Glance

| Korean | Romanisation | Meaning | Who uses it |
| --- | --- | --- | --- |
| 자기야 | jagiya | honey, babe, darling | Dating or married couples |
| 자기 | jagi | the shorter, softer form of jagiya | Couples |
| 여보 | yeobo | honey, dear | Mostly married couples |
| 애기야 | aegiya | baby | Couples, and parents to small children |
| 내 사랑 | nae sarang | my love | Couples, often in messages |
| 공주님 | gongjunim | princess | Playful, usually to a girlfriend |
| 왕자님 | wangjanim | prince | Playful, usually to a boyfriend |
| 귀요미 | gwiyomi | cutie | Couples and close friends |
| 내꺼 | naekkeo | mine | Couples, playful and possessive |
| 오빠 | oppa | older brother | A woman to an older man she's close to, including a boyfriend |
| 누나 | nuna (noona) | older sister | A man to an older woman he's close to, including a girlfriend |
| 애인 | aein | sweetheart, partner | Describing your partner, not calling them |
| 여친 / 남친 | yeochin / namchin | girlfriend / boyfriend | Casual, everyday words |

![A couple in hanbok at Gyeongbokgung Palace in Seoul, one of the city's classic date spots](/images/blogs/south-korean-terms-of-endearment/hanbok-couple-gyeongbokgung.jpg)

A couple in hanbok at Gyeongbokgung Palace in Seoul, one of the city's classic date spots. Photo: Andamy via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Couple_waring_traditional_Korean_costumes_in_Gyeongbokgung,the_Seoul_palace_05.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## What Does Jagiya Mean?

**자기야 (jagiya)** is the most common thing Korean couples call each other. It translates best as "honey" or "babe". *Jagi* (자기) on its own literally means "oneself", so calling your partner jagi is a bit like saying they're a part of you. The *-ya* ending is the friendly way of calling someone's name.

You'll hear jagiya in almost every romantic K-drama, and couples use it for years. Some tips:

- **Use it with your partner only.** Calling a friend or a stranger jagiya sounds like flirting, or like a joke.
- **Jagi is softer.** Couples often switch between *jagi* and *jagiya* depending on the sentence, for example *jagi, mwohae?* (자기, 뭐해?, "babe, what are you doing?").
- **Couples of any gender use it.** It isn't tied to men or women.

## What Does Yeobo Mean?

**여보 (yeobo)** means "honey" or "dear", and it's the classic term between husbands and wives. Your Korean friends' parents almost certainly call each other yeobo. Younger couples who aren't married sometimes use it as a joke or a sign they're very serious, but on a first or second date it would sound like you're already picking out wedding rings.

A related word is **당신 (dangsin)**. Between spouses it's an affectionate "you" or "dear". Between strangers, though, dangsin can sound cold or even confrontational, so don't use it as a polite "you".

## What Does Aegiya Mean?

**애기야 (aegiya)** means "baby". *Aegi* is the everyday way of saying *agi* (아기), "baby", and the *-ya* is the same calling ending as in jagiya. Parents say it to small children, and couples say it to each other, often in a teasing, cute tone. If someone calls you aegiya in a sweet voice, that's usually *aegyo* (애교), the deliberately cute, childlike way of talking that many Korean couples use with each other.

## Oppa, Nuna, Hyeong and Eonni: The Age Words

Korean has different words for "older brother" and "older sister" depending on your own gender, and people use them for close friends and partners, not just family.

- **오빠 (oppa):** what a woman calls an older brother, an older male friend, or a boyfriend who's older than her. *Saranghae, oppa* (사랑해 오빠) is "I love you, oppa", a line you'll hear in plenty of K-pop songs and dramas.
- **누나 (nuna, often spelled noona):** what a man calls an older sister, an older female friend, or an older girlfriend. "Noona romance" (연상연하, *yeonsang-yeonha*) is the Korean term for relationships where the woman is older.
- **형 (hyeong, often spelled hyung):** what a man calls an older brother or older male friend.
- **언니 (eonni, often spelled unnie):** what a woman calls an older sister or older female friend. Women also use it for slightly older women in shops and restaurants.
- **동생 (dongsaeng):** a younger sibling or a younger friend, of either gender.

These words are about age, and age matters in Korea. That's why one of the first questions on a Korean date is often 몇 살이에요? (*myeot sarieyo?*, "How old are you?"). It isn't rude. It tells both of you which words and which level of politeness to use.

## Korean Words for Love and Dating

| Korean | Romanisation | Meaning |
| --- | --- | --- |
| 사랑해 / 사랑해요 | saranghae / saranghaeyo | I love you (casual / polite) |
| 좋아해 / 좋아해요 | joahae / joahaeyo | I like you (casual / polite) |
| 보고 싶어 | bogo sipeo | I miss you |
| 잘 자 | jal ja | Good night, sleep well |
| 사귀자 | sagwija | Let's go out (asking someone to be your partner) |
| 고백 | gobaek | A confession of feelings, the moment you ask someone out |
| 썸 | sseom | The flirty "something" stage before you're official |
| 썸남 / 썸녀 | sseomnam / sseomnyeo | The guy / the girl you're in a "some" with |
| 밀당 | mildang | Push and pull, playing hard to get |
| 꽁냥꽁냥 | kkongnyang-kkongnyang | Being lovey-dovey in public |
| 커플룩 | keopeul luk | Matching couple outfits |
| 커플링 | keopeul ring | Matching couple rings |

*Saranghae* is a big word. Many Koreans don't say it until they're properly a couple, so *joahae* ("I like you") is the usual way to confess feelings early on.

## How to Flirt in Korean: Phrases That Actually Work

Most first conversations will be in polite Korean (ending in *-yo*). Here are phrases that are friendly without being cheesy:

| Korean | Romanisation | Meaning |
| --- | --- | --- |
| 같이 커피 한잔 할래요? | gachi keopi hanjan hallaeyo? | Shall we get a coffee together? |
| 카톡 아이디 있어요? | katok aidi isseoyo? | Do you have a KakaoTalk ID? |
| 번호 알려 줄 수 있어요? | beonho allyeo jul su isseoyo? | Could you give me your number? |
| 이상형이 뭐예요? | isanghyeong-i mwoyeyo? | What's your ideal type? |
| 웃는 게 예뻐요 | unneun ge yeppeoyo | You have a pretty smile |
| 오늘 즐거웠어요 | oneul jeulgeowosseoyo | I had a great time today |
| 또 만나요 | tto mannayo | Let's meet again |
| 말 편하게 해도 돼요? | mal pyeonhage haedo dwaeyo? | Can we talk casually? |

That last line matters. Korean has polite speech (존댓말, *jondaenmal*) and casual speech (반말, *banmal*). When someone suggests dropping the formal endings and speaking banmal, it's a real step closer, so don't switch on your own before the other person agrees.

![Heart-shaped padlocks of the kind couples leave at N Seoul Tower on Namsan](/images/blogs/south-korean-terms-of-endearment/heart-padlocks-n-seoul-tower.jpg)

Heart-shaped padlocks of the kind couples leave at N Seoul Tower on Namsan. Photo: Republic of Korea (Korea.net) via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_romantic_hotspot,_N_Seoul_Tower_%286937546713%29.png), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/).

## Texting Your Korean Crush on KakaoTalk

Korean dating happens on KakaoTalk (카톡, *katok*), the messaging app almost everyone in Korea uses. You'll need a phone number to set it up, so see our [guide to Korean SIM cards](/travel-tips/sim-cards-korea) if you're visiting. The texting slang to know:

- **ㅋㅋㅋ (kkk):** laughing, like "haha". More ㅋ means funnier.
- **ㅎㅎ (hh):** a softer, friendlier laugh or smile.
- **ㅠㅠ:** crying eyes, used for "so sad" or "aww".
- **뭐해? (mwohae?):** "What are you doing?", the classic opener.
- **읽씹 (ilkssip):** being "left on read". In KakaoTalk, a little number 1 next to your message disappears once the other person has read it, so everyone knows when they've been read and ignored.
- **안읽씹 (an-ilkssip):** being ignored without the message even being opened.

Being left on read is taken personally in Korea, so a quick reply, even just "바빠서 나중에 연락할게" (*bappaseo najung-e yeollakhalge*, "I'm busy, I'll message you later"), goes a long way.

## Korean Couple Culture: Anniversaries and Romance Holidays

Once you're official, Korean couple culture kicks in.

- **Counting days, not months.** Couples celebrate their 100-day anniversary (백일, *baegil*), then 200 days, 300 days and 1,000 days, as well as yearly anniversaries.
- **Valentine's Day (14 February):** traditionally, women give chocolate to men.
- **White Day (14 March):** men return the favour with sweets and gifts.
- **Black Day (14 April):** singles who got nothing on either day eat *jjajangmyeon* (black-bean noodles) together.
- **Pepero Day (11 November):** people swap boxes of Pepero, the chocolate-dipped biscuit sticks, because the date 11.11 looks like four sticks.
- **Christmas Eve:** in Korea it's a couples' night out more than a family holiday, so restaurants and hotels book up.

![A Pepero Day display at a Korean convenience store, with a sign promoting a month of Pepero deals through November](/images/blogs/south-korean-terms-of-endearment/pepero-day-convenience-store.jpg)

A Pepero Day display at a Korean convenience store, with a sign promoting a month of Pepero deals through November. Photo: Saipiny via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pepero_day.jpg), [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

## Romantic Things to Do in Seoul as a Couple

- **Leave a love lock on Namsan.** The terraces around N Seoul Tower are covered in padlocks left by couples, often with names and dates written on them.
- **Wear hanbok to a palace.** Visitors wearing a complete hanbok get into Gyeongbokgung and Seoul's other royal palaces free, and rental shops near the palace gates make it easy. You need both a top (*jeogori*) and a skirt or trousers to qualify.
- **Picnic by the Han River.** On warm evenings, couples spread out mats in the riverside parks with fried chicken and beer (*chimaek*).
- **Cafe-hop.** Korea's [cafe culture](/culture/korean-cafe-culture) is built for long dates, from dessert cafes to themed spots.
- **Go out in Hongdae.** The university district is full of young couples, buskers and [bars](/south-korea/seoul/hongdae/category/bars). For the bigger picture, see our guide to [Korean nightlife culture](/culture/korean-nightlife-culture) and [Korean drinking culture](/culture/korean-drinking-culture).
- **For something cheekier,** adults can visit [Jeju Loveland](/jeju-loveland), Jeju's sculpture park of erotic art.

![A bunch of three love locks at N Seoul Tower, which the photographer captioned "relationships are complicated"](/images/blogs/south-korean-terms-of-endearment/love-locks-namsan-view.jpg)

A bunch of three love locks at N Seoul Tower, which the photographer captioned "relationships are complicated". Photo: hojusaram via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Relationships_are_complicated_%282527256358%29.jpg), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/).

## Etiquette: How Not to Get It Wrong

- **Don't use couple words on strangers.** Calling a bartender jagiya won't land the way it does in a K-drama.
- **Don't call your date ajumma or ajeossi.** These mean a middle-aged woman and man. They aren't terms of endearment.
- **Oppa only works if he's older.** If a younger man insists on being called oppa, it's a joke, not a rule.
- **Keep it polite at first.** Use *-yo* endings until you're invited to speak casually.
- **Public affection is mild.** Holding hands and matching outfits are normal; big public kisses still get looks, especially from older people.

## Korean Terms of Endearment FAQ

### What does jagiya mean in Korean?

Jagiya (자기야) means "honey", "babe" or "darling". It's the most common pet name between Korean couples, whether they're dating or married.

### What's the difference between jagiya and yeobo?

Both mean something like "honey". Jagiya is used by any couple. Yeobo (여보) is mostly used by married couples, so it sounds more serious.

### What does aegiya mean?

Aegiya (애기야) means "baby". Couples use it affectionately, and parents use it with small children.

### What does naekkeo mean?

Naekkeo (내꺼, also spelled naekko) means "mine". The standard spelling is 내 거. Couples use it playfully, as in *neon naekkeoya* (넌 내꺼야, "you're mine").

### What does aein mean?

Aein (애인) means "sweetheart" or "partner". It's a word for describing your boyfriend or girlfriend to other people, rather than something you call them to their face.

### Can a man call his girlfriend oppa?

No. Oppa is only used by women, toward older men. A man calls an older girlfriend nuna, and a younger one by her name or a pet name such as jagiya.

### How do you say "I love you" in Korean?

Saranghae (사랑해) is casual and saranghaeyo (사랑해요) is polite. Between partners, the casual form is normal.

## Photo Credits

Photos are from Wikimedia Commons under Creative Commons licences or CC0. Each was resized and cropped to a 16:9 frame.

- Hero image (a couple in hanbok at Gyeongbokgung Palace, Seoul): Andamy, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:Couple_waring_traditional_Korean_costumes_in_Gyeongbokgung,the_Seoul_palace_05.jpg)
- Heart-shaped padlocks at N Seoul Tower: Republic of Korea (Korea.net), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/), [source](https://commons.wikimedia.org/wiki/File:A_romantic_hotspot,_N_Seoul_Tower_%286937546713%29.png)
- A Pepero Day display at a Korean convenience store: Saipiny, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), [source](https://commons.wikimedia.org/wiki/File:Pepero_day.jpg)
- Three love locks at N Seoul Tower: hojusaram, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/), [source](https://commons.wikimedia.org/wiki/File:Relationships_are_complicated_%282527256358%29.jpg)`,
    tags: ["Culture", "Language", "Dating", "Relationships", "Seoul"],
    authorSlug: "mina-park",
    updatedDate: "2026-10-07",
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

Like soju, it's often poured for others and received with two hands. Sip rather than shoot — it's meant to be enjoyed with food.

If you're interested in other traditional Korean liquors, try [maeshil-ju](/what-is-maeshilju), a plum-based drink with a sweet-tart character that's widely available. For Korea's modern drinks scene, check out our guide to the [best craft breweries in South Korea](/breweries-in-south-korea) — from Seoul taprooms to coastal Busan brewpubs.`,
    tags: ["Drinks", "Traditional", "Food", "Culture"],
    authorSlug: "mina-park",
    updatedDate: "2026-03-10",
    contentType: "travel-tip",
  },
  {
    slug: "arex-train-schedule",
    title: "AREX Train Schedule: Incheon Airport to Seoul",
    image: "/images/blogs/arex/seoul-airport-express-train-13.jpg",
    canonicalPath: "/arex-train-schedule",
    metaTitle: "AREX Train Schedule: Express vs All Stop Timetable (Incheon to Seoul)",
    metaDescription:
      "AREX Express and All Stop train schedules from Incheon Airport to Seoul Station — first and last trains, journey times, fares, and which service to take.",
    summary:
      "AREX Express vs All Stop: official-style timetables, first and last trains, journey times, fares, and how to plan your Incheon Airport to Seoul transfer.",
    content: `If you're looking for the AREX train schedule, the Airport Railroad Express is the rail link from Incheon International Airport to Seoul Station. There are two services with different timetables: the **Express Train** (non-stop, reserved seat) and the **All Stop Train** (commuter-style, cheaper, more frequent).

Checked against the official [AREX Express timetable](https://www.arex.or.kr/express/info.do?menuNo=MN201503300000000002) in September 2026. Times can change — always confirm on station boards or the AREX site if your flight is close to the first or last train.

| | Express Train | All Stop Train |
| --- | --- | --- |
| Stops | Seoul Station, Incheon Airport T1, T2 only | All 14 AREX stations, including Hongdae and Gimpo Airport |
| Time from T1 | 43 minutes | About 59 minutes |
| Time from T2 | 51 minutes | About 66 minutes |
| Adult fare | ₩13,000 (child ₩9,500) | About ₩4,750 from T1 / ₩5,350 from T2 with a transport card |
| Frequency | About every 30–40 minutes | About every 6–12 minutes in the day |
| Payment | Separate Express ticket | T-Money / transit card or single-use ticket |
| First from airport (T2 / T1) | 05:15 / 05:23 | Earlier than Express — confirm on the station timetable |
| Last from airport (T2 / T1) | 22:40 / 22:48 | Later than Express, typically after 23:30 |

![Airport Railroad Express (AREX) at Incheon](/images/blogs/arex/big_file_9827.jpg)

## What is AREX?

AREX (Airport Railroad Express) is the airport railway between Incheon Airport and Seoul Station. It avoids road traffic and gives you a predictable journey into the city.

There are two services, with different signs at the station:

- **Express Train (orange)** — non-stop between the airport terminals and Seoul Station, with reserved seats and luggage space.
- **All Stop Train (blue)** — commuter train that stops at every station on the line. Think of it as the airport subway.

Follow orange signs for Express and blue signs for All Stop. Mixing them up is the most common first-day mistake.

![AREX route map: Express and All Stop](/images/blogs/arex/AREX_Route_Map-2.png)

## AREX Express Train schedule

The Express Train is the direct reserved-seat service. Official journey times are **43 minutes** from Terminal 1 and **51 minutes** from Terminal 2 to Seoul Station. Adult fare is **₩13,000** (child **₩9,500**), published on AREX as a discounted Express fare versus the higher normal fare.

You do not need to book days ahead. Buy at the AREX ticket machines or counter on B1 at Incheon Airport, or on B2 at Seoul Station. Online purchase is also available via the [AREX / Airport Railroad site](https://www.airportrailroad.com/). Seats are assigned, so popular departures can sell out closer to departure.

### Express first and last trains

From the official AREX Express timetable:

| Direction | First train | Last train |
| --- | --- | --- |
| Airport T2 → Seoul Station | 05:15 | 22:40 |
| Airport T1 → Seoul Station | 05:23 | 22:48 |
| Seoul Station → Airport (weekday) | 06:00 | 22:50 |
| Seoul Station → Airport (holiday) | 06:10 | 22:50 |

If you land after about 22:00, allow time for immigration, bags, and the walk to B1. Missing the last Express does not mean you are stuck — the All Stop train usually runs later.

![AREX Express Train at the platform](/images/blogs/arex/p1010629-2.jpg)

### Express timetable: airport to Seoul Station (weekdays)

Source: [AREX Express train times](https://www.arex.or.kr/express/info.do?menuNo=MN201503300000000002).

| Terminal 2 | Terminal 1 | Seoul Station |
| --- | --- | --- |
| 05:15 | 05:23 | 06:07 |
| 05:50 | 05:58 | 06:41 |
| 06:30 | 06:38 | 07:21 |
| 07:05 | 07:13 | 07:57 |
| 08:10 | 08:18 | 09:03 |
| 08:40 | 08:48 | 09:31 |
| 09:20 | 09:28 | 10:11 |
| 10:00 | 10:08 | 10:51 |
| 10:40 | 10:48 | 11:31 |
| 11:20 | 11:28 | 12:11 |
| 12:00 | 12:08 | 12:51 |
| 12:40 | 12:48 | 13:34 |
| 13:20 | 13:28 | 14:11 |
| 14:00 | 14:08 | 14:51 |
| 14:40 | 14:48 | 15:31 |
| 15:20 | 15:28 | 16:11 |
| 16:00 | 16:08 | 16:51 |
| 16:40 | 16:48 | 17:31 |
| 17:25 | 17:33 | 18:17 |
| 18:00 | 18:08 | 18:52 |
| 18:45 | 18:53 | 19:38 |
| 19:29 | 19:37 | 20:20 |
| 20:00 | 20:08 | 20:51 |
| 20:50 | 20:58 | 21:41 |
| 21:36 | 21:44 | 22:27 |
| 22:40 | 22:48 | 23:31 |

### Express timetable: Seoul Station to the airport (weekdays)

| Seoul Station | Terminal 1 | Terminal 2 |
| --- | --- | --- |
| 06:00 | 06:43 | 06:51 |
| 06:47 | 07:30 | 07:38 |
| 07:30 | 08:14 | 08:22 |
| 08:10 | 08:54 | 09:02 |
| 08:50 | 09:33 | 09:41 |
| 09:32 | 10:15 | 10:23 |
| 10:10 | 10:53 | 11:01 |
| 10:50 | 11:33 | 11:41 |
| 11:30 | 12:13 | 12:21 |
| 12:10 | 12:53 | 13:01 |
| 12:50 | 13:33 | 13:41 |
| 13:30 | 14:13 | 14:21 |
| 14:10 | 14:53 | 15:01 |
| 14:50 | 15:33 | 15:41 |
| 15:30 | 16:13 | 16:21 |
| 16:10 | 16:53 | 17:01 |
| 16:50 | 17:34 | 17:42 |
| 17:20 | 18:03 | 18:11 |
| 17:57 | 18:40 | 18:48 |
| 18:50 | 19:33 | 19:41 |
| 19:32 | 20:15 | 20:23 |
| 20:15 | 20:58 | 21:06 |
| 20:50 | 21:33 | 21:41 |
| 21:30 | 22:13 | 22:21 |
| 22:10 | 22:53 | 23:01 |
| 22:50 | 23:33 | 23:41 |

### Express holiday timetable notes

Airport → Seoul first and last trains are the same on holidays (T2 05:15 / 22:40, T1 05:23 / 22:48). From Seoul Station the first holiday departure is **06:10** instead of 06:00; the last is still **22:50**. Midday holiday times are similar to weekdays, with a slightly more even 40-minute pattern in the morning and evening. Use the official [weekday and holiday Express tables](https://www.arex.or.kr/express/info.do?menuNo=MN201503300000000002) the day you travel.

## AREX All Stop Train schedule

The All Stop Train (also called the commuter or 일반열차 service) is the cheaper, more frequent timetable. It stops at every station between Incheon Airport Terminal 2 and Seoul Station.

Official AREX journey times are about **59 minutes** from Terminal 1 and **66 minutes** from Terminal 2 to Seoul Station. With a transport card, the fare is typically about **₩4,750 from Terminal 1** and **₩5,350 from Terminal 2** to Seoul Station.

There is no reserved seat. Buy nothing extra if you already have a [T-Money card](/travel-tips/t-money-card-guide) — tap in and tap out like the Seoul subway.

![AREX All Stop Train](/images/blogs/arex/IMG_0168-300x225-1.jpg)

### All Stop first and last trains

AREX does not publish one short All Stop PDF the way it does for Express. First and last trains vary by station, and some late trains terminate at Geomam rather than the airport. Check the live [T1 station timetable](https://www.arex.or.kr/station/trainTime.do?stnCd=100&menuNo=MN201503300000000014&tab=0) or [Seoul Station timetable](https://www.arex.or.kr/station/trainTime.do?stnCd=010&menuNo=MN201503300000000012&tab=0) on the day.

Typical pattern for travellers:

| From | First trains (typical) | Last trains toward the far end (typical) |
| --- | --- | --- |
| Incheon Airport toward Seoul | Around 05:15 from the terminals | After 23:30 — later than the last Express |
| Seoul Station toward the airport | Around 05:20 | Around 23:40 to Terminal 2; a later train may end at Geomam |

All Stop is the service to use if you miss the last Express, as long as you still catch the last commuter train to your station. After that, you need an airport bus or taxi.

### All Stop stations (airport to Seoul)

Useful stops for visitors, in order from the airport:

- **Incheon Airport T2 / T1** — start of the line; AREX is on B1 in both terminals.
- **Gimpo Airport** — transfer for Gimpo domestic/international flights and subway Lines 5 and 9.
- **Digital Media City** — transfer to Line 6.
- **Hongik University (Hongdae)** — the stop most travellers want for Hongdae, Yeonnam, and nearby hostels. Do not ride Express to Seoul Station and backtrack.
- **Gongdeok** — transfer to Lines 5 and 6, and the Gyeongui–Jungang Line.
- **Seoul Station** — transfer to Lines 1 and 4, KTX, and the rest of the subway.

The full All Stop list also includes Airport Cargo Terminal, Unseo, Yeongjong, Cheongna International City, Geomam, Gyeyang, and Magongnaru.

## Which AREX train should you take?

Match the timetable to your hotel, not to the word “Seoul”.

- **Choose Express** if you want a reserved seat, you are staying near Seoul Station or Myeongdong, or you are connecting onward from Seoul Station.
- **Choose All Stop** if you want the lower fare, you are staying in Hongdae, or you arrive after the last Express.
- **Skip both** if you land after All Stop finishes, or your hotel is far from the AREX line — then an airport bus or taxi is usually simpler. See [how to get from Incheon Airport to Seoul](/travel-tips/incheon-airport-to-seoul).

![Choosing Express or All Stop for your hotel](/images/blogs/arex/cc.jpg)

## How long does AREX take?

Door-to-platform time matters as much as the published ride:

- **Express** — 43 minutes from T1, 51 minutes from T2, plus ticket purchase and the walk to the platform.
- **All Stop** — about 59 minutes from T1, 66 minutes from T2, plus waiting (usually shorter than Express because trains are more frequent).
- **Hongdae on All Stop** — shorter than riding all the way to Seoul Station.

If an All Stop train is at the platform and the next Express is 25 minutes away, All Stop can be the faster door-to-door choice.

## Tickets, T-Money, and where to board

- **Express:** dedicated ticket, assigned seat. T-Money does not replace the Express ticket. Follow orange Express signs.
- **All Stop:** tap a T-Money, Cashbee, or other compatible card, or buy a single-use ticket. Follow blue All Stop signs.
- **Airport:** Transportation Center, B1, both terminals. [Incheon Airport’s railroad guide](https://airport.kr/ap_en/1512/subview.do) points to ticket machines and the AREX hotline 1599-7788.
- **Seoul Station:** Express facilities are on B2; All Stop platforms are deeper in the AREX station. Allow extra walking time with luggage.
- **City Airport Terminal:** at Seoul Station, Express passengers can use downtown check-in / baggage drop during published hours (typically 05:20–19:00, airline-dependent). Details are on the [AREX City Airport Terminal page](https://www.arex.or.kr/content.do?menuNo=MN201503300000000026).

## Best time to use AREX

AREX is ideal when you land during normal operating hours, want to avoid taxi traffic, and your hotel is on or near the AREX line. The All Stop train can get crowded in Seoul rush hours (roughly 07:00–09:00 and 18:00–19:30). Express is calmer with luggage.

If you arrive very late, or your accommodation is in Gangnam, Jamsil, or another area that still needs a long subway ride after Seoul Station, compare an airport bus before you commit.

![Seoul Station AREX](/images/blogs/arex/AREX-Seoul-Station-2.jpeg)

## Official AREX schedule sources

- [AREX Express timetable (weekday and holiday)](https://www.arex.or.kr/express/info.do?menuNo=MN201503300000000002)
- [AREX homepage and live train lookup](https://www.arex.or.kr/)
- [Incheon Airport — Airport Railroad guide](https://airport.kr/ap_en/1512/subview.do)
- AREX customer line: 1599-7788

## FAQs about the AREX train schedule

### Is AREX running every day?

Yes. Express and All Stop both run daily, including weekends and public holidays. Express times differ slightly on holidays, mainly the first departure from Seoul Station (06:10 instead of 06:00).

### What is the AREX Express schedule from Incheon Airport?

On the official timetable, the first Express leaves Terminal 2 at 05:15 and Terminal 1 at 05:23. The last Express leaves Terminal 2 at 22:40 and Terminal 1 at 22:48. Trains run about every 30–40 minutes. The full list is in the Express timetable above.

### What is the AREX All Stop train schedule?

All Stop is the frequent commuter timetable, not a short reserved-seat list. Trains typically start around 05:15–05:20 and continue later than Express, with last airport-bound trains after 23:30 depending on station. Confirm first and last times on the official AREX station timetable, because some late trains do not run all the way to Terminal 2.

### Is the Express Train faster than the All Stop Train?

Yes on the rails: 43 vs about 59 minutes from Terminal 1 to Seoul Station. All Stop can still win door-to-door if you would otherwise wait a long time for Express, or if you are getting off at Hongdae.

### Can I use a T-Money card on AREX?

On All Stop, yes. On Express, no — you need an Express ticket. See our [T-Money card guide](/travel-tips/t-money-card-guide) for buying and topping up at the airport.

### Do I need to book AREX in advance?

No. Buy Express on the day at the station or online shortly before travel. All Stop needs no reservation.

### Which AREX train should I take to Hongdae?

Take the **All Stop** train and get off at Hongik University Station. Express does not stop in Hongdae.

### What if my flight lands after the last Express?

Use All Stop if it is still running to your station. After the last All Stop, use an airport bus or taxi. Check station boards before you leave arrivals — immigration time is unpredictable.

### How do I get from Incheon Airport to Seoul if AREX is not right for me?

Compare buses, taxis, and KTX in [how to get from Incheon Airport to Seoul](/travel-tips/incheon-airport-to-seoul). Once you are in the city, the [Seoul subway cheat sheet](/seoul-subway-a-cheat-sheet) covers transfers.

## Related tips

- [How to get from Incheon Airport to Seoul](/travel-tips/incheon-airport-to-seoul) — AREX vs bus vs taxi.
- [Seoul subway cheat sheet](/seoul-subway-a-cheat-sheet) — fares, transfers, and how to move around after you arrive.
- [T-Money card guide](/travel-tips/t-money-card-guide) — the card that works on All Stop, subway, and buses.`,
    tags: ["Transport", "AREX", "Airport", "Seoul", "Practical"],
    authorSlug: "james-jeong",
    updatedDate: "2026-09-07",
    contentType: "travel-tip",
  },
  {
    slug: "buying-bedding-in-south-korea",
    title: "Buying Bedding in South Korea: Best Places to Shop for Quilts, Sheets, and Blankets",
    image: "/images/blogs/bedding/19023.jpg.webp",
    canonicalPath: "/buying-bedding-in-south-korea",
    summary:
      "Where to buy Korean quilts, sheets, and blankets — from Gwangjang Market and department stores to discount chains and online delivery.",
    content: `If you're buying bedding in South Korea, you'll quickly notice that there are several good options depending on your budget and how long you plan to stay. Some travellers want a warm Korean quilt, while others need sheets, pillowcases, or a full bed set for a long-term stay.

The good news is that South Korea has everything from traditional market bedding shops to department stores and online retailers. If you want the best mix of price, variety, and convenience, it helps to know where to look before you start shopping.

![Bedding and quilts in a Korean shop](/images/blogs/bedding/102983.jpg.webp)

## Why Korean bedding is popular

Korean bedding is often bought for its comfort, warmth, and practicality. Many shoppers look for quilted blankets, microfiber comforters, and lightweight summer bedding depending on the season.

It is also popular because you can often see and feel the material in person before buying. That makes local markets and physical stores appealing, especially if you want to compare fabrics, thickness, and size before you commit.

![Korean bedding fabrics and displays](/images/blogs/bedding/90813.jpg.webp)

## Best places to buy bedding in South Korea

### Gwangjang Market

Gwangjang Market is one of the best-known places to buy bedding in Seoul. It is especially popular for Korean quilts and traditional-style bedding shops, and many visitors come here specifically to compare prices and designs.

This is a strong choice if you want:

- a wide selection,
- good value,
- and the chance to inspect the bedding before buying.

The market is especially useful if you want a Korean-style quilt set rather than just standard sheets. Many shops there sell bedding at competitive prices, and some stores are well known among both locals and tourists.

### Department stores

If you want a more premium shopping experience, department stores are a reliable option. They usually offer higher-end bedding, cleaner displays, and easier browsing if you don't want to haggle or compare multiple market stalls.

This is a better fit if you want:

- branded bedding,
- modern sheet sets,
- premium materials,
- and a more comfortable shopping environment.

### Large discount stores

Big-box stores and hypermarkets are often a practical choice for people staying in South Korea longer term. You can usually find basic bedding items such as sheets, blankets, and pillowcases at reasonable prices.

These stores are useful if you want:

- everyday bedding,
- lower prices,
- and quick one-stop shopping.

### Online marketplaces

Online shopping is often the easiest and cheapest way to buy bedding in South Korea if you already know what you want. It is especially useful for people who want delivery straight to their home or accommodation.

This option works well for:

- long-term residents,
- students,
- people buying a full bedding set,
- and anyone who wants convenience over browsing in person.

## Is Gwangjang Market worth it?

Yes, if you want Korean quilts or want to shop in person. Gwangjang Market is one of the most famous bedding shopping spots in Seoul and is often recommended for visitors who want to compare quality, feel the fabric, and buy something locally made or locally sold.

It is less ideal if you only want basic bed sheets or if you prefer a fast, low-effort purchase. In that case, online shopping or a large retail store may be easier.

## What to look for when buying bedding

Before buying bedding in South Korea, check:

- mattress size compatibility,
- material type,
- seasonality,
- washing instructions,
- and whether the set includes pillowcases or just the quilt.

Korean bedding sizes may not always match what you're used to in the UK or other countries, so it's worth checking dimensions carefully before you buy.

## Buying bedding for short stays vs long stays

If you're in South Korea for a short visit, you probably won't need to buy much beyond a quilt or blanket. But if you're staying for work, study, or a longer trip, it may make sense to buy a full bedding set.

### Short stay

- One quilt or blanket.
- Possibly a pillow.
- Focus on portability and easy packing.

### Long stay

- Full bedding set.
- Sheets, pillowcases, and quilt.
- Better to check size and delivery options.

## Tips for buying bedding in Seoul

- Compare several stores before deciding.
- Ask whether the set includes all items shown.
- Check if the shop can pack items for travel.
- Confirm the size if you're buying for a western-style bed.
- Consider delivery if you are buying a full set.

## FAQ

### Where is the best place to buy bedding in South Korea?

Gwangjang Market is one of the most famous places in Seoul, but department stores, discount stores, and online shops are also good depending on your budget and needs.

### Is bedding in South Korea expensive?

Not necessarily. You can find affordable bedding in markets and large retail stores, while department stores usually sell more premium options.

### Can tourists buy bedding in Seoul?

Yes. Many tourists buy Korean quilts and bedding in Seoul, especially from markets like Gwangjang Market.

### What kind of bedding is popular in Korea?

Korean quilts, microfiber blankets, and seasonal bedding are especially popular.

## Related tips

- [AREX train schedule: Incheon Airport to Seoul](/arex-train-schedule) — Airport Railroad from Incheon into central Seoul.
- [Top PC bang internet cafes in Seoul for gaming](/top-pc-bang-internet-cafes-in-seoul-for-gaming) — gaming culture and late-night Seoul.`,
    tags: ["Shopping", "Seoul", "Practical", "Home"],
    authorSlug: "mina-park",
    updatedDate: "2026-03-28",
    contentType: "travel-tip",
  },
  {
    slug: "top-pc-bang-internet-cafes-in-seoul-for-gaming",
    title: "Top PC Bang Internet Cafes in Seoul for Gaming",
    image: "/images/blogs/pcbang/Korean-PC-Bang-1028x685.jpg",
    canonicalPath: "/top-pc-bang-internet-cafes-in-seoul-for-gaming",
    summary:
      "Where to find PC bangs in Seoul — Hongdae, Gangnam, central Seoul — plus pricing, what to expect, and tips for visitors and gamers.",
    content: `If you love gaming and you're spending time in Seoul, visiting a PC bang should be high on your list. These Korean gaming internet cafes are a huge part of local culture, and they offer far more than just a place to sit at a computer. With powerful rigs, fast internet, comfort-focused seating, and a social atmosphere, PC bangs are one of the best ways to experience modern Seoul after dark.

Whether you're a casual traveller who wants to see what all the hype is about or a serious gamer looking for a top-tier setup, Seoul has plenty of PC bangs to choose from. Some are sleek, premium esports lounges with cutting-edge hardware. Others are more traditional neighbourhood spots where students and local players spend hours grinding ranked matches. Either way, they offer a fun, memorable, and very Korean experience.

![PC bang interior in Korea](/images/blogs/pcbang/Korean.culture-PC.bang-01.jpg)

## What is a PC bang?

A PC bang is a Korean internet cafe built primarily for gaming. The word "bang" means room, so the term is often translated as "PC room." Unlike old-style internet cafes that were mainly used for browsing, emailing, or printing, PC bangs are designed for gaming first.

Inside, you'll usually find high-performance PCs, large monitors, gaming chairs, mechanical keyboards, headsets, and fast connections. Many venues also sell snacks, drinks, and instant meals, which means players can stay for long sessions without leaving. In Korea, PC bangs are part of everyday gaming life, not just something for tourists to try once.

## Why Seoul is the best place to try one

Seoul is one of the best cities in the world to experience PC bang culture. The city has a massive gaming community, and that means the venues are often cleaner, better equipped, and more polished than many visitors expect.

You'll find PC bangs in student districts, business areas, nightlife zones, and residential neighbourhoods. Some are casual and affordable, while others are high-end and built almost like esports lounges. That variety makes Seoul a great place to try different styles depending on your budget and gaming preferences.

![Gaming PCs at a Seoul PC bang](/images/blogs/pcbang/PC-Bang_1920.jpg.webp)

## Best areas in Seoul for PC bangs

### Hongdae

Hongdae is one of the best areas for first-time visitors who want a lively, youth-focused atmosphere. The district is known for students, nightlife, and a creative crowd, so it naturally has a lot of gaming cafes.

A good area to look around is near Hongik University Station, especially on the streets between the station and the main nightlife zones. PC bangs here are usually easy to access, open late, and popular with younger players. If you want a place that feels energetic and local without being too intimidating, Hongdae is a strong choice.

### Gangnam

Gangnam is the place to go if you want a more polished or premium experience. Many PC bangs here are sleek, modern, and equipped with higher-end hardware.

Look around Gangnam Station, Yeoksam, and Seolleung for gaming cafes that feel more upscale. This area is a good fit for gamers who care about performance and comfort. If you're looking for a stylish venue that feels a little more premium, Gangnam is worth checking out.

### Myeongdong and City Hall

If you're sightseeing and want to fit in a quick gaming session, central Seoul is convenient. You may not find as many gaming-focused venues as in Hongdae or Gangnam, but you will find practical options near major tourist and transport hubs.

Try the area around Myeongdong Station, Euljiro 1-ga, or City Hall Station if you want something central. This can be a good compromise if you want to visit a PC bang without travelling far out of your way.

### Jamsil and residential areas

Neighbourhood PC bangs in more residential parts of Seoul are often more affordable and less crowded. These are a good choice if you want a more local feel or if you plan to stay for longer.

Look near Jamsil Station or around quieter neighbourhood streets away from the major shopping zones. They may not always have the flashiest interiors, but they can offer a more authentic everyday gaming atmosphere.

## Well-known PC bang spots and areas to try

If you want to be more specific, these are some of the most useful places to start looking:

- Hongik University Station area for lively, student-heavy PC bangs.
- Gangnam Station area for premium or newer gaming cafes.
- Myeongdong area for convenience while sightseeing.
- Jamsil Station area for a more local neighbourhood feel.
- Sinchon area for another student-friendly gaming district.
- Yeoksam and Seolleung for business-district PC bangs that often have a cleaner, more professional feel.

Even if you don't know the exact venue name before you go, these districts are reliable places to find a good PC bang.

## What to expect inside a PC bang

Most PC bangs in Seoul have a similar basic setup, but the quality can vary quite a bit. At minimum, you can expect a fast gaming PC, a comfortable chair, a monitor with a high refresh rate, and stable internet.

Many venues go further by offering:

- mechanical keyboards,
- gaming mice,
- headsets,
- snack bars,
- drinks and instant noodles,
- private booths,
- and even sleeping-style seating in some premium spots.

The overall atmosphere is usually focused and quiet. Some players go for a few quick matches, while others stay for several hours. It's a very social environment, but not usually loud in the way a cafe or bar might be.

## How pricing usually works

Most PC bangs charge by the hour. Some venues may offer package deals or lower prices during off-peak times, but hourly billing is the standard.

Pricing usually depends on:

- location,
- equipment quality,
- whether you choose a standard or premium seat,
- and how busy the venue is.

For visitors, this makes PC bangs a relatively affordable entertainment option. You can go for a short session just to try the experience, or stay longer if you want a proper gaming night.

## Best PC bang experiences in Seoul

There isn't just one "best" PC bang for everyone. The right choice depends on what kind of experience you want.

### Best for first-time visitors

If this is your first time in a PC bang, choose a venue in Hongdae, Myeongdong, or near Gangnam Station. These locations are usually easy to find, approachable, and well suited to visitors.

### Best for serious gamers

If you care most about performance, look for premium esports-style PC bangs in Gangnam, Yeoksam, or Seolleung. These often have higher-end rigs, more comfortable seating, and a stronger competitive atmosphere.

### Best for budget travellers

A standard neighbourhood PC bang in Sinchon, Jamsil, or outside the main tourist strips is usually the best value. These venues are often cheaper and still offer everything you need for a solid gaming session.

### Best for the full Korean experience

If you want the most authentic feel, spend time in a busy local PC bang around Hongik University Station or Sinchon where regular players go after school, work, or dinner. That is where the culture really comes alive.

## Games you'll often see in PC bangs

While the game selection changes from venue to venue, you'll often see popular online multiplayer titles, competitive shooters, and battle arena games. Many PC bangs are set up specifically for games that benefit from fast reaction times and good teamwork.

You may also see players using PC bangs for:

- ranked play,
- team matches,
- chat and social gaming,
- and long sessions with friends.

This makes the experience feel more like a gaming hub than a simple internet cafe.

## Tips before you visit

If you're planning to go to a PC bang in Seoul, a few simple tips can make things easier:

- Bring ID if the venue requires age verification.
- Check whether the venue has English-friendly instructions.
- Decide whether you want a standard seat or a premium setup.
- Be prepared to log into your own game accounts.
- Check the location so you're not stuck far from a subway line late at night.

If you're not a frequent gamer, don't worry too much. Most PC bangs are straightforward once you understand the basics, and staff in busier areas are often used to helping visitors.

## Are PC bangs worth visiting?

Yes, especially if you want to experience something uniquely Korean. A PC bang is not just a gaming spot; it's part of the social fabric of modern Seoul.

For travellers, it's one of the easiest ways to try local gaming culture without needing a full night out or a big budget. For gamers, it's a chance to play in a well-equipped environment that is taken seriously by the people who use it every day.

## FAQ

### What is a PC bang in Korea?

A PC bang is a Korean gaming internet cafe with high-performance computers, fast internet, and a focus on online gaming.

### Are PC bangs expensive in Seoul?

Usually not. Most charge by the hour, and many are affordable for short visits.

### Can tourists use PC bangs?

Yes. Tourists can usually use them without much trouble, though some games or accounts may require extra setup.

### Which area is best for PC bangs in Seoul?

Hongdae is one of the best areas for visitors, while Gangnam is a better choice for a more premium experience.

### Do PC bangs sell food?

Many do. Snacks, drinks, and simple meals are common, which is part of why people stay for long sessions.

## Final thoughts

If you're looking for something fun, local, and a little different to do in Seoul, visiting a PC bang is an easy win. Whether you choose a premium esports lounge in Gangnam, a lively student spot in Hongdae, or a quieter neighbourhood gaming room in Jamsil or Sinchon, you'll get a real taste of Korean gaming culture.

For gamers, it's one of the most memorable things you can do in the city. For curious visitors, it's a great way to see how deeply gaming is woven into everyday life in South Korea.

## Related tips

- [AREX train schedule: Incheon Airport to Seoul](/arex-train-schedule) — get from the airport into central Seoul.
- [Buying bedding in South Korea](/buying-bedding-in-south-korea) — quilts and sheets if you're settling in for a longer stay.
- [Best craft breweries in South Korea](/breweries-in-south-korea) — taprooms, sours, and IPAs across Seoul, Busan, and beyond.`,
    tags: ["Gaming", "PC Bang", "Seoul", "Culture", "Nightlife"],
    authorSlug: "james-jeong",
    updatedDate: "2026-03-28",
    contentType: "travel-tip",
  },
  {
    slug: "korean-won-etf-guide",
    title: "Korean Won Currency ETFs: A Traveller's Overview",
    image: getTravelTipImagePath("korean-won-etf-guide"),
    supportingImages: supportingImages("korean-won-etf-guide"),
    summary: "What travellers should know about the Korean won, exchange rates and currency-focused ETFs.",
    content: `**Quick summary:** Korean won strength changes what your South Korea trip costs in real terms. Currency ETFs are mainly for investors, but the exchange-rate lesson is useful for travellers budgeting from abroad.

If you are planning a trip to South Korea, the Korean won is one of the most important things to understand before you go. Even if you never buy an investment product in your life, the strength or weakness of the won can affect everything from hotel prices and restaurant bills to how far your budget stretches once you land in Seoul, Busan, Jeju, or beyond.

That is where Korean won currency ETFs enter the conversation. These funds are not travel products in the usual sense, but they can help investors, expats, and frequent visitors understand how currency movements affect the real cost of South Korea. For travellers, they are best thought of as a background concept rather than something to actively buy for a holiday. Still, if you spend time researching South Korea travel costs, exchange rates, or long-stay budgeting, it helps to know what these funds are, how they work, and why they sometimes matter.

In this guide, we will break down Korean won currency ETFs in plain English, explain the difference between hedged and unhedged exposure, and show why the won’s movement can influence your travel budget. We will also look at the types of ETFs most commonly used for Korea exposure, what they mean for travellers, and when they are relevant to anyone planning a trip.

## What is the Korean won?

The Korean won is the official currency of South Korea. It is the money you will use for almost every everyday purchase, whether you are paying for street food in Seoul, a taxi from Incheon Airport, or a boutique hotel in Busan. The won is usually written as KRW, and in markets it is often referenced against major currencies such as the US dollar, British pound, or euro.

For travellers, the most important thing to understand is not the technical structure of the currency, but the way exchange rates change. A stronger won means your pounds, dollars, or euros buy less in South Korea. A weaker won means your money goes further. That difference can have a real effect on the total cost of a trip, especially if you are staying for more than a few days or visiting during a period of higher inflation, higher hotel rates, or a volatile exchange market.

For SEO purposes, this is an important distinction too. Searchers looking into “Korean won currency ETFs” are often not just investors. Some are travellers, digital nomads, or people preparing for long-term stays who want to understand how currency risk affects their spending.

If you are working out day-to-day spending in Korea, start with practical basics like the [T-Money card guide](/travel-tips/t-money-card-guide) and the [Seoul subway cheat sheet](/seoul-subway-a-cheat-sheet). This article focuses on the bigger picture: how the won’s strength can shift your overall trip budget.

## What is a Korean won currency ETF?

A currency ETF is an exchange-traded fund that gives investors exposure to a currency or to assets affected by that currency. In the case of Korea, most products marketed around the country are not pure won funds in the strictest sense. Instead, they are usually Korea equity ETFs that carry exposure to the won through the underlying holdings and their valuation in local currency.

That matters because there are two broad ways currency risk can show up in an ETF:

- Unhedged exposure, where the investor experiences both the market return and the currency movement
- Hedged exposure, where the fund tries to reduce or remove the impact of exchange-rate changes

In simple terms, if you buy an unhedged Korea ETF and the won rises against your home currency, your returns may improve. If the won falls, your returns may suffer. A hedged fund tries to keep the currency movement from affecting performance as much, which can make returns smoother, but also changes the overall profile of the investment.

For travellers, the practical lesson is clear: exchange rates matter. Whether you are buying currency directly, budgeting for a trip, or investing in a Korea-linked fund, you are dealing with the same basic force — the relative value of money over time.

## Why travellers should pay attention to the won

Even if you have no interest in ETFs, the won still matters if you are going to South Korea. Exchange rates can alter the real cost of your itinerary in several ways.

First, they affect your daily spending power. A restaurant meal that feels reasonable one month may feel noticeably more expensive the next if the won strengthens. Second, they affect bigger travel costs such as hotels, domestic flights, tours, and private transfers. Third, they can matter for longer stays, including working holidays, study trips, family visits, and remote-working stays where you are spending money locally for weeks or months.

For UK travellers in particular, this can be important because the pound-to-won exchange rate is not fixed. It moves constantly, meaning the same hotel in Myeongdong or the same guesthouse in Gyeongju may cost more or less in sterling terms depending on when you book and when you pay. If you are researching a future trip, it is worth checking whether the won has been trending stronger or weaker relative to your home currency before finalising your budget.

That is where the ETF conversation becomes useful. Currency ETFs are a way investors try to manage or profit from these kinds of moves, but for travellers they are more of a learning tool. They show that currency volatility is real, and that travel pricing is not static.

## Hedged vs unhedged exposure

One of the most important concepts to understand is the difference between hedged and unhedged exposure. This is where a lot of people get confused.

An unhedged Korea ETF leaves currency risk in place. If the won strengthens, that can boost performance for investors whose base currency is weaker than the won. If the won weakens, it can drag performance down. This makes unhedged funds more sensitive to exchange-rate movements, which can increase volatility.

A hedged ETF uses financial contracts to reduce the impact of currency swings. The goal is not to eliminate all risk, but to focus more on the underlying market rather than exchange-rate changes. For someone who wants to invest in Korean companies without being too exposed to the won’s direction, that can be useful.

For travellers, the same idea applies in a different way. If you are booking a trip months in advance, you are naturally exposed to currency swings unless you lock in your spending in some way. If the won becomes more expensive before you travel, your budget gets tighter. If it weakens, your money goes further. In that sense, hedging is just a more technical version of the question every traveller asks: should I buy now or wait?

## Are there pure Korean won ETFs?

This is where search intent gets a little messy. Many people search for Korean won ETFs expecting a direct, pure currency product. In reality, most of the available products linked to Korea are broader equity funds rather than simple “won trackers”.

That means the ETF may include large South Korean companies rather than just representing the currency itself. So if someone wants to “bet on the won,” the fund may not behave the way they expect. It may rise or fall because of stock-market performance, company earnings, geopolitical news, global semiconductor demand, or broader Asian market sentiment, not just because of the exchange rate.

This is why article structure matters for SEO. If you are targeting a travel audience, it is best to make the distinction clearly:

- If you are a traveller, the won matters as a spending currency
- If you are an investor, ETF structure matters because it changes your exposure
- If you are both, you need to understand how currency and market risk interact

That clarity helps users and also helps search engines understand the purpose of the page.

## How currency moves affect a South Korea trip

Let’s make this practical.

Imagine you are planning a 10-day trip to Seoul and Busan. You have a budget of £1,500 for accommodation, food, transport, and activities. If the won weakens against the pound between the moment you research the trip and the moment you pay for everything, your budget may stretch further than expected. You might be able to afford a better hotel, more dining out, or extra day trips.

If the won strengthens, the opposite happens. The same hotel that looked affordable six months ago may now take a bigger slice of your budget. Your coffee, metro rides, and restaurant meals might still seem reasonable individually, but over the course of a trip the change adds up.

That is why many seasoned travellers monitor exchange rates alongside airline prices and accommodation deals. It is not just a finance habit; it is a travel budget habit. A currency ETF does not solve that problem, but it does mirror the same underlying principle: if a currency moves, the value of money changes.

## Examples of Korea-related ETFs

Most funds linked to South Korea are equity ETFs rather than pure currency products. Popular examples include broad South Korea funds that hold major listed companies and may carry indirect currency exposure. These types of funds are often used by investors who want to access the Korean market through a single listed product.

Some funds are unhedged, which means investors experience the full impact of the won’s movement. Others use currency hedging to reduce that effect. The most important thing to remember is that a fund’s name does not always tell you whether currency risk is included. You need to look at the fund’s structure, holdings, and hedging policy.

For a travel website, this section should stay simple. You do not need to turn the article into a fund comparison page. Instead, explain that Korea-related ETFs exist, but most are aimed at investors, not travellers. Then move back to what the reader actually cares about: what the won means for spending in South Korea.

## When a traveller might actually care about ETFs

There are a few situations where a traveller may pay more attention to Korean won ETFs than usual.

One is if they are a frequent visitor to South Korea and regularly move money between currencies. Another is if they are living there temporarily and want to understand the currency environment more deeply. A third is if they are financially curious and want to understand how exchange-rate risk works before making a major trip or relocation.

For most people, though, buying an ETF is not necessary. A better use of time is usually to:

- Track the exchange rate before booking
- Compare booking dates to see whether the currency has moved
- Decide whether to prepay some expenses
- Keep a small buffer in the budget for currency swings
- Use a debit or credit card with low foreign exchange fees

That is much more relevant to the average traveller than trying to build an ETF position around a holiday.

## How to budget for won movements

If your trip is several months away, it is smart to budget with a margin of safety. Exchange rates can change quickly, and even small shifts can have a meaningful effect on a long stay or a higher-end itinerary.

A simple approach is to set a base budget using the current rate, then add a 5 to 10 percent cushion for currency movement and price changes. That way, if the won strengthens, you are not caught short. If it weakens, you will have extra room to spend.

This is especially useful if you are booking accommodation in advance or planning expensive experiences such as private tours, domestic flights, or specialist activities. You cannot predict the won perfectly, but you can avoid being surprised by it.

## SEO-focused article angle

If you are publishing this on travellingsouthkorea.com, the article should sit somewhere between travel finance and destination planning. That gives it a broader audience than a pure investing post and makes it more useful for travellers who want practical budgeting guidance.

Strong supporting keywords could include:

- Korean won exchange rate
- won to pound travel budget
- South Korea travel costs
- Korean won forecast for travellers
- currency exchange South Korea
- hedged vs unhedged ETF
- South Korea money tips

A good internal linking strategy would point readers to related travel pages such as the [Seoul subway cheat sheet](/seoul-subway-a-cheat-sheet), the [T-Money card guide](/travel-tips/t-money-card-guide), and airport arrival advice like [how to get from Incheon Airport to Seoul](/travel-tips/incheon-airport-to-seoul). That helps the article feel part of a wider travel resource rather than a standalone finance explainer.

## Conclusion

Korean won currency ETFs are best understood as a finance concept with travel relevance, not as a must-have product for holidaymakers. They show how currency movements can affect value, but for travellers the real takeaway is simpler: the won influences how much a South Korea trip costs, and that can change over time.

## Related tips

- [T-Money card guide](/travel-tips/t-money-card-guide) — how to buy, top up, and refund Korea’s transport card.
- [Seoul subway cheat sheet](/seoul-subway-a-cheat-sheet) — fares, route planning, and the fastest way around the city.
- [How to get from Incheon Airport to Seoul](/travel-tips/incheon-airport-to-seoul) — AREX vs bus vs taxi costs and timing.`,
    tags: ["Money", "Currency", "Practical", "Investing"],
    authorSlug: "mina-park",
    updatedDate: "2026-03-10",
    contentType: "travel-tip",
  },
  {
    slug: "most-beautiful-korean-actresses",
    title: "15 Most Beautiful Korean Actresses in 2026 (and What They're Starring In)",
    image: "/images/blogs/most-beautiful-korean-actresses/busan-cinema-center-night.jpg",
    canonicalPath: "/most-beautiful-korean-actresses",
    metaTitle: "Most Beautiful Korean Actresses 2026: 15 Hottest K-Drama Stars",
    metaDescription:
      "Song Hye-kyo, Jun Ji-hyun, Kim Ji-won, IU, Han So-hee and more: the 15 most beautiful and popular Korean actresses of 2026, their best dramas and what's new.",
    summary:
      "Our 2026 list of the most beautiful and in-demand Korean actresses, from Song Hye-kyo and Jun Ji-hyun to Kim Ji-won, IU, Go Youn-jung and Jung Ho-yeon, with their best-known dramas and films and what they're working on now.",
    content: `Korean dramas and films have made a generation of South Korean actresses famous far beyond Korea, and "who is the most beautiful Korean actress?" is one of the questions fans search for most. There's no official answer, so this list does something more useful: it picks 15 actresses who are at the top of their game in 2026, tells you what they're known for, and shows what they're working on right now.

Everyone here is an adult, and every photo is a licensed image from a public event. We chose them on recent work, awards and popularity (including Gallup Korea's annual actor polls), not just looks. Song Hye-kyo, for one, has said she'd rather be recognised for her acting than her looks, and the 2025 and 2026 work below shows why these 15 are at the top.

## The List at a Glance

| # | Actress | Hangul | Born | Best known for | What's new in 2025–26 |
| --- | --- | --- | --- | --- | --- |
| 1 | Song Hye-kyo | 송혜교 | 1981 | Descendants of the Sun, The Glory | Netflix series *Tantara* with Gong Yoo |
| 2 | Jun Ji-hyun | 전지현 | 1981 | My Sassy Girl, My Love from the Star | Zombie thriller *Colony* (Cannes 2026) |
| 3 | Son Ye-jin | 손예진 | 1982 | The Classic, Crash Landing on You | Blue Dragon Best Actress for *No Other Choice* |
| 4 | Kim Ji-won | 김지원 | 1992 | Queen of Tears, My Liberation Notes | SBS medical noir *Doctor X: Mafia in White* |
| 5 | IU | 아이유 | 1993 | My Mister, When Life Gives You Tangerines | Royal romance *Perfect Crown* |
| 6 | Bae Suzy | 배수지 | 1994 | Architecture 101, While You Were Sleeping | Netflix fantasy *Genie, Make a Wish* |
| 7 | Han So-hee | 한소희 | 1993 | The World of the Married, My Name | Crime film *Project Y* |
| 8 | Kim Tae-ri | 김태리 | 1990 | The Handmaiden, Twenty-Five Twenty-One | Variety show *Curtain Up, Class!* |
| 9 | Go Youn-jung | 고윤정 | 1996 | Moving, Resident Playbook | Netflix romance *Can This Love Be Translated?* |
| 10 | Kim Go-eun | 김고은 | 1991 | Goblin, Exhuma | Netflix series *You and Everything Else* |
| 11 | Jung Ho-yeon | 정호연 | 1994 | Squid Game | Na Hong-jin's *Hope* (Cannes competition) |
| 12 | Kim Yoo-jung | 김유정 | 1999 | Love in the Moonlight, My Demon | Thriller *Dear X* |
| 13 | Shin Min-a | 신민아 | 1984 | Hometown Cha-Cha-Cha, Oh My Venus | Netflix thriller *Karma*; married Kim Woo-bin |
| 14 | Moon Ga-young | 문가영 | 1996 | True Beauty, The Interest of Love | Hit romance film *Once We Were Us* |
| 15 | Park Min-young | 박민영 | 1986 | What's Wrong with Secretary Kim, Marry My Husband | Con-artist series *Confidence Queen* |

## 1. Song Hye-kyo (송혜교)

![Song Hye-kyo at a public event in July 2023](/images/blogs/most-beautiful-korean-actresses/song-hye-kyo.jpg)

Song Hye-kyo at a public event in July 2023. Photo: K-POPIT 케이팝잇 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:20230719_Song_Hye-kyo_%28%EC%86%A1%ED%98%9C%EA%B5%90%29.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Song Hye-kyo has been one of Korea's defining screen beauties for more than two decades. Korean media long grouped her with Kim Tae-hee and Jun Ji-hyun as the "Tae-Hye-Ji" trio, the shorthand for the country's most iconic actresses. Her hits run from *Autumn in My Heart* (2000) and *Full House* (2004) to *Descendants of the Sun* (2016) and Netflix's revenge drama *The Glory* (2022–23), which won her the Baeksang Arts Award for Best Actress in television.

**Now:** She led the supernatural thriller film *Dark Nuns* in January 2025 and made a special appearance in Netflix's *Genie, Make a Wish*. Her next big series is Netflix's period drama *Tantara* with Gong Yoo, which Netflix has slated for December 2026. Off screen, she became a global ambassador for Guerlain in 2026 and a brand ambassador for Bottega Veneta in September 2026. In a January 2025 interview she said newer actors should carry the "Tae-Hye-Ji" torch now, and that she'd rather be recognised for her acting than her looks.

## 2. Jun Ji-hyun (전지현)

![Jun Ji-hyun at a public event in April 2026](/images/blogs/most-beautiful-korean-actresses/jun-ji-hyun-2026.jpg)

Jun Ji-hyun at a public event in April 2026. Photo: TV10 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Jun_Ji-hyun_in_April_2026.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Known internationally as Gianna Jun, Jun Ji-hyun became a pan-Asian star with the romantic comedy *My Sassy Girl* (2001). She later starred in the films *The Thieves* (2012) and *Assassination* (2015), and in the dramas *My Love from the Star* (2013–14) and *The Legend of the Blue Sea* (2016–17).

**Now:** 2026 is her big-screen comeback. Yeon Sang-ho's zombie thriller *Colony*, her first film since *Assassination*, premiered in the Midnight Screenings section of the Cannes Film Festival on 15 May 2026 and opened in Korean cinemas on 21 May. She plays a woman trapped inside a quarantined building who becomes the survivors' leader. Yeon is the director of *Train to Busan*, and you can read more about him in our [Yeon Sang-ho profile](/cinema/directors/yeon-sang-ho) and our guide to [Korean zombie movies](/cinema/articles/korean-zombie-movies). Piaget also named her its global ambassador in April 2025.

## 3. Son Ye-jin (손예진)

![Son Ye-jin at the Baeksang Arts Awards in May 2026](/images/blogs/most-beautiful-korean-actresses/son-ye-jin-2026.jpg)

Son Ye-jin at the Baeksang Arts Awards in May 2026. Photo: TV10 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Son_Ye-jin_in_May_2026.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Son Ye-jin earned the nickname "Nation's First Love" with early romances such as *The Classic* (2003) and *A Moment to Remember* (2004). Global audiences know her best from *Crash Landing on You* (2019–20), where she played a South Korean heiress who falls for a North Korean officer, played by Hyun Bin, whom she later married.

**Now:** She starred in Park Chan-wook's dark comedy *No Other Choice* (2025), and won Best Actress at the 46th Blue Dragon Film Awards for it in November 2025, her second win in that category. For more on the director, see our [Park Chan-wook profile](/cinema/directors/park-chan-wook).

## 4. Kim Ji-won (김지원)

![Kim Ji-won at a public event in May 2026](/images/blogs/most-beautiful-korean-actresses/kim-ji-won-2026.jpg)

Kim Ji-won at a public event in May 2026. Photo: TV10 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kim_Ji-won_in_May_2026.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Kim Ji-won broke through in *The Heirs* (2013) and *Descendants of the Sun* (2016), then led *Fight for My Way* (2017) and *My Liberation Notes* (2022). Her chaebol-heiress role in *Queen of Tears* (2024) made her a global name: its finale hit 24.9% nationwide ratings, which made it tvN's highest-rated drama at the time. She came third in Gallup Korea's Television Actor of the Year poll in both 2024 and 2025.

**Now:** After a two-year break she returns in SBS's *Doctor X: Mafia in White*, the Korean remake of the Japanese hit *Doctor X*, which premieres on Friday 9 October 2026. She plays Gye Soo-jung, a maverick genius surgeon, and cut her hair into a bob for the role.

## 5. IU (아이유)

![IU on the red carpet at the Blue Dragon Series Awards in July 2025](/images/blogs/most-beautiful-korean-actresses/iu-2025.jpg)

IU on the red carpet at the Blue Dragon Series Awards in July 2025. Photo: 티비텐 TV10 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:IU_at_Blue_Dragon_Series_Awards_on_18072025_%281%29.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

IU (real name Lee Ji-eun) is that rare star who is at the very top of both K-pop and K-drama. As an actress she's best known for *My Mister* (2018) and *When Life Gives You Tangerines* (2025), the Netflix family saga with Park Bo-gum that's set on [Jeju Island](/south-korea/jeju). Tangerines won her Best Actress at the 4th Blue Dragon Series Awards and the grand prize at the 2025 APAN Star Awards.

**Now:** In April 2026 she starred opposite Byeon Woo-seok in *Perfect Crown*, a romantic comedy set in an imagined modern Korea that still has a royal family. Gallup Korea named her Singer of the Year for 2025 and ranked her second among TV actors, the first artist to make the top two of both lists in the same year. For the music side of her career, see our [K-pop history guide](/travel-tips/k-pop-history).

## 6. Bae Suzy (배수지)

![Bae Suzy at a campaign event in April 2024](/images/blogs/most-beautiful-korean-actresses/bae-suzy.jpg)

Bae Suzy at a campaign event in April 2024. Photo: K-POPIT 케이팝잇 (TV10) via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bae_Suzy_at_OB_Beer_Hanmac_%27As_Smooth_As_Possible%27_campaign,_3_April_2024_01.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Suzy started out in the girl group miss A and became the second "Nation's First Love" after the film *Architecture 101* (2012). Her dramas include *Gu Family Book* (2013), *Uncontrollably Fond* (2016) and *While You Were Sleeping* (2017).

**Now:** She starred with Kim Woo-bin in *Genie, Make a Wish*, a Netflix romantic fantasy by Kim Eun-sook (the writer of *Descendants of the Sun* and *The Glory*), released on 3 October 2025. In 2026 she voiced and narrated the animated film *Long Long Night*, which premiered at the Toronto International Film Festival in September. She also released her first single in two years, "Come Back", in February 2025.

## 7. Han So-hee (한소희)

![Han So-hee at the 2025 Toronto International Film Festival](/images/blogs/most-beautiful-korean-actresses/han-so-hee-tiff-2025.jpg)

Han So-hee at the 2025 Toronto International Film Festival. Photo: Desmond Herzfelder via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Han_So-Hee_at_the_2025_Toronto_International_Film_Festival.jpg), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Han So-hee made her name as the other woman in *The World of the Married* (2020), then led the romance *Nevertheless* (2021), the Netflix action series *My Name* (2021) and the period monster drama *Gyeongseong Creature* (2023–24).

**Now:** She co-leads the crime film *Project Y* with Jeon Jong-seo, about two friends who try to steal black money and gold bars in Gangnam. It premiered at the Toronto International Film Festival in September 2025 (the photo above is from that trip) and opened in Korea on 21 January 2026, with a near-simultaneous release in Japan two days later.

## 8. Kim Tae-ri (김태리)

![Kim Tae-ri at a public event in April 2026](/images/blogs/most-beautiful-korean-actresses/kim-tae-ri-2026.jpg)

Kim Tae-ri at a public event in April 2026. Photo: TV10 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kim_Tae-ri_in_April_2026.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Kim Tae-ri burst onto the scene in Park Chan-wook's *The Handmaiden* (2016), which won her the Blue Dragon Award for Best New Actress. See our guide to [The Handmaiden](/cinema/films/the-handmaiden) and its [filming locations](/cinema/locations/the-handmaiden-filming-locations). On TV she led *Mr. Sunshine* (2018), *Twenty-Five Twenty-One* (2022) and *Jeongnyeon: The Star Is Born* (2024), winning Baeksang Best Actress for the last two.

**Now:** She made her voice-acting debut in *Lost in Starlight* (2025), the first Korean feature-length animated film released on Netflix, and joined tvN's 2026 variety show *Curtain Up, Class!* as a regular. In July 2026 her agency said she was positively considering the drama *Sister, I'm the Queen in This Life*, which would be her first drama in about three years.

## 9. Go Youn-jung (고윤정)

![Go Youn-jung at a public event in May 2026](/images/blogs/most-beautiful-korean-actresses/go-youn-jung-2026.jpg)

Go Youn-jung at a public event in May 2026. Photo: K-POPit 티비텐 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Go_Youn-jung_in_May_2026.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Go Youn-jung is one of the fastest-rising leads of the decade. She broke through with the film *The Hunt* (2022) and Disney+'s superhero hit *Moving* (2023), then led *Alchemy of Souls* season 2 and the medical drama *Resident Playbook* (2025), which topped Good Data Corporation's buzzworthy-actor chart for four weeks running.

**Now:** 2026 has been her busiest year yet. Netflix's romance *Can This Love Be Translated?*, with Kim Seon-ho as a multilingual interpreter, premiered on 16 January 2026, and JTBC's *We Are All Trying Here*, written by Park Hae-young, aired from April to May. Tiffany & Co. named her an ambassador in August 2026.

## 10. Kim Go-eun (김고은)

![Kim Go-eun at the Baeksang Arts Awards in May 2026](/images/blogs/most-beautiful-korean-actresses/kim-go-eun-baeksang-2026.jpg)

Kim Go-eun at the Baeksang Arts Awards in May 2026. Photo: TV10 / Ten Asia via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:050826_Kim_Go-eun_at_the_2026_Baeksang_Arts_Awards.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Kim Go-eun debuted in the film *Eungyo* (2012) and became a household name with *Cheese in the Trap* (2016) and *Guardian: The Lonely and Great God* (2016–17), better known as *Goblin*. Her shaman role in the occult hit *Exhuma* (2024) won her both the Baeksang Arts Award and the Blue Dragon Film Award.

**Now:** In September 2025 Netflix released *You and Everything Else*, a 15-episode series in which she plays one of two lifelong friends whose friendship, envy and rivalry play out over decades.

## 11. Jung Ho-yeon (정호연)

![Jung Ho-yeon at the 2026 Cannes Film Festival](/images/blogs/most-beautiful-korean-actresses/jung-ho-yeon-cannes-2026.jpg)

Jung Ho-yeon at the 2026 Cannes Film Festival. Photo: Gabriel Hutchinson via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Jung_Ho-Yeon_at_the_2026_Cannes_Film_Festival_03_%28cropped%29.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

Jung Ho-yeon was a fashion model first. She was runner-up on *Korea's Next Top Model* in 2013 and walked international runways before her acting debut as Kang Sae-byeok in Netflix's *Squid Game* (2021) made her a global star overnight.

**Now:** Her first film, Na Hong-jin's science-fiction thriller *Hope*, competed for the Palme d'Or at Cannes, where it premiered on 17 May 2026. She plays Sung-ae, a rookie village police officer, alongside Hwang Jung-min, Zo In-sung, Michael Fassbender and Alicia Vikander. It's Na's first film since *The Wailing* (2016); see our [Na Hong-jin profile](/cinema/directors/na-hong-jin).

## 12. Kim Yoo-jung (김유정)

![Kim Yoo-jung at a public event in October 2025](/images/blogs/most-beautiful-korean-actresses/kim-yoo-jung-2025.jpg)

Kim Yoo-jung at a public event in October 2025. Photo: TV10 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kim_Yoo-jung_in_October_2025_02.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Kim Yoo-jung started acting as a child and was once nicknamed the "Nation's Little Sister". Now 27, she has led *Love in the Moonlight* (2016), *Backstreet Rookie* (2020), *Lovers of the Red Sky* (2021) and the fantasy romance *My Demon* (2023–24).

**Now:** She took a darker turn in the psychological thriller *Dear X*, which premiered on TVING on 6 November 2025. Earlier that autumn she became the first winner of the Busan International Actors Award at the 30th [Busan](/south-korea/busan) International Film Festival.

## 13. Shin Min-a (신민아)

![Shin Min-a at a Louis Vuitton event in 2025](/images/blogs/most-beautiful-korean-actresses/shin-min-a-2025.jpg)

Shin Min-a at a Louis Vuitton event in 2025. Photo: 티비텐 TV10 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Shin_Min-a_at_an_event_for_Louis_Vuitton_in_2025_1.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Shin Min-a began as a model before acting, and she's still one of Korea's most in-demand faces for fashion brands. Her best-loved dramas include *My Girlfriend Is a Gumiho* (2010), *Oh My Venus* (2015), the seaside romance *Hometown Cha-Cha-Cha* (2021) and *Our Blues* (2022).

**Now:** She starred in Netflix's crime thriller *Karma* in 2025, then married actor Kim Woo-bin on 20 December 2025 at the Shilla Hotel in Seoul, after a decade-long public relationship. The couple marked the wedding with a donation, and her lifetime charitable giving passed ₩4 billion in 2025.

## 14. Moon Ga-young (문가영)

![Moon Ga-young at a photo call in March 2025](/images/blogs/most-beautiful-korean-actresses/moon-ga-young-2025.jpg)

Moon Ga-young at a photo call in March 2025. Photo: K-POPIT 케이팝잇 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:20250319_Moon_Ga-young_at_a_photo_call_event_01.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Moon Ga-young started as a child model and actress, then became a lead with *Tempted* (2018), *True Beauty* (2020–21) and *The Interest of Love* (2022–23).

**Now:** Her romance film *Once We Were Us*, with Koo Kyo-hwan, opened on 31 December 2025 and became a genuine hit. It crossed 2 million admissions on 26 January 2026, the first Korean romance film to pass that mark in years, and went on to more than 2.5 million. She also starred in the drama *My Dearest Nemesis* (2025).

## 15. Park Min-young (박민영)

![Park Min-young at Incheon Airport in March 2026](/images/blogs/most-beautiful-korean-actresses/park-min-young-2026.jpg)

Park Min-young at Incheon Airport in March 2026. Photo: 티비텐 TV10 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Park_Min-young_at_Incheon_Airport_on_02032026_%282%29.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Park Min-young rose to fame in the historical drama *Sungkyunkwan Scandal* (2010) and is one of Korea's best-loved romantic-comedy leads, thanks to *Healer* (2014–15), *What's Wrong with Secretary Kim* (2018) and the revenge drama *Marry My Husband* (2024).

**Now:** In September 2025 she played a genius con artist in *Confidence Queen*, the Korean remake of Japan's *The Confidence Man JP*. It aired on TV Chosun in Korea and streams worldwide on Prime Video as the first Korean Amazon Original drama.

## Where to See Korean Stars in Person

You won't bump into these actresses on the street very often, but there are a few reliable places where Korean stars appear in public:

- **Film festival red carpets.** The [Busan](/south-korea/busan) International Film Festival every autumn is Korea's biggest, with open-air screenings and red carpets at the Busan Cinema Center (pictured at the top of this page).
- **Awards shows.** The Baeksang Arts Awards (spring) and the Blue Dragon Film Awards (late autumn) in Seoul draw the biggest names, and fans gather outside the venues.
- **Airports.** Korean entertainment media film stars leaving from Incheon and Gimpo for overseas events, which is where several of the photos on this page come from.
- **Filming locations.** You can visit the places where your favourite dramas and films were shot; start with our [Korean cinema guide](/cinema).

Please be respectful: don't follow anyone, crowd them at the airport, or photograph them in private.

## What Makes Korean Actresses So Admired?

Korean beauty ideals are a big topic in themselves (we cover them in our guide to [Korean beauty standards](/culture/korean-beauty-standards)), but the actresses above are admired for more than looks. Many have built careers that run for decades, often moving from romance into thrillers, period dramas and film. Their style also shapes trends across Asia, which is why so many of them are luxury-brand ambassadors.

If you're interested in Korean swimwear and fitness stars, see our explainers on [Korean bikini models](/culture/korean-bikini-models) and [Korean fitness models](/culture/korean-fitness-models).

## Korean Actresses FAQ

### Who is the most beautiful Korean actress in 2026?

There's no official ranking. Song Hye-kyo, Jun Ji-hyun and Son Ye-jin are the classic answers in Korea, while Kim Ji-won, IU, Go Youn-jung and Han So-hee are among the most popular younger stars right now. Gallup Korea's 2025 Television Actor of the Year poll put IU second and Kim Ji-won third.

### What does "Tae-Hye-Ji" mean?

It's a nickname Korean media gave to Kim Tae-hee, Song Hye-kyo and Jun Ji-hyun, taking one syllable from each name, as the country's most iconic actresses of their generation.

### Who is called the "Nation's First Love"?

Son Ye-jin was first given the title for her early-2000s romance films, and Bae Suzy got it after *Architecture 101* (2012).

### Which Korean actresses are in new dramas in 2026?

Kim Ji-won's *Doctor X: Mafia in White* starts on SBS on 9 October 2026, and Song Hye-kyo's Netflix series *Tantara* is slated for December 2026. Earlier in 2026, IU starred in *Perfect Crown* and Go Youn-jung in *Can This Love Be Translated?* and *We Are All Trying Here*.

### Which Korean actresses were at Cannes in 2026?

Jun Ji-hyun went with Yeon Sang-ho's *Colony* (Midnight Screenings), and Jung Ho-yeon went with Na Hong-jin's *Hope*, which competed for the Palme d'Or.

## Photo Credits

Photos are from Wikimedia Commons under Creative Commons licences. Each was resized and cropped, or padded with a blurred background, to a 16:9 frame.

- Hero image (the Busan Cinema Center, home of the Busan International Film Festival, at night): Raja Syazwina RS, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), [source](https://commons.wikimedia.org/wiki/File:Busan_Cinema_Center_and_Centum_City_Skyline_at_Night.jpg)
- Song Hye-kyo at a public event in July 2023: K-POPIT 케이팝잇, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), [source](https://commons.wikimedia.org/wiki/File:20230719_Song_Hye-kyo_%28%EC%86%A1%ED%98%9C%EA%B5%90%29.jpg)
- Jun Ji-hyun at a public event in April 2026: TV10, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Jun_Ji-hyun_in_April_2026.png)
- Son Ye-jin at the Baeksang Arts Awards in May 2026: TV10, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Son_Ye-jin_in_May_2026.png)
- Kim Ji-won at a public event in May 2026: TV10, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Kim_Ji-won_in_May_2026.png)
- IU on the red carpet at the Blue Dragon Series Awards in July 2025: 티비텐 TV10, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:IU_at_Blue_Dragon_Series_Awards_on_18072025_%281%29.png)
- Bae Suzy at a campaign event in April 2024: K-POPIT 케이팝잇 (TV10), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), [source](https://commons.wikimedia.org/wiki/File:Bae_Suzy_at_OB_Beer_Hanmac_%27As_Smooth_As_Possible%27_campaign,_3_April_2024_01.jpg)
- Han So-hee at the 2025 Toronto International Film Festival: Desmond Herzfelder, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Han_So-Hee_at_the_2025_Toronto_International_Film_Festival.jpg)
- Kim Tae-ri at a public event in April 2026: TV10, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Kim_Tae-ri_in_April_2026.png)
- Go Youn-jung at a public event in May 2026: K-POPit 티비텐, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Go_Youn-jung_in_May_2026.png)
- Kim Go-eun at the Baeksang Arts Awards in May 2026: TV10 / Ten Asia, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:050826_Kim_Go-eun_at_the_2026_Baeksang_Arts_Awards.png)
- Jung Ho-yeon at the 2026 Cannes Film Festival: Gabriel Hutchinson, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:Jung_Ho-Yeon_at_the_2026_Cannes_Film_Festival_03_%28cropped%29.jpg)
- Kim Yoo-jung at a public event in October 2025: TV10, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Kim_Yoo-jung_in_October_2025_02.png)
- Shin Min-a at a Louis Vuitton event in 2025: 티비텐 TV10, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Shin_Min-a_at_an_event_for_Louis_Vuitton_in_2025_1.png)
- Moon Ga-young at a photo call in March 2025: K-POPIT 케이팝잇, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), [source](https://commons.wikimedia.org/wiki/File:20250319_Moon_Ga-young_at_a_photo_call_event_01.jpg)
- Park Min-young at Incheon Airport in March 2026: 티비텐 TV10, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Park_Min-young_at_Incheon_Airport_on_02032026_%282%29.png)`,
    tags: ["Culture", "K-Drama", "Celebrities", "Korean Film", "Entertainment"],
    authorSlug: "mina-park",
    updatedDate: "2026-10-08",
    contentType: "travel-tip",
  },
  {
    slug: "breweries-in-south-korea",
    title: "Best Craft Breweries in South Korea to Visit",
    image: "/images/blogs/breweries/defne-kucukmustafa-wYDUZux2wE8-unsplash.jpg",
    canonicalPath: "/breweries-in-south-korea",
    summary:
      "From Seoul taprooms to Busan's coastal brewpubs and Jeju farmhouse ales — a guide to South Korea's best craft breweries, the beers to try, and the culture behind the pour.",
    content: `**Quick summary:** South Korea's craft beer scene has exploded since 2014. From pioneering Seoul taprooms to coastal breweries in Busan and farm-to-glass operations on Jeju, this guide covers the best craft breweries in South Korea, the beers worth seeking out, and the food and culture that surround the pour.

## Exploring South Korea's Vibrant Craft Beer Scene

For decades, the South Korean beer landscape was synonymous with a singular experience: cold, fizzy, and light lagers served in iconic green bottles. Whether you were relaxing at a street-side tent or dining in a polished restaurant, the market was dominated by massive conglomerates like Oriental Breweries and Hite. However, a seismic shift has occurred. A vibrant craft beer scene has blossomed across South Korea, turning the nation from a "land of bland" into a sophisticated destination for enthusiasts. This guide explores the best craft breweries in South Korea, balancing the industrial-chic aesthetics of modern urban taprooms with the timeless beauty of traditional Korean architecture to provide a truly immersive culinary journey.

What makes this scene compelling is not just the beer itself, but the way it reflects how South Korean beer culture has matured. In a market once ruled by OB Beer, Hite Breweries, Cass, and Terra, the rise of small-batch brewing has made room for stronger hop character, barrel aging, sours, and ingredient-driven recipes. That shift has helped craft beers move from a niche curiosity into a mainstream option for people searching for more character in their pint.

## The Korean Craft Renaissance: From Macro-Lagers to Micro-Brews

This shows how Korea's beer changed. It went from simple, fizzy macro-lagers to complex craft beers with local ingredients.

The change happened quickly, and it reshaped the way locals and visitors think about beer. Today, you can find taprooms in Seoul, Busan, and Jeju that are as likely to pour a crisp pale ale as they are a rich stout or a fruit-forward sour. Many of these breweries have built their reputations by pairing their beers with strong food menus, thoughtful design, and a strong sense of place.

The craft beer scene also benefited from a growing appetite for variety. Beer drinkers who once relied on OB Golden Lager, Hite Extra Cold, and other familiar staples now have access to rotating taps, bottle shop releases, and convenience-store singles that make experimentation easier than ever. That diversity is one reason South Korea has become such an interesting destination for beer-focused travel.

## The Baseline: Understanding the Dominance of Cass, Hite, and Terra

Knowing the usual "macro" beers is important. It shows the clear difference made by new independent brewers. For years, options were limited to domestic giants like Cass, Hite, and Terra. These South Korean beer staples are designed for mass consumption; they are clean, highly carbonated, and intended to be consumed quickly alongside spicy, greasy food. While these lagers, including the ubiquitous OB Golden Lager and Hite Extra Cold, serve a specific purpose in the local culinary ecosystem, they lack the nuance that modern craft drinkers crave.

That baseline matters because it explains why craft beer has resonated so strongly. When your reference point is a light, refreshing macro-lager, the jump to a Korean Pale Ale, a hop-bomb IPA, or a locally fruited sour is dramatic. Even casual drinkers notice the difference, especially when they encounter beer menu options built around flavor rather than volume.

## The Shift: How Deregulation Sparked a Craft Revolution

Brewers can now try new flavors beyond the usual pale gold beer. This change lets strong IPAs, complex sours, and local experiments grow and shape the scene today. The turning point arrived in 2014 when the government relaxed regulations on micro-brewing. Before this, tax structures and licensing hindered small-scale production. Once the laws caught up with market demand, a flood of innovation followed, allowing for the rise of robust craft beers that define the industry today.

That shift also encouraged brewers to think more ambitiously about scale and identity. Some stayed small and hyper-local, while others expanded to multiple taprooms or even overseas production. The Booth is a good example of how far the scene has come, growing from a Seoul-based startup into a brewery with international reach while still keeping its "follow your fun" ethos intact.

## Local Ingredients: Hallabong, Pine, and Korean Rice in Modern Brewing

Brewers are not just copying Western styles. They add Jeju Island's famous Hallabong, toasted Korean rice, and local pine needles to their fermenters. These ingredients add a distinct "terroir" to the pour, proving that Korean craft is a legitimate culinary evolution rather than a simple imitation of European or American trends.

This is where the market becomes genuinely distinct. A bottle shop in Seoul or Busan may stock imported beer, but many of the most interesting local releases are designed around ingredients that make sense in Korea first. You will see fruity saisons, rice-based lagers, citrus-accented ales, and experimental seasonal cans that feel tightly connected to the region where they were brewed.

## Itaewon and Noksapyeong: The Birthplace of the Scene

[Itaewon](/south-korea/seoul/itaewon), Seoul's most international district, served as the initial incubator for the country's craft beer culture. It was here that adventurous palates first demanded something more interesting than the local lager. The neighbourhood's hilly, narrow streets remain the spiritual home of the movement, packed with small bars that prioritise quality taps over mass-market volume.

Noksapyeong and nearby Gyeongnidan also became important because they offered the right mix of foreign residents, early adopters, and curious locals. That created a feedback loop where breweries could test pale ales, porters, and hoppy IPAs on a receptive audience. Even now, the area remains a useful starting point for anyone planning a Seoul brewery crawl. If you're heading out after dark, check our [Itaewon nightlife guide](/south-korea/seoul/guides/nightlife-itaewon) for more on the neighbourhood's bar scene.

## Magpie Brewing Co.: The Pioneers of the Pale Ale

Magpie Brewing Co. stands as a cornerstone of the movement. Starting as a small operation in Itaewon, they educated a generation on what a well-balanced pale ale should taste like. Their commitment to consistency has made Magpie Brewing a household name. Visiting a Magpie Brewing Co. taproom is a rite of passage for any visitor.

Magpie's influence is bigger than one taproom. The brand has become closely associated with Korean craft beer's early international profile, thanks to its balanced, approachable beers and its ability to pair quality beer with pizza and a relaxed social setting. In Seoul, their Itaewon flagship sits near Noksapyeong, while additional locations have helped broaden its reach across the city.

A visit also shows why Magpie became so popular with both expats and locals. The setting tends to be casual, social, and easy to navigate, which makes it a natural entry point for people who are new to craft beers. It is one of the places where South Korea's brewing story becomes tangible: not just a drink, but a cultural bridge built around flavour, hospitality, and a dependable draft beer lineup.

## The Booth: From Small Beginnings to Global Recognition

The Booth began with a simple philosophy: if you can't find a great beer, brew it yourself. What started as a tiny shop in Gyeongnidan has ballooned into a national powerhouse with a massive presence. Their success lies in their ability to bridge the gap between niche craft enthusiasts and the mainstream public, bringing high-quality IPAs to the masses.

That growth was not accidental. The Booth was founded in 2015 and quickly became one of the defining names in South Korean craft brewing. It is known for its early basements-and-backstreet energy, but also for a broader ambition that extended to a facility in Pangyo and contract brewing relationships abroad. That combination helped the brewery scale without losing the personality that made people care about it in the first place.

The Booth also matters because it turned the idea of a craft brewery into something more visible and event-driven. Its Beer Week Seoul became one of the country's major beer gatherings, helping cement the brand not just as a brewery, but as a cultural organiser within the scene. For visitors, that means The Booth is as much about community and discovery as it is about the beer in the glass.

## Amazing Brewing Company: The Massive Taproom in Seongsu

Amazing Brewing Company uses this style very well. Their taproom is large with high ceilings like a cathedral. It offers many styles, from easy-to-drink ales to strong, barrel-aged experiments. [Seongsu-dong](/south-korea/seoul/seongsu), often called the "Brooklyn of Seoul," provides the perfect industrial backdrop for their extensive menu.

What makes Amazing Brewing compelling is its scale and ambition. The space feels designed for long visits, group gatherings, and repeated tastings, which suits a city district like Seongsu where food, coffee, and design culture all intersect. The brewery's broad range also makes it a useful stop for visitors who want to sample multiple beer styles in one sitting rather than committing to a single narrow lane.

The surrounding neighbourhood adds to the appeal. Seongsu has become one of Seoul's most fashionable redevelopment zones, and a brewery like this fits neatly into that identity. It gives the impression that craft beer is not an imported novelty here; it is part of the broader urban lifestyle, sitting alongside design stores, galleries, and restaurants built for people who care about atmosphere as much as flavour.

## Seoul Brewery: Where Experimental Techniques Meet Modern Design

Seoul Brewery is defined by its meticulous approach to recipe development. Their taprooms are characterised by clean, minimalist, and modern designs that mirror the precision of their brewing techniques. It is an excellent stop for those who appreciate a thoughtful, technical approach to beer.

The brewery is also an example of how craft beer in Seoul increasingly overlaps with food culture. Seoul Brewery is known not just for draft beer, but for spaces where the beer list and food menu are designed to work together. That makes it especially useful for visitors who want a more complete brewpub experience rather than a pure tasting-room stop.

Its locations in Seongsu and other urban districts also show how this new beer culture has moved beyond its early Itaewon base. Seoul Brewery feels modern in a way that appeals to design-conscious drinkers, but it also remains grounded in the practical side of drinking out in Korea: shareable dishes, easy transit access, and a relaxed setting that makes a second round feel inevitable.

## Artmonster Brewery: Drinking in the "Hip-jiro" Aesthetic

The area known as "Hip-jiro" (the trendy interpretation of Euljiro) is where retro charm meets modern nightlife. Artmonster Brewery captures this vibe through neon lights and industrial grit. It provides an immersive experience that feels perfectly aligned with the fast-paced, stylish energy of central Seoul.

Artmonster stands out because it feels like a deliberate response to the neighbourhood around it. Euljiro is full of old workshops, hardware shops, and fading industrial buildings, and Artmonster makes that context part of the attraction. It has the feel of a place where you can drink a crisp Seoul IPA while looking out at a district that still remembers its manufacturing past.

The brand also has a stronger reputation than its casual aesthetic might suggest. Recent coverage has highlighted its brewing credentials and award-level ambition, which gives the taproom more credibility than a purely decorative nightlife venue. In practice, that means Artmonster works well both as a social stop and as a serious beer destination.

## Euljiro Brewing: Neon Lights and Local Flavour

Tucked away in the heart of the city's older manufacturing districts, Euljiro Brewing serves as a beacon of the new school. Their focus on integrating into the fabric of the neighbourhood, while maintaining a high standard for their draft beer, makes them a vital part of the local scene.

Euljiro Brewing has become closely tied to the broader story of Euljiro as a nightlife district that has reinvented itself without erasing its identity. The brewery's two-location presence and local reputation show how craft beer can thrive in dense urban neighbourhoods that were never originally designed for leisure tourism. It is a good example of the way craft breweries in South Korea often function as anchors within a changing city fabric.

For visitors, the appeal is not only the beer but the feeling of discovery. Euljiro can still feel slightly hidden, and that makes the brewery crawl experience more rewarding. Once you find the taproom, you are usually rewarded with a busy room, solid draft beer, and an atmosphere that feels more like an insider tip than a polished chain concept.

## Kiwa Taproom: Craft Beer in a Traditional Korean House

Sitting on a wooden floor in a historic building while drinking a modern, hop-forward IPA creates a contrast. This contrast shows the spirit of modern Korea. Kiwa Taproom is the gold standard for this aesthetic, blending ancient Hanok culture with the cutting edge of the craft movement.

That combination is what makes Kiwa memorable. Rather than leaning into industrial minimalism, it uses traditional architecture to frame a contemporary drinking experience. The result is a slower, more reflective atmosphere that still feels fully connected to the craft beer scene, especially for drinkers who want something more culturally specific than a generic taproom.

Kiwa also helps broaden the meaning of where great beer can be found in Seoul. It suggests that craft beer does not have to live only in raw concrete spaces or trend-heavy nightlife districts. In a hanok setting, the beer experience becomes more about balance, contrast, and place — a useful reminder that Korean drinking culture is as much about mood and setting as it is about ABV and hop profile.

## Brew 3.14 and Ale Dang: Small-Batch Brews in Historic Settings

Small-batch brewers like Brew 3.14 and Ale Dang lean into the intimacy of their locations. These taprooms offer a cosy, quiet retreat from the bustling streets of Seoul. They are the perfect places to discover niche styles that may not be available at larger, commercialised craft breweries.

These smaller venues are important because they keep the scene from becoming too standardised. In a city where some breweries have already become quite famous, smaller taprooms continue to function as testing grounds for fresh ideas, rotating cans, and unusual seasonal recipes. They also help preserve the discovery aspect of craft beer, which can disappear once a brand becomes too widely distributed.

For visitors, this is where a brewery day starts to feel less like a checklist and more like a genuine local experience. Small rooms, intimate service, and niche pours encourage conversation, which is especially useful if you want to compare styles such as pale ale, wheat beer, or stronger experimental releases without the noise of a big beer hall.

## Busan: The Coastal Craft Capital and Gorilla Brewing

[Busan](/south-korea/busan) is arguably the craft beer capital of the country. Gorilla Brewing, founded by expatriates, has been instrumental in raising the bar for the local scene. Their taproom in the Gwangan-ri area offers stunning views of the coast, pairing perfectly with their world-class stouts and IPAs.

Gorilla's significance comes from both timing and scale. The brewery helped prove that Busan could sustain a serious craft beer audience outside Seoul, and its growth into multiple locations reflects the city's status as a coastal destination with strong tourism, nightlife, and beach culture. It has become one of the most recognisable names in Korean craft beer, especially for visitors who want a destination brewery experience rather than a simple pub stop.

The coastal setting matters too. Busan has a different feel from Seoul: more open, more relaxed, and often more social in a seaside way. Gorilla fits that mood by offering a large, high-energy venue with enough variety to keep both casual beer drinkers and dedicated enthusiasts interested. It is the kind of place where craft beer feels integrated into the city's leisure identity rather than standing apart from it.

## Wild Wave Brewing Company: The Masters of Sours and Funk in Busan

For those who prefer a tart, funky profile, Wild Wave Brewing Company is essential. They are widely recognised as the pioneers of the sour beer scene in Korea. Their ability to manage wild yeast strains and fruit infusions makes them one of the most adventurous breweries in the nation.

Wild Wave's appeal lies in its willingness to stretch the boundaries of what most people expect from South Korean beer. While many breweries start with accessible styles like pale ale or IPA, Wild Wave helps show that the local scene has matured enough to support more technical and less mainstream beer styles. That makes it especially interesting for seasoned drinkers who want something beyond the usual craft beer script.

In Busan, that adventurous streak feels natural. A city with strong food culture and a busy nightlife scene is a good home for a brewery that favours flavour intensity and complexity. If you are building a wider Korea beer itinerary, Wild Wave is a strong counterpoint to cleaner, more conventional breweries like Magpie or Seoul Brewery.

## Budnamu Brewery (Gangneung): Pine-Scented Pours in an Old Brewery

Located in the coastal city of [Gangneung](/south-korea/gangneung), Budnamu Brewery is housed in a converted grain storage facility. Their signature beers are brewed with locally sourced pine needles, creating a crisp, earthy flavour profile that is completely unique to their location.

Budnamu is important because it shows how craft beer in Korea is not limited to the big metropolitan centres. Gangneung gives the brewery a regional identity, and the use of local ingredients makes the beers feel tied to place rather than just to a style template. That kind of brewing makes a lot of sense in a country where food, seasonality, and locality matter so much.

The brewery's setting also contributes to the experience. A converted industrial space gives it enough character to feel rooted in history, while the ingredient-led approach keeps it modern and relevant. For travellers moving beyond Seoul and Busan, Budnamu offers a useful reminder that Korea's craft beer scene is distributed across the country, not concentrated in one city.

## Magpie Jeju: Visiting the Source on the Island of the Gods

[Jeju Island](/south-korea/jeju) is not just a vacation destination; it is home to Magpie's brewery and farm. Visiting the source provides an intimate look at the production process. The island's distinct climate and agricultural products influence the beers brewed here, making a pilgrimage to this site a must for any serious fan.

Jeju is especially important because it ties beer production to landscape in a way that feels almost agricultural. The brewery's connection to the island helps explain why Jeju Ale and other local releases have become so recognisable. It also gives visitors a reason to treat the brewery as part of a broader island itinerary rather than an isolated drinking stop.

For craft beer travellers, this is where the story becomes more personal. A Jeju visit can connect the dots between local ingredients, seasonal brewing, and the broader rise of Korean craft beers. It is also an excellent place to see how a brewery can become a destination on its own rather than just a brand on a label.

## The Art of Chimac: Pairing Craft IPAs with Gourmet Fried Chicken

Chimac — a portmanteau of "chicken" and "maekju" (beer) — is a fundamental pillar of Korean social life. While this tradition was built on the back of mass-produced lager, the modern craft revolution has elevated the experience. Pairing a bitter, aromatic IPA with the crunch of Korean-style fried chicken is an absolute necessity.

This is also one of the easiest ways to introduce someone to craft beer in Korea. A strong, citrusy IPA can cut through the richness of fried chicken in a way that a lighter beer sometimes cannot. That is why many taprooms and brewpubs now think carefully about pairing, using food menus to complement the bitterness, malt sweetness, or sourness of the beers they pour.

The result is that chimac is no longer just a convenience-store ritual or a late-night delivery habit. It has become part of the craft experience, especially in neighbourhoods where breweries and chicken restaurants sit side by side. For many visitors, that pairing is one of the most memorable parts of drinking in South Korea. If you're planning to explore more of the food scene, the [Myeongdong street food guide](/south-korea/seoul/guides/best-street-food-myeongdong) covers other must-try bites.

## The "K-Plate": Traditional Food Menus in Modern Taprooms

You can find menus with fusion dishes, traditional appetisers, and good pizza. These foods match the flavours of the beers on tap. Modern taprooms are moving away from basic snacks, curating a food menu designed to complement specific beer profiles, from sessionable ales to heavy stouts.

This matters because food has become a bigger part of the brewery identity. Magpie leans into pizza, Seoul Brewery often combines beer with dishes that feel more deliberate, and other taprooms use bar food, small plates, or Korean fusion items to extend the visit. That makes the beer experience feel more rounded and gives visitors a reason to stay longer.

A strong food menu also helps breweries reach beyond the core beer crowd. Not everyone arrives looking for a double IPA or a sour; some people just want a comfortable dinner spot with a better-than-average beer list. Breweries that understand this have a clear advantage in the South Korean market.

## Maekju Etiquette: Social Norms for Drinking in Korea

Drinking in Korea is a communal activity. When drinking in a group, it is polite to pour for others rather than yourself, and you should always accept a drink with two hands. Understanding these simple social signals will significantly improve your experience in local taprooms. For more on Korean drinking traditions, see our [sansachun guide](/travel-tips/sansachun-drink-guide) covering Korea's traditional magnolia berry liquor, or learn about [maeshil-ju](/what-is-maeshilju), the plum liqueur found in restaurants and home kitchens across the country.

These customs matter even in craft settings because they shape how people move through the space. In a busy beer hall or taproom, shared pours and group etiquette can create a more social atmosphere than many visitors expect. Even when the setting is modern or foreigner-friendly, the drinking culture still carries a distinctly Korean sense of respect and reciprocity.

For travellers, this means the brewery experience is never just about the beer list. It is also about reading the room, moving with the group, and understanding when to pour, when to toast, and when to let the conversation lead. That social rhythm is part of what makes a brewery crawl in Seoul or Busan feel different from one in Europe or North America.

## The Rise of the "Four Cans for 11,000 Won" Culture

The local convenience store is the unsung hero of the beer scene. The famous "four cans for 11,000 won" deal allows consumers to mix and match from a massive selection of craft cans. This accessible pricing model has been a major driver in getting craft products into the hands of the average consumer.

This is one of the biggest reasons craft beer has spread so widely. When a customer can buy a few different cans without committing to a full bar bill, experimentation becomes easier. It also creates a bridge between brewery visits and everyday drinking, which helps maintain demand for local labels.

Convenience-store access also changes how people travel. Instead of relying solely on taprooms, visitors can build their own tasting flights with cans from several breweries, then track down a bottle shop later if they want something rarer. That flexibility is part of why the Korean craft beer scene feels so dynamic right now.

## Must-Try Cans: From Gompyo Wheat Beer to Jeju Ale

Keep an eye out for creative collaborations, such as the famous Gompyo Wheat Beer or the ubiquitous Jeju Ale. For those seeking imported beer or rare local finds, visiting a dedicated bottle shop remains the best way to stock up for your travels.

Gompyo Wheat Beer is especially useful as a reminder that the craft market now reaches far beyond specialist taprooms. It shows how collaboration, recognisable branding, and approachable styles can bring more people into the category. Jeju Ale, meanwhile, is one of the best-known examples of how a local beer can become a national reference point.

For beer shoppers, the bottle shop remains a valuable stop because it often carries the widest range of cans, imported beer, and seasonal releases. If you are exploring South Korea for a week or more, stocking up this way lets you compare styles across regions and breweries rather than relying on whatever happens to be on draft that night.

## Finding Your Way: Using Naver Maps for Brewery Hopping

A word of advice for the traveller: Google Maps is notoriously unreliable in South Korea due to local regulations. For navigating to hidden taprooms, download the Naver app. It is the industry standard and will provide the most accurate walking directions and public transit information to ensure your tour remains on track. If you're getting around on the metro, our [Seoul subway guide](/travel-tips/seoul-subway-guide) covers the T-Money card, line maps, and etiquette.

That advice is especially relevant when brewery hopping through places like Itaewon, Euljiro, Seongsu, or Busan's coastal districts. Many of the best taprooms are tucked into side streets, upper floors, or mixed-use buildings that are easy to miss if you are relying on a generic mapping tool. Naver reduces the friction and makes it much easier to string together multiple stops in a single day.

It also helps that brewery travel in Korea often involves transit rather than cars. If you are combining the visit with dinner, late-night snacks, or a convenience-store crawl, accurate walking routes make the whole experience smoother and more enjoyable. In a dense city like Seoul, that matters almost as much as the beer itself.

## Where to Find Every Brewery on the Map

Use the interactive map below to see where each brewery mentioned in this guide is located. Click any marker for details, or tap a name in the list to fly to its location. Most Seoul breweries are reachable on foot once you are in the right neighbourhood — combine the map with the [Seoul subway guide](/travel-tips/seoul-subway-guide) for the smoothest route between stops.

The Korean craft beer scene has transformed from an overlooked market into a vibrant, diverse, and deeply creative landscape. By moving beyond the initial dominance of big-brand lagers, brewers across Seoul, Busan, and beyond have fostered a culture that honours both modern global trends and local identity. You can explore neon-lit industrial alleys in Euljiro. You can visit quiet, traditional hanok taprooms. Or you can enjoy a fresh local ale by the Han River. Armed with the right local tools like the Naver app and an adventurous palate, you will find that South Korea offers some of the most exciting brewing experiences in Asia today. Stay curious, explore the regions, and keep tasting.`,
    tags: ["Beer", "Craft Beer", "Seoul", "Busan", "Jeju", "Nightlife", "Food"],
    authorSlug: "james-jeong",
    updatedDate: "2026-05-11",
    contentType: "travel-tip",
  },
  {
    slug: "jeju-loveland",
    title: "Jeju Loveland: A Unique Adult Attraction on Jeju Island",
    image: "/images/blogs/loveland/loveland.jpg",
    canonicalPath: "/jeju-loveland",
    metaTitle: "Jeju Loveland Guide: South Korea’s Most Unusual Adult Sculpture Park",
    metaDescription:
      "Discover Jeju Loveland in South Korea, an adult-themed sculpture park on Jeju Island known for bold art, quirky attractions, and a truly unique travel experience.",
    summary:
      "Jeju Loveland is an adult-themed sculpture park on Jeju Island known for bold erotic art, playful installations, and an offbeat travel experience.",
    content: `Jeju Loveland is one of the most unusual attractions in South Korea, and it has become a must-see for travellers who want something bold, memorable, and completely different from the usual temple, museum, or beach stop. Located on [Jeju Island](/south-korea/jeju), this outdoor sculpture park is known for its erotic art, playful installations, and open celebration of human sexuality through creative expression.

For many visitors, Jeju Loveland is less about shock value and more about curiosity. It offers a rare example of a travel attraction that mixes humour, art, and cultural commentary in a way that feels distinctly local. If you are planning a Jeju Island itinerary (for example, a [2-day Jeju itinerary](/itineraries/2-days-in-jeju)) and want to include one truly unforgettable stop, this is the one that stands out.

## What Is Jeju Loveland?

Jeju Loveland is an adult sculpture park built around erotic and sensual art. Instead of traditional monuments or landscape displays, the park features sculptures and installations that present sexuality in a humorous, artistic, and visually striking way. It is designed for adults and is not generally considered suitable for children.

The attraction has earned a reputation as one of the most talked-about places on Jeju Island because it is so unlike the typical sightseeing experience. While Jeju is famous for beaches, volcanic scenery, and natural landmarks, Jeju Loveland adds a completely different layer to the island’s tourism appeal.

## Why Jeju Loveland Is So Popular

Jeju Loveland is popular because it surprises people. Travellers often expect Jeju Island to be all about scenic drives, waterfalls, lava tubes, and coastal views, then suddenly find an attraction that is bold, cheeky, and highly original. That contrast is part of its charm.

It is also widely shared online because it makes for a memorable travel story. Visitors often include it in “weirdest places in South Korea” lists or “unique things to do in Jeju” roundups. For content creators, it is an especially strong topic because it naturally attracts curiosity-driven search traffic.

## What To Expect During Your Visit

A visit to Jeju Loveland is generally short and easy to fit into a half-day itinerary. The park is outdoor-based, so you can walk through the displays at your own pace and take in the sculptures without needing a long time commitment.

The experience is playful, explicit, and intentionally provocative, but it is presented more as art than as a crude novelty attraction. That said, it is still an adult-themed venue, so travellers should go in with the right expectations and avoid bringing anyone who may be uncomfortable with sexual imagery.

## Is Jeju Loveland Worth Visiting?

If you enjoy unusual attractions, yes. Jeju Loveland is one of the most distinctive places in South Korea, and it offers a travel experience that is genuinely different from the standard itinerary.

If you prefer traditional sightseeing, it may not be essential. But for travellers who like quirky museums, unusual sculpture parks, and offbeat cultural stops, it is one of the most memorable things to do on Jeju Island.

## Best Time To Visit Jeju Loveland

Jeju Island is a year-round destination, but spring and autumn are often the easiest seasons for sightseeing because the weather is more comfortable for exploring the island overall. Since Jeju Loveland is typically part of a broader Jeju itinerary, it makes sense to visit when you can also enjoy the island’s other outdoor attractions (like the [Jeju waterfalls guide](/south-korea/jeju/guides/jeju-waterfalls)).

Summer can be busy and warm, while winter may be quieter but less ideal for long days of travel. If you are building a road trip or a multi-stop day around Jeju, any season with mild weather will make the overall experience smoother.

If you are travelling in spring, it is also worth checking air quality (fine dust and PM2.5) before planning long outdoor days — see [how bad is air quality in South Korea?](/how-bad-is-air-quality-in-south-korea).

## How To Add It To A Jeju Itinerary

Jeju Loveland works best as a short stop rather than the centrepiece of your day. You can pair it with coastal drives, local food stops, or one of Jeju’s many scenic natural attractions.

That balance is what makes the attraction useful in travel planning. It gives your itinerary some personality while still leaving plenty of time for the island’s better-known landscapes, beaches, and hiking spots.

## Travel Tips For Visitors

Go with an open mind and the right audience. The attraction is adult-themed, so it is best suited to couples, solo travellers, or adult groups who are comfortable with the concept.

It is also smart to combine it with other Jeju attractions so the visit feels more worthwhile. Since the park is relatively compact, you will get the most value by treating it as one stop in a fuller island day rather than a standalone outing.

## Jeju Loveland FAQs

### What is Jeju Loveland?

Jeju Loveland is an adult sculpture park on Jeju Island, South Korea, known for erotic art and playful installations.

### Is Jeju Loveland suitable for children?

No, it is an adult-themed attraction and is generally not suitable for children.

### How long do you need at Jeju Loveland?

Most visitors spend a short amount of time there, making it easy to include in a half-day Jeju itinerary.

### Is Jeju Loveland worth visiting?

Yes, if you enjoy unusual, quirky, and offbeat attractions. It is one of the most distinctive stops on Jeju Island.

### Where is Jeju Loveland located?

It is located on Jeju Island in South Korea.`,
    tags: ["Jeju", "Attractions", "Art", "Unusual", "Travel Guide"],
    authorSlug: "mina-park",
    updatedDate: "2026-05-18",
    contentType: "travel-tip",
  },
  {
    slug: "korean-sexuality",
    title: "Sex, Dating and Intimacy in South Korea: A Frank 2026 Guide",
    image: "/images/blogs/korean-sexuality/couple-gwanghwamun-gate-night.jpg",
    canonicalPath: "/korean-sexuality",
    metaTitle: "Korean Sexuality 2026: Dating, Love Motels, Laws & Culture",
    metaDescription:
      "A frank 2026 guide to sex and dating in South Korea: love motels, dating apps, the age of consent, contraception for travellers, LGBTQ+ life and the 4B debate.",
    summary:
      "How sex, dating and intimacy really work in South Korea in 2026: couple culture, love motels, dating apps, the laws visitors need to know, sexual-health access and the debates reshaping Korean relationships.",
    content: `South Korea can look buttoned-up from the outside. Public displays of affection are mild, sex education is famously thin and many young adults live with their parents until they marry. Then you notice the neon hearts above the motel alleys, the couples in matching outfits and the padlocks piled up on Namsan. Korea's attitudes to sex and dating are full of contradictions, and they're changing fast.

This guide is for adult travellers, expats and the curious. It covers how dating works, why love motels exist, what the law actually says, how to get contraception and sexual-health care as a visitor, and the big debates shaping Korea in 2026. Legal and health facts were checked against current Korean and international reporting in October 2026. It's a frank explainer, not explicit content, and it's not legal or medical advice.

## Korean Sex and Dating Laws at a Glance (2026)

| Topic | Where things stand in 2026 |
| --- | --- |
| Age of consent | 16, raised from 13 by a Criminal Act amendment in May 2020 |
| Adultery | Not a crime since the Constitutional Court struck the law down in February 2015 |
| Buying or selling sex | Illegal under the 2004 sex-trade punishment law, for foreigners too |
| Pornography | Distributing obscene material is illegal, and major porn sites are blocked |
| Sexual deepfakes | Possessing, buying, storing or even viewing them is a crime (law passed September 2024) |
| Same-sex marriage | Not recognised; a July 2024 Supreme Court ruling gave same-sex partners health-insurance dependant rights |
| Abortion | No longer criminalised since 2021, but there's still no replacement law; abortion pills are due by March 2027 |
| Emergency contraception | Prescription only |
| Birth rate | 0.80 children per woman in 2025 (preliminary), up from 0.75 in 2024 |

![Neon hearts above a motel alley, the classic look of Korea's love-motel districts (illustration)](/images/blogs/korean-sexuality/seoul-love-motel-alley-illustration.jpg)

Neon hearts above a motel alley, the classic look of Korea's love-motel districts (illustration). AI-generated illustration (not a photo of a real place or person).

## Conservative on the Surface, Busy in Private

Korean culture still leans conservative in public. Big public kisses get looks, sex is rarely discussed at home and school sex education is widely criticised as outdated. Many unmarried Koreans live with their parents into their late twenties or thirties, partly because housing is so expensive.

That's the main reason Korea has such a huge love-motel industry. If neither of you can take a partner home, you rent a room by the hour. Nobody treats it as seedy. Students, office workers and married couples all use them, and the motels compete on themed rooms, giant TVs, game consoles and spa baths.

## How Dating Works in Korea

Korean dating culture is intense, coupley and very calendar-driven.

- **Sogaeting (소개팅):** a blind date set up by friends. It's still one of the most common ways to meet someone.
- **"Some" (썸):** the flirty, undefined stage before you're officially a couple. A lot of Korean pop songs are about it.
- **Couple culture:** matching outfits, matching rings, couple phone cases and shared profile photos are all normal.
- **Anniversaries:** couples count days, not months. The 100-day anniversary is a big deal, followed by 200, 300 and 1,000 days.
- **Romance holidays:** on Valentine's Day (14 February) women traditionally give chocolate, on White Day (14 March) men return the favour, and on Black Day (14 April) singles eat jjajangmyeon (black-bean noodles) together.

![A Korean couple's anniversary celebration, with candles spelling out a message around a cake](/images/blogs/korean-sexuality/couple-anniversary-candles.jpg)

A Korean couple's anniversary celebration, with candles spelling out a message around a cake. Photo: Beskilbe via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Candle_of_Lover%27s_Anniversary%28Feb,_2007,_Korea%29.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

### Dating Apps

Apps are now mainstream. Tinder led Korea's dating-app market on monthly active users at the end of 2025, ahead of the Korean apps Glam and Wippy, according to Digital Daily. Market tracker Sensor Tower reported that Tinder overtook Wippy on monthly in-app revenue for the first time in January 2026. Amanda, one of the older Korean apps, is also still around. As a foreigner you'll mostly meet people on Tinder, especially in Seoul. Be ready for a lot of language-exchange openers.

### The Love Locks of Namsan

The terraces around N Seoul Tower on Namsan are covered in thousands of padlocks left by couples, often with names and dates written on them. It's one of Seoul's classic date spots, especially at sunset.

![Love locks left by couples at N Seoul Tower on Namsan, Seoul](/images/blogs/korean-sexuality/n-seoul-tower-love-locks.jpg)

Love locks left by couples at N Seoul Tower on Namsan, Seoul. Photo: Republic of Korea (Korea.net) via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Korea_N_Seoul_Tower_20140722_05_%2814743588703%29.jpg), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/).

## Love Motels: A Practical Guide

Love motels (often just called motels, 모텔) cluster around subway stations, university districts and nightlife areas. They're easy to spot thanks to neon signs and car-park entrances screened by plastic strip curtains.

- **Daesil (대실) vs sukbak (숙박):** daesil is a daytime "rest" of a few hours and costs a fraction of the overnight rate. Sukbak is a normal overnight stay, usually with a late check-in after the daesil window closes.
- **Booking:** the big Korean apps are Yanolja and Yeogi Eottae, which are largely Korean-language. Visitors can book many motels through Agoda, Booking.com, Trip.com or NOL World, Yanolja's site for international users, or just walk in.
- **Privacy:** check-in is designed to be discreet. Some places use key-drop windows or self-check-in kiosks.
- **Value:** for budget travellers, a modern motel is often a cleaner and better-equipped option than a hostel or an ageing hotel.
- **Rules:** guests must be adults. Unmarried couples, foreigners and same-sex couples can all book rooms, though how staff behave varies by property.

![Hongdae at night, one of the Seoul nightlife districts where young couples meet](/images/blogs/korean-sexuality/hongdae-night-seoul.jpg)

Hongdae at night, one of the Seoul nightlife districts where young couples meet. Photo: Ken Eckert via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hongdae_Party_District_at_Night,_Seoul.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## What the Law Says

**Age of consent.** In 2020 Korea raised the age of consent from 13 to 16. Sex with anyone under 16 is treated as statutory rape. For victims aged 13 to 15, this applies to offenders aged 19 or older.

**Adultery.** Korea used to jail people for cheating on a spouse. The Constitutional Court ruled the adultery law unconstitutional in February 2015. Infidelity can still matter in divorce cases.

**Prostitution.** Buying and selling sex is illegal under a law passed in 2004, and foreigners can be prosecuted too. Hostess bars and "room salons" are best avoided. They're expensive, they can turn into cost traps, and they sit in a legal grey zone at best.

**Porn.** Distributing obscene material is illegal, and Korea's communications regulator blocks most major porn sites. That's why so many people in Korea use VPNs.

**Deepfakes and spy cams.** After a wave of deepfake sex crimes, the National Assembly voted on 26 September 2024 to criminalise possessing, buying, storing or viewing sexually explicit deepfakes. The penalty is up to three years in prison or a fine of up to 30 million won. Secretly filming people (molka) is also a serious crime. In public toilets, changing rooms and cheap accommodation, it's worth a quick look for tiny holes or odd fittings.

## Sexual Health for Travellers

- **Condoms** are sold openly at convenience stores (GS25, CU, 7-Eleven, Emart24) and pharmacies.
- **The daily contraceptive pill** is generally sold over the counter at pharmacies (약국), although some brands need a prescription.
- **Emergency contraception (the morning-after pill) needs a prescription.** Go to an obstetrics and gynaecology clinic (산부인과, sanbuingwa) or a hospital emergency room, then take the prescription to a pharmacy. In Seoul, many clinics have English-speaking doctors.
- **Abortion.** The Constitutional Court ruled the abortion ban unconstitutional in 2019, and the criminal ban lost effect on 1 January 2021. Lawmakers still haven't passed a replacement law, so services are legal but unregulated. In September 2026 the government announced a plan to introduce medication abortion for pregnancies up to nine weeks by the end of March 2027. For the first two years, prescribing and dispensing will happen only at hospitals. The pill (Mifegymiso) was still under review by the Ministry of Food and Drug Safety at the time of writing.
- **STI testing** is available at urology (비뇨기과) and OB/GYN clinics. Many clinics take walk-ins.

![Jeju Loveland at sunset. The sculpture park is Korea's best-known adult attraction](/images/blogs/korean-sexuality/jeju-loveland-sunset.jpg)

Jeju Loveland at sunset. The sculpture park is Korea's best-known adult attraction. Photo: Damara Avila via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sunset_at_Love_Land_at_Jeju_Island_-_25779887283.jpg), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/).

## Sex, Art and Humour: Korea's Adult Attractions

Korea has a cheeky side. [Jeju Loveland](/jeju-loveland) is an outdoor park of erotic sculptures, and it's a staple of Jeju trips for adults. Haesindang Park in Samcheok, on the east coast, is filled with phallic carvings linked to a local fishing-village legend. Both are tongue-in-cheek and adults-only in spirit, so they're not for kids.

## LGBTQ+ Life in Korea

Korea doesn't recognise same-sex marriage or civil unions, and there's no national anti-discrimination law. There has been progress, though. In July 2024 the Supreme Court ruled that the National Health Insurance Service had to give So Seong-wook dependant coverage through his partner Kim Yong-min, a first for a same-sex couple. The ruling didn't legalise same-sex marriage.

Seoul's queer scene is centred on Itaewon's "Homo Hill" and the bars of Jongno 3-ga. The Seoul Queer Culture Festival is held in central Seoul every early summer. It draws big crowds and, every year, a loud counter-protest from conservative church groups. See our [Itaewon nightlife guide](/south-korea/seoul/guides/nightlife-itaewon) for the wider area.

![The Seoul Queer Culture Festival at Seoul Plaza in 2018, behind a police line](/images/blogs/korean-sexuality/seoul-queer-culture-festival-2018.jpg)

The Seoul Queer Culture Festival at Seoul Plaza in 2018, behind a police line. Photo: revi via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2018_%EC%84%9C%EC%9A%B8%ED%80%B4%EC%96%B4%EB%AC%B8%ED%99%94%EC%B6%95%EC%A0%9C_01.jpg), [CC BY 2.0 KR](https://creativecommons.org/licenses/by/2.0/kr/).

## The Bigger Debates: Birth Rates and the Gender Divide

Korea has the world's lowest fertility rate. Official preliminary figures released in February 2026 put it at 0.80 children per woman for 2025, up from 0.75 in 2024 and 0.72 in 2023. That's the first meaningful rebound in years, but it's still far below the 2.1 a population needs to replace itself.

Behind the numbers is a sharp gender divide among young Koreans. The online "4B" movement, which rejects dating, sex, marriage and childbirth with men, began in Korea and drew worldwide attention in late 2024. It's a small movement, but it reflects real frustration with workplace inequality, the burden of childcare and digital sex crimes. Meanwhile, many young men complain about mandatory military service and feeling blamed. If you date in Korea, you'll probably hear about both sides.

## Etiquette Tips for Visitors

- Keep PDA moderate. Holding hands and a quick kiss are fine, but anything more draws stares.
- Consent matters, and so does the law. "No" in any language means no, and drink-spiking does happen in nightlife districts. Watch your drink.
- Don't assume a language-exchange meet-up is a date, or the other way round. Ask.
- Be discreet about relationships at work. Office romances are common but kept quiet.
- Read up on [Korean nightlife culture](/culture/korean-nightlife-culture) and [drinking culture](/culture/korean-drinking-culture) before a big night out.

## Korean Sexuality FAQ

### What is the age of consent in South Korea?

The age of consent in South Korea is 16. It was raised from 13 by a Criminal Act amendment in May 2020.

### Is adultery still illegal in Korea?

No. The Constitutional Court struck down the adultery law in February 2015, so cheating is no longer a crime. It can still matter in divorce proceedings.

### Can unmarried couples share a hotel room in Korea?

Yes. Hotels, guesthouses and love motels don't ask about marital status. Guests just need to be adults.

### Is porn legal in South Korea?

Distributing obscene material is illegal and most major porn sites are blocked in Korea. Sexually explicit deepfakes are a separate crime: since September 2024, even viewing or possessing them is punishable.

### Can I get the morning-after pill at a Korean pharmacy?

Not without a prescription. See an OB/GYN clinic (산부인과) or a hospital emergency room first, then take the prescription to a pharmacy.

### Is South Korea LGBTQ-friendly?

It's mixed. Same-sex relationships are legal but not recognised in marriage law. Seoul has an established queer scene in Itaewon and Jongno and an annual Queer Culture Festival, but attitudes outside the big cities are more conservative.

### What dating apps do Koreans use?

Tinder leads the market, followed by Korean apps such as Glam and Wippy. Amanda is another long-running Korean app.

## Photo Credits

Photos are from Wikimedia Commons under Creative Commons licences. Each was resized and cropped to a 16:9 frame. Illustrations marked as such are AI-generated and don't show real people or places.

- Hero image (a couple at Gwanghwamun Gate, Gyeongbokgung Palace, at night): Insightwm, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:Couple_embracing_in_front_of_Gyeongbokgung_Palace_amid_traffic.jpg)
- Neon hearts above a motel alley, the classic look of Korea's love-motel districts (illustration): AI-generated illustration created for Travelling South Korea
- A Korean couple's anniversary celebration, with candles spelling out a message around a cake: Beskilbe, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:Candle_of_Lover%27s_Anniversary%28Feb,_2007,_Korea%29.jpg)
- Love locks left by couples at N Seoul Tower on Namsan, Seoul: Republic of Korea (Korea.net), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/), [source](https://commons.wikimedia.org/wiki/File:Korea_N_Seoul_Tower_20140722_05_%2814743588703%29.jpg)
- Hongdae at night, one of the Seoul nightlife districts where young couples meet: Ken Eckert, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:Hongdae_Party_District_at_Night,_Seoul.jpg)
- Jeju Loveland at sunset. The sculpture park is Korea's best-known adult attraction: Damara Avila, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/), [source](https://commons.wikimedia.org/wiki/File:Sunset_at_Love_Land_at_Jeju_Island_-_25779887283.jpg)
- The Seoul Queer Culture Festival at Seoul Plaza in 2018, behind a police line: revi, [CC BY 2.0 KR](https://creativecommons.org/licenses/by/2.0/kr/), [source](https://commons.wikimedia.org/wiki/File:2018_%EC%84%9C%EC%9A%B8%ED%80%B4%EC%96%B4%EB%AC%B8%ED%99%94%EC%B6%95%EC%A0%9C_01.jpg)`,
    tags: ["Culture", "Dating", "Relationships", "Nightlife", "Seoul", "Practical"],
    authorSlug: "mina-park",
    updatedDate: "2026-10-05",
    contentType: "travel-tip",
  },
  {
    slug: "gonjiam-haunted-asylum",
    title: "Gonjiam Psychiatric Hospital: The Real Story of Korea's Most Haunted Asylum",
    image: "/images/blogs/gonjiam-haunted-asylum/gonjiam-asylum-corridor-illustration.jpg",
    canonicalPath: "/gonjiam-haunted-asylum",
    metaTitle: "Gonjiam Haunted Asylum: The Real Story, the Film & Can You Visit?",
    metaDescription:
      "The true story of Gonjiam Psychiatric Hospital: why it closed, the legends, the 2018 horror film, its 2018 demolition, what's on the site now and Halloween 2026 alternatives.",
    summary:
      "The real history behind Korea's most famous haunted asylum, from the CNN list and the hit 2018 horror film to its demolition, what stands there now and where to get scared near Seoul instead.",
    content: `For years, an empty hospital on a wooded hillside south-east of Seoul was the most famous haunted place in Korea. CNN listed it among the world's freakiest places, YouTubers live-streamed midnight break-ins, and in 2018 it inspired one of Korea's biggest horror hits. Then, two months after the film came out, the bulldozers arrived.

This is the real story of Gonjiam Psychiatric Hospital: what it was, why it closed, what's true about the legends, what's on the site now and where to get your scare instead this Halloween. Facts were checked against Korean reporting and the Korean Film Council's figures in October 2026.

## Gonjiam Asylum at a Glance

| Fact | Details |
| --- | --- |
| Real name | Namyang Neuropsychiatric Hospital (남양신경정신병원) |
| Location | Sindae-ri, Gonjiam-eup, Gwangju-si, Gyeonggi-do (about 40 km south-east of central Seoul) |
| Opened | Early 1980s (the main three-storey building was approved for use in August 1982) |
| Closed | 1996 |
| Famous for | CNN's 2012 list of the "7 freakiest places" in the world, and the 2018 film Gonjiam: Haunted Asylum |
| Demolished | 28–30 May 2018 |
| Can you visit? | No. The building is gone and the land is private property |

## What Gonjiam Psychiatric Hospital Really Was

Despite the nickname, it wasn't a state asylum. Namyang Neuropsychiatric Hospital was a private psychiatric clinic in the village of Sindae-ri, in the Gonjiam area of Gwangju (the Gyeonggi city, not the bigger Gwangju in the south-west). The JoongAng Ilbo reported in 2018 that its main three-storey building was approved for use in August 1982, and two smaller buildings were added in the early 1990s.

It closed suddenly in 1996. The JoongAng Ilbo's account is undramatic. After the founder died, his two sons inherited the hospital, but both lived in the United States. Stricter environmental rules meant it would have needed new sewage facilities, so they gave up running it. The building then sat empty for more than 20 years.

![Gwangju, Gyeonggi Province: the hills and river valley around the Gonjiam area](/images/blogs/gonjiam-haunted-asylum/gwangju-gyeonggi-panorama.jpg)

Gwangju, Gyeonggi Province: the hills and river valley around the Gonjiam area. Photo: Academy of Korean Studies via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Gwangju,_Gyeonggi.jpg), [KOGL Type 1](https://www.kogl.or.kr/info/licenseTypeEn.do).

## The Legends and the Truth

An abandoned hospital in the woods was always going to attract stories. The best-known legends say the director went mad and killed himself, that patients died in mysterious ways, or that the hospital closed after mass deaths. There's no record supporting any of them. The closure came down to inheritance and regulation, not ghosts.

The legends didn't need to be true to spread, though. The site became a staple of Korea's heungga chehom (흉가 체험) culture, where people film themselves exploring "haunted houses". In 2012 CNN put Gonjiam on its list of the seven freakiest places on the planet, alongside spots like the Sedlec Ossuary in the Czech Republic. That made it a pilgrimage site for thrill-seekers, who left graffiti and rubbish behind. Locals complained for years about trespassers arriving at night.

## Gonjiam: Haunted Asylum, the 2018 Film

Director Jung Bum-shik turned the legend into Gonjiam: Haunted Asylum, a found-footage horror film released on 28 March 2018. In the film, the crew of a horror web show live-stream their exploration of the hospital and fake a few scares to boost viewer numbers, until things stop being fake. The cast includes Wi Ha-joon, who later found global fame in Squid Game.

The low-budget film was a surprise smash. It opened at No. 1, and the Korean Film Council (KOFIC) puts its total at **2,689,877 admissions** and about US$15.1 million in Korea. At the time, it was one of the most successful Korean horror films ever.

The building's owner tried to stop it. They applied for an injunction against the release, arguing the film would wreck an ongoing sale of the property. In March 2018 the Seoul Central District Court rejected the request. It said the film was obviously fiction, wasn't about the owner, and that the rumours had circulated long before it was made. The producers said they didn't film inside the real hospital and recreated it from photos and videos already online.

## The Demolition and What's There Now

Two months after the film opened, the hospital was gone. A buyer for the land had finally been found, demolition was reported, and the buildings were pulled down between 28 and 30 May 2018. The new owner told local reporters there were too many complaints from residents to keep it standing.

The land changed hands again in April 2020, selling for about 4.99 billion won, according to Chosun Ilbo's property site Ddangjibgo. In September 2026, after a viral claim that a Coupang warehouse had been built on the site, Ddangjibgo checked and found the rumour was false. The Coupang Gonjiam 2 Center is about 200 metres away. The old hospital plot now holds three single-storey light-steel buildings owned by a glamping and accommodation company based in Paju.

So there's nothing left to explore, and the land is private. Please don't go looking for it at night. Trespassing is illegal, and the neighbours have had enough.

![Gonjiam Rock in the centre of Gonjiam-eup, the landmark that gives the town its name](/images/blogs/gonjiam-haunted-asylum/gonjiam-rock.jpg)

Gonjiam Rock in the centre of Gonjiam-eup, the landmark that gives the town its name. Photo: Trainholic via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gonjiam.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## Visiting Gonjiam Today

Gonjiam is now better known for autumn leaves and ski slopes than for ghosts.

- **Getting there:** Gonjiam Station is on the Gyeonggang Line between Pangyo and Yeoju. Pangyo connects to the Shinbundang Line from Gangnam.
- **Hwadam Forest (화담숲):** a beautifully landscaped forest garden at Konjiam Resort, famous for its autumn colour. Tickets for the peak foliage season, from late October to mid-November, sell out, so book on the official site and check opening days before you go.
- **Konjiam Resort:** one of the closest ski resorts to Seoul in winter.
- **Gonjiam Rock:** the rock and pine tree in the town centre that gives Gonjiam its name.

![Gonjiam Station on the Gyeonggang Line, the easiest way to reach Gonjiam from Seoul](/images/blogs/gonjiam-haunted-asylum/gonjiam-station.jpg)

Gonjiam Station on the Gyeonggang Line, the easiest way to reach Gonjiam from Seoul. Photo: Vitzro2011 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gonjiam_Station.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

![Hwadam Forest at Konjiam Resort, Gonjiam's big draw in autumn](/images/blogs/gonjiam-haunted-asylum/hwadam-forest-gonjiam.jpg)

Hwadam Forest at Konjiam Resort, Gonjiam's big draw in autumn. Photo: Thqkrdl via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%ED%99%94%EB%8B%B4%EC%88%B2.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## Where to Get Scared Instead: Halloween 2026 Near Seoul

If you want the Gonjiam thrill without breaking any laws, Seoul's theme parks go all-out for horror season.

- **Everland, Blood City Zero (Yongin):** the 10th edition of Everland's horror zone runs from 12 September to 22 November 2026, daily from 4pm to 9pm. It's an outdoor immersive show across five themed zones, directed by film-maker Lee Seok-hoon, and it's included with park admission.
- **Lotte World Adventure, "Invitation to a Strange World" (Jamsil):** a horror season in collaboration with the Junji Ito Collection anime, running from 19 September to 15 November 2026. The new night parade, Dark Fantasy Festival, starts at 8:20pm.
- **Korean horror on screen:** after Gonjiam, try A Tale of Two Sisters (2003), The Wailing (2016) and Train to Busan (2016). Explore more in our [Korean cinema guides](/cinema).

## Gonjiam Haunted Asylum FAQ

### Is Gonjiam Psychiatric Hospital real?

Yes. It was a real private psychiatric hospital, Namyang Neuropsychiatric Hospital, in Gonjiam-eup, Gwangju, Gyeonggi Province. It closed in 1996 and was demolished in May 2018.

### Can you visit the Gonjiam asylum?

No. The building was demolished in 2018 and the site is private land with new buildings on it. There's nothing left to see, and trespassing is illegal.

### Why did Gonjiam Psychiatric Hospital close?

According to the JoongAng Ilbo, the founder died and his sons, who lived in the United States, decided not to run it. Stricter environmental rules would have required new sewage facilities. The ghost stories about the director and patients have no factual basis.

### Was Gonjiam: Haunted Asylum filmed at the real hospital?

No. The production said it recreated the hospital using photos and videos of the real building, and a court found the film was clearly fiction.

### How many people watched Gonjiam: Haunted Asylum?

The Korean Film Council records 2,689,877 admissions in Korea.

### Is there a Coupang warehouse on the Gonjiam asylum site?

No. That rumour went viral, but Chosun Ilbo's property site checked in September 2026. The Coupang Gonjiam 2 Center is about 200 metres away. The hospital plot itself holds small light-steel buildings owned by a glamping and accommodation company.

## Photo Credits

Photos are from Wikimedia Commons under Creative Commons, public-domain or KOGL licences. Each was resized and cropped or padded to a 16:9 frame. The hero image is an AI-generated illustration of an abandoned hospital corridor, not a photo of the real Gonjiam building.

- Hero image (an abandoned hospital corridor, illustration): AI-generated illustration created for Travelling South Korea
- Gwangju, Gyeonggi Province: the hills and river valley around the Gonjiam area: Academy of Korean Studies, [KOGL Type 1](https://www.kogl.or.kr/info/licenseTypeEn.do), [source](https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Gwangju,_Gyeonggi.jpg)
- Gonjiam Rock in the centre of Gonjiam-eup, the landmark that gives the town its name: Trainholic, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:Gonjiam.jpg)
- Gonjiam Station on the Gyeonggang Line, the easiest way to reach Gonjiam from Seoul: Vitzro2011, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), [source](https://commons.wikimedia.org/wiki/File:Gonjiam_Station.jpg)
- Hwadam Forest at Konjiam Resort, Gonjiam's big draw in autumn: Thqkrdl, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:%ED%99%94%EB%8B%B4%EC%88%B2.jpg)`,
    tags: ["Culture", "Horror", "Film", "Gyeonggi", "Halloween", "Unusual"],
    authorSlug: "james-jeong",
    updatedDate: "2026-10-05",
    contentType: "travel-tip",
  },
  {
    slug: "what-is-maeshilju",
    title: "What Is Maeshil-Ju?",
    image: "/images/blogs/maeshilju/f918b5a38b86407282c40d956d28b6f9.jpg",
    canonicalPath: "/what-is-maeshilju",
    summary:
      "A guide to maeshil-ju, Korea's traditional plum liquor — how it tastes, how it is made, where to find it, and why it matters in Korean food culture.",
    content: `**Quick summary:** Maeshil-ju is a traditional Korean plum liquor made by steeping maesil (Korean green plums) in soju with sugar. It is sweet, tart, fragrant, and widely available in restaurants, bottle shops, and supermarkets. If you are exploring Korean drinks beyond soju and beer, this is one of the most culturally revealing options to try.

## What Is Maeshil-Ju?

Maeshil-ju is a traditional Korean plum liquor made by infusing maesil, or Korean plums, in alcohol and sweetening the result so it becomes fragrant, tart, and smooth. It is one of the easiest Korean drinks for travellers to understand because it sits somewhere between a dessert wine, a liqueur, and a home-style infusion. You will see it written as 매실주 in Korean, and in English it is often described as plum wine, plum liquor, or plum liqueur, though those labels only partly capture its character.

For visitors exploring South Korea, maeshil-ju is useful because it reveals how central fruit, seasonality, and preservation are in Korean food culture. It is not just a drink to order in a bar; it is also tied to household cooking, syrup making, and the broader way Koreans use maesil in everyday life. If you are travelling through [Seoul](/south-korea/seoul), [Jeju](/south-korea/jeju), [Busan](/south-korea/busan), or the southern plum-growing regions, maeshil-ju is one of the most culturally revealing drinks you can try.

## The Fruit Behind It

The key ingredient is maesil, the fruit of the maehwa tree, commonly called Korean green plum, Chinese plum, or Japanese apricot in English. The fruit is tart, aromatic, and not usually eaten raw at full ripeness, which is why it is so often transformed into syrups, teas, pickles, and liquor. Maesil season is especially important in Korea because households and restaurants buy the fruit in spring and early summer to prepare staples that will last much longer.

The drink often uses green or yellow plums, but yellow, ripe maesil are often better suited to maeshil-ju because they are softer, more fragrant, and give a smoother result when steeped in soju. That detail matters if you are buying a bottle or making your own, because the fruit choice strongly affects the final flavour. In practical terms, the drink is meant to preserve the aroma of the fruit rather than overwhelm it with alcohol.

## How It Tastes

Maeshil-ju is usually sweet, slightly tart, and very smooth, with a fruity aroma that makes it easy to drink chilled or on ice. Compared with harsher spirits, it is softer and more approachable, which is one reason it often appeals to travellers who are still getting used to Korean alcohol. Depending on the producer and age, it can range from light and refreshing to richer and more syrupy.

The flavour is closely tied to the balance of fruit, sugar, and base spirit. Because maesil itself is tart and fragrant, the finished drink can carry a clean plum aroma without tasting heavily fermented in the way some fruit wines do. If you are used to soju, makgeolli, or Korean rice wine, maeshil-ju usually feels more dessert-like and less grain-driven. For another traditional Korean liquor worth trying, see our guide to [sansachun](/travel-tips/sansachun-drink-guide), made from magnolia berries.

## How It Is Made

Traditional maeshil-ju is made by steeping maesil in soju, sometimes with sugar or honey added to soften the tartness and draw out the fruit flavours. The process is simple enough that it is often made at home, which is one reason it has a strong place in Korean domestic food culture. A common method is to pack cleaned plums and sugar into a sterilised jar, cover them with alcohol, and let the mixture infuse for around 100 days or more.

A typical recipe uses roughly 3 litres of soju at about 20% ABV and 100–150 grams of sugar per kilogram of plums, although recipes vary widely. The drink can be enjoyed sooner, but maturation for three to six months deepens the flavour considerably. That aging period is one reason the best bottles taste rounded rather than simply sweet.

## Origins and History

The exact origins of maeshil-ju are unknown, but it is generally thought to date back to the Goryeo Dynasty. That long timeline fits with the broader Korean tradition of preserving seasonal ingredients through fermentation, infusion, and syrup-making. Maesil itself has also had a medicinal reputation for centuries, appearing in Korean historical medical references and folk practice.

Maesil was historically valued for digestive and restorative uses, and it remains a familiar household ingredient today. This medicinal reputation helps explain why maeshil-based products are so common in Korea, from syrup and tea to liquor. In other words, maeshil-ju is not a novelty import or a modern craft trend; it is part of a deeper culinary and domestic tradition.

## Where You'll Find It

Travellers usually encounter maeshil-ju in restaurants, traditional Korean bars, and gift shops selling local liquor. It is a popular drink in Korea and is often sold under brand names rather than only as a homemade infusion. If you are moving through tourist-heavy districts or dining at a more traditional restaurant, you may see it listed alongside soju, beer, and makgeolli.

You are also likely to see maeshil products in places that focus on Korean pantry staples, because maesil is used far beyond alcohol. In that sense, maeshil-ju is part of a larger ecosystem of plum syrup, plum tea, and preserved plum condiments. For a traveller, this means the drink is often a useful clue that a place pays attention to traditional ingredients rather than just imported bar culture. If you want to compare it with more modern Korean drinking culture, our guide to the [best craft breweries in South Korea](/breweries-in-south-korea) covers the other side of the coin.

## Maeshil-Cheong and the Wider Maesil Family

To understand maeshil-ju properly, it helps to know about maeshil-cheong, the plum syrup that sits at the centre of Korean home cooking. Maesil-cheong is made by layering plums and sugar, then leaving them to release their juice over several months. That syrup is used as a condiment, sweetener, marinade ingredient, and even as a tea base mixed with hot or cold water.

This matters because the syrup and the liquor are connected through the same ingredient logic. When the sugar-to-fruit ratio is high enough, the fruit stays in syrup form; when it ferments or is steeped in alcohol, it becomes maeshil-ju instead. So if you are travelling and notice maesil in drinks, sauces, pickles, or tea, you are seeing different expressions of the same Korean ingredient tradition.

## How to Drink It

The most common way to drink maeshil-ju is chilled, sometimes over ice, especially in summer. It also works well as an aperitif or dessert drink because the fruit flavour is gentle and the sweetness softens the alcohol. In restaurants, it can be a good choice if you want something more refined than soju but less intense than stronger spirits.

Because it is sweet and smooth, maeshil-ju can also be used in cocktails or mixed drinks. Some travellers prefer it that way because the plum aroma can pair well with citrus, sparkling water, or lighter desserts. If you are trying it for the first time, start with a small glass chilled rather than expecting a dry fruit wine.

## Commercial Bottles and Brands

Maeshil-ju is widely sold in Korea in bottled form, and some of the better-known names include Mae Hwa Soo, Matchsoon, and Seoljungmae. These products vary in sweetness, ageing, and alcohol content, so two bottles can taste noticeably different even if they share the same broad category. If you are shopping in a bottle shop or supermarket, it is worth reading labels carefully because style and strength are not always obvious from the front of the bottle.

One useful detail for travellers is that maeshil-ju can range in alcohol content from 10 to 35 percent ABV, which is much wider than many visitors expect from a plum drink. That means some bottles are light and easygoing, while others are much closer to a spirit-based liqueur.

## Safety and Ingredients

It is worth paying attention to the fruit quality when making or buying maeshil-ju. Bruised or overripe fruit can cloud the drink, and damaged fruits should be avoided. Plum seeds can contain compounds associated with small amounts of prussic acid, although the risk diminishes with proper maturation and preparation.

For most travellers, this does not create any practical concern when buying commercial bottles, but it does explain why traditional recipes are careful about fruit selection and ageing. Korean cooking often treats ingredient handling as part of the final flavour profile, and maeshil-ju is a good example of that mindset. If you make it yourself at home, sterilised jars, clean fruit, and patience are essential.

## Why It Matters in Korea

Maeshil-ju matters because it sits at the intersection of drink, medicine, and preservation. Unlike many imported fruit liqueurs, it is deeply tied to a seasonal ingredient that appears across Korean kitchens in multiple forms. That gives it a domestic familiarity that makes it feel less like a novelty and more like part of everyday life.

It also reflects a broader Korean preference for layered flavour. Sweetness, tartness, and smooth alcohol are all balanced carefully, which aligns with the same sensibility you see in banchan, marinades, syrups, and fermented side dishes. For travellers, that makes maeshil-ju a helpful entry point into Korean food culture because it is both accessible and culturally meaningful.

## How Travellers Should Approach It

If you are travelling in South Korea, the easiest way to appreciate maeshil-ju is to think of it as a local plum liqueur with a long heritage rather than just a sweet drink. Order it in a traditional restaurant, look for it in a liquor shop, or try it alongside Korean food that benefits from a softer, fruit-forward pairing. It is especially pleasant with lighter dishes, grilled food, or as a slow drink at the end of a meal. For more ideas on pairing drinks with food in Korea, the [Myeongdong street food guide](/south-korea/seoul/guides/best-street-food-myeongdong) covers some of the best bites in Seoul.

You may also notice that maeshil-based drinks appear in places where local ingredients are emphasised, such as hanok-style restaurants, countryside markets, or premium Korean liquor shops. That is a strong clue that the drink has real cultural weight, not just tourist appeal. If you are building a food-and-drink itinerary across South Korea, maeshil-ju is one of the easiest traditional alcohols to fit into the experience.

Maeshil-ju is a Korean plum liquor made from maesil fruit, usually steeped in soju and sweetened so it becomes fragrant, tart, and smooth. It has deep roots in Korean food culture, is closely connected to maesil-cheong and other plum-based pantry staples, and remains widely available in both home and commercial forms.

For travellers, it offers a simple but memorable way to taste something distinctly Korean. It is traditional without being difficult, sweet without being childish, and versatile enough to appear in restaurants, bottle shops, and home kitchens alike. That balance is exactly why maeshil-ju remains such a useful drink to know when exploring South Korea.`,
    tags: ["Drinks", "Traditional", "Food", "Culture", "Plum Wine"],
    authorSlug: "mina-park",
    updatedDate: "2026-05-11",
    contentType: "travel-tip",
  },
  {
    slug: "how-bad-is-air-quality-in-south-korea",
    title: "How Bad Is Air Quality in South Korea?",
    image: "/images/blogs/air/danielle-austria-d7-dyUYp-a0-unsplash.jpg",
    canonicalPath: "/how-bad-is-air-quality-in-south-korea",
    metaTitle: "How Bad Is Air Quality in South Korea? Fine Dust, PM2.5 and Travel Tips",
    metaDescription:
      "A traveller-friendly guide to South Korea air quality: when fine dust (PM2.5) is worst, where is better (Jeju and the coast), and how to check AQI before sightseeing.",
    summary:
      "South Korea’s air quality changes by season and region. Here’s what fine dust (PM2.5) means for travellers, when it is worst, and how to plan your days around it.",
    content: `South Korea is a country of dramatic seasonal change, and that includes the air you breathe. On many days, the air quality is perfectly fine, especially in coastal areas and after rain, but at other times, fine dust and PM2.5 pollution can create hazy skies and uncomfortable outdoor conditions, particularly in [Seoul](/south-korea/seoul) and other major urban areas.

For travellers, this matters because air quality can affect how much time you want to spend outside, what you pack, and even how you plan your day. If you are visiting South Korea for sightseeing, hiking, or exploring cities on foot, it is worth understanding when the air tends to be worse, which regions are more affected, and how to check conditions before heading out.

## What air quality means in South Korea

South Korea commonly tracks air pollution using PM10, PM2.5, and ozone, with PM2.5 being especially important because it refers to fine particles small enough to enter deep into the lungs. AirKorea, the country’s official air quality service, uses a four-tier scale: Good, Moderate, Unhealthy, and Very Unhealthy.

That scale is simple, but it is useful for travellers. A “Good” or “Moderate” day usually means normal sightseeing conditions, while “Unhealthy” conditions can make long walks, outdoor markets, and strenuous activities feel less comfortable, especially for children, older travellers, and anyone with asthma or heart or lung conditions.

The key thing to remember is that South Korea does not have one permanent air quality level. Conditions change by season, weather pattern, and location, so the answer to “how bad is air quality in South Korea?” is often “it depends on where you are and when you go”.

## Why air quality can be poor

The biggest issue for many visitors is fine dust, often referred to locally as “yellow dust” or “fine dust.” This pollution can build up when weather conditions trap particles near the ground, and it may be worsened by regional pollution transport as well as local emissions from traffic and industry.

Spring is often the most noticeable period for poor air quality. Recent reporting in March 2026 showed Seoul and most regions were expected to stay at unhealthy levels through the weekend, with Seoul’s PM2.5 measured at 44 micrograms per cubic metre, above the national “bad” threshold of 35. The same reporting noted that poor air quality had been recorded roughly every other day in Seoul during that month.

Traffic congestion also contributes, especially in dense urban areas. In major cities, pollution can build up when wind is weak and the atmosphere is stagnant, which is why some days look much clearer than others even within the same week.

## How bad is it in Seoul?

Seoul is the city most travellers worry about, and for good reason. It is South Korea’s biggest travel hub, and when air quality turns bad, it is usually most visible there first. In February 2026, Seoul’s air quality sat at “unhealthy” levels on the US AQI scale, driven mainly by high PM2.5 concentrations.

That does not mean Seoul is constantly smoggy. Real-time AirKorea readings often move between categories, and some days are good or moderate. But Seoul is dense, busy, and exposed to the same spring dust episodes that affect much of the country, so it is one of the places where visitors are most likely to notice haze or reduced visibility.

If you are spending time in Seoul, the practical advice is simple: check the day’s air quality before scheduling a long walking itinerary, rooftop viewpoint, palace visit, or mountain hike. On bad days, you may still be able to enjoy the city, but you will be better off balancing outdoor time with cafés, museums, shopping malls, and underground transport.

If you are planning outdoor days in the city, guides like [hiking Bukhansan National Park](/south-korea/seoul/guides/hiking-bukhansan) are much more enjoyable on good-air days.

## Which parts of South Korea are better?

Air quality is not the same everywhere in the country. Coastal and less densely populated areas can often have better readings than central Seoul, and recent reporting noted relatively better conditions along parts of Gangwon’s east coast and in [Jeju](/south-korea/jeju) when much of the country was affected by poor air.

That matters for itinerary planning. If you are moving around South Korea, you may notice that air quality varies from place to place even on the same day. Mountainous areas, islands, and some rural regions can feel noticeably cleaner than crowded metropolitan zones, although they are not immune to dust events.

For travellers deciding where to stay, this can be a useful tie-breaker. If clean air is important to you, spending a night or two on Jeju or in coastal destinations may feel more pleasant than staying in the most traffic-heavy parts of Seoul during a spring dust spell. If you are building a Jeju plan, our [2-day Jeju itinerary](/itineraries/2-days-in-jeju) is a good starting point.

## When air quality is worst

The worst periods are often linked to seasonal weather patterns, especially spring. That is when travellers are most likely to run into dust and haze, and it is also when many people visit for cherry blossoms, outdoor festivals, and mild temperatures, which makes the issue more noticeable.

Recent coverage also pointed out that fine dust concentrations often peak between 10 a.m. and noon, a window that can be uncomfortable for outdoor activity. That is useful for tourists because it suggests you may want to do earlier morning or later afternoon sightseeing, or simply be flexible with outdoor plans if pollution is high around midday.

Poor air quality can also occur outside spring, but spring tends to be the season that creates the most headlines. During these episodes, even people without pre-existing health issues may feel throat irritation, watery eyes, or a general sense that the air feels heavy.

## How to check current air quality

The easiest way to stay informed is to use South Korea’s official AirKorea service, which provides current readings by location.

Third-party trackers can also help you compare cities or check real-time AQI before heading out. AQICN and AccuWeather both provide live air quality dashboards, and AQICN’s Seoul page shows real-time readings that can help travellers decide whether a day is suitable for outdoor sightseeing.

For travel planning, the goal is simple: check the day’s reading in the morning, then adjust your itinerary if conditions look unhealthy.

## What the numbers mean

South Korea’s official system uses four main categories: Good, Moderate, Unhealthy, and Very Unhealthy. In spring 2026 reporting, PM2.5 above 35 micrograms per cubic metre was classified as “bad,” and above 75 as “very bad” under the national system.

Travellers often see different scales online and wonder which one to trust. AirKorea uses local thresholds, while some international apps convert conditions into US AQI or other scoring systems. The safest approach is to focus on the practical meaning: good and moderate are usually fine for normal travel, while unhealthy and very unhealthy should prompt caution, especially for prolonged outdoor exposure.

## Who should be most careful

Most healthy adults can usually cope with a poor air day by reducing outdoor time, but some people should be more cautious. That includes children, older adults, and anyone with asthma, chronic lung conditions, cardiovascular disease, or other respiratory sensitivities.

Travellers who exercise outdoors should also pay attention. If you are planning long runs, hiking days, cycling trips, or all-day walking tours, poor air quality can make the experience more tiring and less enjoyable. On the worst days, indoor alternatives are often the better choice.

## What travellers can do

The easiest way to handle air quality is to plan around it rather than panic about it. Start by checking the forecast before you go out each morning, especially in spring. If the air is poor, move more of your day indoors and save your outdoor activities for a better time.

A few practical travel tips make a big difference:

- Check air quality before booking long walking or hiking days
- Keep a well-fitting mask in your bag for dusty or smoggy days
- Use public transport instead of long street-level walks when conditions are poor
- Book accommodation with good ventilation and air conditioning
- Build flexibility into your itinerary so you can swap outdoor and indoor days

These are not dramatic measures. They are just sensible trip-planning habits when travelling in a country with seasonal dust and urban pollution.

## Is South Korea still worth visiting?

Yes. Poor air quality is a real issue, but it is not constant, and it should not scare visitors away. Many travellers spend time in South Korea with no major problems at all, especially if they travel outside the worst dust periods or remain flexible on days when readings are high.

The most useful mindset is to treat air quality like weather. You would not assume every day in London or Paris will be sunny, and you should not assume every day in Seoul will be hazy either. South Korea can have excellent clear-air days, and the right response is simply to plan around the occasional bad one.

If your trip is short, this is especially important. A one-week itinerary gives you less room for bad-air days, so checking forecasts and keeping backups for indoor attractions can help you make the most of the visit.

## FAQ

### Is air quality in South Korea bad all year?

No. Air quality varies by season and location, and many days are good or moderate, but spring can bring worse fine-dust episodes.

### Is Seoul the worst place for air pollution?

Seoul is one of the most visible and commonly affected cities, but air quality changes across the country and some coastal or rural areas can be better.

### What is PM2.5?

PM2.5 is fine particulate matter small enough to enter deep into the lungs, which is why it is a major health concern during pollution episodes.

### How can I check air quality before going out?

Use AirKorea for official data and a real-time AQI app such as AQICN or AccuWeather for quick traveller-friendly checks.

### Should I cancel a trip because of air quality?

Usually no. It is better to monitor the forecast, stay flexible, and adjust your itinerary if a few days are poor rather than cancelling the whole trip.`,
    tags: ["Air Quality", "Health", "Seoul", "Jeju", "Practical"],
    authorSlug: "mina-park",
    updatedDate: "2026-05-21",
    contentType: "travel-tip",
  },
  {
    slug: "most-popular-korean-bikini-models-in-2025",
    title: "Most Popular Korean Bikini Models in 2026: 10 Swimsuit & Fitness Stars",
    image: "/images/blogs/most-popular-korean-bikini-models-in-2025/korean-bikini-models-2026-haeundae-beach.jpg",
    canonicalPath: "/most-popular-korean-bikini-models-in-2025",
    metaTitle: "Korean Bikini Models 2026: 10 Hottest Swimsuit & Fitness Stars",
    metaDescription:
      "From Waterbomb Goddess Kwon Eun-bi to Miss Bikini champ Shim Eu-ddeum: the Korean bikini models, fitness stars and summer icons to know in 2026.",
    summary:
      "The real Korean bikini models, fitness champions and summer-festival icons of 2026, with verified careers, latest news and where to see Korea's swimsuit culture in person.",
    content: `Search "Korean bikini models" and you get a mess: actresses, idols, fitness pros and random Instagram accounts, often with made-up bios. This 2026 update cleans that up. Every name below is a real adult public figure whose swimsuit, fitness or summer-stage fame is on the record, and we checked every career detail against current reporting (as of October 2026).

The list pulls from three worlds that overlap in Korea more than anywhere else: competition-tested fitness and bikini models, K-pop stars who rule the summer festival circuit, and actresses whose body-confident image made headlines. Travelling? Scroll to the end for where to see Korea's swimsuit culture in person, from Waterbomb to Haeundae Beach.

## Korean Bikini Models 2026 at a Glance

| Name | Famous for | Latest |
| --- | --- | --- |
| Kwon Eun-bi | The "Waterbomb Goddess" since 2023 | Joined RBW, single "Dejavu" (Sept 2026) |
| Shim Eu-ddeum | 2015 NABBA Korea Miss Bikini winner | Sydney Marathon finisher (Aug 2026) |
| Yoo Seung-ok | First Asian woman in Muscle Mania's top five | Fitness YouTube channel launched 2025 |
| Hwasa | Mamamoo's curve-proud star | Face of Comfort Lab's "I love my curve" (2026) |
| Ye Jung-hwa | Fitness model turned TV host | Married to actor Ma Dong-seok |
| Clara | The 2013 leggings first pitch | Chinese-language film career |
| Nana | After School, Mask Girl | Confirmed dating T.O.P (Oct 2026) |
| Hyuna | K-pop's boldest solo concepts | Latest single "Mrs. Nail" (2025) |
| Lee Hyori | Korea's original "sexy superstar" | Back in Seoul since 2024 |
| Karina | aespa leader, Waterbomb headliner | On the Waterbomb Seoul 2026 bill |

## 1. Kwon Eun-bi: The "Waterbomb Goddess"

![Kwon Eun-bi in May 2026](/images/blogs/most-popular-korean-bikini-models-in-2025/kwon-eun-bi-2026.jpg)

Kwon Eun-bi in May 2026. Photo: TV10 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kwon_Eun-bi_in_May_2026.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Kwon Eun-bi (born 27 September 1995) first found fame as leader of Iz*One, the group formed on Mnet's Produce 48 in 2018, and went solo in August 2021 after the group disbanded. Her summer-icon status comes down to one night. Her set at Waterbomb Seoul on 23 June 2023 went viral, Korean outlets including The Korea Economic Daily and Hankook Ilbo dubbed her the "Waterbomb Goddess" and the new "Summer Queen", and her song "Underwater" shot back up the charts.

The nickname stuck. Korean headlines still use it in 2026: in April she left Woollim Entertainment and signed with RBW, Mamamoo's agency, and on 3 September 2026 she released "Dejavu", her first single in about 16 months. Brands have leaned into the same image, with Sprite among her past endorsements.

## 2. Shim Eu-ddeum: Miss Bikini Champion Turned Fitness Star

![Shim Eu-ddeum at SPOEX 2015](/images/blogs/most-popular-korean-bikini-models-in-2025/shim-eu-ddeum-fitness-model.jpg)

Shim Eu-ddeum at SPOEX 2015. Photo: pdfman via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%28%EC%8A%A4%ED%8F%AC%EC%97%91%EC%8A%A42015%29_%EC%86%8C%EB%8B%89%EC%8A%A4_%EB%B6%80%EC%8A%A4%EC%97%90%EC%84%9C_%EB%B0%9C%EA%B2%AC%ED%95%9C_%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4_%EB%9D%BC%EC%9D%B8%EC%9D%98_%EB%AF%B8%EB%8B%88_%EC%9C%A0%EC%8A%B9%EC%98%A5%28%3F%29_%28Shim_Euddeum%29_%285%29.jpg), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

If you want a genuine bikini champion, Shim Eu-ddeum (born 1990) is it. In 2015 she won the Miss Bikini category at NABBA Korea. Her record also includes sports-model titles at WBC and NABBA Korea between 2014 and 2016, and second place in the figure category at Muscle Mania in 2014. She studied physical education at Dongduk Women's University and built a second career as a Pilates instructor and YouTuber. Her channel is called 힙으뜸 ("Hip Eu-ddeum").

Mainstream TV followed. She competed on Netflix's Physical: 100 in 2023 and played for FC Streaming Fighter on SBS's women's football show Goal Girls. In July 2026 she left Goal Girls after three years and three months, saying a new challenge lay ahead. In August she posted her finish at the 2026 Sydney Marathon, and her Bali holiday workout posts in September kept her in Korea's entertainment news.

## 3. Yoo Seung-ok: Korea's Original "Muscle Queen"

![Yoo Seung-ok at the Fitness Model Awards, 2015](/images/blogs/most-popular-korean-bikini-models-in-2025/yoo-seung-ok-fitness-model-awards.jpg)

Yoo Seung-ok at the Fitness Model Awards, 2015. Photo: SJ via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%EC%9C%A0%EC%8A%B9%EC%98%A5_%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4_%EB%AA%A8%EB%8D%B8_%EC%96%B4%EC%9B%8C%EB%93%9C%28Fitness_Model_Awards%29_in_%EC%BD%94%EB%A6%AC%EC%95%84_%E7%BE%8E_%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C_01.jpg), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Yoo Seung-ok (born 21 June 1990) won a special prize at the 2013 Miss Chungbuk Korea pageant and worked as a show model at the 2013 Seoul Motor Show. In November 2014 she became the first Asian woman to reach the top five at Muscle Mania in Las Vegas. In 2015 she was Maxim Korea's April cover girl and Korea's first UFC Octagon girl.

Small film roles followed, including Fabricated City (2017) and Champion (2018), along with variety appearances such as Running Man. In 2025 she launched a YouTube channel, 옥케이, covering her training, cycle-race preparation and taekwondo. In October 2025 she attended a photocall at Fashion Code 2026 S/S, and Korean entertainment sites were still running stories on her workout posts in autumn 2026.

## 4. Hwasa: The Curve-Proud Stage Icon

![Hwasa live in Seattle, March 2025](/images/blogs/most-popular-korean-bikini-models-in-2025/hwasa-live-seattle-2025.jpg)

Hwasa live in Seattle, March 2025. Photo: David Lee via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:HWASA_in_Seattle_-_54382519362.jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/).

Hwasa (Ahn Hye-jin, born 23 July 1995) is the Mamamoo member who made body confidence her brand. After moving to P Nation in 2023 she released "I Love My Body", which made the top ten of the Circle Digital Chart. In April 2026 the fitted-underwear brand Comfort Lab signed her as its model for an "I love my curve" campaign, built around respecting different body shapes instead of squeezing into standard sizes.

Her live shows push the same message. Her 2025 tour opened its North American leg in Seattle in March 2025 (pictured), and on 19 November 2025 her "Good Goodbye" performance with actor Park Jeong-min at the 46th Blue Dragon Film Awards went viral and sent the song back up the charts.

## 5. Ye Jung-hwa: The Fitness Model Who Married Ma Dong-seok

![Ye Jung-hwa at the 2015 World Diet Expo](/images/blogs/most-popular-korean-bikini-models-in-2025/ye-jung-hwa-fitness-model.jpg)

Ye Jung-hwa at the 2015 World Diet Expo. Photo: 따시기콘텐츠 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2015%EB%85%84_%EC%84%B8%EA%B3%84%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8%EC%97%91%EC%8A%A4%ED%8F%AC_%ED%8C%AC%EC%82%AC%EC%9D%B8%ED%9A%8C_%ED%98%84%EC%9E%A5%EC%97%90%EC%84%9C_%EC%98%88%EC%A0%95%ED%99%94_%283%29.jpg), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Ye Jung-hwa (born 23 May 1988) became a national name in 2015 through MBC's My Little Television, where she first drew national attention. She went on to host beauty and diet programmes, starred in the SBS web drama Girl's Love Story, and made a cameo in the 2017 crime hit The Outlaws.

She is married to actor Ma Dong-seok (Don Lee). The couple registered their marriage in 2021 and held a private wedding ceremony on 26 May 2024, with Outlaws co-stars among the guests.

## 6. Clara: The First Pitch That Broke the Internet

![Clara in December 2024](/images/blogs/most-popular-korean-bikini-models-in-2025/clara-lee-2024.jpg)

Clara in December 2024. Photo: K-POPIT 케이팝잇 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Clara_Lee_in_December_2024.png), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Clara (Lee Sung-min, born 1985) is the daughter of Lee Seung-kyu of the band Koreana. She became an overnight sensation in May 2013 when she threw a ceremonial first pitch at a professional baseball game in skin-tight leggings. Korean media hailed her as a sex symbol, and the "Clara pitch" is still the reference point whenever a celebrity first pitch goes viral.

After 2015 she moved into Chinese-language film, starring in the box-office hit Some Like It Hot (2016) and appearing in The Wandering Earth 2 (2023). In 2024 she picked up acting awards at the Asia International Film Festival for her Chinese work. In October 2025 she announced that she and the businessman she married in 2019 had completed an amicable divorce that August.

## 7. Nana: After School Star and 2026's Biggest Headline

![Nana in September 2026](/images/blogs/most-popular-korean-bikini-models-in-2025/nana-2026.jpg)

Nana in September 2026. Photo: K-POPIT 케이팝잇 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Nana_in_September_2026.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Nana (Im Jin-ah, born 14 September 1991) rose to fame in After School and its subunit Orange Caramel, then topped TC Candler's 100 Most Beautiful Faces list in 2014 and 2015. Her acting breakthrough came with Netflix's Mask Girl (2023), where she took on a demanding dual role. In September 2024 she left Pledis Entertainment after 15 years and signed with Sublime.

She's also the newest headline on this list. On 2 October 2026 both agencies confirmed she is dating rapper T.O.P, saying the pair met while filming his music video and began dating around June.

## 8. Hyuna: K-pop's Boldest Summer Queen

![Hyuna in July 2023](/images/blogs/most-popular-korean-bikini-models-in-2025/hyuna-2023.jpg)

Hyuna in July 2023. Photo: K-POPIT 케이팝잇 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:20230720_Kim_HyunA_in_July_2023_07.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Hyuna (Kim Hyun-ah, born 6 June 1992) debuted with Wonder Girls in 2007, became a star in 4Minute from 2009, and built a solo career on provocative, high-energy concepts that made her one of K-pop's most talked-about performers. She married singer Yong Jun-hyung on 11 October 2024.

Her latest single, "Mrs. Nail", came out on 30 April 2025. In February 2026 her side dismissed pregnancy rumours, saying she was exercising regularly and working on an album.

## 9. Lee Hyori: The Original Sexy Superstar

![Lee Hyori in May 2025](/images/blogs/most-popular-korean-bikini-models-in-2025/lee-hyori-2025.jpg)

Lee Hyori in May 2025. Photo: Marie Claire Korea via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lee_Hyori_in_May_2025_01.png), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Lee Hyori (born 10 May 1979) went from Fin.K.L, one of the biggest girl groups of the late 1990s, to a 2003 solo debut that made her Korea's defining "sexy superstar". The bikini connection is part of the legend. When SsangYong Motor laid off workers in 2014, she tweeted that if the new Tivoli sold well enough for them to be rehired, she would dance in front of the car in a bikini.

She married guitarist Lee Sang-soon in 2013 and lived on Jeju for more than a decade before moving back to Seoul in September 2024. That year she also hosted the KBS talk show The Seasons: Lee Hyori's Red Carpet.

## 10. Karina: Waterbomb's Headline Act

![Karina at Waterbomb Seoul, July 2025](/images/blogs/most-popular-korean-bikini-models-in-2025/karina-waterbomb-2025.jpg)

Karina at Waterbomb Seoul, July 2025. Photo: TheGsd via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aespa_Karina_at_the_2025_Waterbomb_Festival.png), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Karina (Yu Ji-min, born 11 April 2000) leads SM Entertainment's aespa. At Waterbomb Seoul 2025 on 5 July at KINTEX she performed "Up" and "Whiplash" on the main stage, then took over the Sprite stage with a water gun. Korean entertainment outlets and the Sprite campaign called her a "Waterbomb goddess" too. She was booked again for Waterbomb Seoul 2026, on 25 July.

## Miss Maxim: Where Korea's New Bikini Models Come From

Maxim Korea's annual Miss Maxim Contest is the closest thing Korea has to a public bikini-model audition. Readers pick the winner by online vote, with no judges' scores. Rounds have included uniform, bikini, costume and lingerie themes, and the entrants range from professional models to students and office workers.

The 2024 winner, a 20-year-old university student known as Jyu, took home ₩10 million and Maxim's December 2024 cover. The 2025 final (voting ran 7 to 10 November 2025) went to graduate student Chae Sol with 9,135 of 23,662 votes, the widest winning margin since 2019. Maxim also runs a separate plus-size contest, which we cover in our guide to [Korea's top plus-size models](/top-korean-plus-sized-models-in-2025).

## Where to See Korea's Swimsuit Culture in Person

### Waterbomb festival

Waterbomb is Korea's biggest water-fight music festival. Fans and artists split into teams and soak each other while K-pop, hip-hop and EDM acts perform. It started in 2015, and the 2026 Seoul edition ran from 24 to 26 July at KINTEX in Goyang and its lineup included Taemin, Jay Park, Karina and Sunmi. The festival now tours other Korean cities and goes abroad: Singapore hosted an edition in August 2025. Wear quick-dry clothes and keep your phone in a waterproof pouch.

### Haeundae Beach, Busan

Haeundae is Korea's most famous city beach and the classic summer photoshoot backdrop. Our [Haeundae Beach guide](/south-korea/busan/guides/haeundae-beach-guide) covers the practical side. One thing to know before you go: plenty of Korean beachgoers wear rash guards and cover-ups, so a bikini gets more attention here than it would in Europe.

### Jeju Island

Jeju's beaches are another favourite for swimwear shoots. Pair a beach day with something cheekier at [Jeju Loveland](/jeju-loveland), the island's adults-only sculpture park.

## Why Korea's Bikini Look Has Changed

For years, Korea's ideal was simply "slim". The rise of fitness models like Yoo Seung-ok and Shim Eu-ddeum moved it towards toned and athletic, and stars like Hwasa have pushed the conversation further towards curves and body confidence. You'll see all three looks on Korean social media and in summer ads. For the background, read our guides to [Korean beauty standards](/culture/korean-beauty-standards) and [Korean fitness models and gym culture](/culture/korean-fitness-models).

## Korean Bikini Models FAQ

### Who is the most popular Korean bikini model in 2026?

There's no official ranking. Kwon Eun-bi (the "Waterbomb Goddess"), fitness champion Shim Eu-ddeum and Muscle Mania pioneer Yoo Seung-ok are the names most closely tied to swimsuit and summer fame, while Hwasa, Nana and Karina are the biggest mainstream stars on this list.

### Why is Kwon Eun-bi called the "Waterbomb Goddess"?

Her performance at Waterbomb Seoul in June 2023 went viral, and Korean media began calling her the "Waterbomb Goddess" and the new "Summer Queen". Headlines still use the name in 2026.

### Does Korea have bikini competitions?

Yes. Fitness federations such as NABBA Korea run bikini and sports-model categories (Shim Eu-ddeum won Miss Bikini at NABBA Korea in 2015), and Muscle Mania has launched several Korean careers. Maxim Korea's reader-voted Miss Maxim Contest also includes a bikini round.

### When is Waterbomb festival?

Waterbomb runs in summer. The 2026 Seoul edition was held from 24 to 26 July at KINTEX in Goyang, with more dates in other cities. Check the official Waterbomb channels for next year's lineup.

### Is it OK to wear a bikini at Korean beaches?

Yes. Bikinis are fine at Korean beaches and pools, although many locals prefer rash guards and cover-ups. Cover up when you leave the beach, especially in town or on public transport.

## Photo Credits

All photos of people are from Wikimedia Commons under Creative Commons licences. Each was resized and, where needed, cropped or padded to a 16:9 frame.

- Hero image (Haeundae Beach, Busan): StephNurnberg, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), [source](https://commons.wikimedia.org/wiki/File:Haeundae_Beach_in_Busan.jpg)
- Kwon Eun-bi in May 2026: TV10, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Kwon_Eun-bi_in_May_2026.png)
- Shim Eu-ddeum at SPOEX 2015: pdfman, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:%28%EC%8A%A4%ED%8F%AC%EC%97%91%EC%8A%A42015%29_%EC%86%8C%EB%8B%89%EC%8A%A4_%EB%B6%80%EC%8A%A4%EC%97%90%EC%84%9C_%EB%B0%9C%EA%B2%AC%ED%95%9C_%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4_%EB%9D%BC%EC%9D%B8%EC%9D%98_%EB%AF%B8%EB%8B%88_%EC%9C%A0%EC%8A%B9%EC%98%A5%28%3F%29_%28Shim_Euddeum%29_%285%29.jpg)
- Yoo Seung-ok at the Fitness Model Awards, 2015: SJ, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:%EC%9C%A0%EC%8A%B9%EC%98%A5_%ED%94%BC%ED%8A%B8%EB%8B%88%EC%8A%A4_%EB%AA%A8%EB%8D%B8_%EC%96%B4%EC%9B%8C%EB%93%9C%28Fitness_Model_Awards%29_in_%EC%BD%94%EB%A6%AC%EC%95%84_%E7%BE%8E_%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C_01.jpg)
- Hwasa live in Seattle, March 2025: David Lee, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), [source](https://commons.wikimedia.org/wiki/File:HWASA_in_Seattle_-_54382519362.jpg)
- Ye Jung-hwa at the 2015 World Diet Expo: 따시기콘텐츠, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:2015%EB%85%84_%EC%84%B8%EA%B3%84%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8%EC%97%91%EC%8A%A4%ED%8F%AC_%ED%8C%AC%EC%82%AC%EC%9D%B8%ED%9A%8C_%ED%98%84%EC%9E%A5%EC%97%90%EC%84%9C_%EC%98%88%EC%A0%95%ED%99%94_%283%29.jpg)
- Clara in December 2024: K-POPIT 케이팝잇, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), [source](https://commons.wikimedia.org/wiki/File:Clara_Lee_in_December_2024.png)
- Nana in September 2026: K-POPIT 케이팝잇, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Nana_in_September_2026.png)
- Hyuna in July 2023: K-POPIT 케이팝잇, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), [source](https://commons.wikimedia.org/wiki/File:20230720_Kim_HyunA_in_July_2023_07.jpg)
- Lee Hyori in May 2025: Marie Claire Korea, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), [source](https://commons.wikimedia.org/wiki/File:Lee_Hyori_in_May_2025_01.png)
- Karina at Waterbomb Seoul, July 2025: TheGsd, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), [source](https://commons.wikimedia.org/wiki/File:Aespa_Karina_at_the_2025_Waterbomb_Festival.png)`,
    tags: ["Culture", "Models", "Fitness", "K-pop", "Waterbomb", "Busan"],
    authorSlug: "james-jeong",
    updatedDate: "2026-10-04",
    contentType: "travel-tip",
  },
  {
    slug: "top-korean-plus-sized-models-in-2025",
    title: "Top Korean Plus-Size Models in 2026: The Curvy Stars Rewriting K-Beauty",
    image: "/images/blogs/top-korean-plus-sized-models-in-2025/korean-plus-size-models-2026-ddp-seoul.jpg",
    canonicalPath: "/top-korean-plus-sized-models-in-2025",
    metaTitle: "Korean Plus-Size Models 2026: Top Curvy Models & Icons",
    metaDescription:
      "Meet Korea's top plus-size models in 2026, from pioneer Kim Ji-yang to Maxim contest winners Ssunbiki, Ah Seung-yeon and Jang Ye-na, plus Hwasa's curve campaign.",
    summary:
      "Korea's plus-size and curvy modelling scene in 2026: the pioneer who started it, the Maxim contest winners, the agencies changing the industry and tips for curvy travellers.",
    content: `Korea is famous for one of the world's toughest beauty standards. That's exactly why its plus-size models get so much attention. They've built careers in an industry that barely made room for them, through self-published magazines, viral contests and a new wave of size-diverse agencies.

This 2026 guide covers the real names behind Korea's plus-size and curvy modelling scene: who they are, what they've achieved, and what they're doing now. Every fact is checked against Korean and international reporting (as of October 2026), and everyone featured is an adult.

## Korean Plus-Size Models 2026 at a Glance

| Name | Breakthrough | Why she matters |
| --- | --- | --- |
| Kim Ji-yang (Gee-yang Kim) | Full Figured Fashion Week, LA, 2010 | Korea's first plus-size model; founded 66100 |
| Ssunbiki | Won Maxim's first natural-size contest, 2021 | Maxim cover; Netflix's The Influencer (2024) |
| Ah Seung-yeon | Won Maxim's plus-size contest, 2022 | Maxim August 2022 cover |
| Jang Ye-na | Won Maxim's plus-size contest, 2023 | Maxim's flagship plus-size model in 2025–26 |
| Hwasa | "I Love My Body" (2023) | Face of Comfort Lab's "I love my curve" (2026) |

## What Counts as "Plus-Size" in Korea?

Less than you'd think. Korean women's clothing is traditionally sized 44, 55, 66 and 77, and The Korea Times has noted that a Korean 66 is roughly a US size 6. Kim Ji-yang sums up the gap: "When I was in LA, I was too skinny to do plus-size modelling, but in Korea, I am just a fat woman." When Maxim Korea and the Korea Model Association launched their contest in 2021, the only entry requirement was wearing a women's size 66 or above. There were no limits on height, weight, age, nationality or experience.

## 1. Kim Ji-yang: Korea's First Plus-Size Model

Kim Ji-yang (also written Gee-yang Kim, born 1986 in Seoul) couldn't get work in Korea, so she went abroad. After sending photos to agencies worldwide, she debuted at Full Figured Fashion Week in Los Angeles in 2010 and went on to model in the US and the Caribbean.

Back home, she made her own platform. In summer 2014 she launched 66100, Korea's first plus-size fashion magazine. The name combines the largest standard sizes in Korean womenswear (66) and menswear (100). 66100 grew into a clothing brand, and she says 66100 was the first to make 120-size (4XL) underwear.

The pushback was brutal. AFP reported in 2016 that she had faced death threats and online abuse, and that she had taken some trolls to court. She has also printed hateful comments in her own magazine to take away their power. She published a book in 2023, and in a June 2025 Korea Herald feature, novelist Erin Zhurkin pointed to her as one of the people speaking up for change.

## 2. Ssunbiki: The Contest Winner Who Went Viral

![Ssunbiki at the 2021 Maxim Natural Size Model Contest](/images/blogs/top-korean-plus-sized-models-in-2025/ssunbiki-maxim-natural-size-contest-2021.jpg)

Ssunbiki at the 2021 Maxim Natural Size Model Contest. Photo: 머길 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%EC%8D%AC%EB%B9%84%ED%82%A4_%EB%A7%A5%EC%8B%AC_%EB%82%B4%EC%B6%94%EB%9F%B4%EC%82%AC%EC%9D%B4%EC%A6%88_%EB%AA%A8%EB%8D%B8_%EC%BD%98%ED%85%8C%EC%8A%A4%ED%8A%B8.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Ssunbiki won the grand prize at the first Maxim Natural Size Model Contest in July 2021, co-hosted by Maxim Korea and the Korea Model Association. The prize was ₩10 million and the cover of Maxim's August 2021 issue. The Korean outlet Insight framed it as the first time in Maxim Korea's 20 years that a plus-size model had made the cover. Maxim later said videos of the contest and its winner had passed 10 million YouTube views.

![Ssunbiki on the contest runway, 2021](/images/blogs/top-korean-plus-sized-models-in-2025/ssunbiki-runway-2021.jpg)

Ssunbiki on the contest runway, 2021. Photo: 머길 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ssunbiki_full_body_view.jpg), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

She has since moved into influencer work and took part in Netflix's 2024 survival show The Influencer.

## 3. Ah Seung-yeon: Back-to-Back Maxim Honours

Ah Seung-yeon took the Korea Model Association Chairman's Prize at the 2021 contest, then returned to win the grand prize at the second edition, now officially called the Maxim Plus-Size Model Contest, held at a Seoul hotel on 6 July 2022. Like Ssunbiki, she landed Maxim's August cover, in an issue built around the curvy look.

## 4. Jang Ye-na: Maxim's Plus-Size Cover Star

Jang Ye-na entered the third Maxim Plus-Size Model Contest in 2023 at 20, saying she wanted to be famous and "let the world know who I am". She won the grand prize and was picked as a Miss Maxim. She has since become Maxim's flagship plus-size model. At 23 she led the April 2025 issue with a lingerie shoot themed "the return of Venus", and in January 2026 she shot a Western cowgirl spread for the Year of the Horse. Her next goal, she says, is America: she wants to land a US Maxim cover.

## 5. Hwasa: The Mainstream Face of Curves

![Hwasa in January 2026](/images/blogs/top-korean-plus-sized-models-in-2025/hwasa-2026.jpg)

Hwasa in January 2026. Photo: TV10 via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hwasa_in_January_2026.png), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

No Korean star has done more to make curves mainstream than Mamamoo's Hwasa (born 1995). Her 2023 single "I Love My Body" made the top ten of the Circle Digital Chart. In April 2026 the fitted-underwear brand Comfort Lab chose her for its "I love my curve" campaign, which tells women to respect their own shape instead of squeezing into standard sizes. She isn't a plus-size model, but she's the reason "curvy" now sells in Korean advertising.

## The Agencies and Contests Changing the Industry

Two changes in the 2020s made plus-size modelling a real career path in Korea. First, after the 2021 Maxim contest the Korea Model Association created a plus-size model division and began issuing official certificates to models in the category. Second, specialist agencies appeared. The Curve Korea describes itself as Korea's first size-diversity modelling agency, and its founder started out as a plus-size model in London in 2019. In a December 2023 interview, the agency said Korean brands were asking for more diverse models, but that many still wanted "natural-size" talent closer to a Korean 55 than true plus-size.

## Why It Matters: Body Pressure in Korea

The pressure these models push against is real. In 2016 Kim Ji-yang told AFP that "in South Korea, the ideal weight for women is 50kg", a standard she called impossible. Korean women's rights groups have also criticised clothing companies for stocking a narrow size range and using unrealistically thin mannequins (The Korea Herald). For more background, read our guide to [Korean beauty standards and K-beauty culture](/culture/korean-beauty-standards).

## Style and Shopping Tips for Curvy Travellers in Seoul

![Hongdae's shopping streets, Seoul](/images/blogs/top-korean-plus-sized-models-in-2025/hongdae-shopping-street-seoul.jpg)

Hongdae's shopping streets, Seoul. Photo: lumoplank via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hongdae,_Seoul-_Part_II_-_Hongdae2237.jpg), [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

Korean sizing runs small, and street-fashion shops often sell "free size" (one-size) pieces cut for slim frames. Bring the basics you rely on, especially underwear and swimwear. For extended sizes, Korean plus-size labels such as 66100 sell online.

For browsing and street style, [Hongdae](/south-korea/seoul/guides/streetwear-hongdae) is the best area for bold, individual looks, and the [Seoul guide](/south-korea/seoul) covers the rest of the city.

![Dongdaemun Design Plaza (DDP), Seoul](/images/blogs/top-korean-plus-sized-models-in-2025/korean-plus-size-models-2026-ddp-seoul.jpg)

Dongdaemun Design Plaza (DDP), Seoul. Photo: lumoplank via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dongdaemun_Design_Plaza_-_DDP2369.jpg), [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

Dongdaemun Design Plaza (DDP), Seoul's futuristic design landmark, sits next to the Dongdaemun fashion district's malls and is worth seeing at night.

## Korean Plus-Size Models FAQ

### Who was Korea's first plus-size model?

Kim Ji-yang (Gee-yang Kim) is widely described as Korea's first plus-size model. She debuted at Full Figured Fashion Week in Los Angeles in 2010 and founded 66100, Korea's first plus-size fashion magazine, in 2014.

### What size is considered plus-size in Korea?

Much smaller than in the West. A Korean women's 66 is roughly a US 6, and Maxim Korea's plus-size contest accepts entrants who wear a 66 or above.

### Who won the Maxim Korea plus-size model contest?

Ssunbiki won the first edition (called the Natural Size Model Contest) in 2021, Ah Seung-yeon won in 2022, and Jang Ye-na won in 2023.

### Is Hwasa a plus-size model?

No. Hwasa is a singer, but she's Korea's best-known champion of curves and body confidence, through songs like "I Love My Body" and Comfort Lab's 2026 "I love my curve" campaign.

### Is there a plus-size modelling agency in Korea?

Yes. The Curve Korea describes itself as Korea's first size-diversity modelling agency. The Korea Model Association also has a plus-size division.

## Photo Credits

Photos are from Wikimedia Commons under Creative Commons licences or CC0. Each was resized and, where needed, cropped or padded to a 16:9 frame.

- Hero and in-article image (Dongdaemun Design Plaza, Seoul): lumoplank, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), [source](https://commons.wikimedia.org/wiki/File:Dongdaemun_Design_Plaza_-_DDP2369.jpg)
- Ssunbiki at the 2021 Maxim Natural Size Model Contest: 머길, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), [source](https://commons.wikimedia.org/wiki/File:%EC%8D%AC%EB%B9%84%ED%82%A4_%EB%A7%A5%EC%8B%AC_%EB%82%B4%EC%B6%94%EB%9F%B4%EC%82%AC%EC%9D%B4%EC%A6%88_%EB%AA%A8%EB%8D%B8_%EC%BD%98%ED%85%8C%EC%8A%A4%ED%8A%B8.jpg)
- Ssunbiki on the contest runway, 2021: 머길, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), [source](https://commons.wikimedia.org/wiki/File:Ssunbiki_full_body_view.jpg)
- Hwasa in January 2026: TV10, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [source](https://commons.wikimedia.org/wiki/File:Hwasa_in_January_2026.png)
- Hongdae's shopping streets, Seoul: lumoplank, [CC0](https://creativecommons.org/publicdomain/zero/1.0/), [source](https://commons.wikimedia.org/wiki/File:Hongdae,_Seoul-_Part_II_-_Hongdae2237.jpg)`,
    tags: ["Culture", "Models", "Fashion", "Body Positivity", "Seoul"],
    authorSlug: "james-jeong",
    updatedDate: "2026-10-04",
    contentType: "travel-tip",
  },
];

export const getTravelTipBySlug = (slug: string) => travelTips.find((t) => t.slug === slug);
export const getTravelTipsByAuthor = (authorSlug: string) =>
  travelTips.filter((t) => t.authorSlug === authorSlug);

/** Hand-written editorial articles on the home page (display order). */
export const FEATURED_EDITORIAL_TRAVEL_TIP_SLUGS: readonly string[] = [
  "arex-train-schedule",
  "buying-bedding-in-south-korea",
  "top-pc-bang-internet-cafes-in-seoul-for-gaming",
];

export function getFeaturedEditorialTravelTips(): TravelTip[] {
  return FEATURED_EDITORIAL_TRAVEL_TIP_SLUGS.map((slug) => getTravelTipBySlug(slug)).filter(
    (t): t is TravelTip => t != null
  );
}
