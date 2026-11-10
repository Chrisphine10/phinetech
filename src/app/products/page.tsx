import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Bento, Cell } from "@/components/bento";
import { ProductLogo } from "@/components/product-logo";
import { ProductGlyph } from "@/components/product-glyph";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { products, projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "SACCO management, VSLA digitisation, school management, eTIMS-compliant point of sale, and Hodi — the five systems PhineTech builds and maintains.",
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Five systems, each built for a specific job"
        lead="We do not sell one platform bent to fit every problem. Each of these was built for a particular kind of organisation and the way it actually operates."
      >
        <Link href="/projects" className="hud hover:underline">
          <b>
            These are our own products. See all {projects.length} projects →
          </b>
        </Link>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 lg:pt-3.5">
        <Bento>
          {products.map((product, i) => (
            <Cell
              key={product.slug}
              href={`/products/${product.slug}`}
              delay={(i % 2) * 90}
              className={`min-h-[380px] ${i === 0 ? "lg:col-span-8" : i === 1 ? "lg:col-span-4" : "sm:col-span-6 lg:col-span-4"}`}
              hud={{
                tl: <>{product.category}</>,
                tr: (
                  <span className="hud-chip">
                    <span className="signal" />
                    {product.status}
                  </span>
                ),
              }}
            >
              {/* drawn glyph, large and faint, behind the copy */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-6 -z-10 size-56 text-line-strong opacity-70"
              >
                <ProductGlyph slug={product.slug} />
              </span>

              <div className="mt-6">
                <ProductLogo product={product} height={46} />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight">
                {product.name}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {product.summary}
              </p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {product.highlights.map((h) => (
                  <li key={h} className="hud-chip whitespace-normal">
                    {h}
                  </li>
                ))}
              </ul>
              <span className="hud mt-4 block">
                <b>Details →</b>
                {product.hrefLabel && <> / {product.hrefLabel}</>}
              </span>
            </Cell>
          ))}

          <Cell
            variant="grid"
            className="lg:col-span-12"
            hud={{ tl: <>Schematic</>, tr: <>{pad(products.length)} products / one foundation</> }}
          >
            <div className="mt-6">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                One foundation underneath
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
                The products differ, but the hard parts do not: a ledger that
                balances, access control that holds, an audit trail that
                survives scrutiny, and behaviour that degrades gracefully when
                the network does.
              </p>
            </div>
            <div className="mt-8 overflow-x-auto">
              <div className="min-w-[680px]">
                <ArchitectureDiagram />
              </div>
            </div>
          </Cell>
        </Bento>
      </div>
    </>
  );
}
