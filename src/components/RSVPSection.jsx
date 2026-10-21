import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/weddingConfig';
import { OrnamentalDivider, RoyalCrest } from './FloralDecorations';
import { Heart, Send, CheckCircle2, User, Phone, Users, ShieldCheck, Download, Trash2, Sparkles } from 'lucide-react';

export const RSVPSection = ({ guestName = '' }) => {
  const { rsvp, couple, invitationMessage } = weddingConfig;

  const [formData, setFormData] = useState({
    name: guestName || '',
    phone: '',
    attending: 'accept',
    guestsCount: 1,
    message: '',
  });

  useEffect(() => {
    if (guestName && !formData.name) {
      setFormData(prev => ({ ...prev, name: guestName }));
    }
  }, [guestName]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedRSVPs, setSavedRSVPs] = useState([]);
  const [showAdminModal, setShowAdminModal] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('amal_hiba_wedding_rsvps');
      if (stored) setSavedRSVPs(JSON.parse(stored));
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const submission = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toLocaleDateString(),
    };

    setTimeout(() => {
      const updated = [submission, ...savedRSVPs];
      setSavedRSVPs(updated);
      try {
        localStorage.setItem('amal_hiba_wedding_rsvps', JSON.stringify(updated));
      } catch (err) {}

      setIsSubmitting(false);
      setIsSubmitted(true);

      if (formData.attending === 'accept') {
        confetti({
          particleCount: 65,
          spread: 80,
          origin: { y: 0.65 },
          colors: ['#c5a059', '#f4e8cb', '#8f4a5a', '#4e0309', '#d4af37'],
        });
      }
    }, 500);
  };

  const handleExportCSV = () => {
    if (savedRSVPs.length === 0) return;
    const headers = ["Name", "Phone", "Status", "Guests Count", "Message", "Date"];
    const rows = savedRSVPs.map(r => [
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.phone}"`,
      `"${r.attending === 'accept' ? 'Attending' : 'Declined'}"`,
      r.guestsCount,
      `"${(r.message || '').replace(/"/g, '""')}"`,
      `"${r.submittedAt}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `wedding_rsvps_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="rsvp" className="py-12 px-4 sm:px-6 relative">
      <div className="max-w-2xl mx-auto">
        
        {/* Luxury Letterpress Card Frame */}
        <div className="rounded-3xl bg-[#ffffff] border border-[#c5a059]/45 shadow-xl p-6 sm:p-9 text-center relative overflow-hidden">
          {/* Inner hairline */}
          <div className="absolute inset-2.5 border border-[#c5a059]/25 rounded-2xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top Family Blessing */}
            <span className="font-serif text-[11px] uppercase tracking-[0.3em] text-[#6e1f2d] font-bold block mb-1">
              WITH LOVE &amp; BLESSINGS
            </span>
            <p className="font-serif italic text-sm sm:text-base text-[#5a4246] max-w-md mx-auto mb-2 font-light">
              "Your presence and prayers will make this blessed day truly unforgettable."
            </p>
            <p className="font-script text-3xl sm:text-4xl text-[#4e0309] mb-4">
              — {invitationMessage.familySignoff}
            </p>

            <OrnamentalDivider variant="flower" className="my-3" />

            <h2 className="font-serif text-3xl sm:text-4xl text-[#4e0309] font-normal mb-1">
              KINDLY RSVP
            </h2>
            <p className="text-xs font-serif text-[#6b585a] mb-6">
              Please reply by {rsvp.defaultDeadline}
            </p>

            {isSubmitted ? (
              <div className="py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 text-green-700 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-[#4e0309]">
                  {formData.attending === 'accept' ? 'Joyfully Received!' : 'Thank You'}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-[#524446] max-w-sm mx-auto leading-relaxed">
                  {formData.attending === 'accept'
                    ? `Thank you, ${formData.name}. We look forward with joy to celebrating our special day with you!`
                    : `Thank you for letting us know, ${formData.name}. We hold your prayers warmly in our hearts.`}
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', attending: 'accept', guestsCount: 1, message: '' });
                  }}
                  className="mt-4 px-5 py-2 rounded-full border border-[#c5a059] text-xs font-serif uppercase tracking-widest text-[#4e0309] hover:bg-[#4e0309] hover:text-[#ffffff] transition-all"
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {/* Accept / Decline Toggle */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'accept' })}
                    className={`py-3 px-3 rounded-xl border text-xs font-serif flex items-center justify-center space-x-1.5 transition-all ${
                      formData.attending === 'accept'
                        ? 'border-[#4e0309] bg-[#4e0309] text-[#fdfcf9] shadow-md font-semibold'
                        : 'border-[#c5a059]/40 bg-[#faf8f5] text-[#5a4246] hover:bg-[#f2ece1]'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${formData.attending === 'accept' ? 'fill-current text-[#c5a059]' : 'text-[#8f4a5a]'}`} />
                    <span>Joyfully Accept</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'decline' })}
                    className={`py-3 px-3 rounded-xl border text-xs font-serif flex items-center justify-center space-x-1.5 transition-all ${
                      formData.attending === 'decline'
                        ? 'border-[#4e0309] bg-[#4e0309] text-[#fdfcf9] shadow-md font-semibold'
                        : 'border-[#c5a059]/40 bg-[#faf8f5] text-[#5a4246] hover:bg-[#f2ece1]'
                    }`}
                  >
                    <span>Regretfully Decline</span>
                  </button>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#c5a059] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#c5a059]/40 bg-[#faf8f5] text-xs text-[#2e2123] focus:outline-none focus:border-[#4e0309] focus:bg-[#ffffff] transition-colors"
                      />
                    </div>
                    {errors.name && <p className="text-red-600 text-[10px] mt-0.5 font-serif">{errors.name}</p>}
                  </div>

                  <div>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#c5a059] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#c5a059]/40 bg-[#faf8f5] text-xs text-[#2e2123] focus:outline-none focus:border-[#4e0309] focus:bg-[#ffffff] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {formData.attending === 'accept' && (
                  <div>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#c5a059] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.guestsCount}
                        onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#c5a059]/40 bg-[#faf8f5] text-xs text-[#2e2123] focus:outline-none focus:border-[#4e0309] focus:bg-[#ffffff] transition-colors appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6].map(n => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest Attending' : 'Guests Attending'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <input
                    type="text"
                    placeholder="Blessings or prayer for Hiba & Ronak (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#c5a059]/40 bg-[#faf8f5] text-xs text-[#2e2123] focus:outline-none focus:border-[#4e0309] focus:bg-[#ffffff] transition-colors"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#4e0309] via-[#6e1f2d] to-[#4e0309] text-[#fdfcf9] font-serif text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center space-x-2 border border-[#c5a059]/40"
                >
                  <Send className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{isSubmitting ? "Sending Your RSVP..." : "Submit RSVP Response"}</span>
                </button>
              </form>
            )}

            {/* Admin link */}
            <div className="mt-5 pt-3 border-t border-[#f0ebe1] text-center">
              <button
                onClick={() => setShowAdminModal(true)}
                className="text-[11px] font-serif text-[#8f4a5a] hover:text-[#4e0309] underline inline-flex items-center space-x-1"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Organizer Dashboard ({savedRSVPs.length} responses recorded)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Organizer */}
        {showAdminModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4 animate-in fade-in"
            onClick={() => setShowAdminModal(false)}
          >
            <div
              className="bg-[#ffffff] rounded-3xl max-w-lg w-full max-h-[80vh] flex flex-col p-6 shadow-2xl border border-[#c5a059]/45 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3.5 border-b border-[#f0ebe1]">
                <h3 className="font-serif text-lg text-[#4e0309] font-medium">
                  Recorded RSVPs ({savedRSVPs.length})
                </h3>
                <div className="flex items-center space-x-2">
                  {savedRSVPs.length > 0 && (
                    <button
                      onClick={handleExportCSV}
                      className="px-3 py-1 rounded-full bg-[#4e0309] text-[#ffffff] text-xs font-serif flex items-center space-x-1 hover:bg-[#6e1f2d]"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export CSV</span>
                    </button>
                  )}
                  <button onClick={() => setShowAdminModal(false)} className="text-xs text-gray-500 hover:text-black">✕</button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto py-3 space-y-2.5">
                {savedRSVPs.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-6 font-serif">No responses recorded yet.</p>
                ) : (
                  savedRSVPs.map(r => (
                    <div key={r.id} className="p-3 rounded-xl border border-[#f0ebe1] bg-[#faf8f5] text-xs">
                      <div className="flex justify-between font-serif">
                        <span className="font-bold text-[#4e0309]">{r.name}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${r.attending === 'accept' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {r.attending === 'accept' ? `Attending (${r.guestsCount})` : 'Declined'}
                        </span>
                      </div>
                      {r.phone && <p className="text-gray-500 text-[11px] mt-0.5">Phone: {r.phone}</p>}
                      {r.message && <p className="text-[#8f4a5a] italic text-[11px] mt-1 bg-white p-2 rounded border border-gray-100">"{r.message}"</p>}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
