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
      <div className="mx-auto max-w-5xl px-5 py-14">
        <CartView />
      </div>
    </>
  );
}
