"use client";

import { useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";
import { TopographicFlow } from "@/components/drops/topographic-flow";
import { ChromaticButton } from "@/components/drops/chromatic-button";
import { FanGallery, type FanGalleryItem } from "@/components/drops/fan-gallery";

/**
 * Thin wrappers around the ReactDrops components (reactdrops.dev), tuned to
 * the mission-control theme. The originals live untouched in ./drops with
 * their licence; everything site-specific is here.
 */

/* ------------------------------ theme probe ------------------------------ */

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}
const readTheme = () =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

function useTheme(): "light" | "dark" {
  return useSyncExternalStore(subscribeTheme, readTheme, () => "dark");
}

/* --------------------------- Topographic Flow ---------------------------- */

/**
 * Slowly evolving survey contours behind a panel. Fills its parent, which
 * must be positioned. Pointer movement ripples the lines.
 */
export function ContourField({
  className = "",
  density = 9,
  opacity = 0.55,
}: {
  className?: string;
  density?: number;
  opacity?: number;
}) {
  const theme = useTheme();
  const dark = theme === "dark";

  return (
    <div aria-hidden className={`absolute inset-0 -z-10 ${className}`}>
      <TopographicFlow
        preset="graphite"
        backgroundColor="transparent"
        lineColor={dark ? "#5c5c5c" : "#9a9a94"}
        accentColor={dark ? "#f2f2ee" : "#101010"}
        lineStyle="mixed"
        scale={300}
        density={density}
        lineWidth={0.8}
        opacity={opacity}
        speed={0.55}
        grain={0}
        height="100%"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

/* ---------------------------- Chromatic Button --------------------------- */

/**
 * Primary call to action: a living chrome surface. It is a real <button>, so
 * navigation goes through the router rather than nesting it in a link.
 */
export function ChromeCta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <ChromaticButton
      type="button"
      onClick={() => router.push(href)}
      onMouseEnter={() => router.prefetch(href)}
      colorMode="gradient-3"
      color="#f4f4f0"
      color2="#6f6f6f"
      color3="#e2564f"
      speed={0.5}
      intensity={1.25}
      borderRadius={50}
      hoverEffect="spotlight"
      className={`h-12 px-7 text-sm font-semibold tracking-tight text-black ${className}`}
    >
      {children}
    </ChromaticButton>
  );
}

/* ------------------------------ Fan Gallery ------------------------------ */

export function FieldGallery({ items }: { items: FanGalleryItem[] }) {
  return (
    <FanGallery
      items={items}
      entrance="deal"
      trigger="scroll"
      once
      radius={16}
      cardWidth={176}
      aspectRatio={0.78}
      spacing={0.72}
      curve={0.12}
      tilt={12}
      showTitle={false}
      ariaLabel="Field imagery"
      style={{ width: "100%" }}
    />
  );
}
