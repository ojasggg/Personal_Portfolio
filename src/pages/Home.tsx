import React from "react";

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
