"use client";

import Link from "next/link";
import { useState } from "react";
import { ShopIcon } from "@/components/shop-icon";
import { getShopItem, formatPrice } from "@/lib/shop";
import { site } from "@/lib/site";
import {
  useShop,
  setQty,
  removeFromCart,
  clearCart,
  toggleWishlist,
} from "@/lib/store";

/**
 * Cart, which is an enquiry basket rather than a checkout.
 *
 * There is no payment integration and prices are quoted rather than fixed, so
 * pretending to take payment would be dishonest. The cart instead composes a
 * structured enquiry — the same approach as the contact form, and the same
 * upgrade path (post to a route handler) if ordering is ever automated.
 */
export function CartView() {
  const { cart } = useShop();
  const [sent, setSent] = useState(false);

  // A saved basket can outlive a catalogue change; drop anything that no
  // longer exists rather than rendering a broken row.
  const lines = cart
    .map((l) => ({ line: l, item: getShopItem(l.slug) }))
    .filter((x): x is { line: typeof x.line; item: NonNullable<typeof x.item> } =>
      Boolean(x.item),
    );

  const stale = cart.length - lines.length;
  const totalUnits = lines.reduce((n, x) => n + x.line.qty, 0);
  const anyPriced = lines.some((x) => x.item.price !== undefined);

  function sendEnquiry() {
    const body = [
      "I would like a quote for the following:",
      "",
      ...lines.map(
        (x) => `- ${x.line.qty} x ${x.item.name} (${x.item.category})`,
      ),
      "",
      "Delivery location:",
      "Preferred timeline:",
      "Anything else we should know:",
      "",
    ].join("\n");

    // location.assign rather than assigning location.href: React 19 lints
    // against mutating a value defined outside the component, and the method
    // form says "navigate" more clearly anyway.
    window.location.assign(
      `mailto:${site.contact.sales}?subject=${encodeURIComponent(
        `Quote request — ${totalUnits} item${totalUnits === 1 ? "" : "s"}`,
      )}&body=${encodeURIComponent(body)}`,
    );
    setSent(true);
  }

  if (lines.length === 0) {
    return (
      <div className="rounded-[8px] border border-line bg-surface-muted px-8 py-16 text-center">
        <p className="text-lg font-medium">Your cart is empty</p>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
          Add hardware or a packaged service and we will come back with a
          quote. Nothing is charged at any point here.
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
    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
      <div>
        {stale > 0 && (
          <p className="mb-5 rounded-[3px] border border-line bg-surface-muted px-4 py-3 text-sm text-muted-foreground">
            {stale} saved {stale === 1 ? "item is" : "items are"} no longer in
            the catalogue and {stale === 1 ? "has" : "have"} been left out.
          </p>
        )}

        <ul className="divide-y divide-[var(--border)] border-y border-line">
          {lines.map(({ line, item }) => (
            <li key={item.slug} className="flex gap-4 py-5">
              <span className="size-11 shrink-0 text-accent">
                <ShopIcon slug={item.slug} />
              </span>

              <div className="flex-1">
                <h2 className="font-semibold tracking-tight">
                  <Link href={`/shop/${item.slug}`} className="rounded-[3px]">
                    {item.name}
                  </Link>
                </h2>
                <p className="mt-0.5 text-xs text-subtle-foreground">
                  {item.category}
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {formatPrice(item)}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <div className="flex items-center rounded-[3px] border border-line">
                    <button
                      type="button"
                      onClick={() => setQty(item.slug, line.qty - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="grid size-8 place-items-center text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
                    >
                      −
                    </button>
                    <span
                      aria-live="polite"
                      className="min-w-9 text-center text-sm tabular-nums"
                    >
                      {line.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(item.slug, line.qty + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="grid size-8 place-items-center text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      toggleWishlist(item.slug);
                      removeFromCart(item.slug);
                    }}
                    className="rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Save for later
                  </button>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.slug)}
                    className="rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex justify-between">
          <Link
            href="/shop"
            className="rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Continue browsing
          </Link>
          <button
            type="button"
            onClick={clearCart}
            className="rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            Clear cart
          </button>
        </div>
      </div>

      {/* summary */}
      <aside className="rounded-[8px] border border-line bg-surface-muted p-6 lg:sticky lg:top-24 lg:self-start">
        <h2 className="font-semibold tracking-tight">Summary</h2>

        <dl className="mt-4 space-y-2 border-b border-line pb-4 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Lines</dt>
            <dd className="tabular-nums">{lines.length}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Total units</dt>
            <dd className="tabular-nums">{totalUnits}</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm text-muted-foreground">
          {anyPriced
            ? "Listed prices are indicative. Your quote confirms final pricing, availability and lead time."
            : "Pricing depends on specification, quantity and current supply, so we quote rather than charge."}
        </p>

        <button
          type="button"
          onClick={sendEnquiry}
          className="mt-6 w-full rounded-[3px] bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          Request a quote
        </button>

        <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
          {sent
            ? "Your email client should have opened with the cart attached. If it did not, email us directly."
            : "This opens your email client with the cart itemised, ready to send."}
        </p>

        <p className="mt-4 border-t border-line pt-4 text-xs text-muted-foreground">
          Or call{" "}
          <a
            href={`tel:${site.contact.phoneTel}`}
            className="rounded-[3px] font-medium text-foreground underline underline-offset-4"
          >
            {site.contact.phone}
          </a>
        </p>
      </aside>
    </div>
  );
}
