import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { CountdownTimer } from './CountdownTimer';
import { 
  GoldWaxSeal, 
  BotanicalFlourish, 
  OrnamentalDivider, 
  BismillahCalligraphy,
  BotanicalFloralBorder 
} from './WeddingIllustrations';
import { weddingAudio } from '../utils/audioPlayer';
import { Mail, Sparkles, ArrowRight, RotateCcw, MapPin, Bell } from 'lucide-react';
import { ReminderModal } from './ReminderModal';

/**
 * Page 1 — Sage Green Luxury Envelope & Botanical Card Reveal
 * Faithfully mirrors the uploaded invitation card:
 * - Parents: Mr. badarudden. c h & Mrs.Safoora.B
 * - Address: chootra moola house, bevinje Thekkil, kasargod-671541
 * - Phone: MOB: 9400847857
 * - Bride: Fathimath Tana (Grand D/O Late Amoo & Late Bangadi muhammad)
 * - Groom: Muhammad Mubasheer. T.A (S/o Late Abdul kader. T.S, Thuruti house)
 * - Date: 29.11.2026 (19 JUMADA AL-THANI 1448 AH)
 * - Nikkah: 5:00 PM
 * - Venue: wind valley resort cherkala
 * - Reception: 5:00pm 10:00pm
 * - Sage Green theme with watercolor white floral & eucalyptus borders.
 */
export const PageOneEnvelope = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showReminder, setShowReminder] = useState(false);

  // Check for personalized guest name in URL params (?to=Farhan+and+Family)
  const guestName = (() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('to') || params.get('guest') || '';
    }
    return '';
  })();

  const handleOpen = () => {
    if (isOpen || isAnimating) return;
    setIsAnimating(true);

    weddingAudio.playPaperUnfoldSound();

    try {
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.62 },
        colors: ['#ADEBB3', '#C5A880', '#93B29B', '#FCFDFB', '#4D7554', '#173C1F'],
        disableForReducedMotion: true,
      });
    } catch {
      // Safe fallback
    }

    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
    }, 500);
  };

  const handleReset = (e) => {
    e.stopPropagation();
    weddingAudio.playPaperUnfoldSound();
    setIsOpen(false);
  };

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-8 sm:py-12 bg-gradient-to-b from-[#122A16] via-[#1A3820] to-[#122A16] text-[#F7F9F5] overflow-hidden">
      
      {/* Background Ambience: Subtle Botanical Flourishes */}
      <BotanicalFlourish className="absolute top-2 left-2 hidden md:block opacity-45" size={130} />
      <BotanicalFlourish className="absolute top-2 right-2 hidden md:block opacity-45" size={130} flipX={true} />
      <BotanicalFlourish className="absolute bottom-2 left-2 hidden md:block opacity-35" size={110} flipY={true} />
      <BotanicalFlourish className="absolute bottom-2 right-2 hidden md:block opacity-35" size={110} flipX={true} flipY={true} />

      {/* Top Header */}
      <div className="text-center max-w-lg mb-6 sm:mb-8 z-10">
        
        {/* Sacred Bismillah */}
        <BismillahCalligraphy className="mb-2" />

        <p className="font-serif text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#B8D9BF] font-semibold mb-2">
          {weddingConfig.couple.envelopeIntro}
        </p>

        <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#F7F9F5] font-normal leading-tight drop-shadow-md">
          {weddingConfig.couple.coupleShort}
        </h1>

        <OrnamentalDivider variant="arch" className="my-2" />

        {/* Personalized Guest Badge if present in URL */}
        {guestName && (
          <div className="inline-block mt-1 px-5 py-1 rounded-full bg-[#183820] border border-[#ADEBB3]/60 shadow-md">
            <span className="text-[10px] font-serif uppercase tracking-[0.24em] text-[#ADEBB3] font-semibold block">
              Honoured Guest
            </span>
            <span className="font-serif text-sm sm:text-base text-[#F7F9F5] font-medium">
              {guestName}
            </span>
          </div>
        )}
      </div>

      {/* Main Interactive Stationery Presentation */}
      <div className="relative w-full max-w-md sm:max-w-xl z-20 flex flex-col items-center perspective-1000">
        
        {/* PHYSICAL ENVELOPE / CARD AREA */}
        <div 
          onClick={!isOpen ? handleOpen : undefined}
          onKeyDown={(e) => {
            if (!isOpen && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              handleOpen();
            }
          }}
          role={!isOpen ? "button" : undefined}
          tabIndex={!isOpen ? 0 : undefined}
          aria-label={isOpen ? "Opened wedding invitation card" : "Sage-green wedding envelope. Click to open invitation."}
          className={`relative w-full transition-all duration-700 ease-out ${
            !isOpen ? 'cursor-pointer group hover:scale-[1.02] active:scale-[0.99]' : ''
          }`}
        >

          {/* STATE 1: CLOSED REALISTIC HERBAL GREEN ENVELOPE (#285233) WITH MINT FOIL */}
          {!isOpen && (
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.38/1] rounded-3xl bg-gradient-to-br from-[#285233] via-[#1D4026] to-[#142D1B] shadow-[0_25px_60px_-15px_rgba(8,18,10,0.85)] p-5 sm:p-7 border-2 border-[#ADEBB3]/70 flex flex-col justify-between overflow-hidden">
              
              {/* Inner Double Mint Green Hairline Border */}
              <div className="absolute inset-2.5 sm:inset-3.5 rounded-2xl border border-[#ADEBB3]/40 pointer-events-none" />
              <div className="absolute inset-4 sm:inset-5 rounded-xl border border-[#F7F9F5]/15 pointer-events-none" />

              {/* Envelope Postage Stamp in Top-Right Corner */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-12 h-14 rounded border border-dashed border-[#ADEBB3]/70 bg-[#16331D]/80 p-1 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-[7px] font-serif uppercase tracking-widest text-[#ADEBB3]">Royal Mail</span>
                <span className="text-xs text-[#ADEBB3] my-0.5">✦</span>
                <span className="text-[7px] font-mono text-[#F7F9F5]/90">29.11.26</span>
              </div>

              {/* Botanical Branch Illustrations on Envelope Corners */}
              <div className="absolute top-2 left-2 w-24 h-24 opacity-40 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M10 10 Q 35 15, 55 45 T 85 85" stroke="#ADEBB3" strokeWidth="2" fill="none" />
                  <path d="M 20 18 C 30 14, 38 22, 34 30 C 26 32, 18 26, 20 18 Z" fill="#93B29B" />
                  <path d="M 46 34 C 56 28, 64 36, 60 44 C 52 48, 44 42, 46 34 Z" fill="#ADEBB3" />
                  <circle cx="38" cy="18" r="3" fill="#ADEBB3" />
                </svg>
              </div>

              {/* 3D Envelope Flap Folds (SVG Representation in Herbal Pine) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 300">
                {/* Triangular Top Flap Shadow & Shape */}
                <polygon points="0,0 400,0 200,165" fill="#23472C" stroke="#ADEBB3" strokeWidth="1.2" strokeOpacity="0.65" />
                {/* Bottom Diagonal Pocket Folds */}
                <polygon points="0,300 200,160 400,300" fill="#17331E" opacity="0.95" stroke="#ADEBB3" strokeWidth="0.8" strokeOpacity="0.45" />
                <polygon points="0,0 0,300 200,165" fill="#285233" opacity="0.45" />
                <polygon points="400,0 400,300 200,165" fill="#285233" opacity="0.45" />
              </svg>

              {/* Centered Wax Seal with Monogram T & M */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center">
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <GoldWaxSeal
                    monogram={weddingConfig.couple.monogram}
                    size={98}
                    interactive={true}
                    onClick={handleOpen}
                    className="animate-pulse-subtle"
                  />
                  <div className="absolute inset-0 rounded-full bg-[#ADEBB3]/30 blur-lg pointer-events-none -z-10" />
                </div>
              </div>

              {/* Envelope Bottom Details */}
              <div className="relative z-10 text-center">
                <p className="font-serif text-[10px] sm:text-[11px] tracking-[0.26em] uppercase text-[#F7F9F5]/90 font-medium">
                  {weddingConfig.mainDateFormatted} • {weddingConfig.venue.shortName}
                </p>
              </div>
            </div>
          )}

          {/* STATE 2: REVEALED INVITATION CARD (MATCHING REFERENCE INVITATION CARD) */}
          {isOpen && (
            <div 
              className="relative w-full rounded-3xl bg-[#FCFDFB] text-[#14301A] border-2 border-[#ADEBB3]/70 shadow-[0_30px_70px_-15px_rgba(8,18,10,0.65)] p-5 sm:p-9 text-center animate-fade-in-up overflow-hidden"
              style={{
                backgroundImage: 'radial-gradient(rgba(173, 235, 179, 0.18) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            >
              {/* Top Botanical Watercolor Flowers & Eucalyptus Border */}
              <div className="absolute top-0 left-0 right-0 pointer-events-none">
                <BotanicalFloralBorder position="top" />
              </div>

              {/* Bottom Botanical Watercolor Flowers & Eucalyptus Border */}
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <BotanicalFloralBorder position="bottom" />
              </div>

              {/* Inner Double Mint Hairline Bevel */}
              <div className="absolute inset-3 border border-[#ADEBB3]/50 rounded-2xl pointer-events-none" />
              <div className="absolute inset-4.5 border border-[#93B29B]/35 rounded-xl pointer-events-none" />

              {/* Re-seal Envelope Control */}
              <button
                onClick={handleReset}
                className="absolute top-4 right-4 z-30 p-2 text-[#2D5936]/80 hover:text-[#14301A] hover:bg-[#EAF5EC] rounded-full transition-colors border border-transparent hover:border-[#ADEBB3]/40 cursor-pointer"
                title="Re-seal Envelope"
                aria-label="Close and re-seal envelope"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Card Contents Matching Uploaded Reference Card Exactly */}
              <div className="relative z-10 pt-8 pb-10 px-2 sm:px-4 flex flex-col items-center">
                
                {/* 1. Sacred Bismillah Calligraphy */}
                <BismillahCalligraphy className="mb-1" />

                {/* 2. Parents / Hosts */}
                <div className="mt-4 mb-2 text-center max-w-md">
                  <p className="font-serif text-sm sm:text-base md:text-lg font-bold text-[#14301A] tracking-wide">
                    {weddingConfig.parents.father}&nbsp;&nbsp;&nbsp;{weddingConfig.parents.mother}
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#2D5936] tracking-wider mt-0.5">
                    {weddingConfig.parents.fullAddress || `${weddingConfig.parents.house}  ${weddingConfig.parents.locality}`}
                  </p>
                </div>

                <div className="w-16 h-px bg-[#ADEBB3]/60 my-2" />

                {/* 3. Groom: Muhammad Mubasheer T A */}
                <div className="my-2 text-center w-full max-w-lg mx-auto px-1">
                  <h2 className="font-script text-2xl sm:text-3xl md:text-4xl text-[#14301A] font-normal leading-tight drop-shadow-xs whitespace-nowrap">
                    {weddingConfig.couple.groomFull}
                  </h2>
                  <p className="font-serif italic text-xs sm:text-sm text-[#2D5936] mt-0.5">
                    {weddingConfig.couple.groomLineage}
                  </p>
                  <p className="font-serif italic text-xs sm:text-sm text-[#2D5936] mt-0.5">
                    {weddingConfig.couple.groomLocation}
                  </p>
                </div>

                {/* Connector "&" */}
                <div className="my-1 text-[#2D5936] font-script text-2xl sm:text-3xl">
                  &amp;
                </div>

                {/* 4. Bride: Fathimath Sana */}
                <div className="my-2 text-center w-full max-w-lg mx-auto px-1">
                  <h2 className="font-script text-2xl sm:text-3xl md:text-4xl text-[#14301A] font-normal leading-tight drop-shadow-xs whitespace-nowrap">
                    {weddingConfig.couple.brideFull}
                  </h2>
                  <p className="font-serif italic text-xs sm:text-sm text-[#2D5936] mt-0.5">
                    {weddingConfig.couple.brideLineage}
                  </p>
                </div>

                {/* Divider Line */}
                <OrnamentalDivider variant="arch" className="my-3" />

                {/* 5. Date & Islamic Date */}
                <div className="my-2 text-center">
                  <p className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#14301A]">
                    {weddingConfig.mainDateCompact}
                  </p>
                  <p className="font-serif text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#2D5936] font-semibold mt-1">
                    {weddingConfig.hijriDate}
                  </p>
                  <div className="mt-2 inline-block px-4 py-1 rounded-full bg-[#EAF5EC] border border-[#ADEBB3]/50">
                    <p className="font-serif text-sm sm:text-base tracking-[0.22em] uppercase text-[#14301A] font-bold">
                      NIKKAH: {weddingConfig.nikkahTime}
                    </p>
                  </div>
                </div>

                <div className="w-20 h-px bg-[#ADEBB3]/60 my-3" />

                {/* 6. Venue & Reception */}
                <div className="my-2 text-center max-w-md">
                  <p className="font-serif text-sm sm:text-base font-bold text-[#14301A] tracking-wide">
                    Venue: {weddingConfig.venue.name}
                  </p>
                  <p className="font-serif text-xs sm:text-sm font-semibold text-[#2D5936] tracking-wider mt-0.5">
                    Reception: {weddingConfig.receptionDisplay}
                  </p>
                </div>

                {/* Real Working Countdown Timer to 29.11.2026 5:00 PM */}
                <div className="w-full my-4">
                  <CountdownTimer compact={true} />
                </div>

                {/* 28 Nov 2026 Notification for Everyone */}
                <div className="my-1.5">
                  <button
                    onClick={() => setShowReminder(true)}
                    className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#EAF5EC] hover:bg-[#DDF2E2] border border-[#ADEBB3] text-[#14301A] font-serif text-xs font-semibold tracking-wider transition-all duration-300 shadow-xs hover:scale-103 cursor-pointer group"
                  >
                    <Bell className="w-3.5 h-3.5 text-[#2D5936] group-hover:rotate-12 transition-transform" />
                    <span>🔔 NOTIFY ME ON 28/11/2026</span>
                  </button>
                </div>

                {/* Primary Button: VIEW EVENT DETAILS & VENUE DIRECTIONS */}
                <div className="mt-4 mb-2">
                  <button
                    onClick={() => onNavigate('page-2')}
                    className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#285233] via-[#1D4026] to-[#285233] text-[#F7F9F5] font-serif tracking-[0.22em] text-xs sm:text-sm uppercase shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#ADEBB3]/70 group cursor-pointer gold-shimmer-sweep"
                  >
                    <span>VIEW EVENT DETAILS &amp; VENUE</span>
                    <ArrowRight className="w-4 h-4 text-[#ADEBB3] group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* CLICK ENVELOPE TO OPEN Prompt beneath envelope */}
        {!isOpen && (
          <div className="mt-7 text-center animate-bounce-subtle">
            <button
              onClick={handleOpen}
              className="inline-flex items-center space-x-2 font-serif text-xs sm:text-sm tracking-[0.26em] uppercase text-[#F7F9F5] font-semibold hover:text-[#ADEBB3] transition-colors py-2.5 px-6 rounded-full bg-[#183820] border border-[#ADEBB3]/60 shadow-lg group cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#ADEBB3] group-hover:rotate-12 transition-transform" />
              <span>CLICK ENVELOPE TO OPEN</span>
              <Sparkles className="w-3.5 h-3.5 text-[#ADEBB3] animate-pulse" />
            </button>
          </div>
        )}

      </div>

      {/* Reminder Modal for 28 Nov 2026 Notification */}
      <ReminderModal isOpen={showReminder} onClose={() => setShowReminder(false)} />

    </div>
  );
};

export default PageOneEnvelope;
