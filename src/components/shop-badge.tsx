"use client";

import Link from "next/link";
import { useShop, cartCount } from "@/lib/store";

/**
 * Header cart and wishlist indicators.
 *
 * The counts come from useSyncExternalStore, so on the server they render as
 * zero and the badge simply does not appear — no hydration mismatch, and no
 * flash of an empty basket for someone who has items saved.
 */
export function ShopBadge() {
  const shopState = useShop();
  const items = cartCount(shopState);
  const saved = shopState.wishlist.length;

  return (
    <div className="flex items-center gap-0.5">
      <Link
        href="/shop/wishlist"
        aria-label={
          saved > 0 ? `Wishlist, ${saved} saved` : "Wishlist, empty"
        }
        className="relative grid size-8 place-items-center rounded-[3px] text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
        {saved > 0 && <Count n={saved} />}
      </Link>

      <Link
        href="/shop/cart"
        aria-label={
          items > 0
            ? `Cart, ${items} ${items === 1 ? "item" : "items"}`
            : "Cart, empty"
        }
        className="relative grid size-8 place-items-center rounded-[3px] text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M3 4h2.2l2 11.2a1.8 1.8 0 0 0 1.8 1.5h7.9a1.8 1.8 0 0 0 1.8-1.4L20.5 8H6.2" />
          <circle cx="9.5" cy="20" r="1.3" />
          <circle cx="17" cy="20" r="1.3" />
        </svg>
        {items > 0 && <Count n={items} />}
      </Link>
    </div>
  );
}

function Count({ n }: { n: number }) {
  return (
    <span
      aria-hidden
      className="absolute -top-0.5 -right-0.5 grid min-w-[15px] place-items-center rounded-full bg-accent px-1 text-[10px] leading-[15px] font-semibold text-accent-foreground tabular-nums"
    >
      {n > 99 ? "99+" : n}
    </span>
  );
}
