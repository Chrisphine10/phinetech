import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ProductGlyph } from "@/components/product-glyph";
import { products, getProduct, site } from "@/lib/site";

// Next 15+ passes route params as a Promise — they must be awaited.
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };

  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      title: `${product.name} · ${site.name}`,
      description: product.summary,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const index = products.findIndex((p) => p.slug === slug);
  const next = products[(index + 1) % products.length];

  return (
    <>
      <PageHeader
        eyebrow={product.category}
        title={product.name}
        lead={product.summary}
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-[3px] border border-line px-2.5 py-1 text-xs text-muted-foreground">
            {product.status}
          </span>
          {product.href && (
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[3px] border border-line-strong px-3 py-1.5 font-mono text-xs transition-colors hover:bg-surface-hover"
            >
              {product.hrefLabel} ↗
            </a>
          )}
          {product.playStore && (
            <span className="rounded-[3px] border border-line px-2.5 py-1 text-xs text-muted-foreground">
              Android app on Google Play
            </span>
          )}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-5 py-14">
        {/* overview + glyph */}
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
                Overview
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="scene-3d mt-10 grid place-items-center rounded-[8px] border border-line bg-surface-muted py-10">
                <div className="anim-float size-40 text-foreground opacity-90 sm:size-52">
                  <ProductGlyph slug={product.slug} />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal as="section" delay={100}>
            <aside className="rounded-[8px] border border-line bg-surface-muted p-5">
              <h2 className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
                Who it is for
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.audience}
              </p>

              <h2 className="mt-6 text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
                In short
              </h2>
              <ul className="mt-3 space-y-2">
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
            </aside>
          </Reveal>
        </div>

        {/* capabilities */}
        <section className="mt-16 border-t border-line pt-14">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight">Capabilities</h2>
          </Reveal>

          <dl className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {product.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <dt className="font-semibold tracking-tight">
                  <span className="mr-2 font-mono text-xs text-subtle-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </dd>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* footer nav */}
        <section className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/contact"
            className="rounded-[3px] bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Ask about {product.name}
          </Link>

          <Link
            href={`/products/${next.slug}`}
            className="group flex items-center gap-3 rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="size-8 opacity-70 transition-opacity group-hover:opacity-100">
              <ProductGlyph slug={next.slug} />
            </span>
            Next: {next.name} →
          </Link>
        </section>
      </div>
    </>
  );
}
