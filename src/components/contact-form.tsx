"use client";

import { useState } from "react";
import { site, products } from "@/lib/site";

/**
 * Contact form.
 *
 * IMPORTANT — no server-side mail delivery exists yet. Rather than POST to an
 * endpoint that would silently discard the message, this composes a pre-filled
 * email in the visitor's mail client. That is honest and works with zero
 * backend.
 *
 * To upgrade later: add a route handler at src/app/api/contact/route.ts, wire
 * it to an email provider, and replace `buildMailto` with a fetch to it. Keep
 * the validation below either way.
 */

const subjects = [
  "General enquiry",
  ...products.map((p) => p.name),
  "Development partnership",
  "Support request",
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) next.name = "Please enter your name.";
    // Deliberately permissive: the only reliable test of an address is sending to it.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (message.length < 10)
      next.message = "Please give us a little more detail (10 characters or more).";

    return next;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = String(data.get("subject") ?? "General enquiry");
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organisation: ${data.get("organisation") || "—"}`,
      `Phone: ${data.get("phone") || "—"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `[${subject}] enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-[3px] border border-line bg-surface px-3 py-2 text-sm transition-colors placeholder:text-subtle-foreground focus:border-line-strong focus:outline-none";
  const label = "text-sm font-medium";
  const errorText = "mt-1 text-xs text-muted-foreground";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name <span aria-hidden className="text-subtle-foreground">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={field}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className={errorText}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={label}>
            Email <span aria-hidden className="text-subtle-foreground">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={field}
            placeholder="you@organisation.co.ke"
          />
          {errors.email && (
            <p id="email-error" className={errorText}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="organisation" className={label}>
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className={field}
            placeholder="Optional"
          />
        </div>

        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={field}
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={label}>
          What is this about?
        </label>
        <select id="subject" name="subject" className={field} defaultValue={subjects[0]}>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Message <span aria-hidden className="text-subtle-foreground">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${field} resize-y`}
          placeholder="Tell us what you are trying to do, and roughly where you are with it."
        />
        {errors.message && (
          <p id="message-error" className={errorText}>
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-[3px] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Send message
        </button>
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {sent
            ? "Your mail client should have opened. If it did not, email us directly."
            : "This opens your email client with the message ready to send."}
        </p>
      </div>
    </form>
  );
}
