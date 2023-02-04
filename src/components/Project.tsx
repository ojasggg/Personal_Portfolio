import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { RiShareBoxFill } from "react-icons/ri";

type projects = {
  projectName: String;
  projectType: String;
  projectDesc: String;
  projectCover: String;
};

const projects: projects[] = [
  {
    projectName: "CryptoCurrency",
    projectType: "Website",
    projectDesc:
      "Cryptocurrency Landing Page with animation using AOS react library and Tailwindcss for styling.",
    projectCover: CryptoImg1,
  },
  {
    projectName: "SmartEcosystem",
    projectType: "Website",
    projectDesc:
      "Smart Ecosystem Landing Page design and case study done by dlauretsky which I converted into full fledged website and added some custom animation and styling.",
    projectCover: CryptoImg1,
  },
  {
    projectName: "NepalBuy",
    projectType: "Fullstack WebApp",
    projectDesc:
      "Nepal Buy is an Ecommerce Full Stack website which currently I am working on. Implementation of Nepal payment gateway API is the key goal behind the motivation of this project.",
    projectCover: CryptoImg1,
  },
  {
    projectName: "ChatApplication",
    projectType: "Fullstack WebApp",
    projectDesc:
      "Chat Application is the Full Stack Application inspired to create chat functionality using socket.io for real-time Side effect in the design  with inbuild authentication and many more.",
    projectCover: CryptoImg1,
  },
  {
    projectName: "WeatherApp",
    projectType: "Fullstack WebApp",
    projectDesc:
      "Weather web app is small site which throws output of weather status using OpenWeatherMap API.  ",
    projectCover: CryptoImg1,
  },
];

const Project = () => {
  return (
    <section className="mx-auto h-fit lg:w-[1100px] xl:w-[1500px]">
      <div>
        <h1 className="top-10 left-0 z-[-10] p-0 font-AvenirHeavy text-[200px] uppercase leading-none text-white/10 lg:text-white/20">
          my <br /> <span className="text-white/80">projects</span>
        </h1>
        {/* Grid or Listview */}
        <div className="mt-10 flex justify-end">
          <div className="flex items-center justify-end gap-4">
            <button className="rounded-full border border-white/60 p-4 transition ease-in hover:bg-white hover:text-black">
              <AiOutlineUnorderedList size={22} />
            </button>
            <button className="rounded-full border border-white/60 p-4 transition ease-in hover:bg-white hover:text-black">
              <RxDashboard size={22} />
            </button>
          </div>
        </div>
        {/* Container for Projects content */}
        <div className="mt-20 xl:mt-32">
          {/* TODO: 
          1) Grid based desgin left
          2) For Mobile Design Grid base design only visible hide list base design(But test first)
          3) Animation to reveal project images when hover left using GSAP
          4) Switch Design Routing Based on the Layout Button
           */}
          <div>
            {projects.map((project, index) => (
              <div
                className={`${
                  projects.length - 1 === index ? "border-b" : ""
                } relative flex cursor-pointer items-center justify-between border-t border-white/30 py-14 px-14 transition-all delay-100 duration-300 ease-in-out hover:px-10 xl:py-16`}
                key={index}
              >
                <h1 className="p-0 font-AvenirHeavy text-[80px] leading-none text-white/60 xl:text-[70px]">
                  {project.projectName}
                </h1>
                <p className="font-AvenirRoman text-[24px] text-white/60 xl:text-[24px]">
                  {project.projectType}
                </p>
                <div className="text-full absolute top-[10px] right-0 p-0 font-AvenirHeavy text-[180px] leading-none text-white/20 xl:top-0 xl:text-[200px] xl:text-white/10">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 flex items-center justify-center">
            <button className="flex w-fit items-center gap-2 rounded-xl border border-white/60 p-3 px-4 text-[20px] text-white/60">
              <p>More Projects</p>
              <RiShareBoxFill size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
