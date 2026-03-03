"use client";

import { useState } from "react";

const faqs = [
  {
    q: "I'm not technical. Is that a problem?",
    a: "No. Most of our clients aren't. You explain what you want in your own words, we figure out how to build it. You review working demos and tell us what to change.",
  },
  {
    q: "What if I'm not sure exactly what I need?",
    a: "That's normal. We start with a free call where we help you figure it out. No commitment, no sales pitch. If we're a good fit, we send you a proposal.",
  },
  {
    q: "How do payments work?",
    a: "50% upfront to start, 50% when we deliver. If we don't deliver what we agreed on, you don't pay the second half.",
  },
  {
    q: "What happens after you deliver?",
    a: "Every package includes free support (30 to 90 days depending on the package). After that, we offer maintenance plans, or you can take the code and run it yourself. It's yours.",
  },
  {
    q: "Can I add features later?",
    a: "Yes. Many clients start with a Starter to test their idea, then come back for more. We quote each addition separately.",
  },
  {
    q: "How can you offer fixed prices?",
    a: "We use AI-assisted development tools alongside experienced developers. This lets us move faster than a traditional agency while keeping quality high. The savings go to you as lower, predictable pricing.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-[var(--card)]/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Questions
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
