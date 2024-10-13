import React from "react";
import { Link } from "react-router-dom";
import gif1 from "../../assets/Gifs/beaming-face-with-smiling-eyes.gif";
import gif2 from "../../assets/Gifs/grinning-face-with-sweat.gif";

type Skill = {
  skillName: string;
  skillSets: string[];
};

const skillLists1: Skill[] = [
  {
    skillName: "languages",
    skillSets: ["Python", "Javascript", "Typescript","Java", "C++", "Kotlin", "HTML/CSS"],
  },
  {
    skillName: "libraries/ framework",
    skillSets: [
      "React.js",
      "Next.js",
      "Spring Boot",
      "Express.js",
      "Flask",
      "REST Framework",
      "Django",
    ],
  },
  {
    skillName : "platforms",
    skillSets : ["Linux", "Windows", "MacOS", "Amazon EC2", "Firebase"]
  }

];

const skillLists2: Skill[] = [
  {
    skillName: "methodologies/ others",
    skillSets: ["Agile Methodology", "Waterfall Methodology", "MVP Strategy","ERD Models", "Use Case Diagram", "User Stories"],
  },
  {
    skillName: "database & tools",
    skillSets: ["MySQL", "MongoDB", "PostgreSQL", "Neo4j", "Docker","Git", "GitHub","Docker", "Postman", "AWS", "MYSQL Workbench", "MongoDB Compass"],
  }
  
]

const Skills = () => {
  return (
    <section className="relative mx-auto  flex h-fit flex-col justify-center gap-16 overflow-hidden lg:h-[100vh] lg:w-[1000px] xl:w-[1200px] mb-10">
      <h1
        className="left-[30vh] z-[-10] p-0 text-center font-AvenirHeavy text-[100px] uppercase leading-none text-white/10 sm:absolute lg:top-[36vh] lg:left-[30vh] lg:text-[200px] lg:text-white/20 xl:top-[40vh] xl:left-[30vh] xl:text-white/10"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="1200"
      >
        skills
      </h1>
      {/* First */}
      <div className="z-[2] m-auto flex w-[90%] flex-col justify-between lg:m-0 lg:w-full lg:flex-row xl:gap-[80px]">
        {skillLists1.map((skill, index) => (
          <div key={index} className="mt-10 first:mt-0 lg:m-0">
            <h4
              className="mb-4 font-AvenirHeavy text-[24px] uppercase text-white xl:text-[26px]"
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
                  className="list-inside list-disc font-AvenirMedium text-[22px] text-white/60 xl:text-[24px]"
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
      {/* Second */}
      <div className="z-[2] m-auto flex w-[90%] flex-col justify-between lg:m-0 lg:w-full lg:flex-row xl:gap-[80px]">
        {skillLists2.map((skill, index) => (
          <div key={index} className="mt-10 first:mt-0 lg:m-0">
            <h4
              className="mb-4 font-AvenirHeavy text-[24px] uppercase text-white xl:text-[26px]"
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
                  className="list-inside list-disc font-AvenirMedium text-[22px] text-white/60 xl:text-[24px]"
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
