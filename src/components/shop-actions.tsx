"use client";

import { useShop, addToCart, toggleWishlist } from "@/lib/store";

/**
 * Add-to-cart and wishlist controls.
 *
 * The button label reflects what is already in the basket, so a second click
 * is never ambiguous. Wishlist state is announced via aria-pressed rather than
 * colour alone, since the only visual difference is a filled heart.
 */
export function ShopActions({
  slug,
  size = "default",
}: {
  slug: string;
  size?: "default" | "compact";
}) {
  const { cart, wishlist } = useShop();
  const line = cart.find((l) => l.slug === slug);
  const wished = wishlist.includes(slug);

  const compact = size === "compact";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => addToCart(slug)}
        className={`rounded-[3px] bg-primary font-medium text-primary-foreground transition-colors hover:bg-primary-hover ${
          compact ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm"
        }`}
      >
        {line ? `In cart (${line.qty}) · Add another` : "Add to cart"}
      </button>

      <button
        type="button"
        onClick={() => toggleWishlist(slug)}
        aria-pressed={wished}
        aria-label={wished ? "Remove from wishlist" : "Save to wishlist"}
        title={wished ? "Remove from wishlist" : "Save to wishlist"}
        className={`grid place-items-center rounded-[3px] border border-line transition-colors hover:bg-surface-hover ${
          compact ? "size-7" : "size-10"
        } ${wished ? "text-accent" : "text-muted-foreground"}`}
      >
        <svg
          viewBox="0 0 24 24"
          className={compact ? "size-3.5" : "size-4"}
          fill={wished ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
      </button>
    </div>
  );
}
