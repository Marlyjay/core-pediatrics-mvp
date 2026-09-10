export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10 bg-beige/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="font-serif text-lg font-semibold text-ink">Core Pediatrics</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal">
          Core Pediatrics is an educational resource and is not a substitute for professional medical judgment,
          current primary sources, institutional protocols, or consultation with an appropriate supervising
          clinician. It does not provide patient-specific medical advice.
        </p>
        <p className="mt-6 text-xs text-charcoal/70">
          &copy; {new Date().getFullYear()} Core Pediatrics. Prototype content — not for clinical use.
        </p>
      </div>
    </footer>
  );
}
