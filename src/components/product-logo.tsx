"use client";

import { LogoTile } from "@/components/logo-tile";
import { ProductGlyph } from "@/components/product-glyph";
import type { Product } from "@/lib/site";

/**
 * Product identity mark.
 *
 * Uses the product's own logo in the shared uniform tile when one exists, and
 * otherwise the animated ProductGlyph — so a product still looks finished
 * before its artwork arrives, and a deleted asset degrades rather than
 * breaking.
 */
export function ProductLogo({
  product,
  height = 46,
  className = "",
}: {
  product: Product;
  height?: number;
  className?: string;
}) {
  return (
    <LogoTile
      src={product.logo}
      alt={`${product.name} logo`}
      height={height}
      className={className}
      fallback={
        <span
          className="block text-foreground"
          style={{ width: height * 1.25, height: height * 1.25 }}
        >
          <ProductGlyph slug={product.slug} />
        </span>
      }
    />
  );
}
