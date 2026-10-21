import React from 'react';

/**
 * Floating Mint Green (#ADEBB3) & Champagne Gold Flecks Background
 * Drifts across the botanical deep pine background (#122A16).
 */
export const GoldFoilParticles = () => {
  const particles = [
    { top: '8%', left: '8%', size: 5, delay: '0s', duration: '7s', type: 'mint' },
    { top: '18%', left: '88%', size: 4, delay: '1.5s', duration: '8s', type: 'gold' },
    { top: '32%', left: '15%', size: 6, delay: '0.8s', duration: '6.5s', type: 'mint' },
    { top: '45%', left: '92%', size: 3.5, delay: '2.2s', duration: '9s', type: 'gold' },
    { top: '62%', left: '6%', size: 5.5, delay: '1s', duration: '7.5s', type: 'mint' },
    { top: '75%', left: '85%', size: 4, delay: '2.8s', duration: '8.5s', type: 'gold' },
    { top: '88%', left: '20%', size: 6, delay: '0.5s', duration: '7s', type: 'mint' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full animate-float-slow ${
            p.type === 'mint'
              ? 'bg-gradient-to-tr from-[#4D7554] via-[#ADEBB3] to-[#FFFFFF] opacity-40 shadow-[0_0_10px_rgba(173,235,179,0.6)]'
              : 'bg-gradient-to-tr from-[#9E825D] via-[#C5A880] to-[#FFF4DF] opacity-35 shadow-[0_0_8px_rgba(197,168,128,0.5)]'
          }`}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default GoldFoilParticles;
