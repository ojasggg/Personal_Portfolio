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
  Transition,
} from "../components";

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <div id="main-container" data-scroll-container>
      <Transition />
      <Navbar />
      <div className="h-[100vh]">
        <Hero />
      </div>
      <AboutMe />
      <Project />
      <ExperienceAndEducation />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
