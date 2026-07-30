export interface Skill {
  name: string;
  level: "expert" | "advanced" | "proficient";
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "Python", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "C / C++", level: "advanced" },
      { name: "JavaScript", level: "expert" },
      { name: "Java", level: "advanced" },
      { name: "PHP", level: "proficient" },
    ],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    skills: [
      { name: "Retrieval-Augmented Gen (RAG)", level: "expert" },
      { name: "LangGraph / LangChain", level: "expert" },
      { name: "Gemini / Vertex AI", level: "expert" },
      { name: "HuggingFace & Transformers", level: "advanced" },
      { name: "Vector Databases (Pinecone)", level: "expert" },
      { name: "PyTorch & Scikit-learn", level: "proficient" },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    skills: [
      { name: "FastAPI / Python", level: "expert" },
      { name: "Node.js / Express.js", level: "expert" },
      { name: "Spring Boot / Java", level: "advanced" },
      { name: "RESTful API Integration", level: "expert" },
      { name: "GraphQL APIs", level: "proficient" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "Next.js / React 19", level: "expert" },
      { name: "Tailwind CSS & shadcn/ui", level: "expert" },
      { name: "Framer Motion & GSAP", level: "advanced" },
      { name: "Leaflet.js Mapping", level: "advanced" },
      { name: "HTML5 & CSS3 Spec", level: "expert" },
    ],
  },
  {
    id: "databases",
    title: "Databases & GIS",
    skills: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "MySQL", level: "proficient" },
      { name: "PostGIS Spatial Ext", level: "advanced" },
      { name: "Redis Caching", level: "proficient" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker Containerization", level: "advanced" },
      { name: "CI/CD Pipelines", level: "advanced" },
      { name: "Linux System Ops", level: "proficient" },
      { name: "Vercel Deployments", level: "expert" },
      { name: "Google Cloud Platform", level: "advanced" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Utilities",
    skills: [
      { name: "Git & GitHub Actions", level: "expert" },
      { name: "Maven & Build Tools", level: "advanced" },
      { name: "Jenkins Integration", level: "advanced" },
      { name: "Postman & API Client", level: "expert" },
      { name: "VS Code Editor", level: "expert" },
    ],
  },
  {
    id: "soft",
    title: "Soft Skills",
    skills: [
      { name: "Engineering Leadership", level: "expert" },
      { name: "Project Management", level: "advanced" },
      { name: "Agile / Scrum Cycles", level: "advanced" },
      { name: "Outreach & Operations", level: "expert" },
    ],
  },
];
