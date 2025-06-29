import { useEffect } from "react";
import ReactGA from "react-ga";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { Error, Home, ProjectPage, SiteCredit } from "./pages";
import GoToTop from "./components/GoToTop/GoToTop";
// Import aos
import Aos from "aos";
import "aos/dist/aos.css";

type socialItems = {
  iconName: string;
  logo: React.ReactElement<JSX.Element>;
  link: string;
}[];

const socialItems: socialItems = [
  {
    iconName: "Github",
    logo: <BsGithub size={18} />,
    link: "https://github.com/ojasggg",
  },
  {
    iconName: "Linkedin",
    logo: <BsLinkedin size={18} />,
    link: "https://www.linkedin.com/in/ojash-gurung",
  },

  {
    iconName: "Email",
    logo: <MdEmail size={20} />,
    link: "#",
  },
];

ReactGA.initialize("UA-221451115-2");

const App = () => {
  const { pathname, hash } = useLocation();

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("gurungojash0@gmail.com");
    const target = e.currentTarget;
    const tooltip = target.querySelector("span");
    if (tooltip) {
      tooltip.textContent = "Email Copied!";
      setTimeout(() => {
        tooltip.textContent = "Copy Email";
      }, 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const timeoutId = setTimeout(handleScroll, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);

  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 200,
    });
  });

  return (
    <div className="relative mx-auto w-screen overflow-x-hidden">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/site-credits" element={<SiteCredit />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <GoToTop />
      {/* Socials Fixed */}
      <div className="fixed top-0 z-[100] hidden md:right-[70px] lg:right-[70px] lg:flex xl:right-[100px]">
        <div className="flex flex-col items-center gap-8">
          <div className="h-16 w-[2px] rounded-full bg-white/60"></div>

          <ul className="flex flex-col items-center gap-[30px] text-white/60">
            {socialItems.map((socialItem, index) => (
              <li
                key={index}
                className="group relative transition-all duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-white"
              >
                <Link
                  to={socialItem.link}
                  target="_blank"
                  onClick={
                    socialItem.iconName === "Email"
                      ? handleEmailClick
                      : undefined
                  }
                >
                  {socialItem.logo && socialItem.logo}
                  <span className="absolute -right-5 -top-6 -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-2 py-1 text-sm text-white/40 opacity-0 transition-opacity group-hover:opacity-100">
                    {socialItem.iconName === "Email"
                      ? "Copy Email"
                      : `Visit ${socialItem.iconName}`}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
