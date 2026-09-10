import type { QuizQuestion as QuizQuestionType } from "../types";

export default function QuizQuestion({
  question,
  index,
  selected,
  submitted,
  onSelect,
  onSubmit,
}: {
  question: QuizQuestionType;
  index: number;
  selected: number | null;
  submitted: boolean;
  onSelect: (optionIndex: number) => void;
  onSubmit: () => void;
}) {
  const selectedOption = selected !== null ? question.options[selected] : null;

  const labelId = `question-${index}-label`;

  return (
    <div className="rounded-lg border border-ink/10 bg-white p-5 sm:p-6" role="group" aria-labelledby={labelId}>
      <p id={labelId} className="font-serif text-lg font-semibold text-ink">
        {index + 1}. {question.question}
      </p>

      <div className="mt-3.5 space-y-2" role="radiogroup" aria-label={`Question ${index + 1} options`}>
        {question.options.map((option, oIndex) => {
          const isSelected = selected === oIndex;
          let stateClasses = "border-ink/15 hover:border-cobalt/40";
          if (submitted && isSelected && option.correct) stateClasses = "border-green-600 bg-green-50";
          else if (submitted && isSelected && !option.correct) stateClasses = "border-terracotta bg-terracotta/5";
          else if (submitted && !isSelected && option.correct) stateClasses = "border-green-600/50 bg-green-50/50";
          else if (isSelected) stateClasses = "border-cobalt bg-cobalt/5";

          return (
            <label
              key={oIndex}
              className={`flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm transition ${stateClasses} ${
                submitted ? "cursor-default" : ""
              }`}
            >
              <input
                type="radio"
                name={`question-${index}`}
                checked={isSelected}
                disabled={submitted}
                onChange={() => onSelect(oIndex)}
                className="mt-0.5"
              />
              <span className="text-charcoal">
                <span className="text-ink">{option.text}</span>
                {submitted && <span className="mt-1 block text-xs leading-relaxed text-charcoal/90">{option.explanation}</span>}
              </span>
            </label>
          );
        })}
      </div>

      {!submitted ? (
        <button
          type="button"
          onClick={onSubmit}
          disabled={selected === null}
          className="mt-4 min-h-11 rounded-full bg-ink px-5 py-2 text-sm font-medium text-ivory transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          Submit answer
        </button>
      ) : (
        <div className="mt-4 rounded-lg bg-beige/50 p-4" role="status">
          <p className={`text-sm font-semibold ${selectedOption?.correct ? "text-green-700" : "text-terracotta"}`}>
            {selectedOption?.correct ? "Correct." : "Incorrect."}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-charcoal">{question.options.find((o) => o.correct)?.explanation}</p>
          <a href={`#${question.reviewAnchor}`} className="mt-2 inline-block text-xs font-medium text-cobalt hover:underline">
            Review this concept →
          </a>
        </div>
      )}
    </div>
  );
}
