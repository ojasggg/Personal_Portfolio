import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const navItems = [
  { itemName: "Home", active: true, link: "/home" },
  { itemName: "About", active: false, link: "/about" },
  { itemName: "Projects", active: false, link: "/projects" },
  { itemName: "Resume", active: false, link: "/resume" },
];

const Navbar = () => {
  return (
    <nav className="mt-[30px] flex items-center justify-between">
      <div>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="30" fill="#581B98" />
          <path
            d="M19.88 30.64C19.88 29.1733 20.1333 27.84 20.64 26.64C21.1467 25.44 21.84 24.4133 22.72 23.56C23.6 22.68 24.6533 22 25.88 21.52C27.1067 21.04 28.44 20.8 29.88 20.8C31.32 20.8 32.6533 21.04 33.88 21.52C35.1067 22 36.16 22.68 37.04 23.56C37.92 24.4133 38.6133 25.44 39.12 26.64C39.6267 27.84 39.88 29.1733 39.88 30.64C39.88 32.1067 39.6267 33.44 39.12 34.64C38.6133 35.84 37.92 36.88 37.04 37.76C36.16 38.6133 35.1067 39.28 33.88 39.76C32.6533 40.24 31.32 40.48 29.88 40.48C28.44 40.48 27.1067 40.24 25.88 39.76C24.6533 39.28 23.6 38.6133 22.72 37.76C21.84 36.88 21.1467 35.84 20.64 34.64C20.1333 33.44 19.88 32.1067 19.88 30.64ZM23.24 30.64C23.24 31.6267 23.3867 32.5467 23.68 33.4C24 34.2267 24.4533 34.96 25.04 35.6C25.6267 36.2133 26.32 36.7067 27.12 37.08C27.9467 37.4267 28.8667 37.6 29.88 37.6C30.8933 37.6 31.8 37.4267 32.6 37.08C33.4267 36.7067 34.1333 36.2133 34.72 35.6C35.3067 34.96 35.7467 34.2267 36.04 33.4C36.36 32.5467 36.52 31.6267 36.52 30.64C36.52 29.6533 36.36 28.7467 36.04 27.92C35.7467 27.0667 35.3067 26.3333 34.72 25.72C34.1333 25.08 33.4267 24.5867 32.6 24.24C31.8 23.8667 30.8933 23.68 29.88 23.68C28.8667 23.68 27.9467 23.8667 27.12 24.24C26.32 24.5867 25.6267 25.08 25.04 25.72C24.4533 26.3333 24 27.0667 23.68 27.92C23.3867 28.7467 23.24 29.6533 23.24 30.64Z"
            fill="white"
          />
        </svg>
      </div>
      <ul className="flex items-center justify-center gap-[75px] ">
        {navItems.map((navItem, index) => (
          <li
            key={index}
            className={`${
              navItem.active ? "text-white" : "text-white/60"
            } font-AvenirRoman  text-[16px] uppercase`}
          >
            <Link to={navItem.link}>{navItem.itemName}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-[34px] text-white">
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
    </nav>
  );
};

export default Navbar;
