interface experienceItems {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  techUsed: string[];
  logo?: string;
  link?: string;
}

export const experience: experienceItems[] = [
  {
    role: "Founder / Full-Stack Developer",
    company: "SelfAI",
    location: "Queens, NY",
    duration: "Jan 2025 – Present",
    description:
      "Founded and led development of SelfAI, a platform that helps users create and share personalized AI agents for professional networking and digital identity.",
    highlights: [
      "Enabled 20+ users to create and share interactive AI profiles, boosting professional engagement and networking memorability during early user testing",
      "Designed and deployed a document-driven RAG pipeline using FastAPI, Pinecone, and OpenAI — increasing contextual accuracy of chatbot replies by 40%",
      "Built a document ingestion system handling 20K+ vector queries with <150ms latency using OpenAI embeddings and chunked Pinecone indexing",
      "Developed a RAG-powered embeddable chat widget in Next.js with secure login, public sessions, QR/link sharing, and support for 100+ chatbot test sessions",
    ],
    techUsed: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "OpenAI API",
      "Pinecone",
      "LangChain",
      "Next.js",
      "ReactJS",
      "TypeScript",
      "TailwindCSS",
      "JWT Auth",
      "OAuth",
      "Vercel",
      "Render",
    ],
    logo: "/images/logos/selfai.png",
    link: "https://selfai.tech",
  },
  {
    role: "Computer Lab Assistant (Part-time)",
    company: "Troy University",
    location: "Troy, AL",
    duration: "Mar 2024 – May 2024",
    description:
      "Mentored students in Python and full-stack development, boosting project completion rates and academic performance. Guided React.js testing using Jest and Cypress, and performed data analysis on campus resource usage.",
    highlights: [
      "Supported 20+ students, helping improve grades and project success by 25%",
      "Led frontend debugging using React.js, Jest, and Cypress — reducing submission errors by 35%",
      "Performed EDA on 10,000+ rows of fitness center data to identify peak-hour trends and reduce congestion",
    ],
    techUsed: ["Python", "React.js", "Jest", "Cypress", "Pandas", "Matplotlib"],
    logo: "/images/logos/troy.png",
    link: "https://www.troy.edu",
  },
  {
    role: "Software Engineer Intern",
    company: "SimplySoft Tech",
    location: "Kathmandu, Nepal",
    duration: "Feb 2023 – Sep 2023",
    description:
      "Contributed to backend development and deployment optimization in a production-level environment using Node.js, PostgreSQL, and CI/CD tools.",
    highlights: [
      "Integrated backend features via REST APIs, supporting 20+ frontend components and reducing API response time by 25%",
      "Boosted PostgreSQL query performance by 30% through JOIN optimization, clause refinement, and indexing",
      "Built CI/CD pipelines using Jenkins and GitHub Actions, cutting release time by 70%",
      "Achieved 100% unit test coverage with Jest and JUnit; monitored and improved backend reliability using AWS CloudWatch",
    ],
    techUsed: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST API",
      "Jenkins",
      "GitHub Actions",
      "Jest",
      "JUnit",
      "AWS CloudWatch",
    ],
  },
  {
    role: "Freelance Web Designer",
    company: "Upwork",
    location: "Remote",
    duration: "Sep 2022 – Jan 2023",
    description:
      "Designed responsive websites and UI layouts for early-stage startups and personal brands through Upwork, focusing on usability and modern frontend design.",
    highlights: [
      "Delivered 5+ client projects involving responsive layouts and custom UI components",
      "Designed mobile-first user experiences using Tailwind CSS and clean HTML structures",
      "Collaborated with developers and non-technical clients to translate requirements into working prototypes",
    ],
    techUsed: ["TailwindCSS", "Figma", "HTML", "CSS", "UI/UX Design"],
    logo: "/images/logos/upwork.png",
    link: "https://www.upwork.com/freelancers/~your-profile",
  },
];
