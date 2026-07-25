/**
 * Single source of truth for site copy and contact details.
 *
 * Everything a non-developer is likely to want to change lives here rather
 * than inside components, so edits do not risk breaking layout.
 *
 * NOTE: service lines and contact details below were drafted from the public
 * PhineTech Solutions catalogue (phinetechsol.co.ke). Confirm and adjust the
 * specifics — especially phone, email and physical address — before treating
 * this as published company information.
 */

export const site = {
  name: "PhineTech",
  legalName: "PhineTech Ltd",
  domain: "phinetech.co.ke",
  url: "https://phinetech.co.ke",
  tagline: "Technology that keeps Kenyan business moving",
  description:
    "PhineTech supplies, installs and supports business technology across Kenya — KRA eTIMS-compliant POS systems, computers, networking, printing and security hardware, backed by hands-on local support.",

  contact: {
    email: "info@phinetech.co.ke",
    phone: "+254 700 000 000",
    location: "Nairobi, Kenya",
  },
} as const;

export type Service = {
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    title: "POS & eTIMS compliance",
    description:
      "KRA eTIMS-approved terminals and ETR devices, configured and registered so you invoice correctly from day one.",
    items: ["Touch-screen terminals", "Handheld eTIMS POS", "Barcode scanners", "Receipt printers"],
  },
  {
    title: "Computers & workstations",
    description:
      "Desktops, laptops and accessories specified for the workload — procured, imaged and delivered ready to use.",
    items: ["Business laptops", "All-in-one desktops", "Peripherals", "Storage & memory"],
  },
  {
    title: "Networking & connectivity",
    description:
      "Reliable wired and wireless networks, from a single office router to multi-floor access-point coverage.",
    items: ["Routers & switches", "Wi-Fi access points", "Structured cabling", "Site surveys"],
  },
  {
    title: "Printing & imaging",
    description:
      "Ink-tank and laser printing, scanning and projection for offices, schools and conference spaces.",
    items: ["Ink tank printers", "Laser printers", "Scanners", "Projectors"],
  },
  {
    title: "Security & access control",
    description:
      "Biometric access, attendance and cash-handling equipment that stands up to daily commercial use.",
    items: ["Fingerprint readers", "Access control", "Money counters", "ID card systems"],
  },
  {
    title: "Support & maintenance",
    description:
      "Installation, staff training and ongoing servicing — local engineers rather than a ticket queue abroad.",
    items: ["On-site installation", "Staff training", "Repairs & servicing", "Consumables supply"],
  },
];

export const stats = [
  { value: "7", suffix: "+", label: "Product categories" },
  { value: "100", suffix: "%", label: "KRA eTIMS ready" },
  { value: "24", suffix: "hr", label: "Support response" },
  { value: "1", suffix: "yr+", label: "Warranty backed" },
];

export const differentiators = [
  {
    title: "Compliance handled",
    body: "eTIMS registration and configuration done with the device, not left to you afterwards.",
  },
  {
    title: "Specified, not just sold",
    body: "We size the hardware to the actual workload so you are not paying for capacity you never use.",
  },
  {
    title: "Support on the ground",
    body: "Engineers who can physically attend the site — the difference between an hour and a week of downtime.",
  },
];
