import { getDomain } from "../data/curriculum";
import Breadcrumbs from "../components/Breadcrumbs";
import SubsectionCard from "../components/SubsectionCard";

export default function TraumaDomain() {
  const domain = getDomain("trauma");
  if (!domain) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Trauma" }]} />
      <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-ink">Trauma</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal">{domain.description}</p>
        </div>
        <span className="shrink-0 rounded-full bg-beige px-3 py-1 text-xs font-medium text-charcoal">
          ~{domain.weight}% of exam blueprint
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {domain.subsections?.map((sub) => (
          <SubsectionCard key={sub.slug} subsection={sub} />
        ))}
      </div>
    </div>
  );
}
