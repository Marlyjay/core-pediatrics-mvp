import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { buildSearchIndex, filterSearchIndex } from "../data/curriculum";

export default function Search({
  variant = "header",
  placeholder = "Search “trauma,” “burns,” “resuscitation”…",
}: {
  variant?: "header" | "hero";
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => filterSearchIndex(index, query).slice(0, 8), [index, query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function goToSearchPage() {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  }

  const isHero = variant === "hero";

  return (
    <div ref={containerRef} className="relative w-full">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          goToSearchPage();
        }}
      >
        <label className="sr-only" htmlFor="site-search">
          Search Core Pediatrics
        </label>
        <div
          className={`flex items-center gap-2 rounded-full border border-ink/15 bg-white/90 ${
            isHero ? "px-5 py-3.5 shadow-sm" : "px-3.5 py-2"
          }`}
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={isHero ? "h-5 w-5 text-charcoal" : "h-4 w-4 text-charcoal"}>
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
            <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            id="site-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className={`w-full bg-transparent outline-none placeholder:text-charcoal/60 ${isHero ? "text-base" : "text-sm"}`}
          />
        </div>
      </form>

      {open && query.trim() && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 max-h-96 overflow-y-auto rounded-xl border border-ink/10 bg-white shadow-lg">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-charcoal">No matches for &ldquo;{query}&rdquo;.</p>
          ) : (
            <ul>
              {results.map((item) => (
                <li key={item.id} className="border-b border-ink/5 last:border-none">
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-start justify-between gap-3 px-4 py-3 hover:bg-ivory/70"
                  >
                    <span>
                      <span className="block text-sm font-medium text-ink">{item.title}</span>
                      <span className="mt-0.5 block line-clamp-1 text-xs text-charcoal">{item.description}</span>
                    </span>
                    <span className="shrink-0 rounded-full bg-beige px-2 py-0.5 text-[11px] font-medium text-charcoal">
                      {item.type}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
