/**
 * Nature copy for iconic /locations/[slug] pages (Batch 3 "Locations iconic ~8").
 * Every claim is checked against the source URL noted per entry (fetched 22 Oct 2026).
 * Transit details are only included where an official source gives them.
 */
export interface LocationNature {
  overview: string[];
  highlights: string[];
  gettingThere?: string;
}

export const locationNature: Record<string, LocationNature> = {
  // Source: https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=204732 (+ vcontsId=97439 cable car)
  seoraksan: {
    overview: [
      "Seoraksan National Park was the first place in Korea to be designated a UNESCO Biosphere Reserve, in 1982, and it is the country's second-largest national park. It is famous for its rough granite ridges, including Gongnyongneungseon Ridge, and for the Cheonbuldonggyegok Valley.",
      "The Ulsanbawi trail (about 7.6 km round trip, around 4 hours) starts gently from Sogongwon Park past Sinheungsa Temple and then climbs steeply to Ulsanbawi Rock. Many upper trails close during the forest-fire prevention periods in spring and late autumn.",
    ],
    highlights: [
      "Ulsanbawi Rock via Sinheungsa Temple and Heundeulbawi Rock",
      "Seoraksan Cable Car to Gwongeumseong Fortress (about 10 minutes, round-trip tickets only)",
      "Daecheongbong, the park's highest peak, a full-day hike of about 10 hours",
      "Biseondae, an easier valley walk",
    ],
    gettingThere: "Bus 7 or 7-1 from Sokcho Intercity Bus Terminal to the Seoraksan Sogongwon Park stop.",
  },
  // Source: https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=93651
  jirisan: {
    overview: [
      "Jirisan was declared Korea's first national park on 29 December 1967. It covers about 440 square kilometres across Hadong, Sancheong and Hamyang in South Gyeongsang, Gurye in South Jeolla and Namwon in North Jeolla.",
      "Cheonwangbong (1,915 m) is Jirisan's best-known summit, surrounded by valleys, waterfalls and trails linking to the park's other peaks. Along with Geumgangsan and Hallasan, Jirisan is counted among Korea's most sacred mountains.",
    ],
    highlights: [
      "Cheonwangbong summit",
      "Valleys and waterfalls around the main peaks",
      "Long ridge trails connecting the park's peaks",
    ],
  },
  // Source: https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=204732
  bukhansan: {
    overview: [
      "Bukhansan National Park covers a group of peaks on Seoul's northern edge and in northern Gyeonggi-do. It sits within an excellent public transport network, so its trailheads are easy to reach.",
      "The Baegundae trail (about 9 km loop, around 5 hours) climbs from the Bukhansanseong Information Center past Bukhansanseong Fortress to Baegundae, the park's highest peak. It is steep, and some sections have been closed for rockfall risk, so check trail status before setting out.",
    ],
    highlights: [
      "Baegundae summit views over downtown Seoul",
      "Bukhansanseong Fortress on the way up",
      "Sinseondae on neighbouring Dobongsan, reachable from Dobongsan Station (Line 1)",
    ],
    gettingThere: "Bus 704 from Seoul Station Bus Transfer Center to the Bukhansanseong Entrance stop.",
  },
  // Sources: https://visithalla.jeju.go.kr/board/boardView.do?bbsId=notice_en&seq=1285 ; vcontsId=204732
  hallasan: {
    overview: [
      "At about 1,950 m, Hallasan is the highest mountain in South Korea. This dormant volcano at the centre of Jeju holds a rare triple UNESCO designation: Biosphere Reserve, World Natural Heritage Site and Global Geopark.",
      "The summit crater lake, Baengnokdam, can only be reached on the Seongpanak and Gwaneumsa trails. Their upper sections need an advance reservation, which opens at 09:00 on the first business day of the previous month. The Eorimok, Yeongsil, Donnaeko, Seokguram and Eoseungsaengak trails need no reservation.",
    ],
    highlights: [
      "Baengnokdam crater lake (reservation required)",
      "Yeongsil trail past Byeongpungbawi to Witseoreum",
      "Saraoreum side trail off the Seongpanak route",
      "There are no shops on the mountain: bring food, water and gear (crampons in winter)",
    ],
    gettingThere: "Bus 181 from Jeju International Airport or bus 281 from Jeju Bus Terminal to Seongpanak. Bus 240 from Jeju Bus Terminal to the Yeongsil ticket booth.",
  },
  // Source: https://whc.unesco.org/en/list/1264
  "jeju-island": {
    overview: [
      "Jeju Volcanic Island and Lava Tubes was inscribed as a UNESCO World Heritage site in 2007. It covers three areas: the Geomunoreum lava tube system, the Seongsan Ilchulbong tuff cone and Mount Halla, Korea's highest peak.",
      "UNESCO describes Jeju as one of the few large shield volcanoes in the world built over a hot spot on a stationary continental plate. The island is also a UNESCO Global Geopark, and the culture of Jeju haenyeo (women divers) is on UNESCO's intangible heritage list.",
    ],
    highlights: [
      "Geomunoreum lava tube system",
      "Seongsan Ilchulbong tuff cone rising from the sea",
      "Hallasan and its crater lake",
      "Haenyeo diving culture",
    ],
  },
  // Source: https://www.visitjeju.net/en/detail/view?contentsid=CONT_000000000500477&menuId=DOM_700000000010774
  "udo-island": {
    overview: [
      "Udo is one of Jeju's best-known offshore islands, named for its shape like a reclining cow. It is about 3.8 km long, roughly 17 km around and has gentle slopes. Walking the full circuit takes three to four hours, so many visitors use bicycles or permitted electric vehicles.",
      "Most rental cars from Jeju are restricted on Udo until 31 July 2029, with exemptions including some electric and hydrogen vehicles and guests staying on the island. Ferries depend on weather and sea conditions, so check before you go.",
    ],
    highlights: [
      "Jeju Udo Rhodolith Beach (Seobinbaeksa): white rhodolith sand, a protected Natural Monument",
      "Udobong Peak for a panoramic view of the island",
      "Hagosudong Beach",
      "Geommeolle coast and beach",
    ],
    gettingThere: "Ferry from Seongsan Port or Jongdal Port, about 10–15 minutes depending on the route.",
  },
  // Sources: https://koreana.or.kr/koreana/na/ntt/selectNttInfo.do?bbsId=1114&nttSn=132464 ; gb.go.kr ferry route table
  ulleungdo: {
    overview: [
      "Ulleungdo is a volcanic island about 140 km off Korea's east coast, covering 73 square kilometres. It was designated a National Geopark in 2012. At the island's centre stands Seonginbong (986.5 m), and below it lies Nari Basin, the only substantial flat land, known for traditional houses and mountain vegetables.",
      "The coast is known for dramatic rock formations such as Songgotbong, Gongam (Elephant Rock) and Samseonam. The Haengnam Coastal Walking Path runs from Dodong Port to Jeodong.",
    ],
    highlights: [
      "Seonginbong and Nari Basin",
      "Haengnam Coastal Walking Path (Dodong to Jeodong)",
      "Northern coast: Songgotbong, Gongam and Samseonam",
      "Gwaneumdo, reachable on foot by suspension bridge",
    ],
    gettingThere: "Passenger ships from Pohang, Hupo, Mukho (Donghae) and Gangneung. Some routes are suspended in winter, so check current sailings.",
  },
  // Source: https://whc.unesco.org/en/list/737
  gayasan: {
    overview: [
      "Haeinsa Temple, on the slopes of Gayasan, is home to the Tripitaka Koreana: the most complete collection of Buddhist texts, carved on about 80,000 woodblocks between 1237 and 1248.",
      "The Janggyeong Panjeon depositories that house them date from the 15th century and were inscribed as a UNESCO World Heritage site in 1995. They were designed for natural ventilation and to regulate temperature and humidity, and they have protected the woodblocks for centuries.",
    ],
    highlights: [
      "Janggyeong Panjeon depositories (UNESCO, 1995)",
      "The Tripitaka Koreana woodblocks",
      "Haeinsa Temple, a major pilgrimage destination",
    ],
  },
};

export const getLocationNature = (slug: string) => locationNature[slug];
