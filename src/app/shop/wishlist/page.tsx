import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { WishlistView } from "@/components/wishlist-view";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Items you have saved from the PhineTech shop.",
  robots: { index: false, follow: true },
};

export default function WishlistPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="Saved items"
        lead="Items you have set aside to decide on later. These are stored in this browser only — they are not sent anywhere until you ask for a quote."
      />
      {/* WishlistView lays itself out as bento cells. */}
      <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 lg:pt-3.5">
        <WishlistView />
      </div>
    </>
  );
}
