/**
 * Line icon per smart-community domain and per frontier.
 *
 * Same conventions as ServiceIcon: drawn rather than imported, `currentColor`
 * so they follow the theme, and `anim-draw` so they draw in on reveal.
 */

type Props = { slug: string; className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const draw = (length: number, i = 0) =>
  ({ "--draw-length": length, "--i": i }) as React.CSSProperties;

export function DomainIcon({ slug, className = "" }: Props) {
  const box = `w-full h-full ${className}`;

  switch (slug) {
    /* Coins stacked beside a group — a shared fund. */
    case "community-finance":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <ellipse cx="17" cy="32" rx="10" ry="4" className="anim-draw" style={draw(50)} {...S} />
          <path d="M7 32v-7c0 2.2 4.5 4 10 4s10-1.8 10-4v7" className="anim-draw" style={draw(60, 1)} {...S} />
          <ellipse cx="17" cy="25" rx="10" ry="4" className="anim-draw" style={draw(50, 1)} {...S} />
          <circle cx="34" cy="16" r="4" className="anim-draw" style={draw(26, 2)} {...S} />
          <path d="M27 30c0-4 3-7 7-7s7 3 7 7" className="anim-draw" style={draw(30, 2)} {...S} />
        </svg>
      );

    /* A factory roofline with a till slip. */
    case "commerce-industry":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path d="M6 40V22l10 6v-6l10 6v-6l10 6V10h6v30z" className="anim-draw" style={draw(170)} {...S} />
          <path d="M13 34h4M22 34h4M31 34h4" className="anim-draw" style={draw(14, 1)} {...S} />
        </svg>
      );

    /* A meter dial with a bolt. */
    case "utilities-energy":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <circle cx="24" cy="24" r="16" className="anim-draw" style={draw(102)} {...S} />
          <path d="M26 13l-7 12h6l-3 10 8-13h-6z" className="anim-draw" style={draw(64, 1)} {...S} />
        </svg>
      );

    /* An open book under a mortarboard. */
    case "education":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path d="M24 8L6 16l18 8 18-8z" className="anim-draw" style={draw(84)} {...S} />
          <path d="M13 20v9c0 3 5 6 11 6s11-3 11-6v-9" className="anim-draw" style={draw(60, 1)} {...S} />
          <path d="M42 16v11" className="anim-draw" style={draw(12, 2)} {...S} />
        </svg>
      );

    /* A shield carrying a signal pulse. */
    case "safety-response":
    case "emergency-response":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path d="M24 6l14 5v11c0 9-6 16-14 20-8-4-14-11-14-20V11z" className="anim-draw" style={draw(120)} {...S} />
          <path d="M15 25h5l3-7 4 12 3-5h4" className="anim-draw" style={draw(44, 1)} {...S} />
        </svg>
      );

    /* Routes joining nodes across a city grid. */
    case "mobility-planning":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path d="M10 38V24h14V10h14" className="anim-draw" style={draw(60)} {...S} />
          <path d="M24 24h14v14" className="anim-draw" style={draw(30, 1)} {...S} />
          <circle cx="10" cy="38" r="3" fill="currentColor" className="anim-node" />
          <circle cx="38" cy="10" r="3" fill="currentColor" className="anim-node" style={{ "--i": 1 } as React.CSSProperties} />
          <circle cx="38" cy="38" r="3" fill="currentColor" className="anim-node" style={{ "--i": 2 } as React.CSSProperties} />
        </svg>
      );

    /* People around a shared table. */
    case "community-culture":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <circle cx="24" cy="26" r="7" className="anim-draw" style={draw(46)} {...S} />
          <circle cx="24" cy="9" r="3" className="anim-draw" style={draw(20, 1)} {...S} />
          <circle cx="9" cy="35" r="3" className="anim-draw" style={draw(20, 1)} {...S} />
          <circle cx="39" cy="35" r="3" className="anim-draw" style={draw(20, 1)} {...S} />
          <path d="M24 12v7M12 33l6-3.500M36 33l-6-3.500" className="anim-draw" style={draw(24, 2)} {...S} />
        </svg>
      );

    /* Stacked servers. */
    case "digital-infrastructure":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="8" y="8" width="32" height="9" rx="2" className="anim-draw" style={draw(84)} {...S} />
          <rect x="8" y="20" width="32" height="9" rx="2" className="anim-draw" style={draw(84, 1)} {...S} />
          <rect x="8" y="32" width="32" height="9" rx="2" className="anim-draw" style={draw(84, 2)} {...S} />
          <circle cx="14" cy="12.500" r="1.400" fill="currentColor" className="anim-node" />
          <circle cx="14" cy="24.500" r="1.400" fill="currentColor" className="anim-node" style={{ "--i": 1 } as React.CSSProperties} />
          <circle cx="14" cy="36.500" r="1.400" fill="currentColor" className="anim-node" style={{ "--i": 2 } as React.CSSProperties} />
        </svg>
      );

    /* A flask — findings made here. */
    case "research":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path d="M19 6h10M21 6v13L10 38a3 3 0 0 0 2.600 4.500h22.800A3 3 0 0 0 38 38L27 19V6" className="anim-draw" style={draw(130)} {...S} />
          <path d="M15 31h18" className="anim-draw" style={draw(18, 1)} {...S} />
        </svg>
      );

    /* The moon from the mark, with an orbit and the red body beside it. */
    case "space":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <circle cx="24" cy="24" r="9" className="anim-draw" style={draw(58)} {...S} />
          <ellipse cx="24" cy="24" rx="20" ry="7" transform="rotate(-24 24 24)" className="anim-draw" style={draw(92, 1)} {...S} />
          <circle cx="41" cy="14" r="2.600" fill="currentColor" className="anim-node" />
        </svg>
      );

    /* A submersible under the waterline, with a sonar ping below it. */
    case "marine":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path
            d="M4 12c4-3 7-3 11 0s7 3 11 0 7-3 11 0 5 2 7 1"
            className="anim-draw"
            style={draw(52)}
            {...S}
          />
          <rect
            x="12"
            y="22"
            width="22"
            height="10"
            rx="5"
            className="anim-draw"
            style={draw(60, 1)}
            {...S}
          />
          <path
            d="M34 27h5M39 23v8M20 22v-3h6v3"
            className="anim-draw"
            style={draw(30, 1)}
            {...S}
          />
          <circle cx="18" cy="27" r="2" fill="currentColor" className="anim-node" />
          <path
            d="M15 38c3 2 6 3 9 3s6-1 9-3"
            strokeDasharray="2 4"
            className="anim-draw"
            style={draw(22, 2)}
            {...S}
          />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <circle cx="24" cy="24" r="14" className="anim-draw" style={draw(90)} {...S} />
        </svg>
      );
  }
}
