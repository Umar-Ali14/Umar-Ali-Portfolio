import { useMemo } from 'react';

/** Fixed, subtle starfield + grid behind the whole page. */
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
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

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
