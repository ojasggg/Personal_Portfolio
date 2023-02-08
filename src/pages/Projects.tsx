import { Contact, Project } from "../components";
import ProjectGridView from "../components/Project/ProjectGridView";
import { projects } from "../Constants/projectList";

const Projects = () => {
  return (
    <>
      <main className="mt-20 h-fit overflow-hidden xl:mt-40">
        <section>
          <h1 className="top-10 left-0 z-[-10] mx-auto mb-10 p-0 font-AvenirHeavy text-[100px] uppercase leading-none text-white  lg:w-[1100px] xl:w-[1500px]">
            Latest <br />
            projects
          </h1>
          <div className="mb-10">
            <p className="text-center font-AvenirMedium text-sm text-white/60">
              Note: Projects listed here are mainly freelance/personal projects
              Viewing All projects
            </p>
          </div>
          <ProjectGridView projects={projects} listView={false} />;
        </section>
        <section className="my-36">
          <h1 className="top-10 left-0 z-[-10] mx-auto mb-10 p-0 font-AvenirHeavy text-[100px] uppercase leading-none text-white  lg:w-[1100px] xl:w-[1500px]">
            onGoing
            <br /> Projects
          </h1>
          <div className="mb-10">
            <p className="text-center font-AvenirMedium text-sm text-white/60">
              Note: Projects listed here are mainly freelance/personal projects
              Viewing All projects
            </p>
          </div>
          <ProjectGridView projects={projects} listView={false} />;
        </section>
      </main>
      <Contact />
    </>
  );
};

export default Projects;
