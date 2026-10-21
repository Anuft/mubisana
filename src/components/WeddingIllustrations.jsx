import React from 'react';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Sacred Bismillah Calligraphy in Metallic Champagne Gold & Mint Accents
 */
export const BismillahCalligraphy = ({ className = "" }) => {
  return (
    <div className={`text-center my-3 pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg 
        viewBox="0 0 400 80" 
        className="w-48 sm:w-60 max-w-full mx-auto drop-shadow-[0_1px_3px_rgba(173,235,179,0.35)]"
      >
        <defs>
          <linearGradient id="bismillahGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9E825D" />
            <stop offset="30%" stopColor="#C5A880" />
            <stop offset="50%" stopColor="#FFF4DF" />
            <stop offset="70%" stopColor="#C5A880" />
            <stop offset="100%" stopColor="#7D6442" />
          </linearGradient>
        </defs>
        <path
          d="M 50 45 Q 70 25, 95 45 T 140 45 Q 160 20, 185 45 T 230 45 Q 250 20, 275 45 T 320 45 Q 340 30, 360 45 M 80 32 L 80 52 M 120 30 L 120 50 M 170 28 L 170 52 M 215 30 L 215 50 M 260 28 L 260 52 M 305 30 L 305 50"
          stroke="url(#bismillahGold)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="95" cy="20" r="2.8" fill="url(#bismillahGold)" />
        <circle cx="140" cy="22" r="2.8" fill="url(#bismillahGold)" />
        <circle cx="185" cy="18" r="3" fill="url(#bismillahGold)" />
        <circle cx="230" cy="22" r="2.8" fill="url(#bismillahGold)" />
        <circle cx="275" cy="18" r="3" fill="url(#bismillahGold)" />
        <circle cx="320" cy="22" r="2.8" fill="url(#bismillahGold)" />
        <circle cx="110" cy="58" r="2.5" fill="url(#bismillahGold)" />
        <circle cx="200" cy="60" r="2.5" fill="url(#bismillahGold)" />
        <circle cx="290" cy="58" r="2.5" fill="url(#bismillahGold)" />
      </svg>
      <span className="font-serif tracking-[0.24em] uppercase text-[10px] text-[#2D5936] font-semibold block mt-1">
        IN THE NAME OF ALLAH THE MOST GRACIOUS, THE MOST MERCIFUL
      </span>
    </div>
  );
};

/**
 * Botanical Mint Green & Herbal Pine Wax Seal (#24492E) with Champagne Gold Monogram
 */
export const GoldWaxSeal = ({ 
  monogram = "M & S", 
  size = 96, 
  onClick, 
  interactive = false, 
  className = "" 
}) => {
  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick && onClick();
        }
      }}
      className={`relative inline-flex items-center justify-center transition-all duration-300 ${
        interactive ? 'cursor-pointer hover:scale-108 active:scale-95 group focus:outline-hidden focus:ring-2 focus:ring-[#ADEBB3]' : ''
      } ${className}`}
      style={{ width: size, height: size }}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={`Wax seal with initials ${monogram}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-2xl transition-transform duration-300 group-hover:rotate-3"
      >
        <defs>
          {/* Mint & Herbal Pine Radial Gradient */}
          <radialGradient id="mintWaxGrad" cx="35%" cy="30%" r="72%">
            <stop offset="0%" stopColor="#4D7554" />
            <stop offset="35%" stopColor="#335E3B" />
            <stop offset="70%" stopColor="#24492E" />
            <stop offset="90%" stopColor="#173820" />
            <stop offset="100%" stopColor="#0F2414" />
          </radialGradient>

          {/* Champagne Gold & Mint Rim Highlight */}
          <linearGradient id="mintWaxGoldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4DF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#ADEBB3" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#C5A880" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7D6442" stopOpacity="0.85" />
          </linearGradient>

          {/* Realistic Shadow */}
          <filter id="mintWaxShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="7" stdDeviation="5.5" floodColor="#0A180E" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Organic irregular molten wax edge */}
        <path
          d="M 50,4
             C 68,2 81,14 89,26
             C 98,38 98,54 93,68
             C 88,82 76,93 61,97
             C 45,101 29,97 17,88
             C 5,79 1,64 3,49
             C 5,34 15,20 28,11
             C 38,4 37,6 50,4 Z"
          fill="url(#mintWaxGrad)"
          filter="url(#mintWaxShadow)"
        />

        {/* Outer groove ring */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="#0F2414"
          strokeWidth="2.5"
          opacity="0.85"
        />

        {/* Inner beaded dotted champagne-gold rim */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="url(#mintWaxGoldRim)"
          strokeWidth="1.6"
          strokeDasharray="4 2.5"
          opacity="0.9"
        />

        {/* Inner depressed stamp bowl */}
        <circle
          cx="50"
          cy="50"
          r="31"
          fill="#0F2414"
          opacity="0.4"
        />
      </svg>

      {/* Embossed Monogram Content with Gold & Mint Sheen */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none text-center">
        <span 
          className="font-serif text-[#F7F9F5] tracking-wider font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
          style={{ fontSize: size * 0.25, letterSpacing: '0.06em' }}
        >
          {monogram}
        </span>
        <div 
          className="w-4 h-0.5 bg-[#ADEBB3] rounded-full my-0.5 shadow-xs" 
          aria-hidden="true" 
        />
        <span 
          className="text-[#ADEBB3] text-[9px] uppercase tracking-[0.25em] font-serif font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
        >
          2026
        </span>
      </div>
    </div>
  );
};

/**
 * Botanical Corner Flourish in Mint Green & Champagne Gold
 */
export const BotanicalFlourish = ({ className = "", flipX = false, flipY = false, size = 90 }) => {
  const transform = `${flipX ? 'scaleX(-1)' : ''} ${flipY ? 'scaleY(-1)' : ''}`.trim();
  return (
    <div 
      className={`pointer-events-none select-none ${className}`} 
      style={{ transform: transform || undefined, width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-70">
        <path d="M 10 10 Q 40 15, 60 45 T 90 90" stroke="#C5A880" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 10 10 Q 25 45, 50 65 T 90 90" stroke="#ADEBB3" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
        <path d="M 22 16 C 30 12, 36 20, 32 26 C 26 28, 18 24, 22 16 Z" fill="#ADEBB3" opacity="0.85" />
        <path d="M 42 30 C 50 24, 58 32, 54 38 C 46 42, 38 36, 42 30 Z" fill="#4D7554" opacity="0.75" />
        <path d="M 64 52 C 72 46, 80 54, 76 60 C 68 64, 60 58, 64 52 Z" fill="#ADEBB3" opacity="0.85" />
        <circle cx="38" cy="18" r="2.5" fill="#C5A880" />
        <circle cx="58" cy="38" r="3" fill="#C5A880" />
        <circle cx="80" cy="68" r="2.5" fill="#C5A880" />
      </svg>
    </div>
  );
};

/**
 * Delicate Ornamental Divider with Mint & Gold Accents
 */
export const OrnamentalDivider = ({ className = "", variant = "flower" }) => {
  return (
    <div className={`flex items-center justify-center space-x-3 my-4 pointer-events-none select-none ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#C5A880]/60 to-[#C5A880]" />
      
      {variant === "crescent" ? (
        <div className="flex items-center space-x-1.5 text-[#C5A880]">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
          </svg>
          <span className="text-xs text-[#ADEBB3]">✦</span>
        </div>
      ) : variant === "arch" ? (
        <div className="flex items-center space-x-2 text-[#C5A880]">
          <span className="text-xs text-[#ADEBB3]">✦</span>
          <div className="w-3 h-3.5 border border-[#C5A880] rounded-t-full shadow-xs" />
          <span className="text-xs text-[#ADEBB3]">✦</span>
        </div>
      ) : (
        <div className="flex items-center space-x-1.5 text-[#C5A880]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ADEBB3]" />
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#C5A880]">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ADEBB3]" />
        </div>
      )}

      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-[#C5A880]/60 to-[#C5A880]" />
    </div>
  );
};

/**
 * Watercolor White Floral & Mint Green (#ADEBB3) Eucalyptus Border
 */
export const BotanicalFloralBorder = ({ position = "top", className = "" }) => {
  return (
    <div 
      className={`w-full pointer-events-none select-none overflow-hidden ${className}`} 
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 800 120" 
        className={`w-full h-auto max-h-24 sm:max-h-28 object-contain ${position === 'bottom' ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mintLeafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ADEBB3" />
            <stop offset="100%" stopColor="#4D7554" />
          </linearGradient>
          <linearGradient id="mintLeafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8F2CD" />
            <stop offset="100%" stopColor="#6E9A75" />
          </linearGradient>
          <radialGradient id="mintWhiteFlowerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F9FAF7" />
            <stop offset="85%" stopColor="#E3F7E7" />
            <stop offset="100%" stopColor="#C5ECCB" />
          </radialGradient>
        </defs>

        {/* Left Eucalyptus Leaves Cluster */}
        <g opacity="0.95">
          <path d="M 0,0 Q 60,25 110,65 C 80,75 50,55 0,20 Z" fill="url(#mintLeafGrad1)" />
          <path d="M 40,0 Q 90,35 150,55 C 130,70 90,60 40,15 Z" fill="url(#mintLeafGrad2)" />
          <path d="M 120,10 Q 160,40 210,50 C 180,65 140,55 110,25 Z" fill="url(#mintLeafGrad1)" opacity="0.9" />
          <path d="M 80,45 Q 120,80 160,85 C 130,95 90,80 70,55 Z" fill="url(#mintLeafGrad2)" opacity="0.8" />
        </g>

        {/* Center-Left Magnolia Petals */}
        <g opacity="0.98">
          <path d="M 140,0 C 170,30 200,45 220,15 C 200,-5 170,-10 140,0 Z" fill="url(#mintWhiteFlowerGrad)" />
          <path d="M 180,10 C 210,40 240,40 250,10 C 230,-10 190,0 180,10 Z" fill="url(#mintWhiteFlowerGrad)" />
        </g>

        {/* Center Garland Swag & Leaves */}
        <g opacity="0.9">
          <path d="M 280,15 Q 340,40 400,20 Q 460,40 520,15" stroke="#ADEBB3" strokeWidth="2.5" fill="none" />
          <path d="M 330,10 C 350,30 370,30 380,10 C 360,-5 340,0 330,10 Z" fill="url(#mintWhiteFlowerGrad)" />
          <path d="M 420,10 C 440,30 460,30 470,10 C 450,-5 430,0 420,10 Z" fill="url(#mintWhiteFlowerGrad)" />
          <circle cx="400" cy="22" r="3" fill="#C5A880" />
          <circle cx="370" cy="26" r="2.5" fill="#ADEBB3" />
          <circle cx="430" cy="26" r="2.5" fill="#ADEBB3" />
        </g>

        {/* Center-Right Magnolia Petals */}
        <g opacity="0.98">
          <path d="M 550,10 C 560,40 590,40 620,10 C 610,0 570,-10 550,10 Z" fill="url(#mintWhiteFlowerGrad)" />
          <path d="M 580,0 C 600,45 630,30 660,0 C 630,-10 600,-5 580,0 Z" fill="url(#mintWhiteFlowerGrad)" />
        </g>

        {/* Right Eucalyptus Leaves Cluster */}
        <g opacity="0.95">
          <path d="M 800,0 Q 740,25 690,65 C 720,75 750,55 800,20 Z" fill="url(#mintLeafGrad1)" />
          <path d="M 760,0 Q 710,35 650,55 C 670,70 710,60 760,15 Z" fill="url(#mintLeafGrad2)" />
          <path d="M 680,10 Q 640,40 590,50 C 620,65 660,55 690,25 Z" fill="url(#mintLeafGrad1)" opacity="0.9" />
          <path d="M 720,45 Q 680,80 640,85 C 670,95 710,80 730,55 Z" fill="url(#mintLeafGrad2)" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Elegant Rounded Arch Swatch Component (Color Names only, no hex codes)
 */
export const ArchSwatch = ({ name, hex, textLight = false }) => {
  return (
    <div 
      className="flex flex-col items-center select-none rounded-2xl p-1.5"
      aria-label={`Color swatch ${name} (${hex})`}
    >
      {/* Arch Shaped Color Block */}
      <div 
        className="w-16 sm:w-20 md:w-24 h-24 sm:h-28 md:h-32 rounded-t-[40px] sm:rounded-t-[48px] rounded-b-xl border border-[#ADEBB3]/60 shadow-md relative overflow-hidden transition-shadow duration-300 hover:shadow-lg"
        style={{ backgroundColor: hex }}
      >
        {/* Subtle inner gold bevel rim */}
        <div className="absolute inset-1 rounded-t-[36px] sm:rounded-t-[44px] rounded-b-lg border border-white/40 pointer-events-none" />
        
        {/* Silk fabric sheen simulation */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/25 pointer-events-none" />
      </div>

      {/* Color Name Label beneath */}
      <span className="font-serif text-xs sm:text-sm font-semibold text-[#14301A] text-center mt-2.5 leading-tight">
        {name}
      </span>
    </div>
  );
};

export default {
  BismillahCalligraphy,
  GoldWaxSeal,
  BotanicalFlourish,
  OrnamentalDivider,
  BotanicalFloralBorder,
  ArchSwatch,
};
