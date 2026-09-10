const SECTIONS = [
  { id: "case", label: "Case" },
  { id: "objectives", label: "Objectives" },
  { id: "key-concepts", label: "Key Concepts" },
  { id: "background", label: "Background" },
  { id: "clinical-presentation", label: "Clinical Presentation" },
  { id: "diagnostic-approach", label: "Diagnostic Approach" },
  { id: "management", label: "Management" },
  { id: "pearls-pitfalls", label: "Clinical Pearls" },
  { id: "case-resolution", label: "Case Resolution" },
  { id: "knowledge-check", label: "Knowledge Check" },
  { id: "take-home-points", label: "Take-Home Points" },
];

function TocList() {
  return (
    <ul className="space-y-1.5">
      {SECTIONS.map((s) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="block text-sm text-charcoal hover:text-cobalt hover:underline">
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function LessonTableOfContents() {
  return (
    <>
      <details className="mb-6 rounded-lg border border-ink/10 bg-white/70 p-4 lg:hidden">
        <summary className="cursor-pointer text-sm font-semibold text-ink">On this page</summary>
        <nav aria-label="On this page" className="mt-3">
          <TocList />
        </nav>
      </details>

      <nav aria-label="On this page" className="hidden lg:sticky lg:top-20 lg:block lg:self-start">
        <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/70">On this page</p>
        <div className="mt-3">
          <TocList />
        </div>
      </nav>
    </>
  );
}
