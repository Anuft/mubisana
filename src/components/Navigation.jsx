import React from 'react';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Universal Header Bar for Fathimath Tana & Muhammad Mubasheer Wedding Website.
 * Clean monogram brand mark with couple names and wedding date (29 Nov 2026).
 * Styled with Sage Green (#1C2B23 / #273C31), champagne-gold (#C5A880),
 * and ivory (#F7F9F5) typography.
 */
export const Navigation = ({ activePage = 'page-1', onNavigate }) => {
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('page-1');
    }
    if (window.location.hash !== '#page-1') {
      window.history.pushState(null, '', '#page-1');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#122A16]/95 backdrop-blur-md border-b border-[#ADEBB3]/25 shadow-md transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Monogram Brand Mark */}
        <button
          onClick={handleHomeClick}
          className="flex items-center space-x-2.5 sm:space-x-3 text-left group focus:outline-hidden focus:ring-1 focus:ring-[#ADEBB3] rounded-lg px-2 py-1 cursor-pointer"
          aria-label={`${weddingConfig.couple.coupleNames} Wedding Home`}
        >
          <span className="font-script text-2xl sm:text-3xl text-[#F7F9F5] group-hover:text-[#ADEBB3] transition-colors leading-none">
            {weddingConfig.couple.coupleShort}
          </span>
          <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.25em] text-[#ADEBB3] border-l border-[#ADEBB3]/40 pl-2.5 sm:pl-3">
            29 Nov 2026
          </span>
        </button>

        {/* Quick Page Nav Tabs */}
        <nav className="flex items-center space-x-1.5 sm:space-x-2">
          {weddingConfig.navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate && onNavigate(item.id)}
              className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-serif uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activePage === item.id
                  ? 'bg-[#285233] text-[#ADEBB3] border border-[#ADEBB3]/60 shadow-xs font-semibold'
                  : 'text-[#B8D9BF] hover:text-[#ADEBB3] hover:bg-[#1B3B21]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default Navigation;
