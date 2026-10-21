/**
 * Central Configuration for Mubi & Sana Wedding Invitation.
 * Single source of truth for all wedding details, Mint Green botanical theme,
 * family lineage, timings, venue details, and contacts.
 */

export const weddingConfig = {
  // Couple Information
  couple: {
    groom: "Muhammad Mubasheer TA",
    groomFull: "Muhammad Mubasheer TA",
    groomShort: "Mubi",
    groomFather: "Late Mr.Abdul Khader TS",
    groomMother: "Mrs.Khadeeja",
    groomHouse: "Thuruthi house ,Thuruthi ,Kasaragod",
    groomLineage: "Grand s/o Seedhikkunji (late)",
    groomLocation: "Grand s/o Muhammed (late)",

    bride: "Fathimath Sana",
    brideFull: "Fathimath Sana",
    brideShort: "Sana",
    brideFather: "Mr. badarudden. c h",
    brideMother: "Mrs.Safoora.B",
    brideLineage: "D/O Mr. badarudden. c h   Mrs.Safoora.B",

    coupleNames: "Mubi & Sana",
    coupleShort: "Mubi & Sana",
    coupleFull: "Muhammad Mubasheer T A & Fathimath Sana",
    monogram: "M & S",
    initials: "M & S",

    envelopeIntro: "SEALED AND SENT WITH LOVE FROM",
    invitationHeadline: "YOU ARE CORDIALLY INVITED",
    invitationSubheadline: "JOIN US TO CELEBRATE OUR WEDDING",
    formalHeadline: "IN THE NAME OF ALLAH THE MOST GRACIOUS, THE MOST MERCIFUL",
    bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  },

  // Parents / Family Hosts
  parents: {
    father: "Late Mr.Abdul Khader TS",
    mother: "Mrs.Khadeeja",
    display: "Late Mr.Abdul Khader TS   Mrs.Khadeeja",
    house: "Thuruthi house ,Thuruthi",
    locality: "Kasaragod",
    fullAddress: "Thuruthi house ,Thuruthi ,Kasaragod",
    phone: "9400847857",
    phoneDisplay: "MOB: 9400847857",
  },

  // Main Wedding Date and Countdown Target
  // Exact Target: 29 November 2026 at 5:00 PM IST (UTC+05:30)
  targetDateISO: "2026-11-29T17:00:00+05:30",
  mainDateFormatted: "29 NOVEMBER 2026",
  mainDateCompact: "29.11.2026",
  mainDateFull: "Sunday, 29 November 2026",
  hijriDate: "19 JUMADA AL-THANI 1448 AH",
  nikkahTime: "5:00 PM",
  receptionTime: "5:00 PM – 9:00 PM",
  receptionDisplay: "5:00pm 9:00pm",

  // Theme Colors: Mint Green (#ADEBB3) & Herbal Harmony
  theme: {
    primaryBg: "#122A16",       // Deep herbal pine
    secondaryBg: "#1B3B21",     // Medium pine
    envelopePrimary: "#285233", // Herbal green envelope
    envelopeDark: "#183820",
    waxSealAccent: "#24492E",   // Botanical wax seal
    mintGreen: "#ADEBB3",       // User's exact Figma Hex!
    mintSoft: "#E3F7E7",        // Light mint background
    mintBorder: "#ADEBB3",
    goldBorder: "#C5A880",      // Warm champagne gold
    goldAccent: "#D4AF37",
    textLight: "#F7F9F5",       // Soft ivory text
    textMuted: "#B8D9BF",       // Mint-tinted muted text
    cardBg: "#FCFDFB",          // Crisp watercolor card
    cardText: "#14301A",        // Deep forest text on light card
    cardAccent: "#2D5936",      // Herbal green accent
  },

  // Navigation Items
  navigation: [
    { id: "page-1", number: 1, label: "Invitation", title: "Invitation" },
    { id: "page-2", number: 2, label: "Event Details & Venue", title: "Event Details & Venue" },
  ],

  // Events & Celebrations
  events: [
    {
      id: "nikkah",
      dayNumber: "CEREMONY",
      name: "The Sacred Nikkah",
      fullName: "Nikkah Ceremony",
      date: "29 November 2026",
      fullDate: "Sunday, 29 November 2026",
      time: "5:00 PM IST",
      displayTime: "5:00 PM",
      hijriDate: "19 Jumada al-Thani 1448 AH",
      description: "Solemnization of marriage in the presence of family and loved ones with sacred vows and prayers.",
      dressCode: "Elegance in Modest Attire & Mint Green",
    },
    {
      id: "reception",
      dayNumber: "CELEBRATION",
      name: "Wedding Reception",
      fullName: "Grand Wedding Reception",
      date: "29 November 2026",
      fullDate: "Sunday, 29 November 2026",
      time: "5:00 PM – 9:00 PM IST",
      displayTime: "5:00 PM – 9:00 PM",
      hijriDate: "19 Jumada al-Thani 1448 AH",
      description: "Join us for an evening of joy, celebration, delicious banquet feast, and warm blessings.",
      dressCode: "Festive Formal Attire · Mint & Pastel Tones",
    },
  ],

  // Curated Mint Green & Herbal Harmony Palette (From Figma: #ADEBB3)
  palette: [
    { name: "Mint Green", hex: "#ADEBB3" },
    { name: "Sage Green", hex: "#93B29B" },
    { name: "Herbal Green", hex: "#4D7554" },
    { name: "Deep Pine", hex: "#173C1F" },
    { name: "Eucalyptus", hex: "#C8EBD0" },
    { name: "Warm Champagne", hex: "#E5DAC8" },
  ],

  // Venue Details: Wind Valley Resort, Cherkala
  venue: {
    heading: "THE VENUE",
    name: "Wind Valley Resort, Cherkala",
    shortName: "Wind Valley Resort",
    location: "Cherkala, Kasargod",
    addressLine1: "Cherkala, Kasargod",
    addressLine2: "Kerala 671541",
    fullAddress: "Wind Valley Resort, Cherkala, Kasargod, Kerala",
    description: "Join us at this beautiful venue as we celebrate a day filled with love, blessings, and unforgettable memories.",
    directionsUrl: "https://maps.app.goo.gl/aobCjcHMkGcRP7q86",
    googleShareUrl: "https://maps.app.goo.gl/aobCjcHMkGcRP7q86",
    qrCode: "/venue-qr.png",
    features: [
      "Serene Garden Resort & Spacious Banquet Facilities",
      "Traditional & Modern Architecture with Scenic Greenery",
      "Courtyard Dining & Festive Ambience",
      "Dedicated Guest Parking",
    ],
  },

  // Audio / Music (Uploaded wedding song on repeat)
  audio: {
    enabled: true,
    title: "Wedding Song",
    src: "/wedding-music.mp3",
    loop: true,
  },

  // Footer & Credits
  footer: {
    copyright: "© 2026 Mubi & Sana. All Rights Reserved.",
    curatedByText: "Curated by",
    brandName: "Renovagate – Renovate Digitally",
    brandUrl: "https://www.renovagate.in",
  },
};

export default weddingConfig;
