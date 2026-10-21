# Hiba & Ronak — Luxury Digital Wedding Invitation Website

A bespoke, interactive digital wedding invitation website crafted for **Hiba & Ronak**, featuring a luxurious moody dark plum, rich wine-red, champagne gold, and soft ivory aesthetic with interactive stationery animations, real-time countdown, dress code guides, and venue location scanning.

Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Highlights & Structure

### Page 1 — Interactive Envelope & Card Reveal
- **Moody Plum & Burgundy Gradient Background** (`#28191F` / `#352129`) with delicate champagne gold botanical flourishes.
- **Header**: `SEALED AND SENT WITH LOVE FROM` / `Hiba & Ronak`.
- **Realistic 3D Wine-Red Envelope** (`#702437`) with champagne gold border, folded flap, and corner botanical illustrations.
- **Deep Wine Wax Seal** (`#963D50`) with embossed monogram initials `H & R` and gold rim.
- **Interactive Open Animation**: Clicking or tapping the seal or envelope unfolds the 3D flap, fires an elegant gold confetti burst, and slides up the revealed ivory invitation card.
- **Revealed Card Details**:
  - `YOU ARE CORDIALLY INVITED`
  - `Hiba & Ronak` (calligraphy)
  - `JOIN US TO CELEBRATE OUR WEDDING`
  - `20 DECEMBER 2026`
  - `11:00 AM IST`
  - Reusable **Real-Time Countdown Timer**
  - Wine-red button: **`CLICK HERE FOR THE DETAILS`** (smoothly navigates to Page 2)
  - Bottom signature: `WITH LOVE` / `Shaha, Hiba & Family`
  - Re-close icon to re-seal and experience the envelope opening anytime.

### Page 2 — Formal Invitation & Countdown
- **Refined Invitation Page**: Fine ornamental champagne gold hairline borders, botanical flourishes, and gold wax seal.
- **Calligraphy Couple Names**: `Hiba & Ronak`.
- **Exact Formal Invitation Wording**:
  > `CELEBRATE WITH US AT`  
  > `Hiba & Ronak`  
  > `OUR WEDDING CELEBRATION`  
  > `20 DECEMBER 2026`  
  > `WITH LOVE AND BLESSINGS, WE INVITE YOU TO JOIN US`
- **Live Nikkah Countdown Timer**:
  - Reusable component tracking `DAYS | HOURS | MINUTES | SECONDS`.
  - Serif numbers, wine-red plum numbers, champagne gold separators, ivory backgrounds.
- Button: **`CLICK HERE FOR THE DETAILS`** (navigates to Page 3).
- Signature: `WITH LOVE` / `Shaha, Hiba & Family`.

### Page 3 — Dress Code, Event Schedule, Venue & QR Code
- **Header**: `THE WEDDING CELEBRATION`
- **Three Separate, Vertically Arranged Event Sections**:
  1. **DAY 1 — MEHNDI** (18 December 2026)
     - Dress Code: `Saree · Skirt & Blouse · Shirt`
     - Custom illustration of bride in traditional saree and groom in festive clothing.
     - Note: Color swatches omitted per guest choice.
  2. **DAY 2 — RAAT-E RANG** (19 December 2026)
     - Dress Code: `Modesty Wears · Kurtha`
     - Custom illustration of traditional modest South Asian outfits, evening lanterns, and stars.
     - 4 Exact Arch Swatches (Antelope Canyon jewel tones):
       - Deep Navy Blue (`#1B355A`)
       - Berry Rose (`#A03A55`)
       - Burnt Orange (`#D87421`)
       - Golden Yellow (`#FAB522`)
  3. **DAY 3 — NIKKAH** (20 December 2026)
     - Dress Code: `Any Shades of Pastels`
     - Custom illustration of bride and groom in traditional wedding attire with crescent moon and stars.
     - 6 Exact Pastel Arch Swatches:
       - Butter Yellow (`#FFF6B3`)
       - Powder Blue (`#CFE8F7`)
       - Sage Green (`#D6E7C9`)
       - Champagne Beige (`#E8DCC6`)
       - Soft Lavender (`#C8C2E6`)
       - Pastel Blue (`#BFD0EA`)
- **The Celebration — Event Schedule**:
  - Day 1: Mehndi (18 December 2026)
  - Day 2: Raat-e Rang (19 December 2026)
  - Day 3: Nikkah (20 December 2026 at 11:00 AM IST)
  - Interactive "Add to Calendar" (.ics generation) button for each event.
- **The Venue & Location QR Code**:
  - `THE VENUE`
  - `Vannery Palace Convention Centre`
  - Address: `Mavinchuvadu, Punnayurkulam, Thrissur, Kerala 679561`
  - Description: *"Join us at this beautiful venue as we celebrate a day filled with love, blessings, and unforgettable memories."*
  - Architectural high-resolution photograph in a refined gold frame.
  - Buttons: **`GET DIRECTIONS`** linked to Google Maps, and Google Share link.
  - Embedded responsive Google Map.
  - **Scan for Venue Location QR Code block** with quick scan and tap-to-open map link.

### Universal Navigation & Footer
- **Navigation Bar**: `Page 1 | Page 2 | Page 3` with active page highlighted with wine-red plum and a fine champagne-gold underline. Synchronized with URL hashes (`#page-1`, `#page-2`, `#page-3`).
- **Footer**: `WITH LOVE` / `Shaha, Hiba & Family` with champagne gold ornamental divider and quick page links.
- **Floating Ambient Audio**: Gentle acoustic synthesizer built with Web Audio API.

---

## ⏱ Real Working Countdown

- **Target Timestamp**: `2026-12-20T11:00:00+05:30` (20 December 2026 at 11:00 AM IST).
- Reusable React component: `src/components/CountdownTimer.jsx`.
- Calculates difference against `Date.now()` on every tick with `setInterval` and cleanup.
- Never shows negative numbers.
- Formatted with 2-digit padding (`DAYS | HOURS | MINUTES | SECONDS`).
- Displays `"THE WEDDING DAY IS HERE!"` when remaining reaches zero.

---

## 🛠 Central Configuration

All wedding details, dates, dress codes, swatches, venue details, and colors are managed in:
[`src/config/weddingConfig.js`](./src/config/weddingConfig.js)

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run automated validation suite (42 tests)
node test-validation.mjs

# 3. Start local development server
npm run dev

# 4. Build production bundle (into dist/)
npm run build

# 5. Preview production build
npm run preview
```

---

## 🌐 Deploying to the Web

The `dist/` folder is a complete, self-contained static build ready to deploy to any hosting provider:

- **Netlify**: Drag and drop the `dist/` folder into Netlify Drop.
- **Vercel**: Run `vercel` or link your Git repository with build command `npm run build` and output directory `dist`.
- **GitHub Pages**: Deploy the `dist/` directory using the `gh-pages` tool or GitHub Actions.
