import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { projects } from "../../constants/project";

const ProjectIndividual = ({
  projectId,
}: {
  projectId: string | undefined;
}) => {
  const Project = projects.find((x) => x.projectId === projectId);
  if (!Project) return null;

  return (
    <section className="mx-auto flex h-fit flex-col justify-center overflow-hidden py-10 px-4 lg:w-[900px] lg:py-20 xl:w-[1100px]">
      <header className="mb-10">
        <h1 className="font-AvenirHeavy text-[32px] uppercase text-white lg:text-[48px]">
          {Project.projectName}
        </h1>
        <p className="font-AvenirBook text-sm uppercase tracking-wider text-white/50">
          {Project.projectType} · {Project.projectFor}
        </p>
      </header>

      <div className="overflow-hidden rounded-lg border border-white/20">
        <img
          src={Project.projectCover}
          alt={`${Project.projectName} Cover`}
          className="w-full object-cover"
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to={Project.projectGithubLink}
          target="_blank"
          className="flex items-center gap-2 rounded-md bg-white py-2 px-5 text-sm font-medium uppercase text-black transition-transform hover:scale-105"
        >
          Github <BsArrowUpRight size={16} />
        </Link>
        {Project.projectLiveLink && (
          <Link
            to={Project.projectLiveLink}
            target="_blank"
            className="flex items-center gap-2 rounded-md border border-white/60 py-2 px-5 text-sm font-medium uppercase text-white/80 transition-transform hover:scale-105"
          >
            Live Site <BsArrowUpRight size={16} />
          </Link>
        )}
      </div>

      <section className="mt-12">
        <h2 className="border-b border-white/30 pb-2 font-AvenirMedium text-[22px] text-white">
          Project Overview
        </h2>
        <p className="mt-4 font-AvenirBook text-[18px] leading-relaxed text-white/70">
          {Project.projectOverview || Project.projectDesc}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="border-b border-white/30 pb-2 font-AvenirMedium text-[22px] text-white">
          Role & Responsibilities
        </h2>
        <p className="mt-4 font-AvenirBook text-[18px] text-white/60">
          {Project.projectMyRole}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="border-b border-white/30 pb-2 font-AvenirMedium text-[22px] text-white">
          Technologies Used
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3 text-[16px] text-white/70">
          {Project.projectTechnicalSheets.map((tech, index) => (
            <li
              key={index}
              className="rounded-full border border-white/30 bg-white/5 px-4 py-1 text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ProjectIndividual;
