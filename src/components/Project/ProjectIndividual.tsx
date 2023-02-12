import { BsArrowUpRight } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import CryptoCurrency from "../../assets/Images/Project/CryptoCurrency.png";
import { overallProjects } from "../../Constants/projectList";

const ProjectIndividual = ({ projectId }: { projectId: string }) => {
  const Project = overallProjects.find((x) => x.projectId === projectId);
  return (
    <section className="mx-auto flex h-fit flex-col justify-center overflow-hidden py-10 lg:w-[800px] lg:py-20 xl:w-[1000px]">
      <div className="mx-auto flex w-[95%] items-center justify-between">
        <h1 className="p-0 font-AvenirHeavy text-[34px] uppercase leading-none ">
          {Project?.projectName}
        </h1>
        <p className="font-AvenirMedium text-[14px] uppercase text-white/60 lg:text-[16px]">
          {Project?.projectFor}
        </p>
      </div>
      <img
        src={Project?.projectCover}
        alt="CryptoCurrency"
        className="mt-10 object-contain"
      />

      <div className="mt-8 flex items-center justify-center gap-4 lg:mt-[30px]">
        <Link
          className="flex items-center gap-2 rounded-full bg-white py-[10px] px-[30px] text-black transition-all duration-200 ease-in hover:scale-105"
          to={`${Project?.projectGithubLink}`}
          target="_blank"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <p className="font-AvenirMedium text-[14px] uppercase lg:text-[16px]">
            Github
          </p>
          <BsArrowUpRight size={16} />
        </Link>
        <Link
          className="flex items-center gap-2 rounded-full border border-white/60 bg-transparent py-[10px] px-[30px] transition-all duration-200 ease-in hover:scale-105"
          to={`${Project?.projectLiveLink}`}
          target="_blank"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <p className="font-AvenirMedium text-[14px] uppercase lg:text-[16px]">
            Project Live
          </p>
          <BsArrowUpRight size={16} />
        </Link>
      </div>
      <div>
        <div className="mx-auto w-[95%] py-8">
          <h4 className="border-b border-white pb-4 font-AvenirMedium text-[24px] leading-none">
            About this project
          </h4>
          <p className="mt-4 font-AvenirBook text-[18px] text-white/60">
            {Project?.projectDesc}
          </p>
        </div>
        <div className="mx-auto w-[95%] py-4">
          <h6 className="border-b border-white pb-4 font-AvenirMedium text-[20px] leading-none">
            Role in project
          </h6>
          <ul className="mt-4 list-inside list-disc font-AvenirBook text-[18px] text-white/60">
            <li>{Project?.projectMyRole}</li>
          </ul>
        </div>

        <div className="mx-auto w-[95%] py-4">
          <h4 className="border-b border-white pb-4 font-AvenirMedium text-[20px]">
            Technical Sheet
          </h4>
          <ul className="mt-4 flex list-inside list-disc flex-col gap-3 font-AvenirBook text-[18px] text-white/60">
            {Project?.projectTechnicalSheets?.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectIndividual;
