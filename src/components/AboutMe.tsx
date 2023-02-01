import React from "react";

const AboutMe = () => {
  return (
    <section className="relative h-[573px]">
      <h1 className="absolute top-10 left-0 z-[1] p-0 font-AvenirHeavy text-[200px] leading-none text-white/10">
        ABOUT ME
      </h1>
      <div className="z-[2] mr-[57px] ml-[263px]">
        <h3 className="pt-[150px] font-AvenirLight text-[30px] text-white">
          Love to play with design and convert them into functionable websites,
          aiming always to keep it <br /> responsive and adaptive, optimized,
          performant and accessible. But I felt things were still missing so{" "}
          <br /> I explored backend specially RestAPI development, data model
          schemas and database management <br /> with deployment of websites.
          Well there is not much to say but I love what I do and love to work on{" "}
          <br /> ambitious projects with positive people in a conducive work
          environment.
        </h3>
      </div>
    </section>
  );
};

export default AboutMe;
