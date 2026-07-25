import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { partners, products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "PhineTech is development partner to Tari Africa, GVRC and Intelli-Wealth Limited — providing engineering capacity under continuing engagements.",
};

export default function PartnersPage() {
  const hodi = products.find((p) => p.slug === "hodi");

  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Organisations we build alongside"
        lead="A development partnership is different from a project. It means being the engineering team an organisation does not have to hire — through delivery, and through the years of maintenance that follow."
      />

      <div className="mx-auto max-w-5xl px-5 py-14">
        <ul className="divide-y divide-[var(--border)] border-y border-line">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex flex-col gap-3 py-8 sm:flex-row sm:gap-10"
            >
              <div className="sm:w-64 sm:shrink-0">
                <h2 className="text-lg font-semibold tracking-tight">
                  {partner.name}
                </h2>
                <p className="mt-1 text-xs tracking-wider text-subtle-foreground uppercase">
                  {partner.relationship}
                </p>
              </div>
              <p className="flex-1 leading-relaxed text-muted-foreground">
                {partner.body}
              </p>
            </li>
          ))}
        </ul>

        {/* case study */}
        {hodi && (
          <section className="mt-16 rounded-[8px] border border-line bg-surface-muted p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
              Case in point
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Hodi, built for GVRC
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-pretty text-muted-foreground">
              {hodi.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href="/products/hodi"
                className="rounded-[3px] border border-line-strong bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                Read about Hodi →
              </Link>
              <a
                href="https://hodi-admin.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[3px] px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                hodi-admin.co.ke ↗
              </a>
            </div>
          </section>
        )}

        {/* working with us */}
        <section className="mt-16 border-t border-line pt-14">
          <h2 className="text-2xl font-bold tracking-tight">
            What a partnership looks like
          </h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold tracking-tight">
                We learn the domain
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Cooperative accounting, school fee structures and case handling
                each have rules that are not obvious from outside. We learn them
                before we design anything.
              </p>
            </div>
            <div>
              <h3 className="font-semibold tracking-tight">We build in the open</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Progress is visible throughout, not revealed at the end. That is
                how scope problems surface while they are still cheap to fix.
              </p>
            </div>
            <div>
              <h3 className="font-semibold tracking-tight">We stay</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Systems need attention after launch. Our engagements are
                continuing, so the people who built it are the people who
                maintain it.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-line pt-10">
          <p className="text-muted-foreground">
            Considering a development partner?{" "}
            <Link
              href="/contact"
              className="rounded-[3px] font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              Get in touch
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
