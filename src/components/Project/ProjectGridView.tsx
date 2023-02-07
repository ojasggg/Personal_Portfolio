import React, { useState } from "react";

type projects = {
  projectName: string;
  projectType: string;
  projectDesc: string;
  projectCover: string;
  projectLink: string | null;
  projectBgColor: string;
};

type propsType = {
  listView: boolean;
  projects: projects[];
};

const ProjectGridView = ({ listView, projects }: propsType) => {
  const [mouseIn, setMouseIn] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  // Grid View Functionality
  const handleMouseIn = (index: number) => {
    setHoveredIndex(index);
    setMouseIn(true);
  };

  const handleMouseOut = (index: number) => {
    setHoveredIndex(index);
    setMouseIn(false);
  };
  return (
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
                src={project.projectCover}
                alt={project.projectName}
                className={`${
                  mouseIn && hoveredIndex === index ? "scale-90" : ""
                } object-contain transition-all duration-500`}
              />
              <div
                className={`${
                  mouseIn && hoveredIndex === index
                    ? "animation-[visible-animate]"
                    : "opacity-0"
                } absolute flex h-20 w-20  items-center justify-center rounded-full bg-blue-600 font-AvenirRoman text-[18px]  transition-all delay-200 duration-200 ease-in-out`}
              >
                View
              </div>
              <div className="absolute h-full w-full bg-gray-500 opacity-[0.5] transition-all delay-200 duration-200 ease-in hover:opacity-0"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGridView;
