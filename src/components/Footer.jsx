import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { OrnamentalDivider } from './WeddingIllustrations';

/**
 * Footer Component for Fathimath Tana & Muhammad Mubasheer Wedding Website.
 * Styled with Herbal Pine (#122A16), Mint Green (#ADEBB3),
 * and ivory (#F7F9F5) typography.
 */
export const Footer = ({ activePage = 'page-1', onNavigate }) => {
  const pages = weddingConfig.navigation;

  return (
    <footer className="relative bg-[#122A16] border-t border-[#ADEBB3]/30 py-10 sm:py-14 px-4 text-center text-[#F7F9F5]">
      <div className="max-w-xl mx-auto">
        
        {/* Couple Calligraphy Initials */}
        <p className="font-script text-3xl sm:text-4xl text-[#F7F9F5] mb-1">
          {weddingConfig.couple.coupleNames}
        </p>

        {/* Thin Mint & Gold Ornamental Divider */}
        <OrnamentalDivider variant="arch" className="my-3" />

        {/* Navigation Links */}
        <nav className="mt-6 pt-5 border-t border-[#ADEBB3]/20 flex items-center justify-center space-x-3 sm:space-x-5" aria-label="Footer Page Links">
          {pages.map((p, idx) => (
            <React.Fragment key={p.id}>
              <button
                onClick={() => onNavigate && onNavigate(p.id)}
                className={`font-serif text-xs sm:text-sm tracking-wider uppercase transition-colors cursor-pointer ${
                  activePage === p.id 
                    ? 'text-[#ADEBB3] font-bold border-b-2 border-[#ADEBB3]' 
                    : 'text-[#B8D9BF] hover:text-[#ADEBB3]'
                }`}
              >
                {p.label}
              </button>
              {idx < pages.length - 1 && (
                <span className="text-[#ADEBB3]/40 text-xs" aria-hidden="true">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Date & Location Note */}
        <p className="font-serif text-[11px] text-[#B8D9BF]/80 tracking-wider mt-5">
          29 November 2026 • Wind Valley Resort, Cherkala
        </p>

        {/* Footer Copyright & Curated By Credits */}
        <div className="mt-8 pt-5 border-t border-[#ADEBB3]/20 flex flex-col items-center justify-center space-y-2 text-center">
          <p className="font-serif text-[11px] text-[#B8D9BF]/70 tracking-widest uppercase">
            {weddingConfig.footer?.copyright || "© 2026 Mubi & Sana. All Rights Reserved."}
          </p>
          <p className="font-serif text-xs text-[#B8D9BF] tracking-wide">
            Curated by{' '}
            <a
              href="https://www.renovagate.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ADEBB3] font-semibold underline decoration-[#ADEBB3]/40 underline-offset-4 hover:decoration-[#ADEBB3] hover:text-[#E3F7E7] transition-all duration-200"
            >
              Renovagate – Renovate Digitally
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
