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
      <div className="mx-auto max-w-5xl px-5 py-14">
        <WishlistView />
      </div>
    </>
  );
}
