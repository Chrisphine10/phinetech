import Link from "next/link";
import { ShopIcon } from "@/components/shop-icon";
import { ShopActions } from "@/components/shop-actions";
import { formatPrice, type ShopItem } from "@/lib/shop";

/**
 * Catalogue card. Used on the shop index and the wishlist, so it deliberately
 * carries no server-only code and works rendered from either side.
 */
export function ShopCard({ item }: { item: ShopItem }) {
  return (
    <article className="tilt group flex h-full flex-col rounded-[8px] border border-line bg-surface p-5 hover:border-line-strong">
      <div className="flex items-start justify-between gap-3">
        <span className="size-10 text-accent">
          <ShopIcon slug={item.slug} />
        </span>
        <span className="shrink-0 rounded-[3px] border border-line px-2 py-0.5 text-xs text-muted-foreground">
          {item.kind === "service" ? "Service" : "Hardware"}
        </span>
      </div>

      <h3 className="mt-4 font-semibold tracking-tight">
        <Link href={`/shop/${item.slug}`} className="rounded-[3px]">
          {item.name}
        </Link>
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {item.summary}
      </p>

      <p className="mt-4 text-sm font-semibold">{formatPrice(item)}</p>

      <div className="mt-4 border-t border-line pt-4">
        <ShopActions slug={item.slug} />
      </div>
    </article>
  );
}
