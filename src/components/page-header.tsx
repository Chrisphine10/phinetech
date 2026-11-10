import { Bento, Cell, Barcode, Blueprint } from "@/components/bento";
import { ContourField } from "@/components/drops-client";
import { imagery } from "@/lib/site";

/**
 * Page title block, as a bento row: a wide title panel over live contour
 * lines, beside a photograph. Used at the top of every interior page so they
 * read as sheets from one system.
 *
 * The photograph is looked up from the eyebrow ("Projects", "About", ...) so
 * pages do not each have to pass one; `photo` overrides it.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
  photo,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
  photo?: { src: string; alt: string; position?: string };
}) {
  const picture =
    photo ?? imagery.headers[(eyebrow ?? "").toLowerCase()] ?? imagery.chip;

  return (
    <header className="mx-auto max-w-7xl px-3 pt-3 sm:px-5 sm:pt-5">
      <Bento>
        <Cell
          className="min-h-[340px] lg:col-span-8"
          hud={{
            tl: eyebrow ? (
              <>
                Sheet: <b>{eyebrow}</b>
              </>
            ) : undefined,
            tr: <Barcode bars={12} className="h-4 text-subtle-foreground" />,
          }}
        >
          <ContourField opacity={0.4} />
          <div className="relative mt-auto pt-10">
            <h1 className="max-w-3xl text-4xl leading-[1.04] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {lead && (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
                {lead}
              </p>
            )}
            {children && <div className="mt-7">{children}</div>}
          </div>
        </Cell>

        <Cell
          className="min-h-[220px] lg:col-span-4"
          photo={{ ...picture, priority: true }}
          hud={{
            tl: <>Ref / {eyebrow ?? "PT"}</>,
            tr: (
              <span className="hud-chip">
                <span className="signal" />
                Live
              </span>
            ),
            bl: <>PhineTech</>,
            br: <>Nairobi</>,
          }}
        >
          <Blueprint className="opacity-30" />
        </Cell>
      </Bento>
    </header>
  );
}
