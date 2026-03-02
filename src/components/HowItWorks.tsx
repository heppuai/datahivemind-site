const steps = [
  {
    num: "01",
    title: "Tell us your idea",
    desc: "Book a free call or send us a message. Describe what you want — we'll figure out the technical stuff.",
  },
  {
    num: "02",
    title: "We scope & quote",
    desc: "Within 48 hours you get a clear proposal with fixed price, timeline, and exactly what you'll receive.",
  },
  {
    num: "03",
    title: "We build it",
    desc: "Our team builds your product using cutting-edge AI-powered development. You see progress every week.",
  },
  {
    num: "04",
    title: "You launch",
    desc: "We deliver a polished, working product ready for your customers. Plus 30 days of free support.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How it works
        </h2>
        <p className="text-[var(--muted)] text-center text-lg mb-16 max-w-2xl mx-auto">
          From idea to live product in weeks, not months. No jargon, no surprises.
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
