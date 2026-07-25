/**
 * Notion-style page title block: small eyebrow, large title, lead paragraph,
 * closed by a hairline rule. Used at the top of every interior page so they
 * read as pages in one document rather than unrelated screens.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 pt-16 pb-12 sm:pt-20 sm:pb-14">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {lead}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
