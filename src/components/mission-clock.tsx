"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Mission elapsed time, counting up from when the page opened. Rendered as
 * 00:00:00 on the server and on first paint so hydration matches.
 */
export function MissionClock({ className = "" }: { className?: string }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = window.setInterval(
      () => setSeconds(Math.floor((Date.now() - start) / 1000)),
      1000,
    );
    return () => window.clearInterval(id);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return (
    <span className={`hud-chip ${className}`} aria-hidden>
      <span className="signal" />
      {pad(h)}:{pad(m)}:{pad(s)}
    </span>
  );
}

/** Nairobi local time, for the header read-out. */
export function LocalTime({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Nairobi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
    const tick = () => setNow(format());
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 20000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {now ?? "--:--"} EAT
    </span>
  );
}
