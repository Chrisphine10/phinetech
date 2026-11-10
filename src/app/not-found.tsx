import Link from "next/link";
import { Bento, Cell, Blueprint, Route } from "@/components/bento";
import { ContourField } from "@/components/drops-client";
import { nav, imagery } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 sm:pt-5">
      <Bento>
        <Cell
          className="min-h-[420px] lg:col-span-8"
          hud={{
            tl: (
              <>
                Signal: <b>lost</b>
              </>
            ),
            tr: <span className="hud-chip">Error 404</span>,
            bl: <Route from="Here" to="Nowhere" />,
          }}
        >
          <ContourField opacity={0.4} />
          <div className="relative mt-auto pt-8">
            <p className="chrome text-[96px] sm:text-[140px]">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              This page does not exist
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              The link may be out of date, or the page may have moved.
            </p>
            <Link
              href="/"
              className="mt-7 inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Back home
            </Link>
          </div>
        </Cell>

        <Cell
          className="min-h-[220px] lg:col-span-4"
          photo={imagery.earth}
          hud={{ tl: <>Off the map</> }}
        >
          <Blueprint className="opacity-30" />
        </Cell>

        {nav.map((item, i) => (
          <Cell
            key={item.href}
            href={item.href}
            delay={i * 50}
            className="col-span-6 min-h-[110px] sm:col-span-4 lg:col-span-2"
            hud={{ tl: <>0{i + 1}</>, tr: <>→</> }}
          >
            <p className="mt-auto font-semibold tracking-tight">{item.label}</p>
          </Cell>
        ))}
      </Bento>
    </div>
  );
}
