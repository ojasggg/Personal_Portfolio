import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="relative">
      <h1
        className="absolute top-10 left-0 z-[-1] p-0 font-AvenirHeavy text-[70px] uppercase leading-none tracking-tighter text-white/20 lg:text-[160px] xl:text-[200px] xl:text-white/10"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        Experience
      </h1>
      <div className="z-[10] m-auto w-[90%] pt-[160px] lg:ml-[142px] lg:pt-[160px]">
        <p
          className="font-AvenirBook text-[14px] text-white/60 lg:text-[18px]"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          Sep 2022 - Present
        </p>
        <div className="flex items-center gap-2 lg:gap-4 lg:pt-2">
          <h3
            className="z-10 p-0 font-AvenirMedium text-[16px] uppercase leading-none text-white lg:text-[26px] xl:text-[30px]"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            JUNIOR REACT DEVELOPER
          </h3>
          <div
            className="h-[2px] w-10 rounded-full bg-white xl:h-1 "
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          ></div>
          <p
            className="z-10 p-0 font-AvenirLight text-[16px] leading-none text-white/60 lg:text-[18px] xl:text-[20px]"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            LUCID TECHNOLOGY PVT. LTD.
          </p>
        </div>
        <div className="mt-4">
          <p
            className="leading-wide max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Created visually appealing website widgets that align with the
            product's branding and style guidelines, maintaining consistency
            throughout the web application.
          </p>
        </div>
      </div>
      <div className="z-[10] m-auto w-[90%] pt-[160px] lg:ml-[142px] lg:pt-[60px]">
        <p
          className="font-AvenirBook text-[14px] text-white/60 lg:text-[18px]"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          NOV 2021 - MAY 2022
        </p>
        <div className="flex items-center gap-2 lg:gap-4 lg:pt-2">
          <h3
            className="z-10 p-0 font-AvenirMedium text-[16px] uppercase leading-none text-white lg:text-[26px] xl:text-[30px]"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            TEACHING ASSISTANT
          </h3>
          <div
            className="h-[2px] w-10 rounded-full bg-white xl:h-1 "
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          ></div>
          <p
            className="z-10 p-0 font-AvenirLight text-[16px] leading-none text-white/60 lg:text-[18px] xl:text-[20px]"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            SOFTWARICA COLLEGE OF IT & E-COMMERCE, WEB DEPARTMENT
          </p>
        </div>
        <div className="mt-4">
          <p
            className="leading-wide max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Assisted teachers in planning and implementing quiz and lesson
            presentations. Provided one-on-one support to students needing
            additional help in projects during pandemic through Microsoft Teams.
            Graded weekly quiz for Courses in Developing the Modern Web
            (STW205CDE).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
