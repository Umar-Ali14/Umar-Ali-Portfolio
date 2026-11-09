import { useMemo } from 'react';

const GRID = 64; // px, matches the faint grid's backgroundSize
const FADE_MASK = 'radial-gradient(ellipse at center, black 30%, transparent 75%)';

/**
 * Fixed, subtle backdrop behind the whole page: glows, faint grid,
 * twinkling stars and thin light streams gliding along the grid lines.
 */
const SpaceBackground = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() < 0.15 ? 3 : Math.random() < 0.5 ? 2 : 1,
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 5,
      })),
    [],
  );

  // Light streams snapped to grid rows / columns.
  const hStreams = [
    { row: 3, duration: 9, delay: 0 },
    { row: 7, duration: 12, delay: -4 },
    { row: 11, duration: 10, delay: -7 },
    { row: 15, duration: 14, delay: -2 },
  ];
  const vStreams = [
    { col: 4, duration: 11, delay: -3 },
    { col: 13, duration: 13, delay: -8 },
    { col: 21, duration: 10, delay: -5 },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft radial glows */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[hsl(var(--violet)/0.06)] blur-[140px]" />

      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(212 100% 70%) 1px, transparent 1px), linear-gradient(90deg, hsl(212 100% 70%) 1px, transparent 1px)',
          backgroundSize: `${GRID}px ${GRID}px`,
          maskImage: FADE_MASK,
          WebkitMaskImage: FADE_MASK,
        }}
      />

      {/* light streams gliding along grid lines (same edge fade as the grid) */}
      <div className="absolute inset-0" style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}>
        {hStreams.map((s) => (
          <span
            key={`h${s.row}`}
            className="bg-stream-h absolute left-0 h-px w-56"
            style={{ top: s.row * GRID, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s` }}
          />
        ))}
        {vStreams.map((s) => (
          <span
            key={`v${s.col}`}
            className="bg-stream-v absolute top-0 h-56 w-px"
            style={{ left: s.col * GRID, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s` }}
          />
        ))}
      </div>

      {stars.map((s) => (
        <span
          key={s.id}
          className="star absolute rounded-full bg-primary"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            ['--d' as string]: `${s.duration}s`,
            ['--delay' as string]: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SpaceBackground;
