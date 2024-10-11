const educationList = [
  {
    degree: "Monroe University",
    completedDate: "Expected graduation, Sep 2026",
    doneFrom: "New York",
    course: "Master's in Computer Science",
  },
  {
    degree: "Troy University",
    completedDate: "Jan 2024 - May 2024",
    doneFrom: "Troy, Alabama",
    course: "Master's in Computer Science - Artificial Intelligence (Transferred)",
  },
  {
    degree: "Coventry University",
    completedDate: "March 2019 - Aug 2022",
    doneFrom: "Coventry, UK",
    course: "Bachelor's in computer science (GPA 3.41)",
  },
];

const Education = () => {
  return (
    <div className="relative">
      <h1
        className="absolute top-20 right-0 z-[-1] p-0 font-AvenirHeavy text-[66px] uppercase leading-none text-white/20 lg:text-[160px] xl:text-[200px] xl:text-white/10"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        education
      </h1>

      <div className="z-[2] m-auto flex w-[90%] flex-col items-end pt-[180px] lg:pt-[160px] xl:pt-[170px]">
        <div className="flex flex-col gap-8">
          {educationList.map((education, index) => (
            <div key={index}>
              <p
                className="font-AvenirBook text-[14px] uppercase text-white/60 lg:text-[18px]"
                data-aos="fade-left"
                data-aos-delay={`${300 + index * 100}`}
                data-aos-duration="800"
              >
                {education.completedDate}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <h3
                  className="z-10 p-0 font-AvenirMedium text-[16px] uppercase leading-none text-white lg:text-[26px] xl:text-[30px]"
                  data-aos="fade-left"
                  data-aos-delay={`${400 + index * 100}`}
                  data-aos-duration="800"
                >
                  {education.degree}
                </h3>
                <div
                  className="h-[2px] w-10 rounded-full bg-white xl:h-1 "
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
                  {education.doneFrom}
                </p>
              </div>
              <div className="mt-2">
                <p
                  className="leading-wide max-w-[1040px] font-AvenirRoman  text-[16px] text-white/60 lg:text-[18px] xl:text-[24px] xl:leading-10"
                  data-aos="fade-up"
                  data-aos-delay={`${200 + index * 100}`}
                  data-aos-duration="1000"
                >
                  {education.course}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
