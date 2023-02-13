import React from "react";
import { Link } from "react-router-dom";

const ContactLink = () => {
  return (
    <div className="order-last m-auto flex w-[90%] flex-col justify-end gap-6 lg:order-first lg:m-0 lg:w-[50%] lg:gap-12 xl:gap-16">
      {/* Quick Links */}
      <div>
        <h1
          className="mb-2 p-0 font-AvenirRoman text-[12px] uppercase  leading-none text-black xl:text-[14px]"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Quick links
        </h1>
        <ul className="flex items-center gap-[14px] font-AvenirMedium  text-[14px] uppercase text-black underline xl:text-[18px]">
          <li
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            <Link to="/home">home</Link>
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <div className="h-[2px] w-6 rounded-full bg-black "></div>
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="600"
          >
            <div className="h-[2px] w-6 rounded-full bg-black "></div>
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
      {/* Extra Links */}
      <div>
        <h1
          className="mb-2 p-0 font-AvenirRoman text-[12px] uppercase  leading-none text-black xl:text-[14px]"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-offset="0"
          data-aos-duration="1000"
        >
          Extras
        </h1>
        <ul className="flex items-center gap-[14px] font-AvenirMedium text-[14px] uppercase text-black underline xl:text-[18px]">
          <li
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-offset="0"
            data-aos-duration="600"
          >
            <Link to="/files/Resume.pdf" download target="_blank">
              Resume
            </Link>
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="600"
          >
            <div className="h-[2px] w-6 rounded-full bg-black "></div>
          </li>
          <li
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-offset="0"
            data-aos-duration="600"
          >
            <Link to="/site-credits">site credits</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactLink;
