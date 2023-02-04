const educationList = [
  {
    degree: "bachelor degree",
    completedDate: "aug 2022",
    doneFrom: "softwarica college of it and e-commerce",
    course: "bsc(hons) in computing",
  },
  {
    degree: "grade 11 & 12",
    completedDate: "feb 2019",
    doneFrom: "golden gate int'l secondary school",
    course: "bsc(hons) in computing",
  },
  {
    degree: "slc",
    completedDate: "2016",
    doneFrom: "apex life school",
    course: "",
  },
];

const Education = () => {
  return (
    <div className="relative">
      <h1 className="absolute top-20 right-0 z-[-1] p-0 font-AvenirHeavy text-[160px] uppercase leading-none text-white/20 xl:text-[200px] xl:text-white/10">
        education
      </h1>

      <div className="z-[2] flex flex-col items-end pt-[160px] xl:pt-[170px]">
        <div className="flex flex-col gap-6">
          {educationList.map((education, index) => (
            <div key={index}>
              <p className="font-AvenirBook text-[18px] uppercase text-white/60">
                {education.completedDate}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <h3 className="z-10 p-0 font-AvenirMedium text-[26px] uppercase leading-none text-white xl:text-[30px]">
                  {education.degree}
                </h3>
                <div className="h-[2px] w-10 rounded-full bg-white xl:h-1 "></div>
                <p className="z-10 p-0 font-AvenirLight text-[20px] leading-none text-white/60">
                  {education.doneFrom}
                </p>
              </div>
              <div className="mt-4">
                <p className="leading-wide max-w-[1040px] font-AvenirMedium text-[20px] text-white/60 xl:text-[24px] xl:leading-10">
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
