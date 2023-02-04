import React from "react";

const AboutMe = () => {
  return (
    <section className="relative m-auto h-[573px] lg:w-[1200px] xl:w-[1600px]">
      {/* TODO:  Gradiant for all background Headings*/}
      <h1 className="absolute top-10 left-0 z-[-10] p-0 font-AvenirHeavy text-[200px] leading-none text-white/10 lg:text-white/20">
        ABOUT ME
      </h1>
      {/* TODO: Choose Gradiant color for this aboutme paragraph */}
      {/* TODO: Highlight some key points from the paragraph if needed */}
      <div className="z-[2] mr-[57px] ml-[263px] pt-[140px] xl:pt-[160px]">
        <h3 className="w-[95%] bg-gradient-to-r from-white/80 to-white bg-clip-text font-AvenirMedium text-[22px] text-transparent xl:text-[26px]">
          Love to play with design and convert them into functionable websites,
          aiming always to keep it responsive and adaptive, optimized,
          performant and accessible. But I felt things were still missing so I
          explored backend specially RestAPI development, data model schemas and
          database management with deployment of websites. Well there is not
          much to say but I love what I do and love to work on ] ambitious
          projects with positive people in a conducive work environment.
        </h3>
      </div>
    </section>
  );
};

export default AboutMe;
