import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Bento, Cell, Route } from "@/components/bento";
import { ChromeCta } from "@/components/drops-client";
import { DomainIcon } from "@/components/domain-icon";
import { ProjectMark } from "@/components/project-mark";
import { ProductShot } from "@/components/product-shot";
import {
  domains,
  projects,
  projectsIn,
  frontiers,
  getProject,
  imagery,
  type Project,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Every system PhineTech has built, co-built or consults on, arranged by the part of a smart city or smart community it serves: finance, commerce, utilities, education, safety, mobility, culture and digital infrastructure.",
};

const pad = (n: number) => String(n).padStart(2, "0");

/** Span for a project card, by how many share the domain's row. */
function spanFor(count: number) {
  if (count === 1) return "lg:col-span-8";
  if (count === 2) return "sm:col-span-6 lg:col-span-4";
  return "sm:col-span-6 lg:col-span-4";
}

function ProjectCell({
  project,
  span,
  delay,
}: {
  project: Project;
  span: string;
  delay: number;
}) {
  const href = project.product ? `/products/${project.product}` : project.href;
  const photo = imagery.projects[project.slug];

  return (
    <Cell
      as="li"
      href={href}
      delay={delay}
      hover
      flush
      className={`min-h-[280px] ${span}`}
    >
      {photo && (
        <ProductShot
          photo={photo}
          label={<>{project.role}</>}
          tag={
            <>
              <span className="signal" />
              {project.status}
            </>
          }
        />
      )}
      <div className="cell-body">
        <ProjectMark project={project} height={36} />
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-5">
          {project.platforms.map((platform) => (
            <span key={platform} className="hud-chip">
              {platform}
            </span>
          ))}
          <span className="flex-1" />
          {href && (
            <span className="hud">
              <b>{project.product ? "Details →" : `${project.hrefLabel} ↗`}</b>
            </span>
          )}
        </div>
      </div>
    </Cell>
  );
}

export default function ProjectsPage() {
  const active = domains.filter((d) => projectsIn(d.slug).length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="The working parts of a smart city, one system at a time"
        lead={`${projects.length} projects across ${active.length} domains. Some are our own products, some we engineered for partners, and one we consult on. Each card says which.`}
      >
        <nav aria-label="Domains" className="flex flex-wrap gap-2">
          {active.map((d) => (
            <a
              key={d.slug}
              href={`#${d.slug}`}
              className="hud-chip transition-colors hover:bg-surface-hover"
            >
              {d.title}
              <span className="text-subtle-foreground">
                {pad(projectsIn(d.slug).length)}
              </span>
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="mx-auto max-w-7xl space-y-3 px-3 pt-3 pb-16 sm:px-5 lg:space-y-3.5 lg:pt-3.5">
        {active.map((domain, d) => {
          const list = projectsIn(domain.slug);
          const photo = imagery.domains[domain.slug];
          return (
            <section
              key={domain.slug}
              id={domain.slug}
              aria-labelledby={`${domain.slug}-title`}
              className="scroll-mt-24"
            >
              <Bento as="ul">
                <Cell
                  as="li"
                  photo={photo}
                  variant={photo ? "photo" : "paper"}
                  className={`min-h-[280px] ${list.length === 3 ? "lg:col-span-12" : "lg:col-span-4"}`}
                  hud={{
                    tl: <>Domain D-{pad(d + 1)}</>,
                    tr: <>{pad(list.length)} projects</>,
                  }}
                >
                  <span className="mt-6 size-10">
                    <DomainIcon slug={domain.slug} />
                  </span>
                  <div className="mt-auto pt-6">
                    <h2
                      id={`${domain.slug}-title`}
                      className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl"
                    >
                      {domain.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-pretty text-muted-foreground">
                      {domain.summary}
                    </p>
                  </div>
                </Cell>

                {list.map((project, i) => (
                  <ProjectCell
                    key={project.slug}
                    project={project}
                    span={spanFor(list.length)}
                    delay={(i + 1) * 80}
                  />
                ))}
              </Bento>
            </section>
          );
        })}

        {/* where this leads */}
        <Bento as="section">
          <Cell
            variant="grid"
            className="min-h-[260px] lg:col-span-12"
            hud={{
              tl: <>Trajectory</>,
              tr: <>{pad(frontiers.length)} frontiers</>,
              bl: <Route from="Groundwork" to="Industry" />,
            }}
          >
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Where this leads
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
                These systems are the groundwork for something larger: an
                industrialised Africa. The frontiers we are building towards,
                and what we have in hand for each today.
              </p>
            </div>
          </Cell>

          {frontiers.map((f, i) => (
            <Cell
              key={f.slug}
              delay={(i % 2) * 90}
              photo={imagery.frontiers[f.slug]}
              hover
              className={`min-h-[320px] ${
                i === frontiers.length - 1 && frontiers.length % 2 === 1
                  ? "lg:col-span-12"
                  : "sm:col-span-6"
              }`}
              hud={{ tl: <>F-{pad(i + 1)}</>, tr: <>Aim</> }}
            >
              <span className="mt-5 size-9">
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
                    <b>In hand today /</b>
                  </span>{" "}
                  {f.today}
                </p>
                {f.projects.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {f.projects.map((slug) => {
                      const p = getProject(slug);
                      if (!p) return null;
                      return (
                        <li key={slug}>
                          <a href={`#${p.domain}`} className="hud-chip">
                            {p.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
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
                Building something for a city, a county or a community?
              </h2>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <ChromeCta href="/contact">Talk to us</ChromeCta>
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center rounded-full border border-line-strong px-6 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  Our own products
                </Link>
              </div>
            </div>
          </Cell>
        </Bento>
      </div>
    </>
  );
}
