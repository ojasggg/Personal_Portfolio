import React from "react";
import {
  BsArrowUpRight,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="relative m-auto flex h-[100vh] w-[1680px] flex-col justify-end">
      <h1 className="absolute top-10 left-0 z-[1] p-0 font-AvenirHeavy text-[200px] uppercase leading-none text-white/20">
        Contact
      </h1>
      <div className="flex h-full">
        <div className="mb-[70px] flex w-[40%] flex-col justify-end gap-16">
          <div>
            <h1 className="mb-2 p-0 font-AvenirRoman text-[14px]  uppercase leading-none text-black">
              Quick links
            </h1>
            <ul className="flex items-center gap-[14px] font-AvenirMedium text-[18px] uppercase text-black underline">
              <li>
                <Link to="/home">home</Link>
              </li>
              <li>
                <div className="h-[3px] w-8 rounded-full bg-black "></div>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <div className="h-[3px] w-8 rounded-full bg-black "></div>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 p-0 font-AvenirRoman text-[14px]  uppercase leading-none text-black">
              Extras
            </h1>
            <ul className="flex items-center gap-[14px] font-AvenirMedium text-[18px] uppercase text-black underline">
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <div className="h-[3px] w-8 rounded-full bg-black "></div>
              </li>
              <li>
                <Link to="/site-credits">site credits</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full w-[60%]">
          <h1 className="mt-36 w-[528px] p-0 font-AvenirHeavy text-[46px] leading-none text-black">
            Would love to hear from you .
          </h1>
          <form className="mt-[60px] w-[810px]">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-[405px] border-b border-black/40 bg-transparent pb-[22px] font-AvenirRoman text-[18px] text-black placeholder:text-black/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-[405px] border-b border-black/40 bg-transparent pb-[22px] font-AvenirRoman text-[18px] text-black placeholder:text-black/40"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="mt-[46px] w-full border-b border-black/40 bg-transparent pb-[22px] font-AvenirRoman text-[18px] text-black placeholder:text-black/40"
            />
            <input
              type="text"
              placeholder="Message"
              className="mt-[46px] w-full border-b border-black/40 bg-transparent pb-[190px] font-AvenirRoman text-[18px] text-black placeholder:text-black/40"
            />
            <button className="mt-[50px] flex items-center gap-[30px] text-black">
              <p className="font-AvenirHeavy text-[36px]">Submit</p>
              <svg
                width="23"
                height="25"
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
      <div className="flex justify-between border-t border-black/40 py-5">
        <ul className="flex gap-[34px] text-black/40">
          <li>
            <Link to={"https://github.com/ojasggg"}>
              <BsGithub size={20} />
            </Link>
          </li>
          <li>
            <Link to={"https://www.linkedin.com/in/ojash-gurung"}>
              <BsLinkedin size={20} />
            </Link>
          </li>
          <li>
            <Link to={"https://twitter.com/codeOjash"}>
              <BsTwitter size={20} />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <MdEmail size={22} />
            </Link>
          </li>
        </ul>
        <div>
          <p className="font-AvenirMedium text-[16px] text-black/40">
            &copy; 2023 Ojash Gurung
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
