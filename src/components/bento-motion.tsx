"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Motion for bento cells, mounted once in the root layout.
 *
 *  - Reveals `.cell[data-reveal]` as they scroll into view. The CSS hides
 *    them by default, so this must never fail silently: without
 *    IntersectionObserver everything is shown at once, and the <noscript>
 *    rule in the layout covers the no-JS case.
 *  - Feeds the pointer position to the hovered cell as --mx / --my, which the
 *    CSS turns into a soft sheen that follows the cursor.
 *
 * One observer and one listener for the whole page, instead of a client
 * component per cell — the cells themselves stay server-rendered.
 */
export function BentoMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = () =>
      Array.from(document.querySelectorAll<HTMLElement>('.cell[data-reveal=""]'));

    if (typeof IntersectionObserver === "undefined") {
      pending().forEach((el) => el.setAttribute("data-reveal", "shown"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal", "shown");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    const watch = () => pending().forEach((el) => io.observe(el));
    watch();

    // Cells streamed or rendered after this effect ran.
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      const cell = (event.target as Element | null)?.closest?.<HTMLElement>(".cell");
      if (!cell) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = cell.getBoundingClientRect();
        cell.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        cell.style.setProperty("--my", `${event.clientY - rect.top}px`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
