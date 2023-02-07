import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Navbar,
  Hero,
  AboutMe,
  Project,
  ExperienceAndEducation,
  Skills,
  Contact,
} from "./components";

type socialItems = {
  iconName: string;
  logo: React.ReactElement<JSX.Element>;
  link: string;
};

const socialItems: socialItems[] = [
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
  // TODO: Mobile Responsive left
  // TODO: Animation Left
  return (
    <div>
      <div className="h-[100vh]">
        <Navbar />
        <Hero />
      </div>
      <AboutMe />
      <Project />
      <ExperienceAndEducation />
      <Skills />
      <Contact />
      <div className="fixed bottom-0 lg:right-[70px] xl:right-[100px]">
        <div className="flex flex-col items-center gap-8">
          <ul className="flex flex-col items-center gap-[30px] text-white/60">
            {socialItems.map((socialItem, index) => (
              <li key={index}>
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
