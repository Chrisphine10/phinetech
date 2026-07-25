import Link from "next/link";
import { nav } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-28 sm:py-36">
      <p className="font-mono text-xs tracking-wider text-subtle-foreground uppercase">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        This page does not exist
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        The link may be out of date, or the page may have moved.
      </p>

      <div className="mt-9 flex flex-wrap gap-2.5">
        <Link
          href="/"
          className="rounded-[3px] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Back home
        </Link>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-[3px] border border-line-strong px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
