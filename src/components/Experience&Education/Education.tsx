import { education } from "../../constants/education";

const Education = () => {
  return (
    <section className="mt-24">
      <div className="mb-8 flex items-end justify-end">
        <h1
          className="font-AvenirHeavy text-[66px] uppercase leading-none text-white/20 lg:text-[160px] xl:text-[200px] xl:text-white/10"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          education
        </h1>
      </div>

      <div className="m-auto flex w-[90%] flex-col items-end">
        <div className="flex flex-col gap-8">
          {education.map((edu, index) => (
            <div className="flex items-center gap-6 ">
              <div>
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={`${edu.university} logo`}
                    className="h-8 w-8 object-cover lg:h-10 lg:w-10"
                    data-aos="fade-left"
                    data-aos-delay={`${300 + index * 100}`}
                    data-aos-duration="800"
                  />
                )}
              </div>
              <div key={index}>
                <p
                  className="font-AvenirBook text-[14px] uppercase text-white/60 lg:text-[18px]"
                  data-aos="fade-left"
                  data-aos-delay={`${300 + index * 100}`}
                  data-aos-duration="800"
                >
                  {edu.duration}
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <h3
                    className="z-10 p-0 font-AvenirMedium text-[16px] uppercase leading-none text-white lg:text-[26px] xl:text-[30px]"
                    data-aos="fade-left"
                    data-aos-delay={`${400 + index * 100}`}
                    data-aos-duration="800"
                  >
                    {edu.degree}
                  </h3>
                  <div
                    className="h-[2px] w-10 rounded-full bg-white xl:h-1"
                    data-aos="fade-left"
                    data-aos-delay={`${400 + index * 100}`}
                    data-aos-duration="800"
                  ></div>
                  <p
                    className="z-10 p-0 font-AvenirLight text-[16px] leading-none text-white/60 lg:text-[20px]"
                    data-aos="fade-left"
                    data-aos-delay={`${400 + index * 100}`}
                    data-aos-duration="800"
                  >
                    {edu.university}
                  </p>
                </div>
                <div className="mt-2">
                  <p
                    className="leading-wide max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-[18px] xl:text-[24px] xl:leading-10"
                    data-aos="fade-up"
                    data-aos-delay={`${200 + index * 100}`}
                    data-aos-duration="1000"
                  >
                    {edu.location}
                  </p>
                  {edu.note && (
                    <p
                      className="mt-2 font-AvenirRoman text-[14px] text-white/40 lg:text-[16px]"
                      data-aos="fade-up"
                      data-aos-delay={`${300 + index * 100}`}
                      data-aos-duration="1000"
                    >
                      {edu.note}
                    </p>
                  )}
                  {edu.gpa && (
                    <p
                      className="mt-1 font-AvenirMedium text-[14px] text-white/40 lg:text-[16px]"
                      data-aos="fade-up"
                      data-aos-delay={`${300 + index * 100}`}
                      data-aos-duration="1000"
                    >
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
