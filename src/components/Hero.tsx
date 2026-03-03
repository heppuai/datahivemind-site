export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[var(--accent-light)] bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20">
          Fixed price · 2-8 weeks · You own the code
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          You describe it.
          <br />
          <span className="text-[var(--accent-light)]">We build it.</span>
        </h1>
        <p className="text-xl md:text-2xl text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Got a business idea that needs to become software? An app, a SaaS
          tool, an internal system? Tell us what it should do. We handle
          everything else.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-8 py-4 rounded-xl text-lg font-semibold transition shadow-lg shadow-[var(--accent)]/25"
          >
            Tell us your idea
          </a>
          <a
            href="#packages"
            className="border border-[var(--card-border)] hover:border-[var(--muted)] text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            See pricing
          </a>
        </div>
        <p className="text-sm text-[var(--muted)] mt-6">
          Free consultation. No commitment.
        </p>
      </div>
    </section>
  );
}
