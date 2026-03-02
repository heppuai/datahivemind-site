const packages = [
  {
    name: "Starter",
    price: "€4,900",
    timeline: "2 weeks",
    desc: "Perfect for validating your idea or launching a simple tool.",
    features: [
      "Landing page with booking or sign-up",
      "Up to 3 core features",
      "Mobile-friendly design",
      "Hosted & deployed",
      "30 days free support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "€9,900",
    timeline: "4 weeks",
    desc: "A full product your customers can use and pay for.",
    features: [
      "Complete web or mobile app",
      "User accounts & authentication",
      "Payment integration",
      "Admin dashboard",
      "Up to 8 core features",
      "60 days free support",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "€19,900",
    timeline: "6–8 weeks",
    desc: "Complex SaaS products and multi-user platforms.",
    features: [
      "Full SaaS platform",
      "Advanced integrations & APIs",
      "Multi-tenant architecture",
      "Analytics & reporting",
      "Unlimited core features",
      "90 days free support",
      "Priority ongoing maintenance",
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6 bg-[var(--card)]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, fixed pricing
        </h2>
        <p className="text-[var(--muted)] text-center text-lg mb-16 max-w-2xl mx-auto">
          No hourly rates. No scope creep. You know exactly what you pay before we start.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-8 border ${
                pkg.popular
                  ? "border-[var(--accent)] bg-[var(--card)] shadow-lg shadow-[var(--accent)]/10"
                  : "border-[var(--card-border)] bg-[var(--card)]"
              } flex flex-col`}
            >
              {pkg.popular && (
                <div className="text-xs font-semibold text-[var(--accent-light)] uppercase tracking-wider mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold">{pkg.price}</span>
              </div>
              <div className="text-sm text-[var(--muted)] mb-4">
                Delivered in {pkg.timeline}
              </div>
              <p className="text-[var(--muted)] mb-6">{pkg.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-[var(--accent-light)] mt-0.5">✓</span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center py-3 rounded-xl font-semibold transition ${
                  pkg.popular
                    ? "bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white"
                    : "border border-[var(--card-border)] hover:border-[var(--muted)] text-white"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-[var(--muted)] text-sm mt-8">
          Need something custom? <a href="#contact" className="text-[var(--accent-light)] hover:underline">Let&apos;s talk.</a>
        </p>
      </div>
    </section>
  );
}
