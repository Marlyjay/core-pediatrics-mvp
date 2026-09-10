import type { ReactNode } from "react";

export function ClinicalCase({ children, label = "Opening clinical case" }: { children: ReactNode; label?: string }) {
  return (
    <div className="my-6 rounded-lg border border-ink/10 bg-white p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">{label}</p>
      <p className="mt-2 text-[15px] leading-relaxed text-charcoal">{children}</p>
    </div>
  );
}

export function LearningObjectives({ items }: { items: string[] }) {
  return (
    <div className="my-6 rounded-lg border border-cobalt/20 bg-cobalt/5 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-cobalt">Learning objectives</p>
      <ul className="mt-2.5 space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-charcoal">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function KeyConcepts({ items }: { items: string[] }) {
  return (
    <div className="my-6 rounded-lg border-2 border-gold/50 bg-gold/10 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#8a6412]">What you need to know</p>
      <ul className="mt-2.5 space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm font-medium leading-relaxed text-ink">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ClinicalPearl({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-terracotta/30 bg-terracotta/5 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Clinical pearl</p>
      <p className="mt-2 text-sm leading-relaxed text-charcoal">{children}</p>
    </div>
  );
}

export function CommonPitfall({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-ink/15 bg-beige/40 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-charcoal">Common pitfall</p>
      <p className="mt-2 text-sm leading-relaxed text-charcoal">{children}</p>
    </div>
  );
}

export function TakeHomePoints({ items }: { items: string[] }) {
  return (
    <div className="my-6 rounded-lg bg-ink p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold">Take-home points</p>
      <ul className="mt-2.5 space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ivory">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
