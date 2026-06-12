export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  outcomeStats: { label: string; value: string }[];
  featuredImage: string; // We'll render custom schematic vector layouts or styled graphic frames
}

export interface Service {
  id: string;
  title: string;
  description: string;
  modules: string[];
  idealFor: string;
  architectureHighlight: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: "System Design" | "Laravel" | "Education";
  readTime: string;
  date: string;
  content: string;
}

export interface ExperienceNode {
  id: string;
  period: string;
  role: string;
  organization: string;
  metric: string;
  description: string;
  highlights: string[];
}

