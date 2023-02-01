import { BsArrowDown } from "react-icons/bs";
import Profile from "../assets/images/profile.png";

const Hero = () => {
  return (
    <section className="relative flex h-[90vh] flex-col items-center pt-[160px] leading-none">
      <div className="mb-[12px]">
        <img src={Profile} alt="Ojash Gurung" width={200} />
      </div>
      <div>
        <h1 className="mb-[46px] py-0 font-Valencia text-[140px] leading-none text-white">
          Ojash Gurung
        </h1>
        <h3 className="text-center font-AvenirRoman text-[28px]">
          <span className="rounded-full bg-[#581B98] py-[9px] px-[30px]">
            MERN Stack Developer
          </span>{" "}
          & UI/UX Designer
        </h3>
      </div>
      <div className="absolute bottom-10 left-0 flex flex-col items-center gap-2">
        <div className="arrow-animate">
          <BsArrowDown size={40} />
        </div>
        <p className="font-AvenirRoman text-[18px] uppercase text-white/60">
          Scroll
        </p>
      </div>
    </section>
  );
};

export default Hero;
