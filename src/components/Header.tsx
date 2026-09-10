import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative border-b border-ink/10 bg-ivory/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3.5 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-ivory">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path
                d="M12 21s-7.5-4.6-9.6-9.6C1.1 8.1 3 5 6.4 5c2.1 0 3.6 1.4 5.6 4C14 5.4 15.5 4 17.6 4 21 4 22.9 8.1 21.6 11.4 19.5 16.4 12 21 12 21z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="whitespace-nowrap font-serif text-lg font-semibold leading-none text-ink">Core Pediatrics</span>
        </Link>

        <div className="ml-auto hidden max-w-xs flex-1 md:block">
          <Search variant="header" />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink/10 bg-ivory px-4 py-4 shadow-lg md:hidden">
          <Search variant="header" />
        </div>
      )}
    </header>
  );
}
