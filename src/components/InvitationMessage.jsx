import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { OrnamentalDivider, FloralCorner } from './FloralDecorations';
import { Heart } from 'lucide-react';

export const InvitationMessage = () => {
  const { invitationMessage, couple } = weddingConfig;

  return (
    <section className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-3xl mx-auto text-center relative">
        
        {/* Luxury Card Frame for Letter */}
        <div className="relative rounded-3xl bg-[#ffffff] border border-[#c5a059]/40 shadow-xl p-8 sm:p-14 overflow-hidden">
          
          {/* Subtle Inner Double Border */}
          <div className="absolute inset-3 border border-[#c5a059]/25 rounded-2xl pointer-events-none" />

          {/* Corner Florals */}
          <FloralCorner className="absolute top-2 left-2 opacity-40" size={75} />
          <FloralCorner className="absolute top-2 right-2 opacity-40" size={75} flipX={true} />
          <FloralCorner className="absolute bottom-2 left-2 opacity-40" size={75} flipY={true} />
          <FloralCorner className="absolute bottom-2 right-2 opacity-40" size={75} flipX={true} flipY={true} />

          {/* Bismillah in Arabic Calligraphy */}
          <div className="mb-4">
            <p className="font-serif text-2xl sm:text-3xl text-[#56040b] leading-relaxed tracking-wider">
              {invitationMessage.bismillah}
            </p>
            <p className="font-serif italic text-xs text-[#8f4a5a] tracking-wide mt-1">
              "{invitationMessage.bismillahTranslation}"
            </p>
          </div>

          <OrnamentalDivider variant="flower" className="my-5" />

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl text-[#56040b] font-normal mb-3">
            {invitationMessage.title}
          </h2>

          {/* Lead */}
          <p className="font-serif italic text-base sm:text-lg text-[#5a4246] max-w-lg mx-auto mb-6 leading-relaxed">
            {invitationMessage.lead}
          </p>

          {/* Paragraphs */}
          <div className="space-y-4 font-serif text-sm sm:text-base text-[#4d3d3f] leading-loose max-w-xl mx-auto font-light">
            {invitationMessage.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="w-16 h-[1px] bg-[#c5a059]/50 mx-auto my-8" />

          {/* Signoff */}
          <div className="text-center">
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-[#8f4a5a] mb-1 font-medium">
              {invitationMessage.closing}
            </p>
            <p className="font-script text-3xl sm:text-4xl text-[#56040b] font-normal my-1">
              {invitationMessage.familySignoff}
            </p>
            <p className="font-serif text-xs uppercase tracking-[0.16em] text-[#c5a059] mt-2">
              Hiba &amp; Ronak's Families
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
