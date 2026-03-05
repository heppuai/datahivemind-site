"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">
          data<span className="text-[var(--accent)]">hivemind</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--card-border)] bg-[var(--background)]/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-4">
            <a
              href="#packages"
              onClick={() => setOpen(false)}
              className="text-lg text-[var(--muted)] hover:text-white transition py-2"
            >
              Packages
            </a>
            <a
              href="#how-it-works"
              onClick={() => setOpen(false)}
              className="text-lg text-[var(--muted)] hover:text-white transition py-2"
            >
              How It Works
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-center bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-4 py-3 rounded-lg transition font-medium mt-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
