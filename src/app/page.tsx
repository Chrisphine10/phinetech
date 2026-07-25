import Link from "next/link";
import { site, products, partners, stats, principles } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* --------------------------------- hero -------------------------------- */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
            {site.founded}
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl">
            {site.tagline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {site.description}
          </p>

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
        </div>
      </section>

      {/* -------------------------------- stats -------------------------------- */}
      <section className="border-b border-line bg-surface-muted">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 py-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <div className="text-3xl font-bold tracking-tight tabular-nums">
                  {s.value}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ------------------------------- products ------------------------------ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                What we build
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground text-pretty">
                Five products in production, each solving a specific operational
                problem rather than a general one.
              </p>
            </div>
            <Link
              href="/products"
              className="rounded-[3px] text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              All products →
            </Link>
          </div>

          <ul className="mt-10 divide-y divide-[var(--border)] border-y border-line">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex flex-col gap-2 px-2 py-5 transition-colors hover:bg-surface-hover sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <div className="sm:w-56 sm:shrink-0">
                    <span className="font-semibold tracking-tight">
                      {product.name}
                    </span>
                    <span className="mt-0.5 block text-xs text-subtle-foreground">
                      {product.category}
                    </span>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.summary}
                  </p>
                  <span
                    aria-hidden
                    className="hidden text-muted-foreground transition-transform group-hover:translate-x-0.5 sm:block"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------- partners ------------------------------ */}
      <section className="border-b border-line bg-surface-muted">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Development partner to
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground text-pretty">
            Organisations that need engineering capacity without building a
            full in-house team.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-[8px] border border-line bg-surface p-5"
              >
                <h3 className="font-semibold tracking-tight">{partner.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {partner.body}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/partners"
            className="mt-8 inline-block rounded-[3px] text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About our partnerships →
          </Link>
        </div>
      </section>

      {/* ------------------------------ principles ----------------------------- */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How we work
          </h2>

          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title}>
                <span className="font-mono text-xs text-subtle-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- cta --------------------------------- */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <div className="rounded-[8px] border border-line bg-surface-muted px-8 py-14 text-center">
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
      </section>
    </>
  );
}
