import ChatApplication from "../assets/Images/Project/ChatApplication.png";
import NepalBuy from "../assets/Images/Project/NepalBuy.png";
import SelfAI from "../assets/Images/Project/SelfAi.png";
import ChatGPTClone from "../assets/Images/Project/ChatGPT_Clone.png";

type projectItems = {
  projectId: string;
  projectName: string;
  projectType: string;
  projectFor: string;
  projectDesc: string;
  projectOverview: string;
  projectMyRole: string;
  projectCover: string;
  projectLiveLink?: string;
  projectGithubLink: string;
  projectTechnicalSheets: string[];
  projectBgColor: string;
};

export const projects: projectItems[] = [
  {
    projectId: "0",
    projectName: "SelfAI",
    projectType: "Fullstack AI Platform",
    projectFor: "Flagship Project",
    projectDesc:
      "SelfAI is a full-stack AI product that enables users to build and share personal AI agents powered by Retrieval-Augmented Generation (RAG).",
    projectOverview:
      "SelfAI is a personalized AI agent platform that allows users to upload their bios, resumes, or personal documents and generate a smart AI interface others can chat with to learn more about them. It uses FastAPI for backend logic, OpenAI and Pinecone for embeddings and retrieval, and Redis for caching. Users can create a public AI profile with a shareable link, QR code, or an embeddable widget. The product is live at https://www.selfai.tech and focuses on practical use cases in networking, job hunting, and digital identity.",
    projectMyRole: "Founder / Full Stack AI Developer",
    projectCover: SelfAI,
    projectLiveLink: "https://www.selfai.tech",
    projectGithubLink: "https://github.com/ojasggg/SelfAI",
    projectTechnicalSheets: [
      "Python",
      "TypeScript",
      "FastAPI",
      "Next.js",
      "TailwindCSS",
      "PostgreSQL",
      "Pinecone",
      "OpenAI API",
      "LangChain",
      "Redis",
      "JWT Auth",
    ],
    projectBgColor: "bg-[#D9E4F5]",
  },
  {
    projectId: "1",
    projectName: "ChatGPT Clone",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "A ChatGPT clone using OpenAI APIs supporting multiple model types from text generation to code completion. Implements authentication and persistent history.",
    projectOverview:
      "This project is a functional clone of ChatGPT that uses OpenAI's GPT models via API to deliver real-time interactions. It supports multiple models including text-davinci, code-davinci, and more. Built using Next.js and Firebase for frontend and storage, and styled with TailwindCSS, this app also includes login functionality using NextAuth. It was a deep dive into how LLM APIs work under the hood and how to build scalable UIs around them.",
    projectMyRole: "Full Stack Developer",
    projectCover: ChatGPTClone,
    projectLiveLink: "https://project-chatgpt.vercel.app/",
    projectGithubLink: "https://github.com/ojasggg/Project_ChatGPT_Clone",
    projectTechnicalSheets: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "TailwindCSS",
      "NextAuth",
      "SWR",
      "OpenAI API",
    ],
    projectBgColor: "bg-[#9593FF]",
  },
  {
    projectId: "2",
    projectName: "ChatAppX",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "A chat application featuring real-time messaging using Socket.io, with user authentication, MongoDB persistence, and Express-based APIs.",
    projectOverview:
      "This is a MERN-stack powered chat application designed to support real-time messaging using WebSockets via Socket.io. It includes JWT-based user authentication, protected routes, and persistent message storage with MongoDB. The chat interface is responsive and includes online status indicators and multi-user room support. This project strengthened skills in backend socket handling, real-time data sync, and full-stack deployment.",
    projectMyRole: "Full Stack Developer",
    projectCover: ChatApplication,
    projectGithubLink: "https://github.com/ojasggg/Chat_Application",
    projectTechnicalSheets: [
      "ReactJS",
      "JavaScript",
      "TailwindCSS",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    projectBgColor: "bg-[#FFEBFA]",
  },
  {
    projectId: "3",
    projectName: "NepalBuy",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "A full-fledged eCommerce platform with ongoing integration of Nepalese payment gateway APIs. Features Redux state management and modern UI animations.",
    projectOverview:
      "NepalBuy is an eCommerce platform designed with the local Nepalese market in mind. The app includes full shopping cart, category filtering, responsive product grids, and an in-progress integration of Nepal's payment gateway APIs. Built with React and Redux for global state management and styled with Framer Motion and TailwindCSS, the project balances both visual appeal and practical backend challenges.",
    projectMyRole: "Full Stack Developer",
    projectCover: NepalBuy,
    projectGithubLink: "https://github.com/ojasggg/Project_Ecommerce",
    projectTechnicalSheets: [
      "JavaScript",
      "ReactJS",
      "TailwindCSS",
      "AOS",
      "Framer Motion",
      "Redux",
    ],
    projectBgColor: "bg-[#E2F3F5]",
  },
];
