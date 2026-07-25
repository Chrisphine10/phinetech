"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "phinetech-theme";

/* --------------------------------------------------------------------------
   The active theme lives outside React — it is an attribute on <html>, set
   before paint by the inline script in the root layout. So we subscribe to it
   with useSyncExternalStore rather than mirroring it into state via an effect.
   (React 19 lints against calling setState synchronously inside an effect, and
   that pattern would also cause a cascading render on every mount.)
   -------------------------------------------------------------------------- */

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  // Keep other tabs in sync.
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Nothing is known about the visitor's preference during SSR. Returning null
// renders a neutral placeholder, so the server and client markup agree and
// hydration stays clean.
function getServerSnapshot(): Theme | null {
  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing or blocked storage — the attribute still applies for
      // this page view, it just will not persist.
    }
    emit();
  }

  // Same-sized placeholder before hydration so the header does not shift.
  if (theme === null) {
    return <div aria-hidden className="size-9 rounded-lg" />;
  }

  const goingDark = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={goingDark ? "Switch to dark theme" : "Switch to light theme"}
      className="grid size-9 place-items-center rounded-lg border border-border-subtle bg-surface text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
    >
      {goingDark ? (
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  );
}
