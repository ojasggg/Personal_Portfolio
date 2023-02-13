import { useEffect } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { About, Error, Home, ProjectPage, Projects, SiteCredit } from "./pages";

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
    iconName: "Twitter",
    logo: <BsTwitter size={18} />,
    link: "https://twitter.com/codeOjash",
  },
  {
    iconName: "Email",
    logo: <MdEmail size={20} />,
    link: "#",
  },
];

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // aos init
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
        <Route path="/about" element={<About />} />
        <Route path="/site-credits" element={<SiteCredit />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* Socials Fixed */}
      <div className="fixed bottom-0 z-[100] hidden md:right-[70px] lg:right-[70px] lg:flex xl:right-[100px]">
        <div className="flex flex-col items-center gap-8">
          <ul className="flex flex-col items-center gap-[30px] text-white/60">
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
          <div className="h-24 w-[2px] rounded-full bg-white/60"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
