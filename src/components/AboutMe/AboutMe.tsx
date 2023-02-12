import React from "react";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section
      className="relative m-auto h-fit max-md:w-[90vw] lg:h-[100vh] lg:w-[1200px] xl:w-[1600px]"
      data-scroll-section
    >
      <h1
        className=" absolute top-10 left-0 z-[-10] p-0 font-AvenirHeavy text-[80px] leading-none text-white/20 md:text-[140px] lg:text-[200px] lg:text-white/20"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        ABOUT ME
      </h1>
      {/* TODO: Highlight some key points from the paragraph if needed */}
      <div className="z-[2] mr-0 ml-[60px] pt-[150px] md:pt-[120px] lg:mr-[57px] lg:ml-[263px] lg:pt-[140px] xl:pt-[160px]">
        <h3
          className="w-[95%] bg-gradient-to-r from-white/80 to-white bg-clip-text font-AvenirMedium text-[16px] text-transparent sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1400"
        >
          Love to play with design and convert them into{" "}
          <span
            className="text-white"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            functionable websites, aiming always to keep it responsive and
            adaptive, optimized, performant and accessible.
          </span>{" "}
          But I felt things were still missing so I explored backend specially
          RestAPI development, data model schemas and database management with
          deployment of websites. Well there is not much to say but I love what
          I do and love to work on{" "}
          <span
            className="text-white"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            ambitious projects with positive people in a conducive work
            environment.
          </span>
        </h3>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link
          className="flex w-fit items-center gap-2 rounded-xl border border-white/60 p-3 px-4 text-[20px] text-white/60 transition-all duration-200 ease-in hover:scale-105 max-md:p-2 max-md:text-[16px]"
          to="/about"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <p>About me</p>
          <RiShareBoxFill size={20} />
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
