import React from 'react';

/**
 * Botanical corner vines with delicate French gold filigree.
 */
export const FloralCorner = ({ className = "", flipX = false, flipY = false, size = 110 }) => {
  const transform = `${flipX ? 'scaleX(-1)' : ''} ${flipY ? 'scaleY(-1)' : ''}`.trim();

  return (
    <div 
      className={`pointer-events-none select-none ${className}`} 
      style={{ transform: transform || undefined }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-80 drop-shadow-xs"
      >
        {/* Main stem curve */}
        <path
          d="M12 12 Q 55 18, 85 55 T 155 155"
          stroke="#8ab2a7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 12 Q 28 65, 65 95 T 155 155"
          stroke="#c5a059"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />

        {/* Delicate Corner Filigree Swirls */}
        <path
          d="M18 18 C 30 14, 42 22, 38 32 C 30 35, 20 28, 22 18 Z"
          fill="#8ab2a7"
          opacity="0.85"
        />
        <path
          d="M48 38 C 60 30, 72 38, 66 48 C 55 52, 45 44, 48 38 Z"
          fill="#575323"
          opacity="0.65"
        />
        <path
          d="M78 60 C 92 52, 102 64, 96 74 C 84 78, 72 68, 78 60 Z"
          fill="#8ab2a7"
          opacity="0.8"
        />
        <path
          d="M108 90 C 122 82, 132 94, 126 104 C 114 108, 102 98, 108 90 Z"
          fill="#8ab2a7"
          opacity="0.75"
        />

        {/* Rose buds and velvet blossoms */}
        <circle cx="36" cy="46" r="6" fill="#8f4a5a" opacity="0.9" />
        <circle cx="37" cy="45" r="4" fill="#4e0309" opacity="0.95" />
        <circle cx="38" cy="44" r="2" fill="#c5a059" />

        <circle cx="95" cy="115" r="8" fill="#8f4a5a" opacity="0.9" />
        <circle cx="96" cy="114" r="5" fill="#4e0309" opacity="0.95" />
        <circle cx="97" cy="113" r="2.5" fill="#c5a059" />

        <circle cx="138" cy="142" r="5.5" fill="#8f4a5a" opacity="0.85" />

        {/* Golden 24k leaf flecks / berries */}
        <circle cx="58" cy="22" r="3.5" fill="#c5a059" />
        <circle cx="64" cy="26" r="2.5" fill="#f4e8cb" />
        <circle cx="114" cy="72" r="4" fill="#c5a059" />
        <circle cx="120" cy="78" r="2.5" fill="#f4e8cb" />
      </svg>
    </div>
  );
};

/**
 * Royal Wedding Crest Monogram
 */
export const RoyalCrest = ({ initials = "A ♡ H", size = 88, className = "" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
        <defs>
          <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9b742a" />
            <stop offset="35%" stopColor="#d8b874" />
            <stop offset="50%" stopColor="#fff1ce" />
            <stop offset="75%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#886323" />
          </linearGradient>
        </defs>

        {/* Outer Laurel Leaves Wreath */}
        <path
          d="M 60 10 C 35 10 16 30 16 60 C 16 85 35 106 60 108 C 85 106 104 85 104 60 C 104 30 85 10 60 10 Z"
          fill="none"
          stroke="url(#crestGold)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Inner Delicate Ring */}
        <circle
          cx="60"
          cy="60"
          r="42"
          fill="none"
          stroke="url(#crestGold)"
          strokeWidth="1"
        />
        <circle
          cx="60"
          cy="60"
          r="38"
          fill="#faf8f5"
          stroke="#4e0309"
          strokeWidth="0.75"
        />

        {/* Small Tiara / Coronet on Top */}
        <path
          d="M 52 24 L 54 28 L 60 21 L 66 28 L 68 24 L 60 26 Z"
          fill="url(#crestGold)"
        />
        <circle cx="52" cy="22" r="1.2" fill="#4e0309" />
        <circle cx="60" cy="19" r="1.5" fill="#4e0309" />
        <circle cx="68" cy="22" r="1.2" fill="#4e0309" />
      </svg>

      {/* Monogram Center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none text-center">
        <span className="font-serif font-semibold text-[#4e0309] tracking-wider text-sm sm:text-base">
          {initials}
        </span>
      </div>
    </div>
  );
};

/**
 * Ultra-Realistic Bespoke 3D Wax Seal
 */
export const WaxSeal = ({ monogram = "H & R", size = 88, onClick, interactive = false, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center transition-all duration-300 ${
        interactive ? 'cursor-pointer hover:scale-108 active:scale-95 group' : ''
      } ${className}`}
      style={{ width: size, height: size }}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label="Royal wax seal"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-xl transition-transform duration-300"
      >
        <defs>
          <radialGradient id="waxGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#962939" />
            <stop offset="35%" stopColor="#6e1f2d" />
            <stop offset="70%" stopColor="#480309" />
            <stop offset="90%" stopColor="#300105" />
            <stop offset="100%" stopColor="#1e0003" />
          </radialGradient>
          <linearGradient id="goldDust" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3db" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="80%" stopColor="#886323" />
          </linearGradient>
          <filter id="waxShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="4.5" floodColor="#250003" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Irregular organic wax perimeter */}
        <path
          d="M 50,4
             C 66,3 79,12 88,24
             C 97,36 99,52 94,66
             C 89,80 78,92 63,97
             C 47,101 32,97 19,89
             C 7,81 2,67 3,52
             C 4,37 13,23 26,13
             C 38,3 35,5 50,4 Z"
          fill="url(#waxGrad)"
          filter="url(#waxShadow)"
        />

        {/* Beveled outer depression */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="#320105"
          strokeWidth="3"
          opacity="0.8"
        />

        {/* Embossed gold foil dusted rim */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="url(#goldDust)"
          strokeWidth="1.8"
          strokeDasharray="6 2"
          opacity="0.85"
        />
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="#7f2231"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>

      {/* Embossed Monogram Content with Gold Foil Sheen */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none text-center">
        <span 
          className="font-serif text-[#fdf6ec] tracking-widest font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
          style={{ fontSize: size * 0.22 }}
        >
          {monogram}
        </span>
        <span 
          className="text-[#e8cf94] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] -mt-1 font-sans font-light"
          style={{ fontSize: size * 0.13 }}
        >
          ♡
        </span>
      </div>
    </div>
  );
};

/**
 * Luxury ornamental divider with centered diamond gem & gold leaf accents
 */
export const OrnamentalDivider = ({ className = "", variant = "flower" }) => {
  return (
    <div className={`flex items-center justify-center my-4 space-x-3 text-[#c5a059] ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent via-[#c5a059] to-[#c5a059] opacity-70" />
      
      {variant === "flower" ? (
        <div className="flex items-center space-x-1.5 text-[#c5a059]">
          <span className="text-[10px] opacity-75">✦</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#8f4a5a]">
            <circle cx="12" cy="12" r="2.5" fill="#c5a059" />
            <ellipse cx="12" cy="6" rx="2" ry="4" fill="#8f4a5a" opacity="0.9" />
            <ellipse cx="12" cy="18" rx="2" ry="4" fill="#8f4a5a" opacity="0.9" />
            <ellipse cx="6" cy="12" rx="4" ry="2" fill="#8f4a5a" opacity="0.9" />
            <ellipse cx="18" cy="12" rx="4" ry="2" fill="#8f4a5a" opacity="0.9" />
          </svg>
          <span className="text-[10px] opacity-75">✦</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rotate-45 border border-[#c5a059] bg-[#faf8f5]" />
          <div className="w-2.5 h-2.5 rotate-45 bg-[#4e0309] border border-[#c5a059]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#c5a059] bg-[#faf8f5]" />
        </div>
      )}

      <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent via-[#c5a059] to-[#c5a059] opacity-70" />
    </div>
  );
};
