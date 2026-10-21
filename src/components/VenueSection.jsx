import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { OrnamentalDivider } from './FloralDecorations';
import { MapPin, Compass, Copy, Check, Car, Navigation } from 'lucide-react';

export const VenueSection = () => {
  const { venue, dates } = weddingConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venue.name}, ${venue.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="py-20 px-4 sm:px-6 relative bg-gradient-to-b from-[#fdfcf9] via-[#f7f3ec] to-[#fdfcf9]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-serif text-xs uppercase tracking-[0.25em] text-[#8f4a5a] mb-2 font-medium">
            Location &amp; Destination
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#56040b] font-normal">
            The Venue
          </h2>
          <OrnamentalDivider variant="flower" className="my-4" />
          <p className="font-serif italic text-sm sm:text-base text-[#6b585a] max-w-md mx-auto">
            "Join us at this beautiful venue as we celebrate a day filled with love, blessings, and unforgettable memories."
          </p>
        </div>

        {/* Venue Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-[#ffffff] border border-[#c5a059]/30 shadow-md">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#fbf9f5] border border-[#c5a059]/30 text-xs font-serif uppercase tracking-widest text-[#8f4a5a] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Solemnization &amp; Banquet</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#56040b] font-normal mb-2">
                {venue.name}
              </h3>

              <p className="font-serif text-sm text-[#524446] leading-relaxed mb-4">
                {venue.address}
              </p>

              <div className="space-y-3 pt-3 border-t border-[#f0ebe1] text-xs font-serif text-[#6b585a]">
                <div className="flex items-start space-x-2">
                  <Navigation className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>{venue.landmark}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Car className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>{venue.parkingInfo}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 space-y-3 pt-4 border-t border-[#f0ebe1]">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full bg-[#56040b] text-[#fdfcf9] font-serif text-xs uppercase tracking-[0.16em] hover:bg-[#6e1f2d] shadow transition-all duration-300 group"
              >
                <Compass className="w-4 h-4 text-[#c5a059] group-hover:rotate-45 transition-transform" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={handleCopyAddress}
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded-full border border-[#c5a059]/50 text-[#56040b] font-serif text-xs uppercase tracking-wider hover:bg-[#fbf9f5] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">Address Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#c5a059]" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Map Embed (Right) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-md bg-[#ffffff] min-h-[340px] flex flex-col">
            <div className="p-3 bg-[#fbf9f5] border-b border-[#f0ebe1] flex items-center justify-between text-xs font-serif text-[#8f4a5a]">
              <span>📍 Vannery Palace Convention Centre, Edappal</span>
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#56040b] underline hover:text-[#c5a059]"
              >
                Larger Map
              </a>
            </div>
            
            <div className="relative flex-1 w-full min-h-[300px]">
              <iframe
                title="Vannery Palace Location Map"
                src="https://maps.google.com/maps?q=Vannery%20Palace%20Convention%20Centre,%20Edappal,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
