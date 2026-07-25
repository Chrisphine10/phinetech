/**
 * PhineTech mark — a geometric monogram in the brand purple/gold pairing.
 *
 * Placeholder: this is a typographic stand-in, not the official logo artwork.
 * Drop the real asset into /public and swap this component when available.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        role="img"
        aria-label="PhineTech"
      >
        <rect width="32" height="32" rx="8" fill="var(--primary)" />
        <path
          d="M11 23V9h6.2a4.4 4.4 0 0 1 0 8.8H14"
          fill="none"
          stroke="var(--primary-foreground)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22.5" cy="22.5" r="2.5" fill="var(--accent)" />
      </svg>
      <span className="text-lg font-bold tracking-tight text-foreground">
        Phine<span className="text-primary">Tech</span>
      </span>
    </span>
  );
}
