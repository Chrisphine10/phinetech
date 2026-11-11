import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Bento, Cell } from "@/components/bento";
import { ProductLogo } from "@/components/product-logo";
import { ProductShot } from "@/components/product-shot";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { products, projects, imagery } from "@/lib/site";

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
          {products.map((product, i) => {
            const photo = imagery.projects[product.slug];
            // The first product leads as a wide panel with the photo beside
            // the copy; the rest stack the photo on top.
            const lead = i === 0;
            return (
              <Cell
                key={product.slug}
                href={`/products/${product.slug}`}
                delay={(i % 2) * 90}
                flush
                className={`min-h-[420px] ${
                  lead
                    ? "lg:col-span-8 lg:flex-row"
                    : i === 1
                      ? "lg:col-span-4"
                      : "sm:col-span-6"
                }`}
              >
                {photo && (
                  <ProductShot
                    photo={photo}
                    priority={i < 2}
                    label={
                      <>
                        P-{pad(i + 1)} / <b>{product.category}</b>
                      </>
                    }
                    tag={
                      <>
                        <span className="signal" />
                        {product.status}
                      </>
                    }
                    className={lead ? "lead-shot" : ""}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                )}
                <div className="cell-body">
                  <ProductLogo product={product} height={44} />
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
                </div>
              </Cell>
            );
          })}

          <Cell
            variant="grid"
            className="lg:col-span-12"
            hud={{
              tl: <>Schematic</>,
              tr: <>{pad(products.length)} products / one foundation</>,
            }}
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
