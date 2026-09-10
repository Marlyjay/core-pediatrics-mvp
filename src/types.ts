export interface QuizOption {
  text: string;
  correct: boolean;
  explanation: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
  reviewAnchor: string;
}

export interface Subsection {
  letter: string;
  name: string;
  slug: string;
  description: string;
  status: "live" | "coming-soon";
  /** Only present when status is "live" — slug of the Lesson this subsection page renders. */
  lessonSlug?: string;
}

export interface Domain {
  slug: string;
  name: string;
  weight: number;
  description: string;
  status: "live" | "coming-soon";
  subsections?: Subsection[];
}

export interface DataTableRow {
  score: string;
  adult: string;
  pediatric: string;
}

export interface DataTableSection {
  label: string;
  rows: DataTableRow[];
}

export interface DataTable {
  title: string;
  columnLabels: { score: string; adult: string; pediatric: string };
  sections: DataTableSection[];
  source?: string;
}

export interface LessonImage {
  src: string;
  alt: string;
  caption: string;
  source?: string;
}

export interface Lesson {
  slug: string;
  domainSlug: string;
  subsectionSlug: string;
  title: string;
  summary: string;
  readingTime: string;
  author: string;
  reviewer: string;
  published: string;
  lastReviewed: string;
  references: string[];
  caseVignette: string;
  objectives: string[];
  keyConcepts: string[];
  background: string;
  clinicalPresentation: string;
  clinicalPresentationTable?: DataTable;
  diagnosticApproach: string;
  diagnosticImage?: LessonImage;
  management: string[];
  clinicalPearl: string;
  commonPitfall: string;
  caseResolution: string;
  takeHomePoints: string[];
  quiz: QuizQuestion[];
}
