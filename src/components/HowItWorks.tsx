const steps = [
  {
    num: "01",
    title: "Tell us what you need",
    desc: "Send us a message or book a call. Explain your idea in plain language. We ask the right questions to fill in the gaps.",
  },
  {
    num: "02",
    title: "Get a fixed quote",
    desc: "Within 48 hours, you get a proposal with the exact price, timeline, and deliverables. No surprises later.",
  },
  {
    num: "03",
    title: "We build, you review",
    desc: "We start building. You see working demos every week and give feedback. If something's off, we adjust.",
  },
  {
    num: "04",
    title: "Launch and handoff",
    desc: "We deploy it, walk you through everything, and hand over the code. You own it. We stick around for support.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          From idea to launch
        </h2>
        <p className="text-[var(--muted)] text-center text-lg mb-16 max-w-2xl mx-auto">
          Four steps. A few weeks. No technical knowledge required on your end.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="text-5xl font-bold text-[var(--accent)]/20 mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
