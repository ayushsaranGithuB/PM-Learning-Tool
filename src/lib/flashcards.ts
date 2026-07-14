export type Flashcard = {
  id: string;
  prompt: string;
  answer: string;
  lessonSlug: string;
};

export const flashcards: Flashcard[] = [
  {
    id: "what-is-pm-01",
    lessonSlug: "what-is-product-management",
    prompt: "A team keeps shipping features, but retention does not improve. What should the PM clarify first?",
    answer: "The PM should first clarify the user problem or behavior that needs to change, then define how success will be measured."
  },
  {
    id: "what-is-pm-02",
    lessonSlug: "what-is-product-management",
    prompt: "Why is product management better described as decision management than feature management?",
    answer: "Because the PM's real job is to help the team make better decisions about problems, priorities, trade-offs, and outcomes rather than simply producing more features."
  },
  {
    id: "what-is-pm-03",
    lessonSlug: "what-is-product-management",
    prompt: "When a designer, engineer, and PM disagree about the next move, what does the PM contribute?",
    answer: "The PM brings clarity on the user problem, the business context, the trade-offs, and the definition of success so the team can make a better decision together."
  }
];

export function getFlashcardsForLesson(slug: string) {
  return flashcards.filter((card) => card.lessonSlug === slug);
}
