export default function CaseStudy() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What we&apos;ve built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-8">
            <div className="text-sm font-medium text-[var(--accent-light)] mb-2">
              Mobile App
            </div>
            <h3 className="text-2xl font-bold mb-3">BallDay</h3>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              A sports booking app that lets players find games, reserve courts,
              and manage their sports calendar. Built and shipped as a fully
              functional mobile application.
            </p>
            <div className="flex gap-3">
              <span className="text-xs bg-[var(--accent)]/10 text-[var(--accent-light)] px-3 py-1 rounded-full">
                Mobile App
              </span>
              <span className="text-xs bg-[var(--accent)]/10 text-[var(--accent-light)] px-3 py-1 rounded-full">
                Booking System
              </span>
              <span className="text-xs bg-[var(--accent)]/10 text-[var(--accent-light)] px-3 py-1 rounded-full">
                Payments
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-8">
            <div className="text-sm font-medium text-[var(--accent-light)] mb-2">
              Business Automation
            </div>
            <h3 className="text-2xl font-bold mb-3">Service Marketplace</h3>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              An end-to-end booking and dispatch platform for a home services
              company. Customers book online, vendors get dispatched
              automatically, and the business owner sees everything in one
              dashboard.
            </p>
            <div className="flex gap-3">
              <span className="text-xs bg-[var(--accent)]/10 text-[var(--accent-light)] px-3 py-1 rounded-full">
                Marketplace
              </span>
              <span className="text-xs bg-[var(--accent)]/10 text-[var(--accent-light)] px-3 py-1 rounded-full">
                Automation
              </span>
              <span className="text-xs bg-[var(--accent)]/10 text-[var(--accent-light)] px-3 py-1 rounded-full">
                Dashboard
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
