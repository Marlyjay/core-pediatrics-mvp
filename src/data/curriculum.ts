import type { Domain, Lesson } from "../types";

export const domains: Domain[] = [
  {
    slug: "trauma",
    name: "Trauma",
    weight: 17,
    description: "Recognition and management of pediatric injury, from primary survey through definitive care.",
    status: "live",
    subsections: [
      {
        letter: "A",
        name: "Trauma Resuscitation",
        slug: "trauma-resuscitation",
        description: "Primary and secondary survey, airway and hemorrhage control, and the team-based approach to the injured child.",
        status: "live",
        lessonSlug: "pediatric-trauma-resuscitation",
      },
      {
        letter: "B",
        name: "Multisystem Trauma",
        slug: "multisystem-trauma",
        description: "Approach to the child with injuries across multiple body systems, including triage and scoring.",
        status: "coming-soon",
      },
      {
        letter: "C",
        name: "Chest Trauma",
        slug: "chest-trauma",
        description: "Blunt and penetrating thoracic injury, including pneumothorax, hemothorax, and pulmonary contusion.",
        status: "coming-soon",
      },
      {
        letter: "D",
        name: "Abdominal/Pelvic and Genitourinary Trauma",
        slug: "abdominal-pelvic-genitourinary-trauma",
        description: "Solid-organ and hollow-viscus injury, pelvic fracture, and genitourinary trauma in children.",
        status: "coming-soon",
      },
      {
        letter: "E",
        name: "Head and Brain Injuries",
        slug: "head-and-brain-injuries",
        description: "Minor and severe traumatic brain injury, skull fractures, and clinical decision rules for imaging.",
        status: "coming-soon",
      },
      {
        letter: "F",
        name: "Spine and Spinal Cord Injuries",
        slug: "spine-and-spinal-cord-injuries",
        description: "Cervical and thoracolumbar spine assessment, immobilization, and spinal cord injury without radiographic abnormality.",
        status: "coming-soon",
      },
      {
        letter: "G",
        name: "Neck, Oral, and Maxillofacial Injuries",
        slug: "neck-oral-maxillofacial-injuries",
        description: "Blunt and penetrating neck trauma, dental and oral injury, and maxillofacial fracture patterns.",
        status: "coming-soon",
      },
      {
        letter: "H",
        name: "Musculoskeletal Injuries",
        slug: "musculoskeletal-injuries",
        description: "Fracture patterns unique to the growing skeleton, dislocations, and compartment syndrome.",
        status: "coming-soon",
      },
      {
        letter: "I",
        name: "Ophthalmologic Injuries",
        slug: "ophthalmologic-injuries",
        description: "Ocular trauma assessment and orbital fractures in the pediatric patient.",
        status: "coming-soon",
      },
      {
        letter: "J",
        name: "Burns and Wounds",
        slug: "burns-and-wounds",
        description: "Burn depth and severity assessment, initial management, and general wound care.",
        status: "coming-soon",
      },
    ],
  },
  { slug: "resuscitation", name: "Resuscitation", weight: 10, description: "Recognition and management of the critically ill or arresting child.", status: "coming-soon" },
  { slug: "infectious-diseases", name: "Infectious Diseases", weight: 8, description: "Pediatric infectious syndromes from the well-appearing febrile infant to sepsis.", status: "coming-soon" },
  { slug: "procedures", name: "Procedures", weight: 5, description: "Core procedural skills for pediatric emergency care.", status: "coming-soon" },
  { slug: "neonatal-conditions", name: "Neonatal Conditions", weight: 2, description: "Emergencies specific to the neonatal period.", status: "coming-soon" },
  { slug: "toxicology", name: "Toxicology", weight: 4, description: "Pediatric poisoning, ingestion, and toxidrome recognition.", status: "coming-soon" },
  { slug: "child-abuse-and-maltreatment", name: "Child Abuse and Maltreatment", weight: 4, description: "Recognition, evaluation, and reporting of suspected abuse and neglect.", status: "coming-soon" },
  { slug: "behavioral-health-and-psychosocial-issues", name: "Behavioral Health and Psychosocial Issues", weight: 3, description: "Acute behavioral health presentations and psychosocial emergencies.", status: "coming-soon" },
  { slug: "cardiovascular", name: "Cardiovascular", weight: 3, description: "Pediatric cardiac emergencies, congenital and acquired.", status: "coming-soon" },
  { slug: "pulmonary", name: "Pulmonary", weight: 3, description: "Respiratory distress and failure across the pediatric age spectrum.", status: "coming-soon" },
  { slug: "hematologic-and-oncologic", name: "Hematologic and Oncologic", weight: 4, description: "Bleeding, clotting, and oncologic emergencies in children.", status: "coming-soon" },
  { slug: "gastrointestinal", name: "Gastrointestinal", weight: 3, description: "Acute abdominal and gastrointestinal complaints in children.", status: "coming-soon" },
  { slug: "neurologic-and-neurosurgical", name: "Neurologic and Neurosurgical", weight: 3, description: "Seizures, altered mental status, and neurosurgical emergencies.", status: "coming-soon" },
  { slug: "environmental-emergencies", name: "Environmental Emergencies", weight: 3, description: "Heat, cold, drowning, envenomation, and other environmental exposures.", status: "coming-soon" },
  { slug: "allergic-rheumatologic-immunologic", name: "Allergic, Rheumatologic, and Immunologic", weight: 2, description: "Anaphylaxis, rheumatologic emergencies, and immunologic disease.", status: "coming-soon" },
  { slug: "eyes-ears-nose-oral-neck", name: "Eyes, Ears, Nose, Oral, and Neck", weight: 2, description: "Common and emergent ENT and ophthalmologic complaints.", status: "coming-soon" },
  { slug: "renal-and-electrolyte", name: "Renal and Electrolyte", weight: 2, description: "Acute kidney injury and electrolyte derangement in children.", status: "coming-soon" },
  { slug: "dermatologic", name: "Dermatologic", weight: 2, description: "Pediatric rashes and skin findings that signal emergent disease.", status: "coming-soon" },
  { slug: "endocrine", name: "Endocrine", weight: 2, description: "Diabetic emergencies and other acute endocrine presentations.", status: "coming-soon" },
  { slug: "obstetric-and-gynecologic", name: "Obstetric and Gynecologic", weight: 2, description: "Adolescent gynecologic and obstetric emergencies.", status: "coming-soon" },
  { slug: "urologic", name: "Urologic", weight: 2, description: "Acute urologic complaints in the pediatric patient.", status: "coming-soon" },
  { slug: "metabolic-and-genetic-emergencies", name: "Metabolic and Genetic Emergencies", weight: 1, description: "Decompensation of inborn errors of metabolism and genetic disease.", status: "coming-soon" },
  { slug: "musculoskeletal-and-orthopedic", name: "Musculoskeletal and Orthopedic", weight: 1, description: "Non-traumatic musculoskeletal and orthopedic complaints.", status: "coming-soon" },
];

export const lessons: Lesson[] = [
  {
    slug: "pediatric-trauma-resuscitation",
    domainSlug: "trauma",
    subsectionSlug: "trauma-resuscitation",
    title: "Pediatric Trauma Resuscitation",
    summary:
      "A structured, team-based approach to the initial assessment and stabilization of the injured child, from arrival through disposition.",
    readingTime: "7 min read",
    author: "Core Pediatrics Editorial Team",
    reviewer: "Pending expert review",
    published: "2026-01-15",
    lastReviewed: "2026-01-15",
    references: [
      "Placeholder reference — current ATLS/PALS-aligned primary survey framework (source pending verification).",
      "Placeholder reference — pediatric-specific modifications to trauma resuscitation (source pending verification).",
    ],
    caseVignette:
      "A 6-year-old is brought to the emergency department after being struck by a slow-moving vehicle while crossing the street. Emergency services report the child was ambulatory at the scene and is now alert, though quiet. On arrival, the child is breathing without obvious distress and is holding still on the stretcher. (This is a fictional, illustrative case created for this prototype. It does not describe a real patient.)",
    objectives: [
      "Describe a structured, team-based sequence for the initial resuscitation of an injured child.",
      "Identify pediatric-specific considerations that modify the standard primary survey.",
      "Explain how the secondary survey and reassessment fit into ongoing trauma care.",
    ],
    keyConcepts: [
      "Pediatric trauma resuscitation follows a structured, rehearsed sequence so life-threatening problems are found in a consistent order.",
      "Children can physiologically compensate for significant injury for a period of time, so a reassuring initial exam does not exclude serious injury.",
      "Reassessment is continuous, not a one-time checklist — it is repeated throughout the resuscitation.",
    ],
    background:
      "Placeholder narrative — pending expert review. A completed version of this section will summarize the epidemiology of pediatric trauma and the anatomic and physiologic features that distinguish children from adults, including how body size and skeletal characteristics change injury patterns and detection.",
    clinicalPresentation:
      "Placeholder narrative — pending expert review. This section will describe how injured children typically present, including the physiologic compensation noted above, and highlight pediatric-specific exam patterns across the airway, breathing, circulation, disability, and exposure domains. The disability (neurologic) assessment is commonly documented using the Glasgow Coma Scale, adapted for pre-verbal children:",
    clinicalPresentationTable: {
      title: "Table 1. Adult and Pediatric Glasgow Coma Scales",
      columnLabels: { score: "", adult: "Adult", pediatric: "Pediatric" },
      sections: [
        {
          label: "Eye Opening",
          rows: [
            { score: "4", adult: "Spontaneously", pediatric: "Spontaneously" },
            { score: "3", adult: "To speech", pediatric: "To voice" },
            { score: "2", adult: "To pain", pediatric: "To pain" },
            { score: "1", adult: "No response", pediatric: "No response" },
          ],
        },
        {
          label: "Verbal Response",
          rows: [
            { score: "5", adult: "Oriented", pediatric: "Coos, babbles, interacts" },
            { score: "4", adult: "Confused", pediatric: "Irritable, crying" },
            { score: "3", adult: "Inappropriate words", pediatric: "Cries to pain" },
            { score: "2", adult: "Incomprehensible sounds", pediatric: "Moans" },
            { score: "1", adult: "No response", pediatric: "No response" },
          ],
        },
        {
          label: "Motor Response",
          rows: [
            { score: "6", adult: "Follows commands", pediatric: "Spontaneous movement" },
            { score: "5", adult: "Localizes pain", pediatric: "Withdraws to touch" },
            { score: "4", adult: "Withdraws from pain", pediatric: "Withdraws from pain" },
            { score: "3", adult: "Decorticate posturing", pediatric: "Decorticate posturing" },
            { score: "2", adult: "Decerebrate posturing", pediatric: "Decerebrate posturing" },
            { score: "1", adult: "No response", pediatric: "No response" },
          ],
        },
      ],
    },
    diagnosticApproach:
      "Placeholder narrative — pending expert review. A completed version of this section would describe how history, mechanism, and serial exam findings are integrated to guide further evaluation during resuscitation.",
    management: [
      "Airway, with cervical spine precautions — placeholder detail pending expert review.",
      "Breathing and ventilation — placeholder detail pending expert review.",
      "Circulation and hemorrhage control — placeholder detail pending expert review.",
      "Disability, or neurologic status — placeholder detail pending expert review.",
      "Exposure and environmental control — placeholder detail pending expert review.",
    ],
    clinicalPearl:
      "A calm resuscitation is usually the product of a sequence the team has already rehearsed, not a sign that the case is simple.",
    commonPitfall:
      "Anchoring on the most visually dramatic injury and delaying the structured survey can cause a less obvious, more urgent problem to be missed.",
    caseResolution:
      "Returning to the child struck by the vehicle: despite the reassuring initial appearance, the team proceeds through the full structured primary survey and commits to repeated reassessment rather than concluding the evaluation early. (Placeholder resolution — a completed version of this lesson would describe specific findings and disposition once verified content is available.)",
    takeHomePoints: [
      "A structured, rehearsed sequence lets a trauma team move quickly without missing steps — the sequence matters as much as the individual skills.",
      "Children compensate physiologically for longer than adults before showing overt signs of shock, so a normal-appearing exam does not rule out significant injury.",
      "Reassessment throughout the resuscitation, not just at the start, is what catches evolving injuries.",
    ],
    quiz: [
      {
        question:
          "A trauma team is assembling before a patient arrives. What is the primary purpose of following a fixed, rehearsed sequence rather than assessing findings as they happen to be noticed?",
        reviewAnchor: "background",
        options: [
          {
            text: "It ensures immediately life-threatening problems are found and addressed in a consistent order, regardless of which one is most visually obvious.",
            correct: true,
            explanation: "A fixed sequence protects against missing a less-obvious but more urgent problem because attention was drawn elsewhere.",
          },
          {
            text: "It is required for legal documentation purposes only.",
            correct: false,
            explanation: "Documentation matters, but that is not the clinical reason a structured sequence exists.",
          },
          {
            text: "It allows a single clinician to work without needing a team.",
            correct: false,
            explanation: "Structured resuscitation is designed around simultaneous, team-based roles, not solo assessment.",
          },
          {
            text: "It is only necessary when the mechanism of injury is unknown.",
            correct: false,
            explanation: "A structured approach is used for every significant trauma presentation, regardless of how much is known about the mechanism.",
          },
        ],
      },
      {
        question: "Why can a young child appear clinically stable on initial exam despite having sustained a significant injury?",
        reviewAnchor: "clinical-presentation",
        options: [
          {
            text: "Pediatric physiology can compensate effectively for a period of time before vital signs clearly change, which can mask evolving injury.",
            correct: true,
            explanation: "This physiologic reserve is a key reason ongoing reassessment is emphasized throughout pediatric trauma care.",
          },
          {
            text: "Children are inherently less likely than adults to sustain serious internal injury.",
            correct: false,
            explanation: "Mechanism and anatomy — not a lower likelihood of injury — are what differ; serious injury is still possible with a reassuring initial exam.",
          },
          {
            text: "Standard monitoring equipment is not designed to detect changes in pediatric patients.",
            correct: false,
            explanation: "Monitoring is effective in children; the issue is the timing and pattern of physiologic compensation, not equipment limitations.",
          },
          {
            text: "Pain responses in children are typically blunted compared with adults.",
            correct: false,
            explanation: "This is not an accurate general statement about pediatric pain response and is not the reason for reassessment emphasis.",
          },
        ],
      },
      {
        question: "During ongoing trauma care, when should reassessment of the primary survey occur?",
        reviewAnchor: "management",
        options: [
          {
            text: "Only once, immediately after the initial primary survey is completed.",
            correct: false,
            explanation: "A single reassessment does not account for injuries or physiologic changes that evolve after the first assessment.",
          },
          {
            text: "Repeatedly throughout the resuscitation, and after any intervention or change in the patient's status.",
            correct: true,
            explanation: "Continuous reassessment is what allows the team to detect evolving or previously occult injuries.",
          },
          {
            text: "Only if the patient's vital signs become abnormal.",
            correct: false,
            explanation: "Waiting for abnormal vital signs delays detection, since children can compensate before vital signs change.",
          },
          {
            text: "Only at the time of transfer to another team or facility.",
            correct: false,
            explanation: "Reassessment at handoff is important but is not the only point at which it should occur.",
          },
        ],
      },
    ],
  },
];

export function getDomain(slug: string): Domain | undefined {
  return domains.find((d) => d.slug === slug);
}

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getSubsectionForLesson(lesson: Lesson) {
  const domain = getDomain(lesson.domainSlug);
  const subsection = domain?.subsections?.find((s) => s.slug === lesson.subsectionSlug);
  return { domain, subsection };
}

export interface SearchItem {
  id: string;
  type: "Domain" | "Lesson" | "Coming soon";
  title: string;
  description: string;
  href: string;
}

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const domain of domains) {
    items.push({
      id: `domain-${domain.slug}`,
      type: "Domain",
      title: domain.name,
      description: domain.description,
      href: domain.status === "live" ? `/${domain.slug}` : "/",
    });
    for (const sub of domain.subsections ?? []) {
      items.push({
        id: `sub-${domain.slug}-${sub.slug}`,
        type: sub.status === "live" ? "Lesson" : "Coming soon",
        title: `${sub.letter}. ${sub.name}`,
        description: sub.description,
        href: sub.status === "live" && sub.lessonSlug ? `/lessons/${sub.lessonSlug}` : `/${domain.slug}#${sub.slug}`,
      });
    }
  }
  return items;
}

export function filterSearchIndex(items: SearchItem[], rawQuery: string): SearchItem[] {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return [];
  return items.filter((item) =>
    [item.title, item.description, item.type].join(" ").toLowerCase().includes(query)
  );
}
