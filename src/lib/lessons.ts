import type { AstroComponentFactory, MarkdownHeading } from "astro";
import { moduleById } from "./modules";

export type LessonFrontmatter = {
  title: string;
  slug: string;
  module: string;
  order: number;
  status: "draft" | "published";
  estimatedMinutes: number;
  prerequisites: string[];
  recommendedReading: Array<{
    title: string;
    url: string;
    required: boolean;
  }>;
  flashcards: string[];
};

type LessonModule = {
  frontmatter: LessonFrontmatter;
  Content: AstroComponentFactory;
  rawContent: () => string;
  getHeadings: () => Promise<MarkdownHeading[]>;
};

export type Lesson = {
  id: string;
  data: LessonFrontmatter;
  Content: AstroComponentFactory;
  rawContent: string;
  getHeadings: () => Promise<MarkdownHeading[]>;
};

const lessonModules = import.meta.glob(["../../content/**/*.md", "!../../content/**/*.flashcards.md"], { eager: true }) as Record<string, LessonModule>;

export function getLessons(): Lesson[] {
  return Object.entries(lessonModules)
    .map(([id, lesson]) => {
      // Validate frontmatter presence and required fields
      const fm = lesson.frontmatter;
      if (
        !fm ||
        typeof fm.title !== "string" ||
        typeof fm.slug !== "string" ||
        typeof fm.module !== "string" ||
        typeof fm.order !== "number" ||
        (fm.status !== "draft" && fm.status !== "published") ||
        typeof fm.estimatedMinutes !== "number" ||
        !Array.isArray(fm.prerequisites) ||
        !Array.isArray(fm.recommendedReading) ||
        !Array.isArray(fm.flashcards)
      ) {
        console.warn(`Invalid frontmatter in lesson ${id}, skipping.`);
        return null;
      }

      return {
        id,
        data: fm,
        Content: lesson.Content,
        rawContent: lesson.rawContent(),
        getHeadings: lesson.getHeadings
      };
    })
    .filter((lesson): lesson is Lesson => lesson !== null)
    .sort((a, b) => {
      if (a.data.module !== b.data.module) {
        return a.data.module.localeCompare(b.data.module);
      }

      return a.data.order - b.data.order;
    });
}

export function getLessonUrl(lesson: Lesson) {
  const module = moduleById.get(lesson.data.module);

  if (!module) {
    throw new Error(`Unknown module id: ${lesson.data.module}`);
  }

  return `/${module.path}/${lesson.data.slug}/`;
}

export function getModuleUrl(moduleId: string) {
  const module = moduleById.get(moduleId);

  if (!module) {
    throw new Error(`Unknown module id: ${moduleId}`);
  }

  return `/${module.path}/`;
}