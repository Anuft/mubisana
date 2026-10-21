import React, { useMemo } from 'react';

/**
 * Romantic falling petals simulation.
 * Uses lightweight CSS animations with randomized delays and positions.
 */
export const PetalEffect = ({ enabled = true }) => {
  const petals = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.5 + Math.random() * 5) % 100}%`,
      delay: `${(i * 1.4 + Math.random() * 2).toFixed(1)}s`,
      duration: `${(8 + (i % 6) * 1.5).toFixed(1)}s`,
      size: `${14 + (i % 4) * 4}px`,
      rotate: `${(i * 45) % 360}deg`,
      type: i % 3, // 0: blush rose petal, 1: gold fleck, 2: ivory jasmine
    }));
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      {petals.map((p) => {
        let petalStyle = {};
        if (p.type === 0) {
          // Blush rose petal
          petalStyle = {
            background: 'radial-gradient(ellipse at 30% 30%, #f7d8df 0%, #c47b8c 80%, #8f4a5a 100%)',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            boxShadow: '0 2px 6px rgba(143, 74, 90, 0.15)',
          };
        } else if (p.type === 1) {
          // Gold sparkle fleck
          petalStyle = {
            background: 'linear-gradient(135deg, #fff3db, #c5a059, #8c682d)',
            borderRadius: '50% 50% 0 50%',
            opacity: 0.7,
          };
        } else {
          // Soft cream petal
          petalStyle = {
            background: 'radial-gradient(ellipse at 35% 35%, #ffffff 0%, #faefe3 70%, #d8caa7 100%)',
            borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%',
            opacity: 0.85,
          };
        }

        return (
          <div
            key={p.id}
            className="absolute top-[-20px] will-change-transform"
            style={{
              left: p.left,
              width: p.size,
              height: `${parseFloat(p.size) * 1.25}px`,
              animation: `petal-fall ${p.duration} linear infinite`,
              animationDelay: p.delay,
              transform: `rotate(${p.rotate})`,
              ...petalStyle,
            }}
          />
        );
      })}
    </div>
  );
};
