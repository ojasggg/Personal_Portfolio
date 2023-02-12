import CryptoCurrency from "../assets/Images/Project/CryptoCurrency.png";
import ChatApplication from "../assets/Images/Project/ChatApplication.png";
import NepalBuy from "../assets/Images/Project/NepalBuy.png";
import SmartEcosystem from "../assets/Images/Project/SmartEcosystem.png";
import WeatherApplication from "../assets/Images/Project/WeatherApp.png";

type projects = {
  projectId: string;
  projectName: string;
  projectType: string;
  projectFor: string;
  projectDesc: string;
  projectMyRole: string;
  projectCover: string;
  projectLiveLink?: string;
  projectGithubLink: string;
  projectTechnicalSheets: string[];
  projectBgColor: string;
};

export const projects: projects[] = [
  {
    projectId: "1",
    projectName: "CryptoCurrency",
    projectType: "Website",
    projectFor: "Personal Project",
    projectDesc:
      "Landing Page for Cryptocurrency with animation using AOS react library and Tailwindcss for styling.",
    projectMyRole: "Frontend Developer",
    projectCover: CryptoCurrency,
    projectLiveLink: "https://ojasggg.github.io/cryptocurrency_landingpage/",
    projectGithubLink: "https://github.com/ojasggg/cryptocurrency_landingpage",
    projectTechnicalSheets: ["TailwindCSS", "", "React.js", "Aos"],
    projectBgColor: "bg-[#E8DFFB]",
  },
  {
    projectId: "2",
    projectName: "SmartEcosystem",
    projectType: "Website",
    projectFor: "Personal Project",
    projectDesc:
      "Smart Ecosystem Landing Page design and case study done by dlauretsky which I converted into full fledged website and added some custom animation and styling.",
    projectMyRole: "Frontend Developer",
    projectCover: SmartEcosystem,
    projectLiveLink: "https://ojasggg.github.io/Project_SmartEcosystem/",
    projectGithubLink: "https://github.com/ojasggg/Project_SmartEcosystem",
    projectTechnicalSheets: ["TailwindCSS", "", "React.js", "Aos"],
    projectBgColor: "bg-[#FCEFEE]",
  },
  {
    projectId: "3",
    projectName: "NepalBuy",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "Nepal Buy is an Ecommerce Full Stack website which currently I am working on. Implementation of Nepal payment gateway API is the key goal behind the motivation of this project.",
    projectMyRole: "FullStack Developer",
    projectCover: NepalBuy,
    projectGithubLink: "https://github.com/ojasggg/Project_Ecommerce",
    projectTechnicalSheets: [
      "TailwindCSS",
      "React.js",
      "Aos",
      "Framer motion",
      "React Redux",
    ],
    projectBgColor: "bg-[#E2F3F5]",
  },
  {
    projectId: "4",
    projectName: "ChatApplication",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "Chat Application is the Full Stack Application inspired to create chat functionality using socket.io for real-time Side effect in the design  with inbuild authentication and many more.",
    projectMyRole: "FullStack Developer",
    projectCover: ChatApplication,
    projectGithubLink: "https://github.com/ojasggg/Chat_Application",
    projectTechnicalSheets: [
      "TailwindCSS",
      "React.js",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    projectBgColor: "bg-[#FFEBFA]",
  },
  {
    projectId: "5",
    projectName: "WeatherApp",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "Weather web app is small site which throws output of weather status using OpenWeatherMap API.  ",
    projectMyRole: "FullStack Developer",
    projectCover: WeatherApplication,
    projectLiveLink: "https://ojasggg.github.io/weather_app/",
    projectGithubLink: "https://github.com/ojasggg/weather_app",
    projectTechnicalSheets: ["OpenWeatherAPI", "React.js", "Node.js"],
    projectBgColor: "bg-[#CCECE6]",
  },
];

export const overallProjects: projects[] = [
  {
    projectId: "1",
    projectName: "CryptoCurrency",
    projectType: "Website",
    projectFor: "Personal Project",
    projectDesc:
      "Landing Page for Cryptocurrency with animation using AOS react library and Tailwindcss for styling.",
    projectMyRole: "Frontend Developer",
    projectCover: CryptoCurrency,
    projectLiveLink: "https://ojasggg.github.io/cryptocurrency_landingpage/",
    projectGithubLink: "https://github.com/ojasggg/cryptocurrency_landingpage",
    projectTechnicalSheets: ["TailwindCSS", "", "React.js", "Aos"],
    projectBgColor: "bg-[#E8DFFB]",
  },
  {
    projectId: "2",
    projectName: "SmartEcosystem",
    projectType: "Website",
    projectFor: "Personal Project",
    projectDesc:
      "Smart Ecosystem Landing Page design and case study done by dlauretsky which I converted into full fledged website and added some custom animation and styling.",
    projectMyRole: "Frontend Developer",
    projectCover: SmartEcosystem,
    projectLiveLink: "https://ojasggg.github.io/Project_SmartEcosystem/",
    projectGithubLink: "https://github.com/ojasggg/Project_SmartEcosystem",
    projectTechnicalSheets: ["TailwindCSS", "", "React.js", "Aos"],
    projectBgColor: "bg-[#FCEFEE]",
  },
  {
    projectId: "3",
    projectName: "NepalBuy",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "Nepal Buy is an Ecommerce Full Stack website which currently I am working on. Implementation of Nepal payment gateway API is the key goal behind the motivation of this project.",
    projectMyRole: "FullStack Developer",
    projectCover: NepalBuy,
    projectGithubLink: "https://github.com/ojasggg/Project_Ecommerce",
    projectTechnicalSheets: [
      "TailwindCSS",
      "React.js",
      "Aos",
      "Framer motion",
      "React Redux",
    ],
    projectBgColor: "bg-[#E2F3F5]",
  },
  {
    projectId: "4",
    projectName: "ChatApplication",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "Chat Application is the Full Stack Application inspired to create chat functionality using socket.io for real-time Side effect in the design  with inbuild authentication and many more.",
    projectMyRole: "FullStack Developer",
    projectCover: ChatApplication,
    projectGithubLink: "https://github.com/ojasggg/Chat_Application",
    projectTechnicalSheets: [
      "TailwindCSS",
      "React.js",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    projectBgColor: "bg-[#FFEBFA]",
  },
  {
    projectId: "5",
    projectName: "WeatherApp",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "Weather web app is small site which throws output of weather status using OpenWeatherMap API.  ",
    projectMyRole: "FullStack Developer",
    projectCover: WeatherApplication,
    projectLiveLink: "https://ojasggg.github.io/weather_app/",
    projectGithubLink: "https://github.com/ojasggg/weather_app",
    projectTechnicalSheets: ["OpenWeatherAPI", "React.js", "Node.js"],
    projectBgColor: "bg-[#CCECE6]",
  },
];

export const onGoingProjects: projects[] = [
  {
    projectId: "3",
    projectName: "NepalBuy",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "Nepal Buy is an Ecommerce Full Stack website which currently I am working on. Implementation of Nepal payment gateway API is the key goal behind the motivation of this project.",
    projectMyRole: "FullStack Developer",
    projectCover: NepalBuy,
    projectGithubLink: "https://github.com/ojasggg/Project_Ecommerce",
    projectTechnicalSheets: [
      "TailwindCSS",
      "React.js",
      "Aos",
      "Framer motion",
      "React Redux",
    ],
    projectBgColor: "bg-[#E2F3F5]",
  },
  {
    projectId: "4",
    projectName: "ChatApplication",
    projectType: "Fullstack WebApp",
    projectFor: "Personal Project",
    projectDesc:
      "Chat Application is the Full Stack Application inspired to create chat functionality using socket.io for real-time Side effect in the design  with inbuild authentication and many more.",
    projectMyRole: "FullStack Developer",
    projectCover: ChatApplication,
    projectGithubLink: "https://github.com/ojasggg/Chat_Application",
    projectTechnicalSheets: [
      "TailwindCSS",
      "React.js",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    projectBgColor: "bg-[#FFEBFA]",
  },
];
