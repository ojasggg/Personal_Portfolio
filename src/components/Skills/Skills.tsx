import React from "react";
import { Link } from "react-router-dom";
import gif1 from "../../assets/Gifs/beaming-face-with-smiling-eyes.gif";
import gif2 from "../../assets/Gifs/grinning-face-with-sweat.gif";

type Skill = {
  skillName: string;
  skillSets: string[];
};

const skillLists: Skill[] = [
  {
    skillName: "languages",
    skillSets: ["Python", "Java", "Javascript", "Typescript"],
  },
  {
    skillName: "libraries/ framework/ others",
    skillSets: [
      "Linear Regression",
      "Regression Model",
      " Classification",
      "Gradient Descent",
      "Cost Function",
      "Scikit-Learn",
      "NumPy",
      "React.js",
      "RestAPI Development",
    ],
  },
  {
    skillName: "database",
    skillSets: ["MySQL", "MongoDB", "PostgreSQL", "Neo4j"],
  },
  {
    skillName: "methodologies/ others",
    skillSets: ["Agile Methodology", "Waterfall Methodology", "MVP Strategy"],
  },
];

const Skills = () => {
  return (
    <section className="relative mx-auto  flex h-fit flex-col justify-center gap-16 overflow-hidden lg:h-[100vh] lg:w-[1000px] xl:w-[1200px]">
      <h1
        className="left-[30vh] z-[-10] p-0 text-center font-AvenirHeavy text-[100px] uppercase leading-none text-white/10 sm:absolute lg:top-[36vh] lg:left-[30vh] lg:text-[200px] lg:text-white/20 xl:top-[40vh] xl:left-[30vh] xl:text-white/10"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="1200"
      >
        skills
      </h1>
      {/* Top */}
      <div className="z-[2] m-auto flex w-[90%] flex-col justify-between lg:m-0 lg:w-full lg:flex-row xl:gap-[80px]">
        {skillLists.map((skill, index) => (
          <div key={index} className="mt-10 first:mt-0 lg:m-0">
            <h4
              className="mb-4 font-AvenirHeavy text-[16px] uppercase text-white xl:text-[18px]"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              {skill.skillName}
            </h4>
            <ul
              className={`${
                skill.skillSets.length > 7
                  ? "grid grid-cols-2 grid-rows-4"
                  : "flex flex-col"
              } gap-2 lg:mt-4 lg:gap-2 lg:gap-x-10`}
            >
              {skill.skillSets?.map((perSkill, index) => (
                <li
                  key={index}
                  className="list-inside list-disc font-AvenirMedium text-[16px] text-white/60 xl:text-[18px]"
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
      {/* Buttom */}
      <div className="z-[2] mx-auto flex w-[90%] flex-col lg:m-0 lg:w-full lg:flex-row lg:gap-[160px]">
        <div className="">
          <h4
            className="font-AvenirHeavy text-[16px] uppercase text-white"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            special
          </h4>
          <ul className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <li
                className="list-inside list-disc items-center font-AvenirMedium text-[16px] text-white/60 xl:text-[18px]"
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                Googling
              </li>
              <img
                src={gif1}
                alt="Smile Emoji GIF"
                className="w-[26px] lg:w-[30px]"
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="1000"
              />
            </div>
            <li
              className="list-inside list-disc font-AvenirMedium text-[16px] text-white/60"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              ChatGPT-ing
            </li>
            <li
              className="list-inside list-disc font-AvenirMedium text-[16px] text-white/60"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Stack-OverFlow
            </li>
          </ul>
        </div>
        <div className="my-10 lg:my-0">
          <p
            className="font-AvenirMedium text-[16px] text-white/60 lg:text-[18px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1400"
          >
            Developers need{" "}
            <span
              className="text-white"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              to constantly learn and stay updated with the latest technologies.
            </span>
            Thus, the list of <br /> technologies we need to learn is long. {""}
            <span
              className="inline-block"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <img
                src={gif2}
                alt="Tense Emoji Gif"
                className="w-[26px] lg:w-[30px] "
              />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
