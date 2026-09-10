import { Link } from "react-router-dom";
import { domains, lessons } from "../data/curriculum";
import Search from "../components/Search";
import DomainCard from "../components/DomainCard";

export default function Home() {
  const featuredLesson = lessons[0];

  return (
    <div>
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="font-serif text-sm italic text-terracotta">A visual textbook, built for the web</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Pediatric emergency medicine, clearly explained.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-charcoal">
            Core Pediatrics provides structured lessons, cases, visual learning, and knowledge checks for
            clinicians learning pediatric emergency medicine.
          </p>
          <div className="mx-auto mt-7 max-w-lg">
            <Search variant="hero" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/trauma" className="min-h-11 rounded-full bg-ink px-5 py-2.5 font-medium text-ivory transition hover:bg-charcoal flex items-center">
              Explore the curriculum
            </Link>
            <Link to="/search" className="font-medium text-terracotta hover:underline">
              Search topics →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink">Explore by domain</h2>
            <p className="mt-1 text-sm text-charcoal">Trauma is fully built in this prototype. Other domains are coming soon.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          {domains.map((domain) => (
            <DomainCard key={domain.slug} domain={domain} />
          ))}
        </div>
      </section>

      {featuredLesson && (
        <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <h2 className="font-serif text-2xl font-semibold text-ink">Featured lesson</h2>
          <Link
            to={`/lessons/${featuredLesson.slug}`}
            className="mt-6 grid gap-6 rounded-lg border border-ink/10 bg-white/70 p-6 transition hover:border-cobalt/40 hover:bg-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-terracotta">Trauma · Trauma Resuscitation</p>
              <p className="mt-3 font-serif text-xl italic text-ink">
                &ldquo;A well-run resuscitation looks calm because the sequence has already been decided.&rdquo;
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink">{featuredLesson.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal">{featuredLesson.summary}</p>
              <span className="mt-3 inline-block text-sm font-medium text-cobalt">Start lesson →</span>
            </div>
          </Link>
        </section>
      )}
    </div>
  );
}
