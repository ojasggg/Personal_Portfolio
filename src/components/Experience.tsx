import { BsArrowUpRight } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="relative">
      <h1 className="absolute top-10 left-0 z-[-1] p-0 font-AvenirHeavy text-[160px] uppercase leading-none text-white/20 xl:text-[200px] xl:text-white/10">
        Experience
      </h1>
      <div className="z-[10] ml-[142px] pt-[120px]">
        <p className="font-AvenirBook text-[18px] text-white/60 ">2021</p>
        <div className="flex items-center gap-4 pt-2">
          <h3 className="z-10 p-0 font-AvenirMedium text-[26px] uppercase leading-none text-white xl:text-[30px]">
            2021 IOT EXPO
          </h3>
          <div className="h-1 w-10 rounded-full bg-white lg:h-[2px] "></div>
          <p className="z-10 p-0 font-AvenirLight text-[18px]  leading-none text-white/60 xl:text-[20px]">
            Softwarica College of IT & E-commerce
          </p>
        </div>
        <div className="mt-4">
          <p className="leading-wide max-w-[1040px] font-AvenirMedium text-[20px] text-white/60 xl:text-[24px] xl:leading-10">
            <span className="font-AvenirHeavy text-white">
              Winner of 2021 IOT EXO
            </span>
            , my team{" "}
            <span className="font-AvenirHeavy text-white">BrightNight</span> we
            created a{" "}
            <span className="font-AvenirHeavy text-white">
              {" "}
              Smart Glasses for visually <br /> impaired people.
            </span>
            Implemented object detection, location tracker, stairs
            detection(tried stairs <br />
            steps count but failed), face detection(to detect relative) all done
            using Python, OvenCV2, <br /> TensorFlow, HoughLinesP Algorithm.
          </p>
        </div>
        <div className="mt-[30px] flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-full bg-white py-[10px] px-[30px] text-black">
            <p className="font-AvenirMedium text-[16px] uppercase">Github</p>
            <BsArrowUpRight size={16} />
          </button>
          <button className="flex items-center gap-2 rounded-full border border-white/60 bg-transparent py-[10px] px-[30px]">
            <p className="font-AvenirMedium text-[16px] uppercase">
              Project Link
            </p>
            <BsArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
