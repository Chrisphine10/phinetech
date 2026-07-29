/**
 * Line icon per catalogue item.
 *
 * The shop has no product photography, and stock imagery of hardware we do not
 * stock would misrepresent what is actually supplied. Drawn icons are honest
 * about being illustrative, stay on-brand, and cost nothing to load.
 *
 * Replace with real photography once the actual SKUs are confirmed.
 */

type Props = { slug: string; className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ShopIcon({ slug, className = "" }: Props) {
  const box = `w-full h-full ${className}`;

  switch (slug) {
    case "pos-terminal":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="9" y="8" width="30" height="24" rx="2.5" {...S} />
          <path d="M14 13h20M14 18h12" {...S} />
          <path d="M18 32l-2 8h16l-2-8" {...S} />
          <path d="M12 40h24" {...S} />
        </svg>
      );

    case "customer-display":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="11" y="9" width="26" height="16" rx="2" {...S} />
          <path d="M16 15h10M16 19h6" {...S} />
          <path d="M24 25v11M17 40h14" {...S} />
          <path d="M20 36h8" {...S} />
        </svg>
      );

    case "cash-drawer":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="7" y="16" width="34" height="20" rx="2.5" {...S} />
          <path d="M7 24h34" {...S} />
          <path d="M20 29h8" {...S} />
          <path d="M13 16v-4h22v4" {...S} />
          <circle cx="24" cy="20" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );

    case "barcode-scanner":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path d="M18 8h13a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H18" {...S} />
          <path d="M18 6v16l-7 5v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V27" {...S} />
          <path d="M23 12v4M27 12v4M31 12v4" {...S} />
        </svg>
      );

    case "barcode-scanner-wireless":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path d="M16 14h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H16" {...S} />
          <path d="M16 12v18l-5 4v8h10v-8" {...S} />
          <path d="M21 17v4M25 17v4" {...S} />
          <path d="M35 12a10 10 0 0 1 0 14M39 8a15 15 0 0 1 0 22" {...S} />
        </svg>
      );

    case "receipt-printer":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="9" y="20" width="30" height="14" rx="2.5" {...S} />
          <path d="M15 20v-8h18v8" {...S} />
          <path d="M15 34v8h18v-8" {...S} />
          <path d="M19 38h10M19 15h10" {...S} />
          <circle cx="34" cy="27" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );

    case "label-printer":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="8" y="18" width="32" height="13" rx="2.5" {...S} />
          <rect x="16" y="31" width="16" height="11" rx="1.5" {...S} />
          <path d="M20 35h8M20 38h5" {...S} />
          <path d="M14 12h20v6H14z" {...S} />
        </svg>
      );

    case "desktop-computer":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="10" y="7" width="16" height="34" rx="2.5" {...S} />
          <path d="M15 13h6M15 17h6" {...S} />
          <circle cx="18" cy="33" r="2" {...S} />
          <path d="M31 16h9v14h-9z" {...S} />
          <path d="M35.5 30v6M32 40h7" {...S} />
        </svg>
      );

    case "monitor":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="6" y="10" width="36" height="23" rx="2.5" {...S} />
          <path d="M24 33v6M16 41h16" {...S} />
        </svg>
      );

    /* services */
    case "web-development":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="7" y="10" width="34" height="26" rx="2.5" {...S} />
          <path d="M7 17h34" {...S} />
          <circle cx="12" cy="13.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="16" cy="13.5" r="1" fill="currentColor" stroke="none" />
          <path d="M19 23l-4 4 4 4M29 23l4 4-4 4M26 21l-4 12" {...S} />
        </svg>
      );

    case "pos-system":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="10" y="7" width="28" height="34" rx="3" {...S} />
          <path d="M15 14h18M15 19h18" {...S} />
          <path d="M15 26h6M27 26h6M15 32h6M27 32h6" {...S} />
        </svg>
      );

    case "etims-onboarding":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path d="M13 8h16l6 6v26a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z" {...S} />
          <path d="M28 8v7h7" {...S} />
          <path d="M17 27l4 4 9-9" {...S} />
        </svg>
      );

    case "cloud-setup":
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <path d="M15 31a7 7 0 0 1 .8-13.9 10 10 0 0 1 19 3.1A6.5 6.5 0 0 1 34 31Z" {...S} />
          <path d="M24 35v7M20.5 38.5L24 42l3.5-3.5" {...S} />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 48 48" className={box} aria-hidden>
          <rect x="11" y="11" width="26" height="26" rx="3" {...S} />
        </svg>
      );
  }
}
