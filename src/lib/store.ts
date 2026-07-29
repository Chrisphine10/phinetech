"use client";

import { useSyncExternalStore } from "react";

/**
 * Cart and wishlist state.
 *
 * Deliberately a small module-level store read through useSyncExternalStore
 * rather than React context:
 *
 *   - The source of truth is localStorage, which is external to React. Mirroring
 *     it into state via an effect is what React 19 lints against, and it also
 *     causes a cascading render on every mount.
 *   - useSyncExternalStore gives correct SSR behaviour for free: the server
 *     snapshot is empty, so markup matches on hydration and the real basket
 *     appears immediately afterwards without a mismatch warning.
 *
 * getSnapshot MUST return a stable reference while nothing has changed, or
 * React re-renders forever. Every mutation therefore replaces `state` with a
 * new object exactly once, and getSnapshot just returns it.
 */

const KEY = "phinetech-shop-v1";

export type CartLine = { slug: string; qty: number };

export type ShopState = {
  cart: CartLine[];
  wishlist: string[];
};

const EMPTY: ShopState = { cart: [], wishlist: [] };

let state: ShopState = EMPTY;
const listeners = new Set<() => void>();

function read(): ShopState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<ShopState>;
    return {
      cart: Array.isArray(parsed.cart)
        ? parsed.cart.filter(
            (l): l is CartLine =>
              !!l && typeof l.slug === "string" && Number.isFinite(l.qty),
          )
        : [],
      wishlist: Array.isArray(parsed.wishlist)
        ? parsed.wishlist.filter((s): s is string => typeof s === "string")
        : [],
    };
  } catch {
    // Corrupt or unavailable storage should not take the shop down.
    return EMPTY;
  }
}

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Private browsing or a full quota — the basket still works for this
    // page view, it just will not survive a reload.
  }
}

function commit(next: ShopState) {
  state = next;
  persist();
  for (const l of listeners) l();
}

// Hydrate once on the client. Guarded because client components are also
// rendered on the server, where localStorage does not exist.
if (typeof window !== "undefined") {
  state = read();
  window.addEventListener("storage", (e) => {
    if (e.key !== KEY) return;
    // Another tab changed the basket — adopt it rather than fight over it.
    state = read();
    for (const l of listeners) l();
  });
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

const getSnapshot = () => state;
const getServerSnapshot = () => EMPTY;

export function useShop(): ShopState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/* ------------------------------- mutations ------------------------------- */

export function addToCart(slug: string, qty = 1) {
  const existing = state.cart.find((l) => l.slug === slug);
  const cart = existing
    ? state.cart.map((l) =>
        l.slug === slug ? { ...l, qty: clampQty(l.qty + qty) } : l,
      )
    : [...state.cart, { slug, qty: clampQty(qty) }];
  commit({ ...state, cart });
}

export function setQty(slug: string, qty: number) {
  if (qty <= 0) return removeFromCart(slug);
  commit({
    ...state,
    cart: state.cart.map((l) =>
      l.slug === slug ? { ...l, qty: clampQty(qty) } : l,
    ),
  });
}

export function removeFromCart(slug: string) {
  commit({ ...state, cart: state.cart.filter((l) => l.slug !== slug) });
}

export function clearCart() {
  commit({ ...state, cart: [] });
}

export function toggleWishlist(slug: string) {
  const inList = state.wishlist.includes(slug);
  commit({
    ...state,
    wishlist: inList
      ? state.wishlist.filter((s) => s !== slug)
      : [...state.wishlist, slug],
  });
}

export function removeFromWishlist(slug: string) {
  commit({ ...state, wishlist: state.wishlist.filter((s) => s !== slug) });
}

/** Moves an item from the wishlist into the cart in one step. */
export function moveToCart(slug: string) {
  const wishlist = state.wishlist.filter((s) => s !== slug);
  const existing = state.cart.find((l) => l.slug === slug);
  const cart = existing
    ? state.cart.map((l) =>
        l.slug === slug ? { ...l, qty: clampQty(l.qty + 1) } : l,
      )
    : [...state.cart, { slug, qty: 1 }];
  commit({ cart, wishlist });
}

/* -------------------------------- helpers -------------------------------- */

// Guards against a pasted or fat-fingered quantity becoming an order for 90,000.
function clampQty(n: number) {
  return Math.max(1, Math.min(999, Math.round(n)));
}

export function cartCount(s: ShopState) {
  return s.cart.reduce((n, l) => n + l.qty, 0);
}
