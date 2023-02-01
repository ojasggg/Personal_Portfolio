import { BsArrowUpRight } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="relative">
      <h1 className="absolute top-10 left-0 z-[1] p-0 font-AvenirHeavy text-[200px] uppercase leading-none text-white/10">
        Experience
      </h1>
      <div className="z-[2] ml-[142px] pt-[120px]">
        <p className="font-AvenirBook text-[18px] text-white/60 ">2021</p>
        <div className="flex items-center gap-4 pt-2">
          <h3 className="z-10 p-0 font-AvenirMedium text-[30px] leading-none text-white">
            2021 IOT EXPO
          </h3>
          <div className="h-1 w-10 rounded-full bg-white "></div>
          <p className="z-10 p-0 font-AvenirLight text-[20px] leading-none text-white/60">
            Softwarica College of IT & E-commerce
          </p>
        </div>
        <div className="mt-4">
          <p className="max-w-[1040px] font-AvenirMedium text-[24px] leading-10 text-white/60">
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
          <button className="flex items-center gap-2 rounded-full bg-[#581B98] py-[10px] px-[30px]">
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
