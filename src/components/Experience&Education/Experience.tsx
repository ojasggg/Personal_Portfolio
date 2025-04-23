import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { experience } from "../../constants/experience";

const Experience = () => {
  return (
    <section>
      <h1
        className="font-AvenirHeavy text-[70px] uppercase leading-none tracking-tighter text-white/20 lg:text-[160px] xl:text-[200px] xl:text-white/10"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        Experience
      </h1>
      {experience.map((exp, index) => (
        <div
          key={index}
          className="z-[10] m-auto w-[90%] pt-[160px] first:pt-[160px] lg:ml-[142px] lg:pt-[60px]"
        >
          <p
            className="font-AvenirBook text-[14px] text-white/60 lg:text-[18px]"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            {exp.duration}
          </p>
          <div className="flex items-center gap-2 lg:gap-4 lg:pt-2">
            <h3
              className="z-10 p-0 font-AvenirMedium text-[16px] uppercase leading-none text-white lg:text-[26px] xl:text-[30px]"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              {exp.role}
            </h3>
            <div
              className="h-[2px] w-10 rounded-full bg-white xl:h-1"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="800"
            ></div>

            {exp.link ? (
              <Link
                to={exp.link}
                target="_blank"
                className="flex items-center gap-2 text-white/60 transition-colors duration-200 hover:text-white"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="800"
              >
                <p
                  className="z-10 p-0 font-AvenirLight text-[16px] uppercase leading-none lg:text-[18px] xl:text-[20px]"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="800"
                >
                  {exp.company}
                </p>
                <BsArrowUpRight size={20} />
              </Link>
            ) : (
              <p
                className="z-10 p-0 font-AvenirLight text-[16px] uppercase leading-none text-white/60 lg:text-[18px] xl:text-[20px]"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="800"
              >
                {exp.company}
              </p>
            )}
          </div>
          <div className="mt-4">
            <p
              className="leading-wide mb-4 max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {exp.description}
            </p>
            {exp.highlights.map((highlight, hIndex) => (
              <p
                key={hIndex}
                className="leading-wide mt-2 max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-lg xl:text-[24px] xl:leading-10"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                ● {highlight}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
