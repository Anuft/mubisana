import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { FloralCorner, WaxSeal, OrnamentalDivider, RoyalCrest } from './FloralDecorations';
import { weddingConfig } from '../config/weddingConfig';
import { Mail, Sparkles, Heart } from 'lucide-react';

export const OpeningInvitation = ({ onOpen, onStartAudio, guestName }) => {
  const [isOpening, setIsOpening] = useState(false);
  const { couple, dates } = weddingConfig;

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger royal champagne & gold confetti burst
    confetti({
      particleCount: 65,
      spread: 80,
      origin: { y: 0.62 },
      colors: ['#c5a059', '#f4e8cb', '#8f4a5a', '#faf8f5', '#4e0309', '#d4af37'],
      disableForReducedMotion: true,
    });

    if (onStartAudio) {
      onStartAudio();
    }

    // Smooth unboxing transition
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f3ede3] p-4 sm:p-6 overflow-hidden">
      {/* Ambient luxury backdrop with soft royal warm vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] via-[#f2ece1] to-[#e8dfcf] pointer-events-none" />
      <div className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#c5a059]/15 via-[#8f4a5a]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Main Luxury Envelope Container */}
      <div 
        className={`relative w-full max-w-lg transition-all duration-1000 ease-out transform ${
          isOpening ? 'scale-105 opacity-0 -translate-y-10 pointer-events-none' : 'scale-100 opacity-100'
        }`}
      >
        {/* Physical Paper Card with Gold Foil Deckle Frame */}
        <div className="relative mx-auto rounded-3xl bg-[#ffffff] border border-[#c5a059]/40 shadow-2xl p-6 sm:p-10 text-center overflow-hidden">
          
          {/* Subtle Inner 24k Gold Hairline Bevel */}
          <div className="absolute inset-3 border border-[#c5a059]/35 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 border border-[#4e0309]/15 rounded-xl pointer-events-none" />

          {/* Corner Floral Filigree Illustrations */}
          <FloralCorner className="absolute top-2 left-2" size={96} />
          <FloralCorner className="absolute top-2 right-2" size={96} flipX={true} />
          <FloralCorner className="absolute bottom-2 left-2" size={96} flipY={true} />
          <FloralCorner className="absolute bottom-2 right-2" size={96} flipX={true} flipY={true} />

          {/* Card Content */}
          <div className="relative z-10 py-5 sm:py-7 flex flex-col items-center">
            
            {/* Royal Crest Monogram at Top */}
            <div className="mb-2">
              <RoyalCrest initials={couple.initials} size={64} />
            </div>

            {/* Top Eyebrow / Label */}
            <p className="font-serif text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#6e1f2d] font-semibold mb-2">
              {couple.envelopeIntro}
            </p>

            {/* Personalized Guest Badge if name in link */}
            {guestName && (
              <div className="my-2 px-5 py-1.5 rounded-full bg-[#faf8f5] border border-[#c5a059]/70 shadow-sm animate-pulse-subtle">
                <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-[#8f4a5a] block font-medium">
                  Specially Invited
                </span>
                <span className="font-script text-2xl sm:text-3xl text-[#4e0309]">
                  {guestName}
                </span>
              </div>
            )}

            {/* Couple Calligraphy Names */}
            <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#4e0309] font-normal leading-[1.1] my-2 drop-shadow-xs">
              {couple.groom.firstName} <span className="text-[#c5a059] font-serif text-3xl sm:text-5xl">&amp;</span> {couple.bride.firstName}
            </h1>

            {/* Subtle Divider */}
            <OrnamentalDivider variant="flower" className="my-3" />

            {/* Tagline & Date */}
            <p className="font-serif italic text-sm sm:text-base text-[#5a4246] max-w-xs mx-auto mb-2 font-light">
              "{couple.tagline}"
            </p>
            
            <p className="font-serif text-xs sm:text-sm tracking-[0.22em] uppercase text-[#6e1f2d] font-semibold mb-4">
              {dates.displayDate}
            </p>

            {/* Ultra-Realistic 3D Wax Seal Stamp (Interactive) */}
            <div className="my-2 group">
              <WaxSeal
                monogram={couple.monogram}
                size={96}
                interactive={true}
                onClick={handleOpenClick}
                className="transition-transform duration-300 transform group-hover:rotate-6 group-hover:scale-108"
              />
              <p className="text-[11px] font-serif tracking-[0.2em] uppercase text-[#8f4a5a] mt-2.5 group-hover:text-[#4e0309] transition-colors font-medium">
                Tap Wax Seal to Break &amp; Open
              </p>
            </div>

            {/* Open Invitation & View Details Buttons */}
            <div className="mt-5 flex flex-col items-center space-y-2.5">
              <button
                onClick={handleOpenClick}
                disabled={isOpening}
                className="inline-flex items-center space-x-2.5 px-8 py-3 rounded-full bg-gradient-to-r from-[#4e0309] via-[#6e1f2d] to-[#4e0309] text-[#fdfcf9] font-serif tracking-[0.2em] text-xs sm:text-sm uppercase shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#c5a059]/50 group"
              >
                <Mail className="w-4 h-4 text-[#f4e8cb] group-hover:rotate-12 transition-transform duration-300" />
                <span>{isOpening ? "Unfolding Card..." : "Open Invitation"}</span>
                <Sparkles className="w-4 h-4 text-[#c5a059] animate-pulse" />
              </button>

              <button
                onClick={handleOpenClick}
                className="text-[11px] font-serif tracking-[0.18em] uppercase text-[#4e0309] underline hover:text-[#c5a059] transition-colors pt-1"
              >
                Click Here For Full Details →
              </button>
            </div>

            <p className="text-[11px] text-[#8f4a5a] mt-4 font-serif italic">
              A celebration of faith, sacred vows &amp; cherished love
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
