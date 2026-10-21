import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { OrnamentalDivider } from './FloralDecorations';
import { Sparkles, Calendar } from 'lucide-react';

export const OurStory = () => {
  const { ourStory, couple } = weddingConfig;

  return (
    <section id="story" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-serif text-xs uppercase tracking-[0.25em] text-[#8f4a5a] mb-2 font-medium">
            Chapters of Love
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#56040b] font-normal">
            Our Story
          </h2>
          <OrnamentalDivider variant="flower" className="my-4" />
          <p className="font-serif italic text-sm sm:text-base text-[#6b585a] max-w-lg mx-auto">
            From an unexpected first conversation to a lifelong promise. Here is how our journey blossomed into forever.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="relative">
          {/* Central subtle timeline stem */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#c5a059]/40 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {ourStory.map((chapter, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={chapter.title}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-14 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node icon */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#c5a059] bg-[#fdfcf9] items-center justify-center text-[#56040b] shadow-sm z-10">
                    <span className="font-serif text-xs text-[#c5a059] font-bold">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Photo Column */}
                  <div className="w-full md:w-1/2 group">
                    <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-md p-1.5 bg-[#ffffff] transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#f0ebe1]">
                        <img
                          src={chapter.image}
                          alt={chapter.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-2 text-center">
                        <span className="text-[11px] font-serif uppercase tracking-widest text-[#8f4a5a]">
                          {chapter.year} • {chapter.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`w-full md:w-1/2 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="inline-flex items-center space-x-1 text-xs font-serif tracking-[0.2em] uppercase text-[#c5a059] font-medium mb-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{chapter.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#56040b] font-normal mb-1">
                      {chapter.title}
                    </h3>

                    <p className="font-serif italic text-sm text-[#8f4a5a] mb-3">
                      "{chapter.subtitle}"
                    </p>

                    <p className="font-sans text-sm sm:text-base text-[#524446] leading-relaxed font-light">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote Banner */}
        <div className="mt-16 text-center p-6 rounded-2xl bg-[#ffffff]/70 border border-[#c5a059]/20 shadow-sm max-w-2xl mx-auto">
          <Sparkles className="w-5 h-5 text-[#c5a059] mx-auto mb-2" />
          <p className="font-serif italic text-base sm:text-lg text-[#56040b]">
            "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
          </p>
          <span className="text-xs font-serif uppercase tracking-widest text-[#8f4a5a] block mt-2">
            Surah Ar-Rum [30:21]
          </span>
        </div>

      </div>
    </section>
  );
};
