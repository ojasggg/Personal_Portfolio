import Education from "./Education";
import Experience from "./Experience";

const ExperienceAndEducation = () => {
  return (
    <section
      className="mx-auto my-24 h-fit lg:w-[1100px] xl:w-[1500px] "
      data-scroll-section
    >
      <Experience />
      <Education />
    </section>
  );
};

export default ExperienceAndEducation;
