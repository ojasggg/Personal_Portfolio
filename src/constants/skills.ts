interface skillItems {
  title: string;
  skills: string[];
}

export const skillList: skillItems[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "FastAPI",
      "Flask",
      "React.js",
      "Next.js",
      "Express",
      "Node.js",
      "LangChain",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    title: "Databases & Vector Stores",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Pinecone", "ChromaDB"],
  },
  {
    title: "AI & LLM Tools",
    skills: ["OpenAI API", "LangChain", "RAG Pipelines"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Firebase",
      "Vercel",
      "Render",
      "Netlify",
      "Linux",
    ],
  },

  {
    title: "Design & Methodology",
    skills: [
      "Agile",
      "Scrum",
      "MVP Strategy",
      "ERD Modeling",
      "User Stories",
      "Wireframes (Figma)",
    ],
  },
  {
    title: "Authentication & Security",
    skills: ["JWT Auth", "OAuth"],
  },
];
