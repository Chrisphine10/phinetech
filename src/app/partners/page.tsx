import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Bento, Cell, Blueprint } from "@/components/bento";
import { ChromeCta } from "@/components/drops-client";
import { PartnerLogo } from "@/components/partner-logo";
import { ProductGlyph } from "@/components/product-glyph";
import { partners, alliances, products, imagery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "PhineTech partners with Tari Africa, GVRC, Intelli-Wealth Limited and TrubAI, and works with Telcore and Octagram through Tari Africa on the networks and building systems a smart city needs.",
};

const pad = (n: number) => String(n).padStart(2, "0");

const steps = [
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
];

export default function PartnersPage() {
  const hodi = products.find((p) => p.slug === "hodi");

  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Organisations we build alongside"
        lead="A partnership is different from a project. It means being the engineering team an organisation does not have to hire — through delivery, and through the years of maintenance that follow. Our work runs from Nairobi to New York."
      />

      <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 lg:pt-3.5">
        <Bento>
          {/* ------------------------- development partners ------------------------ */}
          {partners.map((partner, i) => (
            <Cell
              key={partner.slug}
              delay={(i % 2) * 90}
              hover
              className="min-h-[320px] sm:col-span-6"
              hud={{
                tl: <>{partner.relationship}</>,
                tr: <>{partner.location ?? "Kenya"}</>,
              }}
            >
              <div className="mt-6">
                <PartnerLogo partner={partner} size={60} />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight">
                {partner.name}
              </h2>
              {partner.fullName && (
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {partner.fullName}
                </p>
              )}
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {partner.body}
              </p>
              {partner.url && (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hud mt-auto pt-5 hover:underline"
                >
                  <b>{partner.urlLabel} ↗</b>
                </a>
              )}
            </Cell>
          ))}

          {/* ------------------------------ alliances ------------------------------ */}
          <Cell
            id="alliances"
            className="min-h-[340px] scroll-mt-24 lg:col-span-12"
            photo={imagery.alliance}
            hud={{ tl: <>Technology alliances</>, tr: <>Held under Tari Africa</> }}
          >
            <div className="mt-auto max-w-2xl">
              <h2 className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl">
                The networks and buildings a smart city stands on
              </h2>
              <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
                Software is one layer. A smart city also needs its own secure
                connectivity and buildings that can be monitored and
                controlled. For those we work, through Tari Africa, with two
                technology partners, and build the applications and
                integrations on top.
              </p>
            </div>
          </Cell>

          {alliances.map((a, i) => (
            <Cell
              key={a.slug}
              delay={i * 100}
              variant="grid"
              hover
              className="min-h-[460px] sm:col-span-6"
              hud={{ tl: <>{a.relationship}</>, tr: <>{a.location}</> }}
            >
              <p className="lockup mt-8 text-4xl sm:text-5xl">{a.name}</p>
              <p className="mt-5 leading-relaxed text-pretty text-muted-foreground">
                {a.body}
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                <span className="hud">
                  <b>Our part /</b>
                </span>{" "}
                {a.role}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {a.capabilities.map((c) => (
                  <li key={c} className="hud-chip">
                    {c}
                  </li>
                ))}
              </ul>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hud mt-auto pt-6 hover:underline"
              >
                <b>{a.urlLabel} ↗</b>
              </a>
            </Cell>
          ))}

          {/* ------------------------------ case study ----------------------------- */}
          {hodi && (
            <>
              <Cell
                variant="paper"
                className="min-h-[340px] lg:col-span-8"
                hud={{ tl: <>Case in point</>, tr: <>Hodi / GVRC</> }}
              >
                <Blueprint className="opacity-30" />
                <div className="mt-8 max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Hodi, built for GVRC
                  </h2>
                  <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
                    {hodi.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href="/products/hodi"
                      className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
                    >
                      Read about Hodi →
                    </Link>
                    <a
                      href="https://hodi-admin.co.ke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hud hover:underline"
                    >
                      <b>hodi-admin.co.ke ↗</b>
                    </a>
                  </div>
                </div>
              </Cell>
              <Cell
                variant="grid"
                className="min-h-[340px] items-center justify-center lg:col-span-4"
              >
                <div className="scene-3d grid flex-1 place-items-center">
                  <div className="anim-float size-44 text-foreground opacity-90">
                    <ProductGlyph slug="hodi" />
                  </div>
                </div>
              </Cell>
            </>
          )}

          {/* --------------------------- working with us --------------------------- */}
          <Cell
            variant="muted"
            className="min-h-[220px] lg:col-span-3"
            hud={{ tl: <>Method</> }}
          >
            <h2 className="mt-auto text-2xl leading-tight font-bold tracking-tight">
              What a partnership looks like
            </h2>
          </Cell>
          {steps.map((step, i) => (
            <Cell
              key={step.title}
              delay={i * 90}
              className="min-h-[220px] sm:col-span-4 lg:col-span-3"
              hud={{ tl: <>Step {pad(i + 1)}</> }}
            >
              <div className="mt-auto pt-6">
                <h3 className="font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Cell>
          ))}

          <Cell
            className="min-h-[280px] lg:col-span-12"
            photo={imagery.cta}
            hud={{ tl: <>Channel open</> }}
          >
            <div className="mx-auto flex flex-1 flex-col items-center justify-center py-6 text-center">
              <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-balance sm:text-4xl">
                Considering a development partner?
              </h2>
              <div className="mt-6">
                <ChromeCta href="/contact">Get in touch</ChromeCta>
              </div>
            </div>
          </Cell>
        </Bento>
      </div>
    </>
  );
}
