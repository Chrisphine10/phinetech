import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CartView } from "@/components/cart-view";

export const metadata: Metadata = {
  title: "Cart",
  description:
    "Your PhineTech enquiry cart — request a quote for hardware and packaged services.",
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="Your cart"
        lead="Nothing is charged here. Send the cart across and we will come back with a written quote covering availability, pricing and lead time."
      />
      {/* CartView lays itself out as bento cells. */}
      <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 lg:pt-3.5">
        <CartView />
      </div>
    </>
  );
}
