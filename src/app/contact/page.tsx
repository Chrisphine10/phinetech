import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Bento, Cell } from "@/components/bento";
import { ContactForm } from "@/components/contact-form";
import { LocalTime } from "@/components/mission-clock";
import { site, imagery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to PhineTech about smart-city and smart-community systems, SACCO, VSLA, school management, point of sale, or a development partnership.",
};

const channels = [
  {
    label: "General",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "Anything that does not fit below.",
  },
  {
    label: "Sales",
    value: site.contact.sales,
    href: `mailto:${site.contact.sales}`,
    note: "Pricing, demos and new engagements.",
  },
  {
    label: "Support",
    value: site.contact.support,
    href: `mailto:${site.contact.support}`,
    note: "Existing customers with a live issue.",
  },
  {
    label: "Phone",
    value: site.contact.phone,
    href: `tel:${site.contact.phoneTel}`,
    note: "Weekdays, working hours.",
  },
  {
    label: "Alternative phone",
    value: site.contact.phoneAlt,
    href: `tel:${site.contact.phoneAltTel}`,
    note: "If the first line is engaged.",
  },
];

const faqs = [
  {
    q: "Do you work with organisations outside Kenya?",
    a: "Yes. Our systems are built around Kenyan regulatory requirements such as eTIMS where relevant, but the underlying products are not limited to one market.",
  },
  {
    q: "Can we see a demo before committing?",
    a: "Yes. Tell us which product and the kind of organisation you run, and we will walk you through it against your actual use case rather than a generic script.",
  },
  {
    q: "Do you take on maintenance of systems you did not build?",
    a: "Sometimes. It depends on the state of the code and whether we can support it responsibly. We will tell you honestly after a look.",
  },
  {
    q: "What does a development partnership involve?",
    a: "We act as the engineering team for organisations that need capacity without hiring one. Engagements are continuing rather than project-based, covering delivery and the maintenance that follows.",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        lead="Tell us what you are trying to do and roughly where you are with it. If we are not the right people, we will say so."
      />

      <div className="mx-auto max-w-7xl px-3 pt-3 pb-16 sm:px-5 lg:pt-3.5">
        <Bento>
          {/* form */}
          <Cell
            className="lg:col-span-7 lg:row-span-5"
            hud={{
              tl: <>Send a message</>,
              tr: (
                <span className="hud-chip">
                  <span className="signal" />
                  Channel open
                </span>
              ),
            }}
          >
            <div className="mt-6">
              <ContactForm />
            </div>
          </Cell>

          {/* channels */}
          {channels.map((c, i) => (
            <Cell
              key={c.label}
              href={c.href}
              delay={i * 60}
              className="min-h-[130px] sm:col-span-6 lg:col-span-5"
              hud={{ tl: <>{c.label}</>, tr: <>C-{pad(i + 1)}</> }}
            >
              <div className="mt-auto pt-3">
                <p className="font-display text-lg font-semibold tracking-tight break-all">
                  {c.value}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">{c.note}</p>
              </div>
            </Cell>
          ))}

          <Cell
            className="min-h-[200px] lg:col-span-12"
            photo={imagery.city}
            hud={{
              tl: <>Location</>,
              tr: <span className="hud-chip">01°17′S 36°49′E</span>,
              br: <LocalTime />,
            }}
          >
            <p className="lockup mt-auto text-2xl sm:text-3xl">
              {site.contact.location}
            </p>
          </Cell>

          {/* faq */}
          <Cell
            variant="paper"
            className="min-h-[220px] lg:col-span-4 lg:row-span-2"
            hud={{ tl: <>FAQ</>, tr: <>{pad(faqs.length)} answers</> }}
          >
            <h2 className="mt-auto text-3xl leading-tight font-bold tracking-tight">
              Common questions
            </h2>
          </Cell>
          {faqs.map((f, i) => (
            <Cell
              key={f.q}
              delay={(i % 2) * 80}
              className="min-h-[200px] sm:col-span-6 lg:col-span-4"
              hud={{ tl: <>Q-{pad(i + 1)}</> }}
            >
              <h3 className="mt-5 font-semibold tracking-tight">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </Cell>
          ))}
        </Bento>
      </div>
    </>
  );
}
