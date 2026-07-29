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
  /** The brand line from the logo lockup. */
  tagline: "Vision it. We create it.",
  /** What we actually do — used as the H1, where a descriptive line serves SEO better. */
  descriptor: "AI automation, software engineering and secure cloud",
  /** Sampled from the logo artwork. */
  brand: { navy: "#182432", red: "#B12724" },
  description:
    "PhineTech is a technology partner to organisations in Africa and beyond. We build AI automation, custom software, cloud and cyber security capability — backed by our own products, a dedicated technical and administrative team, and support with fundraising and financial linkages.",
  founded: "Nairobi, Kenya",

  contact: {
    // TODO: confirm these email addresses actually receive mail.
    email: "info@phinetech.co.ke",
    sales: "sales@phinetech.co.ke",
    support: "support@phinetech.co.ke",
    // Displayed in local format; `tel:` uses E.164 so it dials from abroad.
    phone: "0743 762 794",
    phoneTel: "+254743762794",
    phoneAlt: "0757 255 710",
    phoneAltTel: "+254757255710",
    location: "Nairobi, Kenya",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                  services                                  */
/* -------------------------------------------------------------------------- */

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI automation",
    summary:
      "Put AI where it removes real work — not where it demonstrates well.",
    detail:
      "We start from the processes that actually consume your team's hours: document handling, reconciliation, triage, routine reporting. Then we automate them with models measured against your own data, not a benchmark, and keep a human in the loop wherever being wrong would be expensive.",
    points: [
      "Process discovery and scoping",
      "Document and data extraction",
      "Workflow and decision automation",
      "Evaluation against your own data",
      "Human-in-the-loop review",
      "Integration with the systems you already run",
    ],
  },
  {
    slug: "software-development",
    title: "Software development",
    summary:
      "Systems built to be maintained for years, not demonstrated once.",
    detail:
      "Web and mobile applications, APIs, integrations and the unglamorous work underneath them — schema design, migrations, tests. We build for the conditions our clients operate in: modest hardware, intermittent connectivity, and regulation that is local and specific.",
    points: [
      "Web and mobile applications",
      "APIs and systems integration",
      "Legacy modernisation",
      "Database and schema design",
      "Automated testing",
      "Long-term maintenance",
    ],
  },
  {
    slug: "innovation-support",
    title: "Innovation support",
    summary:
      "Getting from an idea to something that survives contact with users.",
    detail:
      "Most ideas fail on a detail nobody examined early enough. We help frame the problem, prototype the risky part first, and design a pilot that produces evidence rather than enthusiasm — then hand over the capability rather than the dependency.",
    points: [
      "Problem framing and discovery",
      "Rapid prototyping",
      "Technical feasibility assessment",
      "Pilot design and measurement",
      "Product roadmapping",
      "Building your team's capability",
    ],
  },
  {
    slug: "cloud-computing",
    title: "Cloud computing",
    summary:
      "Infrastructure that scales with demand and degrades gracefully when the network does not.",
    detail:
      "Architecture, migration and the operational discipline that keeps a system running: deployment pipelines, monitoring that alerts on the right things, backups someone has actually restored from. Sized honestly, so you are not paying for capacity you never use.",
    points: [
      "Architecture and cloud migration",
      "Deployment pipelines (CI/CD)",
      "Monitoring and alerting",
      "Backup and disaster recovery",
      "Cost optimisation",
      "Offline-tolerant design",
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber security",
    summary: "Security treated as a design input, not an audit finding.",
    detail:
      "Access control, data protection and secure development practice built in from the start — because retrofitting security after a system is live costs more and works less well. Particularly where the data is sensitive and the consequences of a breach are borne by people, not balance sheets.",
    points: [
      "Security review and assessment",
      "Identity and access control",
      "Data protection and encryption",
      "Secure development practice",
      "Incident response planning",
      "Compliance support",
    ],
  },
  {
    slug: "fundraising",
    title: "Fundraising & financial linkages",
    summary:
      "Connecting partners to the capital and financial infrastructure they need to grow.",
    detail:
      "Good technology does not fund itself. We help partners get funding-ready, support proposals and grant applications, and make the introductions and financial connections that turn a working system into a sustainable one.",
    points: [
      "Funding readiness assessment",
      "Proposal and grant support",
      "Investor and donor linkages",
      "Financial systems integration",
      "Reporting and accountability",
      "Due diligence support",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

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
  /**
   * Path under /public to the product's own logo. Omit and the animated
   * ProductGlyph is used instead, so a missing asset never breaks a layout.
   */
  logo?: string;
  /**
   * Which ground the artwork is drawn for.
   *
   * Nearly every mark we hold is dark ink on white, which is why logo tiles
   * are white by default. The Phine POS mark is the inverse — light circuitry
   * on a near-black field — and would be invisible on a white tile. Marking it
   * "dark" tells LogoTile to give it a dark tile instead.
   */
  logoGround?: "light" | "dark";
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
    logo: "/logos/intellicash.png",
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
    logo: "/logos/intellicash.png",
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
    logo: "/logos/classcompass.png",
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
    logo: "/logos/phine-pos.png",
    // Light cream artwork on a dark field, unlike every other mark we hold.
    // On a white tile it is very nearly invisible — verified by compositing.
    logoGround: "dark",
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
    logo: "/logos/hodi.png",
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
  /** Path under /public. Omit and the monogram below is rendered instead. */
  logo?: string;
  /** See Product.logoGround — light ink on a dark field needs a dark tile. */
  logoGround?: "light" | "dark";
  /** Shown when no logo asset is present. Keep to 2-4 characters. */
  monogram: string;
  relationship: string;
  body: string;
  url?: string;
  urlLabel?: string;
  /** Where the partner is based, shown when it is outside Kenya. */
  location?: string;
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
    logo: "/logos/tari-africa.png",
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
    logo: "/logos/gvrc.png",
    monogram: "GV",
    relationship: "Development partner",
    body: "GVRC is Kenya's pioneer organisation in gender-based violence management — a non-profit charitable trust. PhineTech developed Hodi, its support access platform, administrative back office and Android application.",
    url: "https://gvrc.co.ke",
    urlLabel: "gvrc.co.ke",
  },
  {
    slug: "intelli-wealth",
    name: "Intelli-Wealth Limited",
    logo: "/logos/intelli-wealth.png",
    monogram: "IW",
    relationship: "Development partner",
    body: "PhineTech acts as development partner, delivering and supporting software under a continuing engagement.",
  },
  {
    slug: "trubai",
    name: "TrubAI",
    logo: "/logos/trubai.png",
    // Not "TA" — that is Tari Africa's monogram and the two would be
    // indistinguishable in the partner list.
    monogram: "TR",
    relationship: "Technology consulting partner",
    location: "New York City, USA",
    body: "TrubAI is a behavioural, AI-enabled urban planning and transportation data platform. It analyses both qualitative and quantitative data to identify not just what movement patterns occur in a city but why — giving planners what they need to address congestion systemically, rather than symptom by symptom. The technology has been implemented in partnership with the New York City government. PhineTech consults on the engagement.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  company                                   */
/* -------------------------------------------------------------------------- */

/** How the organisation is set up to work with partners. */
export const team = [
  {
    title: "Technical team",
    body: "Engineers who stay with a system past launch — building, integrating and maintaining it, and available to the partner directly rather than through a ticket queue.",
  },
  {
    title: "Administrative team",
    body: "Dedicated coordination alongside the engineering: reporting, documentation, scheduling and the day-to-day contact that keeps a long engagement running smoothly.",
  },
  {
    title: "Embedded, not outsourced",
    body: "We work closely enough with partners to learn their domain properly. That is what lets us build for a SACCO's rules or a city's traffic data rather than a generic case.",
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
  { value: 6, label: "Service lines" },
  { value: 5, label: "Products in production" },
  { value: 4, label: "Partner organisations" },
  { value: 2, label: "Continents served" },
];

/** Scrolling strip on the home page — the ground we cover. */
export const domainStrip = [
  "AI automation",
  "Document extraction",
  "SACCO ledgers",
  "Cloud migration",
  "KRA eTIMS",
  "Penetration testing",
  "VSLA share-out",
  "CI/CD pipelines",
  "Mobile money reconciliation",
  "Identity & access control",
  "Android apps",
  "Urban mobility data",
  "Offline tolerance",
  "Grant applications",
  "Audit trails",
  "Disaster recovery",
  "Case management",
  "Investor linkages",
];

/* -------------------------------------------------------------------------- */
/*                                 navigation                                 */
/* -------------------------------------------------------------------------- */

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/shop", label: "Shop" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
