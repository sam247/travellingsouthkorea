(()=>{var e={};e.id=229,e.ids=[229],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6083:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>h,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),a(244),a(71),a(6560);var o=a(3191),s=a(8716),r=a(7922),n=a.n(r),i=a(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);a.d(t,l);let d=["",{children:["travel-tips",{children:["[tipSlug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,244)),"/Users/sampettiford/Documents/Cursor/React Sites/travellingsouthkorea/app/travel-tips/[tipSlug]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,71)),"/Users/sampettiford/Documents/Cursor/React Sites/travellingsouthkorea/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,6560)),"/Users/sampettiford/Documents/Cursor/React Sites/travellingsouthkorea/app/not-found.tsx"]}],u=["/Users/sampettiford/Documents/Cursor/React Sites/travellingsouthkorea/app/travel-tips/[tipSlug]/page.tsx"],c="/travel-tips/[tipSlug]/page",h={require:a,loadChunk:()=>Promise.resolve()},p=new o.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/travel-tips/[tipSlug]/page",pathname:"/travel-tips/[tipSlug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6963:(e,t,a)=>{Promise.resolve().then(a.bind(a,6026)),Promise.resolve().then(a.t.bind(a,2481,23)),Promise.resolve().then(a.t.bind(a,9404,23))},244:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g,generateMetadata:()=>p,generateStaticParams:()=>m});var o=a(9510),s=a(8585),r=a(7710),n=a(7371),i=a(7177),l=a(607),d=a(5598),u=a(1969),c=a(4935),h=a(2404);async function p({params:e}){let{tipSlug:t}=await e,a=(0,u.b)(t);if(!a)return{};let o=(process.env.NEXT_PUBLIC_SITE_URL||"")+(0,h.lG)(t);return{title:`${a.title} | Travel Tips | South Korea Travel`,description:a.summary,alternates:{canonical:o},openGraph:{title:a.title,description:a.summary}}}async function m(){let{travelTips:e}=await Promise.resolve().then(a.bind(a,1969));return e.map(e=>({tipSlug:e.slug}))}async function g({params:e}){let{tipSlug:t}=await e,a=(0,u.b)(t);a||(0,s.notFound)();let p=u.travelTips.filter(e=>e.slug!==a.slug).slice(0,4),m=(0,c.Mv)(a.title,a.slug);return(0,o.jsxs)("div",{className:"min-h-screen bg-background",children:[(0,o.jsxs)("section",{className:"relative h-[40vh] min-h-[300px] flex items-end overflow-hidden",children:[o.jsx(r.default,{src:a.image,alt:a.title,fill:!0,className:"object-cover"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"}),o.jsx("div",{className:"relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-12",children:o.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-white tracking-tight",children:a.title})})]}),(0,o.jsxs)("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",children:[o.jsx(i.O,{items:m}),o.jsx(l.h,{authorSlug:a.authorSlug,updatedDate:a.updatedDate})]}),o.jsx("section",{className:"max-w-4xl mx-auto px-4 sm:px-6 py-6",children:o.jsx("div",{className:"flex flex-wrap gap-2",children:a.tags.map(e=>o.jsx("span",{className:"text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary",children:e},e))})}),o.jsx("section",{className:"max-w-4xl mx-auto px-4 sm:px-6 pb-14",children:o.jsx("div",{className:"prose prose-neutral dark:prose-invert max-w-none",children:function(e){let t=e.split("\n"),a=[],s=0;for(;s<t.length;){let e=t[s].trim();if(e.startsWith("## "))a.push(o.jsx("h2",{className:"text-lg sm:text-xl font-bold text-foreground mt-8 mb-3",children:e.slice(3)},s));else if(e.startsWith("- **")){let t=e.match(/^- \*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);t?a.push((0,o.jsxs)("li",{className:"text-sm text-muted-foreground ml-4 mb-1.5",children:[o.jsx("span",{className:"font-semibold text-foreground",children:t[1]})," — ",t[2]]},s)):a.push(o.jsx("li",{className:"text-sm text-muted-foreground ml-4 mb-1.5",children:e.replace(/^- /,"").replace(/\*\*/g,"")},s))}else e.startsWith("- ")?a.push(o.jsx("li",{className:"text-sm text-muted-foreground ml-4 mb-1.5",children:e.slice(2)},s)):e.length>0&&a.push(o.jsx("p",{className:"text-sm sm:text-base text-muted-foreground leading-relaxed mb-3",children:e},s));s++}return a}(a.content)})}),p.length>0&&(0,o.jsxs)("section",{className:"max-w-4xl mx-auto px-4 sm:px-6 pb-14",children:[o.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-foreground mb-6",children:"Related Tips"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:p.map(e=>o.jsx(n.default,{href:(0,h.lG)(e.slug),children:o.jsx(d.o,{tip:e})},e.slug))})]})]})}},607:(e,t,a)=>{"use strict";a.d(t,{h:()=>l});var o=a(9510),s=a(7371),r=a(6074),n=a(2404),i=a(7710);function l({authorSlug:e,updatedDate:t}){let a=(0,r.y)(e);if(!a)return null;let l=new Date(t).toLocaleDateString("en-GB",{month:"long",year:"numeric"}),d=(0,n.O1)(a.slug);return(0,o.jsxs)("div",{className:"flex items-center gap-3",children:[o.jsx(s.default,{href:d,children:o.jsx(i.default,{src:a.image,alt:a.name,width:32,height:32,className:"w-8 h-8 rounded-full object-cover"})}),(0,o.jsxs)("div",{className:"text-sm",children:[o.jsx(s.default,{href:d,className:"font-medium text-foreground hover:text-primary transition-colors",children:a.name}),(0,o.jsxs)("span",{className:"text-muted-foreground",children:[" \xb7 Updated ",l]})]})]})}},5598:(e,t,a)=>{"use strict";a.d(t,{o:()=>r});var o=a(9510),s=a(7710);function r({tip:e}){return(0,o.jsxs)("div",{className:"flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-secondary/50 transition-colors h-full",style:{boxShadow:"var(--shadow-card)"},children:[o.jsx("div",{className:"w-14 h-14 rounded-lg overflow-hidden flex-shrink-0",children:o.jsx(s.default,{src:e.image,alt:"",width:56,height:56,className:"w-full h-full object-cover"})}),(0,o.jsxs)("div",{className:"min-w-0",children:[o.jsx("h3",{className:"text-sm font-semibold text-foreground",children:e.title}),o.jsx("p",{className:"text-xs text-muted-foreground mt-0.5 line-clamp-1",children:e.summary})]})]})}},6074:(e,t,a)=>{"use strict";a.d(t,{authors:()=>o,y:()=>s});let o=[{slug:"james-jeong",name:"James Jeong",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",location:"Seoul, South Korea",bio:"Seoul-based writer covering neighbourhoods, nightlife and food culture. Originally from London, James has lived in Korea for six years and spends most evenings exploring bars, restaurants and backstreets across the city.",topics:["Nightlife","Bars","Neighbourhoods","Street Food"]},{slug:"mina-park",name:"Mina Park",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",location:"Busan, South Korea",bio:"Travel writer and photographer based in Busan. Mina covers Korea's food scene, coastal destinations and off-the-beaten-path experiences. Her work focuses on the quieter, more beautiful side of Korean travel.",topics:["Food","Cafes","Nature","Photography"]}],s=e=>o.find(t=>t.slug===e)},1969:(e,t,a)=>{"use strict";a.d(t,{$:()=>r,b:()=>s,travelTips:()=>o});let o=[{slug:"seoul-subway-guide",title:"How To Use The Seoul Subway",image:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&q=80",summary:"Everything you need to know about navigating Seoul's metro system — apps, etiquette and tips.",content:`## Seoul's Subway Is Your Best Friend

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

A single journey starts at ₩1,350 with a T-Money card. Transfers between subway and bus are free within 30 minutes.`,tags:["Transport","Subway","Seoul","Practical"],authorSlug:"james-jeong",updatedDate:"2026-03-10",contentType:"travel-tip"},{slug:"incheon-airport-to-seoul",title:"How To Get From Incheon Airport To Seoul",image:"https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1200&q=80",summary:"AREX, bus, taxi or KTX — the best ways to get from Incheon Airport to central Seoul.",content:`## Getting From Incheon To Seoul

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

Take the AREX Express to Seoul Station, then transfer to the subway. It's the fastest, cheapest and most reliable option.`,tags:["Transport","Airport","Seoul","Practical"],authorSlug:"james-jeong",updatedDate:"2026-03-08",contentType:"travel-tip"},{slug:"t-money-card-guide",title:"T-Money Card Guide",image:"https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&q=80",summary:"How to buy, load and use Korea's essential transport card for subway, bus and taxis.",content:`## What Is T-Money?

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

If you have a compatible phone, you can use the T-Money app instead of a physical card. Works with NFC on most Android phones. iPhone support is limited.`,tags:["Transport","Money","Practical"],authorSlug:"mina-park",updatedDate:"2026-02-25",contentType:"travel-tip"},{slug:"sim-cards-korea",title:"SIM Cards & WiFi In Korea",image:"https://images.unsplash.com/photo-1596478573744-0d1af41d9c09?w=1200&q=80",summary:"Prepaid SIM cards, eSIMs and portable WiFi — staying connected in South Korea.",content:`## Staying Connected In Korea

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

Get an eSIM before you fly. It's the cheapest, easiest option and you'll have data the moment you land.`,tags:["WiFi","SIM","Practical"],authorSlug:"mina-park",updatedDate:"2026-03-01",contentType:"travel-tip"},{slug:"k-pop-history",title:"The Evolution of K-Pop: A Journey Through Time",image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",summary:"From Seo Taiji to BTS and beyond — how K-pop became a global phenomenon.",content:`## The Birth of Modern K-Pop

K-pop as we know it today began in the early 1990s with Seo Taiji and Boys, who blended hip-hop, R&B and electronic music with Korean lyrics. Their success paved the way for the idol system and the industry we see today.

## First Generation (1990s–2000s)

H.O.T., S.E.S., Fin.K.L and g.o.d dominated the charts. SM, JYP and YG Entertainment emerged as the big three agencies, building the training and debut system that still defines K-pop.

## Second Generation (2000s–2010s)

Girls' Generation, Big Bang, 2NE1 and Super Junior took K-pop across Asia. Concerts, variety shows and meticulous production became the norm.

## Third Generation and Global Breakthrough

BTS, BLACKPINK, EXO and TWICE broke into the US and global markets. Social media and streaming turned K-pop into a worldwide culture.

## Experience K-Pop in Korea

Visit K-Star Road in Gangnam, attend a music show recording, or explore the HYBE Insight museum. Seoul is the heart of the industry.`,tags:["K-Pop","Culture","Music","Seoul"],authorSlug:"james-jeong",updatedDate:"2026-03-10",contentType:"travel-tip"},{slug:"k-pop-male-idols",title:"10 Most Handsome K-Pop Male Idols 2025",image:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",summary:"A light-hearted look at some of the most popular K-pop male idols and where to spot them in Seoul.",content:`## K-Pop Idols and Korean Beauty Standards

K-pop male idols are known for their visuals as much as their music. From runway-ready looks to casual street style, they influence fashion and beauty trends across Korea and beyond.

## Where to Experience Idol Culture in Seoul

- **Gangnam (Apgujeong)** — Agency buildings, flagship stores and the streets where idols are often spotted.
- **K-Star Road** — Bronze statues of beloved groups and a must-do for fans.
- **Music show recordings** — Apply for audience tickets to see idols up close (advance booking required).
- **HYBE Insight** — BTS-focused museum and exhibition space in Yongsan.

## Tips for Fans

Respect privacy: idols are people too. Don't follow them in person or at private locations. Enjoy the music, the performances and the culture — that's what travel is for.`,tags:["K-Pop","Idols","Seoul","Culture"],authorSlug:"james-jeong",updatedDate:"2026-03-10",contentType:"travel-tip"},{slug:"sansachun-drink-guide",title:"What Is Sansachun?",image:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80",summary:"Korea's traditional magnolia berry liquor — what it is, how it's made and where to try it.",content:`## What Is Sansachun?

Sansachun (산사춘) is a Korean traditional liquor made from magnolia berries (sansa). It's sweet, mildly fruity and typically around 15–17% ABV. You'll see it in traditional restaurants and as a gift in duty-free shops.

## How It's Made

The berries are fermented and distilled, often with added honey or sugar. The result is a smooth, amber-coloured drink that pairs well with Korean food.

## Where to Try It

- **Traditional Korean restaurants** — Especially those serving hanjeongsik (full course) or jeon (savory pancakes).
- **Jinro and other brands** — Available in supermarkets and convenience stores.
- **Duty-free** — Popular as a souvenir; bottles are well-packaged for travel.

## Drinking Etiquette

Like soju, it's often poured for others and received with two hands. Sip rather than shoot — it's meant to be enjoyed with food.`,tags:["Drinks","Traditional","Food","Culture"],authorSlug:"mina-park",updatedDate:"2026-03-10",contentType:"travel-tip"},{slug:"arex-airport-train-guide",title:"AREX Airport Train Guide: Schedule and Tips",image:"https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1200&q=80",summary:"AREX express and all-stop train times, fares and how to get from Incheon Airport to Seoul Station.",content:`## What Is AREX?

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

Train times vary by day and season. Download the **Korail** or **AREX** app for the latest schedule. First and last trains typically run from around 5:20 AM to midnight; check before late-night or early-morning flights.`,tags:["Transport","AREX","Airport","Seoul"],authorSlug:"james-jeong",updatedDate:"2026-03-10",contentType:"travel-tip"},{slug:"korean-won-etf-guide",title:"Korean Won Currency ETFs: A Traveller's Overview",image:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&q=80",summary:"What travellers should know about the Korean won, exchange rates and currency-focused ETFs.",content:`## The Korean Won (KRW)

The South Korean won (₩) is the official currency. For travellers, exchanging at banks or ATMs in Korea usually gives better rates than at home. T-Money and cards cover most transport and shopping; carry some cash for markets and small vendors.

## Currency and Travel

- **ATMs:** Many accept international cards; look for "Global ATM" or "International" stickers. Withdrawal limits and fees vary.
- **Cards:** Visa and Mastercard are widely accepted in cities. American Express less so.
- **Cash:** Useful for traditional markets, street food and small shops.

## ETFs and the Won

Currency ETFs that track the Korean won are investment products, not travel products. If you're researching them for investment purposes, check your local broker and the fund's prospectus. This guide focuses on practical travel money: bring a mix of card and cash, use ATMs for local currency, and enjoy your trip.`,tags:["Money","Currency","Practical","Investing"],authorSlug:"mina-park",updatedDate:"2026-03-10",contentType:"travel-tip"}],s=e=>o.find(t=>t.slug===e),r=e=>o.filter(t=>t.authorSlug===e)}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),o=t.X(0,[948,8,343,710,986,702],()=>a(6083));module.exports=o})();