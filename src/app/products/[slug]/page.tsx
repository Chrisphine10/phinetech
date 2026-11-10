import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Bento, Cell, Blueprint } from "@/components/bento";
import { ChromeCta } from "@/components/drops-client";
import { ProductGlyph } from "@/components/product-glyph";
import { ProductLogo } from "@/components/product-logo";
import { products, getProduct, site, imagery } from "@/lib/site";

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

const pad = (n: number) => String(n).padStart(2, "0");

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
        photo={imagery.headers.products}
      >
        <div className="flex flex-wrap items-center gap-2">
          {product.logo && <ProductLogo product={product} height={40} />}
          <span className="hud-chip">
            <span className="signal" />
            {product.status}
          </span>
          {product.href && (
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hud-chip transition-colors hover:bg-surface-hover"
            >
              {product.hrefLabel} ↗
            </a>
          )}
          {product.playStore && (
            <span className="hud-chip">Android app on Google Play</span>
          )}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 lg:pt-3.5">
        <Bento>
          {/* overview */}
          <Cell
            className="min-h-[340px] lg:col-span-5"
            hud={{ tl: <>Overview</>, tr: <>{pad(index + 1)} / {pad(products.length)}</> }}
          >
            <p className="mt-6 text-lg leading-relaxed text-pretty">
              {product.description}
            </p>
          </Cell>

          <Cell
            variant="grid"
            className="min-h-[340px] lg:col-span-3"
            hud={{ tl: <>Mark</> }}
          >
            <Blueprint className="text-line-strong opacity-60" />
            <div className="scene-3d grid flex-1 place-items-center py-4">
              <div className="anim-float size-40 text-foreground opacity-90">
                <ProductGlyph slug={product.slug} />
              </div>
            </div>
          </Cell>

          <Cell
            variant="paper"
            className="min-h-[340px] lg:col-span-4"
            hud={{ tl: <>Who it is for</> }}
          >
            <p className="mt-5 leading-relaxed">{product.audience}</p>
            <p className="hud mt-auto pt-6">In short</p>
            <ul className="mt-3 space-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                  <span aria-hidden className="text-accent">
                    —
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Cell>

          {/* capabilities */}
          <Cell
            variant="muted"
            className="min-h-[150px] lg:col-span-12"
            hud={{ tl: <>Capabilities</>, tr: <>{pad(product.features.length)} modules</> }}
          >
            <h2 className="mt-auto pt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              What it does
            </h2>
          </Cell>

          {product.features.map((f, i) => (
            <Cell
              key={f.title}
              delay={(i % 3) * 70}
              className="min-h-[200px] sm:col-span-6 lg:col-span-4"
              hud={{ tl: <>M-{pad(i + 1)}</> }}
            >
              <div className="mt-auto pt-6">
                <h3 className="font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            </Cell>
          ))}

          {/* next steps */}
          <Cell
            className="min-h-[260px] lg:col-span-8"
            photo={imagery.cta}
            hud={{ tl: <>Channel open</> }}
          >
            <div className="mt-auto">
              <h2 className="max-w-xl text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                Want to see {product.name} against your own use case?
              </h2>
              <div className="mt-5">
                <ChromeCta href="/contact">Ask about {product.name}</ChromeCta>
              </div>
            </div>
          </Cell>

          <Cell
            href={`/products/${next.slug}`}
            variant="grid"
            className="min-h-[260px] lg:col-span-4"
            hud={{ tl: <>Next product</>, tr: <>→</> }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -bottom-6 -z-10 size-48 text-line-strong opacity-80"
            >
              <ProductGlyph slug={next.slug} />
            </span>
            <div className="mt-auto">
              <p className="hud">{next.category}</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight">
                {next.name}
              </h2>
            </div>
          </Cell>
        </Bento>
      </div>
    </>
  );
}
