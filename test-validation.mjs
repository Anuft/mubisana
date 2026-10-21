import { weddingConfig } from './src/config/weddingConfig.js';

console.log("=== RUNNING VALIDATION SUITE FOR MUBI & SANA WEDDING ===");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    failed++;
  }
}

// 1. Couple Names & Lineage
assert(weddingConfig.couple.coupleNames === "Mubi & Sana", "Couple names are 'Mubi & Sana'");
assert(weddingConfig.couple.coupleShort === "Mubi & Sana", "Couple short name is 'Mubi & Sana'");
assert(weddingConfig.couple.brideFull === "Sana", "Bride name is 'Sana'");
assert(weddingConfig.couple.brideLineage.includes("Late Amoo") && weddingConfig.couple.brideLineage.includes("Late Bangadi muhammad"), "Bride lineage includes Late Amoo & Late Bangadi Muhammad");
assert(weddingConfig.couple.groomFull === "Mubi", "Groom name is 'Mubi'");
assert(weddingConfig.couple.groomLineage.includes("Late Abdul kader. T.S"), "Groom lineage includes Late Abdul Kader T.S");
assert(weddingConfig.couple.groomLocation === "Thuruti house", "Groom house is 'Thuruti house'");
assert(weddingConfig.couple.monogram === "M & S", "Monogram is 'M & S'");

// 2. Parents / Hosts
assert(weddingConfig.parents.father === "Mr. badarudden. c h", "Father is 'Mr. badarudden. c h'");
assert(weddingConfig.parents.mother === "Mrs.Safoora.B", "Mother is 'Mrs.Safoora.B'");
assert(weddingConfig.parents.fullAddress.includes("Chootra Moola") && weddingConfig.parents.fullAddress.includes("Kasargod"), "Parents address includes Chootra Moola & Kasargod");
assert(weddingConfig.parents.phone === "9400847857", "Phone is 9400847857");

// 3. Countdown Target & Dates
assert(weddingConfig.targetDateISO === "2026-11-29T17:00:00+05:30", "Exact target timestamp is 2026-11-29T17:00:00+05:30");
const targetTimestamp = new Date(weddingConfig.targetDateISO).getTime();
assert(!isNaN(targetTimestamp), "Target timestamp parses correctly in JavaScript Date");
assert(weddingConfig.mainDateCompact === "29.11.2026", "Compact date is 29.11.2026");
assert(weddingConfig.hijriDate === "19 JUMADA AL-THANI 1448 AH", "Islamic date is '19 JUMADA AL-THANI 1448 AH'");
assert(weddingConfig.nikkahTime === "5:00 PM", "Nikkah time is 5:00 PM");
assert(weddingConfig.receptionTime.includes("5:00 PM") && weddingConfig.receptionTime.includes("10:00 PM"), "Reception time is 5:00 PM – 10:00 PM");

// 4. Venue: Wind Valley Resort Cherkala
assert(weddingConfig.venue.name === "Wind Valley Resort, Cherkala", "Venue name is 'Wind Valley Resort, Cherkala'");
assert(weddingConfig.venue.directionsUrl.includes("maps.app.goo.gl") || weddingConfig.venue.directionsUrl.includes("Wind+Valley"), "Directions URL leads to venue Google Maps link");
assert(weddingConfig.venue.qrCode === "/venue-qr.png", "Venue QR code points to /venue-qr.png");

// 5. Theme: Mint Green (#ADEBB3) & Herbal Harmony Palette
assert(weddingConfig.palette.length === 6, "Palette contains 6 curated shades");
assert(weddingConfig.palette.some(p => p.name.includes("Sage Green")), "Palette includes Sage Green");
assert(weddingConfig.palette.some(p => p.name.includes("Eucalyptus")), "Palette includes Eucalyptus");
assert(weddingConfig.palette.some(p => p.hex.toLowerCase() === "#adebb3"), "Palette contains Figma Mint Green '#ADEBB3'");
assert(weddingConfig.theme.mintGreen.toLowerCase() === "#adebb3", "Theme mintGreen is Figma Mint Green '#ADEBB3'");

console.log(`\nRESULTS: ${passed} passed, ${failed} failed.`);

if (failed > 0) {
  process.exit(1);
}
