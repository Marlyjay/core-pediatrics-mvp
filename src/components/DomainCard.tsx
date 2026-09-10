import { useState } from "react";
import { Link } from "react-router-dom";
import type { Domain } from "../types";
import DomainIcon, { type DomainIconVariant } from "./DomainIcon";
import SubsectionCard from "./SubsectionCard";

const ICON_BY_SLUG: Partial<Record<string, DomainIconVariant>> = {
  trauma: "trauma",
};

export default function DomainCard({ domain }: { domain: Domain }) {
  const icon = ICON_BY_SLUG[domain.slug];
  const [open, setOpen] = useState(false);
  const hasSubsections = domain.status === "live" && (domain.subsections?.length ?? 0) > 0;

  const header = (
    <>
      <div className="flex items-start gap-3.5">
        {icon && (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-beige">
            <DomainIcon variant={icon} className="h-6 w-6" />
          </span>
        )}
        <div>
          <h3 className="font-serif text-lg font-semibold text-ink">{domain.name}</h3>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-charcoal">{domain.description}</p>
        </div>
      </div>
      <div className="mt-3 flex shrink-0 items-center gap-1.5 text-xs font-medium sm:ml-4 sm:mt-0">
        {domain.status === "live" ? (
          <span className="text-terracotta">
            {hasSubsections ? (open ? "Hide subsections" : "View subsections") : "Explore this domain"}
          </span>
        ) : (
          <span className="text-charcoal/60">Coming soon</span>
        )}
        {hasSubsections && (
          <svg
            viewBox="0 0 20 20"
            className={`h-3.5 w-3.5 text-terracotta transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </>
  );

  if (hasSubsections) {
    return (
      <div className="rounded-lg border border-ink/10 bg-white/70">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full flex-col justify-between p-5 text-left transition hover:bg-white sm:flex-row sm:items-start"
        >
          {header}
        </button>
        {open && (
          <div className="space-y-2 border-t border-ink/10 p-5">
            {domain.subsections?.map((sub) => (
              <SubsectionCard key={sub.slug} subsection={sub} compact />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (domain.status === "live") {
    return (
      <Link
        to={`/${domain.slug}`}
        className="group flex flex-col justify-between rounded-lg border border-ink/10 bg-white/70 p-5 transition hover:border-terracotta/40 hover:bg-white sm:flex-row sm:items-start"
      >
        {header}
      </Link>
    );
  }

  return (
    <div className="flex flex-col justify-between rounded-lg border border-ink/10 bg-white/40 p-5 opacity-80 sm:flex-row sm:items-start">
      {header}
    </div>
  );
}
