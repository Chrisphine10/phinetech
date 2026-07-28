"use client";

import { LogoTile } from "@/components/logo-tile";
import type { Partner } from "@/lib/site";

/**
 * Partner identity mark.
 *
 * Renders the partner's own logo in the shared uniform tile, falling back to a
 * designed monogram when no asset is present — so the layout never breaks on a
 * missing file and a partner without artwork still looks deliberate.
 *
 * Logos are reproduced in full colour and unaltered: they are other
 * organisations' trademarks, not ours to restyle.
 */
export function PartnerLogo({
  partner,
  size = 56,
}: {
  partner: Partner;
  size?: number;
}) {
  return (
    <LogoTile
      src={partner.logo}
      alt={`${partner.fullName ?? partner.name} logo`}
      height={size}
      fallback={
        <span
          aria-hidden
          className="grid shrink-0 place-items-center rounded-[8px] border border-line bg-surface font-semibold tracking-tight"
          style={{
            width: Math.round(size * 2.6),
            height: size,
            fontSize: size * 0.34,
          }}
        >
          {partner.monogram}
        </span>
      }
    />
  );
}
