/**
 * Line icon per service line.
 *
 * Drawn rather than imported: adding an icon package for six glyphs would cost
 * more bundle than it saves, and these inherit `currentColor` so they invert
 * with the theme. They draw themselves in once the parent Reveal fires.
 */

type Props = { slug: string; className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ServiceIcon({ slug, className = "" }: Props) {
  const box = `w-full h-full ${className}`;

  switch (slug) {
    /* A network resolving into a single decision. */
    case "ai-automation":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path
            d="M10 14h8M10 24h8M10 34h8M30 24h8"
            className="anim-draw"
            style={{ "--draw-length": 60 } as React.CSSProperties}
            {...S}
          />
          <path
            d="M18 14l8 8M18 24h8M18 34l8-8"
            className="anim-draw"
            style={{ "--draw-length": 60, "--i": 1 } as React.CSSProperties}
            {...S}
          />
          <circle cx="8" cy="14" r="2.4" fill="currentColor" className="anim-node" style={{ "--i": 0 } as React.CSSProperties} />
          <circle cx="8" cy="24" r="2.4" fill="currentColor" className="anim-node" style={{ "--i": 1 } as React.CSSProperties} />
          <circle cx="8" cy="34" r="2.4" fill="currentColor" className="anim-node" style={{ "--i": 2 } as React.CSSProperties} />
          <circle cx="28" cy="24" r="4.5" className="anim-draw" style={{ "--draw-length": 30, "--i": 2 } as React.CSSProperties} {...S} />
          <circle cx="40" cy="24" r="2.4" fill="currentColor" className="anim-node" style={{ "--i": 3 } as React.CSSProperties} />
        </svg>
      );

    /* Angle brackets around a stack. */
    case "software-development":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path
            d="M15 16l-7 8 7 8M33 16l7 8-7 8"
            className="anim-draw"
            style={{ "--draw-length": 50 } as React.CSSProperties}
            {...S}
          />
          <path
            d="M27 12l-6 24"
            className="anim-draw"
            style={{ "--draw-length": 30, "--i": 1 } as React.CSSProperties}
            {...S}
          />
        </svg>
      );

    /* A filament sparking. */
    case "innovation-support":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path
            d="M24 8a11 11 0 0 0-6 20.2V33h12v-4.8A11 11 0 0 0 24 8Z"
            className="anim-draw"
            style={{ "--draw-length": 90 } as React.CSSProperties}
            {...S}
          />
          <path
            d="M20 37h8M21 41h6"
            className="anim-draw"
            style={{ "--draw-length": 20, "--i": 1 } as React.CSSProperties}
            {...S}
          />
          <path
            d="M21 26l3-6 3 6"
            className="anim-draw"
            style={{ "--draw-length": 24, "--i": 2 } as React.CSSProperties}
            {...S}
          />
        </svg>
      );

    /* A cloud over a deployment arrow. */
    case "cloud-computing":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path
            d="M15 30a7 7 0 0 1 .8-13.9 10 10 0 0 1 19 3.1A6.5 6.5 0 0 1 34 30Z"
            className="anim-draw"
            style={{ "--draw-length": 110 } as React.CSSProperties}
            {...S}
          />
          <path
            d="M24 34v8M20.5 38.5L24 42l3.5-3.5"
            className="anim-draw"
            style={{ "--draw-length": 30, "--i": 1 } as React.CSSProperties}
            {...S}
          />
        </svg>
      );

    /* A shield with a keyhole. */
    case "cyber-security":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path
            d="M24 6l14 5.5v11c0 9-5.7 15.2-14 18.5-8.3-3.3-14-9.5-14-18.5v-11Z"
            className="anim-draw"
            style={{ "--draw-length": 120 } as React.CSSProperties}
            {...S}
          />
          <path
            d="M19 24v-3a5 5 0 0 1 10 0v3"
            className="anim-draw"
            style={{ "--draw-length": 34, "--i": 1 } as React.CSSProperties}
            {...S}
          />
          <rect
            x="18"
            y="24"
            width="12"
            height="9"
            rx="1.6"
            className="anim-draw"
            style={{ "--draw-length": 44, "--i": 2 } as React.CSSProperties}
            {...S}
          />
        </svg>
      );

    /* Rising columns with a growth arrow. */
    case "fundraising":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path
            d="M9 38h30"
            className="anim-draw"
            style={{ "--draw-length": 32 } as React.CSSProperties}
            {...S}
          />
          <path
            d="M14 38V27M23 38V21M32 38V15"
            className="anim-draw"
            style={{ "--draw-length": 40, "--i": 1 } as React.CSSProperties}
            {...S}
          />
          <path
            d="M12 22l10-8 8 5 8-9"
            className="anim-draw"
            style={{ "--draw-length": 50, "--i": 2 } as React.CSSProperties}
            {...S}
          />
          <circle cx="38" cy="10" r="2.4" fill="currentColor" className="anim-node" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="10" y="10" width="28" height="28" rx="4" {...S} />
        </svg>
      );
  }
}
