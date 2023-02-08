import React, { useState } from "react";
import { projects } from "../../Constants/projectList.js";

import { RiShareBoxFill } from "react-icons/ri";
import ProjectGridView from "./ProjectGridView.jsx";
import ProjectListView from "./ProjectListView.jsx";
import ProjectViewButton from "./ProjectViewButton.jsx";
import { Link } from "react-router-dom";

const Project = () => {
  const [listView, setListView] = useState<boolean>(true);

  return (
    <section className="h-fit overflow-hidden">
      <div>
        <h1 className="top-10 left-0 z-[-10] mx-auto p-0 font-AvenirHeavy text-[200px] uppercase leading-none text-white/10 lg:w-[1100px] lg:text-white/20 xl:w-[1500px]">
          my <br /> <span className="text-white/80">projects</span>
        </h1>
        {/* Grid or Listview */}
        <ProjectViewButton setListView={setListView} listView={listView} />
        {/* Container for Projects content */}
        <div className="xl:mt-26 mt-20">
          <ProjectListView listView={listView} projects={projects} />

          {/* Project Grid View */}
          <ProjectGridView listView={listView} projects={projects} />

          {/* More Project Button */}
          <div className="mt-20 mb-6 flex items-center justify-center">
            <Link
              className="flex w-fit items-center gap-2 rounded-xl border border-white/60 p-3 px-4 text-[20px] text-white/60 transition-all duration-200 ease-in hover:scale-105"
              to="/projects"
            >
              <p>More Projects</p>
              <RiShareBoxFill size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
