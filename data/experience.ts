import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "infosys",
    role: "AI Intern",
    company: "Infosys Springboard",
    location: "Remote, India",
    period: "Nov 2025 – Present",
    bullets: [
      "Developed an AI-powered legal document analysis system using Retrieval-Augmented Generation (RAG), achieving 90% accuracy in clause extraction.",
      "Built a multi-agent LLM orchestration framework using LangGraph with specialized agents for legal, finance, and compliance analysis.",
      "Implemented RAG pipeline with HuggingFace embeddings and Pinecone vector database, reducing query response times by 60% via parallel indexing.",
      "Optimized model throughput by 3x through quantization techniques and parallel GPU request processing.",
      "Authored comprehensive architectural diagrams and technical documentation for deployment processes."
    ],
    tags: ["RAG", "LangGraph", "Pinecone", "HuggingFace", "Model Optimization"]
  },
  {
    id: "vit-clubs",
    role: "Event Manager & Developer",
    company: "VITKULT & VITronix Club, VIT Bhopal",
    location: "Bhopal, India",
    period: "Mar 2025 – Present",
    bullets: [
      "Led cross-functional teams to plan and coordinate 5+ technical and cultural events with over 500+ active participants.",
      "Spearheaded development of registration workflows and custom puzzle visual assets for outreach, increasing sign-ups by 40%.",
      "Managed ground operations, budget tracking, and real-time technical troubleshooting during live campus events."
    ],
    tags: ["Leadership", "Project Management", "Operations", "Event Logistics"]
  }
];
