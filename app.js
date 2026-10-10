// Für Channi - 30 Jahre Funkelmomente
// Client-side Application Logic

const STORY_DATA = {
  "meta": {
    "title": "Für Channi: 9.5 Jahre Freundschaft",
    "subtitle": "9.5 Jahre voller Leben, Lachen und echter Verbundenheit",
    "pin_code": "300417",
    "date_start": "2017-04-30",
    "date_end": "2026-10-06",
    "total_days": 3446,
    "total_months": 115,
    "active_months": 75,
    "total_messages": 4764,
    "total_voice_notes": 311,
    "total_words": 62098,
    "words_by_sender": {
      "olli": 33185,
      "channi": 28913
    },
    "gift_items": {
      "lebkuchenherz": "Lebkuchenherz mit der Aufschrift 'Sternchen' (in echter Herzform, symbolisiert Herzenswärme, Jahrmarkt-Nostalgie und Funkelmomente)",
      "nougat": "Sir Charles Soft Nougat (Früchte & Erdnuss + Schokolade & Erdnuss)",
      "spiel": "Stadt Land Vollpfosten - Do It Yourself Edition (für unzählige kommende gemeinsame Spieleabende)",
      "fotokarte": "10x15 cm Fotokarte im Polaroid-Stil mit QR-Code und PIN '300417'"
    }
  },
  "monthly_activity": [
    {
      "month": "2017-04",
      "year": 2017,
      "phase": "Kennenlernen & Erste Partys",
      "total": 6,
      "olli": 4,
      "channi": 2,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 6,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2017-05",
      "year": 2017,
      "phase": "Kennenlernen & Erste Partys",
      "total": 8,
      "olli": 5,
      "channi": 3,
      "voice_notes": 0,
      "media": 1,
      "cumulative_messages": 14,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2017-06",
      "year": 2017,
      "phase": "Kennenlernen & Erste Partys",
      "total": 1,
      "olli": 1,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 15,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2017-07",
      "year": 2017,
      "phase": "Kennenlernen & Erste Partys",
      "total": 23,
      "olli": 10,
      "channi": 13,
      "voice_notes": 0,
      "media": 2,
      "cumulative_messages": 38,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2017-08",
      "year": 2017,
      "phase": "Kennenlernen & Erste Partys",
      "total": 142,
      "olli": 69,
      "channi": 73,
      "voice_notes": 0,
      "media": 5,
      "cumulative_messages": 180,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2017-09",
      "year": 2017,
      "phase": "Kennenlernen & Erste Partys",
      "total": 83,
      "olli": 36,
      "channi": 47,
      "voice_notes": 0,
      "media": 5,
      "cumulative_messages": 263,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2017-10",
      "year": 2017,
      "phase": "Kennenlernen & Erste Partys",
      "total": 52,
      "olli": 26,
      "channi": 26,
      "voice_notes": 0,
      "media": 1,
      "cumulative_messages": 315,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2017-11",
      "year": 2017,
      "phase": "Kennenlernen & Erste Partys",
      "total": 29,
      "olli": 14,
      "channi": 15,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 344,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2017-12",
      "year": 2017,
      "phase": "Kennenlernen & Erste Partys",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 344,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2018-01",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 344,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2018-02",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 344,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2018-03",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 344,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2018-04",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 344,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2018-05",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 344,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2018-06",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 10,
      "olli": 4,
      "channi": 6,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 354,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2018-07",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 354,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2018-08",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 354,
      "cumulative_voice_notes": 0
    },
    {
      "month": "2018-09",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 23,
      "olli": 9,
      "channi": 14,
      "voice_notes": 1,
      "media": 0,
      "cumulative_messages": 377,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2018-10",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 12,
      "olli": 7,
      "channi": 5,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 389,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2018-11",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 8,
      "olli": 4,
      "channi": 4,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 397,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2018-12",
      "year": 2018,
      "phase": "Kennenlernen & Erste Partys",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 397,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-01",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 397,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-02",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 397,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-03",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 397,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-04",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 397,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-05",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 397,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-06",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 397,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-07",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 397,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-08",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 12,
      "olli": 6,
      "channi": 6,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 409,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-09",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 17,
      "olli": 8,
      "channi": 9,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 426,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-10",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 47,
      "olli": 27,
      "channi": 20,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 473,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-11",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 1,
      "olli": 0,
      "channi": 1,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 474,
      "cumulative_voice_notes": 1
    },
    {
      "month": "2019-12",
      "year": 2019,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 7,
      "olli": 4,
      "channi": 3,
      "voice_notes": 1,
      "media": 0,
      "cumulative_messages": 481,
      "cumulative_voice_notes": 2
    },
    {
      "month": "2020-01",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 11,
      "olli": 10,
      "channi": 1,
      "voice_notes": 0,
      "media": 8,
      "cumulative_messages": 492,
      "cumulative_voice_notes": 2
    },
    {
      "month": "2020-02",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 492,
      "cumulative_voice_notes": 2
    },
    {
      "month": "2020-03",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 15,
      "olli": 7,
      "channi": 8,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 507,
      "cumulative_voice_notes": 2
    },
    {
      "month": "2020-04",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 507,
      "cumulative_voice_notes": 2
    },
    {
      "month": "2020-05",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 507,
      "cumulative_voice_notes": 2
    },
    {
      "month": "2020-06",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 15,
      "olli": 7,
      "channi": 8,
      "voice_notes": 2,
      "media": 1,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2020-07",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2020-08",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2020-09",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2020-10",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2020-11",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2020-12",
      "year": 2020,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-01",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-02",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-03",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-04",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 522,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-05",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 6,
      "olli": 4,
      "channi": 2,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 528,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-06",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 528,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-07",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 528,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-08",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 528,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-09",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 29,
      "olli": 14,
      "channi": 15,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 557,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-10",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 15,
      "olli": 5,
      "channi": 10,
      "voice_notes": 0,
      "media": 3,
      "cumulative_messages": 572,
      "cumulative_voice_notes": 4
    },
    {
      "month": "2021-11",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 66,
      "olli": 20,
      "channi": 46,
      "voice_notes": 6,
      "media": 2,
      "cumulative_messages": 638,
      "cumulative_voice_notes": 10
    },
    {
      "month": "2021-12",
      "year": 2021,
      "phase": "Stille Begleiter & Channis Weg",
      "total": 13,
      "olli": 8,
      "channi": 5,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 651,
      "cumulative_voice_notes": 10
    },
    {
      "month": "2022-01",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 7,
      "olli": 3,
      "channi": 4,
      "voice_notes": 0,
      "media": 1,
      "cumulative_messages": 658,
      "cumulative_voice_notes": 10
    },
    {
      "month": "2022-02",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 658,
      "cumulative_voice_notes": 10
    },
    {
      "month": "2022-03",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 658,
      "cumulative_voice_notes": 10
    },
    {
      "month": "2022-04",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 658,
      "cumulative_voice_notes": 10
    },
    {
      "month": "2022-05",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 4,
      "olli": 3,
      "channi": 1,
      "voice_notes": 0,
      "media": 2,
      "cumulative_messages": 662,
      "cumulative_voice_notes": 10
    },
    {
      "month": "2022-06",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 662,
      "cumulative_voice_notes": 10
    },
    {
      "month": "2022-07",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 28,
      "olli": 15,
      "channi": 13,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 690,
      "cumulative_voice_notes": 10
    },
    {
      "month": "2022-08",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 129,
      "olli": 66,
      "channi": 63,
      "voice_notes": 7,
      "media": 4,
      "cumulative_messages": 819,
      "cumulative_voice_notes": 17
    },
    {
      "month": "2022-09",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 218,
      "olli": 110,
      "channi": 108,
      "voice_notes": 4,
      "media": 3,
      "cumulative_messages": 1037,
      "cumulative_voice_notes": 21
    },
    {
      "month": "2022-10",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 431,
      "olli": 212,
      "channi": 219,
      "voice_notes": 27,
      "media": 17,
      "cumulative_messages": 1468,
      "cumulative_voice_notes": 48
    },
    {
      "month": "2022-11",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 300,
      "olli": 137,
      "channi": 163,
      "voice_notes": 17,
      "media": 20,
      "cumulative_messages": 1768,
      "cumulative_voice_notes": 65
    },
    {
      "month": "2022-12",
      "year": 2022,
      "phase": "Das große Revival & Rekordmonate",
      "total": 527,
      "olli": 244,
      "channi": 283,
      "voice_notes": 23,
      "media": 38,
      "cumulative_messages": 2295,
      "cumulative_voice_notes": 88
    },
    {
      "month": "2023-01",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 168,
      "olli": 86,
      "channi": 82,
      "voice_notes": 18,
      "media": 6,
      "cumulative_messages": 2463,
      "cumulative_voice_notes": 106
    },
    {
      "month": "2023-02",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 35,
      "olli": 16,
      "channi": 19,
      "voice_notes": 1,
      "media": 0,
      "cumulative_messages": 2498,
      "cumulative_voice_notes": 107
    },
    {
      "month": "2023-03",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 151,
      "olli": 77,
      "channi": 74,
      "voice_notes": 11,
      "media": 7,
      "cumulative_messages": 2649,
      "cumulative_voice_notes": 118
    },
    {
      "month": "2023-04",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 18,
      "olli": 8,
      "channi": 10,
      "voice_notes": 1,
      "media": 2,
      "cumulative_messages": 2667,
      "cumulative_voice_notes": 119
    },
    {
      "month": "2023-05",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 219,
      "olli": 115,
      "channi": 104,
      "voice_notes": 22,
      "media": 6,
      "cumulative_messages": 2886,
      "cumulative_voice_notes": 141
    },
    {
      "month": "2023-06",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 84,
      "olli": 52,
      "channi": 32,
      "voice_notes": 13,
      "media": 3,
      "cumulative_messages": 2970,
      "cumulative_voice_notes": 154
    },
    {
      "month": "2023-07",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 284,
      "olli": 150,
      "channi": 134,
      "voice_notes": 45,
      "media": 14,
      "cumulative_messages": 3254,
      "cumulative_voice_notes": 199
    },
    {
      "month": "2023-08",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 139,
      "olli": 71,
      "channi": 68,
      "voice_notes": 6,
      "media": 5,
      "cumulative_messages": 3393,
      "cumulative_voice_notes": 205
    },
    {
      "month": "2023-09",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 144,
      "olli": 76,
      "channi": 68,
      "voice_notes": 12,
      "media": 2,
      "cumulative_messages": 3537,
      "cumulative_voice_notes": 217
    },
    {
      "month": "2023-10",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 148,
      "olli": 72,
      "channi": 76,
      "voice_notes": 7,
      "media": 11,
      "cumulative_messages": 3685,
      "cumulative_voice_notes": 224
    },
    {
      "month": "2023-11",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 46,
      "olli": 24,
      "channi": 22,
      "voice_notes": 1,
      "media": 0,
      "cumulative_messages": 3731,
      "cumulative_voice_notes": 225
    },
    {
      "month": "2023-12",
      "year": 2023,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 18,
      "olli": 11,
      "channi": 7,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 3749,
      "cumulative_voice_notes": 225
    },
    {
      "month": "2024-01",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 70,
      "olli": 40,
      "channi": 30,
      "voice_notes": 7,
      "media": 2,
      "cumulative_messages": 3819,
      "cumulative_voice_notes": 232
    },
    {
      "month": "2024-02",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 68,
      "olli": 34,
      "channi": 34,
      "voice_notes": 3,
      "media": 0,
      "cumulative_messages": 3887,
      "cumulative_voice_notes": 235
    },
    {
      "month": "2024-03",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 13,
      "olli": 8,
      "channi": 5,
      "voice_notes": 1,
      "media": 0,
      "cumulative_messages": 3900,
      "cumulative_voice_notes": 236
    },
    {
      "month": "2024-04",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 155,
      "olli": 75,
      "channi": 80,
      "voice_notes": 9,
      "media": 4,
      "cumulative_messages": 4055,
      "cumulative_voice_notes": 245
    },
    {
      "month": "2024-05",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 152,
      "olli": 68,
      "channi": 84,
      "voice_notes": 18,
      "media": 19,
      "cumulative_messages": 4207,
      "cumulative_voice_notes": 263
    },
    {
      "month": "2024-06",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 158,
      "olli": 76,
      "channi": 82,
      "voice_notes": 17,
      "media": 8,
      "cumulative_messages": 4365,
      "cumulative_voice_notes": 280
    },
    {
      "month": "2024-07",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 62,
      "olli": 25,
      "channi": 37,
      "voice_notes": 13,
      "media": 2,
      "cumulative_messages": 4427,
      "cumulative_voice_notes": 293
    },
    {
      "month": "2024-08",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 50,
      "olli": 27,
      "channi": 23,
      "voice_notes": 4,
      "media": 8,
      "cumulative_messages": 4477,
      "cumulative_voice_notes": 297
    },
    {
      "month": "2024-09",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 9,
      "olli": 4,
      "channi": 5,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4486,
      "cumulative_voice_notes": 297
    },
    {
      "month": "2024-10",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 35,
      "olli": 16,
      "channi": 19,
      "voice_notes": 2,
      "media": 6,
      "cumulative_messages": 4521,
      "cumulative_voice_notes": 299
    },
    {
      "month": "2024-11",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4521,
      "cumulative_voice_notes": 299
    },
    {
      "month": "2024-12",
      "year": 2024,
      "phase": "Channis Loyalität & Gemeinsame Abenteuer",
      "total": 2,
      "olli": 1,
      "channi": 1,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4523,
      "cumulative_voice_notes": 299
    },
    {
      "month": "2025-01",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4523,
      "cumulative_voice_notes": 299
    },
    {
      "month": "2025-02",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 16,
      "olli": 9,
      "channi": 7,
      "voice_notes": 1,
      "media": 4,
      "cumulative_messages": 4539,
      "cumulative_voice_notes": 300
    },
    {
      "month": "2025-03",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 2,
      "olli": 1,
      "channi": 1,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4541,
      "cumulative_voice_notes": 300
    },
    {
      "month": "2025-04",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 2,
      "olli": 1,
      "channi": 1,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4543,
      "cumulative_voice_notes": 300
    },
    {
      "month": "2025-05",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 11,
      "olli": 6,
      "channi": 5,
      "voice_notes": 1,
      "media": 0,
      "cumulative_messages": 4554,
      "cumulative_voice_notes": 301
    },
    {
      "month": "2025-06",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 65,
      "olli": 26,
      "channi": 39,
      "voice_notes": 3,
      "media": 16,
      "cumulative_messages": 4619,
      "cumulative_voice_notes": 304
    },
    {
      "month": "2025-07",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 4,
      "olli": 2,
      "channi": 2,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4623,
      "cumulative_voice_notes": 304
    },
    {
      "month": "2025-08",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 19,
      "olli": 10,
      "channi": 9,
      "voice_notes": 0,
      "media": 2,
      "cumulative_messages": 4642,
      "cumulative_voice_notes": 304
    },
    {
      "month": "2025-09",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 26,
      "olli": 13,
      "channi": 13,
      "voice_notes": 0,
      "media": 1,
      "cumulative_messages": 4668,
      "cumulative_voice_notes": 304
    },
    {
      "month": "2025-10",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 17,
      "olli": 9,
      "channi": 8,
      "voice_notes": 2,
      "media": 3,
      "cumulative_messages": 4685,
      "cumulative_voice_notes": 306
    },
    {
      "month": "2025-11",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 6,
      "olli": 5,
      "channi": 1,
      "voice_notes": 0,
      "media": 3,
      "cumulative_messages": 4691,
      "cumulative_voice_notes": 306
    },
    {
      "month": "2025-12",
      "year": 2025,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 2,
      "olli": 1,
      "channi": 1,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4693,
      "cumulative_voice_notes": 306
    },
    {
      "month": "2026-01",
      "year": 2026,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 29,
      "olli": 16,
      "channi": 13,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4722,
      "cumulative_voice_notes": 306
    },
    {
      "month": "2026-02",
      "year": 2026,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4722,
      "cumulative_voice_notes": 306
    },
    {
      "month": "2026-03",
      "year": 2026,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 0,
      "olli": 0,
      "channi": 0,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4722,
      "cumulative_voice_notes": 306
    },
    {
      "month": "2026-04",
      "year": 2026,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 2,
      "olli": 1,
      "channi": 1,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4724,
      "cumulative_voice_notes": 306
    },
    {
      "month": "2026-05",
      "year": 2026,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 7,
      "olli": 4,
      "channi": 3,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4731,
      "cumulative_voice_notes": 306
    },
    {
      "month": "2026-06",
      "year": 2026,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 9,
      "olli": 4,
      "channi": 5,
      "voice_notes": 0,
      "media": 0,
      "cumulative_messages": 4740,
      "cumulative_voice_notes": 306
    },
    {
      "month": "2026-07",
      "year": 2026,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 8,
      "olli": 3,
      "channi": 5,
      "voice_notes": 1,
      "media": 1,
      "cumulative_messages": 4748,
      "cumulative_voice_notes": 307
    },
    {
      "month": "2026-08",
      "year": 2026,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 7,
      "olli": 4,
      "channi": 3,
      "voice_notes": 0,
      "media": 1,
      "cumulative_messages": 4755,
      "cumulative_voice_notes": 307
    },
    {
      "month": "2026-09",
      "year": 2026,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 7,
      "olli": 2,
      "channi": 5,
      "voice_notes": 0,
      "media": 1,
      "cumulative_messages": 4762,
      "cumulative_voice_notes": 307
    },
    {
      "month": "2026-10",
      "year": 2026,
      "phase": "Channis 30. & Unsere Funkelmomente",
      "total": 4,
      "olli": 3,
      "channi": 1,
      "voice_notes": 1,
      "media": 0,
      "cumulative_messages": 4766,
      "cumulative_voice_notes": 308
    }
  ],
  "milestones": [
    {
      "id": "chapter_1_der_funke_von_tag_eins",
      "chapter_number": 1,
      "period": "April 2017 – Ende 2018",
      "title": "Der Funke von Tag 1: Unser gemeinsamer Humor & die Maiwoche",
      "core_theme": "Die Geburt unserer Freundschaft auf derselben Wellenlänge",
      "description": "Schon in den ersten Nachrichten zeigt sich Channis herrlich trockener Humor („Das ist nicht das Lied ?:D“). Nur zehn Tage später folgt Channis Einladung zur Osnabrücker Maiwoche – und legt den Grundstein für gemeinsame Feiernächte, legendäre Quatsch-Aktionen und eine Vertrautheit, die von Tag 1 an einfach da war.",
      "pivotal_events": [
        {
          "date": "2017-04-30",
          "label": "Die erste Begegnung im Chat",
          "sender": "Channi & Olli",
          "highlight_quote": "Das ist nicht das Lied ?:D",
          "context": "Channis unnachahmlich trockene Art bringt das Eis sofort zum Schmelzen.",
          "speaker": "Channi"
        },
        {
          "date": "2017-05-10",
          "label": "Channis Einladung zur Maiwoche",
          "sender": "Channi",
          "highlight_quote": "Freitag Maiwoche?",
          "context": "Die Osnabrücker Maiwoche wird zum ersten festen gemeinsamen Ritual unseres Freundeskreises.",
          "speaker": "Channi"
        },
        {
          "date": "2017-08-31",
          "label": "Gemeinsame Feiernächte & Vertrautheit",
          "sender": "Wir",
          "highlight_quote": "Ich möchte mit dir mal in entspannter Umgebung feiern gehen.",
          "context": "Der August 2017 ist mit 142 Nachrichten unser erster großer gemeinsamer Sommermonat.",
          "speaker": "Olli"
        }
      ],
      "featured_audio": null
    },
    {
      "id": "chapter_2_channis_herzblut_und_rueckhalt",
      "chapter_number": 2,
      "period": "2019 – 2021",
      "title": "Channis Herzblut: Ihr Weg & ein unerschütterliches Band",
      "core_theme": "Channis Engagement für andere und unser stiller Rückhalt",
      "description": "Channi geht ihren Weg mit großem Herzen – ob im Studium, bei der Arbeit mit Kindern und Müttern oder beim Tanzen. Auch wenn der Alltag mal fordernder ist, wissen wir beide: Wenn Hilfe gebraucht wird, ist der andere sofort da. Ein Anruf oder eine kurze Sprachnachricht genügt, und die Verbindung ist so stark wie am ersten Tag.",
      "pivotal_events": [
        {
          "date": "2020-06-05",
          "label": "Channis Uni-Einsatz: Füreinander da sein",
          "sender": "Channi",
          "highlight_quote": "Hi, also es ist so, ich brauche zwei Seiten aus einem bestimmten Buch … ein Referat über Soziologie …",
          "context": "Channis Fleiß und Einsatz an der Uni – und wie selbstverständlich wir einander unterstützen.",
          "audio_file": "00000513-AUDIO-2020-06-05-15-29-00.opus",
          "speaker": "Channi"
        },
        {
          "date": "2021-10-06",
          "label": "Geburtstage als feste Anker",
          "sender": "Wir",
          "highlight_quote": "Alles Gute zum Geburtstag 🥳",
          "context": "Egal wie viel Zeit vergeht: An Channis Ehrentag denken wir immer aneinander.",
          "speaker": "Olli"
        }
      ],
      "featured_audio": {
        "file": "00000513-AUDIO-2020-06-05-15-29-00.opus",
        "sender": "Channi",
        "duration_hint": "Channis Uni-Sprachmemo",
        "quote_snippet": "Hi, also es ist so, ich brauche zwei Seiten aus einem bestimmten Buch..."
      }
    },
    {
      "id": "chapter_3_unsere_seelenverwandtschaft",
      "chapter_number": 3,
      "period": "Herbst & Winter 2022",
      "title": "Unsere Seelenverwandtschaft: Der Rekord-Winter & unendliche Gespräche",
      "core_theme": "Tägliche Vertrautheit, Seelenstärkung und unzählige Lacher",
      "description": "Im Herbst 2022 schweißt sich unsere Freundschaft auf ein ganz neues Level zusammen: Über 1.300 Nachrichten und stundenlange Sprachmemos in nur vier Monaten. Am 30. Dezember 2022 stellen wir mit 112 Nachrichten an einem Tag unseren Allzeit-Rekord auf. Doch das Schönste: Channis ehrliche Worte, wie viel ihr die Freundschaft und geschriebene Briefe im stressigen Alltag bedeuten.",
      "pivotal_events": [
        {
          "date": "2022-10-13",
          "label": "Channis berührende Worte über geschriebene Briefe",
          "sender": "Channi",
          "highlight_quote": "Deine Worte geben mir auf jeden Fall richtig viel. […] Danke dafür. Es ist ein schönes Antidepressivum auf Papier geschrieben, muss ich sagen.",
          "context": "Channi liest vor der Arbeit einen Brief durch und schickt eine dankbare Sprachnachricht.",
          "audio_file": "00001243-AUDIO-2022-10-13-12-35-49.opus",
          "speaker": "Channi"
        },
        {
          "date": "2022-12-06",
          "label": "Unsere Philosophie über Freundschaft & Zeit",
          "sender": "Wir",
          "highlight_quote": "Und man legt viel zu viel Wert auf materielle Dinge, obwohl gerade Zeit das schönste Geschenk ist, was man jemandem machen kann 😇",
          "context": "Die gemeinsame Erkenntnis, was im Leben und in einer Freundschaft wirklich zählt.",
          "speaker": "Channi"
        },
        {
          "date": "2022-12-30",
          "label": "Unser Rekordtag (112 Nachrichten)",
          "sender": "Channi & Olli",
          "highlight_quote": "Wollen wir vielleicht eine Playlist für Silvester erstellen? 🤓",
          "context": "Gemeinsame Vorfreude auf Silvester, Lachen und 112 Nachrichten voller Energie.",
          "speaker": "Channi"
        }
      ],
      "featured_audio": {
        "file": "00001243-AUDIO-2022-10-13-12-35-49.opus",
        "sender": "Channi",
        "duration_hint": "Channi über echte Worte",
        "quote_snippet": "Deine Worte geben mir auf jeden Fall richtig viel... ein schönes Antidepressivum auf Papier geschrieben..."
      }
    },
    {
      "id": "chapter_4_channis_loyalitaet_und_lebensfreude",
      "chapter_number": 4,
      "period": "2023 – 2024",
      "title": "Ein Fels in der Brandung: Channis Loyalität & ansteckende Lebensfreude",
      "core_theme": "Bedingungsloser Zusammenhalt, gemeinsame Abenteuer & Channis Begeisterung",
      "description": "Channi beweist, was wahre Freundschaft ausmacht: Wenn es hart auf hart kommt, steht sie bedingungslos hinter ihren Freunden („Ich stehe immer zu meinen wahren Freunden“). Zusammen packen wir bei handwerklichen Pflaster-Einsätzen im Garten an. Und Channi zeigt ihre wunderbare Gabe, sich wie ein Schneekönig über die kleinen Herzensdinge im Leben zu freuen – wie die gehäkelte Positive Potato.",
      "pivotal_events": [
        {
          "date": "2023-07-06",
          "label": "Gemeinsam anpacken: Der Pflaster-Sommer",
          "sender": "Wir",
          "highlight_quote": "Jaaa aber fürs Pflastern dürfte es ruhig etwas kälter sein 🥲",
          "context": "Echte Freunde helfen sich gegenseitig – auch mit Steinen und Schaufeln.",
          "speaker": "Channi"
        },
        {
          "date": "2023-08-19",
          "label": "Channis unerschütterliche Loyalität (Audio)",
          "sender": "Channi",
          "highlight_quote": "Erstmal stehe ich natürlich immer zu dir, also ich stehe immer zu meinen wahren Freunden, von daher brauchst du dich dafür natürlich nicht bedanken.",
          "context": "Channis klares, loyales Bekenntnis – ein Moment von unschätzbarem Wert.",
          "audio_file": "00003348-AUDIO-2023-08-19-02-53-45.opus",
          "speaker": "Channi"
        },
        {
          "date": "2023-10-07",
          "label": "Gegenseitige Herzenswärme",
          "sender": "Channi & Olli",
          "highlight_quote": "Wollte mich einmal ganz herzlich für euer Hammer Geschenk bedanken! 🫶🏽",
          "context": "Ehrliche, ungekünstelte Wertschätzung füreinander.",
          "speaker": "Channi"
        },
        {
          "date": "2024-05-25",
          "label": "Channis ansteckende Freude: Die Positive Potato",
          "sender": "Channi",
          "highlight_quote": "Ich habe meine Positive Potato bekommen. […] Also Zucker, Zucker, Zucker süß. Dankeschön.",
          "context": "Channis herzliche Reaktion auf die kleine gehäkelte Mutmacher-Kartoffel (Positive Potato Pocket Hug).",
          "speaker": "Channi"
        },
        {
          "date": "2024-06-22",
          "label": "Eine Hymne an unsere Freundschaft (Audio)",
          "sender": "Wir",
          "highlight_quote": "Du bist eine echt coole Socke. Und ich bin froh, dass ich dich hab.",
          "context": "Auf den Punkt gebracht, was diese Freundschaft ausmacht.",
          "audio_file": "00004324-AUDIO-2024-06-22-04-43-50.opus",
          "speaker": "Olli"
        }
      ],
      "featured_audio": {
        "file": "00003348-AUDIO-2023-08-19-02-53-45.opus",
        "sender": "Channi",
        "duration_hint": "Channis Treue-Bekenntnis",
        "quote_snippet": "Erstmal stehe ich natürlich immer zu dir, also ich stehe immer zu meinen wahren Freunden..."
      }
    },
    {
      "id": "chapter_5_dreissig_jahre_channi",
      "chapter_number": 5,
      "period": "2025 – Oktober 2026",
      "title": "30 Jahre Channi: Sternchen, Fürsorge & unendliche Funkelmomente",
      "core_theme": "Channis Ehrentag, ihre Einzigartigkeit und der Blick in die Zukunft",
      "description": "Channi wird 30 – und ist dabei ganz sie selbst: Für ihre eigene Party bestellt sie extra vegane Miniburger, damit Olli trotz Allergie richtig mitessen kann („Ist mir wichtig 😇🫶🏽“). Sie denkt einfach immer an alle. Zum Geburtstag gibt es ein Sternchen-Lebkuchenherz, süßen Nougat und einen Spieleblock für viele gemeinsame Spieleabende.",
      "pivotal_events": [
        {
          "date": "2026-09-27",
          "label": "Typisch Channi: Fürsorge für alle",
          "sender": "Channi",
          "highlight_quote": "Ich habe für meinen Geburtstag jetzt auch vegane Miniburger bestellt, damit du auch eine „Hauptspeise“ richtig essen kannst … Ist mir wichtig 😇🫶🏽",
          "context": "Channis feinfühlige Art: Sie vergisst niemanden und sorgt für alle mit Liebe.",
          "speaker": "Channi"
        },
        {
          "date": "2026-09-30",
          "label": "Channis Wunsch nach Funkelmomenten",
          "sender": "Channi",
          "highlight_quote": "Alles Glück der Welt und viele wunderschöne Funkelmomente für dein Leben ✨",
          "context": "Channis zauberhafter Wunsch – der jetzt zu ihrem eigenen Geburtstag an sie zurückgegeben wird.",
          "speaker": "Channi"
        },
        {
          "date": "2026-10-06",
          "label": "Channis 30. Geburtstag",
          "sender": "Wir",
          "highlight_quote": "Ich hoffe, du hattest heute einen wunderschönen Tag. Den hast du auf jeden Fall verdient.",
          "context": "Gemeinsame Vorfreude auf die große Party und 9,5 Jahre gefeierte Freundschaft.",
          "audio_file": "00004767-AUDIO-2026-10-06-19-21-01.opus",
          "speaker": "Olli"
        }
      ],
      "featured_audio": {
        "file": "00004767-AUDIO-2026-10-06-19-21-01.opus",
        "sender": "Wir",
        "duration_hint": "Auf Channis 30. Geburtstag",
        "quote_snippet": "Ich hoffe, du hattest heute einen wunderschönen Tag. Den hast du auf jeden Fall verdient..."
      }
    }
  ]
};
const AUDIO_MAPPING = {
  "chapter_2_channis_herzblut_und_rueckhalt": [
    {
      "title": "Channi über ihr Uni-Referat",
      "sub": "05.06.2020 • Soziologie & gegenseitige Unterstützung",
      "src": "audio/channi_uni_memo.mp3"
    }
  ],
  "chapter_3_unsere_seelenverwandtschaft": [
    {
      "title": "Channi: „Antidepressivum auf Papier“",
      "sub": "13.10.2022 • Über die Kraft geschriebener Worte",
      "src": "audio/channi_brief_antidepressivum.mp3"
    }
  ],
  "chapter_4_channis_loyalitaet_und_lebensfreude": [
    {
      "title": "Channi: „Ich stehe immer zu meinen wahren Freunden“",
      "sub": "19.08.2023 • Echtes Loyalitätsbekenntnis",
      "src": "audio/channi_loyalitaet.mp3"
    },
    {
      "title": "Olli: „Du bist eine echt coole Socke“",
      "sub": "22.06.2024 • Eine Hymne auf unsere Freundschaft",
      "src": "audio/olli_coole_socke.mp3"
    }
  ],
  "chapter_5_dreissig_jahre_channi": [
    {
      "title": "Ollis Geburtstagsgruß",
      "sub": "06.10.2026 • Olli, nach einem langen Tag",
      "src": "audio/olli_geburtstagsgruess.mp3"
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initPinLock();
  renderTimeline();
  renderChart();
});

// 1. PARTICLES BACKGROUND
function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;
  const count = 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 4;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 12 + 10) + 's';
    p.style.animationDelay = (Math.random() * 8) + 's';
    p.style.opacity = (Math.random() * 0.5 + 0.2).toString();
    container.appendChild(p);
  }
}

// 2. PIN LOCK & AUTHENTICATION
function initPinLock() {
  const lockScreen = document.getElementById('lock-screen');
  const unlockedContent = document.getElementById('unlocked-content');
  const pinInputs = Array.from(document.querySelectorAll('.pin-digit'));
  const errorMsg = document.getElementById('error-msg');
  const hintToggle = document.getElementById('hint-toggle');
  const hintText = document.getElementById('hint-text');
  const correctPin = STORY_DATA.meta.pin_code || '300417';

  // Toggle hint
  if (hintToggle && hintText) {
    hintToggle.addEventListener('click', () => {
      hintText.classList.toggle('hidden');
    });
  }

  const lockBtn = document.getElementById('relock-btn');
  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      try { localStorage.removeItem('channi_30_unlocked'); } catch (e) {}
      document.querySelectorAll('video, audio').forEach(m => { try { m.pause(); } catch (e) {} });
      // URL ohne ?code= neu laden, damit wirklich wieder gesperrt ist
      window.location.replace(window.location.pathname);
    });
  }

  function unlock() {
    try { localStorage.setItem('channi_30_unlocked', 'true'); } catch (e) {}
    if (lockBtn) lockBtn.classList.add('visible');
    lockScreen.style.opacity = '0';
    lockScreen.style.transform = 'scale(0.96)';
    setTimeout(() => {
      lockScreen.classList.remove('view-active');
      lockScreen.classList.add('view-hidden');
      unlockedContent.classList.remove('view-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      triggerConfetti();
    }, 450);
  }

  // Check URL parameters for direct unlock
  const urlParams = new URLSearchParams(window.location.search);
  const codeParam = urlParams.get('code') || urlParams.get('pin');
  if (codeParam === correctPin || (function(){ try { return localStorage.getItem('channi_30_unlocked') === 'true'; } catch (e) { return false; } })()) {
    unlock();
    return;
  }

  // Focus first input
  if (pinInputs[0]) {
    setTimeout(() => pinInputs[0].focus(), 300);
  }

  // Input events
  pinInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const val = e.target.value.replace(/[^0-9]/g, '');
      e.target.value = val ? val[0] : '';
      errorMsg.textContent = '';

      if (val && index < pinInputs.length - 1) {
        pinInputs[index + 1].focus();
      }

      checkCode();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && index > 0) {
        pinInputs[index - 1].focus();
      }
    });

    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasteData = (e.clipboardData || window.clipboardData).getData('text').trim();
      const digits = pasteData.replace(/[^0-9]/g, '').slice(0, 6);
      digits.split('').forEach((d, idx) => {
        if (pinInputs[idx]) pinInputs[idx].value = d;
      });
      if (digits.length > 0) {
        const focusIdx = Math.min(digits.length, pinInputs.length - 1);
        pinInputs[focusIdx].focus();
      }
      checkCode();
    });
  });

  function checkCode() {
    const currentCode = pinInputs.map(i => i.value).join('');
    if (currentCode.length === 6) {
      if (currentCode === correctPin) {
        unlock();
      } else {
        const card = document.querySelector('.lock-card');
        if (card) {
          card.classList.add('shake');
          setTimeout(() => card.classList.remove('shake'), 500);
        }
        errorMsg.textContent = 'Der Code stimmt leider nicht ganz. Schau auf die Karte oder klick auf den Tipp! ✨';
        pinInputs.forEach(i => i.value = '');
        pinInputs[0].focus();
      }
    }
  }
}

// 3. CONFETTI CELEBRATION EFFECT
function triggerConfetti() {
  const colors = ['#B8864C', '#C97268', '#E6C594', '#6B9080', '#E07A5F', '#DDA15E'];
  const confettiCount = 50;
  for (let i = 0; i < confettiCount; i++) {
    const c = document.createElement('div');
    c.style.position = 'fixed';
    c.style.width = (Math.random() * 8 + 6) + 'px';
    c.style.height = (Math.random() * 12 + 8) + 'px';
    c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    c.style.left = (Math.random() * 100) + 'vw';
    c.style.top = '-20px';
    c.style.borderRadius = '2px';
    c.style.zIndex = '9999';
    c.style.pointerEvents = 'none';
    c.style.opacity = '1';
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    c.style.transition = 'transform 3.5s cubic-bezier(0.25, 1, 0.5, 1), top 3.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 3.5s ease-out';
    document.body.appendChild(c);

    setTimeout(() => {
      c.style.top = (window.innerHeight + 50) + 'px';
      c.style.transform = `rotate(${Math.random() * 1080}deg) translateX(${(Math.random() - 0.5) * 200}px)`;
      c.style.opacity = '0';
    }, 20);

    setTimeout(() => c.remove(), 4000);
  }
}

// 4. TIMELINE RENDERING
let currentPlayingAudio = null;

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || !STORY_DATA.milestones) return;

  container.innerHTML = '';

  STORY_DATA.milestones.forEach((chapter) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    const dot = document.createElement('div');
    dot.className = 'timeline-dot';
    item.appendChild(dot);

    const period = document.createElement('div');
    period.className = 'timeline-period';
    period.textContent = `Kapitel ${chapter.chapter_number} • ${chapter.period}`;
    item.appendChild(period);

    const title = document.createElement('h3');
    title.className = 'timeline-title';
    title.textContent = chapter.title;
    item.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'timeline-desc';
    desc.textContent = chapter.description;
    item.appendChild(desc);

    // Pivotal Events
    if (chapter.pivotal_events && chapter.pivotal_events.length > 0) {
      const eventsContainer = document.createElement('div');
      eventsContainer.className = 'timeline-events';

      chapter.pivotal_events.forEach(ev => {
        const bubble = document.createElement('div');
        bubble.className = 'event-bubble';
        
        let formattedDate = ev.date;
        if (ev.date) {
          const parts = ev.date.split('-');
          if (parts.length === 3) formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
        }

        bubble.innerHTML = `
          <span class="event-date">${formattedDate}</span>
          <strong>${ev.label}:</strong> 
          <span class="event-quote">${ev.speaker ? `<span class="event-speaker">${ev.speaker}:</span> ` : ''}„${ev.highlight_quote}“</span>
        `;
        eventsContainer.appendChild(bubble);
      });

      item.appendChild(eventsContainer);
    }

    // Audio widgets for this chapter
    const audios = AUDIO_MAPPING[chapter.id] || [];
    audios.forEach((audioInfo) => {
      const audioWidget = document.createElement('div');
      audioWidget.className = 'audio-widget';

      const audioObj = new Audio(audioInfo.src);

      const playBtn = document.createElement('button');
      playBtn.className = 'audio-btn';
      playBtn.innerHTML = '▶';
      playBtn.title = 'Abspielen';

      const infoDiv = document.createElement('div');
      infoDiv.className = 'audio-info';
      infoDiv.innerHTML = `
        <div class="audio-title">${audioInfo.title}</div>
        <div class="audio-sub">${audioInfo.sub}</div>
      `;

      playBtn.addEventListener('click', () => {
        if (currentPlayingAudio && currentPlayingAudio !== audioObj) {
          currentPlayingAudio.pause();
          currentPlayingAudio.currentTime = 0;
          document.querySelectorAll('.audio-btn').forEach(btn => btn.innerHTML = '▶');
        }

        if (audioObj.paused) {
          audioObj.play();
          playBtn.innerHTML = '⏸';
          currentPlayingAudio = audioObj;
        } else {
          audioObj.pause();
          playBtn.innerHTML = '▶';
          currentPlayingAudio = null;
        }
      });

      audioObj.addEventListener('ended', () => {
        playBtn.innerHTML = '▶';
        currentPlayingAudio = null;
      });

      audioWidget.appendChild(playBtn);
      audioWidget.appendChild(infoDiv);
      item.appendChild(audioWidget);
    });

    container.appendChild(item);
  });
}

// 5. ACTIVITY BAR CHART
function renderChart() {
  const container = document.getElementById('chart-container');
  if (!container || !STORY_DATA.monthly_activity) return;

  // Nachrichten pro Jahr (2026 bis 06.10.)
  const byYear = {};
  STORY_DATA.monthly_activity.forEach(m => { byYear[m.year] = (byYear[m.year] || 0) + m.total; });
  const years = Object.keys(byYear).map(Number).sort();
  const data = years.map(y => ({ year: y, total: byYear[y] }));
  const maxVal = Math.max(...data.map(d => d.total));
  const peakYear = data.find(d => d.total === maxVal).year;
  const labelled = new Set([years[0], peakYear, peakYear + 1, years[years.length - 1]]);

  const W = 340, H = 230, padL = 6, padR = 6, padT = 34, padB = 26;
  const chartW = W - padL - padR, chartH = H - padT - padB;
  const slot = chartW / data.length, barW = slot - 6;
  const fmt = n => n.toLocaleString('de-DE');

  let svg = `<svg viewBox="0 0 ${W} ${H}" class="chart-svg" role="img" aria-label="Nachrichten pro Jahr, Höhepunkt ${peakYear} mit ${fmt(maxVal)} Nachrichten">`;
  svg += `<line x1="${padL}" y1="${H - padB}" x2="${W - padR}" y2="${H - padB}" stroke="#EAE3D9" stroke-width="1"/>`;
  data.forEach((d, i) => {
    const h = Math.max(2, (d.total / maxVal) * chartH);
    const x = padL + i * slot + 3, y = H - padB - h;
    const peak = d.year === peakYear;
    const r = Math.min(4, barW / 2, h);
    // oben abgerundet, unten gerade auf der Grundlinie
    svg += `<path d="M${x},${H - padB} V${y + r} Q${x},${y} ${x + r},${y} H${x + barW - r} Q${x + barW},${y} ${x + barW},${y + r} V${H - padB} Z" fill="${peak ? '#C97268' : '#D9B98E'}"><title>${d.year}: ${fmt(d.total)} Nachrichten${d.year === 2026 ? ' (bis 6. Oktober)' : ''}</title></path>`;
    if (labelled.has(d.year)) {
      svg += `<text x="${x + barW / 2}" y="${y - 6}" text-anchor="middle" font-size="11" font-weight="700" fill="${peak ? '#2C2A29' : '#736E6A'}">${fmt(d.total)}</text>`;
    }
    svg += `<text x="${x + barW / 2}" y="${H - padB + 16}" text-anchor="middle" font-size="10" fill="#736E6A">${"'" + String(d.year).slice(2)}</text>`;
  });
  svg += `</svg>`;
  container.innerHTML = svg + `<p class="chart-note">Nachrichten pro Jahr. Rekordmonat: Dezember 2022 mit 527 Nachrichten, Rekordtag: 30.12.2022 mit 112.</p>`;
}
