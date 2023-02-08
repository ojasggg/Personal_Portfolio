import React from "react";
import { Link } from "react-router-dom";

const ContactLink = () => {
  return (
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
  );
};

export default ContactLink;
