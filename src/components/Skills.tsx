import React from "react";
import { Link } from "react-router-dom";
import gif1 from "../assets/Gifs/beaming-face-with-smiling-eyes.gif";
import gif2 from "../assets/Gifs/grinning-face-with-sweat.gif";

type Skill = {
  skillName: string;
  skillSets: string[];
};

const skillLists: Skill[] = [
  {
    skillName: "languages",
    skillSets: [
      "HTML",
      "CSS",
      "SASS/SCSS",
      "Vanilla Javascript",
      "Typescript",
      "Python",
      "Java",
    ],
  },
  {
    skillName: "Framework/ libraries/ others",
    skillSets: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Framer Motion",
      "Tailwind CSS",
      "Styled Component",
      "MUI",
    ],
  },
  {
    skillName: "database",
    skillSets: ["MongoDB", "MySQL", "PostgreSQL", "Neo4j"],
  },
  {
    skillName: "methodologies/ others",
    skillSets: [
      "Agile Methodology",
      "Waterfall Methodology",
      "MVP Strategy",
      "Design System",
      "Wireframe & Prototyping",
      "Responsive & Adaptive Design",
    ],
  },
];

const Skills = () => {
  return (
    <section className="relative mx-auto flex h-[100vh] flex-col justify-center gap-16 lg:w-[1000px] xl:w-[1200px]">
      <h1 className="absolute z-[-10] p-0 font-AvenirHeavy text-[200px] uppercase leading-none lg:top-[36vh] lg:left-[30vh] lg:text-white/20 xl:top-[40vh] xl:left-[30vh] xl:text-white/10">
        skills
      </h1>
      {/* Top */}
      <div className="z-[2] flex justify-between xl:gap-[80px]">
        {skillLists.map((skill, index) => (
          <div key={index}>
            <h4 className="font-AvenirHeavy text-[16px] uppercase text-white xl:text-[18px]">
              {skill.skillName}
            </h4>
            <ul
              className={`${
                skill.skillSets.length > 7
                  ? "grid grid-cols-2 grid-rows-4"
                  : "flex flex-col"
              } mt-4 gap-2 gap-x-10`}
            >
              {skill.skillSets?.map((perSkill, index) => (
                <li
                  key={index}
                  className="list-inside list-disc font-AvenirMedium text-[16px] text-white/60 xl:text-[18px]"
                >
                  {perSkill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Buttom */}
      <div className="z-[2] flex gap-[160px]">
        <div>
          <h4 className="font-AvenirHeavy text-[18px] uppercase text-white">
            special
          </h4>
          <ul className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <li className="list-inside list-disc items-center font-AvenirMedium text-[16px] text-white/60 xl:text-[18px]">
                Googling
              </li>
              <img src={gif1} alt="Smile Emoji GIF" width={30} />
            </div>
            <li className="list-inside list-disc font-AvenirMedium text-[18px] text-white/60">
              ChatGPT-ing
            </li>
            <li className="list-inside list-disc font-AvenirMedium text-[18px] text-white/60">
              Stack-OverFlow
            </li>
          </ul>
        </div>
        <div>
          <p className="font-AvenirMedium text-[18px] text-white/60">
            Developers need {""}
            <span className="text-white">
              to learn and be updated with latest technologies everyday
            </span>
            , so <br /> this list could get really long{" "}
            <span className="inline-block">
              <img src={gif2} alt="Tense Emoji Gif" width={30} />
            </span>
            .
          </p>
          <p className="mt-2 font-AvenirMedium text-[18px] text-white/60">
            See{" "}
            <Link to="#" className="text-white underline">
              more frameworks/libraries here.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
