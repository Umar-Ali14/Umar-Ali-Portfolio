import { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; vx: number; vy: number; r: number; glow: boolean };

const LINK_DISTANCE = 150; // px: dots closer than this get a connecting line
const AREA_PER_PARTICLE = 16000; // px² of canvas per dot (sets density)
const MAX_PARTICLES = 70;
const SPEED = 0.18; // px per frame (very slow drift)

/**
 * Network of small glowing dots that drift slowly and connect with faint
 * light lines when close, drawn on a canvas behind the Home section.
 * Pauses when off-screen or when the tab is hidden; static for reduced motion.
 */
const HeroParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;

    const seed = () => {
      const count = Math.min(MAX_PARTICLES, Math.round((width * height) / AREA_PER_PARTICLE));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2 * SPEED,
        vy: (Math.random() - 0.5) * 2 * SPEED,
        r: Math.random() < 0.2 ? 2 : Math.random() * 0.8 + 1,
        glow: Math.random() < 0.2,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // connecting lines (fainter the farther apart)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `hsla(212, 100%, 62%, ${(1 - dist / LINK_DISTANCE) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots (a few with a soft glow)
      for (const p of particles) {
        if (p.glow) {
          ctx.fillStyle = 'hsla(205, 100%, 65%, 0.15)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = p.glow ? 'hsla(200, 100%, 70%, 0.95)' : 'hsla(212, 100%, 62%, 0.7)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      draw();
      frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (reduceMotion || frame || !visible || document.hidden) return;
      frame = requestAnimationFrame(step);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    resize();
    start();

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    visibilityObserver.observe(canvas);

    const onTabChange = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onTabChange);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', onTabChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{
        // soften the top and bottom so the network blends into the page
        maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12%, black 85%, transparent)',
      }}
    />
  );
};

export default HeroParticles;
