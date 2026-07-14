export type ModuleMeta = {
  id: string;
  path: string;
  title: string;
  description: string;
};

export const modules: ModuleMeta[] = [
  {
    id: "01-foundations",
    path: "foundations",
    title: "Foundations",
    description: "Core PM concepts for builders starting to shift from shipping work to shaping decisions."
  },
  {
    id: "02-product-thinking",
    path: "product-thinking",
    title: "Product Thinking",
    description: "Mental models for understanding user problems, outcomes, and product judgment."
  },
  {
    id: "03-strategy",
    path: "strategy",
    title: "Strategy",
    description: "How products connect to business goals, timing, and competitive positioning."
  },
  {
    id: "04-discovery",
    path: "discovery",
    title: "Discovery",
    description: "Research, opportunity framing, and learning before the team commits to building."
  },
  {
    id: "05-execution",
    path: "execution",
    title: "Execution",
    description: "How PMs work with design and engineering to turn decisions into reliable delivery."
  },
  {
    id: "06-analytics",
    path: "analytics",
    title: "Analytics",
    description: "Metrics, funnels, experiments, and the signals that matter more than dashboards."
  },
  {
    id: "07-growth",
    path: "growth",
    title: "Growth",
    description: "Activation, habits, loops, and the mechanics of helping a product spread and stick."
  },
  {
    id: "08-leadership",
    path: "leadership",
    title: "Leadership",
    description: "Influence, communication, and the systems that make product teams stronger over time."
  },
  {
    id: "09-careers",
    path: "careers",
    title: "Careers",
    description: "Guides for moving from engineering or design into product management."
  }
];

export const moduleById = new Map(modules.map((module) => [module.id, module]));
export const moduleByPath = new Map(modules.map((module) => [module.path, module]));
