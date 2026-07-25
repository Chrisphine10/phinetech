/**
 * Single source of truth for site content.
 *
 * Product names, domains, partners and positioning were supplied directly by
 * PhineTech. Feature bullets are drafted from the problem domain and should be
 * reviewed before launch — they read as authoritative once published.
 *
 * Contact details marked TODO are placeholders and must be replaced.
 */

export const site = {
  name: "PhineTech",
  legalName: "PhineTech Ltd",
  domain: "phinetech.co.ke",
  url: "https://phinetech.co.ke",
  tagline: "Software for cooperatives, schools and commerce",
  description:
    "PhineTech builds and maintains financial, education and commerce software for African organisations — from SACCO core systems and VSLA digitisation to school management and eTIMS-compliant retail.",
  founded: "Nairobi, Kenya",

  contact: {
    // TODO: replace with real details before launch.
    email: "info@phinetech.co.ke",
    sales: "sales@phinetech.co.ke",
    support: "support@phinetech.co.ke",
    phone: "+254 700 000 000",
    location: "Nairobi, Kenya",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                  products                                  */
/* -------------------------------------------------------------------------- */

export type Product = {
  slug: string;
  name: string;
  category: string;
  href?: string;
  hrefLabel?: string;
  playStore?: boolean;
  status: "Live" | "In development";
  summary: string;
  description: string;
  audience: string;
  features: { title: string; body: string }[];
  highlights: string[];
};

export const products: Product[] = [
  {
    slug: "intellicash-sacco",
    name: "IntelliCash SACCO",
    category: "Financial services",
    href: "https://intellicash.africa",
    hrefLabel: "intellicash.africa",
    status: "Live",
    summary:
      "A core management system for savings and credit cooperatives — members, savings, loans and reporting in one ledger.",
    description:
      "IntelliCash SACCO gives cooperatives a single authoritative record of members, contributions and credit. It replaces the spreadsheet-and-paper workflows that make month-end reconciliation painful and audit season worse.",
    audience: "Savings and credit cooperatives, investment groups and member-owned funds.",
    features: [
      {
        title: "Member registry",
        body: "Full member lifecycle — onboarding, KYC documents, next of kin, share capital and exit processing.",
      },
      {
        title: "Savings and deposits",
        body: "Multiple savings products with their own rules, interest treatment and statement history per member.",
      },
      {
        title: "Loan management",
        body: "Applications, appraisal, guarantor tracking, disbursement, repayment schedules and arrears classification.",
      },
      {
        title: "Dividends and interest",
        body: "Period-end computation on share capital and deposits, with a clear audit trail behind every figure.",
      },
      {
        title: "Statements and reporting",
        body: "Member statements, trial balance and management reports generated from the ledger rather than assembled by hand.",
      },
      {
        title: "Mobile money",
        body: "Reconciliation of mobile money contributions and repayments against member accounts.",
      },
    ],
    highlights: [
      "One ledger, not many spreadsheets",
      "Audit trail on every transaction",
      "Built for Kenyan cooperative practice",
    ],
  },
  {
    slug: "intellicash-vsla",
    name: "IntelliCash VSLA",
    category: "Financial inclusion",
    href: "https://intellicash.co.ke",
    hrefLabel: "intellicash.co.ke",
    status: "Live",
    summary:
      "Digitisation for village savings and loan associations, with a mobile app built for how groups actually meet.",
    description:
      "VSLAs run on trust, a lockbox and a paper ledger. IntelliCash VSLA keeps that meeting rhythm intact while making the record durable — share purchases, the social fund, loans and share-out are captured as they happen instead of being reconstructed later.",
    audience:
      "Village savings and loan associations, community groups and the NGOs and programmes that support them.",
    features: [
      {
        title: "Group and cycle setup",
        body: "Constitution terms, share value, meeting schedule and cycle dates configured per group.",
      },
      {
        title: "Meeting capture",
        body: "Attendance, share purchases, social fund contributions and fines recorded during the meeting itself.",
      },
      {
        title: "Loan ledger",
        body: "Issuance, repayment tracking and interest against the group fund, visible to every member.",
      },
      {
        title: "Share-out",
        body: "End-of-cycle distribution computed from the ledger, so the arithmetic is not disputed.",
      },
      {
        title: "Mobile app",
        body: "Designed for the field — usable on modest handsets in places where connectivity is not a given.",
      },
      {
        title: "Programme oversight",
        body: "Aggregate views across many groups for the organisations funding or supporting them.",
      },
    ],
    highlights: [
      "Keeps the meeting rhythm groups already trust",
      "Transparent to every member",
      "Field-ready mobile app",
    ],
  },
  {
    slug: "classcompass",
    name: "ClassCompass",
    category: "Education",
    status: "Live",
    summary:
      "School management covering enrolment, fees, academics and parent communication in one place.",
    description:
      "ClassCompass brings the administrative side of a school into one system — who is enrolled, what has been paid, how learners are performing, and what parents have been told. The aim is fewer parallel registers and less time spent assembling the same figures twice.",
    audience: "Primary and secondary schools, colleges and training institutions.",
    features: [
      {
        title: "Student records",
        body: "Enrolment, class and stream assignment, guardian details and full academic history.",
      },
      {
        title: "Fees and invoicing",
        body: "Fee structures per class and term, invoicing, receipting, balances and arrears visibility.",
      },
      {
        title: "Attendance",
        body: "Daily and per-lesson attendance with patterns surfaced rather than buried in registers.",
      },
      {
        title: "Examinations and grading",
        body: "Assessment entry, grading against the school's scale, and report card generation.",
      },
      {
        title: "Timetable",
        body: "Class, teacher and room scheduling with conflict detection.",
      },
      {
        title: "Parent communication",
        body: "Results, fee balances and school notices reaching guardians without a manual phone round.",
      },
    ],
    highlights: [
      "One record per learner",
      "Fees and academics in the same system",
      "Report cards without the spreadsheet marathon",
    ],
  },
  {
    slug: "pos",
    name: "PhineTech POS",
    category: "Retail and commerce",
    status: "Live",
    summary:
      "Point of sale with KRA eTIMS compliance and payment integrations built in, not bolted on.",
    description:
      "A retail system where tax compliance and payment collection are part of the sale rather than a separate reconciliation exercise. Invoices are transmitted to eTIMS as they are raised, and payments settle against the same record.",
    audience: "Retailers, wholesalers, restaurants and multi-branch businesses.",
    features: [
      {
        title: "eTIMS compliance",
        body: "KRA eTIMS invoice transmission built into the sale, so compliance is not a month-end scramble.",
      },
      {
        title: "Payment integrations",
        body: "Mobile money and card payments reconciled against the transaction that created them.",
      },
      {
        title: "Inventory",
        body: "Stock levels, reorder points, variants and stock movement across locations.",
      },
      {
        title: "Multi-branch",
        body: "Several outlets under one account, with per-branch and consolidated reporting.",
      },
      {
        title: "Sales reporting",
        body: "Daily takings, product performance and margin visibility without exporting to a spreadsheet.",
      },
      {
        title: "Receipts and invoicing",
        body: "Compliant receipts and invoices issued at the counter.",
      },
    ],
    highlights: [
      "eTIMS handled at point of sale",
      "Payments reconciled automatically",
      "Scales from one till to many branches",
    ],
  },
  {
    slug: "hodi",
    name: "Hodi",
    category: "Social impact",
    href: "https://hodi-admin.co.ke",
    hrefLabel: "hodi-admin.co.ke",
    playStore: true,
    status: "Live",
    summary:
      "A support access and case management platform built for GVRC, with an Android app and an administrative back office.",
    description:
      "Hodi was developed for the Gender Violence Recovery Centre. It pairs a mobile application for the people seeking support with an administrative system for the team responding to them. Because of the sensitivity of the work, access control, confidentiality and careful data handling shaped the design from the outset.",
    audience: "GVRC and the people it serves.",
    features: [
      {
        title: "Mobile application",
        body: "An Android app published on the Play Store, designed for discreet and straightforward access to support.",
      },
      {
        title: "Case management",
        body: "An administrative back office for the response team to record, track and follow up on cases.",
      },
      {
        title: "Secure messaging",
        body: "Communication between those seeking support and the team responding, handled inside the platform.",
      },
      {
        title: "Access control",
        body: "Role-based permissions so sensitive records are visible only to those who need them.",
      },
      {
        title: "Confidentiality by design",
        body: "Data handling shaped around the sensitivity of the subject matter rather than retrofitted.",
      },
      {
        title: "Reporting",
        body: "Operational reporting for the organisation without exposing individual detail unnecessarily.",
      },
    ],
    highlights: [
      "Built for a sensitive, high-trust context",
      "Android app plus administrative back office",
      "Delivered for GVRC",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*                                  partners                                  */
/* -------------------------------------------------------------------------- */

export type Partner = {
  slug: string;
  name: string;
  fullName?: string;
  /** Shown when no logo asset is present. Keep to 2-4 characters. */
  monogram: string;
  relationship: string;
  body: string;
  url?: string;
  urlLabel?: string;
};

/**
 * Logo assets: drop an official file at /public/logos/<slug>.svg (or .png) and
 * PartnerLogo will use it automatically. Until then a monogram is rendered.
 *
 * Do NOT add third-party logos without written permission — these are other
 * organisations' trademarks, not ours to publish.
 */
export const partners: Partner[] = [
  {
    slug: "tari-africa",
    name: "Tari Africa",
    monogram: "TA",
    relationship: "Development partner",
    body: "Tari Africa nurtures, funds and scales African startups, combining product development, venture capital and social impact. PhineTech provides engineering capacity under a continuing engagement.",
    url: "https://tari.africa",
    urlLabel: "tari.africa",
  },
  {
    slug: "gvrc",
    name: "GVRC",
    fullName: "Gender Violence Recovery Centre",
    monogram: "GV",
    relationship: "Development partner",
    body: "GVRC is Kenya's pioneer organisation in gender-based violence management — a non-profit charitable trust. PhineTech developed Hodi, its support access platform, administrative back office and Android application.",
    url: "https://gvrc.co.ke",
    urlLabel: "gvrc.co.ke",
  },
  {
    slug: "intelli-wealth",
    name: "Intelli-Wealth Limited",
    monogram: "IW",
    relationship: "Development partner",
    body: "PhineTech acts as development partner, delivering and supporting software under a continuing engagement.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  company                                   */
/* -------------------------------------------------------------------------- */

export const capabilities = [
  {
    title: "Product engineering",
    body: "Long-lived systems built to be maintained — not prototypes handed over and abandoned.",
  },
  {
    title: "Financial systems",
    body: "Ledgers, loans and reconciliation, where correctness is not negotiable and the audit trail matters.",
  },
  {
    title: "Mobile applications",
    body: "Android applications designed for real conditions: modest devices and unreliable connectivity.",
  },
  {
    title: "Compliance integration",
    body: "KRA eTIMS and payment provider integration handled as part of the workflow, not an afterthought.",
  },
  {
    title: "Partner engagements",
    body: "Acting as the development arm for organisations that need engineering capacity without hiring a full team.",
  },
  {
    title: "Support and maintenance",
    body: "Systems kept running after launch, with the people who built them still answering the phone.",
  },
];

export const principles = [
  {
    title: "Correctness before features",
    body: "In financial software a wrong number is worse than a missing screen. We build the ledger first.",
  },
  {
    title: "Built for the context",
    body: "Intermittent connectivity, modest hardware and real regulatory requirements are design inputs, not edge cases.",
  },
  {
    title: "Maintained, not delivered",
    body: "Software is a commitment over years. We stay with what we build.",
  },
];

export const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 5, label: "Products in production" },
  { value: 3, label: "Partner organisations" },
  { value: 5, suffix: "+", label: "Sectors served" },
  { value: 100, suffix: "%", label: "eTIMS compliant POS" },
];

/** Scrolling strip on the home page — the ground we cover. */
export const domainStrip = [
  "SACCO ledgers",
  "VSLA share-out",
  "KRA eTIMS",
  "Mobile money reconciliation",
  "Loan appraisal",
  "Fee structures",
  "Report cards",
  "Android apps",
  "Case management",
  "Role-based access",
  "Offline tolerance",
  "Audit trails",
  "Multi-branch retail",
  "Dividend computation",
];

/* -------------------------------------------------------------------------- */
/*                                 navigation                                 */
/* -------------------------------------------------------------------------- */

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
