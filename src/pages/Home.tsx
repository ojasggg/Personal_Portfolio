import React, { useEffect } from "react";
import ReactGA from "react-ga";
import {
  Hero,
  AboutMe,
  Project,
  ExperienceAndEducation,
  Skills,
  Contact,
  Navbar,
  GoToTop,
  Achievement,
} from "../components";

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <div id="main-container" data-scroll-container>
      {/* <Transition /> */}
      <Navbar />

      <div className="h-[100vh]">
        <Hero />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="achievements">
        <Achievement />
      </div>
      <div id="education">
        <ExperienceAndEducation />
      </div>
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
