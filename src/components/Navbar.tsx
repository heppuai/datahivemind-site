export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">
          data<span className="text-[var(--accent)]">hivemind</span>
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#packages"
            className="text-sm text-[var(--muted)] hover:text-white transition"
          >
            Packages
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-[var(--muted)] hover:text-white transition"
          >
            How It Works
          </a>
          <a
            href="#contact"
            className="text-sm bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-4 py-2 rounded-lg transition font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
