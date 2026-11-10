import Image from "next/image";
import Link from "next/link";
import { Bento, Cell, Eyebrow, Route, Barcode, Blueprint } from "@/components/bento";
import { ContourField, ChromeCta, FieldGallery } from "@/components/drops-client";
import { MissionClock } from "@/components/mission-clock";
import { StatCounter } from "@/components/stat-counter";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { PartnerLogo } from "@/components/partner-logo";
import { Marquee } from "@/components/marquee";
import { ServiceIcon } from "@/components/service-icon";
import { DomainIcon } from "@/components/domain-icon";
import {
  site,
  services,
  partners,
  alliances,
  vision,
  frontiers,
  domains,
  projects,
  projectsIn,
  stats,
  principles,
  domainStrip,
  imagery,
} from "@/lib/site";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 sm:pt-5">
      <Bento>
        {/* ================================ hero =============================== */}
        <Cell
          className="min-h-[560px] lg:col-span-8 lg:row-span-2"
          hud={{
            tl: (
              <>
                Mission: <b>PT-01</b>
                <br />
                Base: <b>{site.founded}</b>
              </>
            ),
            tr: <MissionClock />,
            bl: <Route from="Nairobi" to="Africa" />,
            br: (
              <>
                01°17′S 36°49′E
                <br />
                Signal: <b>nominal</b>
              </>
            ),
          }}
        >
          <ContourField />
          <span aria-hidden className="scan" />

          {/* the craft */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-4 bottom-14 hidden w-[42%] max-w-[420px] lg:block"
          >
            <div className="anim-craft">
              <Image
                src={imagery.drone.src}
                alt=""
                width={336}
                height={199}
                priority
                className="h-auto w-full rounded-[18px]"
              />
            </div>
          </div>

          <div className="relative mt-10 flex flex-1 flex-col justify-center">
            <p className="lockup text-xl text-muted-foreground sm:text-2xl">
              Phine<span className="plus-rule">+++++++</span>
              <br />
              Tech<span className="plus-rule">▮▮</span>nology
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {site.descriptor}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {site.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ChromeCta href="/projects">
                See all {projects.length} projects
              </ChromeCta>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full border border-line-strong px-6 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </Cell>

        {/* the dream */}
        <Cell
          className="min-h-[420px] lg:col-span-4 lg:row-span-2"
          photo={{ ...imagery.rocket, priority: true }}
          href="/about"
          hud={{
            tl: (
              <>
                Mission: <b>Industrialise</b>
                <br />
                <Route from="Earth" to="Orbit" />
              </>
            ),
            tr: <span className="hud-chip">Long horizon</span>,
          }}
        >
          <div className="mt-auto">
            <Eyebrow>Our dream</Eyebrow>
            <h2 className="mt-2 text-3xl leading-tight font-bold tracking-tight">
              {vision.dream.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              An Africa that makes, researches and explores for itself. Every
              system we ship is groundwork for it.
            </p>
            <span className="hud mt-4 block">
              <b>Read the vision →</b>
            </span>
          </div>
        </Cell>

        {/* ============================ mark + stats =========================== */}
        <Cell
          variant="grid"
          className="min-h-[230px] sm:col-span-12 lg:col-span-4"
          hud={{
            tl: (
              <>
                Mark: <b>PT</b>
              </>
            ),
            tr: <>Chrome / 01</>,
          }}
        >
          <Blueprint className="text-line-strong opacity-70" />
          <div className="relative grid flex-1 place-items-center py-4">
            <span className="chrome text-[112px] sm:text-[132px]">
              PT
              <span
                aria-hidden
                className="chrome-flare"
                style={{ top: "22%", left: "8%" }}
              />
              <span
                aria-hidden
                className="chrome-flare"
                style={{ top: "70%", left: "58%", "--i": 1 } as React.CSSProperties}
              />
              <span
                aria-hidden
                className="chrome-flare"
                style={{ top: "18%", left: "92%", "--i": 2 } as React.CSSProperties}
              />
            </span>
          </div>
          <p className="lockup text-center text-xs text-muted-foreground">
            {site.tagline}
          </p>
        </Cell>

        {stats.map((s, i) => (
          <Cell
            key={s.label}
            delay={i * 70}
            className="col-span-6 min-h-[170px] sm:col-span-3 lg:col-span-2"
            hud={{
              tl: <>0{i + 1}</>,
              tr: <Barcode bars={7} className="h-3 text-subtle-foreground" />,
            }}
          >
            <div className="mt-auto">
              <div className="font-display text-5xl font-bold tracking-tight tabular-nums sm:text-6xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="hud mt-2">{s.label}</p>
            </div>
          </Cell>
        ))}

        {/* ticker */}
        <Cell flush className="min-h-0 justify-center py-3 lg:col-span-12">
          <Marquee items={domainStrip} />
        </Cell>

        {/* ================================ focus ============================== */}
        <Cell
          variant="paper"
          className="min-h-[380px] lg:col-span-5"
          hud={{
            tl: <>Our focus</>,
            tr: <>Sheet 02</>,
            bl: <Barcode bars={18} className="h-7" />,
          }}
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
          className="min-h-[380px] lg:col-span-7"
          photo={imagery.city}
          hud={{
            tl: (
              <>
                Site: <b>Nairobi</b>
                <br />
                Sector: <b>Smart city</b>
              </>
            ),
            tr: <span className="hud-chip">01°17′S 36°49′E</span>,
          }}
        >
          <div className="mt-auto max-w-md">
            <p className="lockup text-2xl sm:text-3xl">
              Built for<span className="plus-rule">+++++</span>
              <br />
              where we live
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Intermittent connectivity, modest hardware and local regulation
              are design inputs here, not edge cases.
            </p>
          </div>
        </Cell>

        {/* =============================== projects ============================ */}
        <Cell
          variant="muted"
          className="min-h-[220px] lg:col-span-12"
          hud={{
            tl: (
              <>
                Index: <b>Projects</b>
              </>
            ),
            tr: (
              <>
                {pad(projects.length)} entries / {pad(domains.length)} domains
              </>
            ),
          }}
        >
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                What we have built
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground text-pretty">
                {projects.length} projects, arranged by the part of a smart
                city or smart community they serve.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center rounded-full border border-line-strong px-5 text-sm font-medium transition-colors hover:bg-surface-hover"
            >
              All projects →
            </Link>
          </div>
        </Cell>

        {domains.map((domain, i) => {
          const photo = imagery.domains[domain.slug];
          const list = projectsIn(domain.slug);
          return (
            <Cell
              key={domain.slug}
              href={`/projects#${domain.slug}`}
              delay={(i % 4) * 70}
              photo={photo}
              variant={photo ? "photo" : "grid"}
              className="min-h-[290px] sm:col-span-6 lg:col-span-3"
              hud={{ tl: <>D-{pad(i + 1)}</>, tr: <>{pad(list.length)} live</> }}
            >
              <span className="mt-6 size-9 text-foreground">
                <DomainIcon slug={domain.slug} />
              </span>
              <div className="mt-auto pt-6">
                <h3 className="text-lg leading-snug font-semibold tracking-tight">
                  {domain.title}
                </h3>
                <ul className="hud mt-3 space-y-1">
                  {list.map((p) => (
                    <li key={p.slug}>
                      <b>{p.name}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </Cell>
          );
        })}

        {/* ============================== frontiers ============================ */}
        <Cell
          className="min-h-[300px] lg:col-span-4 lg:row-span-2"
          variant="grid"
          hud={{
            tl: <>Trajectory</>,
            tr: <>{pad(frontiers.length)} frontiers</>,
            bl: <Route from="Groundwork" to="Industry" />,
          }}
        >
          <svg
            aria-hidden
            viewBox="0 0 300 200"
            className="pointer-events-none absolute inset-x-0 bottom-10 -z-10 w-full text-line-strong"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M10 180 C 90 170, 150 120, 290 14"
              strokeWidth="1"
              className="anim-route"
            />
            <circle cx="10" cy="180" r="3" fill="currentColor" stroke="none" />
            <circle
              cx="290"
              cy="14"
              r="4"
              className="anim-node"
              fill="var(--accent)"
              stroke="none"
            />
          </svg>
          <div className="mt-8">
            <h2 className="text-3xl leading-[1.05] font-bold tracking-tight sm:text-4xl">
              Where this leads
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              The frontiers an industrialised Africa opens up — in orbit,
              under the sea and on the ground — and what we already have in
              hand for each.
            </p>
          </div>
        </Cell>

        {frontiers.map((f, i) => {
          const photo = imagery.frontiers[f.slug];
          return (
            <Cell
              key={f.slug}
              delay={(i % 2) * 90}
              photo={photo}
              hover
              className={`min-h-[300px] ${
                // An odd one out closes the block as a full-width panel.
                i === frontiers.length - 1 && frontiers.length % 2 === 1
                  ? "lg:col-span-12"
                  : "sm:col-span-6 lg:col-span-4"
              }`}
              hud={{
                tl: <>F-{pad(i + 1)}</>,
                tr: (
                  <span className="hud-chip">
                    <span className="signal" />
                    Aim
                  </span>
                ),
              }}
            >
              <span className="mt-5 size-9 text-foreground">
                <DomainIcon slug={f.slug} />
              </span>
              <div className="mt-auto max-w-3xl pt-5">
                <h3 className="text-xl font-semibold tracking-tight">
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
          );
        })}

        {/* ============================= field imagery ========================= */}
        <Cell
          flush
          variant="muted"
          className="min-h-[520px] lg:col-span-12"
          hud={{ tl: <>Field imagery</>, tr: <>Hover a frame</> }}
        >
          <div className="px-6 pt-4 sm:px-7">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              The ground we cover
            </h2>
          </div>
          <div className="flex-1 overflow-hidden px-2 pb-6">
            <FieldGallery items={imagery.gallery} />
          </div>
        </Cell>

        {/* =============================== services ============================ */}
        <Cell
          variant="paper"
          className="min-h-[260px] lg:col-span-4"
          hud={{ tl: <>Capability</>, tr: <>{pad(services.length)} lines</> }}
        >
          <div className="mt-8">
            <h2 className="text-3xl leading-[1.05] font-bold tracking-tight">
              What we do
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Six service lines, offered to cities, counties, organisations and
              partners who need the capability without hiring a full team.
            </p>
            <Link
              href="/services"
              className="hud mt-5 inline-block underline-offset-4 hover:underline"
            >
              <b>All services →</b>
            </Link>
          </div>
        </Cell>

        {services.map((service, i) => (
          <Cell
            key={service.slug}
            href={`/services#${service.slug}`}
            delay={(i % 4) * 60}
            className={`min-h-[200px] sm:col-span-6 ${i < 2 ? "lg:col-span-4" : "lg:col-span-3"}`}
            hud={{ tl: <>S-{pad(i + 1)}</> }}
          >
            <span className="mt-4 size-9 text-accent">
              <ServiceIcon slug={service.slug} />
            </span>
            <div className="mt-auto pt-4">
              <h3 className="font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
            </div>
          </Cell>
        ))}

        {/* ============================= architecture ========================== */}
        <Cell
          variant="grid"
          className="lg:col-span-12"
          hud={{ tl: <>Schematic</>, tr: <>One foundation</> }}
        >
          <div className="mt-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              How it fits together
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground text-pretty">
              Different products, one engineering foundation — and the same
              external rails every Kenyan business system has to speak to.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto">
            <div className="min-w-[680px]">
              <ArchitectureDiagram />
            </div>
          </div>
        </Cell>

        {/* =============================== alliances =========================== */}
        <Cell
          className="min-h-[300px] lg:col-span-4"
          photo={imagery.alliance}
          href="/partners#alliances"
          hud={{ tl: <>Alliances</>, tr: <>Via Tari Africa</> }}
        >
          <div className="mt-auto">
            <h2 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
              The networks and buildings a smart city stands on
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Technology partnerships held under Tari Africa, bringing
              connectivity and building systems to what we build.
            </p>
          </div>
        </Cell>

        {alliances.map((a, i) => (
          <Cell
            key={a.slug}
            href={a.url}
            delay={i * 90}
            variant="grid"
            className="min-h-[300px] sm:col-span-6 lg:col-span-4"
            hud={{ tl: <>{a.relationship}</>, tr: <>{a.location}</> }}
          >
            <p className="lockup mt-8 text-3xl">{a.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {a.summary}
            </p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {a.capabilities.slice(0, 4).map((c) => (
                <li key={c} className="hud-chip">
                  {c}
                </li>
              ))}
            </ul>
          </Cell>
        ))}

        {/* =============================== partners ============================ */}
        <Cell
          variant="muted"
          className="min-h-[180px] lg:col-span-12"
          hud={{
            tl: <>Partners</>,
            tr: <>{pad(partners.length)} organisations</>,
          }}
        >
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Development partner to
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground text-pretty">
                Organisations that need engineering capacity without building a
                full in-house team.
              </p>
            </div>
            <Link
              href="/partners"
              className="inline-flex h-11 items-center rounded-full border border-line-strong px-5 text-sm font-medium transition-colors hover:bg-surface-hover"
            >
              About our partnerships →
            </Link>
          </div>
        </Cell>

        {partners.map((partner, i) => (
          <Cell
            key={partner.slug}
            delay={i * 70}
            hover
            className="min-h-[250px] sm:col-span-6 lg:col-span-3"
            hud={{
              tl: <>P-{pad(i + 1)}</>,
              tr: <>{partner.location ?? "Kenya"}</>,
            }}
          >
            <div className="mt-5">
              <PartnerLogo partner={partner} size={48} />
            </div>
            <h3 className="mt-4 font-semibold tracking-tight">{partner.name}</h3>
            <p className="hud mt-1">{partner.relationship}</p>
            <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-muted-foreground">
              {partner.body}
            </p>
          </Cell>
        ))}

        {/* ============================== principles =========================== */}
        {principles.map((p, i) => (
          <Cell
            key={p.title}
            delay={i * 90}
            className="min-h-[200px] sm:col-span-4"
            hud={{ tl: <>Rule {pad(i + 1)}</> }}
          >
            <div className="mt-auto pt-6">
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          </Cell>
        ))}

        {/* ================================= cta =============================== */}
        <Cell
          className="min-h-[420px] lg:col-span-12"
          photo={imagery.cta}
          hud={{
            tl: <>Channel open</>,
            tr: (
              <span className="hud-chip">
                <span className="signal" />
                Ready
              </span>
            ),
          }}
        >
          <div className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center py-8 text-center">
            <p className="lockup text-sm text-muted-foreground">
              Vision it<span className="plus-rule">+++</span>we create it
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl">
              Building for a city, a community or an industry?
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
              Tell us what you are trying to do. We will tell you honestly
              whether we are the right people for it.
            </p>
            <div className="mt-8">
              <ChromeCta href="/contact">Start a conversation</ChromeCta>
            </div>
          </div>
        </Cell>
      </Bento>
    </div>
  );
}
