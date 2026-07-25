"use client";

import Image from "next/image";
import { useState } from "react";
import type { Partner } from "@/lib/site";

/**
 * Partner identity mark.
 *
 * Looks for an official asset at /public/logos/<slug>.svg. If it is absent (or
 * fails to load) a designed monogram is rendered instead, so the layout is
 * never broken by a missing file and the page looks finished today.
 *
 * Deliberately NOT shipping scraped third-party logos: these are other
 * organisations' trademarks. Drop official assets in with permission and they
 * appear automatically — no code change needed.
 *
 * Logos render in a neutral treatment to sit inside the monochrome system;
 * remove `grayscale` below if a partner requires full-colour reproduction.
 */
export function PartnerLogo({
  partner,
  size = 56,
}: {
  partner: Partner;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-hidden
        className="grid shrink-0 place-items-center rounded-[8px] border border-line bg-surface font-semibold tracking-tight"
        style={{ width: size, height: size, fontSize: size * 0.3 }}
      >
        {partner.monogram}
      </span>
    );
  }

  return (
    <Image
      src={`/logos/${partner.slug}.svg`}
      alt={`${partner.fullName ?? partner.name} logo`}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      className="shrink-0 rounded-[8px] object-contain grayscale"
      style={{ width: size, height: size }}
      unoptimized
    />
  );
}
