import Link from "next/link";
import { ShopIcon } from "@/components/shop-icon";
import { ShopActions } from "@/components/shop-actions";
import { formatPrice, type ShopItem } from "@/lib/shop";

/**
 * Catalogue card, as a bento cell. Used on the shop index and the wishlist, so
 * it deliberately carries no server-only code and works rendered from either
 * side. `className` takes the grid spans.
 */
export function ShopCard({
  item,
  className = "",
}: {
  item: ShopItem;
  className?: string;
}) {
  return (
    <article className={`cell cell--hover h-full min-h-[300px] ${className}`}>
      <div className="hud flex items-start justify-between gap-3">
        <span>{item.category}</span>
        <span className="hud-chip">
          {item.kind === "service" ? "Service" : "Hardware"}
        </span>
      </div>

      <span className="mt-5 size-10 text-accent">
        <ShopIcon slug={item.slug} />
      </span>

      <h3 className="mt-4 text-lg font-semibold tracking-tight">
        <Link href={`/shop/${item.slug}`} className="rounded-[3px] hover:underline">
          {item.name}
        </Link>
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {item.summary}
      </p>

      <p className="font-display mt-4 text-lg font-semibold tracking-tight">
        {formatPrice(item)}
      </p>

      <div className="mt-4 border-t border-line pt-4">
        <ShopActions slug={item.slug} />
      </div>
    </article>
  );
}
