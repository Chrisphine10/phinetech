import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icon";
import { services, team, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, software development, innovation support, cloud computing, cyber security, and fundraising and financial linkages — PhineTech's six service lines.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we do for partners"
        lead="Six service lines, offered to the organisations we build products for and to partners who need the capability without hiring a full team of their own."
      />

      <div className="mx-auto max-w-5xl px-5 py-14">
        {/* ------------------------------ overview ----------------------------- */}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={i * 70}>
              <a
                href={`#${service.slug}`}
                className="tilt group flex h-full flex-col rounded-[8px] border border-line bg-surface p-5 hover:border-line-strong"
              >
                <span className="size-9 text-accent">
                  <ServiceIcon slug={service.slug} />
                </span>
                <h2 className="mt-4 font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <span
                  aria-hidden
                  className="mt-4 text-sm text-muted-foreground transition-transform group-hover:translate-x-0.5"
                >
                  ↓
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        {/* ------------------------------- detail ------------------------------ */}
        <div className="mt-20 space-y-16">
          {services.map((service, i) => (
            <Reveal as="section" key={service.slug}>
              <div
                id={service.slug}
                className="scroll-mt-24 border-t border-line pt-12"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-subtle-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="size-8 text-accent">
                        <ServiceIcon slug={service.slug} />
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                  </div>

                  <div>
                    <p className="text-lg leading-relaxed text-pretty">
                      {service.detail}
                    </p>
                    <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm text-muted-foreground"
                        >
                          <span aria-hidden className="text-accent">
                            —
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* -------------------------------- team ------------------------------- */}
        <section className="mt-20 border-t border-line pt-14">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight">
              How we are set up
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
              Engineering alone is rarely enough on a long engagement. Partners
              get both a technical and an administrative team.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
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

        {/* --------------------------------- cta ------------------------------- */}
        <Reveal>
          <section className="mt-16 rounded-[8px] border border-line bg-surface-muted px-8 py-12 text-center">
            <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
              Not sure which of these you need?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
              Describe the problem rather than the solution and we will tell you
              what it actually calls for — including when the answer is nothing
              we sell.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              <Link
                href="/contact"
                className="rounded-[3px] bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Talk to us
              </Link>
              <a
                href={`tel:${site.contact.phoneTel}`}
                className="rounded-[3px] border border-line-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                {site.contact.phone}
              </a>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
