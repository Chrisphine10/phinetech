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
  descriptor: "Technology for smart cities and smart communities",
  /** The engineering we sell — kept for metadata and the services pages. */
  capability: "AI automation, software engineering and secure cloud",
  /** Sampled from the logo artwork. */
  brand: { navy: "#182432", red: "#B12724" },
  description:
    "PhineTech builds the digital systems that smart cities and smart communities run on — finance, schools, commerce, utilities, mobility and emergency response — with AI automation, custom software, cloud and cyber security. It is the groundwork for a larger aim: an industrialised Africa.",
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
/*                                   vision                                   */
/* -------------------------------------------------------------------------- */

/**
 * Where the company is headed.
 *
 * `focus` is what we build today. `dream` is the long aim and is written as an
 * aim — nothing here claims a capability we do not yet have. Each frontier
 * names the work already in hand that points towards it, so the ambition stays
 * tied to something a visitor can check.
 */
export const vision = {
  focus: {
    title: "Smart cities and smart communities",
    body: "A city is smart when the systems people depend on every day — money, school, trade, power, transport, safety — are recorded properly, connected to each other and open to the people they serve. We build those systems one at a time, for the conditions African cities and communities actually have.",
  },
  dream: {
    title: "An industrialised Africa",
    body: "Our long aim is an Africa that makes, researches and explores for itself. Industry needs dependable digital groundwork first: ledgers that balance, utilities that are metered, supply routes that are visible, schools that keep good records, and help that arrives when it is called. Every project we ship is a piece of that groundwork.",
  },
} as const;

export type Frontier = {
  slug: string;
  title: string;
  /** The aim, stated as an aim. */
  aim: string;
  /** What exists today that points towards it. */
  today: string;
  /** Slugs from `projects` that are the present-day evidence. */
  projects: string[];
};

export const frontiers: Frontier[] = [
  {
    slug: "education",
    title: "Advancing education",
    aim: "Every learner on the continent with a complete record, a teacher who has time to teach, and access to labs their school could never afford to build.",
    today:
      "School management with a mobile app for teachers, learners and parents, and immersive virtual-reality learning for children and clubs.",
    projects: ["classcompass", "vr-labs-africa"],
  },
  {
    slug: "emergency-response",
    title: "Emergency response",
    aim: "A call for help that reaches the right responder in seconds, with the case history and the location already in front of them.",
    today:
      "A confidential support-access app and case-management back office, delivered for a national gender-violence recovery organisation.",
    projects: ["hodi"],
  },
  {
    slug: "research",
    title: "Research",
    aim: "African institutions producing their own data and their own findings, instead of importing conclusions drawn somewhere else.",
    today:
      "Behavioural mobility data for city planners, and clean operational data from the ledgers, meters and classrooms our systems already run.",
    projects: ["trubai", "tari-electra", "intellicash-sacco"],
  },
  {
    slug: "space",
    title: "Space exploration",
    aim: "An Africa that builds and operates its own missions. This is the far end of the road, and we say so plainly: it starts with engineers, data and industry on the ground.",
    today:
      "The software, cloud and AI skills a space programme draws on are the ones we practise every day. The moon in our logo is there on purpose.",
    projects: [],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  projects                                  */
/* -------------------------------------------------------------------------- */

/** The parts of a smart city or smart community a project serves. */
export type Domain = {
  slug: string;
  title: string;
  summary: string;
};

export const domains: Domain[] = [
  {
    slug: "community-finance",
    title: "Community finance",
    summary:
      "Savings, credit and group funds kept on one trusted record, from the village meeting to the cooperative head office.",
  },
  {
    slug: "commerce-industry",
    title: "Commerce and industry",
    summary:
      "Tills, stock, field sales and production tracked as they happen, with tax compliance built into the sale.",
  },
  {
    slug: "utilities-energy",
    title: "Utilities and energy",
    summary:
      "Power that is metered, measured and billed fairly — the first thing a smart estate or an industrial park needs.",
  },
  {
    slug: "education",
    title: "Education",
    summary:
      "School records, classroom tools and immersive learning that reach learners wherever they are.",
  },
  {
    slug: "safety-response",
    title: "Safety and emergency response",
    summary:
      "Confidential access to help, and the case tools responders need to follow through.",
  },
  {
    slug: "mobility-planning",
    title: "Mobility and city planning",
    summary:
      "Data on how and why people move, so planners can fix causes rather than symptoms.",
  },
  {
    slug: "community-culture",
    title: "Community and culture",
    summary:
      "Tools that bring people into the same room, in their own languages.",
  },
  {
    slug: "digital-infrastructure",
    title: "Digital infrastructure and AI",
    summary:
      "The shared plumbing: hosting, mail, AI content and automation that the other systems stand on.",
  },
];

export type Project = {
  slug: string;
  name: string;
  domain: string;
  /** PhineTech's part in it. Shown on the card — be exact about ownership. */
  role: string;
  status: "Live" | "In development" | "Pilot";
  summary: string;
  /** What it is delivered as. */
  platforms: string[];
  /** Shown in the tile when there is no logo. 2-3 characters. */
  monogram: string;
  /** Set when the project has a full page under /products. */
  product?: string;
  logo?: string;
  logoGround?: "light" | "dark";
  href?: string;
  hrefLabel?: string;
};

/**
 * Everything PhineTech has built, co-built or consults on.
 *
 * REVIEW BEFORE PUBLISHING: several of these are owned by partner companies
 * and were engineered by PhineTech. The `role` line states that relationship
 * and must be confirmed with each owner, along with the public link.
 */
export const projects: Project[] = [
  {
    slug: "intellicash-sacco",
    name: "IntelliCash SACCO",
    domain: "community-finance",
    role: "PhineTech product",
    status: "Live",
    summary:
      "Core system for savings and credit cooperatives: members, savings, loans, dividends and reporting on one ledger.",
    platforms: ["Web"],
    monogram: "IC",
    product: "intellicash-sacco",
    logo: "/logos/intellicash.png",
    href: "https://intellicash.africa",
    hrefLabel: "intellicash.africa",
  },
  {
    slug: "intellicash-vsla",
    name: "IntelliCash VSLA",
    domain: "community-finance",
    role: "PhineTech product",
    status: "Live",
    summary:
      "Digital records for village savings and loan groups, captured during the meeting on a phone that works offline.",
    platforms: ["Web", "Android"],
    monogram: "IV",
    product: "intellicash-vsla",
    logo: "/logos/intellicash.png",
    href: "https://intellicash.co.ke",
    hrefLabel: "intellicash.co.ke",
  },
  {
    slug: "pos",
    name: "PhineTech POS",
    domain: "commerce-industry",
    role: "PhineTech product",
    status: "Live",
    summary:
      "Point of sale for shops and multi-branch businesses, with KRA eTIMS invoicing and mobile-money payments built in.",
    platforms: ["Web"],
    monogram: "POS",
    product: "pos",
    logo: "/logos/phine-pos.png",
    logoGround: "dark",
  },
  {
    slug: "kulaos",
    name: "KulaOS",
    domain: "commerce-industry",
    role: "Built by PhineTech, part of the Tari Africa family",
    status: "Live",
    summary:
      "Operating system for restaurants and food businesses: tables, orders, kitchen production with food-safety checks, eTIMS, and a Windows till that keeps selling offline and syncs to the cloud.",
    platforms: ["Web", "Windows"],
    monogram: "KO",
    href: "https://kulaos.co.ke",
    hrefLabel: "kulaos.co.ke",
  },
  {
    slug: "raut",
    name: "Raut",
    domain: "commerce-industry",
    role: "Engineered by PhineTech for Tari Africa Platforms",
    status: "Live",
    summary:
      "ERP, CRM and field-sales platform for distributors. Sales reps follow mapped routes and take orders offline; the back office sees stock, invoices and payments as they happen.",
    platforms: ["Web", "Android"],
    monogram: "RT",
  },
  {
    slug: "tari-electra",
    name: "Tari Electra",
    domain: "utilities-energy",
    role: "Engineered by PhineTech for Tari Africa",
    status: "Live",
    summary:
      "Smart utility management for landlords, tenants and electricians: metered consumption, balances and payments, plus a shop for meters and accessories.",
    platforms: ["Web", "Android"],
    monogram: "TE",
    href: "https://tarielectra.africa",
    hrefLabel: "tarielectra.africa",
  },
  {
    slug: "classcompass",
    name: "ClassCompass",
    domain: "education",
    role: "PhineTech product",
    status: "Live",
    summary:
      "School management for enrolment, fees, attendance and exams, with a mobile app for teachers, learners and parents.",
    platforms: ["Web", "Android"],
    monogram: "CC",
    product: "classcompass",
    logo: "/logos/classcompass.png",
  },
  {
    slug: "vr-labs-africa",
    name: "VR Labs Africa",
    domain: "education",
    role: "Built by PhineTech with Tari Africa",
    status: "Pilot",
    summary:
      "Immersive learning for children and schools: virtual-reality lessons, a games portal for kids, clubs and tournaments, with child-safe sign-in.",
    platforms: ["Web"],
    monogram: "VR",
    href: "https://vrlabs.phinetech.co.ke",
    hrefLabel: "vrlabs.phinetech.co.ke",
  },
  {
    slug: "hodi",
    name: "Hodi",
    domain: "safety-response",
    role: "Built by PhineTech for GVRC",
    status: "Live",
    summary:
      "Confidential support access for survivors of gender-based violence, with a case-management back office for the response team.",
    platforms: ["Web", "Android"],
    monogram: "HD",
    product: "hodi",
    logo: "/logos/hodi.png",
    href: "https://hodi-admin.co.ke",
    hrefLabel: "hodi-admin.co.ke",
  },
  {
    slug: "trubai",
    name: "TrubAI",
    domain: "mobility-planning",
    role: "PhineTech consults on the technology",
    status: "Live",
    summary:
      "AI-enabled urban planning and transport data platform that explains why movement patterns occur, implemented with the New York City government.",
    platforms: ["Web"],
    monogram: "TR",
    logo: "/logos/trubai.png",
  },
  {
    slug: "goons",
    name: "Goons",
    domain: "community-culture",
    role: "PhineTech product",
    status: "Live",
    summary:
      "A social deduction party game for game nights, youth forums and team building, played in English, Swahili or French on Android or in the browser.",
    platforms: ["Android", "Web"],
    monogram: "GN",
    href: "https://goons.phinetech.co.ke",
    hrefLabel: "goons.phinetech.co.ke",
  },
  {
    slug: "tari-studio",
    name: "Tari Studio",
    domain: "digital-infrastructure",
    role: "Engineered by PhineTech for Tari Africa",
    status: "Live",
    summary:
      "AI-assisted studio for agencies and businesses to plan, produce and manage marketing content and leads in one workspace.",
    platforms: ["Web"],
    monogram: "TS",
    href: "https://taristudio.africa",
    hrefLabel: "taristudio.africa",
  },
  {
    slug: "phinetech-cloud",
    name: "PhineTech Cloud and Mail",
    domain: "digital-infrastructure",
    role: "PhineTech infrastructure",
    status: "Live",
    summary:
      "Managed hosting and multi-domain business email that our products and partners run on, monitored and hardened by our own team.",
    platforms: ["Cloud"],
    monogram: "PC",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function projectsIn(domain: string): Project[] {
  return projects.filter((p) => p.domain === domain);
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
/*                                 alliances                                  */
/* -------------------------------------------------------------------------- */

/**
 * Technology partnerships held under Tari Africa.
 *
 * These are suppliers of infrastructure a smart city needs and that we do not
 * build ourselves: the network, and the building systems. PhineTech's part is
 * the software and integration on top.
 *
 * REVIEW BEFORE PUBLISHING: confirm with Tari Africa and each company that the
 * partnership is agreed and may be named publicly, and that the wording of
 * `relationship` is right. No third-party logos are used here on purpose.
 */
export type Alliance = {
  slug: string;
  name: string;
  relationship: string;
  location: string;
  /** One or two sentences, for cards. */
  summary: string;
  /** Longer description, for the partners page. */
  body: string;
  /** What PhineTech and Tari Africa do with it. */
  role: string;
  capabilities: string[];
  url: string;
  urlLabel: string;
};

export const alliances: Alliance[] = [
  {
    slug: "telcore",
    name: "Telcore",
    relationship: "Technology partner",
    location: "Via Tari Africa",
    summary:
      "Telecommunications infrastructure: private LTE and 5G networks, core network systems and mission-critical communications for sites that cannot depend on a public network.",
    body: "Telcore develops, manufactures and integrates telecommunications infrastructure — radio access from macro to femto base stations, 4G and 5G core network and subscriber data systems, traffic and priority management, and network security. Its private LTE and 5G networks give a port, a mine, a factory or an energy site its own secure connectivity, and its push-to-talk, dispatch and situation-centre systems put crews, services and dispatchers on one channel.",
    role: "Through Tari Africa, we bring this connectivity layer to industrial sites and public-safety projects, and build the applications that run on it.",
    capabilities: [
      "Private LTE / 5G",
      "Core network",
      "Critical comms and dispatch",
      "Situation centre",
      "Network security",
      "IoT and telemetry",
    ],
    url: "https://tel-core.com",
    urlLabel: "tel-core.com",
  },
  {
    slug: "octagram",
    name: "Octagram",
    relationship: "Technology partner",
    location: "Via Tari Africa",
    summary:
      "Smart-building systems: one controller platform for access control, alarms and automation in homes, offices and hotels, with software to manage whole estates.",
    body: "Octagram builds a unified hardware platform for security, automation and building systems. A single controller takes on a different job depending on its firmware — door access, burglar and fire alarms, lighting, shading and engineering equipment — for a smart home, an office floor or a block of hotel rooms. Its Flex software manages many controllers and thousands of users from one place, and its platform joins building-management, energy and access systems from different vendors.",
    role: "Through Tari Africa, we bring these building systems to estates, offices and public buildings, and connect them to the utility, payment and safety software we build.",
    capabilities: [
      "Access control",
      "Building automation",
      "Fire and intruder alarms",
      "Smart home and hotel",
      "Estate management software",
      "BMS integration",
    ],
    url: "https://octagram.eu/catalog/",
    urlLabel: "octagram.eu",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  imagery                                   */
/* -------------------------------------------------------------------------- */

/**
 * Photographs, self-hosted under /public/images.
 *
 * All but the drone are from Unsplash, downloaded under the Unsplash licence
 * (free to use, no attribution required). They are shown in greyscale by the
 * theme. The drone picture was supplied by PhineTech.
 */
type Photo = { src: string; alt: string; position?: string };

const photo = (file: string, alt: string, position?: string): Photo => ({
  src: `/images/${file}`,
  alt,
  position,
});

export const imagery = {
  drone: photo("drone.png", "Survey drone carrying a camera"),
  rocket: photo("rocket.jpg", "A rocket lifting off its launch pad"),
  city: photo("city.jpg", "A tower lit above the Nairobi skyline at night"),
  skyline: photo("skyline.jpg", "The Nairobi skyline at night"),
  earth: photo("earth.jpg", "City lights on Earth seen from orbit at night"),
  chip: photo("chip.jpg", "A processor held in tweezers"),
  cta: photo("wafer.jpg", "A silicon wafer of microchip dies"),
  alliance: photo("power.jpg", "Transmission towers carrying power lines"),

  /** Keyed by domain slug. A domain without a photo gets a blueprint panel. */
  domains: {
    "community-finance": photo("market.jpg", "A trader at a market stall holding a phone"),
    "utilities-energy": photo("power.jpg", "Transmission towers carrying power lines"),
    education: photo("classroom.jpg", "A teacher instructing a class"),
    "safety-response": photo("ambulance.jpg", "An ambulance driving with its lights on"),
    "mobility-planning": photo("traffic.jpg", "A highway into a city at night"),
    "digital-infrastructure": photo("server.jpg", "Network cabling in a server rack"),
  } as Record<string, Photo | undefined>,

  /** Keyed by frontier slug. */
  frontiers: {
    research: photo("lab.jpg", "A researcher at a microscope"),
    space: photo("earth.jpg", "City lights on Earth seen from orbit at night"),
  } as Record<string, Photo | undefined>,

  /** Page headers, keyed by route. */
  headers: {
    projects: photo("skyline.jpg", "The Nairobi skyline at night"),
    products: photo("chip.jpg", "A processor held in tweezers"),
    services: photo("server.jpg", "Network cabling in a server rack"),
    partners: photo("power.jpg", "Transmission towers carrying power lines"),
    about: photo("launch-trail.jpg", "The light trail of a rocket launch at dusk"),
    contact: photo("earth.jpg", "City lights on Earth seen from orbit at night"),
    shop: photo("factory.jpg", "Industrial machinery on a factory floor"),
  } as Record<string, Photo | undefined>,

  gallery: [
    photo("skyline.jpg", "Nairobi skyline at night"),
    photo("classroom.jpg", "A teacher instructing a class"),
    photo("power.jpg", "Transmission towers"),
    photo("factory.jpg", "Factory machinery"),
    photo("rocket.jpg", "Rocket launch"),
    photo("lab.jpg", "Researcher at a microscope"),
    photo("traffic.jpg", "City highway at night"),
    photo("market.jpg", "Market trader with a phone"),
    photo("earth.jpg", "Earth at night from orbit"),
  ],
};

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
  { value: projects.length, label: "Projects built or in build" },
  { value: domains.length, label: "Smart-community domains" },
  { value: services.length, label: "Service lines" },
  { value: 2, label: "Continents served" },
];

/** Scrolling strip on the home page — the ground we cover. */
export const domainStrip = [
  "Smart cities",
  "Smart communities",
  "Smart utility metering",
  "Emergency response",
  "Digital classrooms",
  "Field sales routes",
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
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/shop", label: "Shop" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
