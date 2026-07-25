import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { site, products, nav } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-surface-muted">
      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandMark className="text-foreground" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
            <p className="mt-4 text-sm text-subtle-foreground">
              {site.contact.location}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-subtle-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-xs">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
