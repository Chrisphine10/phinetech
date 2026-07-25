/**
 * Continuously scrolling strip.
 *
 * The list is rendered twice and translated by exactly -50%, which makes the
 * loop seamless. Duplicated content is hidden from assistive technology so a
 * screen reader hears each item once.
 *
 * Server component. Stops entirely under prefers-reduced-motion.
 */
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee-mask overflow-hidden py-1">
      <div className="anim-marquee flex w-max gap-3">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 gap-3"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {items.map((item) => (
              <li
                key={item}
                className="rounded-[3px] border border-line bg-surface px-3.5 py-1.5 text-sm whitespace-nowrap text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
