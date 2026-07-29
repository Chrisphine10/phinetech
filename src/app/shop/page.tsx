import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ShopCard } from "@/components/shop-card";
import { shopItems, shopCategories } from "@/lib/shop";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "POS hardware, computing equipment and packaged services from PhineTech — terminals, cash drawers, barcode scanners, receipt printers, desktops and monitors, plus web development and POS deployment.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="Equipment and packaged services"
        lead="Hardware we supply, install and support, alongside services scoped as a fixed piece of work. Add what you need to a cart and we will come back with a quote."
      >
        <nav aria-label="Categories" className="flex flex-wrap gap-2">
          {shopCategories.map((c) => (
            <a
              key={c}
              href={`#${slugify(c)}`}
              className="rounded-[3px] border border-line px-3 py-1.5 text-sm transition-colors hover:bg-surface-hover"
            >
              {c}
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-5 py-14">
        {shopCategories.map((category) => {
          const items = shopItems.filter((i) => i.category === category);
          if (items.length === 0) return null;

          return (
            <section
              key={category}
              id={slugify(category)}
              className="mb-16 scroll-mt-24"
            >
              <Reveal>
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {category}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </span>
                </div>
              </Reveal>

              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => (
                  <Reveal as="li" key={item.slug} delay={i * 60}>
                    <ShopCard item={item} />
                  </Reveal>
                ))}
              </ul>
            </section>
          );
        })}

        {/* how ordering works */}
        <Reveal>
          <section className="rounded-[8px] border border-line bg-surface-muted p-8 sm:p-10">
            <h2 className="text-xl font-bold tracking-tight">
              How ordering works
            </h2>
            <ol className="mt-6 grid gap-6 sm:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Build a cart",
                  b: "Add the hardware and services you are considering. Nothing is charged and nothing is committed.",
                },
                {
                  n: "02",
                  t: "Send it to us",
                  b: "Your cart becomes an enquiry. We confirm availability, current pricing and lead times.",
                },
                {
                  n: "03",
                  t: "We quote and deliver",
                  b: "You get a written quote. Approved orders are delivered, installed and configured.",
                },
              ].map((s) => (
                <li key={s.n}>
                  <span className="font-mono text-xs text-accent">{s.n}</span>
                  <h3 className="mt-2 font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {s.b}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-8 border-t border-line pt-6 text-sm text-muted-foreground">
              Prices depend on specification, quantity and current supply, so
              the shop quotes rather than charges.{" "}
              <Link
                href="/contact"
                className="rounded-[3px] font-medium text-foreground underline underline-offset-4"
              >
                Talk to us
              </Link>{" "}
              if you would rather just describe what you need.
            </p>
          </section>
        </Reveal>
      </div>
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
