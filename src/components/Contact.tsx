import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-[#D3D2D0]">
      <div className="relative m-auto flex h-[100vh] flex-col justify-end lg:w-[1100px] xl:w-[1500px]">
        <h1 className="absolute top-3 left-0 z-[1] p-0 font-AvenirHeavy text-[160px] uppercase leading-none text-white/30 xl:text-[200px] xl:text-white/10">
          Contact
        </h1>
        {/* Content and Form */}
        <div className="z-[4] mb-[3%]  flex h-fit justify-end xl:mb-[6%]">
          {/* Links Section */}
          <div className="flex w-[50%] flex-col justify-end gap-12 xl:gap-16">
            {/* Quick Links */}
            <div>
              <h1 className="mb-2 p-0 font-AvenirRoman text-[12px] uppercase  leading-none text-black xl:text-[14px]">
                Quick links
              </h1>
              <ul className="flex items-center gap-[14px] font-AvenirMedium  text-[14px] uppercase text-black underline xl:text-[18px]">
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <div className="h-[2px] w-6 rounded-full bg-black "></div>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <div className="h-[2px] w-6 rounded-full bg-black "></div>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
              </ul>
            </div>
            {/* Extra Links */}
            <div>
              <h1 className="mb-2 p-0 font-AvenirRoman text-[12px] uppercase  leading-none text-black xl:text-[14px]">
                Extras
              </h1>
              <ul className="flex items-center gap-[14px] font-AvenirMedium text-[16px] uppercase text-black underline xl:text-[18px]">
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
                <li>
                  <div className="h-[2px] w-6 rounded-full bg-black "></div>
                </li>
                <li>
                  <Link to="/site-credits">site credits</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-[50%]">
            <h1 className="p-0 font-AvenirHeavy text-[36px] leading-none text-black lg:w-[400px] xl:w-[528px] xl:text-[50px]">
              Would love to hear from you.
            </h1>
            <form className="mt-10 xl:mt-10 xl:w-full">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-[50%] border-b border-black/40 bg-transparent pb-[16px] font-AvenirRoman text-[18px] text-black placeholder:text-black/40 xl:pb-[22px]"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-[50%] border-b border-black/40 bg-transparent pb-[16px] font-AvenirRoman text-[18px] text-black placeholder:text-black/40 xl:pb-[22px]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject *"
                className="mt-[26px] w-full border-b border-black/40 bg-transparent pb-[16px] font-AvenirRoman text-[18px] text-black placeholder:text-black/40 xl:mt-[46px] xl:pb-[22px]"
              />
              <input
                type="text"
                placeholder="Message *"
                className="mt-[26px] w-full border-b border-black/40 bg-transparent font-AvenirRoman text-[18px] text-black placeholder:text-black/40 lg:pb-[100px] xl:mt-[46px] xl:pb-[190px]"
              />
              <button className="flex items-center  gap-[24px] text-black lg:mt-[20px] xl:mt-[50px]">
                <p className="font-AvenirHeavy text-[26px] xl:text-[36px]">
                  Submit
                </p>
                <svg
                  className="w-[16px] xl:w-[24px]"
                  viewBox="0 0 23 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.88038 6.01629C4.89016 6.14937 3.98911 5.52565 3.86783 4.62318C3.74655 3.7207 4.45095 2.88122 5.44117 2.74815L18.9644 0.930745C19.9546 0.797669 20.8556 1.42139 20.9769 2.32386L22.6333 14.6488C22.7546 15.5513 22.0502 16.3908 21.06 16.5238C20.0698 16.6569 19.1687 16.0332 19.0474 15.1307L17.9212 6.75078L3.54848 23.8795C2.93406 24.6118 1.79883 24.7644 1.01288 24.2203C0.226931 23.6763 0.087885 22.6416 0.702311 21.9094L15.0751 4.78061L5.88038 6.01629Z"
                    fill="black"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between border-t border-black/40 py-4 xl:py-5">
          <p className="font-AvenirMedium text-[16px] text-black/60">
            ojasggg@gmail.com
          </p>
          <div>
            <p className="font-AvenirMedium text-[16px] text-black/60">
              &copy; 2023 Ojash Gurung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
