import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Bento, Cell } from "@/components/bento";
import { ChromeCta } from "@/components/drops-client";
import { ServiceIcon } from "@/components/service-icon";
import { services, team, site, imagery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, software development, innovation support, cloud computing, cyber security, and fundraising and financial linkages — PhineTech's six service lines.",
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we do for partners"
        lead="Six service lines, offered to cities, counties, organisations and partners who need the capability without hiring a full team of their own."
      />

      <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 lg:pt-3.5">
        <Bento>
          {/* ------------------------------ overview ----------------------------- */}
          {services.map((service, i) => (
            <Cell
              key={service.slug}
              href={`#${service.slug}`}
              delay={(i % 3) * 70}
              className="min-h-[210px] sm:col-span-6 lg:col-span-4"
              hud={{ tl: <>S-{pad(i + 1)}</>, tr: <>↓</> }}
            >
              <span className="mt-4 size-9 text-accent">
                <ServiceIcon slug={service.slug} />
              </span>
              <div className="mt-auto pt-4">
                <h2 className="font-semibold tracking-tight">{service.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
              </div>
            </Cell>
          ))}

          {/* ------------------------------- detail ------------------------------ */}
          {services.map((service, i) => (
            <div key={service.slug} className="contents">
              <Cell
                id={service.slug}
                variant={i % 2 === 0 ? "paper" : "grid"}
                className={`min-h-[300px] scroll-mt-24 lg:col-span-4 ${i % 2 === 1 ? "lg:order-none" : ""}`}
                hud={{ tl: <>Service {pad(i + 1)}</> }}
              >
                <span className="mt-6 size-11 text-accent">
                  <ServiceIcon slug={service.slug} />
                </span>
                <div className="mt-auto pt-6">
                  <h2 className="text-2xl leading-tight font-bold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                </div>
              </Cell>
              <Cell
                className="min-h-[300px] lg:col-span-8"
                hud={{ tl: <>Scope</>, tr: <>{pad(service.points.length)} items</> }}
              >
                <p className="mt-6 text-lg leading-relaxed text-pretty">
                  {service.detail}
                </p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="hud-chip">
                      {point}
                    </li>
                  ))}
                </ul>
              </Cell>
            </div>
          ))}

          {/* -------------------------------- team ------------------------------- */}
          <Cell
            variant="muted"
            className="min-h-[220px] lg:col-span-3"
            hud={{ tl: <>Set-up</> }}
          >
            <div className="mt-auto">
              <h2 className="text-2xl leading-tight font-bold tracking-tight">
                How we are set up
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Partners get both a technical and an administrative team.
              </p>
            </div>
          </Cell>
          {team.map((t, i) => (
            <Cell
              key={t.title}
              delay={i * 90}
              className="min-h-[220px] sm:col-span-4 lg:col-span-3"
              hud={{ tl: <>T-{pad(i + 1)}</> }}
            >
              <div className="mt-auto pt-6">
                <h3 className="font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </div>
            </Cell>
          ))}

          {/* --------------------------------- cta ------------------------------- */}
          <Cell
            className="min-h-[320px] lg:col-span-12"
            photo={imagery.cta}
            hud={{ tl: <>Channel open</> }}
          >
            <div className="mx-auto flex flex-1 flex-col items-center justify-center py-6 text-center">
              <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-balance sm:text-4xl">
                Not sure which of these you need?
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
                Describe the problem rather than the solution and we will tell
                you what it actually calls for — including when the answer is
                nothing we sell.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <ChromeCta href="/contact">Talk to us</ChromeCta>
                <a
                  href={`tel:${site.contact.phoneTel}`}
                  className="inline-flex h-12 items-center rounded-full border border-line-strong px-6 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  {site.contact.phone}
                </a>
              </div>
            </div>
          </Cell>
        </Bento>
      </div>
    </>
  );
}
