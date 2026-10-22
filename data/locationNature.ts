/**
 * Nature copy for iconic /locations/[slug] pages (Batch 3 "Locations iconic ~8").
 * Facts limited to well-documented heights, routes and designations.
 */
export interface LocationNature {
  overview: string[];
  highlights: string[];
  gettingThere: string;
}

export const locationNature: Record<string, LocationNature> = {
  seoraksan: {
    overview: [
      "Seoraksan's granite ridges top out at Daecheongbong (1,708 m), Korea's third-highest peak. The park is a UNESCO Biosphere Reserve and the most visited mountain on the east coast.",
      "Most day visitors start at Seorak-dong near Sokcho, where short trails reach Biryong Falls and the rocky Ulsanbawi ridge. Autumn (mid to late October) is peak season and trails get very busy.",
    ],
    highlights: [
      "Ulsanbawi: a steep stair climb to a ridge of granite towers",
      "Gwongeumseong cable car from Seorak-dong",
      "Biryong Falls: an easy valley walk",
      "Sinheungsa Temple and its large bronze Buddha near the entrance",
    ],
    gettingThere: "Express bus from Seoul to Sokcho, then a local bus to the Seorak-dong entrance.",
  },
  jirisan: {
    overview: [
      "Jirisan became Korea's first national park in 1967. Its main ridge runs for roughly 25 km from Nogodan to Cheonwangbong (1,915 m), the highest point on the mainland.",
      "The full ridge traverse is a classic two- or three-day hike using mountain shelters, which must be booked in advance. Shorter valley walks reach the temples on the lower slopes.",
    ],
    highlights: [
      "Cheonwangbong sunrise from the summit",
      "Hwaeomsa Temple on the southwest side",
      "Ssanggyesa Temple in the Hadong tea country",
      "The Nogodan ridge, at the western end of the main ridge",
    ],
    gettingThere: "Buses from Seoul or Busan to Gurye, Namwon or Jungsan-ri, depending on the trailhead.",
  },
  bukhansan: {
    overview: [
      "Bukhansan National Park sits right on Seoul's northern edge, and Baegundae (836 m) is its highest summit. Its granite domes and fortress walls can be reached by public transport in an hour from central Seoul.",
      "The Bukhansanseong fortress trail is the most popular route to Baegundae. The final section uses cables over bare rock, so allow half a day and avoid it in wet or icy weather.",
    ],
    highlights: [
      "Baegundae summit views over Seoul",
      "Bukhansanseong fortress walls and gates",
      "Insubong, the big granite dome famous with rock climbers",
      "Doseonsa and other temples on the lower trails",
    ],
    gettingThere: "Seoul Metro to Gupabal or Bukhansan Ui station, then a short bus or walk to the trailheads.",
  },
  hallasan: {
    overview: [
      "Hallasan (1,947 m) is the shield volcano at the centre of Jeju and South Korea's highest mountain. Its summit crater lake, Baengnokdam, is part of the UNESCO-listed Jeju Volcanic Island and Lava Tubes.",
      "Only the Seongpanak and Gwaneumsa trails reach the summit, and both need an advance online reservation. The Yeongsil and Eorimok trails are shorter and climb to the Witse-oreum shelter, with no booking needed.",
    ],
    highlights: [
      "Baengnokdam crater lake at the summit",
      "Yeongsil trail's rock pinnacles and alpine meadows",
      "Snow-covered trails in winter (crampons recommended)",
      "Seasonal azaleas on the upper slopes in late spring",
    ],
    gettingThere: "Buses from Jeju City and Seogwipo stop at the Seongpanak, Eorimok and Yeongsil trailheads.",
  },
  "jeju-island": {
    overview: [
      "Jeju is a volcanic island about 85 km off Korea's south coast. Hallasan, the Geomunoreum lava tube system and Seongsan Ilchulbong are inscribed together as a UNESCO World Heritage site.",
      "The Jeju Olle trail circles the island in about 27 routes of coastal and village walking. Buses link Jeju City, Seogwipo and the main sights, although a rental car makes the interior much easier to reach.",
    ],
    highlights: [
      "Seongsan Ilchulbong tuff cone at sunrise",
      "Manjanggul lava tube",
      "Cheonjiyeon and Jeongbang waterfalls in Seogwipo",
      "Jeju Olle coastal walking routes",
      "Hallasan summit hike",
    ],
    gettingThere: "Frequent flights from Seoul Gimpo and Busan Gimhae to Jeju International Airport, plus ferries from Mokpo and Wando.",
  },
  "udo-island": {
    overview: [
      "Udo is a small island off Jeju's eastern tip, a short ferry ride from Seongsan Port. It is low and grassy, with a coastal ring road that is easy to loop in a day.",
      "Visitors get around by bike, scooter, electric cart or the island bus. Tourist rental cars from Jeju generally can't be brought across.",
    ],
    highlights: [
      "Seobin Baeksa beach and its pale sand of coralline algae",
      "Udobong peak, with views back to Seongsan Ilchulbong",
      "Haenyeo divers along the coast",
      "Peanut ice cream, a local speciality",
    ],
    gettingThere: "Ferry from Seongsan Port (east Jeju) in about 15 minutes. Services stop in rough weather.",
  },
  ulleungdo: {
    overview: [
      "Ulleungdo is a volcanic island in the East Sea, about 120 km off the mainland. Its steep cliffs rise to Seonginbong (984 m), and the island is known for squid, fresh seafood and dramatic coastal roads.",
      "Ferries are often cancelled in winter and in high swells, so leave buffer days. Most visitors stay at least two nights and explore by bus, taxi or tour.",
    ],
    highlights: [
      "Seonginbong summit hike",
      "Haeandaero coastal walking path near Dodong",
      "Nari Basin, the island's only flat land, inside the caldera",
      "Boat tours to view Dokdo, weather permitting",
    ],
    gettingThere: "Ferries from Pohang, Mukho (Donghae) or Gangneung. Crossings take around 3 hours depending on route.",
  },
  gayasan: {
    overview: [
      "Gayasan National Park is best known for Haeinsa, one of Korea's Three Jewel Temples. Haeinsa's Janggyeong Panjeon halls are a UNESCO World Heritage site, and they hold the Tripitaka Koreana, over 80,000 woodblocks of Buddhist scripture.",
      "Above the temple, trails climb to Sangwangbong. The forested valley route to Haeinsa (Sori-gil) is a gentle walk along a stream.",
    ],
    highlights: [
      "Janggyeong Panjeon depositories for the Tripitaka Koreana",
      "Haeinsa temple stay programmes",
      "Sangwangbong summit ridge",
      "Haeinsa Sori-gil valley walk",
    ],
    gettingThere: "Buses from Daegu's Seobu bus terminal to Haeinsa.",
  },
};

export const getLocationNature = (slug: string) => locationNature[slug];
