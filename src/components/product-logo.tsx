"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductGlyph } from "@/components/product-glyph";
import type { Product } from "@/lib/site";

/**
 * Product identity mark.
 *
 * Renders the product's own logo when one is supplied, otherwise falls back to
 * the animated ProductGlyph — so products without artwork still look finished.
 * A load failure falls back too, meaning a deleted or renamed asset degrades
 * instead of leaving a broken image.
 *
 * Why the white chip: the supplied logos are full-colour and at least one
 * (Hodi) is a 24-bit PNG with a baked-in white background. Seating every logo
 * on a white panel means brand colours are reproduced exactly and unaltered in
 * both light and dark themes, with no risk of keying out white that is part of
 * the mark. It also keeps colour confined to the logos themselves, leaving the
 * rest of the system monochrome.
 */
export function ProductLogo({
  product,
  height = 44,
  className = "",
}: {
  product: Product;
  height?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!product.logo || failed) {
    return (
      <span
        className={`block text-foreground ${className}`}
        style={{ width: height * 1.3, height: height * 1.3 }}
      >
        <ProductGlyph slug={product.slug} />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-[6px] bg-white ring-1 ring-line ${className}`}
      style={{ height, paddingInline: height * 0.28, paddingBlock: height * 0.16 }}
    >
      <Image
        src={product.logo}
        alt={`${product.name} logo`}
        width={320}
        height={160}
        onError={() => setFailed(true)}
        className="h-full w-auto object-contain"
        unoptimized
        priority={false}
      />
    </span>
  );
}
