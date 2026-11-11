import Link from "next/link";
import { ShopIcon } from "@/components/shop-icon";
import { ShopActions } from "@/components/shop-actions";
import { ProductShot } from "@/components/product-shot";
import { formatPrice, type ShopItem } from "@/lib/shop";
import { imagery } from "@/lib/site";

/**
 * Catalogue card, as a bento cell with the item's photograph on top. Used on
 * the shop index and the wishlist, so it deliberately carries no server-only
 * code and works rendered from either side. `className` takes the grid spans.
 */
export function ShopCard({
  item,
  className = "",
}: {
  item: ShopItem;
  className?: string;
}) {
  const photo = imagery.shop[item.slug];

  return (
    <article
      className={`cell cell--flush cell--hover h-full min-h-[300px] ${className}`}
    >
      {photo && (
        <Link
          href={`/shop/${item.slug}`}
          aria-hidden
          tabIndex={-1}
          className="block"
        >
          <ProductShot
            photo={photo}
            label={<>{item.category}</>}
            tag={item.kind === "service" ? "Service" : "Hardware"}
          />
        </Link>
      )}

      <div className="cell-body">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 size-8 shrink-0 text-accent">
            <ShopIcon slug={item.slug} />
          </span>
          <h3 className="text-lg leading-snug font-semibold tracking-tight">
            <Link
              href={`/shop/${item.slug}`}
              className="rounded-[3px] hover:underline"
            >
              {item.name}
            </Link>
          </h3>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.summary}
        </p>

        <p className="font-display mt-4 text-lg font-semibold tracking-tight">
          {formatPrice(item)}
        </p>

        <div className="mt-4 border-t border-line pt-4">
          <ShopActions slug={item.slug} />
        </div>
      </div>
    </article>
  );
}
