import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ShopIcon } from "@/components/shop-icon";
import { ShopActions } from "@/components/shop-actions";
import { shopItems, getShopItem, formatPrice } from "@/lib/shop";
import { site } from "@/lib/site";

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

export default async function ShopItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getShopItem(slug);
  if (!item) notFound();

  const related = shopItems
    .filter((i) => i.slug !== item.slug && i.category === item.category)
    .slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={item.category} title={item.name} lead={item.summary}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-[3px] border border-line px-2.5 py-1 text-xs text-muted-foreground">
            {item.kind === "service" ? "Service" : "Hardware"}
          </span>
          {item.leadTime && (
            <span className="rounded-[3px] border border-line px-2.5 py-1 text-xs text-muted-foreground">
              {item.leadTime}
            </span>
          )}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* description */}
          <div>
            <Reveal>
              <div className="grid place-items-center rounded-[8px] border border-line bg-surface-muted py-12">
                <span className="anim-float size-28 text-accent sm:size-36">
                  <ShopIcon slug={item.slug} />
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-10 text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
                Overview
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty">
                {item.description}
              </p>
            </Reveal>

            {item.specs && (
              <Reveal delay={140}>
                <h2 className="mt-10 text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
                  Specification
                </h2>
                <dl className="mt-4 divide-y divide-[var(--border)] border-y border-line">
                  {item.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6"
                    >
                      <dt className="text-sm text-muted-foreground sm:w-44 sm:shrink-0">
                        {s.label}
                      </dt>
                      <dd className="text-sm">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-subtle-foreground">
                  Specifications are indicative. Exact make and model confirmed
                  on quotation.
                </p>
              </Reveal>
            )}
          </div>

          {/* buy box */}
          <Reveal as="section" delay={80}>
            <aside className="rounded-[8px] border border-line bg-surface p-6 lg:sticky lg:top-24">
              <p className="text-2xl font-bold tracking-tight">
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

              <ul className="mt-6 space-y-2 border-t border-line pt-5">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2.5 text-sm text-muted-foreground"
                  >
                    <span aria-hidden className="text-accent">
                      —
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-line pt-5 text-sm text-muted-foreground">
                Prefer to talk it through?{" "}
                <a
                  href={`tel:${site.contact.phoneTel}`}
                  className="rounded-[3px] font-medium text-foreground underline underline-offset-4"
                >
                  {site.contact.phone}
                </a>
              </p>
            </aside>
          </Reveal>
        </div>

        {/* related */}
        {related.length > 0 && (
          <section className="mt-20 border-t border-line pt-14">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight">
                Others in {item.category.toLowerCase()}
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {related.map((r, i) => (
                <Reveal as="li" key={r.slug} delay={i * 70}>
                  <Link
                    href={`/shop/${r.slug}`}
                    className="tilt group flex h-full flex-col rounded-[8px] border border-line bg-surface p-5 hover:border-line-strong"
                  >
                    <span className="size-9 text-accent">
                      <ShopIcon slug={r.slug} />
                    </span>
                    <h3 className="mt-4 font-semibold tracking-tight">
                      {r.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {r.summary}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-14 border-t border-line pt-8">
          <Link
            href="/shop"
            className="rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to shop
          </Link>
        </section>
      </div>
    </>
  );
}
