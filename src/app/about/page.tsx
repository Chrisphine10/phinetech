import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { capabilities, principles, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "PhineTech is a Nairobi software company building financial, education and commerce systems for African organisations.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A software company, not a software shop"
        lead="PhineTech builds systems that organisations run their operations on — cooperative ledgers, school records, retail tills, case files. The kind of software where being wrong has consequences."
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
                share-out, a school&apos;s fee structure, an eTIMS invoice — none
                of these are served well by generic software written elsewhere.
              </p>
              <p>
                So we build specific systems for specific problems, and then we
                keep them running. Most of our work is with organisations we have
                worked with for years, either through our own products or as
                their development partner.
              </p>
            </div>
          </div>

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
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-t border-line pt-4 text-sm text-muted-foreground">
              Based in {site.contact.location}
            </p>
          </aside>
        </div>

        {/* capabilities */}
        <section className="mt-16 border-t border-line pt-14">
          <h2 className="text-2xl font-bold tracking-tight">Capabilities</h2>
          <dl className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title}>
                <dt className="font-semibold tracking-tight">{c.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* principles */}
        <section className="mt-16 border-t border-line pt-14">
          <h2 className="text-2xl font-bold tracking-tight">
            What we believe about building software
          </h2>
          <div className="mt-8 space-y-8">
            {principles.map((p, i) => (
              <div key={p.title} className="flex gap-5">
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
