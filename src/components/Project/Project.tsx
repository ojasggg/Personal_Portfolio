import { useState } from "react";
import { projects } from "../../constants/project.js";

import ProjectGridView from "./ProjectGridView.jsx";
import ProjectListView from "./ProjectListView.jsx";
import ProjectViewButton from "./ProjectViewButton.jsx";

const Project = () => {
  const [listView, setListView] = useState<boolean>(true);

  return (
    <section className="my-32 h-fit max-md:mx-auto" data-scroll-section>
      <h1
        className="top-10 left-0 z-[-10] mx-auto p-0 font-AvenirHeavy text-[70px] uppercase leading-none tracking-tight text-white/20  md:text-[140px] lg:w-[1100px] lg:text-[160px] lg:tracking-normal xl:w-[1500px] xl:text-[200px]"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        my <br /> <span className="text-white/80">projects</span>
      </h1>

      <ProjectViewButton setListView={setListView} listView={listView} />

      <div className="xl:mt-26 mt-14 lg:mt-20">
        <ProjectListView listView={listView} projects={projects} />

        <ProjectGridView listView={listView} projects={projects} />
      </div>
    </section>
  );
};

export default Project;
