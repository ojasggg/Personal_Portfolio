import React from "react";
import Profile from "../assets/Images/Picture.jpg";
import { Contact } from "../components";

const About = () => {
  return (
    <>
      <main className="m-auto mb-40 mt-20 flex h-fit flex-col lg:w-[1100px] xl:w-[1500px]">
        <section className="relative h-fit">
          <div className="absolute top-3 left-0 z-[1] ">
            <h1 className="p-0 font-Valencia text-[140px] uppercase leading-none text-white xl:text-[200px]">
              Ojash
            </h1>
            <h1 className="absolute left-28 top-28 p-0 font-Valencia text-[140px] uppercase leading-none text-white xl:top-36 xl:text-[200px]">
              Gurung
            </h1>
          </div>
          <div className="mt-[100px] flex items-center justify-center">
            <div className="relative lg:h-[600px] lg:w-[500px] xl:h-[800px] xl:w-[600px]">
              <img
                className=" object-cover lg:h-[600px] lg:w-[500px] xl:h-[800px] xl:w-[600px]"
                src={Profile}
              />
              <div className="absolute top-6 left-6 z-[-1] border border-white/60 lg:h-[600px] lg:w-[500px] xl:h-[800px] xl:w-[600px]"></div>
            </div>
          </div>
        </section>
        <section className="mt-40">
          <div className="flex h-fit flex-col gap-0 font-Valencia text-[200px] leading-none tracking-wide">
            <p className="p-0 leading-none">Web Designer</p>
            <div className="m-0 flex w-full justify-end">
              <p className="p-0 leading-none">Full -Stack</p>
            </div>
            <p className="p-0 leading-none">Developer</p>
          </div>
          <div className="mt-20 flex gap-10">
            <div className="flex flex-col items-center gap-2 py-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-10 font-AvenirHeavy text-black">
                2000
              </div>
              <div className="h-40 w-[2px] rounded-full bg-white"></div>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-10 font-AvenirHeavy text-black">
                2023
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="w-[95%] bg-gradient-to-r from-white/80 to-white bg-clip-text font-AvenirMedium text-[22px] text-transparent xl:text-[26px]">
                Hi, I was born in 2000 in Kathmandu, Nepal. Ever since my
                childhood I loved to play Cricket and loved Computers. I go my
                first PC at the age of 11 thanks to my Aunt.
              </h3>
              <h3 className="w-[95%] bg-gradient-to-r from-white/80 to-white bg-clip-text font-AvenirMedium text-[22px] text-transparent xl:text-[26px]">
                I got hang of web development and started mentoring some of my
                local students. But web development has many fields from
                front-end, back-end, dev-sec-ops(devops), QA, SEO, UI/UX.
              </h3>
              <h3 className="w-[95%] bg-gradient-to-r from-white/80 to-white bg-clip-text font-AvenirMedium text-[22px] text-transparent xl:text-[26px]">
                But I Love to play with design and convert them into
                functionable websites, aiming always to keep it responsive and
                adaptive, optimized, performant and accessible. But I felt
                things were still missing so I explored backend specially
                RestAPI development, data model schemas and database management
                with deployment of websites. Well there is not much to say but I
                love what I do and love to work on ambitious projects with
                positive people in a conducive work environment.
              </h3>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default About;
