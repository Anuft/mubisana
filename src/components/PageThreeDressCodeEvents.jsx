import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { 
  OrnamentalDivider, 
  BotanicalFlourish,
  BismillahCalligraphy,
  BotanicalFloralBorder 
} from './WeddingIllustrations';
import { 
  MapPin, 
  Navigation as NavIcon, 
  Calendar, 
  Sparkles, 
  Moon, 
  Clock, 
  Share2, 
  Check, 
  Heart,
  ExternalLink,
  Bell,
  Send
} from 'lucide-react';
import { ReminderModal } from './ReminderModal';

/**
 * Page 2 — Event Details, Schedule, Sage Green Palette & Venue
 * Faithfully matches the uploaded reference:
 * - Couple: Fathimath Tana & Muhammad Mubasheer T.A
 * - Date: 29.11.2026 (19 JUMADA AL-THANI 1448 AH)
 * - Nikkah: 5:00 PM
 * - Reception: 5:00 PM – 10:00 PM
 * - Venue: Wind Valley Resort, Cherkala (Kasargod)
 * - Parents / Contact: Mr. Badarudden C.H (9400847857)
 * - Sage Green botanical luxury theme.
 */
export const PageThreeDressCodeEvents = ({ onNavigate }) => {
  const { events, venue, couple, parents } = weddingConfig;
  const [copiedLink, setCopiedLink] = useState(false);
  const [showReminder, setShowReminder] = useState(false);

  // Generate downloadable calendar .ics file with 28 Nov 2026 notification
  const handleDownloadCalendar = (event) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      `PRODID:-//${couple.coupleNames} Wedding//EN`,
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@mubi-sana.wedding`,
      `SUMMARY:🔔 ${couple.coupleShort} Wedding — ${event.name}`,
      `DESCRIPTION:Join us for ${event.name} of ${couple.coupleNames}!\\nVenue: ${venue.name}\\nTime: ${event.displayTime}\\nGoogle Maps: ${venue.directionsUrl}`,
      `LOCATION:${venue.fullAddress}`,
      'DTSTART:20261129T113000Z',
      'DTEND:20261129T163000Z',
      'STATUS:CONFIRMED',
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      `DESCRIPTION:🔔 Reminder for 28/11/2026: ${couple.coupleShort} Wedding Tomorrow!`,
      'END:VALARM',
      'BEGIN:VALARM',
      'TRIGGER:-PT2H',
      'ACTION:DISPLAY',
      `DESCRIPTION:🔔 Reminder: ${couple.coupleShort} Wedding starts in 2 hours!`,
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Mubi-Sana-${event.id}-Reminder-28Nov.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShareLink = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-10 sm:py-16 bg-gradient-to-b from-[#122A16] via-[#1A3820] to-[#122A16] text-[#F7F9F5] overflow-hidden">
      
      {/* Background Ambience: Subtle Botanical Flourishes */}
      <BotanicalFlourish className="absolute top-8 left-4 hidden lg:block opacity-40" size={140} />
      <BotanicalFlourish className="absolute top-8 right-4 hidden lg:block opacity-40" size={140} flipX={true} />

      <div className="max-w-4xl mx-auto">
        
        {/* ===================================================================
             PAGE HEADER: THE WEDDING CELEBRATION
             =================================================================== */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <BismillahCalligraphy className="mb-3" />
          <p className="font-serif text-xs sm:text-sm tracking-[0.3em] uppercase text-[#ADEBB3] font-semibold mb-2">
            {couple.coupleNames}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F9F5] font-light tracking-wide">
            THE WEDDING CELEBRATION
          </h1>
          <OrnamentalDivider variant="arch" className="my-3" />
          <p className="font-serif italic text-sm sm:text-base text-[#B8D9BF] max-w-md mx-auto">
            {weddingConfig.mainDateFull} • {weddingConfig.hijriDate}
          </p>
        </div>

        {/* ===================================================================
             SECTION: EVENTS & CEREMONIES
             =================================================================== */}
        <div className="space-y-12 sm:space-y-16 mb-20">
          
          {/* NIKKAH & RECEPTION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* EVENT 1: NIKKAH */}
            <section className="relative rounded-3xl bg-[#FCFDFB] text-[#14301A] border-2 border-[#ADEBB3]/70 shadow-[0_25px_60px_-15px_rgba(8,18,10,0.6)] p-6 sm:p-9 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 pointer-events-none opacity-80">
                <BotanicalFloralBorder position="top" />
              </div>

              <div className="relative z-10 pt-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF5EC] text-[#14301A] font-serif text-[11px] tracking-[0.22em] uppercase font-bold mb-3 border border-[#ADEBB3]/50">
                  SACRED CEREMONY
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl text-[#14301A] font-semibold mb-1">
                  {events[0].name}
                </h2>

                <p className="font-serif text-sm font-semibold text-[#2D5936] mb-4 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#ADEBB3]" />
                  <span>{events[0].date} • {events[0].time}</span>
                </p>

                <p className="font-serif italic text-xs sm:text-sm text-[#14301A]/80 mb-5 leading-relaxed">
                  {events[0].description}
                </p>

                <div className="p-3.5 rounded-2xl bg-[#F3FAF5] border border-[#ADEBB3]/40 text-xs font-serif mb-4">
                  <span className="text-[#14301A] font-bold block uppercase tracking-wider mb-1">Location &amp; Time:</span>
                  <p className="text-[#173C1F] font-medium">{venue.name}</p>
                  <p className="text-[#2D5936] mt-0.5">Time: 5:00 PM (19 Jumada al-Thani 1448 AH)</p>
                </div>
              </div>

              <div className="relative z-10 mt-4 pt-4 border-t border-[#ADEBB3]/30 flex items-center justify-between">
                <span className="text-[11px] font-serif tracking-wider text-[#14301A] font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#2D5936]" />
                  <span>5:00 PM</span>
                </span>
                <button
                  onClick={() => handleDownloadCalendar(events[0])}
                  className="text-[11px] font-serif uppercase tracking-wider text-[#14301A] hover:text-[#2D5936] font-bold transition-colors cursor-pointer"
                >
                  Add to Calendar →
                </button>
              </div>
            </section>

            {/* EVENT 2: RECEPTION */}
            <section className="relative rounded-3xl bg-[#FCFDFB] text-[#14301A] border-2 border-[#ADEBB3]/70 shadow-[0_25px_60px_-15px_rgba(8,18,10,0.6)] p-6 sm:p-9 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 pointer-events-none opacity-80">
                <BotanicalFloralBorder position="top" />
              </div>

              <div className="relative z-10 pt-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF5EC] text-[#14301A] font-serif text-[11px] tracking-[0.22em] uppercase font-bold mb-3 border border-[#ADEBB3]/50">
                  WEDDING BANQUET
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl text-[#14301A] font-semibold mb-1">
                  {events[1].name}
                </h2>

                <p className="font-serif text-sm font-semibold text-[#2D5936] mb-4 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#ADEBB3]" />
                  <span>{events[1].date} • {events[1].displayTime}</span>
                </p>

                <p className="font-serif italic text-xs sm:text-sm text-[#14301A]/80 mb-5 leading-relaxed">
                  {events[1].description}
                </p>

                <div className="p-3.5 rounded-2xl bg-[#F3FAF5] border border-[#ADEBB3]/40 text-xs font-serif mb-4">
                  <span className="text-[#14301A] font-bold block uppercase tracking-wider mb-1">Reception Hours:</span>
                  <p className="text-[#173C1F] font-medium">{venue.name}</p>
                  <p className="text-[#2D5936] mt-0.5">5:00 PM to 9:00 PM IST</p>
                </div>
              </div>

              <div className="relative z-10 mt-4 pt-4 border-t border-[#ADEBB3]/30 flex items-center justify-between">
                <span className="text-[11px] font-serif tracking-wider text-[#14301A] font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#2D5936]" />
                  <span>5:00 PM – 9:00 PM</span>
                </span>
                <button
                  onClick={() => handleDownloadCalendar(events[1])}
                  className="text-[11px] font-serif uppercase tracking-wider text-[#14301A] hover:text-[#2D5936] font-bold transition-colors cursor-pointer"
                >
                  Add to Calendar →
                </button>
              </div>
            </section>

          </div>

          {/* ===================================================================
               SECTION: NOTIFICATION & REMINDER FOR EVERYONE (28 NOV 2026)
               =================================================================== */}
          <section className="relative rounded-3xl bg-[#FCFDFB] text-[#14301A] border-2 border-[#ADEBB3]/70 shadow-[0_25px_60px_-15px_rgba(8,18,10,0.6)] p-6 sm:p-10 text-center overflow-hidden">
            <div className="max-w-xl mx-auto">
              
              <span className="inline-block px-4 py-1 rounded-full bg-[#EAF5EC] text-[#14301A] font-serif text-xs tracking-[0.25em] uppercase font-bold mb-2 border border-[#ADEBB3]/50">
                🔔 NOTIFICATION FOR EVERYONE
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#14301A] font-bold tracking-wide mt-1">
                Reminder on 28 November 2026
              </h2>

              <p className="font-serif italic text-xs sm:text-sm text-[#2D5936] mt-2 mb-6 max-w-md mx-auto leading-relaxed">
                Add an automatic notification to your phone for <strong>28/11/2026</strong> (one day before the wedding) so everyone is reminded in advance, or forward the reminder message to family on WhatsApp.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => setShowReminder(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#173C1F] hover:bg-[#285233] text-[#F7F9F5] font-serif tracking-[0.18em] text-xs uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-103 cursor-pointer"
                >
                  <Bell className="w-4 h-4 text-[#ADEBB3]" />
                  <span>SET 28 NOV REMINDER</span>
                </button>

                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `Assalamu Alaikum / Warm Greetings! 🌿\n\n🔔 *WEDDING REMINDER FOR 28/11/2026*\nTomorrow is the wedding celebration of *${couple.coupleShort}*!\n\n📅 Date: Sunday, 29 Nov 2026\n🕌 Nikkah: 5:00 PM\n🍽️ Reception: 5:00 PM - 9:00 PM\n📍 Venue: ${venue.name}\n🗺️ Map: ${venue.directionsUrl}\n\nPlease join us with family! ✨`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#EAF5EC] hover:bg-[#DDF2E2] border border-[#ADEBB3] text-[#14301A] font-serif tracking-[0.16em] text-xs uppercase font-semibold transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#2D5936]" />
                  <span>FORWARD ON WHATSAPP</span>
                </a>
              </div>

            </div>
          </section>

          {/* ===================================================================
               SECTION: THE VENUE
               =================================================================== */}
          <section id="venue" className="rounded-3xl bg-[#FCFDFB] text-[#14301A] border-2 border-[#ADEBB3]/70 shadow-[0_25px_70px_-15px_rgba(8,18,10,0.6)] p-6 sm:p-10 md:p-12 overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-block px-4 py-1 rounded-full bg-[#EAF5EC] text-[#14301A] font-serif text-xs tracking-[0.25em] uppercase font-semibold mb-2 border border-[#ADEBB3]/50">
                DESTINATION &amp; LOCATION
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#14301A] font-normal tracking-wide mt-1">
                {venue.name}
              </h2>
              
              <OrnamentalDivider variant="arch" className="my-3" />
              
              <p className="font-serif text-sm sm:text-base text-[#2D5936] font-medium">
                {venue.fullAddress}
              </p>
              
              <p className="font-serif italic text-xs sm:text-sm text-[#14301A]/80 mt-2 leading-relaxed">
                "{venue.description}"
              </p>
            </div>

            {/* Venue Features Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl mx-auto mb-8">
              {venue.features.map((feat) => (
                <span 
                  key={feat}
                  className="px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#ADEBB3]/40 text-xs font-serif text-[#14301A] font-medium shadow-2xs"
                >
                  ✦ {feat}
                </span>
              ))}
            </div>

            {/* Venue Location Google Maps QR Code */}
            <div className="max-w-xs mx-auto mb-8 p-5 sm:p-6 rounded-3xl bg-[#FFFFFF] border-2 border-[#ADEBB3]/70 shadow-lg text-center flex flex-col items-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF5EC] text-[#14301A] font-serif text-[11px] tracking-[0.22em] uppercase font-bold mb-3 border border-[#ADEBB3]/50">
                SCAN FOR VENUE LOCATION
              </span>
              
              <a
                href={venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-2xl bg-[#F7FAF8] border border-[#ADEBB3]/50 hover:border-[#ADEBB3] hover:shadow-md transition-all duration-300 block cursor-pointer"
                title="Scan with phone or tap to open Google Maps"
              >
                <img 
                  src={venue.qrCode} 
                  alt="Wind Valley Resort Google Maps Location QR Code" 
                  className="w-40 h-40 sm:w-44 sm:h-44 object-contain rounded-lg group-hover:scale-102 transition-transform duration-300 mx-auto"
                />
                <div className="absolute inset-0 rounded-2xl bg-[#ADEBB3]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </a>

              <p className="font-serif italic text-xs text-[#2D5936] mt-3">
                Scan with your camera or tap QR code to open Google Maps
              </p>
            </div>

            {/* Action Buttons: GET DIRECTIONS & SHARE */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-9 py-3.5 rounded-full bg-gradient-to-r from-[#285233] via-[#1D4026] to-[#285233] text-[#F7F9F5] font-serif tracking-[0.22em] text-xs sm:text-sm uppercase shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#ADEBB3]/70 group gold-shimmer-sweep cursor-pointer"
              >
                <NavIcon className="w-4 h-4 text-[#ADEBB3] group-hover:rotate-45 transition-transform" />
                <span>GET DIRECTIONS</span>
              </a>

              <button
                onClick={handleShareLink}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#14301A] font-serif tracking-[0.2em] text-xs sm:text-sm uppercase shadow-md hover:shadow-lg hover:border-[#ADEBB3] transition-all duration-300 border border-[#ADEBB3]/50 cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-[#285233]" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-[#2D5936]" />
                    <span>Share Invitation</span>
                  </>
                )}
              </button>
            </div>

          </section>

        </div>

      </div>

      {/* 28 Nov 2026 Notification Modal for Everyone */}
      <ReminderModal isOpen={showReminder} onClose={() => setShowReminder(false)} />

    </div>
  );
};

export default PageThreeDressCodeEvents;
