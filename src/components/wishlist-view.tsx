"use client";

import Link from "next/link";
import { ShopCard } from "@/components/shop-card";
import { getShopItem } from "@/lib/shop";
import { useShop, moveToCart, removeFromWishlist } from "@/lib/store";

/**
 * Saved items.
 *
 * Reuses ShopCard so a saved item looks identical to how it looked in the
 * catalogue, and adds the two actions that only make sense here: move the item
 * into the cart, or drop it.
 */
export function WishlistView() {
  const { wishlist } = useShop();

  const items = wishlist
    .map((slug) => getShopItem(slug))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const stale = wishlist.length - items.length;

  if (items.length === 0) {
    return (
      <div className="cell cell--muted cell--grid items-center px-8 py-16 text-center">
        <p className="text-lg font-medium">Nothing saved yet</p>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
          Use the heart on any item to keep it here while you decide. Saved
          items stay in this browser.
        </p>
        <Link
          href="/shop"
          className="mt-7 inline-block rounded-[3px] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <>
      {stale > 0 && (
        <p className="mb-6 rounded-[3px] border border-line bg-surface-muted px-4 py-3 text-sm text-muted-foreground">
          {stale} saved {stale === 1 ? "item is" : "items are"} no longer in the
          catalogue and {stale === 1 ? "has" : "have"} been left out.
        </p>
      )}

      <ul className="bento">
        {items.map((item) => (
          <li key={item.slug} className="col-span-12 flex flex-col sm:col-span-6 lg:col-span-4">
            <ShopCard item={item} />
            <div className="mt-2 flex items-center justify-between px-1">
              <button
                type="button"
                onClick={() => moveToCart(item.slug)}
                className="rounded-[3px] text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Move to cart →
              </button>
              <button
                type="button"
                onClick={() => removeFromWishlist(item.slug)}
                className="rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t border-line pt-6">
        <Link
          href="/shop"
          className="rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Continue browsing
        </Link>
      </div>
    </>
  );
}
