import { BsArrowDown } from "react-icons/bs";
import Profile from "../assets/images/profile.png";

const Hero = () => {
  return (
    <section className="flex h-[80vh] flex-col items-center justify-center leading-none">
      {/* <div className="mb-[12px]">
        <img src={Profile} alt="Ojash Gurung" width={200} />
      </div> */}

      <h1 className="mb-[46px] py-0 font-Valencia text-[140px] leading-none text-white">
        Ojash Gurung
      </h1>
      <h3 className="text-center font-AvenirRoman text-[28px]">
        <span>MERN Stack Developer</span> & UI/UX Designer
      </h3>
    </section>
  );
};

export default Hero;
