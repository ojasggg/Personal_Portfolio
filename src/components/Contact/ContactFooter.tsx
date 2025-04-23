import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

type socialItems = {
  iconName: string;
  logo: React.ReactElement<JSX.Element>;
  link: string;
}[];

const socialItems: socialItems = [
  {
    iconName: "Github",
    logo: <BsGithub size={14} />,
    link: "https://github.com/ojasggg",
  },
  {
    iconName: "Linkedin",
    logo: <BsLinkedin size={14} />,
    link: "https://www.linkedin.com/in/ojash-gurung",
  },
  {
    iconName: "Email",
    logo: <MdEmail size={16} />,
    link: "#",
  },
];

const ContactFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="m-auto mt-10 flex w-[90%] justify-between border-t border-black/40 py-4 pb-4  lg:m-0 lg:w-full xl:py-5"
      data-aos="fade-down"
      data-aos-offset="0"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <p className="hidden font-AvenirMedium text-[16px] text-black lg:flex">
        gurungojash0@gmail.com
      </p>
      <ul className="flex items-center gap-[14px] text-black lg:hidden">
        {socialItems.map((socialItem, index) => (
          <li
            key={index}
            className="transition-all duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-white"
          >
            <Link to={socialItem.link} target="_blank">
              {socialItem.logo && socialItem.logo}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <p className="font-AvenirMedium text-[14px] text-black lg:text-[16px]">
          &copy; {currentYear} Ojash Gurung
        </p>
      </div>
    </div>
  );
};

export default ContactFooter;
