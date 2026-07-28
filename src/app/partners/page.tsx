import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { PartnerLogo } from "@/components/partner-logo";
import { ProductGlyph } from "@/components/product-glyph";
import { partners, products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "PhineTech partners with Tari Africa, GVRC, Intelli-Wealth Limited and TrubAI in New York — providing engineering capacity under continuing engagements.",
};

export default function PartnersPage() {
  const hodi = products.find((p) => p.slug === "hodi");

  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Organisations we build alongside"
        lead="A partnership is different from a project. It means being the engineering team an organisation does not have to hire — through delivery, and through the years of maintenance that follow. Our work runs from Nairobi to New York."
      />

      <div className="mx-auto max-w-5xl px-5 py-14">
        <ul className="divide-y divide-[var(--border)] border-y border-line">
          {partners.map((partner, i) => (
            <Reveal as="li" key={partner.slug} delay={i * 90}>
              <div className="flex flex-col gap-5 py-8 sm:flex-row sm:gap-8">
                <PartnerLogo partner={partner} size={64} />

                <div className="sm:w-56 sm:shrink-0">
                  <h2 className="text-lg font-semibold tracking-tight">
                    {partner.name}
                  </h2>
                  {partner.fullName && (
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {partner.fullName}
                    </p>
                  )}
                  <p className="mt-1.5 text-xs tracking-wider text-subtle-foreground uppercase">
                    {partner.relationship}
                  </p>
                  {partner.location && (
                    <p className="mt-1.5 inline-block rounded-[3px] border border-line px-2 py-0.5 text-xs text-muted-foreground">
                      {partner.location}
                    </p>
                  )}
                  {partner.url && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block rounded-[3px] font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {partner.urlLabel} ↗
                    </a>
                  )}
                </div>

                <p className="flex-1 leading-relaxed text-muted-foreground">
                  {partner.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* case study */}
        {hodi && (
          <Reveal as="section" delay={120}>
            <div className="mt-16 overflow-hidden rounded-[8px] border border-line bg-surface-muted">
              <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
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
                </div>

                <div className="scene-3d grid place-items-center">
                  <div className="anim-float size-40 text-foreground opacity-90 sm:size-48">
                    <ProductGlyph slug="hodi" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* working with us */}
        <section className="mt-16 border-t border-line pt-14">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight">
              What a partnership looks like
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "We learn the domain",
                body: "Cooperative accounting, school fee structures and case handling each have rules that are not obvious from outside. We learn them before we design anything.",
              },
              {
                title: "We build in the open",
                body: "Progress is visible throughout, not revealed at the end. That is how scope problems surface while they are still cheap to fix.",
              },
              {
                title: "We stay",
                body: "Systems need attention after launch. Our engagements are continuing, so the people who built it are the people who maintain it.",
              },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 110}>
                <span className="font-mono text-xs text-subtle-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </Reveal>
            ))}
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
