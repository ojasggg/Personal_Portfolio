import CryptoCurrency from "../assets/Images/Project/CryptoCurrency.png";
import ChatApplication from "../assets/Images/Project/ChatApplication.png";
import NepalBuy from "../assets/Images/Project/NepalBuy.png";
import SmartEcosystem from "../assets/Images/Project/SmartEcosystem.png";
import WeatherApplication from "../assets/Images/Project/WeatherApp.png";

type projects = {
  projectName: string;
  projectType: string;
  projectDesc: string;
  projectCover: string;
  projectLink: string | null;
  projectBgColor: string;
};

export const projects: projects[] = [
  {
    projectName: "CryptoCurrency",
    projectType: "Website",
    projectDesc:
      "Cryptocurrency Landing Page with animation using AOS react library and Tailwindcss for styling.",
    projectCover: CryptoCurrency,
    projectLink: null,
    projectBgColor: "bg-[#E8DFFB]",
  },
  {
    projectName: "SmartEcosystem",
    projectType: "Website",
    projectDesc:
      "Smart Ecosystem Landing Page design and case study done by dlauretsky which I converted into full fledged website and added some custom animation and styling.",
    projectCover: SmartEcosystem,
    projectLink: null,
    projectBgColor: "bg-[#FCEFEE]",
  },
  {
    projectName: "NepalBuy",
    projectType: "Fullstack WebApp",
    projectDesc:
      "Nepal Buy is an Ecommerce Full Stack website which currently I am working on. Implementation of Nepal payment gateway API is the key goal behind the motivation of this project.",
    projectCover: NepalBuy,
    projectLink: null,
    projectBgColor: "bg-[#E2F3F5]",
  },
  {
    projectName: "ChatApplication",
    projectType: "Fullstack WebApp",
    projectDesc:
      "Chat Application is the Full Stack Application inspired to create chat functionality using socket.io for real-time Side effect in the design  with inbuild authentication and many more.",
    projectCover: ChatApplication,
    projectLink: null,
    projectBgColor: "bg-[#FFEBFA]",
  },
  {
    projectName: "WeatherApp",
    projectType: "Fullstack WebApp",
    projectDesc:
      "Weather web app is small site which throws output of weather status using OpenWeatherMap API.  ",
    projectCover: WeatherApplication,
    projectLink: null,
    projectBgColor: "bg-[#CCECE6]",
  },
];
