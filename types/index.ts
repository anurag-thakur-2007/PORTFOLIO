export interface Project {
  id: string;
  title: string;
  role: string;
  category: "ai" | "fullstack" | "systems";
  tagline: string;
  tech: string[];
  problem: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  architecture: string; // Describes layout or contains Mermaid text details
  github?: string;
  live?: string;
  year: string;
  slug: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
  logo?: string;
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    level: "expert" | "advanced" | "proficient";
    icon?: string;
  }[];
}
