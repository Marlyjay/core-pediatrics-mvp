import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { buildSearchIndex, filterSearchIndex } from "../data/curriculum";
import Breadcrumbs from "../components/Breadcrumbs";

export default function SearchResults() {
  const [params, setParams] = useSearchParams();
  const initialQuery = params.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => filterSearchIndex(index, query), [index, query]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Search" }]} />
      <h1 className="mt-4 font-serif text-3xl font-semibold text-ink">Search</h1>

      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          setParams(query ? { q: query } : {});
        }}
        className="mt-5"
      >
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search domains, subsections, and lessons…"
          className="w-full rounded-full border border-ink/15 bg-white px-5 py-3 text-base outline-none focus-visible:border-cobalt"
        />
      </form>

      <p className="mt-4 text-sm text-charcoal">
        {query.trim()
          ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”`
          : "Try searching for “trauma,” “burns,” “resuscitation,” or “cervical spine.”"}
      </p>

      {query.trim() && results.length === 0 && (
        <div className="mt-6 rounded-lg border border-dashed border-ink/20 bg-white/40 p-8 text-center">
          <p className="text-sm text-charcoal">No matches. This prototype only indexes the Trauma domain and its lessons.</p>
        </div>
      )}

      <ul className="mt-6 space-y-3">
        {results.map((item) => (
          <li key={item.id}>
            <Link to={item.href} className="flex items-start justify-between gap-3 rounded-lg border border-ink/10 bg-white p-4 hover:border-cobalt/40">
              <span>
                <span className="block font-serif text-base font-semibold text-ink">{item.title}</span>
                <span className="mt-0.5 block text-sm text-charcoal">{item.description}</span>
              </span>
              <span className="shrink-0 rounded-full bg-beige px-2 py-0.5 text-[11px] font-medium text-charcoal">{item.type}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
