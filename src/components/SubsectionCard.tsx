import { Link } from "react-router-dom";
import type { Subsection } from "../types";

export default function SubsectionCard({ subsection, compact = false }: { subsection: Subsection; compact?: boolean }) {
  const content = (
    <>
      <div className="flex items-start gap-3">
        <span
          className={`flex shrink-0 items-center justify-center rounded-full bg-terracotta font-serif font-semibold text-ivory ${
            compact ? "h-6 w-6 text-[11px]" : "h-9 w-9 text-sm"
          }`}
        >
          {subsection.letter}
        </span>
        <div>
          <h3 className={`font-serif font-semibold text-ink ${compact ? "text-sm" : "text-lg"}`}>{subsection.name}</h3>
          <p className={`mt-0.5 max-w-xl leading-relaxed text-charcoal ${compact ? "text-xs" : "text-sm"}`}>
            {subsection.description}
          </p>
        </div>
      </div>
      <div className={`mt-2 shrink-0 font-medium sm:ml-4 sm:mt-0 ${compact ? "text-[11px]" : "text-xs"}`}>
        {subsection.status === "live" ? (
          <span className="text-terracotta">Start lesson →</span>
        ) : (
          <span className="text-charcoal/60">Coming soon</span>
        )}
      </div>
    </>
  );

  const padding = compact ? "p-3.5" : "p-5";

  if (subsection.status === "live" && subsection.lessonSlug) {
    return (
      <Link
        id={subsection.slug}
        to={`/lessons/${subsection.lessonSlug}`}
        className={`flex flex-col justify-between rounded-lg border border-cobalt/25 bg-white transition hover:border-cobalt/50 sm:flex-row sm:items-start ${padding}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      id={subsection.slug}
      className={`flex flex-col justify-between rounded-lg border border-dashed border-ink/20 bg-white/40 opacity-90 sm:flex-row sm:items-start ${padding}`}
    >
      {content}
    </div>
  );
}
