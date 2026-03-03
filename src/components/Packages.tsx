const packages = [
  {
    name: "Starter",
    price: "€4,900",
    timeline: "~2 weeks",
    desc: "Good for testing an idea or launching something simple fast.",
    features: [
      "Landing page with sign-up or booking",
      "Up to 3 core features",
      "Works on mobile and desktop",
      "Deployed and hosted",
      "30 days of support after launch",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "€9,900",
    timeline: "~4 weeks",
    desc: "A real product your customers can use and pay for.",
    features: [
      "Full web or mobile app",
      "User accounts and login",
      "Payments (Stripe, etc.)",
      "Admin dashboard",
      "Up to 8 core features",
      "60 days of support after launch",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "€19,900",
    timeline: "6-8 weeks",
    desc: "For bigger products with multiple user types, integrations, or complex logic.",
    features: [
      "Full SaaS platform",
      "Third-party integrations and APIs",
      "Multi-tenant setup",
      "Analytics and reporting",
      "No feature limit",
      "90 days of support after launch",
      "Priority maintenance available",
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6 bg-[var(--card)]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Pricing
        </h2>
        <p className="text-[var(--muted)] text-center text-lg mb-16 max-w-2xl mx-auto">
          Fixed price. You know the number before we start. If we can&apos;t deliver what we promised, you don&apos;t pay the second half.
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
                  Most picked
                </div>
              )}
              <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold">{pkg.price}</span>
              </div>
              <div className="text-sm text-[var(--muted)] mb-4">
                {pkg.timeline}
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
                Get started
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-[var(--muted)] text-sm mt-8">
          Need something different? <a href="#contact" className="text-[var(--accent-light)] hover:underline">Let&apos;s talk.</a>
        </p>
      </div>
    </section>
  );
}
