import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Bento, Cell, Blueprint, Barcode, Route } from "@/components/bento";
import { ChromeCta } from "@/components/drops-client";
import { ServiceIcon } from "@/components/service-icon";
import { DomainIcon } from "@/components/domain-icon";
import {
  services,
  principles,
  team,
  site,
  stats,
  vision,
  frontiers,
  imagery,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "PhineTech is a Nairobi technology company building the digital systems of smart cities and smart communities, with a long aim of an industrialised Africa.",
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building smart cities and smart communities, towards an industrialised Africa"
        lead="PhineTech builds the systems a city and its communities run on — cooperative ledgers, school records, tills, utility meters, case files, mobility data. The kind of software where being wrong has consequences."
      />

      <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 lg:pt-3.5">
        <Bento>
          {/* ------------------------------ narrative ----------------------------- */}
          <Cell
            className="min-h-[380px] lg:col-span-8"
            hud={{ tl: <>What we do</>, tr: <>{site.founded}</> }}
          >
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-pretty">
              <p>
                We work in domains where the details matter and the rules are
                local. A SACCO&apos;s dividend calculation, a VSLA&apos;s
                share-out, a school&apos;s fee structure, an eTIMS invoice, a
                landlord&apos;s power meters, a city&apos;s congestion data —
                none of these are served well by generic software written
                elsewhere.
              </p>
              <p className="text-muted-foreground">
                So we offer the engineering capability directly — AI
                automation, software development, innovation support, cloud and
                cyber security — and we build our own products where a market
                is underserved. Most of our work is with organisations we have
                worked with for years.
              </p>
              <p className="text-muted-foreground">
                Technology also has to be paid for. Where partners need it, we
                help with fundraising and the financial linkages that turn a
                working system into a sustainable one.
              </p>
            </div>
          </Cell>

          <Cell
            variant="muted"
            className="min-h-[380px] lg:col-span-4"
            hud={{
              tl: <>At a glance</>,
              tr: <Barcode bars={9} className="h-4 text-subtle-foreground" />,
              bl: <>Kenya / United States</>,
            }}
          >
            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-display text-4xl font-bold tracking-tight tabular-nums">
                    {s.value}
                    {s.suffix ?? ""}
                  </dd>
                  <dt className="hud mt-1">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Cell>

          {/* -------------------------------- vision ------------------------------ */}
          <Cell
            variant="paper"
            className="min-h-[360px] lg:col-span-6"
            hud={{ tl: <>Our focus</>, tr: <>Sheet 02</> }}
          >
            <Blueprint className="opacity-40" />
            <div className="mt-8">
              <h2 className="text-3xl leading-[1.05] font-bold tracking-tight text-balance sm:text-4xl">
                {vision.focus.title}
              </h2>
              <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
                {vision.focus.body}
              </p>
            </div>
          </Cell>

          <Cell
            className="min-h-[360px] lg:col-span-6"
            photo={imagery.rocket}
            hud={{
              tl: <Route from="Earth" to="Orbit" />,
              tr: <span className="hud-chip">Long horizon</span>,
            }}
          >
            <div className="mt-auto">
              <p className="hud">Our dream</p>
              <h2 className="mt-2 text-3xl leading-[1.05] font-bold tracking-tight sm:text-4xl">
                {vision.dream.title}
              </h2>
              <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
                {vision.dream.body}
              </p>
            </div>
          </Cell>

          {frontiers.map((f, i) => (
            <Cell
              key={f.slug}
              delay={(i % 2) * 90}
              photo={imagery.frontiers[f.slug]}
              hover
              className={`min-h-[300px] ${
                i === frontiers.length - 1 && frontiers.length % 2 === 1
                  ? "lg:col-span-12"
                  : "sm:col-span-6 lg:col-span-3"
              }`}
              hud={{ tl: <>F-{pad(i + 1)}</>, tr: <>Aim</> }}
            >
              <span className="mt-5 size-9">
                <DomainIcon slug={f.slug} />
              </span>
              <div className="mt-auto max-w-3xl pt-5">
                <h3 className="text-lg font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty">
                  {f.aim}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="hud">
                    <b>Today /</b>
                  </span>{" "}
                  {f.today}
                </p>
              </div>
            </Cell>
          ))}

          <Cell
            href="/projects"
            className="min-h-0 lg:col-span-12"
            flush
          >
            <p className="hud px-6 py-4">
              <b>See the projects behind this →</b>
            </p>
          </Cell>

          {/* ----------------------------- capabilities --------------------------- */}
          <Cell
            variant="muted"
            className="min-h-[200px] lg:col-span-12"
            hud={{ tl: <>Capability</>, tr: <>{pad(services.length)} lines</> }}
          >
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Capabilities
              </h2>
              <Link
                href="/services"
                className="inline-flex h-11 items-center rounded-full border border-line-strong px-5 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                Service detail →
              </Link>
            </div>
          </Cell>
          {services.map((s, i) => (
            <Cell
              key={s.slug}
              href={`/services#${s.slug}`}
              delay={(i % 3) * 70}
              className="min-h-[190px] sm:col-span-6 lg:col-span-4"
              hud={{ tl: <>S-{pad(i + 1)}</> }}
            >
              <span className="mt-4 size-8 text-accent">
                <ServiceIcon slug={s.slug} />
              </span>
              <div className="mt-auto pt-4">
                <h3 className="font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
              </div>
            </Cell>
          ))}

          {/* --------------------------------- team ------------------------------- */}
          {team.map((t, i) => (
            <Cell
              key={t.title}
              delay={i * 90}
              variant="grid"
              className="min-h-[220px] sm:col-span-4"
              hud={{ tl: <>How we are set up / {pad(i + 1)}</> }}
            >
              <div className="mt-auto pt-6">
                <h3 className="text-lg font-semibold tracking-tight">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </div>
            </Cell>
          ))}

          {/* ------------------------------ principles ---------------------------- */}
          <Cell
            variant="paper"
            className="min-h-[220px] lg:col-span-3"
            hud={{ tl: <>Principles</> }}
          >
            <h2 className="mt-auto text-2xl leading-tight font-bold tracking-tight">
              What we believe about building software
            </h2>
          </Cell>
          {principles.map((p, i) => (
            <Cell
              key={p.title}
              delay={i * 90}
              className="min-h-[220px] sm:col-span-4 lg:col-span-3"
              hud={{ tl: <>Rule {pad(i + 1)}</> }}
            >
              <div className="mt-auto pt-6">
                <h3 className="font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
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
                Want to know whether we are a fit for your problem?
              </h2>
              <div className="mt-6">
                <ChromeCta href="/contact">Ask us</ChromeCta>
              </div>
            </div>
          </Cell>
        </Bento>
      </div>
    </>
  );
}
