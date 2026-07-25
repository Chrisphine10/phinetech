import { BrandMark } from "@/components/brand-mark";
import { site, services } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-surface-muted">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandMark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="rounded text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="rounded transition-colors hover:text-primary"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="rounded transition-colors hover:text-primary"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li>{site.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-subtle pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-xs">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
