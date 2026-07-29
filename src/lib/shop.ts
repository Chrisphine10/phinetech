/**
 * Shop catalogue.
 *
 * Two kinds of line item: packaged SERVICES (scoped engagements with a
 * deliverable) and HARDWARE (equipment we supply and install).
 *
 * SOURCING NOTE — the hardware categories and specification vocabulary here
 * were informed by researching the POS peripheral market (interfaces, print
 * speeds, till configurations, 1D/2D imaging, ESC/POS compatibility). The
 * listings themselves are written for PhineTech. No third-party product copy
 * or imagery has been reproduced.
 *
 * TWO THINGS TO REPLACE BEFORE THIS IS COMMERCIALLY LIVE:
 *   1. `price` is deliberately unset on every item. Inventing prices for a
 *      live storefront would create commitments PhineTech has not made, so the
 *      shop asks for a quote instead. Set a price and it renders automatically.
 *   2. Hardware entries describe categories with typical specifications rather
 *      than named models, because the actual stocked SKUs are not known here.
 *      Replace `specs` with the real make/model figures once confirmed.
 */

export type Spec = { label: string; value: string };

export type ShopItem = {
  slug: string;
  name: string;
  kind: "service" | "hardware";
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  specs?: Spec[];
  /** Indicative price in KES. Unset renders as "Request a quote". */
  price?: number;
  /** Shown alongside the price, e.g. "per engagement", "each". */
  priceUnit?: string;
  /** Optional lead time note. */
  leadTime?: string;
};

export const shopCategories = [
  "Professional services",
  "POS hardware",
  "Computing",
] as const;

export const shopItems: ShopItem[] = [
  /* ------------------------------ services ------------------------------- */
  {
    slug: "web-development",
    name: "Web development",
    kind: "service",
    category: "Professional services",
    summary:
      "A website or web application built for your organisation, not assembled from a template.",
    description:
      "Discovery, design and build of a site or web application, delivered with the hosting, deployment pipeline and documentation needed to run it afterwards. Built to be fast on the connections your users actually have, and accessible enough to be usable by everyone who needs it.",
    highlights: [
      "Design and build from scratch",
      "Hosting and deployment set up for you",
      "Handover with documentation",
    ],
    specs: [
      { label: "Includes", value: "Discovery, design, build, deployment" },
      { label: "Handover", value: "Source code, documentation, training" },
      { label: "Support", value: "Optional ongoing maintenance" },
    ],
    leadTime: "Typically 4–10 weeks depending on scope",
  },
  {
    slug: "pos-system",
    name: "PhineTech POS system",
    kind: "service",
    category: "Professional services",
    summary:
      "Our point-of-sale software, configured for your business and registered for eTIMS.",
    description:
      "Licence, configuration and rollout of PhineTech POS — inventory, multi-branch reporting, payment integrations and KRA eTIMS invoice transmission built into the sale rather than reconciled afterwards. Supplied with staff training and the hardware to run it if you need that too.",
    highlights: [
      "eTIMS handled at the point of sale",
      "Mobile money and card integration",
      "Multi-branch reporting",
    ],
    specs: [
      { label: "Deployment", value: "Cloud-hosted, with offline tolerance" },
      { label: "Compliance", value: "KRA eTIMS invoice transmission" },
      { label: "Includes", value: "Configuration, staff training, support" },
    ],
    leadTime: "Typically 1–3 weeks to go live",
  },
  {
    slug: "etims-onboarding",
    name: "eTIMS onboarding",
    kind: "service",
    category: "Professional services",
    summary:
      "Getting an existing business registered and transmitting compliant invoices.",
    description:
      "For businesses that already have a till or system and need to become compliant. We handle registration, device configuration and the first cycle of live invoicing, then confirm transmissions are landing correctly before we step back.",
    highlights: [
      "Registration and device setup",
      "Verified against live transmissions",
      "Staff walked through the workflow",
    ],
    specs: [
      { label: "Scope", value: "Registration, configuration, verification" },
      { label: "Works with", value: "PhineTech POS or an existing system" },
    ],
    leadTime: "Typically under 2 weeks",
  },
  {
    slug: "cloud-setup",
    name: "Cloud setup & migration",
    kind: "service",
    category: "Professional services",
    summary:
      "Moving your systems to infrastructure that scales and can be recovered.",
    description:
      "Architecture, migration and the operational discipline that keeps it running afterwards: deployment pipelines, monitoring that alerts on the right things, and backups someone has actually restored from. Sized to what you use rather than what looks impressive.",
    highlights: [
      "Migration with a rollback plan",
      "Backups tested, not just configured",
      "Monitoring and alerting included",
    ],
    specs: [
      { label: "Includes", value: "Architecture, migration, CI/CD, monitoring" },
      { label: "Recovery", value: "Documented and tested restore procedure" },
    ],
    leadTime: "Typically 2–6 weeks depending on estate size",
  },

  /* ----------------------------- POS hardware ---------------------------- */
  {
    slug: "pos-terminal",
    name: "POS touchscreen terminal",
    kind: "hardware",
    category: "POS hardware",
    summary:
      "All-in-one touchscreen till, supplied configured and ready to trade.",
    description:
      "A countertop terminal with the POS software already installed and configured for your products, staff and tax settings. Sized for a busy counter and specified to keep running through a full trading day.",
    highlights: [
      "Delivered pre-configured",
      "Fits a standard counter footprint",
      "Works with our full peripheral range",
    ],
    specs: [
      { label: "Display", value: "15\" capacitive touchscreen" },
      { label: "Interfaces", value: "USB, Ethernet, Bluetooth" },
      { label: "Mounting", value: "Countertop or VESA" },
      { label: "Supplied with", value: "POS software configured" },
    ],
  },
  {
    slug: "customer-display",
    name: "Customer-facing display",
    kind: "hardware",
    category: "POS hardware",
    summary:
      "A second screen showing the customer what they are being charged.",
    description:
      "Mounts on the terminal or beside it, showing line items and running total as they are rung up. Reduces disputes at the counter and is increasingly expected by customers who want to see the price before they pay.",
    highlights: [
      "Live line items and total",
      "Pole or terminal mounted",
      "Powered from the terminal",
    ],
    specs: [
      { label: "Display", value: "Customer-side LCD" },
      { label: "Connection", value: "USB from terminal" },
      { label: "Mounting", value: "Pole or rear-of-terminal" },
    ],
  },
  {
    slug: "cash-drawer",
    name: "Cash drawer",
    kind: "hardware",
    category: "POS hardware",
    summary:
      "Printer-driven drawer that opens on sale completion, not on demand.",
    description:
      "Opens automatically when a cash sale completes, driven from the receipt printer, so the drawer is not sitting open between transactions. Removable till tray for cashing up, with a manual key override.",
    highlights: [
      "Opens on sale, driven by the printer",
      "Removable till tray for cashing up",
      "Manual key override",
    ],
    specs: [
      { label: "Till layout", value: "Bill and coin compartments, removable" },
      { label: "Trigger", value: "Printer-driven (RJ11), 24V" },
      { label: "Security", value: "Two keys, manual override" },
      { label: "Build", value: "Steel, suited to daily commercial use" },
    ],
  },
  {
    slug: "barcode-scanner",
    name: "Barcode scanner (corded)",
    kind: "hardware",
    category: "POS hardware",
    summary:
      "Handheld 1D/2D imager for the counter — plug in and it works.",
    description:
      "Reads both traditional barcodes and 2D codes, including from a phone screen, which matters as more customers present digital vouchers and loyalty codes. Presents to the till as a keyboard, so it needs no driver.",
    highlights: [
      "Reads 1D and 2D, including from screens",
      "No driver needed",
      "Built for counter use",
    ],
    specs: [
      { label: "Symbologies", value: "1D and 2D imaging" },
      { label: "Connection", value: "USB, presents as keyboard input" },
      { label: "Screen reading", value: "Yes, including phone displays" },
      { label: "Stand", value: "Optional hands-free cradle" },
    ],
  },
  {
    slug: "barcode-scanner-wireless",
    name: "Barcode scanner (wireless)",
    kind: "hardware",
    category: "POS hardware",
    summary:
      "Cordless scanner for stock-taking and scanning away from the till.",
    description:
      "For counting shelves, receiving deliveries and scanning bulky items that will not come to the counter. Pairs over Bluetooth or a USB receiver, and buffers scans when out of range so nothing is lost.",
    highlights: [
      "Works away from the counter",
      "Buffers scans when out of range",
      "Full shift on one charge",
    ],
    specs: [
      { label: "Connection", value: "Bluetooth or 2.4GHz USB receiver" },
      { label: "Symbologies", value: "1D and 2D imaging" },
      { label: "Offline", value: "Batch mode stores scans out of range" },
      { label: "Battery", value: "Full trading day per charge" },
    ],
  },
  {
    slug: "receipt-printer",
    name: "Thermal receipt printer",
    kind: "hardware",
    category: "POS hardware",
    summary:
      "Fast thermal printer with auto-cutter, and the drawer trigger built in.",
    description:
      "Prints compliant receipts quickly enough not to hold up a queue, with an auto-cutter so staff are not tearing paper by hand. Drives the cash drawer directly, so one cable does both jobs.",
    highlights: [
      "Fast enough for a busy counter",
      "Auto-cutter",
      "Drives the cash drawer directly",
    ],
    specs: [
      { label: "Method", value: "Direct thermal, no ink or toner" },
      { label: "Paper width", value: "80mm (58mm supported)" },
      { label: "Interfaces", value: "USB, Ethernet or Bluetooth" },
      { label: "Drawer port", value: "RJ11, drives cash drawer" },
      { label: "Cutter", value: "Automatic" },
    ],
  },
  {
    slug: "label-printer",
    name: "Label printer",
    kind: "hardware",
    category: "POS hardware",
    summary: "Shelf edge and product labels printed from your own stock list.",
    description:
      "Prints barcode and price labels directly from the product catalogue, so shelf edges match the till and re-pricing does not mean handwriting stickers. Useful the moment you have more than a few hundred lines.",
    highlights: [
      "Prints from your product list",
      "Barcode and price labels",
      "Keeps shelf and till prices matched",
    ],
    specs: [
      { label: "Method", value: "Direct thermal" },
      { label: "Output", value: "Barcode, price and shelf-edge labels" },
      { label: "Connection", value: "USB" },
    ],
  },

  /* ------------------------------ computing ------------------------------ */
  {
    slug: "desktop-computer",
    name: "Desktop computer",
    kind: "hardware",
    category: "Computing",
    summary:
      "Business desktop specified for the workload, delivered set up.",
    description:
      "Supplied imaged with the software your team actually uses, joined to your network and ready on the desk. Specified honestly — we would rather sell you the machine that fits the job than the one with the bigger number on it.",
    highlights: [
      "Delivered imaged and configured",
      "Specified to the workload",
      "Warranty backed",
    ],
    specs: [
      { label: "Configuration", value: "Specified to your workload" },
      { label: "Storage", value: "SSD as standard" },
      { label: "Setup", value: "Imaged, networked, delivered ready" },
      { label: "Warranty", value: "Manufacturer warranty, locally supported" },
    ],
  },
  {
    slug: "monitor",
    name: "Monitor",
    kind: "hardware",
    category: "Computing",
    summary: "Desktop display for back-office and counter workstations.",
    description:
      "Full HD displays for office and back-office use, with the stands and cables included rather than sold separately. Tilt and VESA mounting so screens can be set at a height people can actually work at.",
    highlights: [
      "Cables and stand included",
      "VESA mountable",
      "Suitable for full working days",
    ],
    specs: [
      { label: "Resolution", value: "Full HD (1920×1080)" },
      { label: "Inputs", value: "HDMI and VGA" },
      { label: "Ergonomics", value: "Tilt stand, VESA mount" },
    ],
  },
];

export function getShopItem(slug: string): ShopItem | undefined {
  return shopItems.find((i) => i.slug === slug);
}

/** Formats a price, or the quote fallback when none is set. */
export function formatPrice(item: ShopItem): string {
  if (item.price === undefined) return "Request a quote";
  const amount = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(item.price);
  return item.priceUnit ? `${amount} ${item.priceUnit}` : amount;
}
