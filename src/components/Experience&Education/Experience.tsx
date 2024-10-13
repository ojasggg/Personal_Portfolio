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
          Apr 2024 – May 2024
        </p>
        <div className="flex items-center gap-2 lg:gap-4 lg:pt-2">
          <h3
            className="z-10 p-0 font-AvenirMedium text-[16px] uppercase leading-none text-white lg:text-[26px] xl:text-[30px] uppercase"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            Computer Lab Assistant (Part Time)
          </h3>
          <div
            className="h-[2px] w-10 rounded-full bg-white xl:h-1 "
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          ></div>
          <p
            className="z-10 p-0 font-AvenirLight text-[16px] leading-none text-white/60 lg:text-[18px] xl:text-[20px] uppercase"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            Troy University
          </p>
        </div>
        <div className="mt-4">
        <p
            className="leading-wide max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            ● Led lab sessions for 100+ students in the Introduction to Programming with Python course, providing guidance on coding concepts, debugging, and effective problem-solving techniques 
          </p>
          <p
            className="leading-wide max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10 mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            ● Assisted students enrolled in CS-2250 - Computer Science I with their final projects, offering technical support, debugging assistance, and feedback to improve project outcomes
          </p>
          <p
            className="leading-wide max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10 mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            ● Installed and configured operating systems and software across 30+ computers per semester, ensuring smooth lab operations for over 300 users
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
          Dec 2021 – April 2022
        </p>
        <div className="flex items-center gap-2 lg:gap-4 lg:pt-2">
          <h3
            className="z-10 p-0 font-AvenirMedium text-[16px] uppercase leading-none text-white lg:text-[26px] xl:text-[30px] uppercase"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            Teaching Assistant
          </h3>
          <div
            className="h-[2px] w-10 rounded-full bg-white xl:h-1 "
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          ></div>
          <p
            className="z-10 p-0 font-AvenirLight text-[16px] leading-none text-white/60 lg:text-[18px] xl:text-[20px] uppercase"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            Coventry University (Softwarica College)
          </p>
        </div>
        <div className="mt-4">
          <p
            className="leading-wide max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            ● Graded weekly quizzes for 75+ students in the Developing the Modern Web course (STW205CDE), evaluating knowledge in React.js, REST, and Node.js, and ensuring timely feedback to improve learning outcomes by 15%

          </p>
          <p
            className="leading-wide max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            ● Provided one-on-one virtual support to 40+ students, assisting with final assignment submissions, topic
            selection, and troubleshooting technical challenges, leading to a 95% project completion rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
