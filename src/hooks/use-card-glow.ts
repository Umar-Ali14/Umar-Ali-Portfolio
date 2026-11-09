import { useEffect } from 'react';

// Innermost match wins (closest()), so small boxes inside a card track the cursor themselves.
const GLOW_SELECTOR = '.card-inner, .card-surface, .glow-card';

/**
 * Tracks the mouse over any glowing card and stores the cursor position on it
 * as --mx / --my, which the CSS uses to light up the nearest edge.
 * One listener for the whole page; touch input is ignored.
 */
export function useCardGlow() {
  useEffect(() => {
    let frame = 0;
    let last: PointerEvent | null = null;

    const update = () => {
      frame = 0;
      if (!last) return;
      const target = last.target as Element | null;
      const card = target?.closest?.(GLOW_SELECTOR) as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${last.clientX - rect.left}px`);
      card.style.setProperty('--my', `${last.clientY - rect.top}px`);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
