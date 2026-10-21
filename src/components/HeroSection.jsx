import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { FloralCorner, OrnamentalDivider, RoyalCrest } from './FloralDecorations';
import { Calendar, MapPin, Heart, Clock, Sparkles } from 'lucide-react';

export const HeroSection = ({ guestName }) => {
  const { couple, dates, venue } = weddingConfig;

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(dates.countdownTarget).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isCompleted: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [dates.countdownTarget]);

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `Wedding of ${couple.groom.firstName} & ${couple.bride.firstName}`
  )}&dates=20260812T053000Z/20260812T103000Z&details=${encodeURIComponent(
    `We joyfully invite you to the Nikkah & Wedding Reception of ${couple.groom.fullName} and ${couple.bride.fullName}.`
  )}&location=${encodeURIComponent(venue.name + ', ' + venue.address)}`;

  return (
    <section id="hero" className="relative pt-24 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Background corner flourishes */}
      <FloralCorner className="absolute top-4 left-2 sm:left-6 opacity-60" size={110} />
      <FloralCorner className="absolute top-4 right-2 sm:right-6 opacity-60" size={110} flipX={true} />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Royal Crest Monogram Badge */}
        <div className="mb-2">
          <RoyalCrest initials={couple.initials} size={70} />
        </div>

        {/* Family Greeting */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#c5a059]/50 bg-[#ffffff]/90 shadow-xs mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
          <p className="font-serif text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6e1f2d] font-semibold">
            {couple.togetherWithFamilies}
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
        </div>

        {/* Personalized Guest Greeting if link has name */}
        {guestName && (
          <div className="my-2 px-5 py-1.5 rounded-full bg-[#ffffff] border border-[#c5a059]/70 shadow-sm animate-pulse-subtle">
            <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-[#8f4a5a] block font-medium">
              Special Invitation For
            </span>
            <span className="font-script text-2xl sm:text-3xl text-[#4e0309]">
              {guestName}
            </span>
          </div>
        )}

        {/* Sacred Verse */}
        <p className="font-serif italic text-xs sm:text-sm text-[#8f4a5a] mb-1 font-light tracking-wide">
          {couple.subTagline}
        </p>

        {/* Main Calligraphy Couple Names */}
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#4e0309] font-normal leading-[1.08] my-1 drop-shadow-sm">
          {couple.groom.firstName} <span className="font-serif text-[#c5a059] text-4xl sm:text-6xl md:text-7xl font-light">&amp;</span> {couple.bride.firstName}
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-sm sm:text-base text-[#5a4246] max-w-md mx-auto font-light mb-3">
          "{couple.tagline}"
        </p>

        <OrnamentalDivider variant="flower" className="my-2" />

        {/* Neoclassical Arch Portrait with 24k Gold Foil Frame */}
        <div className="relative my-4 group">
          {/* Outer gold glow halo */}
          <div className="absolute -inset-3 rounded-t-[150px] rounded-b-2xl bg-gradient-to-b from-[#c5a059]/30 via-[#8f4a5a]/15 to-transparent blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative w-52 sm:w-64 h-64 sm:h-80 rounded-t-[140px] rounded-b-2xl overflow-hidden border-2 border-[#c5a059] shadow-2xl bg-[#f0ebe1] p-1 bg-gradient-to-b from-[#ffffff] to-[#f4e8cb]/40">
            <div className="w-full h-full rounded-t-[136px] rounded-b-xl overflow-hidden relative">
              <img
                src={couple.mainHeroImage}
                alt={`${couple.groom.firstName} & ${couple.bride.firstName}`}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4e0309]/45 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#faf8f5]/95 backdrop-blur-md border border-[#c5a059]/60 text-[#4e0309] font-serif text-[10px] tracking-[0.2em] uppercase shadow-sm">
                {couple.initials} • August 2026
              </div>
            </div>
          </div>

          {/* Golden finial laurels */}
          <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full border border-[#c5a059] bg-[#ffffff] flex items-center justify-center text-[10px] text-[#c5a059] shadow-sm">
            ✦
          </div>
          <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full border border-[#c5a059] bg-[#ffffff] flex items-center justify-center text-[10px] text-[#c5a059] shadow-sm">
            ✦
          </div>
        </div>

        {/* Wedding Date & Venue Line */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center text-[#4e0309] font-serif">
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold">
              {dates.mainWeddingDate}
            </span>
          </div>
          <span className="text-[#c5a059] font-light">•</span>
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs sm:text-sm tracking-wider text-[#5a4246] font-medium">
              {venue.shortName}
            </span>
          </div>
        </div>

        {/* Luxury Gold-Trimmed Countdown Timer */}
        <div className="mt-5 w-full max-w-md">
          {timeLeft.isCompleted ? (
            <div className="py-2.5 px-6 rounded-full bg-[#4e0309] text-[#fdfcf9] text-xs font-serif tracking-[0.2em] uppercase shadow-md border border-[#c5a059]/40">
              🎉 Celebrating Our Sacred Union!
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { label: "DAYS", val: timeLeft.days },
                { label: "HOURS", val: timeLeft.hours },
                { label: "MINUTES", val: timeLeft.minutes },
                { label: "SECONDS", val: timeLeft.seconds },
              ].map(item => (
                <div 
                  key={item.label} 
                  className="p-2 sm:p-2.5 rounded-2xl bg-[#ffffff] border border-[#c5a059]/45 shadow-sm text-center relative overflow-hidden group hover:border-[#4e0309]/50 transition-colors"
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#4e0309] font-medium leading-none block">
                    {String(item.val).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-[#8f4a5a] block mt-1 font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons: Add to Calendar & RSVP & Full Details */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full border border-[#c5a059] bg-[#ffffff] text-[#4e0309] font-serif text-xs uppercase tracking-wider hover:bg-[#4e0309] hover:text-[#ffffff] transition-all duration-300 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Save The Date</span>
          </a>

          <a
            href="#events"
            className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full bg-[#ffffff] border border-[#4e0309]/50 text-[#4e0309] font-serif text-xs uppercase tracking-wider hover:bg-[#4e0309] hover:text-[#ffffff] transition-all duration-300 shadow-xs"
          >
            <span>Full Details &amp; Timeline ↓</span>
          </a>

          <a
            href="#rsvp"
            className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4e0309] via-[#6e1f2d] to-[#4e0309] text-[#fdfcf9] font-serif text-xs uppercase tracking-widest shadow-md hover:scale-105 active:scale-95 transition-all duration-300 border border-[#c5a059]/40"
          >
            <Heart className="w-3.5 h-3.5 text-[#c5a059] fill-current" />
            <span>RSVP Joyfully</span>
          </a>
        </div>

      </div>
    </section>
  );
};
