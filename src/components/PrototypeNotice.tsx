export default function PrototypeNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div
      role="note"
      className={`rounded-md border border-terracotta/30 bg-terracotta/5 ${compact ? "px-3 py-2" : "px-4 py-3"}`}
    >
      <p className="text-sm leading-relaxed text-charcoal">
        <strong className="text-terracotta">Prototype educational content</strong> — requires expert review before
        publication. Cases are fictional. Not for clinical use.
      </p>
    </div>
  );
}
