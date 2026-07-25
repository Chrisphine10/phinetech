import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ProductGlyph } from "@/components/product-glyph";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "SACCO management, VSLA digitisation, school management, eTIMS-compliant point of sale, and Hodi — the five systems PhineTech builds and maintains.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Five systems, each built for a specific job"
        lead="We do not sell one platform bent to fit every problem. Each of these was built for a particular kind of organisation and the way it actually operates."
      />

      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((product, i) => (
            <Reveal as="article" key={product.slug} delay={i * 80}>
              <div className="tilt group relative flex h-full flex-col rounded-[8px] border border-line bg-surface p-6 hover:border-line-strong">
                <div className="flex items-start justify-between gap-4">
                  <div className="size-16 shrink-0 text-foreground opacity-85 transition-opacity group-hover:opacity-100">
                    <ProductGlyph slug={product.slug} />
                  </div>
                  <span className="shrink-0 rounded-[3px] border border-line px-2 py-0.5 text-xs text-muted-foreground">
                    {product.status}
                  </span>
                </div>

                <h2 className="mt-5 text-lg font-semibold tracking-tight">
                  <Link
                    href={`/products/${product.slug}`}
                    className="rounded-[3px] before:absolute before:inset-0"
                  >
                    {product.name}
                  </Link>
                </h2>
                <p className="mt-0.5 text-xs text-subtle-foreground">
                  {product.category}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.summary}
                </p>

                <ul className="mt-5 space-y-1.5">
                  {product.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span aria-hidden className="text-subtle-foreground">
                        —
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4 text-sm">
                  <span className="font-medium">Details →</span>
                  {product.href && (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 rounded-[3px] font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {product.hrefLabel} ↗
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* shared foundation */}
        <section className="mt-20 border-t border-line pt-14">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight">
              One foundation underneath
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
              The products differ, but the hard parts do not: a ledger that
              balances, access control that holds, an audit trail that survives
              scrutiny, and behaviour that degrades gracefully when the network
              does.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[680px]">
                <ArchitectureDiagram />
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
