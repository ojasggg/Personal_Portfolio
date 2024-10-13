import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Images/BrightNight/1.jpg";
import Img2 from "../../assets/Images/BrightNight/2.jpg";
import Img3 from "../../assets/Images/BrightNight/3.jpg";
import Img11 from "../../assets/Images/Hult2021/1.jpg";
import Img22 from "../../assets/Images/Hult2021/2.jpg";
import Img33 from "../../assets/Images/Hult2021/3.jpg";

const Achievements = () => {
  return (
    <div className="relative mx-auto my-24 h-fit lg:w-[1100px] xl:w-[1500px] ">
      <h1
        className="absolute top-10 left-0 z-[-1] p-0 font-AvenirHeavy text-[70px] uppercase leading-none tracking-tighter text-white/20 lg:text-[160px] xl:text-[200px] xl:text-white/10"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        Achievements
      </h1>
      <div className="lg:flex lg:gap-10 pt-[240px]">
        <div className="grid max-h-fit lg:max-w-[36%] grid-cols-2 grid-rows-2 gap-4 lg:ml-[100px]">
          <div className="col-span-2 w-full">
            <img src={Img2} alt="Bright night" className="rounded" />
          </div>
          <div className="w-full">
            <img
              src={Img1}
              alt="Bright night"
              className=" w-full rounded lg:h-[138px] xl:h-fit"
            />
          </div>
          <div className="w-full">
            <img src={Img3} alt="Bright night" className=" rounded" />
          </div>
        </div>
        <div className="z-[10] mt-0 mx-auto lg:mt-[50px] w-[90%]">
          <p
            className="font-AvenirBook text-[14px] text-white/60 lg:text-[18px]"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            2021
          </p>
          <div className="flex items-center gap-2 lg:gap-4 lg:pt-2">
            <h3
              className="z-10 p-0 font-AvenirMedium text-[14px] uppercase leading-none text-white lg:text-[22px] xl:text-[26px]"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              2021 IOT EXPO
            </h3>
            <div
              className="h-[2px] w-10 rounded-full bg-white xl:h-1 "
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="800"
            ></div>
            <p
              className="z-10 p-0 font-AvenirLight text-[14px] leading-none text-white/60 lg:text-[16px] xl:text-[18px] uppercase"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              Coventry University (Softwarica College)
            </p>
          </div>
          <div className="mt-4">
            <p
              className="leading-wide max-w-[800px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <span
                className="font-AvenirMedium text-white"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                Winner of 2021 IOT EXO
              </span>
              , my team{" "}
              <span
                className="font-AvenirMedium text-white"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                BrightNight
              </span>{" "}
              we created a{" "}
              <span
                className="font-AvenirMedium text-white"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                {" "}
                Smart Glasses for visually impaired people.
              </span>
              Implemented object detection, location tracker, stairs
              detection(tried stairs steps count but failed), face detection(to
              detect relative) all done using Python, OvenCV2, TensorFlow,
              HoughLinesP Algorithm.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 lg:mt-[30px]">
            <Link
              className="flex items-center gap-2 rounded-full bg-white py-[10px] px-[30px] text-black transition-all duration-200 ease-in hover:scale-105"
              to="https://github.com/ojasggg/2021_IOT_Expo_Projects.git"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <p className="font-AvenirMedium text-[14px] uppercase lg:text-[16px]">
                Github
              </p>
              <BsArrowUpRight size={16} />
            </Link>
            <Link
              className="flex items-center gap-2 rounded-full border border-white/60 bg-transparent py-[10px] px-[30px] transition-all duration-200 ease-in hover:scale-105"
              to="https://youtu.be/GX_AfxdekKQ"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <p className="font-AvenirMedium text-[14px] uppercase lg:text-[16px]">
                Project Video
              </p>
              <BsArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        
      </div>
      <div className="lg:flex gap-10 mt-10">
        <div className="grid lg:max-w-[36%] grid-cols-2 grid-rows-2 gap-4 lg:ml-[100px]">
          <div className="row-span-2">
            <img src={Img22} alt="Hult Prize" className="w-full rounded" />
          </div>
          <div className="w-full">
            <img
              src={Img11}
              alt="Hult Prize"
              className=" w-full rounded lg:h-[138px] xl:h-fit"
            />
          </div>
          <div className="w-full">
            <img src={Img33} alt="Hult Prize" className=" rounded" />
          </div>
        </div>
        <div className="z-[10] mx-auto mt-[50px] w-[90%]">
          <p
            className="font-AvenirBook text-[14px] text-white/60 lg:text-[18px]"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            2021
          </p>
          <div className="flex items-center gap-2 lg:gap-4 lg:pt-2">
            <h3
              className="z-10 p-0 font-AvenirMedium text-[14px] uppercase leading-none text-white lg:text-[22px] xl:text-[26px]"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              2021 HULT PRIZE
            </h3>
            <div
              className="h-[2px] w-10 rounded-full bg-white xl:h-1 "
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="800"
            ></div>
            <p
              className="z-10 p-0 font-AvenirLight text-[14px] leading-none text-white/60 lg:text-[16px] xl:text-[18px] uppercase"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              Coventry University (Softwarica College)
            </p>
          </div>
          <div className="mt-4">
            <p
              className="leading-wide max-w-[800px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <span
                className="font-AvenirMedium text-white"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                Runner up of 2021 HULT PRIZE
              </span>
              , my team{" "}
              <span
                className="font-AvenirMedium text-white"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                BrightNight
              </span>{" "}
              we created a{" "}
              <span
                className="font-AvenirMedium text-white"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                {" "}
                Vertical Farming Concept
              </span>
              Implemented object detection, soil fertility check, soil hydration
              check, fertilizer quantity analysis all done using Python,
              TensorFlow and Deep learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
