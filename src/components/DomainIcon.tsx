/** Monoline domain icons: near-black outlines with a flat accent, matching the Core Pediatrics illustration style. */
const ICONS = {
  trauma: (
    <>
      {/* ambulance, side view */}
      <path
        d="M4 27V14a1.5 1.5 0 011.5-1.5h14V27M19.5 12.5h6.8a1.5 1.5 0 011.2.6l3.3 4.3a1.5 1.5 0 01.3.9V27h-3M19.5 27H29"
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M22 17h6M25 14v6" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="10.5" cy="27" r="3" fill="var(--color-terracotta)" stroke="var(--color-ink)" strokeWidth="2" />
      <circle cx="25.5" cy="27" r="3" fill="var(--color-terracotta)" stroke="var(--color-ink)" strokeWidth="2" />
      <path d="M8 17.5h6M11 14.5v6" stroke="var(--color-terracotta)" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
} as const;

export type DomainIconVariant = keyof typeof ICONS;

export default function DomainIcon({ variant, className }: { variant: DomainIconVariant; className?: string }) {
  return (
    <svg viewBox="0 0 34 34" className={className} role="img" aria-hidden="true">
      {ICONS[variant]}
    </svg>
  );
}
