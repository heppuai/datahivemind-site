"use client";

import { useState } from "react";

const faqs = [
  {
    q: "I'm not technical at all. Is that okay?",
    a: "Absolutely. Most of our clients aren't. You describe what you want in plain language — we handle all the technical decisions, design, and development. You just review and approve.",
  },
  {
    q: "What if I don't know exactly what I want yet?",
    a: "That's completely normal. We start with a free consultation call where we help you shape your idea into a concrete plan. No commitment required.",
  },
  {
    q: "How do payments work?",
    a: "50% upfront to start, 50% on delivery. Simple. If we can't deliver what we promised, you don't pay the second half.",
  },
  {
    q: "What happens after delivery?",
    a: "Every package includes free support (30-90 days depending on the plan). After that, we offer affordable maintenance plans or you can manage it yourself — you own all the code.",
  },
  {
    q: "Can you add features later?",
    a: "Of course. Many clients start with a Starter package to validate their idea, then come back for more features. We'll give you a quote for any additions.",
  },
  {
    q: "Who actually builds it?",
    a: "We use a combination of senior developers and cutting-edge AI development tools. This is how we deliver fast without sacrificing quality — and why we can offer fixed prices that traditional agencies can't match.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-[var(--card)]/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Common questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[var(--card-border)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-[var(--card)] transition cursor-pointer"
              >
                <span className="font-medium pr-4">{faq.q}</span>
                <span className="text-[var(--muted)] text-2xl flex-shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[var(--muted)] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
