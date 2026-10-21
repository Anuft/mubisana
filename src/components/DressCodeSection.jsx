import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { OrnamentalDivider } from './FloralDecorations';
import { Sparkles, Info, Heart, Check } from 'lucide-react';

export const DressCodeSection = () => {
  const { dressCodeDetails } = weddingConfig;
  const [selectedEventId, setSelectedEventId] = useState('nikkah');
  const [activeColor, setActiveColor] = useState(dressCodeDetails.palette[0]);

  const activeEvent = dressCodeDetails.eventsAttire.find(e => e.id === selectedEventId) || dressCodeDetails.eventsAttire[0];

  return (
    <section id="dress-code" className="py-10 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-serif text-[11px] uppercase tracking-[0.3em] text-[#6e1f2d] font-bold block mb-1">
            ATTIRE &amp; PALETTE INSPIRATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#4e0309] font-normal">
            DRESS CODE DETAILS
          </h2>
          <OrnamentalDivider variant="flower" className="my-2.5" />
          <p className="font-serif italic text-xs sm:text-sm text-[#5a4246] max-w-lg mx-auto font-light">
            {dressCodeDetails.subtitle}
          </p>
        </div>

        {/* Main Dress Code Luxury Card */}
        <div className="rounded-3xl bg-[#ffffff] border border-[#c5a059]/45 shadow-xl p-6 sm:p-9 relative overflow-hidden">
          {/* Inner hairline */}
          <div className="absolute inset-2.5 border border-[#c5a059]/25 rounded-2xl pointer-events-none" />

          <div className="relative z-10">
            {/* 1. Imperial Color Palette Swatches Bar */}
            <div className="mb-8 pb-6 border-b border-[#f0ebe1] text-center">
              <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#4e0309] font-semibold block mb-4">
                The Celebration Color Palette
              </span>

              <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
                {dressCodeDetails.palette.map((color) => {
                  const isSelected = activeColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setActiveColor(color)}
                      className="flex flex-col items-center group transition-transform focus:outline-none"
                    >
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-md transition-all duration-300 flex items-center justify-center relative ${
                          isSelected ? 'scale-115 ring-2 ring-[#4e0309] ring-offset-2' : 'group-hover:scale-108'
                        }`}
                        style={{
                          backgroundColor: color.hex,
                          border: `2px solid ${color.border || '#c5a059'}`,
                        }}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white/80 shadow-xs" />}
                      </div>

                      <span className={`font-serif text-xs mt-2 font-medium ${
                        isSelected ? 'text-[#4e0309] font-bold' : 'text-[#6b585a]'
                      }`}>
                        {color.name}
                      </span>
                      <span className="text-[10px] font-serif text-[#8f4a5a] italic">
                        {color.mood}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Color Details Banner */}
              <div className="mt-5 inline-block px-5 py-2 rounded-full bg-[#faf8f5] border border-[#c5a059]/40 text-xs font-serif text-[#4e0309] shadow-xs">
                <span className="font-bold text-[#6e1f2d]">{activeColor.name}</span>: {activeColor.fabric}
              </div>
            </div>

            {/* 2. Event-by-Event Attire Switcher */}
            <div>
              <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
                {dressCodeDetails.eventsAttire.map((evt) => {
                  const isActive = evt.id === selectedEventId;
                  return (
                    <button
                      key={evt.id}
                      onClick={() => setSelectedEventId(evt.id)}
                      className={`px-5 py-2 rounded-full font-serif text-xs uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? 'bg-[#4e0309] text-[#fdfcf9] shadow-md font-semibold border border-[#c5a059]/40'
                          : 'bg-[#f2ece1]/60 text-[#5a4246] hover:bg-[#f2ece1] border border-transparent'
                      }`}
                    >
                      {evt.eventName}
                    </button>
                  );
                })}
              </div>

              {/* Active Event Attire Details */}
              <div className="rounded-2xl bg-[#faf8f5] border border-[#c5a059]/30 p-5 sm:p-7 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-[#f0ebe1] mb-4 gap-2">
                  <div>
                    <h3 className="font-serif text-2xl text-[#4e0309] font-normal">
                      {activeEvent.eventName}
                    </h3>
                    <span className="text-xs font-serif text-[#c5a059] font-semibold tracking-wider">
                      {activeEvent.day}
                    </span>
                  </div>
                  <div className="inline-flex items-center space-x-1 px-3.5 py-1 rounded-full bg-[#ffffff] border border-[#c5a059]/40 text-xs font-serif text-[#8f4a5a] self-start sm:self-auto shadow-2xs">
                    <Sparkles className="w-3 h-3 text-[#c5a059]" />
                    <span>{activeEvent.theme}</span>
                  </div>
                </div>

                {/* Ladies & Gentlemen Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-[#524446]">
                  <div className="p-4 rounded-xl bg-[#ffffff] border border-[#f0ebe1] shadow-2xs">
                    <div className="flex items-center space-x-1.5 font-serif text-sm text-[#4e0309] font-medium mb-1.5">
                      <span>👗</span>
                      <span>For Ladies</span>
                    </div>
                    <p className="leading-relaxed font-light">
                      {activeEvent.ladies}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#ffffff] border border-[#f0ebe1] shadow-2xs">
                    <div className="flex items-center space-x-1.5 font-serif text-sm text-[#4e0309] font-medium mb-1.5">
                      <span>👔</span>
                      <span>For Gentlemen</span>
                    </div>
                    <p className="leading-relaxed font-light">
                      {activeEvent.gentlemen}
                    </p>
                  </div>
                </div>

                {/* Helpful Tip */}
                <div className="mt-4 flex items-start space-x-2 text-[11px] font-serif text-[#8f4a5a] bg-[#ffffff] p-3 rounded-lg border border-[#f0ebe1]">
                  <Info className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                  <span><strong className="text-[#4e0309]">Styling Tip:</strong> {activeEvent.tips}</span>
                </div>
              </div>
            </div>

            {/* 3. General Modesty & Hospitality Note */}
            <div className="mt-6 pt-4 border-t border-[#f0ebe1] text-center text-xs font-serif text-[#6b585a]">
              <p className="italic">
                "{dressCodeDetails.modestyNote}"
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
