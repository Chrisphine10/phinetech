import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
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
          {products.map((product) => (
            <article
              key={product.slug}
              className="flex flex-col rounded-[8px] border border-line bg-surface p-6 transition-colors hover:border-line-strong"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
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
                </div>
                <span className="shrink-0 rounded-[3px] border border-line px-2 py-0.5 text-xs text-muted-foreground">
                  {product.status}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
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
                <Link
                  href={`/products/${product.slug}`}
                  className="rounded-[3px] font-medium transition-colors hover:text-muted-foreground"
                >
                  Details →
                </Link>
                {product.href && (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[3px] font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {product.hrefLabel} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
