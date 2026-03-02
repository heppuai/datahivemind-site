"use client";

import { useState } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Send via mailto fallback for now — will be replaced with proper API
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const mailto = `mailto:heppu@datahivemind.com?subject=New inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    
    // Also try sending to our endpoint
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
    } catch {
      // Fallback silently
    }

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to build something?
        </h2>
        <p className="text-[var(--muted)] text-lg mb-12">
          Tell us about your idea. We&apos;ll get back to you within 24 hours with
          an honest assessment of what&apos;s possible.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-[var(--accent)] bg-[var(--accent)]/10 p-8">
            <p className="text-xl font-semibold mb-2">Thanks!</p>
            <p className="text-[var(--muted)]">
              We&apos;ll review your message and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--card-border)] focus:border-[var(--accent)] outline-none transition"
                  placeholder="Maria Virtanen"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--card-border)] focus:border-[var(--accent)] outline-none transition"
                  placeholder="maria@company.fi"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Tell us about your idea
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--card-border)] focus:border-[var(--accent)] outline-none transition resize-none"
                placeholder="I want to build an app that..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white py-4 rounded-xl text-lg font-semibold transition shadow-lg shadow-[var(--accent)]/25 cursor-pointer"
            >
              Send Message
            </button>
            <p className="text-center text-sm text-[var(--muted)]">
              Or email us directly at{" "}
              <a
                href="mailto:heppu@datahivemind.com"
                className="text-[var(--accent-light)] hover:underline"
              >
                heppu@datahivemind.com
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
