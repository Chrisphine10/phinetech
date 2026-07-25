import Link from "next/link";
import { HeroScene } from "@/components/hero-scene";
import { Reveal } from "@/components/reveal";
import { StatCounter } from "@/components/stat-counter";
import { ProductGlyph } from "@/components/product-glyph";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { PartnerLogo } from "@/components/partner-logo";
import { Marquee } from "@/components/marquee";
import {
  site,
  products,
  partners,
  stats,
  principles,
  domainStrip,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* --------------------------------- hero -------------------------------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="grid-bg anim-grid pointer-events-none absolute inset-0 opacity-70"
        />

        <div className="relative mx-auto grid max-w-5xl items-center gap-8 px-5 pt-16 pb-16 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:pt-24 lg:pb-20">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
                {site.founded}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-4 max-w-2xl text-4xl leading-[1.06] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {site.tagline}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
                {site.description}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                <Link
                  href="/products"
                  className="rounded-[3px] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  Explore products
                </Link>
                <Link
                  href="/contact"
                  className="rounded-[3px] border border-line-strong px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
                >
                  Talk to us
                </Link>
              </div>
            </Reveal>
          </div>

          <HeroScene />
        </div>

        <div className="relative border-t border-line py-4">
          <Marquee items={domainStrip} />
        </div>
      </section>

      {/* -------------------------------- stats -------------------------------- */}
      <section className="border-b border-line bg-surface-muted">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <div className="text-4xl font-bold tracking-tight">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* ------------------------------- products ------------------------------ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  What we build
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground text-pretty">
                  Five products in production, each solving a specific
                  operational problem rather than a general one.
                </p>
              </div>
              <Link
                href="/products"
                className="rounded-[3px] text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                All products →
              </Link>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal as="li" key={product.slug} delay={i * 70}>
                <Link
                  href={`/products/${product.slug}`}
                  className="tilt group flex h-full flex-col rounded-[8px] border border-line bg-surface p-5 hover:border-line-strong"
                >
                  <div className="size-14 text-foreground opacity-80 transition-opacity group-hover:opacity-100">
                    <ProductGlyph slug={product.slug} />
                  </div>
                  <h3 className="mt-4 font-semibold tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-subtle-foreground">
                    {product.category}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.summary}
                  </p>
                  <span
                    aria-hidden
                    className="mt-4 text-sm text-muted-foreground transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------- architecture ---------------------------- */}
      <section className="relative overflow-hidden border-b border-line bg-surface-muted">
        <div
          aria-hidden
          className="grid-bg pointer-events-none absolute inset-0 opacity-50"
        />
        <div className="relative mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              How it fits together
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground text-pretty">
              Different products, one engineering foundation — and the same
              external rails every Kenyan business system has to speak to.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[680px]">
                <ArchitectureDiagram />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- partners ------------------------------ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Development partner to
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground text-pretty">
              Organisations that need engineering capacity without building a
              full in-house team.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {partners.map((partner, i) => (
              <Reveal key={partner.slug} delay={i * 90}>
                <div className="tilt flex h-full flex-col rounded-[8px] border border-line bg-surface p-5">
                  <PartnerLogo partner={partner} />
                  <h3 className="mt-4 font-semibold tracking-tight">
                    {partner.name}
                  </h3>
                  {partner.fullName && (
                    <p className="mt-0.5 text-xs text-subtle-foreground">
                      {partner.fullName}
                    </p>
                  )}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {partner.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <Link
              href="/partners"
              className="mt-8 inline-block rounded-[3px] text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About our partnerships →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ principles ----------------------------- */}
      <section className="border-b border-line bg-surface-muted">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              How we work
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <span className="font-mono text-xs text-subtle-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- cta --------------------------------- */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[8px] border border-line bg-surface-muted px-8 py-14 text-center">
              <div
                aria-hidden
                className="grid-bg pointer-events-none absolute inset-0 opacity-60"
              />
              <div className="relative">
                <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                  Have a system that needs building — or fixing?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
                  Tell us what you are trying to do. We will tell you honestly
                  whether we are the right people for it.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-block rounded-[3px] bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  Start a conversation
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
