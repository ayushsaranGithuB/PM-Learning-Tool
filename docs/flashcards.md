# Flashcards

## Goal

Flashcards should help readers practice product judgment, not memorize vocabulary.

## Preferred Style

Use scenario-based prompts such as:

- You are the PM for a music app with falling retention. What should you investigate first?
- Your engineering team wants to rewrite infrastructure while leadership wants a launch next month. What trade-off matters most?

## Avoid

- What is product management?
- Define prioritization.
- What does OKR stand for?

## Wrong Answer Recovery

When this project eventually becomes a site, a missed flashcard should point the learner back to:

- the relevant section of the lesson
- the most useful external reading
- a short explanation of why the correct answer matters

## Suggested Starter Format

```yaml
- id: what-is-pm-01
  prompt: "A team keeps shipping features but outcomes do not improve. What job is missing?"
  answer: "Someone needs to define the problem, align the team, and measure whether the work changes outcomes."
  lessonRef: what-is-product-management
  sourceRefs:
    - product-manager-archetype
```
