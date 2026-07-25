import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site, services, stats, differentiators } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* ------------------------------- hero ------------------------------- */}
        <section className="relative overflow-hidden">
          {/* Decorative brand wash. Purely presentational. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60rem 30rem at 15% -10%, var(--primary-subtle), transparent 70%)",
            }}
          />

          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              <span className="size-1.5 rounded-full bg-accent" />
              KRA eTIMS ready
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Technology that keeps{" "}
              <span className="text-primary">Kenyan business</span> moving
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {site.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Request a quote
              </a>
              <a
                href="#services"
                className="rounded-xl border border-border-strong bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted"
              >
                Browse services
              </a>
            </div>
          </div>
        </section>

        {/* ------------------------------ stats ------------------------------- */}
        <section className="border-y border-border-subtle bg-surface-muted">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-10 sm:gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="py-3">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="text-4xl font-black tracking-tight text-foreground tabular-nums">
                    {s.value}
                  </span>
                  <span className="text-2xl font-black text-accent">{s.suffix}</span>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ----------------------------- services ----------------------------- */}
        <section id="services" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              What we do
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
              Supply, installation and support across the hardware Kenyan
              businesses actually run on.
            </p>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li
                  key={service.title}
                  className="group rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-primary"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary-subtle">
                    <span className="size-2.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-surface-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* -------------------------------- why ------------------------------- */}
        <section
          id="why"
          className="scroll-mt-20 border-t border-border-subtle bg-surface-muted"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Why PhineTech
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {differentiators.map((d, i) => (
                <div key={d.title}>
                  <span className="font-mono text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------ contact ----------------------------- */}
        <section id="contact" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <div
              className="rounded-3xl px-8 py-14 text-center sm:px-14"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brand-800), var(--color-brand-950))",
              }}
            >
              <h2 className="text-3xl font-black tracking-tight text-balance text-white sm:text-4xl">
                Tell us what you need
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-white/70">
                Send through your requirements and we will come back with a
                specification and a price — no obligation.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  {site.contact.email}
                </a>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {site.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
