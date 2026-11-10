import Image from "next/image";
import Link from "next/link";

/**
 * Bento system.
 *
 * Every page is built from one 12-column grid of panels ("cells"). A cell is a
 * rounded graphite tile; variants add a photograph, blueprint lines or the
 * pale paper ground. Corner labels are set in mono capitals, like the
 * read-outs on a mission display.
 *
 * Spans are passed as Tailwind classes (`sm:col-span-6 lg:col-span-4`), so the
 * layout of a page is readable in its own file. Cells stack to full width on
 * phones by default.
 *
 * These are server components. Reveal-on-scroll and the pointer sheen are
 * applied from outside by <BentoMotion />, mounted once in the root layout.
 */

export function Bento({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ul";
}) {
  return <Tag className={`bento ${className}`}>{children}</Tag>;
}

export type Hud = {
  tl?: React.ReactNode;
  tr?: React.ReactNode;
  bl?: React.ReactNode;
  br?: React.ReactNode;
};

type CellProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "panel" | "muted" | "paper" | "grid" | "photo";
  /** Photograph behind the content. Implies the photo variant. */
  photo?: { src: string; alt: string; priority?: boolean; position?: string };
  /** Makes the whole cell a link. */
  href?: string;
  hud?: Hud;
  /** Reveal stagger in milliseconds. */
  delay?: number;
  /** Remove the padding, for cells that hold a full-bleed scene. */
  flush?: boolean;
  /** Lift on hover even when the cell is not a link. */
  hover?: boolean;
  id?: string;
  as?: "div" | "li" | "article" | "section";
  "aria-labelledby"?: string;
};

export function Cell({
  children,
  className = "",
  variant = "panel",
  photo,
  href,
  hud,
  delay = 0,
  flush = false,
  hover = false,
  id,
  as: Tag = "div",
  ...rest
}: CellProps) {
  const kind = photo ? "photo" : variant;
  const classes = [
    "cell",
    kind === "muted" && "cell--muted",
    kind === "paper" && "cell--paper cell--grid",
    kind === "grid" && "cell--grid",
    kind === "photo" && "cell--photo",
    flush && "cell--flush",
    hover && "cell--hover",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {photo && (
        <>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={photo.priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="cell-photo"
            style={{ objectPosition: photo.position ?? "center" }}
          />
          <span aria-hidden className="cell-scrim" />
        </>
      )}
      {hud && (hud.tl || hud.tr) && (
        <div
          className={`hud flex items-start justify-between gap-4 ${flush ? "p-5 pb-0 sm:p-6 sm:pb-0" : ""}`}
        >
          <div>{hud.tl}</div>
          <div className="text-right">{hud.tr}</div>
        </div>
      )}
      {children}
      {hud && (hud.bl || hud.br) && (
        <div
          className={`hud mt-auto flex items-end justify-between gap-4 pt-5 ${flush ? "p-5 sm:p-6" : ""}`}
        >
          <div>{hud.bl}</div>
          <div className="text-right">{hud.br}</div>
        </div>
      )}
    </>
  );

  const style = { "--reveal-delay": `${delay}ms` } as React.CSSProperties;

  if (href) {
    // The link is the cell, so the whole panel is the target.
    const external = href.startsWith("http");
    return (
      <Tag id={id} className="contents" {...rest}>
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            style={style}
            data-reveal=""
          >
            {inner}
          </a>
        ) : (
          <Link href={href} className={classes} style={style} data-reveal="">
            {inner}
          </Link>
        )}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={classes} style={style} data-reveal="" {...rest}>
      {inner}
    </Tag>
  );
}

/** Small mono label used above headings inside a cell. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`hud ${className}`}>{children}</p>;
}

/** The ">>>>>" route line from the mission read-out. */
export function Route({ from, to }: { from: string; to: string }) {
  return (
    <span className="block">
      <b>{from}</b>
      <span className="block" aria-hidden>
        &gt;&gt;&gt;&gt;&gt;
      </span>
      <span className="sr-only"> to </span>
      <b>{to}</b>
    </span>
  );
}

/** Animated barcode mark. Decorative. */
export function Barcode({
  bars = 14,
  className = "",
}: {
  bars?: number;
  className?: string;
}) {
  return (
    <span aria-hidden className={`barcode ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          style={
            {
              "--i": i,
              width: i % 3 === 0 ? 5 : i % 2 === 0 ? 2 : 3,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  );
}

/**
 * Construction geometry: quarter arcs, centre lines and node dots, as drawn
 * around a logo on a brand sheet. Decorative, inherits `currentColor`.
 */
export function Blueprint({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <path d="M0 150h400M200 0v300M100 0v300M300 0v300M0 75h400M0 225h400" opacity="0.5" />
      <g className="anim-rotate">
        <circle cx="200" cy="150" r="120" strokeDasharray="2 6" />
      </g>
      <g className="anim-rotate-rev">
        <circle cx="200" cy="150" r="78" strokeDasharray="14 10" />
      </g>
      <path d="M100 0a100 100 0 0 1-100 100M300 0a100 100 0 0 0 100 100M100 300a100 100 0 0 0-100-100M300 300a100 100 0 0 1 100-100" />
      {[
        [100, 75],
        [300, 75],
        [100, 225],
        [300, 225],
        [200, 150],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="2.2"
          fill="currentColor"
          stroke="none"
          className="anim-node"
          style={{ "--i": i } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}
