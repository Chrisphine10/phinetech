"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` when scrolled into view.
 *
 * Correctness over spectacle:
 *   - The server renders the FINAL number, so the figure is right with JS
 *     disabled, in RSS readers, and for crawlers.
 *   - If the element is already on screen at mount, no animation runs at all —
 *     otherwise the number would visibly snap to zero and count back up.
 *   - Reduced-motion users skip the animation entirely.
 */
export function StatCounter({
  value,
  suffix = "",
  duration = 1200,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    // Already visible? Leave the rendered number alone.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    let raf = 0;
    let cancelled = false;

    // Deferred so we are not calling setState synchronously inside the effect.
    const prime = requestAnimationFrame(() => {
      if (!cancelled) setDisplay(0);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.disconnect();

          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            // easeOutCubic — fast then settling, reads as deliberate.
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(eased * value));
            if (t < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);

    return () => {
      cancelled = true;
      cancelAnimationFrame(prime);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
