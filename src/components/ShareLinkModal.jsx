import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { X, Copy, Check, Share2, Send, Sparkles, User, Link as LinkIcon } from 'lucide-react';

export const ShareLinkModal = ({ isOpen, onClose }) => {
  const { couple, dates } = weddingConfig;
  const [guestName, setGuestName] = useState('');
  const [inviteType, setInviteType] = useState('all'); // 'all' | 'nikkah'
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  if (!isOpen) return null;

  // Base URL
  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${window.location.pathname}`
    : 'https://amal-and-hiba.wedding';

  // Generated Link
  const queryParams = new URLSearchParams();
  if (guestName.trim()) {
    queryParams.set('to', guestName.trim());
  }
  if (inviteType !== 'all') {
    queryParams.set('type', inviteType);
  }

  const generatedUrl = queryParams.toString() 
    ? `${baseUrl}?${queryParams.toString()}`
    : baseUrl;

  // Formatted WhatsApp invitation message
  const personalizedGreeting = guestName.trim()
    ? `Dearest ${guestName.trim()},`
    : `Warm Greetings!`;

  const whatsappMessage = `${personalizedGreeting}

Together with our families, we joyfully invite you to celebrate the wedding of

✨ *${couple.groom.firstName} & ${couple.bride.firstName}* ✨
🗓️ ${dates.displayDate}
📍 ${weddingConfig.venue.name}, Edappal

Please open your digital wedding invitation card for the full event timeline, dress code, venue location, and to RSVP:
🔗 ${generatedUrl}

With love & blessings,
${weddingConfig.invitationMessage.familySignoff}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#ffffff] rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col p-6 sm:p-7 shadow-2xl border border-[#c5a059]/40 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#f0ebe1]">
          <div className="flex items-center space-x-2">
            <Share2 className="w-5 h-5 text-[#c5a059]" />
            <h3 className="font-serif text-xl text-[#56040b] font-normal">
              Create &amp; Send Guest Invitation Link
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-4 space-y-4 overflow-y-auto">
          <p className="text-xs font-serif text-[#6b585a]">
            Type a guest's name below to generate a personalized wedding invitation link. When they open it, their name will be displayed on the card and auto-filled in the RSVP!
          </p>

          {/* 1. Type Guest Name */}
          <div>
            <label className="block font-serif text-xs uppercase tracking-wider text-[#56040b] font-semibold mb-1.5">
              1. Type Guest or Family Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#c5a059] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. Uncle Rashid &amp; Family, Dr. Ayesha Khan"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#c5a059]/40 bg-[#fbf9f5] focus:bg-[#ffffff] focus:border-[#56040b] focus:outline-none text-xs sm:text-sm text-[#3b2b2b]"
                autoFocus
              />
            </div>
          </div>

          {/* 2. Invitation Type */}
          <div>
            <label className="block font-serif text-xs uppercase tracking-wider text-[#56040b] font-semibold mb-1.5">
              2. Select Invitation Details
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setInviteType('all')}
                className={`py-2 px-3 rounded-xl border text-xs font-serif transition-all ${
                  inviteType === 'all'
                    ? 'border-[#56040b] bg-[#56040b] text-[#fdfcf9] font-medium shadow-xs'
                    : 'border-[#c5a059]/40 bg-[#fbf9f5] text-[#5a4246]'
                }`}
              >
                All 3 Days (Full Itinerary)
              </button>
              <button
                type="button"
                onClick={() => setInviteType('nikkah')}
                className={`py-2 px-3 rounded-xl border text-xs font-serif transition-all ${
                  inviteType === 'nikkah'
                    ? 'border-[#56040b] bg-[#56040b] text-[#fdfcf9] font-medium shadow-xs'
                    : 'border-[#c5a059]/40 bg-[#fbf9f5] text-[#5a4246]'
                }`}
              >
                Nikkah &amp; Reception Only
              </button>
            </div>
          </div>

          {/* 3. Generated URL Display */}
          <div>
            <label className="block font-serif text-xs uppercase tracking-wider text-[#56040b] font-semibold mb-1.5">
              3. Personalized Invitation Link
            </label>
            <div className="flex items-center space-x-2 p-2 rounded-xl bg-[#fbf9f5] border border-[#c5a059]/40">
              <LinkIcon className="w-4 h-4 text-[#c5a059] shrink-0 ml-1" />
              <input
                type="text"
                readOnly
                value={generatedUrl}
                className="w-full bg-transparent text-xs text-[#56040b] font-mono outline-none truncate"
              />
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-[#56040b] text-[#fdfcf9] text-xs font-serif flex items-center space-x-1 shrink-0 hover:bg-[#6e1f2d] transition-colors"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* 4. Action Buttons */}
          <div className="pt-2 space-y-2">
            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#ffffff] font-serif text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send Directly via WhatsApp</span>
            </button>

            <button
              onClick={handleCopyMessage}
              className="w-full py-2.5 rounded-full border border-[#c5a059] text-[#56040b] hover:bg-[#fbf9f5] font-serif text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
            >
              {copiedMessage ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-[#c5a059]" />}
              <span>{copiedMessage ? 'WhatsApp Text Copied!' : 'Copy Complete WhatsApp Text'}</span>
            </button>
          </div>

          {/* Preview Box */}
          <div className="mt-3 p-3 rounded-xl bg-[#fdfcf9] border border-[#f0ebe1] text-[11px] font-serif text-[#6b585a]">
            <p className="font-semibold text-[#56040b] mb-1">Preview of What Guest Sees:</p>
            <p className="italic">
              When <span className="font-bold text-[#56040b]">{guestName.trim() || 'Guest'}</span> opens this link, the opening envelope and wedding card will personally say:
            </p>
            <p className="font-script text-base text-[#56040b] mt-1">
              "Special Invitation for {guestName.trim() || 'You & Your Family'}"
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
