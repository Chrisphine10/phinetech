"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Uniform tile for product and partner logos.
 *
 * Every logo asset is pre-normalised onto one shared 780x300 canvas (see the
 * asset pipeline), with the artwork scaled to fit and centred. That is what
 * makes a row of them line up: the source marks range from 0.75:1
 * (ClassCompass, a stacked compass over text) to 5:1 (Intelli-Wealth), so
 * without normalising, one tile size either squashes the portrait marks or
 * strands the wide ones.
 *
 * Because every asset shares an aspect ratio, the tile only needs a height.
 *
 * `fallback` renders when there is no asset or it fails to load, so a missing
 * file degrades instead of leaving a broken image.
 */

const ASSET = { w: 780, h: 300 };
const ASPECT = ASSET.w / ASSET.h;

export function LogoTile({
  src,
  alt,
  height = 48,
  ground = "light",
  className = "",
  fallback = null,
}: {
  src?: string;
  alt: string;
  height?: number;
  /**
   * Which ground the artwork was drawn for. Almost every mark we hold is dark
   * ink on white, hence the white tile default. Light artwork on a dark field
   * (the Phine POS mark) needs the inverse or it disappears.
   */
  ground?: "light" | "dark";
  className?: string;
  fallback?: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <>{fallback}</>;

  return (
    <span
      className={`logo-tile ${ground === "dark" ? "logo-tile--dark" : ""} ${className}`}
      style={{
        height,
        width: Math.round(height * ASPECT),
        padding: Math.round(height * 0.1),
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={ASSET.w}
        height={ASSET.h}
        onError={() => setFailed(true)}
        unoptimized
      />
    </span>
  );
}
