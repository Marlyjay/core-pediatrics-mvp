import { useMemo, useState } from "react";
import type { QuizQuestion as QuizQuestionType } from "../types";
import QuizQuestion from "./QuizQuestion";
import PrototypeNotice from "./PrototypeNotice";

interface QuestionState {
  selected: number | null;
  submitted: boolean;
}

function initState(questions: QuizQuestionType[]): QuestionState[] {
  return questions.map(() => ({ selected: null, submitted: false }));
}

export default function Quiz({ questions }: { questions: QuizQuestionType[] }) {
  const [state, setState] = useState<QuestionState[]>(() => initState(questions));

  const allSubmitted = state.every((q) => q.submitted);
  const score = useMemo(
    () =>
      state.reduce((total, q, i) => (q.submitted && q.selected !== null && questions[i].options[q.selected].correct ? total + 1 : total), 0),
    [state, questions]
  );

  function reset() {
    setState(initState(questions));
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-serif text-2xl font-semibold text-ink">Knowledge check</h2>
        <span className="rounded-full bg-beige px-3 py-1 text-xs font-medium text-charcoal">{questions.length} questions</span>
      </div>
      <div className="mb-5">
        <PrototypeNotice compact />
      </div>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <QuizQuestion
            key={i}
            question={q}
            index={i}
            selected={state[i].selected}
            submitted={state[i].submitted}
            onSelect={(optionIndex) =>
              setState((prev) => prev.map((s, si) => (si === i && !s.submitted ? { ...s, selected: optionIndex } : s)))
            }
            onSubmit={() => setState((prev) => prev.map((s, si) => (si === i && s.selected !== null ? { ...s, submitted: true } : s)))}
          />
        ))}
      </div>

      {allSubmitted && (
        <div className="mt-6 rounded-lg border-2 border-gold/50 bg-gold/10 p-6 text-center" role="status">
          <p className="font-serif text-2xl font-semibold text-ink">
            Your score: {score} / {questions.length}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="#case"
              className="min-h-11 rounded-full border border-ink/20 bg-white px-5 py-2.5 text-sm font-medium text-ink hover:bg-beige"
            >
              Review lesson
            </a>
            <button
              type="button"
              onClick={reset}
              className="min-h-11 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ivory hover:bg-charcoal"
            >
              Try again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
