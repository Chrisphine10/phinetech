import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icon";
import { services, principles, team, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "PhineTech is a Nairobi technology company building AI automation, software, cloud and security capability for organisations in Africa and beyond.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A technology partner, not a supplier"
        lead="PhineTech builds the systems organisations run their operations on — cooperative ledgers, school records, retail tills, case files, city mobility data. The kind of software where being wrong has consequences."
      />

      <div className="mx-auto max-w-5xl px-5 py-14">
        {/* narrative */}
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
              What we do
            </h2>
            <div className="mt-4 space-y-5 text-lg leading-relaxed text-pretty">
              <p>
                We work in domains where the details matter and the rules are
                local. A SACCO&apos;s dividend calculation, a VSLA&apos;s
                share-out, a school&apos;s fee structure, an eTIMS invoice, a
                city&apos;s congestion data — none of these are served well by
                generic software written elsewhere.
              </p>
              <p>
                So we offer the engineering capability directly — AI automation,
                software development, innovation support, cloud and cyber
                security — and we build our own products where a market is
                underserved. Most of our work is with organisations we have
                worked with for years.
              </p>
              <p>
                Technology also has to be paid for. Where partners need it, we
                help with fundraising and the financial linkages that turn a
                working system into a sustainable one.
              </p>
            </div>
          </div>

          <Reveal as="section">
            <aside className="rounded-[8px] border border-line bg-surface-muted p-5">
              <h2 className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
                At a glance
              </h2>
              <dl className="mt-4 space-y-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-sm text-muted-foreground">{s.label}</dt>
                    <dd className="text-2xl font-bold tracking-tight tabular-nums">
                      {s.value}
                      {s.suffix ?? ""}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 border-t border-line pt-4 text-sm text-muted-foreground">
                Based in {site.contact.location}, working with partners in
                Kenya and the United States.
              </p>
            </aside>
          </Reveal>
        </div>

        {/* capabilities */}
        <section className="mt-16 border-t border-line pt-14">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight">Capabilities</h2>
          </Reveal>
          <dl className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <dt className="flex items-center gap-2.5 font-semibold tracking-tight">
                  <span className="size-5 text-accent">
                    <ServiceIcon slug={s.slug} />
                  </span>
                  {s.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </dd>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={120}>
            <Link
              href="/services"
              className="mt-8 inline-block rounded-[3px] text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Service detail →
            </Link>
          </Reveal>
        </section>

        {/* team */}
        <section className="mt-16 border-t border-line pt-14">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight">
              How we are set up
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {team.map((t, i) => (
              <Reveal key={t.title} delay={i * 100}>
                <h3 className="font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* principles */}
        <section className="mt-16 border-t border-line pt-14">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight">
              What we believe about building software
            </h2>
          </Reveal>
          <div className="mt-8 space-y-8">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="flex gap-5">
                  <span className="font-mono text-xs text-subtle-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-line pt-10">
          <p className="text-muted-foreground">
            Want to know whether we are a fit for your problem?{" "}
            <Link
              href="/contact"
              className="rounded-[3px] font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              Ask us
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
