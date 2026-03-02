export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Datahivemind. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
          <a
            href="mailto:heppu@datahivemind.com"
            className="hover:text-white transition"
          >
            heppu@datahivemind.com
          </a>
          <span>Helsinki, Finland</span>
        </div>
      </div>
    </footer>
  );
}
