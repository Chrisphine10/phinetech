import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Bento, Cell } from "@/components/bento";
import { ShopCard } from "@/components/shop-card";
import { shopItems, shopCategories } from "@/lib/shop";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "POS hardware, computing equipment and packaged services from PhineTech — terminals, cash drawers, barcode scanners, receipt printers, desktops and monitors, plus web development and POS deployment.",
};

const pad = (n: number) => String(n).padStart(2, "0");

const steps = [
  {
    t: "Build a cart",
    b: "Add the hardware and services you are considering. Nothing is charged and nothing is committed.",
  },
  {
    t: "Send it to us",
    b: "Your cart becomes an enquiry. We confirm availability, current pricing and lead times.",
  },
  {
    t: "We quote and deliver",
    b: "You get a written quote. Approved orders are delivered, installed and configured.",
  },
];

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
              className="hud-chip transition-colors hover:bg-surface-hover"
            >
              {c}
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="mx-auto max-w-7xl space-y-3 px-3 pt-3 pb-16 sm:px-5 lg:space-y-3.5 lg:pt-3.5">
        {shopCategories.map((category, c) => {
          const items = shopItems.filter((i) => i.category === category);
          if (items.length === 0) return null;

          return (
            <section
              key={category}
              id={slugify(category)}
              aria-label={category}
              className="scroll-mt-24"
            >
              <Bento>
                <Cell
                  variant={c % 2 === 0 ? "paper" : "grid"}
                  className="min-h-[150px] lg:col-span-12"
                  hud={{
                    tl: <>Aisle {pad(c + 1)}</>,
                    tr: (
                      <>
                        {pad(items.length)}{" "}
                        {items.length === 1 ? "item" : "items"}
                      </>
                    ),
                  }}
                >
                  <h2 className="mt-auto pt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                    {category}
                  </h2>
                </Cell>

                {items.map((item) => (
                  <ShopCard
                    key={item.slug}
                    item={item}
                    className="sm:col-span-6 lg:col-span-4"
                  />
                ))}
              </Bento>
            </section>
          );
        })}

        {/* how ordering works */}
        <Bento as="section">
          <Cell
            variant="muted"
            className="min-h-[220px] lg:col-span-3"
            hud={{ tl: <>Process</> }}
          >
            <h2 className="mt-auto text-2xl leading-tight font-bold tracking-tight">
              How ordering works
            </h2>
          </Cell>
          {steps.map((s, i) => (
            <Cell
              key={s.t}
              delay={i * 90}
              className="min-h-[220px] sm:col-span-4 lg:col-span-3"
              hud={{ tl: <>Step {pad(i + 1)}</> }}
            >
              <div className="mt-auto pt-6">
                <h3 className="font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.b}
                </p>
              </div>
            </Cell>
          ))}
          <Cell flush className="min-h-0 lg:col-span-12">
            <p className="px-6 py-4 text-sm text-muted-foreground">
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
          </Cell>
        </Bento>
      </div>
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
