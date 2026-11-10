import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { Bento, Cell, Barcode, Route } from "@/components/bento";
import { LocalTime } from "@/components/mission-clock";
import { site, products, nav } from "@/lib/site";

const link =
  "rounded-[3px] text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-auto w-full max-w-7xl px-3 pb-3 sm:px-5 sm:pb-5">
      <Bento>
        <Cell
          variant="grid"
          className="min-h-[260px] lg:col-span-5"
          hud={{
            tl: <>End of sheet</>,
            tr: <Barcode bars={10} className="h-4 text-subtle-foreground" />,
            bl: <Route from="Nairobi" to="Africa" />,
            br: <LocalTime />,
          }}
        >
          <div className="mt-6">
            <BrandMark height={38} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
          </div>
        </Cell>

        <Cell
          className="col-span-6 min-h-[260px] lg:col-span-2"
          hud={{ tl: <>Products</> }}
        >
          <ul className="mt-5 space-y-2.5">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className={link}>
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </Cell>

        <Cell
          className="col-span-6 min-h-[260px] lg:col-span-2"
          hud={{ tl: <>Company</> }}
        >
          <ul className="mt-5 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Cell>

        <Cell
          variant="paper"
          className="min-h-[260px] lg:col-span-3"
          hud={{
            tl: <>Channel</>,
            tr: (
              <span className="hud-chip">
                <span className="signal" />
                Open
              </span>
            ),
          }}
        >
          <ul className="mt-5 space-y-2.5">
            <li>
              <a href={`mailto:${site.contact.email}`} className={link}>
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contact.phoneTel}`} className={link}>
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contact.phoneAltTel}`} className={link}>
                {site.contact.phoneAlt}
              </a>
            </li>
            <li className="text-sm text-muted-foreground">
              {site.contact.location}
            </li>
          </ul>
        </Cell>

        <Cell flush className="min-h-0 lg:col-span-12">
          <div className="hud flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {site.legalName}. All rights reserved.
            </p>
            <p>
              <b>{site.tagline}</b> / {site.domain}
            </p>
          </div>
        </Cell>
      </Bento>
    </footer>
  );
}
