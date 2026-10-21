import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { OrnamentalDivider } from './FloralDecorations';
import { Calendar, Clock, MapPin, Compass, Copy, Check, Download, Sparkles } from 'lucide-react';

export const EventTimeline = () => {
  const { events, venue, dressCodePalette, couple } = weddingConfig;
  const [copied, setCopied] = useState(false);
  const [downloadedEventId, setDownloadedEventId] = useState(null);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venue.name}, ${venue.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadIcs = (event) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Hiba and Ronak Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${event.id}-hiba-ronak-2026@wedding.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${event.calendarDateStart}
DTEND:${event.calendarDateEnd}
SUMMARY:${event.title} - ${couple.groom.firstName} & ${couple.bride.firstName}
DESCRIPTION:${event.description}
LOCATION:${event.venueName}, ${event.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}-invitation.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedEventId(event.id);
    setTimeout(() => setDownloadedEventId(null), 2000);
  };

  // Calendar display mapping matching Canva
  const canvaTimelineItems = [
    {
      roman: "I",
      month: "August",
      dateNumber: "10",
      dayLabel: "Day 1",
      title: "Mehndi",
      time: "6:00PM TO 11:00PM",
      description: "An evening of intricate henna artistry, fragrant marigolds, soulful music, and festive joy.",
      event: events[0],
    },
    {
      roman: "II",
      month: "August",
      dateNumber: "11",
      dayLabel: "Day 2",
      title: "Sangeet",
      time: "6:00PM TO 11:00PM",
      description: "A celebration of music, family dance performances, heartfelt tributes, and a celebratory feast.",
      event: events[1],
    },
    {
      roman: "III",
      month: "August",
      dateNumber: "12",
      dayLabel: "Day 3",
      title: "Nikkah",
      time: "11:30AM TO 4:00PM",
      description: "The sacred solemnization ceremony followed by the grand wedding reception banquet and blessings.",
      event: events[2],
      isMain: true,
    },
  ];

  return (
    <section id="events" className="py-10 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* ================= 1. THE VENUE (From Canva Reference) ================= */}
        <div className="rounded-3xl bg-[#ffffff] border border-[#c5a059]/45 shadow-xl p-6 sm:p-9 text-center relative overflow-hidden">
          {/* Subtle Inner Double Bevel */}
          <div className="absolute inset-2.5 border border-[#c5a059]/25 rounded-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <span className="font-serif text-[11px] uppercase tracking-[0.3em] text-[#6e1f2d] font-bold block mb-1">
              THE VENUE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4e0309] font-normal my-2">
              {venue.name}
            </h2>
            <OrnamentalDivider variant="flower" className="my-3" />
            
            <p className="font-serif italic text-sm sm:text-base text-[#5a4246] max-w-xl mx-auto leading-relaxed mb-4 font-light">
              "Join us at this beautiful venue as we celebrate a day filled with love, blessings, and unforgettable memories."
            </p>

            <p className="font-serif text-xs text-[#786668] tracking-wide mb-6">
              📍 {venue.address}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full bg-[#4e0309] text-[#fdfcf9] font-serif text-xs uppercase tracking-wider hover:bg-[#6e1f2d] shadow-md hover:shadow-lg transition-all"
              >
                <Compass className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full border border-[#c5a059] text-[#4e0309] font-serif text-xs uppercase tracking-wider hover:bg-[#faf8f5] transition-colors shadow-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-[#c5a059]" />}
                <span>{copied ? 'Address Copied!' : 'Copy Venue Address'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= 2. EVENT TIMELINE (From Canva Reference) ================= */}
        <div className="rounded-3xl bg-[#ffffff] border border-[#c5a059]/45 shadow-xl p-6 sm:p-9 relative overflow-hidden">
          {/* Inner hairline */}
          <div className="absolute inset-2.5 border border-[#c5a059]/25 rounded-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-7">
              <span className="font-serif text-[11px] uppercase tracking-[0.3em] text-[#6e1f2d] font-bold block mb-1">
                CELEBRATION ITINERARY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#4e0309] font-normal">
                EVENT TIMELINE
              </h2>
              <OrnamentalDivider variant="flower" className="my-2" />
            </div>

            {/* 3 Event Cards Matching Canva Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {canvaTimelineItems.map((item) => (
                <div
                  key={item.title}
                  className={`flex flex-col justify-between rounded-2xl p-5 border text-center transition-all duration-300 relative ${
                    item.isMain
                      ? 'border-[#c5a059] bg-[#faf8f5] ring-1 ring-[#c5a059]/50 shadow-md'
                      : 'border-[#f0ebe1] bg-[#ffffff] hover:border-[#c5a059]/40 hover:shadow-sm'
                  }`}
                >
                  {/* Main Event Crown Badge */}
                  {item.isMain && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#4e0309] text-[#fdfcf9] font-serif text-[9px] uppercase tracking-widest font-semibold border border-[#c5a059]/60 shadow-xs">
                      ★ Solemnization
                    </div>
                  )}

                  <div>
                    {/* Roman & Day Label */}
                    <div className="flex items-center justify-between mb-2 px-1">
                      <span className="font-serif text-[11px] text-[#c5a059] font-semibold">
                        {item.roman}
                      </span>
                      <span className="font-serif text-[11px] uppercase tracking-widest text-[#8f4a5a] font-semibold">
                        {item.dayLabel}
                      </span>
                    </div>

                    {/* Calendar Block (Canva Style) */}
                    <div className="my-2 py-2 px-3 rounded-xl bg-[#ffffff] border border-[#c5a059]/35 inline-block w-28 shadow-xs">
                      <span className="font-serif text-[10px] uppercase tracking-widest text-[#8f4a5a] font-semibold block">
                        {item.month}
                      </span>
                      <span className="font-serif text-4xl sm:text-5xl text-[#4e0309] font-light leading-none block my-1">
                        {item.dateNumber}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl text-[#4e0309] font-normal mt-2 mb-1">
                      {item.title}
                    </h3>

                    {/* Exact Time (Canva Style) */}
                    <div className="inline-flex items-center space-x-1 font-serif text-xs text-[#6e1f2d] font-semibold bg-[#f2ece1]/50 px-3 py-1 rounded-full my-2 border border-[#c5a059]/30">
                      <Clock className="w-3 h-3 text-[#c5a059]" />
                      <span>{item.time}</span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-xs text-[#524446] font-light leading-relaxed my-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Add to Calendar Button */}
                  <div className="pt-3 border-t border-[#f0ebe1] mt-2">
                    <button
                      onClick={() => handleDownloadIcs(item.event)}
                      className="inline-flex items-center space-x-1 text-[11px] font-serif tracking-wider text-[#8f4a5a] hover:text-[#4e0309] transition-colors"
                    >
                      {downloadedEventId === item.event.id ? (
                        <>
                          <Check className="w-3 h-3 text-green-600" />
                          <span className="text-green-600">Saved to Calendar!</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3 h-3 text-[#c5a059]" />
                          <span>Add to Calendar (.ics)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
