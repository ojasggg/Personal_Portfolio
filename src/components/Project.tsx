import React, { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { RiShareBoxFill } from "react-icons/ri";
import NepalBuy from "../assets/Images/1-black.png";
import { BsCheckLg } from "react-icons/bs";
import { MdLogin } from "react-icons/md";

type projects = {
  projectName: string;
  projectType: string;
  projectDesc: string;
  projectCover: string | null;
  projectLink: string | null;
  projectBgColor: string | null;
};

const projects: projects[] = [
  {
    projectName: "CryptoCurrency",
    projectType: "Website",
    projectDesc:
      "Cryptocurrency Landing Page with animation using AOS react library and Tailwindcss for styling.",
    projectCover: "",
    projectLink: null,
    projectBgColor: null,
  },
  {
    projectName: "SmartEcosystem",
    projectType: "Website",
    projectDesc:
      "Smart Ecosystem Landing Page design and case study done by dlauretsky which I converted into full fledged website and added some custom animation and styling.",
    projectCover: "",
    projectLink: null,
    projectBgColor: null,
  },
  {
    projectName: "NepalBuy",
    projectType: "Fullstack WebApp",
    projectDesc:
      "Nepal Buy is an Ecommerce Full Stack website which currently I am working on. Implementation of Nepal payment gateway API is the key goal behind the motivation of this project.",
    projectCover: "",
    projectLink: null,
    projectBgColor: "bg-[#b5a8c5]",
  },
  {
    projectName: "ChatApplication",
    projectType: "Fullstack WebApp",
    projectDesc:
      "Chat Application is the Full Stack Application inspired to create chat functionality using socket.io for real-time Side effect in the design  with inbuild authentication and many more.",
    projectCover: "",
    projectLink: null,
    projectBgColor: null,
  },
  {
    projectName: "WeatherApp",
    projectType: "Fullstack WebApp",
    projectDesc:
      "Weather web app is small site which throws output of weather status using OpenWeatherMap API.  ",
    projectCover: "",
    projectLink: null,
    projectBgColor: null,
  },
];

const Project = () => {
  const [listView, setListView] = useState(true);
  const [mouseIn, setMouseIn] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  const handleListViewChange = () => {
    setListView(true);
  };

  const handleMouseIn = (index: number) => {
    setHoveredIndex(index);
    setMouseIn(true);
  };

  const handleMouseOut = (index: number) => {
    setHoveredIndex(0);
    setMouseIn(false);
  };
  return (
    <section className="h-fit">
      <div>
        <h1 className="top-10 left-0 z-[-10] mx-auto p-0 font-AvenirHeavy text-[200px] uppercase leading-none text-white/10 lg:w-[1100px] lg:text-white/20 xl:w-[1500px]">
          my <br /> <span className="text-white/80">projects</span>
        </h1>
        {/* Grid or Listview */}
        <div className="mx-auto mt-10 flex justify-end lg:w-[1100px] xl:w-[1500px]">
          <div className="flex items-center justify-end gap-4">
            <button
              className={`${
                listView ? "bg-white text-black" : "bg-transparent text-white"
              } rounded-full border-2 border-white/60 p-4 transition ease-in hover:bg-white hover:text-black `}
              onClick={() => setListView(true)}
            >
              <AiOutlineUnorderedList size={22} />
            </button>
            <button
              className={`${
                listView ? "bg-transparent text-white" : "bg-white text-black"
              } rounded-full border-2 border-white/60 p-4 transition ease-in hover:bg-white hover:text-black`}
              onClick={() => setListView(false)}
            >
              <RxDashboard size={22} />
            </button>
          </div>
        </div>
        {/* Container for Projects content */}
        <div className="xl:mt-26 mt-20">
          {/* TODO: 
          1) Grid based desgin left
          2) For Mobile Design Grid base design only visible hide list base design(But test first)
          3) Animation to reveal project images when hover left using GSAP
          4) Switch Design Routing Based on the Layout Button
           */}
          {/* Project List View */}
          <div
            className={`${
              listView ? "visible" : "hidden"
            } mx-auto max-md:hidden lg:w-[1100px] xl:w-[1500px] `}
          >
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

          {/* Project Grid View */}
          <div className={`${listView ? "hidden" : "visible"} w-full`}>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4">
              {/* Project Card */}
              {projects.map((project, index) => (
                <div
                  className={`${
                    project.projectBgColor !== null
                      ? project.projectBgColor
                      : "bg-green-200"
                  } relative flex items-center justify-center overflow-hidden lg:h-[340px] lg:w-[1/3] xl:h-[400px] xl:w-[1/4]`}
                  key={index}
                >
                  <div
                    className="project-box flex h-full w-full cursor-pointer items-center justify-center"
                    onMouseEnter={() => handleMouseIn(index)}
                    onMouseLeave={() => handleMouseOut(index)}
                  >
                    <img
                      src={project.projectCover || NepalBuy}
                      alt={project.projectName}
                      className={`${
                        mouseIn && hoveredIndex === index ? "scale-90" : ""
                      } w-[60%] transition-all duration-500`}
                    />
                    <div
                      className={`${
                        mouseIn && hoveredIndex === index
                          ? "animation-[visible-animate]"
                          : "opacity-0"
                      } absolute flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 font-AvenirRoman text-[18px] transition-all delay-200 duration-200 ease-in-out`}
                    >
                      View
                    </div>
                    <div className="absolute h-full w-full bg-gray-500 opacity-[0.5] transition-all delay-200 duration-200 ease-in hover:opacity-0"></div>
                  </div>
                </div>
              ))}
            </div>
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
