import { Project } from "@/types";
import { PROFILE_DATA } from "./config";

export interface OtherProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

// Featured Projects designed as full product profiles
export const featuredProjects: Project[] = [
  {
    id: "infosys-rag",
    title: "Legal Document Analyzer (RAG)",
    role: "AI Developer Intern",
    category: "ai",
    tagline: "High-Throughput Multi-Agent Legal Retrieval-Augmented Generation System",
    tech: ["Python", "LangGraph", "Pinecone", "HuggingFace", "Transformers", "GCP"],
    problem: "Legal compliance teams waste thousands of hours manually scanning distributed compliance drafts, facing high extraction latencies and low query precision across multi-thousand-page PDFs.",
    solution: "Designed an autonomous multi-agent orchestration framework using LangGraph. Built specialized legal analysis, compliance parsing, and verification agents. Engineered a custom RAG pipeline utilizing HuggingFace embeddings and Pinecone vector database. Reduced latency via 8-bit model quantization.",
    metrics: [
      { label: "Retrieval Accuracy", value: "90%" },
      { label: "Query Latency Reduction", value: "60%" },
      { label: "Throughput Optimization", value: "3x" }
    ],
    architecture: "Multi-Agent LangGraph router delegating queries to parallel extractor and verification nodes with vector cache lookups.",
    github: PROFILE_DATA.repositories.legalRag,
    year: "2025",
    slug: "legal-rag"
  },
  {
    id: "ridebasket",
    title: "RideBasket Campus Carpool",
    role: "Full-Stack Developer",
    category: "fullstack",
    tagline: "MERN Ride Sharing & Cost Splitting App for Student Communities",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
    problem: "University students lack a structured platform to coordinate cab sharing and cost splitting safely, resulting in empty seats, redundant expenses, and high coordination friction.",
    solution: "Developed a MERN cab-sharing web portal. Coded custom searching logic filtering by location coordinates, gender preferences, and travel schedules. Implemented a secure passenger request-approval workflow allowing booking managers to divide fares and confirm seats dynamically.",
    metrics: [
      { label: "Friction Reduction", value: "80%" },
      { label: "User Accounts Active", value: "300+" },
      { label: "Booking Matches", value: "150+" }
    ],
    architecture: "Express MVC structure with custom JWT authentication headers feeding coordinate ranges to MongoDB aggregation pipelines.",
    github: PROFILE_DATA.repositories.ridebasket,
    year: "2026",
    slug: "ridebasket"
  },
  {
    id: "health-buddy",
    title: "Health Buddy AI Assistant",
    role: "Creator & Lead Developer",
    category: "ai",
    tagline: "Intelligent AI-powered Healthcare Assistant & Symptom Analyzer",
    tech: ["Next.js", "FastAPI", "LangChain", "Gemini Pro", "PostgreSQL", "Tailwind CSS"],
    problem: "Patients frequently struggle to get initial medical guidance, resulting in unnecessary clinic visits or incorrect self-diagnoses.",
    solution: "Created an interactive symptom checker running on Gemini. Integrated LangChain agents to query a vector database containing validated medical guidelines. Linked symptom outputs with local clinic schedules and database appointment registers.",
    metrics: [
      { label: "Triage Accuracy", value: "92%" },
      { label: "Intake Speedup", value: "50%" },
      { label: "Mock Patients Served", value: "400+" }
    ],
    architecture: "FastAPI agent checking symptom logs, searching semantic embedding databases, and writing appointments to PostgreSQL.",
    github: PROFILE_DATA.repositories.healthBuddy,
    year: "2025",
    slug: "health-buddy"
  }
];

// Secondary projects shown in a premium grid
export const otherProjects: OtherProject[] = [
  {
    id: "agrismart",
    title: "AgriSmart Portal",
    description: "IoT soil moisture analyzer integrating crop recommendation ML models.",
    tech: ["Python", "Flask", "Scikit-Learn", "Arduino", "MySQL"],
    github: PROFILE_DATA.repositories.agrismart
  },
  {
    id: "employee-mgmt",
    title: "Employee Directory Manager",
    description: "Backend microservice handling employee lifecycle events, hierarchy structures, and role profiles.",
    tech: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "REST"],
    github: PROFILE_DATA.repositories.employeeMgmt
  },
  {
    id: "devops-project",
    title: "Cloud DevOps Infrastructure",
    description: "Cloud-native DevOps automation containing containerized Docker deployments and Kubernetes node structures.",
    tech: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
    github: PROFILE_DATA.repositories.devopsProject
  },
  {
    id: "git-maven-jenkins",
    title: "DevOps CI/CD Automation",
    description: "CI/CD integration pipeline tracking repository check-ins, running testing routines, and pushing Docker image tags.",
    tech: ["Docker", "Git", "Maven", "Jenkins", "Ansible", "Kubernetes"],
    github: PROFILE_DATA.repositories.gitMavenJenkins
  },
  {
    id: "avipro-travels",
    title: "Avipro Travels Portal",
    description: "Tourism bookings and itinerary compiler equipped with secure transaction gateways.",
    tech: ["React", "Express.js", "Node.js", "MongoDB", "Razorpay"],
    github: PROFILE_DATA.repositories.aviproTravels
  },
  {
    id: "myntra-clone",
    title: "Myntra eCommerce UI Clone",
    description: "Pixel-perfect mock catalog layout with dynamic shopping carts and sizing grids.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: PROFILE_DATA.repositories.myntraClone
  },
  {
    id: "cricket-game",
    title: "Interactive Web Cricket Game",
    description: "Browser-based interactive score accumulator simulating dynamic batting timing and wickets.",
    tech: ["HTML5 Canvas", "CSS3", "JavaScript"],
    github: PROFILE_DATA.repositories.cricketGame
  },
  {
    id: "gramtwin-ai",
    title: "GramTwin AI Smart Portal",
    description: "Geospatial GIS dashboard visualizing crop forecasting, infrastructure, and ML maintenance logs.",
    tech: ["Next.js", "Leaflet.js", "FastAPI", "PostgreSQL", "PostGIS"],
    github: PROFILE_DATA.socials.github
  },
  {
    id: "investai",
    title: "InvestAI Advisory",
    description: "Gemini financial recommendation engine utilizing Vertex AI and Google Agent Development Kit.",
    tech: ["Gemini", "Google ADK", "Vertex AI", "Python", "Flask"],
    github: PROFILE_DATA.socials.github
  }
];

// Fallback compatibility with previous structure
export const projects: Project[] = featuredProjects;
