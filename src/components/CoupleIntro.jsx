import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { OrnamentalDivider } from './FloralDecorations';
import { Heart } from 'lucide-react';

export const CoupleIntro = () => {
  const { couple } = weddingConfig;
  const { groom, bride } = couple;

  return (
    <section id="couple" className="py-20 px-4 sm:px-6 relative bg-gradient-to-b from-transparent via-[#fdfcf9] to-transparent">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="font-serif text-xs uppercase tracking-[0.25em] text-[#8f4a5a] mb-2 font-medium">
            Hearts Aligned
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#56040b] font-normal">
            The Bride <span className="font-script text-[#c5a059] text-4xl sm:text-5xl">&amp;</span> The Groom
          </h2>
          <OrnamentalDivider variant="flower" className="my-4" />
          <p className="font-serif italic text-sm sm:text-base text-[#6b585a] max-w-md mx-auto">
            "When two souls are destined to meet, Allah gently aligns their steps across time and prayer."
          </p>
        </div>

        {/* Editorial Couple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Groom Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#ffffff] border border-[#c5a059]/25 shadow-sm hover:shadow-md transition-all duration-300 relative group">
            {/* Corner ornament */}
            <div className="absolute top-4 left-4 text-xs text-[#c5a059] opacity-40">✦</div>
            <div className="absolute bottom-4 right-4 text-xs text-[#c5a059] opacity-40">✦</div>

            {/* Groom Photo with rounded oval crop */}
            <div className="relative mb-6">
              <div className="w-44 h-52 sm:w-48 sm:h-56 rounded-full overflow-hidden border-2 border-[#c5a059]/60 shadow-md p-1 bg-[#fdfcf9]">
                <img
                  src={groom.photo}
                  alt={groom.fullName}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-2 right-4 px-3 py-0.5 rounded-full bg-[#56040b] text-[#fdfcf9] font-serif text-[11px] tracking-wider uppercase">
                {groom.title}
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#56040b] font-normal">
              {groom.fullName}
            </h3>

            <p className="font-serif text-xs uppercase tracking-[0.16em] text-[#8f4a5a] my-2">
              {groom.parents}
            </p>

            <div className="w-12 h-[1px] bg-[#c5a059]/50 my-3" />

            <p className="text-sm font-sans text-[#524446] leading-relaxed max-w-sm font-light">
              {groom.bio}
            </p>

            <div className="mt-5 text-[#c5a059] text-xs font-serif italic tracking-wide">
              "In her smile, I found my lifelong prayer answered."
            </div>
          </div>

          {/* Bride Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#ffffff] border border-[#c5a059]/25 shadow-sm hover:shadow-md transition-all duration-300 relative group">
            {/* Corner ornament */}
            <div className="absolute top-4 right-4 text-xs text-[#c5a059] opacity-40">✦</div>
            <div className="absolute bottom-4 left-4 text-xs text-[#c5a059] opacity-40">✦</div>

            {/* Bride Photo with rounded oval crop */}
            <div className="relative mb-6">
              <div className="w-44 h-52 sm:w-48 sm:h-56 rounded-full overflow-hidden border-2 border-[#c5a059]/60 shadow-md p-1 bg-[#fdfcf9]">
                <img
                  src={bride.photo}
                  alt={bride.fullName}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-2 right-4 px-3 py-0.5 rounded-full bg-[#56040b] text-[#fdfcf9] font-serif text-[11px] tracking-wider uppercase">
                {bride.title}
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#56040b] font-normal">
              {bride.fullName}
            </h3>

            <p className="font-serif text-xs uppercase tracking-[0.16em] text-[#8f4a5a] my-2">
              {bride.parents}
            </p>

            <div className="w-12 h-[1px] bg-[#c5a059]/50 my-3" />

            <p className="text-sm font-sans text-[#524446] leading-relaxed max-w-sm font-light">
              {bride.bio}
            </p>

            <div className="mt-5 text-[#c5a059] text-xs font-serif italic tracking-wide">
              "Beside him, every step feels like coming home."
            </div>
          </div>

        </div>

        {/* Center Interlocking Monogram Ribbon */}
        <div className="mt-12 text-center flex items-center justify-center space-x-3 text-[#56040b]">
          <span className="h-[1px] w-16 bg-[#c5a059]/40" />
          <div className="flex items-center space-x-1.5 px-4 py-1 rounded-full bg-[#fdfcf9] border border-[#c5a059]/30 text-xs font-serif tracking-widest uppercase text-[#8f4a5a]">
            <span>Hiba</span>
            <Heart className="w-3 h-3 fill-current text-[#c5a059]" />
            <span>Ronak</span>
          </div>
          <span className="h-[1px] w-16 bg-[#c5a059]/40" />
        </div>

      </div>
    </section>
  );
};
