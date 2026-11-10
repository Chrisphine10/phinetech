import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Bento, Cell, Blueprint } from "@/components/bento";
import { ShopIcon } from "@/components/shop-icon";
import { ShopActions } from "@/components/shop-actions";
import { shopItems, getShopItem, formatPrice } from "@/lib/shop";
import { site, imagery } from "@/lib/site";

// Next 15+ passes route params as a Promise — they must be awaited.
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return shopItems.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getShopItem(slug);
  if (!item) return { title: "Not found" };
  return {
    title: item.name,
    description: item.summary,
    openGraph: { title: `${item.name} · ${site.name}`, description: item.summary },
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function ShopItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getShopItem(slug);
  if (!item) notFound();

  const related = shopItems
    .filter((i) => i.slug !== item.slug && i.category === item.category)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={item.category}
        title={item.name}
        lead={item.summary}
        photo={imagery.headers.shop}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="hud-chip">
            {item.kind === "service" ? "Service" : "Hardware"}
          </span>
          {item.leadTime && <span className="hud-chip">{item.leadTime}</span>}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 lg:pt-3.5">
        <Bento>
          {/* the item */}
          <Cell
            variant="grid"
            className="min-h-[340px] lg:col-span-4"
            hud={{ tl: <>Item</>, tr: <>{item.slug}</> }}
          >
            <Blueprint className="text-line-strong opacity-60" />
            <div className="grid flex-1 place-items-center py-6">
              <span className="anim-float size-32 text-accent sm:size-40">
                <ShopIcon slug={item.slug} />
              </span>
            </div>
          </Cell>

          <Cell
            className="min-h-[340px] lg:col-span-4"
            hud={{ tl: <>Overview</> }}
          >
            <p className="mt-6 text-lg leading-relaxed text-pretty">
              {item.description}
            </p>
          </Cell>

          {/* buy box */}
          <Cell
            variant="paper"
            className="min-h-[340px] lg:col-span-4"
            hud={{ tl: <>Quote</>, tr: <>No charge here</> }}
          >
            <p className="font-display mt-6 text-3xl font-bold tracking-tight">
              {formatPrice(item)}
            </p>
            {item.price === undefined && (
              <p className="mt-1.5 text-sm text-muted-foreground">
                Pricing depends on specification, quantity and current supply.
              </p>
            )}
            <div className="mt-6">
              <ShopActions slug={item.slug} />
            </div>
            <p className="mt-auto pt-6 text-sm text-muted-foreground">
              Prefer to talk it through?{" "}
              <a
                href={`tel:${site.contact.phoneTel}`}
                className="rounded-[3px] font-medium text-foreground underline underline-offset-4"
              >
                {site.contact.phone}
              </a>
            </p>
          </Cell>

          {/* highlights */}
          <Cell
            variant="muted"
            className={`min-h-[220px] ${item.specs ? "lg:col-span-4" : "lg:col-span-12"}`}
            hud={{ tl: <>In short</>, tr: <>{pad(item.highlights.length)} points</> }}
          >
            <ul className="mt-6 space-y-2.5">
              {item.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span aria-hidden className="text-accent">
                    —
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Cell>

          {item.specs && (
            <Cell
              className="min-h-[220px] lg:col-span-8"
              hud={{ tl: <>Specification</>, tr: <>Indicative</> }}
            >
              <dl className="mt-5 divide-y divide-[var(--border)]">
                {item.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6"
                  >
                    <dt className="hud sm:w-44 sm:shrink-0">{s.label}</dt>
                    <dd className="text-sm">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="hud mt-4">
                Exact make and model confirmed on quotation.
              </p>
            </Cell>
          )}

          {/* related */}
          {related.length > 0 && (
            <>
              <Cell
                variant="grid"
                className="min-h-[200px] lg:col-span-3"
                hud={{ tl: <>Related</> }}
              >
                <h2 className="mt-auto text-2xl leading-tight font-bold tracking-tight">
                  Others in {item.category.toLowerCase()}
                </h2>
              </Cell>
              {related.map((r, i) => (
                <Cell
                  key={r.slug}
                  href={`/shop/${r.slug}`}
                  delay={i * 70}
                  className="min-h-[200px] sm:col-span-4 lg:col-span-3"
                  hud={{ tl: <>R-{pad(i + 1)}</> }}
                >
                  <span className="mt-4 size-9 text-accent">
                    <ShopIcon slug={r.slug} />
                  </span>
                  <div className="mt-auto pt-4">
                    <h3 className="font-semibold tracking-tight">{r.name}</h3>
                    <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {r.summary}
                    </p>
                  </div>
                </Cell>
              ))}
            </>
          )}

          <Cell href="/shop" flush className="min-h-0 lg:col-span-12">
            <p className="hud px-6 py-4">
              <b>← Back to shop</b>
            </p>
          </Cell>
        </Bento>
      </div>
    </>
  );
}
