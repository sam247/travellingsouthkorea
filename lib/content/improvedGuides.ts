/**
 * Hand-written sections for thin guide pages.
 * Geography and transit only. No prices, clock times, or venue claims.
 */

export interface ImprovedGuideArticle {
  sections: { heading: string; paragraphs: string[] }[];
  insights: { heading: string; paragraphs: string[] };
  budget: { heading: string; paragraphs: string[] };
  etiquette: { heading: string; paragraphs: string[] };
  tips: { heading: string; tips: string[] };
  faqs: { question: string; answer: string }[];
}

const seoulHub = "[Seoul city guide](/south-korea/seoul)";
const busanHub = "[Busan city guide](/south-korea/busan)";
const itaewonHub = "[Itaewon neighbourhood guide](/south-korea/seoul/itaewon)";
const haeundaeHub = "[Haeundae neighbourhood guide](/south-korea/busan/haeundae)";
const hongdaeGuide = "[Hongdae bar guide](/south-korea/seoul/guides/best-bars-hongdae)";
const southside =
  "[Southside Parlor](/south-korea/seoul/venues/southside-parlor)";
const myeongdongGuide =
  "[Myeongdong street food](/south-korea/seoul/guides/best-street-food-myeongdong)";

export const improvedGuides: Record<string, ImprovedGuideArticle> = {
  "nightlife-itaewon": {
    sections: [
      {
        heading: "Where Itaewon actually is after dark",
        paragraphs: [
          `Itaewon is a hillside neighbourhood in Yongsan-gu, not a single bar street. The spine is Itaewon-ro. Itaewon Station (Seoul Metro Line 6) puts you on that road. Noksapyeong Station, the next Line 6 stop toward Samgakji, is the better exit for Gyeongnidan-gil, the sloped lane of restaurants and smaller bars between the two stations.`,
          `Haebangchon is the residential hill above Itaewon, toward Namsan: narrower streets, smaller bars, and a longer walk up. Hannam-dong is the separate pocket toward the river, quieter than the main road and not a stroll from the station if you are in ordinary shoes. Use the ${itaewonHub} for the daytime layout, then pick one of these pockets for the evening instead of trying to cover all of them.`,
        ],
      },
      {
        heading: "Getting there and getting home",
        paragraphs: [
          `Line 6 is the useful line. Itaewon Station for Itaewon-ro, Noksapyeong Station for Gyeongnidan. The metro does not run through the night. Check Naver Map or KakaoMap for the last train on Line 6 before you commit to a last drink — the time changes by day and by direction, so this guide does not print a clock time.`,
          `After the last train, taxis and ride apps are the normal way back. Weekend nights around Itaewon Station mean a wait, so leave extra time. For anywhere else in the city, start from the ${seoulHub}. A different late-night mood, younger and flatter, is the ${hongdaeGuide}.`,
        ],
      },
      {
        heading: "How to choose a street",
        paragraphs: [
          `Stay on or just off Itaewon-ro if you want the easiest walk and the widest mix of restaurants, casual bars, and clubs. Drop toward Noksapyeong if you would rather eat and then drink in smaller rooms. Climb into Haebangchon only if you are happy with hills. Hannam is its own trip.`,
          `Carry photo ID. The legal drinking age in South Korea is 19, and many doors check. The crowd is mixed — local, long-term foreign residents, and visitors — and it gets denser on Friday and Saturday. Weeknights are the easier time to get a seat. Read the board at the door for any cover; this page does not quote one. Named bars we already list, such as ${southside}, have their own pages — use those for the venue, and this page for the streets.`,
        ],
      },
    ],
    insights: {
      heading: "What the night actually feels like",
      paragraphs: [
        `The main road is loud and easy to navigate. The side streets change character within a few minutes' walk: restaurant lanes downhill, smaller bars uphill, homes mixed in once you are properly into Haebangchon. Treat the hill as a neighbourhood people live in, not only a venue strip.`,
        `You do not need a reservation strategy for a casual bar. Clubs and small cocktail rooms are a different story — ask at the door rather than trusting a printed hour from a guide.`,
      ],
    },
    budget: {
      heading: "What to budget, without a fake total",
      paragraphs: [
        `This guide does not publish a price for a night in Itaewon. A casual bar, a cocktail room, and a club are not the same spend, and menus move. Read the menu or the board before you order, and assume a cover only if the door says so.`,
        `Tipping is not customary. Cards are widely accepted on the main road; keep a little cash for smaller places. Transport on Line 6 is a normal metro fare — buy or top up a T-money card rather than paying a special nightlife rate.`,
      ],
    },
    etiquette: {
      heading: "Etiquette on a hill where people live",
      paragraphs: [
        `Pour for other people when you are sharing a bottle, and don't stick chopsticks upright in rice. Neither is unique to Itaewon; both are noticed.`,
        `Haebangchon and the lanes off the main road are residential. Keep the noise at the venue, not in the alley on the way home. Priority seats on the metro are for people who need them.`,
      ],
    },
    tips: {
      heading: "Practical tips",
      tips: [
        `Start at Itaewon Station (Line 6) for Itaewon-ro, or Noksapyeong Station for Gyeongnidan-gil.`,
        `The metro does not run all night. Check the last Line 6 train in Naver Map or KakaoMap on the day.`,
        `Wear shoes you can walk uphill in if you leave the main road.`,
        `Weekend nights are the busy ones. A weeknight is easier if you want a seat.`,
        `Use the ${seoulHub} to pick the next neighbourhood. Hongdae is a different scene: ${hongdaeGuide}.`,
      ],
    },
    faqs: [
      {
        question: "Which station should I use for Itaewon nightlife?",
        answer: `Itaewon Station on Seoul Metro Line 6 for the main road, Itaewon-ro. Noksapyeong Station, one stop toward Samgakji on the same line, for Gyeongnidan-gil. Hannam-dong and the upper part of Haebangchon are longer walks from those stations. The ${seoulHub} covers the rest of the city.`,
      },
      {
        question: "Does the subway run all night?",
        answer:
          "No. Seoul Metro does not run through the night. Last-train times depend on the line, the direction, and the day. Check Naver Map or KakaoMap before you go out, and plan a taxi or ride app after the last train. This guide does not print a closing time.",
      },
      {
        question: "How much should I plan to spend?",
        answer:
          "We don't publish a total. Menus and any door charge are set by the venue and change. Read them on the night. Tipping is not expected. A T-money card covers the metro.",
      },
    ],
  },
  "hiking-bukhansan": {
    sections: [
      {
        heading: "Where the park sits, and where it does not",
        paragraphs: [
          `Bukhansan National Park is the granite range on Seoul's northern edge. Trailheads sit in districts such as Gangbuk-gu, Dobong-gu, and Eunpyeong-gu, and the park also crosses into Goyang in Gyeonggi-do. It is not in Jamsil, and it is not a neighbourhood you reach from a single downtown station.`,
          `Plan it as its own daytime trip, then use the ${seoulHub} for the evening. A food stop in central Seoul, such as ${myeongdongGuide}, is a separate ride — do not treat it as something at the trailhead.`,
        ],
      },
      {
        heading: "Which station matches which side",
        paragraphs: [
          `There is no one metro stop for the whole park. Gupabal Station (Line 3) is a common start for western approaches. From the station you still need a local bus or a walk to a gate; which one depends on the trail, so set the gate in Naver Map or KakaoMap rather than guessing a bus number from a guide.`,
          `Bukhansan Ui Station, the northern end of the Ui-Sinseol light metro, is the stop for the northeastern side, including trails toward Doseonsa. The station itself is not the trailhead — follow the map for the walk or bus to the gate. Dobongsan Station (Line 1 and Line 7) is the usual stop for Dobongsan, the neighbouring peak inside the same national park. Baegundae is the highest peak. The popular route's upper section is rock with fixed cables, a scramble rather than a paved path. Turn around if the rock is wet or you do not want exposure.`,
        ],
      },
      {
        heading: "Before you leave the station",
        paragraphs: [
          `Check the Korea National Park Service for trail closures and whether an entrance fee applies that day. This guide does not state a fee, because charges and closures change. Buy water before you head for the gate. Do not count on food at the summit.`,
          `Weekends are crowded on the Baegundae routes. Starting earlier in the day makes the cable section easier to pass; this page does not pretend there is a single best clock time. Wear shoes with grip, and take gloves if you expect to use the cables.`,
        ],
      },
    ],
    insights: {
      heading: "What kind of day this is",
      paragraphs: [
        `This is a hike, not a city stroll between cafes. The lower trails are forest paths. The busy summit routes get rocky. Temples such as Doseonsa sit inside the park and are not the same thing as the summit.`,
        `People train here on weekday mornings and crowd the main ridges on weekends. If you want fewer people, a weekday is the meaningful difference — not a different neighbourhood in Seoul.`,
      ],
    },
    budget: {
      heading: "Fees and costs to confirm",
      paragraphs: [
        `Do not budget from the old "free" label on this page. Confirm any park entrance fee and any temple admission with the Korea National Park Service or the temple before you go. We are not printing a won figure.`,
        `The metro fare is a standard T-money ride to Gupabal, Bukhansan Ui, or Dobongsan. A bus from the station to a gate is extra and depends on the route the map gives you. Bring water you have already paid for in the city.`,
      ],
    },
    etiquette: {
      heading: "On the trail",
      paragraphs: [
        `Stay on the marked path, pack out rubbish, and let faster hikers pass on narrow rock. On the cable section, wait for a gap instead of crowding someone on the rock.`,
        `Temples inside the park are working religious sites. Keep voices down in the courtyards and follow any sign about photography or shoes.`,
      ],
    },
    tips: {
      heading: "Practical tips",
      tips: [
        `Match the station to the side: Gupabal (Line 3) west, Bukhansan Ui (Ui-Sinseol line) northeast, Dobongsan (Line 1 and Line 7) for Dobongsan.`,
        `The station is not the trailhead. Check Naver Map or KakaoMap for the bus or walk to the gate you actually want.`,
        `Confirm closures and any entrance fee with the Korea National Park Service. This guide does not quote a fee.`,
        `Baegundae's upper section uses fixed cables and rock. Turn back if it is wet or you don't want the exposure. Gloves help on the cables.`,
        `After the hike, use the ${seoulHub} for food and the rest of the day. Nothing at the trailhead is "central Seoul".`,
      ],
    },
    faqs: [
      {
        question: "Is Bukhansan in Jamsil?",
        answer: `No. Jamsil is in southeastern Seoul. Bukhansan National Park is the mountain range on the northern edge of the city. Older versions of this guide pointed at the wrong neighbourhood. Use the ${seoulHub} for the city, and pick a trailhead station from the transport section above.`,
      },
      {
        question: "Which metro station should I use?",
        answer:
          "It depends on the trail. Gupabal on Line 3 is a western approach. Bukhansan Ui on the Ui-Sinseol light metro is the northeastern side toward Doseonsa. Dobongsan on Line 1 and Line 7 is the stop for Dobongsan. You still need a walk or a bus from the station to the gate. Set that in Naver Map or KakaoMap.",
      },
      {
        question: "Is the hike free, and can I do it after dark?",
        answer:
          "Confirm any entrance fee and the day's trail closures with the Korea National Park Service. We do not print a price. The cable section on the popular Baegundae route is a daylight scramble, not an evening walk. Do not start a summit route late enough that you would be on the rock in the dark.",
      },
    ],
  },
  "haeundae-beach-guide": {
    sections: [
      {
        heading: "The beach, from the station to the headland",
        paragraphs: [
          `Haeundae Beach is a long public crescent in Haeundae-gu. The sand faces south. The western end is the hotel and restaurant strip closest to Haeundae Station. The eastern end rises to Dongbaekseom, a rocky headland joined to the beach by a coast path, with Nurimaru APEC House on the point. That walk is the straightforward add-on: same beach, no second metro ride.`,
          `The streets immediately inland of the western sand are where the restaurants and the market sit. Read the ${haeundaeHub} for the wider district, and the ${busanHub} if you are leaving the beach for the rest of the city.`,
        ],
      },
      {
        heading: "How to get to Haeundae Station",
        paragraphs: [
          `Haeundae Station is on Busan Metro Line 2. From Busan Station (Line 1), change to Line 2 at Seomyeon and take the Jangsan-bound train to Haeundae. From the station, walk toward the beach — it is signposted. This guide does not name an exit number, because signs are clearer than a memorised exit.`,
          `Dongbaek Station, one stop toward Seomyeon from Haeundae, is not the headland. Dongbaekseom is the east end of the sand, reached on foot from the beach. Haedong Yonggungsa is further along the coast and is its own bus or taxi ride, not a walk from Haeundae Station.`,
        ],
      },
      {
        heading: "A simple half day on the sand",
        paragraphs: [
          `A workable order is station, western beach, walk east along the sand to Dongbaekseom, then back through the inland streets if you want the market. Summer is when the sand is busiest. Outside those months the beach is still a walk. If you swim, follow the flags and the lifeguards posted that day — this page does not state a swimming season or a water temperature.`,
          `Seafood restaurants cluster inland of the beach and inside the market. Compare menus, which are posted, instead of hunting a "cheapest" set this guide cannot stand behind. When you are done, Line 2 returns you to Seomyeon and the rest of Busan via the ${busanHub}.`,
        ],
      },
    ],
    insights: {
      heading: "What the shore is like",
      paragraphs: [
        `The western beach is the dense, high-rise side. The eastern walk is windier and more exposed, with pines on the headland. Both are the same neighbourhood. You can see the whole crescent in one walk if you do not stop for long.`,
        `The market is a few blocks inland, not on the sand. It is a working market — seafood, dried fish, and sit-down rooms upstairs — rather than a viewpoint.`,
      ],
    },
    budget: {
      heading: "What is free, and what is not a published price",
      paragraphs: [
        `Walking the beach and the path out to Dongbaekseom does not have a ticket. Food, sunbed hire if someone is offering it, and any temple you add later are separate, and this guide does not quote them.`,
        `The metro is a normal Busan fare with a T-money or compatible card. A taxi from the station to the headland is optional, not required, if you are happy to walk the sand. Tipping is not customary.`,
      ],
    },
    etiquette: {
      heading: "On a city beach",
      paragraphs: [
        `The sand is public. Follow posted swimming flags, and don't leave glass or rubbish. Shade and the water's edge fill up in summer; walking through someone's mat is the usual friction.`,
        `In the market, point at what you want and check the posted price before you sit upstairs. Pour drinks for other people if you are sharing a table.`,
      ],
    },
    tips: {
      heading: "Practical tips",
      tips: [
        `Haeundae Station, Busan Metro Line 2. From Busan Station, change at Seomyeon and ride toward Jangsan.`,
        `Walk to the beach from the station following signs. The western sand is the near end; Dongbaekseom is the eastern headland, on foot.`,
        `Dongbaek Station is not Dongbaekseom. Haedong Yonggungsa is a separate ride, not a beach walk.`,
        `Swim only to the posted flags. We do not print a season or a water temperature.`,
        `Use the ${haeundaeHub} for the district and the ${busanHub} for the rest of the city.`,
      ],
    },
    faqs: [
      {
        question: "How do I get to Haeundae Beach?",
        answer: `Haeundae Station on Busan Metro Line 2, then walk toward the beach following the signs. From Busan Station on Line 1, transfer to Line 2 at Seomyeon and take the Jangsan direction. The wider district is the ${haeundaeHub}; the rest of the city is the ${busanHub}.`,
      },
      {
        question: "Can I walk to Dongbaekseom from the beach?",
        answer:
          "Yes. Dongbaekseom is the rocky headland at the eastern end of the sand, connected by a coast path, with Nurimaru APEC House on the point. Dongbaek Station on Line 2 is a different place, one stop inland toward Seomyeon, and is not that walk.",
      },
      {
        question: "Is the beach only a summer trip, and what does it cost?",
        answer:
          "The sand is a public walk outside the crowded summer months. Swimming depends on the flags and lifeguards posted that day; this guide does not give a season or a temperature. There is no ticket for the beach or the headland path. Food prices are whatever the menu says.",
      },
    ],
  },
};
