import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Reusable real-time Countdown Timer for Fathimath Tana & Muhammad Mubasheer Wedding.
 * - Target: 29 November 2026 at 5:00:00 PM IST ("2026-11-29T17:00:00+05:30").
 * - Target timestamp computed via Date and subtracted with Date.now().
 * - Uses React useState and useEffect with 1000ms interval.
 * - Displays 4 live counters: DAYS | HOURS | MINUTES | SECONDS.
 * - Styled with Mint Green (#ADEBB3) & Deep Pine (#14301A), champagne gold,
 *   and crisp botanical card styling.
 */
export const CountdownTimer = ({ 
  targetTimestampISO = weddingConfig.targetDateISO, 
  compact = false,
  className = "" 
}) => {
  const calculateRemaining = () => {
    const target = new Date(targetTimestampISO).getTime();
    const now = Date.now();
    const diff = target - now;

    const ONE_DAY_MS = 24 * 60 * 60 * 1000;

    if (diff <= 0) {
      const isPastWeddingDay = Math.abs(diff) > ONE_DAY_MS;
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isZero: true,
        isPast: isPastWeddingDay,
      };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
      isZero: false,
      isPast: false,
    };
  };

  const [time, setTime] = useState(calculateRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(calculateRemaining());
    }, 1000);

    setTime(calculateRemaining());
    return () => clearInterval(intervalId);
  }, [targetTimestampISO]);

  if (time.isZero) {
    return (
      <div 
        className={`w-full max-w-lg mx-auto p-5 sm:p-7 rounded-2xl bg-[#FCFDFB] border-2 border-[#ADEBB3] text-center shadow-lg ${className}`}
        role="timer"
        aria-live="polite"
      >
        <div className="w-9 h-9 mx-auto mb-2 text-[#2D5936]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full animate-bounce">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#14301A] uppercase">
          {time.isPast ? "THANK YOU FOR CELEBRATING WITH US!" : "THE WEDDING DAY IS HERE!"}
        </h3>
        <p className="font-serif italic text-xs sm:text-sm text-[#2D5936] mt-1">
          {time.isPast 
            ? `With deepest gratitude and love from ${weddingConfig.couple.coupleNames} & Families.`
            : `Celebrating the sacred union of ${weddingConfig.couple.coupleNames} on 29 November 2026.`}
        </p>
      </div>
    );
  }

  const formatNum = (num) => String(num).padStart(2, '0');

  const units = [
    { label: "DAYS", value: String(time.days) },
    { label: "HOURS", value: formatNum(time.hours) },
    { label: "MINUTES", value: formatNum(time.minutes) },
    { label: "SECONDS", value: formatNum(time.seconds) },
  ];

  return (
    <div 
      className={`countdown-container w-full ${compact ? 'max-w-xs sm:max-w-sm' : 'max-w-md sm:max-w-lg'} mx-auto ${className}`}
      role="timer"
      aria-label="Wedding Countdown Timer"
    >
      <div className="flex items-center justify-center gap-1.5 sm:gap-3">
        {units.map((unit, index) => (
          <React.Fragment key={unit.label}>
            {/* Mint Countdown Box */}
            <div className={`relative flex flex-col items-center justify-center ${compact ? 'w-14 sm:w-16 py-2.5 px-1' : 'w-16 sm:w-20 md:w-24 py-3.5 px-1.5'} rounded-2xl bg-[#FFFFFF] border border-[#ADEBB3]/60 shadow-xs hover:border-[#ADEBB3] hover:shadow-md transition-all duration-300 group`}>
              
              {/* Subtle mint corner fleck */}
              <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#ADEBB3] group-hover:scale-125 transition-transform" />

              <span className={`font-serif ${compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl md:text-4xl'} font-bold text-[#14301A] leading-none tracking-tight`}>
                {unit.value}
              </span>
              <span className={`font-serif ${compact ? 'text-[9px]' : 'text-[10px] sm:text-[11px]'} tracking-[0.2em] uppercase text-[#2D5936] font-semibold mt-1`}>
                {unit.label}
              </span>
            </div>

            {/* Mint Separator Dots */}
            {index < units.length - 1 && (
              <div className="flex flex-col justify-center items-center space-y-1 sm:space-y-1.5 px-0.5" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ADEBB3] shadow-xs" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#ADEBB3] shadow-xs" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
