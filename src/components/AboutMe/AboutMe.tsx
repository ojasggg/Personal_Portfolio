import React from "react";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="relative m-auto h-[100vh] lg:w-[1200px] xl:w-[1600px]">
      <h1 className="absolute top-10 left-0 z-[-10] p-0 font-AvenirHeavy text-[200px] leading-none text-white/10 lg:text-white/20">
        ABOUT ME
      </h1>
      {/* TODO: Highlight some key points from the paragraph if needed */}
      <div className="z-[2] mr-[57px] ml-[263px] pt-[140px] xl:pt-[160px]">
        <h3 className="w-[95%] bg-gradient-to-r from-white/80 to-white bg-clip-text font-AvenirMedium text-[22px] text-transparent xl:text-[26px]">
          Love to play with design and convert them into{" "}
          <span className="text-white">
            functionable websites, aiming always to keep it responsive and
            adaptive, optimized, performant and accessible.
          </span>{" "}
          But I felt things were still missing so I explored backend specially
          RestAPI development, data model schemas and database management with
          deployment of websites. Well there is not much to say but I love what
          I do and love to work on{" "}
          <span className="text-white">
            ambitious projects with positive people in a conducive work
            environment.
          </span>
        </h3>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link
          className="flex w-fit items-center gap-2 rounded-xl border border-white/60 p-3 px-4 text-[20px] text-white/60"
          to="/about"
        >
          <p>About me</p>
          <RiShareBoxFill size={20} />
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
