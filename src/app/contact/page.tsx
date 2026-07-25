import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to PhineTech about SACCO, VSLA, school management, point of sale, or a development partnership.",
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

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        lead="Tell us what you are trying to do and roughly where you are with it. If we are not the right people, we will say so."
      />

      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* form */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
              Send a message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* channels */}
          <aside className="lg:col-span-2">
            <h2 className="text-xs font-semibold tracking-wider text-subtle-foreground uppercase">
              Or reach us directly
            </h2>

            <ul className="mt-6 divide-y divide-[var(--border)] border-y border-line">
              {channels.map((c) => (
                <li key={c.label} className="py-4">
                  <p className="text-xs tracking-wider text-subtle-foreground uppercase">
                    {c.label}
                  </p>
                  <a
                    href={c.href}
                    className="mt-1 block rounded-[3px] text-sm font-medium transition-colors hover:text-muted-foreground"
                  >
                    {c.value}
                  </a>
                  <p className="mt-0.5 text-xs text-muted-foreground">{c.note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-[8px] border border-line bg-surface-muted p-5">
              <p className="text-xs tracking-wider text-subtle-foreground uppercase">
                Location
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {site.contact.location}
              </p>
            </div>
          </aside>
        </div>

        {/* faq */}
        <section className="mt-20 border-t border-line pt-14">
          <h2 className="text-2xl font-bold tracking-tight">
            Common questions
          </h2>

          <dl className="mt-8 divide-y divide-[var(--border)] border-y border-line">
            {faqs.map((f) => (
              <div key={f.q} className="flex flex-col gap-2 py-6 sm:flex-row sm:gap-10">
                <dt className="font-medium sm:w-72 sm:shrink-0">{f.q}</dt>
                <dd className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  );
}
