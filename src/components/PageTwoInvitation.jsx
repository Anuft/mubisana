import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { CountdownTimer } from './CountdownTimer';
import { GoldWaxSeal, BotanicalFlourish, OrnamentalDivider, BismillahCalligraphy } from './WeddingIllustrations';
import { ArrowRight, Calendar } from 'lucide-react';

/**
 * Page 2 — Moody Luxury Formal Invitation & Live Countdown
 * Dark plum background (#28191F), ivory paper card (#F5EFE8),
 * deep wine-plum typography (#49232F), wine-red button (#702437),
 * champagne gold borders (#B49A78).
 */
export const PageTwoInvitation = ({ onNavigate }) => {

  const handleAddToCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      `PRODID:-//${weddingConfig.couple.coupleNames} Wedding//EN`,
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `SUMMARY:${weddingConfig.couple.coupleNames} Wedding Celebration`,
      `DESCRIPTION:Together with their families, ${weddingConfig.couple.coupleNames} joyfully invite you to celebrate their wedding.`,
      `LOCATION:${weddingConfig.venue.fullAddress}`,
      'DTSTART:20261220T053000Z',
      'DTEND:20261220T103000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Hiba-Ronak-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-10 sm:py-16 bg-gradient-to-b from-[#28191F] via-[#352129] to-[#28191F] text-[#F5EFE8] overflow-hidden">
      
      {/* Decorative Botanical Flourishes in Background */}
      <BotanicalFlourish className="absolute top-4 left-4 hidden md:block opacity-45" size={130} />
      <BotanicalFlourish className="absolute top-4 right-4 hidden md:block opacity-45" size={130} flipX={true} />
      <BotanicalFlourish className="absolute bottom-6 left-6 hidden md:block opacity-35" size={110} flipY={true} />
      <BotanicalFlourish className="absolute bottom-6 right-6 hidden md:block opacity-35" size={110} flipX={true} flipY={true} />

      {/* Main Invitation Card Composition */}
      <div className="relative w-full max-w-xl mx-auto z-10 animate-fade-in-up">
        
        {/* Luxury Deckle Ivory Card (#F5EFE8) with Deep Wine Text (#49232F) */}
        <div 
          className="relative rounded-3xl bg-[#F5EFE8] text-[#49232F] border-2 border-[#B49A78]/70 shadow-[0_30px_80px_-20px_rgba(15,5,10,0.7)] p-7 sm:p-12 md:p-14 text-center overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(rgba(180, 154, 120, 0.16) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        >
          {/* Inner Double Gold Hairline Border Frame */}
          <div className="absolute inset-3 sm:inset-4.5 rounded-2xl border border-[#B49A78]/50 pointer-events-none" />
          <div className="absolute inset-4.5 sm:inset-6 rounded-xl border border-[#702437]/20 pointer-events-none" />

          {/* Corner Floral Filigree */}
          <BotanicalFlourish className="absolute top-2 left-2" size={75} />
          <BotanicalFlourish className="absolute top-2 right-2" size={75} flipX={true} />
          <BotanicalFlourish className="absolute bottom-2 left-2" size={75} flipY={true} />
          <BotanicalFlourish className="absolute bottom-2 right-2" size={75} flipX={true} flipY={true} />

          {/* Sacred Bismillah Calligraphy at the Peak */}
          <BismillahCalligraphy className="mb-4" />

          {/* Top Wax Seal */}
          <div className="relative z-10 mb-3 flex justify-center">
            <GoldWaxSeal monogram={weddingConfig.couple.monogram} size={86} interactive={false} />
          </div>

          {/* Section 5 Line 1: CELEBRATE WITH US AT */}
          <p className="font-serif text-xs sm:text-sm tracking-[0.3em] uppercase text-[#702437] font-semibold mb-3">
            {weddingConfig.couple.formalHeadline}
          </p>

          {/* Section 5 Line 2: Amal & Hiba in Calligraphy */}
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#49232F] font-normal leading-[1.1] my-2 drop-shadow-xs">
            {weddingConfig.couple.coupleNames}
          </h1>

          {/* Delicate Ornamental Divider */}
          <OrnamentalDivider variant="arch" className="my-3" />

          {/* Section 5 Line 3: OUR WEDDING CELEBRATION */}
          <h2 className="font-serif text-sm sm:text-base md:text-lg tracking-[0.28em] uppercase text-[#49232F] font-medium my-2">
            {weddingConfig.couple.formalEventName}
          </h2>

          {/* Section 5 Line 4: 20 DECEMBER 2026 */}
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#702437] font-bold tracking-wider my-3">
            {weddingConfig.mainDateFormatted}
          </p>

          {/* Section 5 Line 5: WITH LOVE AND BLESSINGS, WE INVITE YOU TO JOIN US */}
          <p className="font-serif italic text-sm sm:text-base text-[#49232F]/85 max-w-md mx-auto my-4 font-light leading-relaxed">
            "{weddingConfig.couple.formalBlessing}"
          </p>

          <OrnamentalDivider variant="crescent" className="my-4" />

          {/* Live Countdown to Nikkah below invitation */}
          <div className="my-6">
            <p className="font-serif text-[11px] sm:text-xs tracking-[0.26em] uppercase text-[#963D50] font-semibold mb-3">
              COUNTDOWN TO THE NIKKAH • {weddingConfig.mainTimeFormatted}
            </p>
            {/* Same reusable countdown component as Page 1 */}
            <CountdownTimer compact={false} />
          </div>

          {/* Save to Calendar Button */}
          <div className="my-4">
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-[0.2em] text-[#702437] hover:text-[#963D50] bg-[#FFFFFF] px-4 py-2 rounded-full border border-[#B49A78]/50 shadow-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B49A78]" />
              <span>Save Date to Calendar</span>
            </button>
          </div>

          {/* Section 5 Button: CLICK HERE FOR THE DETAILS (Navigates to Page 3) */}
          <div className="mt-7 mb-2">
            <button
              onClick={() => onNavigate('page-3')}
              className="inline-flex items-center space-x-2.5 px-9 py-3.5 rounded-full bg-gradient-to-r from-[#702437] via-[#5A1D2C] to-[#702437] text-[#F5EFE8] font-serif tracking-[0.22em] text-xs sm:text-sm uppercase shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#B49A78]/70 group cursor-pointer gold-shimmer-sweep"
            >
              <span>CLICK HERE FOR THE DETAILS</span>
              <ArrowRight className="w-4 h-4 text-[#B49A78] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default PageTwoInvitation;
