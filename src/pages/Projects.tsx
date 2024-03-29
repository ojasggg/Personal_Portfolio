import { useState } from "react";
import { Contact, Navbar, Transition } from "../components";
import ProjectGridView from "../components/Project/ProjectGridView";
import ProjectListView from "../components/Project/ProjectListView";
import ProjectViewButton from "../components/Project/ProjectViewButton";
import { onGoingProjects, overallProjects } from "../Constants/projectList";

const Projects = () => {
  const [projectListView, setProjectListView] = useState<boolean>(true);
  const [onGoingProjectListView, setOnGoingProjectListView] =
    useState<boolean>(true);

  return (
    <>
      <Navbar />
      <main className="my-20 h-fit overflow-hidden xl:mt-40">
        <section>
          <h1 className="top-10 left-0 z-[-10] m-auto mx-auto mb-10 w-[90%] p-0 font-AvenirHeavy text-[60px] uppercase leading-none text-white lg:w-[1100px] lg:text-[100px] xl:w-[1500px] ">
            Latest <br />
            projects
          </h1>
          <div className="mb-10">
            <p className="text-center font-AvenirMedium text-sm text-white/60">
              Note: Projects listed here are mainly freelance/personal projects
            </p>
          </div>
          <ProjectViewButton
            setListView={setProjectListView}
            listView={projectListView}
          />
          {/* Container for Projects content */}
          <div className="xl:mt-26 mt-14 lg:mt-20">
            <ProjectListView
              listView={projectListView}
              projects={overallProjects}
            />

            {/* Project Grid View */}
            <ProjectGridView
              listView={projectListView}
              projects={overallProjects}
            />
          </div>
        </section>
        <section className="my-36">
          <h1
            className="top-10 left-0 z-[-10] m-auto mx-auto mb-10 w-[90%] p-0 font-AvenirHeavy text-[60px] uppercase leading-none text-white lg:w-[1100px] lg:text-[100px] xl:w-[1500px] "
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            Ongoing <br />
            projects
          </h1>
          <div className="mb-10">
            <p
              className="text-center font-AvenirMedium text-sm text-white/60"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Note: Projects listed here are mainly freelance/personal projects
            </p>
          </div>
          <ProjectViewButton
            setListView={setOnGoingProjectListView}
            listView={onGoingProjectListView}
          />
          {/* Container for Projects content */}
          <div className="xl:mt-26 mt-14 lg:mt-20">
            <ProjectListView
              listView={onGoingProjectListView}
              projects={onGoingProjects}
            />

            {/* Project Grid View */}
            <ProjectGridView
              listView={onGoingProjectListView}
              projects={onGoingProjects}
            />
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default Projects;
