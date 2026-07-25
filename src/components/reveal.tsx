"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals children once they scroll into view.
 *
 * Safety: the CSS hides `[data-reveal]` by default, so anything that prevents
 * this component from running would hide content permanently. Two guards:
 *   1. If IntersectionObserver is missing, we reveal immediately.
 *   2. A <noscript> rule in the root layout unhides everything without JS.
 *
 * Motion itself is disabled by the prefers-reduced-motion block in globals.css,
 * so reduced-motion users still get the content — just without the transition.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No observer support: reveal on the next frame. Deferring keeps this out
    // of the effect body, which React 19 lints against (cascading renders).
    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-reveal={shown ? "shown" : ""}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
