import Image from "next/image";

/**
 * PhineTech logo lockup.
 *
 * `variant="wordmark"` — the full "Phine Tech / Vision it. We create it."
 * lockup, used in the header and footer.
 * `variant="mark"` — the square P, for tight square spaces.
 *
 * Dark mode: the supplied artwork exists only in its navy colourway, and the
 * wolf is fused to the P body as a single shape, so it cannot be recoloured
 * automatically without erasing the wolf. Instead the logo sits on a light
 * plate (see --logo-plate), which keeps the artwork exactly as designed and
 * legible on the dark ground. The plate is transparent in light mode, where
 * the page is already white.
 */
export function BrandMark({
  variant = "wordmark",
  height = 32,
  className = "",
}: {
  variant?: "wordmark" | "mark";
  height?: number;
  className?: string;
}) {
  const isWordmark = variant === "wordmark";

  // Intrinsic sizes after cropping to content.
  const src = isWordmark
    ? "/logos/phinetech-wordmark.png"
    : "/logos/phinetech-mark.png";
  const intrinsic = isWordmark ? { w: 1660, h: 547 } : { w: 733, h: 944 };
  const width = Math.round((intrinsic.w / intrinsic.h) * height);

  return (
    <span
      className={`logo-plate inline-flex items-center justify-center ${className}`}
      style={{ padding: Math.round(height * 0.14) }}
    >
      <Image
        src={src}
        alt="Phine Tech — Vision it. We create it."
        width={intrinsic.w}
        height={intrinsic.h}
        style={{ height, width }}
        className="object-contain"
        priority
        unoptimized
      />
    </span>
  );
}
