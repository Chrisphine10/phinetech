/**
 * PhineTech wordmark.
 *
 * Monochrome by design — it inherits `currentColor`, so it works on any
 * surface and inverts correctly with the theme without a second asset.
 *
 * Placeholder: typographic stand-in, not official logo artwork. Drop the real
 * asset into /public and swap this component when it exists.
 */
export function BrandMark({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        className="size-6 shrink-0"
        role="img"
        aria-label="PhineTech"
      >
        <rect
          x="0.75"
          y="0.75"
          width="22.5"
          height="22.5"
          rx="5.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8.5 17.5v-11h4.25a3.25 3.25 0 0 1 0 6.5H8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span className="text-[15px] font-semibold tracking-tight">
          PhineTech
        </span>
      )}
    </span>
  );
}
