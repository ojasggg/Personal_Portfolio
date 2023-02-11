import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="relative">
      <h1 className="absolute top-10 left-0 z-[-1] p-0 font-AvenirHeavy text-[70px] uppercase leading-none tracking-tighter text-white/20 lg:text-[160px] xl:text-[200px] xl:text-white/10">
        Experience
      </h1>
      <div className="z-[10] m-auto w-[90%] pt-[160px] lg:ml-[142px] lg:pt-[120px]">
        <p className="font-AvenirBook text-[14px] text-white/60 lg:text-[18px] ">
          2021
        </p>
        <div className="flex items-center gap-2 lg:gap-4 lg:pt-2">
          <h3 className="z-10 p-0 font-AvenirMedium text-[16px] uppercase leading-none text-white lg:text-[26px] xl:text-[30px]">
            2021 IOT EXPO
          </h3>
          <div className="h-[2px] w-10 rounded-full bg-white xl:h-1 "></div>
          <p className="z-10 p-0 font-AvenirLight text-[16px] leading-none text-white/60 lg:text-[18px] xl:text-[20px]">
            Softwarica College of IT & E-commerce
          </p>
        </div>
        <div className="mt-4">
          <p className="leading-wide max-w-[1040px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10">
            <span className="font-AvenirMedium text-white">
              Winner of 2021 IOT EXO
            </span>
            , my team{" "}
            <span className="font-AvenirMedium text-white">BrightNight</span> we
            created a{" "}
            <span className="font-AvenirMedium text-white">
              {" "}
              Smart Glasses for visually <br /> impaired people.
            </span>
            Implemented object detection, location tracker, stairs
            detection(tried stairs <br />
            steps count but failed), face detection(to detect relative) all done
            using Python, OvenCV2, <br /> TensorFlow, HoughLinesP Algorithm.
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4 lg:mt-[30px]">
          <Link
            className="flex items-center gap-2 rounded-full bg-white py-[10px] px-[30px] text-black transition-all duration-200 ease-in hover:scale-105"
            to="https://github.com/ojasggg/2021_IOT_Expo_Projects.git"
            target="_blank"
          >
            <p className="font-AvenirMedium text-[14px] uppercase lg:text-[16px]">
              Github
            </p>
            <BsArrowUpRight size={16} />
          </Link>
          <Link
            className="flex items-center gap-2 rounded-full border border-white/60 bg-transparent py-[10px] px-[30px] transition-all duration-200 ease-in hover:scale-105"
            to="https://github.com/ojasggg/2021_IOT_Expo_Projects"
            target="_blank"
          >
            <p className="font-AvenirMedium text-[14px] uppercase lg:text-[16px]">
              Project Link
            </p>
            <BsArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
