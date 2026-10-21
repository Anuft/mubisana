import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { X, Bell, Calendar, Send, Check, Sparkles, Smartphone, Globe, ExternalLink } from 'lucide-react';

/**
 * Reminder Modal for Mubi & Sana Wedding
 * Gives guests ("everyone") multiple ways to get notified on 28 November 2026:
 * 1. Apple / Phone Calendar (.ics with 28 Nov VALARM notification)
 * 2. Google Calendar (with preconfigured reminder)
 * 3. WhatsApp Share/Forward to Everyone in Family Groups
 * 4. Web Browser Push Notification
 */
export const ReminderModal = ({ isOpen, onClose }) => {
  const { couple, venue } = weddingConfig;
  const [copied, setCopied] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      return Notification.permission;
    }
    return 'unsupported';
  });

  if (!isOpen) return null;

  // 1. Download .ics with 28 Nov 2026 Alarm (1 day before)
  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      `PRODID:-//${couple.coupleNames} Wedding//EN`,
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@mubi-sana.wedding`,
      `SUMMARY:🔔 ${couple.coupleShort} Wedding Celebration`,
      `DESCRIPTION:Reminder: Join us tomorrow (29 Nov 2026) for the wedding of ${couple.coupleNames}!\\nVenue: ${venue.name}\\nTime: Nikkah 5:00 PM, Reception 5:00 PM - 9:00 PM\\nMaps Location: ${venue.directionsUrl}`,
      `LOCATION:${venue.fullAddress}`,
      'DTSTART:20261129T113000Z',
      'DTEND:20261129T153000Z',
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
    link.setAttribute('download', 'Mubi-Sana-Wedding-Reminder-28Nov2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 2. Direct Google Calendar URL with 28 Nov reminder info
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    '🔔 ' + couple.coupleShort + ' Wedding Celebration'
  )}&dates=20261129T113000Z/20261129T153000Z&details=${encodeURIComponent(
    'Wedding of ' + couple.coupleNames + '!\n' +
    '🔔 Reminder for 28/11/2026: Tomorrow is the wedding celebration!\n' +
    'Nikkah: 5:00 PM IST\n' +
    'Reception: 5:00 PM – 9:00 PM IST\n' +
    'Venue: ' + venue.name + '\n' +
    'Google Maps Location: ' + venue.directionsUrl
  )}&location=${encodeURIComponent(venue.fullAddress)}`;

  // 3. Preformatted WhatsApp Reminder for 28/11/2026 to broadcast to everyone
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5180';
  const whatsappReminderText = encodeURIComponent(
    `Assalamu Alaikum / Warm Greetings! 🌿\n\n` +
    `🔔 *WEDDING REMINDER FOR 28/11/2026*\n` +
    `Tomorrow is the blessed wedding celebration of *${couple.coupleShort}*!\n\n` +
    `📅 *Date*: Sunday, 29 November 2026\n` +
    `🕌 *Nikkah Ceremony*: 5:00 PM\n` +
    `🍽️ *Reception Banquet*: 5:00 PM – 9:00 PM\n` +
    `📍 *Venue*: ${venue.name}\n` +
    `🗺️ *Google Maps*: ${venue.directionsUrl}\n` +
    `💌 *Digital Invitation*: ${siteUrl}\n\n` +
    `Please join us with your family and remember the couple in your prayers! ✨`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?text=${whatsappReminderText}`;

  // 4. Browser Notification permission
  const handleRequestNotification = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        setNotificationStatus(permission);
        if (permission === 'granted') {
          new Notification(`🔔 Reminder Set for 28/11/2026!`, {
            body: `You are set to receive a reminder on 28 November 2026 for ${couple.coupleShort}'s wedding on 29 November 2026.`,
            icon: '/favicon.svg',
          });
        }
      } catch {
        // Fallback
      }
    }
  };

  const handleCopyWhatsApp = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(decodeURIComponent(whatsappReminderText));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reminder-modal-title"
    >
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#FCFDFB] text-[#14301A] border-2 border-[#ADEBB3] p-6 sm:p-8 shadow-2xl overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#2D5936] hover:text-[#14301A] hover:bg-[#EAF5EC] transition-colors cursor-pointer border border-[#ADEBB3]/40"
          aria-label="Close reminder modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EAF5EC] border border-[#ADEBB3] text-[#2D5936] mb-3 shadow-xs">
            <Bell className="w-6 h-6 text-[#2D5936] animate-bounce-subtle" />
          </div>
          
          <span className="inline-block px-3 py-0.5 rounded-full bg-[#EAF5EC] text-[#14301A] font-serif text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold border border-[#ADEBB3]/60 mb-2 block w-fit mx-auto">
            NOTIFICATION FOR EVERYONE
          </span>

          <h2 id="reminder-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#14301A]">
            Reminder on 28/11/2026
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-[#2D5936] mt-1 max-w-sm mx-auto">
            Get an automatic alert 1 day before the wedding so you and your family never miss the celebration!
          </p>
        </div>

        {/* Action Options */}
        <div className="space-y-3 sm:space-y-3.5">
          
          {/* Option 1: Apple / Phone Calendar (.ics) with 28 Nov Alert */}
          <button
            onClick={handleDownloadICS}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F4F8F5] hover:bg-[#EAF5EC] border border-[#ADEBB3]/60 hover:border-[#ADEBB3] transition-all duration-200 group text-left cursor-pointer shadow-xs"
          >
            <div className="flex items-center space-x-3.5">
              <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#ADEBB3]/50 text-[#14301A] group-hover:scale-105 transition-transform">
                <Smartphone className="w-5 h-5 text-[#2D5936]" />
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-[#14301A]">
                  Apple &amp; Phone Calendar
                </p>
                <p className="text-[11px] text-[#2D5936] font-medium">
                  Includes 28 Nov 2026 alarm notification
                </p>
              </div>
            </div>
            <span className="text-xs font-serif font-bold text-[#2D5936] group-hover:translate-x-1 transition-transform">
              Add Alert →
            </span>
          </button>

          {/* Option 2: Google Calendar */}
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F4F8F5] hover:bg-[#EAF5EC] border border-[#ADEBB3]/60 hover:border-[#ADEBB3] transition-all duration-200 group text-left cursor-pointer shadow-xs"
          >
            <div className="flex items-center space-x-3.5">
              <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#ADEBB3]/50 text-[#14301A] group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5 text-[#2D5936]" />
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-[#14301A]">
                  Google Calendar
                </p>
                <p className="text-[11px] text-[#2D5936] font-medium">
                  Syncs with Gmail &amp; Android devices
                </p>
              </div>
            </div>
            <span className="text-xs font-serif font-bold text-[#2D5936] group-hover:translate-x-1 transition-transform flex items-center gap-1">
              <span>Open</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Option 3: WhatsApp Broadcast to Everyone */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F4F8F5] border border-[#ADEBB3]/60 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2.5">
                <Send className="w-4 h-4 text-[#2D5936]" />
                <span className="font-serif text-sm font-bold text-[#14301A]">
                  Send 28 Nov Reminder to Everyone
                </span>
              </div>
            </div>
            <p className="text-[11px] text-[#2D5936] font-medium mb-3">
              Forward the official reminder message with venue map to family &amp; friends.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-full bg-[#173C1F] hover:bg-[#285233] text-[#F7F9F5] font-serif text-xs font-semibold uppercase tracking-wider text-center transition-colors shadow-xs"
              >
                Forward on WhatsApp
              </a>
              <button
                onClick={handleCopyWhatsApp}
                className="py-2 px-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#EAF5EC] border border-[#ADEBB3]/60 text-[#14301A] font-serif text-xs font-semibold transition-colors cursor-pointer"
              >
                {copied ? "Copied!" : "Copy Text"}
              </button>
            </div>
          </div>

          {/* Option 4: Browser Notification Permission */}
          {notificationStatus !== 'unsupported' && (
            <button
              onClick={handleRequestNotification}
              className="w-full py-2.5 px-4 rounded-2xl bg-[#EAF5EC] hover:bg-[#DDF2E2] border border-[#ADEBB3] text-center text-xs font-serif font-semibold text-[#14301A] transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Bell className="w-3.5 h-3.5 text-[#2D5936]" />
              <span>
                {notificationStatus === 'granted' 
                  ? '✓ Browser Notifications Enabled for 28 Nov' 
                  : 'Enable Web Notification on this device'}
              </span>
            </button>
          )}

        </div>

        {/* Footnote */}
        <p className="text-[10px] font-serif text-center text-[#2D5936] mt-5">
          Wedding Date: 29 November 2026 • Wind Valley Resort, Cherkala
        </p>

      </div>
    </div>
  );
};

export default ReminderModal;
