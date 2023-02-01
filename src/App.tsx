import {
  Navbar,
  Hero,
  AboutMe,
  Project,
  ExperienceAndEducation,
  Skills,
  Contact,
} from "./components";

const App = () => {
  return (
    <>
      <div className="m-auto w-[1680px] bg-black">
        <Navbar />
        <Hero />
        <AboutMe />
        <Project />
        <ExperienceAndEducation />
        <Skills />
      </div>
      <div className="bg-[#D3D2D0]">
        <Contact />
      </div>
    </>
  );
};

export default App;
