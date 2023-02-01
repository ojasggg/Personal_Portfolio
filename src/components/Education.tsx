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
      <h1 className="absolute top-5 right-0 z-[1] p-0 font-AvenirHeavy text-[200px] uppercase leading-none text-white/10">
        Education
      </h1>

      <div className="z-[2] ml-[700px] flex flex-col gap-6 pt-[120px]">
        {educationList.map((education, index) => (
          <div>
            <p className="font-AvenirBook text-[18px] uppercase text-white/60">
              {education.completedDate}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <h3 className="z-10 p-0 font-AvenirMedium text-[30px] uppercase leading-none text-white">
                {education.degree}
              </h3>
              <div className="h-1 w-10 rounded-full bg-white "></div>
              <p className="z-10 p-0 font-AvenirLight text-[20px] uppercase leading-none text-white/60">
                {education.doneFrom}
              </p>
            </div>
            <div className="mt-4">
              <p className="max-w-[1040px] font-AvenirMedium text-[24px] uppercase leading-10 text-white/60">
                {education.course}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
