import { useParams, Navigate, Link } from "react-router-dom";
import { getLesson, getSubsectionForLesson } from "../data/curriculum";
import Breadcrumbs from "../components/Breadcrumbs";
import PrototypeNotice from "../components/PrototypeNotice";
import LessonTableOfContents from "../components/LessonTableOfContents";
import { ClinicalCase, LearningObjectives, KeyConcepts, ClinicalPearl, CommonPitfall, TakeHomePoints } from "../components/lesson-blocks";
import Quiz from "../components/Quiz";
import DataTable from "../components/DataTable";
import LessonFigure from "../components/LessonFigure";

export default function Lesson() {
  const { slug } = useParams<{ slug: string }>();
  const lesson = slug ? getLesson(slug) : undefined;

  if (!lesson) return <Navigate to="/" replace />;

  const { domain, subsection } = getSubsectionForLesson(lesson);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          ...(domain ? [{ label: domain.name, href: `/${domain.slug}` }] : []),
          ...(subsection ? [{ label: `${subsection.letter}. ${subsection.name}`, href: `/${domain?.slug}#${subsection.slug}` }] : []),
          { label: lesson.title },
        ]}
      />

      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-terracotta">
          {domain?.name}
          {subsection ? ` · ${subsection.letter}. ${subsection.name}` : ""}
        </p>
        <h1 className="mt-1.5 font-serif text-3xl font-semibold text-ink sm:text-4xl">{lesson.title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal">{lesson.summary}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-charcoal/70">
          <span>{lesson.readingTime}</span>
          <span aria-hidden="true">·</span>
          <span>Last reviewed {lesson.lastReviewed}</span>
        </div>
        <div className="mt-4">
          <PrototypeNotice />
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[190px_minmax(0,1fr)]">
        <LessonTableOfContents />

        <div className="min-w-0 lesson-copy">
          <div id="case">
            <ClinicalCase>{lesson.caseVignette}</ClinicalCase>
          </div>

          <div id="objectives">
            <LearningObjectives items={lesson.objectives} />
          </div>

          <div id="key-concepts">
            <KeyConcepts items={lesson.keyConcepts} />
          </div>

          <h2 id="background" className="mt-8 font-serif text-xl font-semibold text-ink">
            Background
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed">{lesson.background}</p>

          <h2 id="clinical-presentation" className="mt-8 font-serif text-xl font-semibold text-ink">
            Clinical Presentation
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed">{lesson.clinicalPresentation}</p>
          {lesson.clinicalPresentationTable && <DataTable table={lesson.clinicalPresentationTable} />}

          <h2 id="diagnostic-approach" className="mt-8 font-serif text-xl font-semibold text-ink">
            Diagnostic Approach
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed">{lesson.diagnosticApproach}</p>
          {lesson.diagnosticImage ? (
            <LessonFigure image={lesson.diagnosticImage} />
          ) : (
            <div className="my-6 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-ink/20 bg-white/40 p-8 text-center">
              <span className="text-xs font-medium uppercase tracking-wide text-charcoal/60">Imaging placeholder</span>
              <p className="max-w-sm text-sm text-charcoal/70">
                A labeled lateral cervical-spine radiograph will go here once a rights-cleared image is available.
              </p>
            </div>
          )}

          <h2 id="management" className="mt-8 font-serif text-xl font-semibold text-ink">
            Management
          </h2>
          <ol className="mt-3 space-y-2.5">
            {lesson.management.map((step, i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-ink/10 bg-white p-3.5 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-ivory">
                  {i + 1}
                </span>
                <span className="text-charcoal">{step}</span>
              </li>
            ))}
          </ol>

          <div id="pearls-pitfalls" className="mt-8">
            <h2 className="font-serif text-xl font-semibold text-ink">Clinical Pearls &amp; Common Pitfalls</h2>
            <ClinicalPearl>{lesson.clinicalPearl}</ClinicalPearl>
            <CommonPitfall>{lesson.commonPitfall}</CommonPitfall>
          </div>

          <div id="case-resolution">
            <ClinicalCase label="Case resolution">{lesson.caseResolution}</ClinicalCase>
          </div>

          <div id="knowledge-check" className="mt-10 border-t border-ink/10 pt-8">
            <Quiz questions={lesson.quiz} />
          </div>

          <div id="take-home-points" className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-ink">Take-home points</h2>
            <TakeHomePoints items={lesson.takeHomePoints} />
          </div>

          <div className="mt-10 border-t border-ink/10 pt-8">
            <h2 className="font-serif text-xl font-semibold text-ink">References and review information</h2>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-charcoal">
              {lesson.references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ol>
            <dl className="mt-5 grid grid-cols-2 gap-3 rounded-lg bg-beige/40 p-4 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-xs uppercase tracking-wide text-charcoal/70">Author</dt>
                <dd className="text-ink">{lesson.author}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-charcoal/70">Medical reviewer</dt>
                <dd className="text-ink">{lesson.reviewer}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-charcoal/70">Published</dt>
                <dd className="text-ink">{lesson.published}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-charcoal/70">Last reviewed</dt>
                <dd className="text-ink">{lesson.lastReviewed}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-charcoal/70">
              Found an error or outdated content?{" "}
              <a
                href={`mailto:editorial@corepediatrics.example?subject=Content%20issue%3A%20${encodeURIComponent(lesson.title)}`}
                className="text-cobalt hover:underline"
              >
                Report it to the editorial team
              </a>
              .
            </p>
          </div>

          {domain && (
            <div className="mt-10 border-t border-ink/10 pt-6">
              <Link to={`/${domain.slug}`} className="text-sm font-medium text-cobalt hover:underline">
                ← Back to {domain.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
