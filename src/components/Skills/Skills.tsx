import { skillList } from "../../constants/skills";

const Skills = () => {
  return (
    <section className="mx-auto my-32 h-fit lg:w-[1100px] xl:w-[1500px] ">
      <div className="mb-8 flex items-center justify-center">
        <h1
          className="font-AvenirHeavy text-[66px] uppercase leading-none text-white/20 lg:text-[160px] xl:text-[200px] xl:text-white/10"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          Skills
        </h1>
      </div>
      <div className="z-[2] mx-auto grid w-[90%] grid-cols-1 gap-10 lg:m-0 lg:w-full lg:grid-cols-4 xl:gap-[80px]">
        {skillList.slice(0, 4).map((skill, index) => (
          <div key={index} className="lg:m-0">
            <h4
              className="mb-4 font-AvenirHeavy text-[24px] uppercase text-white xl:text-[26px]"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              {skill.title}
            </h4>
            <ul
              className={`${
                skill.skills.length > 7
                  ? "grid grid-cols-2 gap-x-4"
                  : "flex flex-col"
              } gap-2 lg:mt-4`}
            >
              {skill.skills?.map((perSkill, index) => (
                <li
                  key={index}
                  className="list-inside list-disc font-AvenirMedium text-[20px] text-white/60 transition-colors duration-200 hover:text-white xl:text-[22px]"
                  data-aos="fade-down"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  {perSkill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="z-[2] mx-auto mt-10 grid w-[90%] grid-cols-1 gap-10 lg:m-0 lg:mt-10 lg:w-full lg:grid-cols-3 xl:gap-[80px]">
        {skillList.slice(4).map((skill, index) => (
          <div key={index} className="lg:m-0">
            <h4
              className="mb-4 font-AvenirHeavy text-[24px] uppercase text-white xl:text-[26px]"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              {skill.title}
            </h4>
            <ul
              className={`${
                skill.skills.length > 7
                  ? "grid grid-cols-2 gap-x-4"
                  : "flex flex-col"
              } gap-2 lg:mt-4`}
            >
              {skill.skills?.map((perSkill, index) => (
                <li
                  key={index}
                  className="list-inside list-disc font-AvenirMedium text-[20px] text-white/60 transition-colors duration-200 hover:text-white xl:text-[22px]"
                  data-aos="fade-down"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  {perSkill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
