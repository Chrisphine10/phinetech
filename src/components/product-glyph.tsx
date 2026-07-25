/**
 * Abstract monochrome mark per product.
 *
 * Each is a small piece of infographic rather than decoration — the geometry
 * echoes what the product does (a shared fund, a cohort, a term structure, a
 * transaction path, a protected threshold).
 *
 * Strokes use `currentColor` so they invert with the theme automatically, and
 * `anim-draw` makes them draw themselves once the parent Reveal fires.
 */

type Props = { slug: string; className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ProductGlyph({ slug, className = "" }: Props) {
  const common = `w-full h-full ${className}`;

  switch (slug) {
    /* Stacked ledger tiers around a central balance — a cooperative fund. */
    case "intellicash-sacco":
      return (
        <svg viewBox="0 0 120 120" className={common} aria-hidden>
          {[0, 1, 2].map((i) => (
            <ellipse
              key={i}
              cx="60"
              cy={78 - i * 17}
              rx={34 - i * 4}
              ry="11"
              strokeWidth="1.5"
              className="anim-draw"
              style={{ "--draw-length": 200, "--i": i } as React.CSSProperties}
              {...S}
            />
          ))}
          <path
            d="M26 78V44M94 78V44"
            strokeWidth="1.5"
            className="anim-draw"
            style={{ "--draw-length": 80, "--i": 3 } as React.CSSProperties}
            {...S}
          />
          <circle cx="60" cy="44" r="3.5" fill="currentColor" className="anim-node" />
        </svg>
      );

    /* A ring of members around a common pot — the VSLA meeting. */
    case "intellicash-vsla":
      return (
        <svg viewBox="0 0 120 120" className={common} aria-hidden>
          <circle
            cx="60"
            cy="60"
            r="15"
            strokeWidth="1.5"
            className="anim-draw"
            style={{ "--draw-length": 100 } as React.CSSProperties}
            {...S}
          />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
            const x = 60 + Math.cos(a) * 40;
            const y = 60 + Math.sin(a) * 40;
            return (
              <g key={i}>
                <line
                  x1={60 + Math.cos(a) * 17}
                  y1={60 + Math.sin(a) * 17}
                  x2={60 + Math.cos(a) * 34}
                  y2={60 + Math.sin(a) * 34}
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                  className="anim-dash"
                  {...S}
                />
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="currentColor"
                  className="anim-node"
                  style={{ "--i": i } as React.CSSProperties}
                />
              </g>
            );
          })}
        </svg>
      );

    /* Terms and streams resolving into a single record. */
    case "classcompass":
      return (
        <svg viewBox="0 0 120 120" className={common} aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={22 + i * 6}
              y={26 + i * 14}
              width={76 - i * 12}
              height="10"
              rx="2"
              strokeWidth="1.5"
              className="anim-draw"
              style={{ "--draw-length": 190, "--i": i } as React.CSSProperties}
              {...S}
            />
          ))}
          <path
            d="M60 82v14"
            strokeWidth="1.5"
            className="anim-draw"
            style={{ "--draw-length": 20, "--i": 4 } as React.CSSProperties}
            {...S}
          />
          <circle cx="60" cy="99" r="4" fill="currentColor" className="anim-node" />
        </svg>
      );

    /* A sale branching to the tax authority and the payment rail. */
    case "pos":
      return (
        <svg viewBox="0 0 120 120" className={common} aria-hidden>
          <rect
            x="44"
            y="16"
            width="32"
            height="24"
            rx="3"
            strokeWidth="1.5"
            className="anim-draw"
            style={{ "--draw-length": 130 } as React.CSSProperties}
            {...S}
          />
          <path
            d="M60 40v18M60 58H28v18M60 58h32v18"
            strokeWidth="1.4"
            strokeDasharray="4 4"
            className="anim-dash"
            {...S}
          />
          <rect
            x="12"
            y="76"
            width="32"
            height="22"
            rx="3"
            strokeWidth="1.5"
            className="anim-draw"
            style={{ "--draw-length": 130, "--i": 1 } as React.CSSProperties}
            {...S}
          />
          <rect
            x="76"
            y="76"
            width="32"
            height="22"
            rx="3"
            strokeWidth="1.5"
            className="anim-draw"
            style={{ "--draw-length": 130, "--i": 2 } as React.CSSProperties}
            {...S}
          />
          <circle cx="60" cy="58" r="3.5" fill="currentColor" className="anim-node" />
        </svg>
      );

    /* A protected threshold — hodi is the word you say before entering. */
    case "hodi":
      return (
        <svg viewBox="0 0 120 120" className={common} aria-hidden>
          <path
            d="M60 16l32 13v26c0 20-13 34-32 41-19-7-32-21-32-41V29z"
            strokeWidth="1.5"
            className="anim-draw"
            style={{ "--draw-length": 260 } as React.CSSProperties}
            {...S}
          />
          <path
            d="M48 92V58a12 12 0 0 1 24 0v34"
            strokeWidth="1.5"
            className="anim-draw"
            style={{ "--draw-length": 120, "--i": 1 } as React.CSSProperties}
            {...S}
          />
          <circle cx="60" cy="66" r="3.5" fill="currentColor" className="anim-node" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 120 120" className={common} aria-hidden>
          <rect x="26" y="26" width="68" height="68" rx="6" strokeWidth="1.5" {...S} />
        </svg>
      );
  }
}
